// Which Thinkific course each program page sells, and whether it is on sale, as set on the private admin screen
// (/admin/programs?key=<ADMIN_KEY>). Kept in Upstash Redis (the same store as the "Was this helpful?" counts), so a
// change takes effect without a deploy. Server only.
//   programs:links      hash: product slug → { courseId, onSale, at }   (an entry here wins over the code defaults)
//   programs:links:log  list: the last 200 changes, newest first
// The code defaults (THINKIFIC_COURSES / SOLD_HERE in content/checkout.ts) still apply to any page the admin screen has
// never touched, and to everything when Redis is not configured.
import { cache } from 'react';
import { Redis } from '@upstash/redis';
import { productBySlug } from '@/content/products';
import { amountOf, checkoutHref, SOLD_HERE, THINKIFIC_COURSES } from '@/content/checkout';

export type ProgramLink = { courseId: number | null; onSale: boolean; at: string };
export type LinkChange = ProgramLink & { slug: string; course?: string };

const KEY = 'programs:links';
const LOG = 'programs:links:log';

let client: Redis | null | undefined;
function redis() {
  if (client !== undefined) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}
export const linksReady = () => !!redis();

/** Cache tag on the saved links: the admin screen's save calls updateTag(LINKS_TAG), so the product pages stay static
 *  (prerendered) and are rebuilt with the new link on their next visit. */
export const LINKS_TAG = 'program-links';

/** What the admin screen has saved, by product slug. Read through Next's data cache (a plain REST call to Upstash, tagged)
 *  rather than the client, whose no-store requests would make every product page dynamic. */
export const savedLinks = cache(async (): Promise<Record<string, ProgramLink>> => {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return {};
  let res: Response;
  try {
    res = await fetch(`${url.replace(/\/$/, '')}/hgetall/${KEY}`, {
      headers: { Authorization: `Bearer ${token}` }, cache: 'force-cache', next: { tags: [LINKS_TAG] },
    });
  } catch (e) {
    console.error('Program links could not be read', e);
    return {};
  }
  if (!res.ok) { console.error('Program links could not be read', res.status); return {}; }
  const flat = ((await res.json()) as { result: string[] | null }).result ?? [];
  const out: Record<string, ProgramLink> = {};
  for (let i = 0; i < flat.length; i += 2) {
    try { out[flat[i]] = JSON.parse(flat[i + 1]); } catch { /* skip a malformed entry */ }
  }
  return out;
});

/** The link in force for a program: the saved one, else the code default. */
export async function linkOf(slug: string): Promise<ProgramLink> {
  const saved = (await savedLinks())[slug];
  if (saved) return saved;
  return { courseId: THINKIFIC_COURSES[slug] ?? null, onSale: SOLD_HERE.has(slug), at: '' };
}

/** The Thinkific courses a purchase enrols the buyer in (a bundle: each of its programs' courses), or null. */
export async function liveCoursesOf(slug: string): Promise<number[] | null> {
  const p = productBySlug(slug);
  if (!p) return null;
  const own = (await linkOf(slug)).courseId;
  if (own) return [own];
  if (p.bundle && p.includes?.length) {
    const ids = await Promise.all(p.includes.map(async s => (await linkOf(s)).courseId));
    return ids.every(Boolean) ? (ids as number[]) : null;
  }
  return null;
}

/** True when the program's buy buttons open Stripe Checkout right now. */
export async function liveOnSale(slug: string) {
  const p = productBySlug(slug);
  if (!p || p.buyHref || !process.env.STRIPE_SECRET_KEY || amountOf(p) <= 0) return false;
  return (await linkOf(slug)).onSale && !!(await liveCoursesOf(slug));
}

/** Where the program's buy buttons go: its outside `buyHref`, Stripe Checkout when on sale, else null (its sign-up). */
export async function liveBuyHref(slug: string) {
  const p = productBySlug(slug);
  return p?.buyHref ?? ((await liveOnSale(slug)) ? checkoutHref(slug) : null);
}

/** Saves (or, with `link` null, clears back to "not linked") one program's link and logs the change. */
export async function saveLink(slug: string, link: Omit<ProgramLink, 'at'>, course?: string) {
  const r = redis();
  if (!r) throw new Error('Redis is not configured on this server');
  const entry: ProgramLink = { ...link, at: new Date().toISOString() };
  await r.hset(KEY, { [slug]: entry });
  await r.lpush(LOG, JSON.stringify({ slug, course, ...entry } satisfies LinkChange));
  await r.ltrim(LOG, 0, 199);
}

export async function recentChanges(n = 12): Promise<LinkChange[]> {
  const r = redis();
  if (!r) return [];
  const rows = await r.lrange<LinkChange | string>(LOG, 0, n - 1);
  return rows.map(x => (typeof x === 'string' ? JSON.parse(x) : x));
}
