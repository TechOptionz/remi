// Selling programs through Stripe (for now only CAM for Leaders, SOLD_HERE in content/checkout.ts), on the same account and webhook as the ebooks (lib/book-sales.ts).
// Which programs are on sale, their prices and their Thinkific courses: content/checkout.ts.
//  1. A program's buy buttons link to /api/products/checkout?product=<slug>, which opens Stripe Checkout at the price
//     its page shows: plus 10% GST as its own receipt line for a "+ GST" price, otherwise with the GST included shown.
//  2. Stripe calls /api/books/webhook (the one endpoint for every sale) when the payment succeeds. The buyer is enrolled
//     in the program's Thinkific course(s) (lib/thinkific.ts: a new student also gets Thinkific's own email to set a
//     password), then emailed how to start, and the team gets a sale notification; once per order.
//  3. Stripe returns the buyer to /products/thank-you, which shows the same sign-in link straight away.
// Without THINKIFIC_ACCESS_TOKEN (or THINKIFIC_API_KEY) / THINKIFIC_SUBDOMAIN the buyer is told their access details will follow and the team's
// notification says to enrol them by hand.
import type Stripe from 'stripe';
import { Resend } from 'resend';
import { productBySlug, type Product } from '@/content/products';
import { coursesOf } from '@/content/checkout';
import { stripe } from '@/lib/book-sales';
import { enrol, schoolSignIn, thinkificReady } from '@/lib/thinkific';

/** Where the buyer starts: the school's sign-in page (THINKIFIC_SCHOOL_URL, or <subdomain>.thinkific.com), once
 *  enrolment is set up. */
export const accessUrl = () => (thinkificReady() ? schoolSignIn() : null);

// Australian GST, found (or made once) in Stripe so receipts show it: 10% added on top ("exclusive") for the "+ GST"
// prices, and 10% shown inside the price ("inclusive") for the others.
const gstRates: Partial<Record<'inclusive' | 'exclusive', Promise<string>>> = {};
export function gstRateId(kind: 'inclusive' | 'exclusive') {
  return (gstRates[kind] ??= (async () => {
    const inclusive = kind === 'inclusive';
    const { data } = await stripe().taxRates.list({ active: true, inclusive, limit: 100 });
    const found = data.find(r => r.percentage === 10 && r.display_name === 'GST' && r.country === 'AU');
    if (found) return found.id;
    const made = await stripe().taxRates.create({ display_name: 'GST', percentage: 10, inclusive, country: 'AU', jurisdiction: 'AU', description: `Australian GST (${inclusive ? 'included' : 'added'})` });
    return made.id;
  })().catch(e => { delete gstRates[kind]; throw e; }));
}

/** A completed Checkout session for a program, with the program it bought, when it has been paid for. */
export async function paidProductOrder(sessionId: string) {
  const session = await stripe().checkout.sessions.retrieve(sessionId);
  const product = productBySlug(session.metadata?.product ?? '');
  return session.payment_status === 'paid' && product ? { session, product } : null;
}

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const money = (cents: number | null | undefined, currency: string | null) => cents == null ? '' : `${(currency ?? 'aud').toUpperCase()} $${(cents / 100).toFixed(2)}`;

/** Emails the buyer their access and tells the team. Throws when the buyer's email fails. `resendLink`: buyer only. */
export async function deliverProduct(session: Stripe.Checkout.Session, product: Product, resendLink = false) {
  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM) throw new Error('Resend is not configured');
  const email = session.customer_details?.email;
  if (!email) throw new Error(`Order ${session.id} has no email address`);
  const resend = new Resend(RESEND_API_KEY);
  const name = session.customer_details?.name?.split(' ')[0];
  // Enrol first: if Thinkific refuses, this throws and Stripe retries the whole delivery later.
  const courses = thinkificReady() ? coursesOf(product.slug) : null;
  const student = courses ? await enrol(courses, email, session.customer_details?.name) : null;
  const access = student ? accessUrl() : null;
  const p = 'style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#221b17"';
  const btn = 'style="display:inline-block;margin:4px 0;padding:12px 22px;background:#a8401a;color:#fbf1e3;border-radius:2px;font-family:sans-serif;font-size:14px;font-weight:600;letter-spacing:.06em;text-decoration:none"';
  const how = !access
    ? 'Your access details will follow by email shortly (within one business day). If they haven’t arrived, simply reply to this email.'
    : student?.isNew
      ? 'Your place in the program is ready. You will also receive a separate email from Remi’s online school to set your password; once it is set, use the button below to sign in and start. Keep this email: the link is how you come back to the program.'
      : 'Your place in the program is ready. Sign in to Remi’s online school with your usual email and password to start. Keep this email: the link is how you come back to the program.';

  const sent = await resend.emails.send({
    from: RESEND_FROM, to: email,
    subject: `Welcome to ${product.title}`,
    html: `<p ${p}>${name ? `Hi ${esc(name)},` : 'Hello,'}</p>
<p ${p}>Thank you for joining <strong>${esc(product.title)}</strong>. ${how}</p>
${access ? `<p><a href="${esc(access)}" ${btn}>Start ${esc(product.title)}</a></p>` : ''}
<p ${p}>Your receipt comes separately from Stripe.</p>
<p ${p}>Remi Pearson</p>`,
    text: `${name ? `Hi ${name},` : 'Hello,'}\n\nThank you for joining ${product.title}. ${how}\n\n${access ? `${access}\n\n` : ''}Your receipt comes separately from Stripe.\n\nRemi Pearson`,
  });
  if (sent.error) throw new Error(`Welcome email failed: ${sent.error.message}`);

  if (RESEND_TO && !resendLink) {
    const rows: [string, string][] = [
      ['Program', product.title], ['Paid', money(session.amount_total, session.currency)],
      ['GST', session.total_details?.amount_tax ? money(session.total_details.amount_tax, session.currency) : ''],
      ['Buyer', session.customer_details?.name ?? ''], ['Email', email], ['Stripe order', session.id],
      ['Access', student ? `Enrolled in Thinkific (${student.isNew ? 'new student, welcome email sent' : 'existing student'})` : 'ACTION NEEDED: enrol the buyer in Thinkific and send them their access details'],
    ];
    const note = await resend.emails.send({
      from: RESEND_FROM, to: RESEND_TO.split(',').map(s => s.trim()).filter(Boolean), replyTo: email,
      subject: `Program sale — ${product.title} — ${email}`,
      html: `<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows.filter(r => r[1]).map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#666">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`).join('')}</table>`,
      text: rows.filter(r => r[1]).map(([k, v]) => `${k}: ${v}`).join('\n'),
    });
    if (note.error) console.error('Program sale notification failed', note.error);
  }
}
