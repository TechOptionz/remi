// Selling the ebooks through Stripe (the "Link Email + Stripe" workflow, Oct 2026). Server only.
//  1. A book's Buy button posts to /api/books/checkout, which opens Stripe Checkout for that book at its `price`.
//  2. Stripe calls /api/books/webhook when the payment succeeds: the buyer is emailed a private download link (Resend)
//     and the team a sale notification, once per order.
//  3. Stripe returns the buyer to /books/thank-you, which shows the same download buttons straight away.
//  4. /api/books/download checks the link is genuine and unexpired (7 days) and hands over the file from private
//     Vercel Blob storage (books/<slug>.<format>, uploaded with scripts/upload-books.mjs).
// Env: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, BOOKS_DOWNLOAD_SECRET (any long random string), BLOB_READ_WRITE_TOKEN,
// plus the Resend and Upstash variables the site already has.
import { createHmac, timingSafeEqual } from 'node:crypto';
import Stripe from 'stripe';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';
import { BOOKS, type Book } from '@/content/books';

export type Format = NonNullable<Book['files']>[number];
export const FORMAT_LABEL: Record<Format, string> = { pdf: 'PDF', epub: 'EPUB' };
export const LINK_DAYS = 7;

let stripeClient: Stripe | undefined;
export function stripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
  return (stripeClient ??= new Stripe(key));
}

/** A book can be bought here once Stripe is set up and the book lists its files (read at build time on the book pages). */
export const onSale = (b: Book) => !!process.env.STRIPE_SECRET_KEY && !b.buyHref && !!b.files?.length;
export const bookBySlug = (slug: string) => BOOKS.find(b => b.slug === slug);
/** The price in cents, from the price the page shows ("AUD $14.95"), so the page and the charge never disagree. */
export const amountOf = (b: Book) => Math.round(parseFloat(b.price.replace(/[^0-9.]/g, '')) * 100);
export const blobPath = (b: Book, f: Format) => `books/${b.slug}.${f}`;

// ---------- Download links: the order, the book and an expiry, signed so they cannot be made up or altered ----------
const secret = () => {
  const s = process.env.BOOKS_DOWNLOAD_SECRET;
  if (!s) throw new Error('BOOKS_DOWNLOAD_SECRET is not set');
  return s;
};
const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url');

export function downloadToken(sessionId: string, slug: string, expires: number) {
  const payload = Buffer.from(JSON.stringify({ s: sessionId, b: slug, e: expires })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

/** The order and book a link is for, or null when it is altered or out of date. */
export function readToken(token: string): { sessionId: string; slug: string; expires: number } | null {
  const [payload, sig] = token.split('.');
  if (!payload || !sig || !process.env.BOOKS_DOWNLOAD_SECRET) return null;
  const expected = Buffer.from(sign(payload)), given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const { s, b, e } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (typeof s !== 'string' || typeof b !== 'string' || typeof e !== 'number' || Date.now() > e) return null;
    return { sessionId: s, slug: b, expires: e };
  } catch { return null; }
}

/** The download links for a paid order: one per format, valid for LINK_DAYS from the purchase (or from `from`, for a resend). */
export function downloadLinks(origin: string, session: Stripe.Checkout.Session, b: Book, from = session.created * 1000) {
  const expires = from + LINK_DAYS * 864e5;
  const t = downloadToken(session.id, b.slug, expires);
  // href shows the file in the browser (where it can); download saves it (dl=1 asks Blob for an attachment)
  return { expires, links: (b.files ?? []).map(f => {
    const href = `${origin}/api/books/download?t=${t}&f=${f}`;
    return { format: f, label: FORMAT_LABEL[f], href, download: `${href}&dl=1` };
  }) };
}

/** A completed Checkout session, with the book it bought, when it has been paid for. */
export async function paidOrder(sessionId: string) {
  const session = await stripe().checkout.sessions.retrieve(sessionId);
  const b = bookBySlug(session.metadata?.book ?? '');
  return session.payment_status === 'paid' && b ? { session, book: b } : null;
}

// ---------- Delivery: once per order, even when Stripe sends the same event again ----------
let redisClient: Redis | null | undefined;
function redis() {
  if (redisClient !== undefined) return redisClient;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return (redisClient = url && token ? new Redis({ url, token }) : null);
}

/** True the first time an order is seen (without Redis every event is treated as new). */
export async function firstDelivery(sessionId: string) {
  const r = redis();
  if (!r) return true;
  return (await r.set(`books:delivered:${sessionId}`, Date.now(), { nx: true, ex: 60 * 60 * 24 * 90 })) === 'OK';
}
/** Lets Stripe's retry deliver again when sending failed. */
export async function forgetDelivery(sessionId: string) { await redis()?.del(`books:delivered:${sessionId}`); }

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const dateOf = (ms: number) => new Date(ms).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Sydney' });
const money = (cents: number | null, currency: string | null) => cents == null ? '' : `${(currency ?? 'aud').toUpperCase()} $${(cents / 100).toFixed(2)}`;

/** Emails the buyer their download link and, for a new sale, tells the team. Throws when the buyer's email fails.
 *  `resend`: a fresh link (LINK_DAYS from now) for a buyer whose link ran out; the team is not notified again. */
export async function deliver(origin: string, session: Stripe.Checkout.Session, b: Book, resendLink = false) {
  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM) throw new Error('Resend is not configured');
  const email = session.customer_details?.email;
  if (!email) throw new Error(`Order ${session.id} has no email address`);
  const resend = new Resend(RESEND_API_KEY);
  const name = session.customer_details?.name?.split(' ')[0];
  const { expires, links } = downloadLinks(origin, session, b, resendLink ? Date.now() : undefined);
  const until = dateOf(expires);
  const p = 'style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#221b17"';
  const btn = 'style="display:inline-block;margin:4px 8px 4px 0;padding:12px 22px;background:#a8401a;color:#fbf1e3;border-radius:2px;font-family:sans-serif;font-size:14px;font-weight:600;letter-spacing:.06em;text-decoration:none"';

  const sent = await resend.emails.send({
    from: RESEND_FROM, to: email,
    subject: `Your copy of ${b.title}`,
    html: `<p ${p}>${name ? `Hi ${esc(name)},` : 'Hello,'}</p>
<p ${p}>Thank you for buying <strong>${esc(b.title)}</strong>. Your ebook is ready to download:</p>
<p>${links.map(l => `<a href="${l.download}" ${btn}>Download ${esc(b.title)} (${l.label})</a>`).join('')}</p>
<p ${p}>The link works until ${until}. Save the file somewhere you can find it again; if the link runs out, reply to this email and we will send a new one.</p>
<p ${p}>Remi Pearson</p>`,
    text: `${name ? `Hi ${name},` : 'Hello,'}\n\nThank you for buying ${b.title}. Your ebook is ready to download:\n\n${links.map(l => `${l.label}: ${l.download}`).join('\n')}\n\nThe link works until ${until}. Save the file somewhere you can find it again; if the link runs out, reply to this email and we will send a new one.\n\nRemi Pearson`,
  });
  if (sent.error) throw new Error(`Delivery email failed: ${sent.error.message}`);

  // Best effort: the buyer already has their book
  if (RESEND_TO && !resendLink) {
    const rows: [string, string][] = [['Book', b.title], ['Paid', money(session.amount_total, session.currency)], ['Buyer', session.customer_details?.name ?? ''], ['Email', email], ['Stripe order', session.id], ['Link valid until', until]];
    const note = await resend.emails.send({
      from: RESEND_FROM, to: RESEND_TO.split(',').map(s => s.trim()).filter(Boolean), replyTo: email,
      subject: `Book sale — ${b.title} — ${email}`,
      html: `<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows.filter(r => r[1]).map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#666">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`).join('')}</table>`,
      text: rows.filter(r => r[1]).map(([k, v]) => `${k}: ${v}`).join('\n'),
    });
    if (note.error) console.error('Book sale notification failed', note.error);
  }
}
