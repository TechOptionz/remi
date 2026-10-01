// Every form on the site posts here (via submitLead in src/lib/forms.ts). Sends the team a notification through
// Resend, replies to enquiries / invitations, and adds newsletter and "tell me when it's ready" sign-ups as contacts.
// Env: RESEND_API_KEY, RESEND_FROM ("Remi Pearson <hello@domain>"), RESEND_TO (comma-separated), RESEND_SEGMENT_ID (optional).
import { Resend } from 'resend';

export const runtime = 'nodejs';

const KINDS = ['enquiry', 'invitation', 'waitlist', 'newsletter'] as const;
type Kind = (typeof KINDS)[number];

const SUBJECTS: Record<Kind, string> = {
  enquiry: 'New enquiry',
  invitation: 'New invitation',
  waitlist: 'Rebel Yell waitlist',
  newsletter: 'Newsletter sign-up',
};

// What the person hears back, where a reply makes sense. Waitlist and newsletter confirm on screen only.
const AUTO_REPLY: Partial<Record<Kind, { subject: string; body: string }>> = {
  enquiry: { subject: 'Thank you for your enquiry', body: 'Thank you for getting in touch. Remi’s team has your enquiry and will reply within two business days.' },
  invitation: { subject: 'Thank you for your invitation', body: 'Thank you for your invitation. My team will read it and come back to you with the next sensible step.' },
};

const LABELS: Record<string, string> = {
  firstName: 'First name', why_now: 'Why now', when: 'Date, location or online', audience: 'Who will be in the room',
  explore: 'What to explore', fit: 'Why the right fit', stuck: 'Where the organisation is stuck', attempted: 'Already attempted',
  who: 'Who needs to be involved', about: 'About', segment: 'List',
};
const label = (key: string) => LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
// The lists a topic page's sign-up can join (content/products.ts SEGMENTS). Each can have its own Resend segment:
// RESEND_SEGMENT_ID_LEADERSHIP, _BUSINESS, _PERSONAL_DEVELOPMENT, _CONSULTATIVE_SALES, _RELATIONSHIPS.
const SEGMENTS = ['leadership', 'business', 'personal-development', 'consultative-sales', 'relationships'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: object, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }

  const { kind, fields } = (payload ?? {}) as { kind?: string; fields?: Record<string, unknown> };
  if (!KINDS.includes(kind as Kind) || !fields || typeof fields !== 'object') return json({ error: 'Invalid request.' }, 400);

  // Plain text values only, trimmed and capped
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields).slice(0, 30)) {
    if (typeof value === 'string' && value.trim()) data[key.slice(0, 40)] = value.trim().slice(0, 5000);
  }
  if (data.segment && !SEGMENTS.includes(data.segment)) delete data.segment;
  const email = data.email ?? '';
  if (!EMAIL.test(email) || email.length > 254) return json({ error: 'Please enter a valid email address.' }, 400);

  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO, RESEND_SEGMENT_ID } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    console.error('Resend is not configured: set RESEND_API_KEY, RESEND_FROM and RESEND_TO.');
    return json({ error: 'Email is not set up yet.' }, 500);
  }
  const resend = new Resend(RESEND_API_KEY);
  const type = kind as Kind;
  const who = data.name ?? data.firstName ?? email;
  const topic = data.interest ?? data.invitation ?? data.product ?? data.segment;
  const subject = `${SUBJECTS[type]}${data.product ? ` — ${data.product}` : ''}${topic && !data.product ? ` — ${topic}` : ''} — ${oneLine(who).slice(0, 80)}`;

  const rows = Object.entries(data);
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: RESEND_TO.split(',').map(s => s.trim()).filter(Boolean),
    replyTo: email,
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
  // Newsletter and "tell me when it's ready" sign-ups join the contacts; the confidential Rebel Yell waitlist does not
  if (type === 'newsletter' || (type === 'waitlist' && data.product)) {
    const own = data.segment ? process.env[`RESEND_SEGMENT_ID_${data.segment.toUpperCase().replace(/-/g, '_')}`] : undefined;
    const segmentIds = [...new Set([RESEND_SEGMENT_ID, own].filter((id): id is string => !!id))];
    const added = await resend.contacts.create({
      email, firstName: data.firstName || undefined,
      ...(segmentIds.length ? { segments: segmentIds.map(id => ({ id })) } : {}),
    });
    if (added.error) console.error('Resend contact failed', added.error);
  }

  return json({ ok: true });
}
