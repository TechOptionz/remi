// Ultimate You Quest Edition's page (/books/ultimate-you-quest), from the mock-up "ultimate you quest" (Oct 2026). Copy
// comes from BOOKS (content/books.ts); the book-and-tablet shot is the book's cover (a mock-up on transparency). The
// "Explore how to:" icons and the hills at each end of the rust band are cut from the mock-up. Styles: .uyq-* in styles/books.css.
import Inline from '@/components/articles/Inline';
import type { Book } from '@/content/books';
import { BookCrumbs, BuyButton, Deco, OtherBooks } from './ui';

// One icon per "Explore how to:" point, in the mock-up's order
const ICONS = ['uyq-sun', 'uyq-heart', 'uyq-leaf', 'uyq-spiral', 'uyq-talk', 'uyq-star'];

/** The mock-up's dashed trail, drawn rather than cut so it stays crisp. */
function Trail({ className, d }: { className: string; d: string }) {
  return <svg className={`uyq-trail ${className}`} viewBox="0 0 200 200" aria-hidden="true" preserveAspectRatio="none"><path d={d} /></svg>;
}

export default function UyqBook({ b }: { b: Book }) {
  return (
    <main className="kb bkp uyq">
      <div className="kb-page">
        <BookCrumbs title={b.title} />
        <header className="uyq-head">
          <Deco name="uyq-spark" className="bkp-deco uyq-deco--spark-l" />
          <Deco name="uyq-spark" className="bkp-deco uyq-deco--spark-r" />
          <Trail className="uyq-trail--tl" d="M200 20 C140 0 60 10 30 60 S40 150 0 190" />
          <Trail className="uyq-trail--tr" d="M0 10 C80 -10 190 20 190 90 S140 180 200 200" />
          <h1 className="uyq-title">{b.title}</h1>
          <p className="uyq-by">By Remi Pearson</p>
          <p className="uyq-tagline">{b.tagline}</p>
        </header>

        <section className="uyq-intro" aria-label={`About ${b.title}`}>
          <div className="uyq-intro-text">{b.text.map(t => <p key={t}><Inline text={t} /></p>)}</div>
          <div className="uyq-intro-art">
            <svg className="uyq-rays" viewBox="0 0 160 70" aria-hidden="true"><path d="M20 62 8 40M58 50 54 20M100 50 106 18M140 62 154 38" /></svg>
            <img src={b.cover.src} alt={`${b.title} by Remi Pearson: the book and the ebook on a tablet, both with the turquoise and gold cover and its candle`} width={b.cover.width} height={b.cover.height} decoding="async" />
          </div>
        </section>

        <section className="uyq-explore" aria-labelledby="uyq-explore-h">
          <Trail className="uyq-trail--ml" d="M0 0 C60 30 90 90 40 140 S10 200 60 200" />
          <Trail className="uyq-trail--mr" d="M200 0 C130 30 110 90 160 140 S190 200 140 200" />
          <Deco name="uyq-spark" className="bkp-deco uyq-deco--spark-m" />
          <h2 id="uyq-explore-h" className="uyq-explore-title">Explore how to:<span className="uyq-explore-line" aria-hidden="true"></span></h2>
          <ul className="uyq-list">
            {b.explore.map((t, i) => <li key={t}>{ICONS[i] && <Deco name={ICONS[i]} className="uyq-list-icon" />}<span>{t}</span></li>)}
          </ul>
          <p className="uyq-closing">{b.closing}</p>
        </section>
      </div>

      <div className="uyq-band" id="buy">
        <Deco name="uyq-band-left" className="uyq-band-hills uyq-band-hills--l" />
        <Deco name="uyq-band-right" className="uyq-band-hills uyq-band-hills--r" />
        <div className="uyq-band-inner">
          <p className="uyq-price">{b.format} · {b.price}</p>
          <BuyButton b={b} className="uyq-btn" arrow />
          <p className="uyq-note">{b.note}</p>
        </div>
      </div>

      <div className="kb-page">
        <OtherBooks slug={b.slug} />
      </div>
    </main>
  );
}
