// Every form on the site posts here (via submitLead in src/lib/forms.ts). Sends the team a notification through
// Resend, replies to enquiries / invitations, and adds sign-ups and invitations as contacts, sorted into segments.
// Env: RESEND_API_KEY, RESEND_FROM ("Remi Pearson <hello@domain>"), RESEND_TO (comma-separated), RESEND_SEGMENT_ID (optional).
// Optional TURNSTILE_SECRET_KEY: every submission must then carry a Cloudflare Turnstile token (see lib/forms.ts).
import { Resend } from 'resend';

export const runtime = 'nodejs';

const KINDS = ['enquiry', 'invitation', 'waitlist', 'newsletter', 'feedback'] as const;
type Kind = (typeof KINDS)[number];

const SUBJECTS: Record<Kind, string> = {
  enquiry: 'New enquiry',
  invitation: 'New invitation',
  waitlist: 'Rebel Yell waitlist',
  newsletter: 'Newsletter sign-up',
  feedback: 'Reader feedback', // "Was this helpful?" and the private question forms on articles and Perspectives
};
// A waitlist sign-up that names a product is a "tell me when it's ready" form (NotifyForm, TriadNotify), not Rebel Yell
const NOTIFY_SUBJECT = 'Tell me when it’s ready';
// …except a free series' registration form (components/wdk-landing/RegisterForm.tsx, aol-landing/RegisterForm.tsx)
const FREE_SERIES = ['Why Do I Keep Doing This?', 'Attachment or Love?'];
const REGISTER_SUBJECT = 'Free series registration';
const SEGMENT_NAMES: Record<string, string> = {
  leadership: 'Leadership', business: 'Business', 'personal-development': 'Personal development',
  'consultative-sales': 'Consultative sales', relationships: 'Relationships',
};

/** What this sign-up is about, from the form's own fields: its product, list, interest or invitation, else the page it was on. */
function topicOf(type: Kind, d: Record<string, string>) {
  const page = d.page ? `${d.page} page` : undefined;
  switch (type) {
    case 'enquiry': return [d.interest, d.about].filter(Boolean).join(': ') || page;
    case 'invitation': return d.invitation || page;
    case 'waitlist': return d.product; // Rebel Yell's own form names no product: its subject already says Rebel Yell
    case 'newsletter': return (d.segment && `${SEGMENT_NAMES[d.segment]} list`) || d.topic || page;
    case 'feedback': return [d.about || page, d.helpful && `Helpful: ${d.helpful}`].filter(Boolean).join(' — ');
  }
}

// What the person hears back, where a reply makes sense. Waitlist and newsletter confirm on screen only.
const AUTO_REPLY: Partial<Record<Kind, { subject: string; body: string }>> = {
  enquiry: { subject: 'Thank you for your enquiry', body: 'Thank you for getting in touch. Remi’s team has your enquiry and will reply within two business days.' },
  invitation: { subject: 'Thank you for your invitation', body: 'Thank you for your invitation. My team will read it and come back to you with the next sensible step.' },
};

const LABELS: Record<string, string> = {
  firstName: 'First name', marketing: 'Ideas and program invitations', why_now: 'Why now', when: 'Date, location or online', audience: 'Who will be in the room',
  explore: 'What to explore', fit: 'Why the right fit', stuck: 'Where the organisation is stuck', attempted: 'Already attempted',
  who: 'Who needs to be involved', about: 'About', helpful: 'Was it helpful?', message: 'Question or feedback', segment: 'List', page: 'Sent from', url: 'Page address',
};
const label = (key: string) => LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
// The lists a topic page's sign-up can join (content/products.ts SEGMENTS).
const SEGMENTS = ['leadership', 'business', 'personal-development', 'consultative-sales', 'relationships'];

// Resend segments, so the contacts list can be filtered by what each person signed up for. Each key's segment is found
// in Resend by its name and created there the first time someone joins it, so nothing has to be set up by hand;
// RESEND_SEGMENT_ID_<KEY> (e.g. RESEND_SEGMENT_ID_THE_SHIFT) pins a key to an existing segment instead.
// Invitations and the Rebel Yell waitlist join their own segment only, never the general RESEND_SEGMENT_ID list.
const LISTS: Record<string, string> = {
  ...SEGMENT_NAMES, invitation: 'Invite Remi', 'rebel-yell': 'Waitlist — Rebel Yell',
  'the-shift': 'Waitlist — The Shift', 'selling-from-stage': 'Waitlist — Selling from Stage',
  'why-do-i-keep-doing-this': 'Free series — Why Do I Keep Doing This?', 'attachment-or-love': 'Free series — Attachment or Love?',
};
// "Tell me when it's ready" products with a waitlist segment of their own (by the `product` their form sends)
const PRODUCT_LISTS: Record<string, string> = {
  'The Shift': 'the-shift', 'Selling from Stage': 'selling-from-stage', 'Why Do I Keep Doing This?': 'why-do-i-keep-doing-this',
  'Attachment or Love?': 'attachment-or-love',
};

const segmentIds = new Map<string, string>(); // name → id, kept while the function instance is warm
async function segmentId(resend: Resend, key: string) {
  const pinned = process.env[`RESEND_SEGMENT_ID_${key.toUpperCase().replace(/-/g, '_')}`];
  if (pinned) return pinned;
  const name = LISTS[key];
  if (!segmentIds.has(name)) {
    const { data } = await resend.segments.list({ limit: 100 });
    for (const s of data?.data ?? []) segmentIds.set(s.name, s.id);
  }
  if (!segmentIds.has(name)) {
    const { data, error } = await resend.segments.create({ name });
    if (error || !data) { console.error('Resend segment could not be created', name, error); return undefined; }
    segmentIds.set(name, data.id);
  }
  return segmentIds.get(name);
}
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: object, status = 200) => Response.json(body, { status });

// Cloudflare Turnstile: the token submitLead gets from the widget, checked with Cloudflare. Off until TURNSTILE_SECRET_KEY is set.
async function humanCheck(token: unknown, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== 'string' || !token || token.length > 2048) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, remoteip: request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '' }),
    });
    const result = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (!result.success) console.error('Turnstile rejected a form', result['error-codes']);
    return !!result.success;
  } catch (e) {
    console.error('Turnstile could not be reached', e);
    return true; // Cloudflare down: let the lead through rather than lose it
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }

  const { kind, fields, token } = (payload ?? {}) as { kind?: string; fields?: Record<string, unknown>; token?: unknown };
  if (!KINDS.includes(kind as Kind) || !fields || typeof fields !== 'object') return json({ error: 'Invalid request.' }, 400);
  if (!(await humanCheck(token, request))) return json({ error: 'We could not confirm you are not a robot. Please refresh the page and try again.' }, 403);

  // Plain text values only, trimmed and capped
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields).slice(0, 30)) {
    if (typeof value === 'string' && value.trim()) data[key.slice(0, 40)] = value.trim().slice(0, 5000);
  }
  // Hidden field only a bot fills in: pretend it went through and send nothing
  if (data.fax) return json({ ok: true });
  if (data.segment && !SEGMENTS.includes(data.segment)) delete data.segment;
  const email = data.email ?? '';
  // Feedback may be anonymous; everything else needs an address to reply to
  const anonymous = kind === 'feedback' && !email;
  if (!anonymous && (!EMAIL.test(email) || email.length > 254)) return json({ error: 'Please enter a valid email address.' }, 400);
  if (kind === 'feedback' && !data.helpful && !data.message) return json({ error: 'Please write your question or feedback.' }, 400);

  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO, RESEND_SEGMENT_ID } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    console.error('Resend is not configured: set RESEND_API_KEY, RESEND_FROM and RESEND_TO.');
    return json({ error: 'Email is not set up yet.' }, 500);
  }
  const resend = new Resend(RESEND_API_KEY);
  const type = kind as Kind;
  const who = data.name ?? data.firstName ?? (email || (data.helpful ? '' : 'anonymous'));
  const topic = topicOf(type, data);
  const heading = type === 'waitlist' && data.product ? (FREE_SERIES.includes(data.product) ? REGISTER_SUBJECT : NOTIFY_SUBJECT) : type === 'feedback' && data.message ? 'Reader question' : SUBJECTS[type];
  const subject = [heading, topic && oneLine(topic).slice(0, 120), oneLine(who).slice(0, 80)]
    .filter(Boolean).join(' — ');

  const rows = Object.entries(data);
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: RESEND_TO.split(',').map(s => s.trim()).filter(Boolean),
    ...(email ? { replyTo: email } : {}),
    subject,
    html: `<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows.map(([k, v]) =>
      `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#666">${esc(label(k))}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('')}</table>`,
    text: rows.map(([k, v]) => `${label(k)}: ${v}`).join('\n'),
  });
  if (error) {
    console.error('Resend notification failed', error);
    return json({ error: 'We could not send that just now. Please try again.' }, 502);
  }

  // Best effort from here: the lead has already reached the team
  const reply = AUTO_REPLY[type];
  if (reply) {
    const name = data.name ? `Hi ${esc(oneLine(data.name).split(' ')[0])},` : 'Hello,';
    const sent = await resend.emails.send({
      from: RESEND_FROM, to: email, subject: reply.subject,
      html: `<p style="font-family:sans-serif;font-size:15px;line-height:1.6">${name}</p><p style="font-family:sans-serif;font-size:15px;line-height:1.6">${reply.body}</p>`,
      text: `${data.name ? `Hi ${oneLine(data.name).split(' ')[0]},` : 'Hello,'}\n\n${reply.body}`,
    });
    if (sent.error) console.error('Resend auto-reply failed', sent.error);
  }
  // Sign-ups and invitations join the contacts, each in the segments for what it was about (enquiries and feedback do not).
  // Newsletter and "tell me when it's ready" sign-ups also join the general list; invitations and Rebel Yell do not.
  const rebelYell = type === 'waitlist' && !data.product;
  // A form with a marketing choice (marketing = "Yes" / "No") left unticked joins only its product's own segment
  const ownListOnly = type === 'waitlist' && data.marketing === 'No' && !!data.product && !!PRODUCT_LISTS[data.product];
  const keys = type === 'invitation' ? ['invitation']
    : rebelYell ? ['rebel-yell']
    : ownListOnly ? [PRODUCT_LISTS[data.product]]
    : type === 'newsletter' || type === 'waitlist' ? [data.segment, data.product && PRODUCT_LISTS[data.product]] : [];
  if (keys.length) {
    // One call at a time: Resend allows only a few requests a second
    const ids = type === 'invitation' || rebelYell || ownListOnly ? [] : [RESEND_SEGMENT_ID];
    for (const key of keys) if (key) ids.push(await segmentId(resend, key));
    const segments = [...new Set(ids.filter((id): id is string => !!id))];
    const [firstName, ...rest] = oneLine(data.firstName ?? data.name ?? '').split(' ');
    const added = await resend.contacts.create({
      email, firstName: firstName || undefined, lastName: (!data.firstName && rest.join(' ')) || undefined,
      ...(segments.length ? { segments: segments.map(id => ({ id })) } : {}),
    });
    // Someone already in the contacts (e.g. a newsletter reader now joining a waitlist): add them to the new segments
    if (added.error) {
      let failed;
      for (const segmentId of segments) failed = (await resend.contacts.segments.add({ email, segmentId })).error ?? failed;
      if (failed || !segments.length) console.error('Resend contact failed', added.error, failed);
    }
  }

  return json({ ok: true });
}
