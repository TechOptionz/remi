// Free resources — the Articles tab: Remi's free library, in the four topic clusters of the Perspectives rabbit holes
// (ARTICLE_CLUSTERS in content/articles.ts). Each cluster lists its articles, then opens its conversations (the videos) in
// the Perspectives archive. A cluster without articles yet says so.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES, ARTICLE_CLUSTERS } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Free resources — Remi Pearson',
  description: 'Free articles and conversations from Remi Pearson, by topic: the self beneath the pattern, relationships, the ideas that change how we see the world, and people who built something unlikely.',
};

const art = (name: string) => `/assets/perspectives/${name}.webp`;

export default function ArticlesPage() {
  const list = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="articles-h">
        <p className="pr-eyebrow">Free resources</p>
        <h1 id="articles-h" className="pr-title">The free <em>library.</em></h1>
        <p className="pr-lede">Articles to read and conversations to watch, gathered by the question they explore. Start with the one that has hold of you today.</p>
        <nav className="lib-jump" aria-label="Topics">
          {ARTICLE_CLUSTERS.map(c => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
        </nav>
      </section>

      {ARTICLE_CLUSTERS.map(c => {
        const articles = list.filter(a => a.topic === c.topic);
        return (
          <section key={c.id} id={c.id} className="lib-cluster" aria-labelledby={`${c.id}-h`}>
            <header className="lib-head">
              <img src={art(c.art)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div>
                <h2 id={`${c.id}-h`} className="lib-title">{c.title}</h2>
                <p className="lib-q">{c.question}</p>
              </div>
            </header>
            {articles.length > 0
              ? (
                <div className="pr-library">
                  {articles.map(a => (
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
              )
              : <p className="lib-soon">Articles on this are being written now.</p>}
            <p className="lib-videos"><Link href={c.videosHref}>Watch the conversations: {c.cta.replace(/^Explore /, '')} <span aria-hidden="true">⟶</span></Link></p>
          </section>
        );
      })}
    </main>
  );
}
