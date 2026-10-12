// Private: "Was this helpful?" totals for every article, for the team. Open /stats?key=<STATS_KEY> (set STATS_KEY in
// .env.local and in Vercel); without the right key the page 404s. Not in the sitemap, not indexed, rendered on request.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/content/articles';
import { countingEnabled, countsForAll } from '@/lib/helpful';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Reader stats — Remi Pearson', robots: { index: false, follow: false } };

export default async function StatsPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  if (!process.env.STATS_KEY || key !== process.env.STATS_KEY) notFound();
  const counts = await countsForAll(ARTICLES.map(a => a.slug));
  const rows = ARTICLES.map(a => {
    const c = counts[a.slug], total = c.yes + c.no;
    return { a, ...c, total, pct: total ? Math.round((c.yes / total) * 100) : null };
  }).sort((x, y) => y.total - x.total || x.a.title.localeCompare(y.a.title));
  const all = rows.reduce((s, r) => ({ yes: s.yes + r.yes, no: s.no + r.no }), { yes: 0, no: 0 });

  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero rf-stats">
        <p className="pr-eyebrow">Private · for the team</p>
        <h1 className="pr-title">Was this helpful?</h1>
        <p className="pr-lede">{all.yes + all.no} votes across {ARTICLES.length} articles: {all.yes} yes, {all.no} not really. One vote per connection per article per day.</p>
        {!countingEnabled() && <p className="form-error">Counting is off: the Upstash settings are missing on this server.</p>}
        <div className="pr-table">
          <table>
            <thead><tr><th scope="col">Article</th><th scope="col">Yes</th><th scope="col">Not really</th><th scope="col">Total</th><th scope="col">Helpful</th></tr></thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.a.slug}>
                  <th scope="row"><Link href={`/articles/${r.a.slug}`}>{r.a.title}</Link></th>
                  <td data-label="Yes">{r.yes}</td><td data-label="Not really">{r.no}</td><td data-label="Total">{r.total}</td>
                  <td data-label="Helpful">{r.pct === null ? '—' : `${r.pct}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
