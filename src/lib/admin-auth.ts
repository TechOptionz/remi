// Sign-in for the private admin screens (/admin/…): a 4-digit code (ADMIN_PIN) entered on a sign-in screen, remembered
// for 7 days in an http-only cookie that holds a signature of the code (so changing ADMIN_PIN signs everyone out).
// Four digits are easy to guess by trying them all, so a connection gets 5 wrong tries per 15 minutes (Redis), then waits.
// Server only.
import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies, headers } from 'next/headers';
import { Redis } from '@upstash/redis';

const COOKIE = 'remi_admin';
const MAX_TRIES = 5;
const WINDOW = 15 * 60;

const pin = () => process.env.ADMIN_PIN?.trim() || '';
export const adminReady = () => /^\d{4}$/.test(pin());

const sign = () => createHmac('sha256', `${process.env.STATS_KEY ?? ''}:admin`).update(pin()).digest('hex');
const same = (a: string, b: string) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));

export async function isAdmin() {
  if (!adminReady()) return false;
  const v = (await cookies()).get(COOKIE)?.value ?? '';
  return same(v, sign());
}

let client: Redis | null | undefined;
function redis() {
  if (client !== undefined) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}
async function ip() {
  const h = await headers();
  return (h.get('x-forwarded-for')?.split(',')[0] ?? h.get('x-real-ip') ?? 'local').trim();
}

/** Checks the code; on success sets the cookie. Returns null or an error message. */
export async function signIn(code: string): Promise<string | null> {
  if (!adminReady()) return 'Sign-in is not set up on this server (ADMIN_PIN).';
  const r = redis();
  const key = `admin:fails:${await ip()}`;
  if (r && Number(await r.get(key)) >= MAX_TRIES) return 'Too many wrong tries. Please wait 15 minutes.';
  if (!same(code.trim(), pin())) {
    if (r) { await r.incr(key); await r.expire(key, WINDOW); }
    return 'That code is not right.';
  }
  if (r) await r.del(key);
  (await cookies()).set(COOKIE, sign(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/admin', maxAge: 7 * 24 * 3600 });
  return null;
}

export async function signOut() {
  (await cookies()).delete({ name: COOKIE, path: '/admin' });
}
