// "Was this helpful?" counts, kept in Upstash Redis (Vercel Marketplace store "remi-helpful"). Server only.
// One hash per article, `helpful:<slug>` with fields `yes` and `no`. A connection can vote once per article per day:
// `helpful:seen:<slug>:<hash of IP>` is set for 24 hours on the first vote and later ones are ignored.
// Env (set by the Marketplace integration; also in .env.local): KV_REST_API_URL + KV_REST_API_TOKEN, or the
// UPSTASH_REDIS_REST_URL / _TOKEN names. Without them the buttons still work and nothing is counted.
import { createHash } from 'node:crypto';
import { Redis } from '@upstash/redis';

export type Counts = { yes: number; no: number };
export type Answer = 'yes' | 'no';

/** Shown on the article once at least this many readers have said yes. */
export const SHOW_FROM = 1;

let client: Redis | null | undefined;
function redis() {
  if (client !== undefined) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}
export const countingEnabled = () => !!redis();

const key = (slug: string) => `helpful:${slug}`;
const toCounts = (h: Record<string, unknown> | null): Counts => ({ yes: Number(h?.yes ?? 0), no: Number(h?.no ?? 0) });

export async function countsFor(slug: string): Promise<Counts> {
  const r = redis();
  if (!r) return { yes: 0, no: 0 };
  return toCounts(await r.hgetall(key(slug)));
}

/** Every article's counts in one round trip (the /stats page). */
export async function countsForAll(slugs: string[]): Promise<Record<string, Counts>> {
  const r = redis();
  if (!r || !slugs.length) return Object.fromEntries(slugs.map(s => [s, { yes: 0, no: 0 }]));
  const p = r.pipeline();
  slugs.forEach(s => p.hgetall(key(s)));
  const rows = await p.exec<(Record<string, unknown> | null)[]>();
  return Object.fromEntries(slugs.map((s, i) => [s, toCounts(rows[i])]));
}

/** Records a vote unless this connection already voted on this article today. Returns the counts after. */
export async function vote(slug: string, answer: Answer, ip: string): Promise<Counts> {
  const r = redis();
  if (!r) return { yes: 0, no: 0 };
  const who = createHash('sha256').update(`${ip}|${slug}`).digest('hex').slice(0, 24);
  const first = await r.set(`helpful:seen:${slug}:${who}`, 1, { nx: true, ex: 60 * 60 * 24 });
  if (first) await r.hincrby(key(slug), answer, 1);
  return countsFor(slug);
}
