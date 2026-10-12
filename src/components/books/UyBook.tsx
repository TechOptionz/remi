// Ultimate You's page (/books/ultimate-you), from the mock-up "ultimate you" (Oct 2026). Copy comes from BOOKS
// (content/books.ts). The hero art (uy-hero) is the mock-up's book on its stone plinth with the real cover laid over the
// book; the brush behind the second paragraph is a mask cut from the mock-up's paint (uy-brush), filled with rust here.
// Styles: .uyb-* in styles/books.css.
import Inline from '@/components/articles/Inline';
import { Sym } from '@/components/home/ui';
import type { Book } from '@/content/books';
import { BookCrumbs, BuyButton, Deco, OtherBooks, bookArt } from './ui';

export default function UyBook({ b }: { b: Book }) {
  const [intro, invite, ...rest] = b.text;
  return (
    <main className="kb bkp uyb">
      <div className="kb-page">
        <BookCrumbs title={b.title} />
        <section className="uyb-hero" aria-labelledby="book-h">
          <div className="uyb-hero-art">
            <img src={bookArt('uy-hero')} alt={`${b.title} by Remi Pearson: the white cover with ULTIMATE YOU in gold brush lettering, standing on a stone plinth in front of a rust paint stroke`} width={1090} height={1344} decoding="async" />
          </div>
          <div className="uyb-hero-copy">
            {b.badge && <p className="uyb-badge">{b.badge}</p>}
            <h1 id="book-h" className="uyb-title">{b.title}</h1>
            <p className="uyb-by">By Remi Pearson</p>
            <span className="uyb-rule" aria-hidden="true"></span>
            <p className="uyb-tagline">{b.tagline}</p>
            <Deco name="uy-squiggle" className="uyb-squiggle" />
          </div>
        </section>

        <div className="uyb-text">
          <p><Inline text={intro} /></p>
          {invite && <div className="uyb-brush"><p><Inline text={invite} /></p></div>}
          {rest.map(t => <p key={t}><Inline text={t} /></p>)}
        </div>

        <div className="uyb-explore">
          <p className="uyb-explore-title">Explore how to:<span className="uyb-explore-line" aria-hidden="true"></span></p>
          <ul className="uyb-list">{b.explore.map(t => <li key={t}><Sym name="hm-spark" />{t}</li>)}</ul>
        </div>

        <p className="uyb-closing">{b.closing}</p>

        <div className="uyb-buy" id="buy">
          <Deco name="uy-loop" className="uyb-buy-loop" />
          <Sym name="hm-spark" className="uyb-buy-star" />
          <p className="uyb-price">{b.format} · <strong>{b.price}</strong></p>
          <BuyButton b={b} className="uyb-btn" />
          <p className="uyb-note">{b.note}</p>
        </div>

        <OtherBooks slug={b.slug} />
      </div>
    </main>
  );
}
