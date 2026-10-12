// "Was this helpful?" votes and counts for the articles (components/shared/Helpful.tsx, counts in lib/helpful.ts).
// GET /api/helpful?slug=<article>        → { yes, no, show }  (show: whether the article should display its count)
// POST /api/helpful { slug, answer }      → the same, after recording the vote (once per connection per article per day)
import { ARTICLES } from '@/content/articles';
import { SHOW_FROM, countsFor, vote, type Counts } from '@/lib/helpful';

export const runtime = 'nodejs';

const SLUGS = new Set(ARTICLES.map(a => a.slug));
const reply = (c: Counts, status = 200) =>
  Response.json({ ...c, show: c.yes >= SHOW_FROM }, { status, headers: { 'Cache-Control': 'no-store' } });
const fail = (error: string, status: number) => Response.json({ error }, { status });

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get('slug') ?? '';
  if (!SLUGS.has(slug)) return fail('Unknown article.', 404);
  try { return reply(await countsFor(slug)); } catch (e) { console.error('Helpful counts failed', e); return fail('Unavailable.', 503); }
}

export async function POST(request: Request) {
  let body: { slug?: unknown; answer?: unknown };
  try { body = await request.json(); } catch { return fail('Invalid request.', 400); }
  const slug = typeof body.slug === 'string' ? body.slug : '';
  const answer = body.answer === 'yes' || body.answer === 'no' ? body.answer : null;
  if (!SLUGS.has(slug) || !answer) return fail('Invalid request.', 400);
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  try { return reply(await vote(slug, answer, ip)); } catch (e) { console.error('Helpful vote failed', e); return fail('Unavailable.', 503); }
}
