// Consent records for the weekly teaching emails (content/consent.ts). Server only.
// Every yes and every unsubscribe is appended to `consent:weekly:log` (newest first, never edited) in the same Upstash
// Redis store as lib/helpful.ts, and the person's current choice is kept in `consent:weekly:status:<email>`.
// The team reads both at /stats/consent?key=<STATS_KEY> (CSV: /api/consent?key=<STATS_KEY>).
// Alongside the log, the person's choice is applied in Resend (segment "Weekly teaching from Remi" and the topic of the
// same name, which defaults to opted out so no existing contact receives it) and in GoHighLevel (tags).
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';
import { WEEKLY_CONSENT, WEEKLY_CONSENT_VERSIONS } from '@/content/consent';
import { tagGhl } from '@/lib/ghl';

export const WEEKLY_NAME = 'Weekly teaching from Remi';
export const WEEKLY_TAG = 'Weekly teaching';
export const WEEKLY_OUT_TAG = 'Weekly teaching — unsubscribed';

export type ConsentEvent = {
  at: string;                 // ISO date and time
  email: string;
  name?: string;
  action: 'opt_in' | 'opt_out';
  form?: string;              // e.g. "Benchmarking: What Good Actually Looks Like — waitlist"
  page?: string;
  url?: string;
  version?: string;           // the wording's version (opt-ins)
  wording?: string;           // the exact words agreed to (opt-ins)
  source: 'Waitlist form' | 'Unsubscribe page' | 'Team';
};
export type ConsentStatus = { status: 'opted_in' | 'opted_out'; at: string; name?: string };

const LOG = 'consent:weekly:log';
const statusKey = (email: string) => `consent:weekly:status:${email}`;
export const normalEmail = (email: string) => email.trim().toLowerCase();

let client: Redis | null | undefined;
function redis() {
  if (client !== undefined) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}
export const consentStoreEnabled = () => !!redis();

export const wordingOf = (version?: string) =>
  (version && WEEKLY_CONSENT_VERSIONS[version]) ? { version, wording: WEEKLY_CONSENT_VERSIONS[version] } : { version: WEEKLY_CONSENT.version, wording: WEEKLY_CONSENT.text };

async function writeEvent(e: ConsentEvent) {
  const r = redis();
  if (!r) { console.error('Consent not stored: Upstash is not configured', e); return false; }
  const status: ConsentStatus = { status: e.action === 'opt_in' ? 'opted_in' : 'opted_out', at: e.at, ...(e.name ? { name: e.name } : {}) };
  await r.pipeline().lpush(LOG, JSON.stringify(e)).set(statusKey(e.email), JSON.stringify(status)).exec();
  return true;
}

export async function statusOf(email: string): Promise<ConsentStatus | null> {
  const v = await redis()?.get<ConsentStatus | string>(statusKey(normalEmail(email)));
  return !v ? null : typeof v === 'string' ? JSON.parse(v) : v;
}

/** Every recorded event, newest first. */
export async function consentLog(): Promise<ConsentEvent[]> {
  const rows = (await redis()?.lrange<ConsentEvent | string>(LOG, 0, -1)) ?? [];
  return rows.map(v => (typeof v === 'string' ? JSON.parse(v) : v));
}

/** Everyone's current choice, from the log (newest event per address wins). */
export function currentChoices(log: ConsentEvent[]) {
  const seen = new Map<string, ConsentEvent>();
  for (const e of log) if (!seen.has(e.email)) seen.set(e.email, e);
  return [...seen.values()];
}

// ---- Resend: the segment people are in and the topic that lets them leave it without unsubscribing from everything ----
const ids: { segment?: string; topic?: string } = {};
async function weeklySegment(resend: Resend) {
  if (process.env.RESEND_SEGMENT_ID_WEEKLY) return process.env.RESEND_SEGMENT_ID_WEEKLY;
  if (ids.segment) return ids.segment;
  const { data } = await resend.segments.list({ limit: 100 });
  ids.segment = data?.data.find(s => s.name === WEEKLY_NAME)?.id;
  if (!ids.segment) ids.segment = (await resend.segments.create({ name: WEEKLY_NAME })).data?.id;
  return ids.segment;
}
async function weeklyTopic(resend: Resend) {
  if (process.env.RESEND_TOPIC_ID_WEEKLY) return process.env.RESEND_TOPIC_ID_WEEKLY;
  if (ids.topic) return ids.topic;
  const { data } = await resend.topics.list();
  ids.topic = data?.data.find(t => t.name === WEEKLY_NAME)?.id;
  if (!ids.topic) {
    ids.topic = (await resend.topics.create({
      name: WEEKLY_NAME, defaultSubscription: 'opt_out', // nobody receives it unless they said yes
      description: 'A short weekly email with practical teaching and ideas while you’re on a program waitlist.',
    })).data?.id;
  }
  return ids.topic;
}

async function applyInResend(email: string, optIn: boolean, firstName?: string) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // One call at a time: Resend allows only a few requests a second
    const segmentId = await weeklySegment(resend);
    const topicId = await weeklyTopic(resend);
    if (optIn) {
      const added = await resend.contacts.create({ email, firstName, ...(segmentId ? { segments: [{ id: segmentId }] } : {}) });
      if (added.error && segmentId) await resend.contacts.segments.add({ email, segmentId });
    } else if (segmentId) {
      await resend.contacts.segments.remove({ email, segmentId });
    }
    if (topicId) {
      const { error } = await resend.contacts.topics.update({ email, topics: [{ id: topicId, subscription: optIn ? 'opt_in' : 'opt_out' }] });
      if (error) console.error('Resend weekly topic update failed', email, error);
    }
  } catch (e) {
    console.error('Resend weekly consent update failed', email, e);
  }
}

/** A "yes" ticked on a waitlist form. */
export async function recordOptIn(input: { email: string; name?: string; form?: string; page?: string; url?: string; version?: string }) {
  const email = normalEmail(input.email);
  const event: ConsentEvent = {
    at: new Date().toISOString(), email, name: input.name, action: 'opt_in',
    form: input.form, page: input.page, url: input.url, ...wordingOf(input.version), source: 'Waitlist form',
  };
  try { await writeEvent(event); } catch (e) { console.error('Consent log failed', e); }
  await applyInResend(email, true, input.name?.split(' ')[0]);
  // GoHighLevel tags are added by /api/lead with the rest of the lead's tags; only the "unsubscribed" tag is removed here
  await tagGhl(email, [], [WEEKLY_OUT_TAG]);
  return event;
}

/** Stops the weekly emails. The waitlist place, and any other list, is left as it is. */
export async function recordOptOut(rawEmail: string, source: ConsentEvent['source'] = 'Unsubscribe page') {
  const email = normalEmail(rawEmail);
  const event: ConsentEvent = { at: new Date().toISOString(), email, action: 'opt_out', source };
  try { await writeEvent(event); } catch (e) { console.error('Consent log failed', e); throw e; }
  await applyInResend(email, false);
  await tagGhl(email, [WEEKLY_OUT_TAG], [WEEKLY_TAG]);
  return event;
}

const csvCell = (v: unknown) => { const s = String(v ?? ''); return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
export function toCsv(log: ConsentEvent[]) {
  const cols: (keyof ConsentEvent)[] = ['at', 'email', 'name', 'action', 'source', 'form', 'page', 'url', 'version', 'wording'];
  return [cols.join(','), ...log.map(e => cols.map(c => csvCell(e[c])).join(','))].join('\r\n');
}
