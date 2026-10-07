// Books — the first tab in the header. Each book is a full-width card: cover on the left, Remi's sales copy, price and
// purchase button on the right. Titles, copy, prices and purchase links live in content/books.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import Inline from '@/components/articles/Inline';
import { BOOKS } from '@/content/books';

export const metadata: Metadata = {
  title: 'Books — Remi Pearson',
  description: 'Disruptive Leadership, Ultimate You and Ultimate You Quest Edition, by Remi Pearson. Ebooks from AUD $14.95.',
};

export default function BooksPage() {
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="books-h">
        <p className="pr-eyebrow">Books</p>
        <h1 id="books-h" className="pr-title">Ideas to keep <em>on the shelf.</em></h1>
        <p className="pr-lede">Three books, written to be lived with rather than skimmed.</p>
      </section>
      <section className="pr-range" aria-label="The books">
        <div className="pr-grid pr-grid--books">
          {BOOKS.map((b, i) => (
            <article key={b.slug} id={b.slug} className={`pr-card pr-card--${(['black', 'burgundy', 'navy'] as const)[i % 3]} pr-book`} aria-labelledby={`${b.slug}-h`}>
              <div className="pr-book-cover" aria-hidden="true"><span>{b.title}</span><small>Remi Pearson</small></div>
              <div className="pr-book-body">
                {b.badge && <p className="pr-kicker">{b.badge}</p>}
                <h2 id={`${b.slug}-h`} className="pr-book-title">{b.title}</h2>
                <p className="pr-book-by">By Remi Pearson</p>
                <p className="pr-book-tagline">{b.tagline}</p>
                {b.text.map(t => <p key={t}><Inline text={t} /></p>)}
                <p className="pr-book-explore">Explore how to:</p>
                <ul className="pr-book-list">{b.explore.map(t => <li key={t}>{t}</li>)}</ul>
                <p>{b.closing}</p>
                <p className="pr-price pr-book-price">{b.format} · {b.price}</p>
                {b.buyHref
                  ? <a href={b.buyHref} className="pr-btn" target="_blank" rel="noopener noreferrer">{b.buyLabel}</a>
                  : <p className="pr-soon"><span>Buy link coming soon</span></p>}
                <p className="pr-book-note"><em>{b.note}</em></p>
                {b.program && <p className="pr-book-program"><Link href={b.program.href}>{b.program.label}</Link></p>}
              </div>
            </article>
          ))}
        </div>
        <p className="pr-more">Looking for something to work through? <Link href="/products">Browse the self-paced programs</Link>.</p>
      </section>
    </main>
  );
}
