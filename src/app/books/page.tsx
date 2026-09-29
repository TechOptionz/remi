// Books — the first tab in the header. Titles, copy and purchase links live in content/books.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { BOOKS } from '@/content/books';

export const metadata: Metadata = {
  title: 'Books — Remi Pearson',
  description: 'Ultimate You, Ultimate You Quest and Disruptive Leadership, by Remi Pearson.',
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
            <article key={b.slug} id={b.slug} className={`pr-card pr-card--${(['burgundy', 'navy', 'black'] as const)[i % 3]} pr-book`}>
              <div className="pr-book-cover" aria-hidden="true"><span>{b.title}</span><small>Remi Pearson</small></div>
              {b.subtitle && <p className="pr-kicker">{b.subtitle}</p>}
              <h2 className="pr-book-title">{b.title}</h2>
              {b.text ? b.text.map(t => <p key={t}>{t}</p>) : <p>About this book: copy to come.</p>}
              {b.retailers?.length
                ? <div className="pr-book-buy">{b.retailers.map(r => <a key={r.href} href={r.href} className="pr-btn" target="_blank" rel="noopener noreferrer">{r.label} ↗</a>)}</div>
                : <p className="pr-soon"><span>Buy links coming soon</span></p>}
            </article>
          ))}
        </div>
        <p className="pr-more">Looking for something to work through? <Link href="/products">Browse the self-paced programs</Link>.</p>
      </section>
    </main>
  );
}
