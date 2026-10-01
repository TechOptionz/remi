// Articles — a header tab. Shows "Coming soon" until the first article is added to content/articles.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Articles — Remi Pearson',
  description: 'Articles and ideas from Remi Pearson, with video where it helps.',
};

const fmt = (d: string) => new Date(`${d}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

export default function ArticlesPage() {
  const list = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="articles-h">
        <p className="pr-eyebrow">Articles</p>
        <h1 id="articles-h" className="pr-title">Thinking <em>in writing.</em></h1>
        <p className="pr-lede">Longer ideas, worked through on the page.</p>
      </section>
      <section className="pr-range" aria-label="Articles">
        {list.length === 0
          ? <p className="pr-soon"><span>Coming soon</span></p>
          : (
            <div className="pr-grid">
              {list.map(a => (
                <article key={a.slug} className="pr-card pr-card--cream">
                  <p className="pr-kicker">{fmt(a.date)}</p>
                  <h2 className="pr-book-title">{a.title}</h2>
                  <p>{a.summary}</p>
                  <Link href={`/articles/${a.slug}`} className="pr-btn">Read the article</Link>
                </article>
              ))}
            </div>
          )}
      </section>
    </main>
  );
}
