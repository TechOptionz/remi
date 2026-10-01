// Free resources — the Articles tab: Remi's free library. Articles now (content/articles.ts), videos to follow.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Free resources — Remi Pearson',
  description: 'Free articles from Remi Pearson on patterns, emotional change and the inner work that makes a different choice possible. Videos coming soon.',
};

export default function ArticlesPage() {
  const list = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="articles-h">
        <p className="pr-eyebrow">Free resources</p>
        <h1 id="articles-h" className="pr-title">The free <em>library.</em></h1>
        <p className="pr-lede">Articles to read now, with more on the way, and videos coming soon.</p>
      </section>
      <section className="pr-range" aria-label="Articles">
        {list.length === 0
          ? <p className="pr-soon"><span>Coming soon</span></p>
          : (
            <div className="pr-library">
              {list.map(a => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="pr-lib-card">
                  {a.image && <img src={a.image} alt="" loading="lazy" decoding="async" />}
                  <span className="pr-lib-text">
                    <span className="pr-kicker">Article</span>
                    <span className="pr-lib-title">{a.title}</span>
                    <span className="pr-lib-sum">{a.summary}</span>
                    <span className="pr-lib-more">Read the article <span aria-hidden="true">⟶</span></span>
                  </span>
                </Link>
              ))}
            </div>
          )}
      </section>
    </main>
  );
}
