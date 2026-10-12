// Disruptive Leadership's page (/books/disruptive-leadership), from the mock-up "DL MOCKUP" (Oct 2026). Copy comes from
// BOOKS (content/books.ts). The hero art (dl-hero) is the mock-up's paint, book and flowers with the real cover laid over
// the book; dl-arrow and dl-sprig are cut from it too. Styles: .dlb-* in styles/books.css.
import Link from 'next/link';
import Inline from '@/components/articles/Inline';
import { Brush, Sym } from '@/components/home/ui';
import type { Book } from '@/content/books';
import { BookCrumbs, BuyButton, Deco, OtherBooks, bookArt } from './ui';

export default function DlBook({ b }: { b: Book }) {
  const [intro, ...cols] = b.text;
  return (
    <main className="kb bkp dlb">
      <div className="kb-page">
        <BookCrumbs title={b.title} />
        <section className="dlb-hero" aria-labelledby="book-h">
          <div className="dlb-hero-copy">
            {b.badge && <p className="dlb-badge">{b.badge}</p>}
            <h1 id="book-h" className="dlb-title">{b.title}</h1>
            <p className="dlb-by">By Remi Pearson</p>
            <Sym name="hm-underline" className="dlb-by-brush" />
            <p className="dlb-tagline">{b.tagline}</p>
          </div>
          <div className="dlb-hero-art">
            <img src={bookArt('dl-hero')} alt={`${b.title} by Remi Pearson: the white cover with DIS RUP TIVE in gold capitals, standing in front of a rust paint stroke and dried flowers`} width={998} height={972} decoding="async" />
          </div>
        </section>

        <div className="dlb-text">
          <p className="dlb-intro"><Inline text={intro} /></p>
          {cols.length > 0 && <div className="dlb-cols">{cols.map(t => <p key={t}><Inline text={t} /></p>)}</div>}
          <Sym name="hm-spark" className="bkp-deco dlb-deco--star-r" />
          <Sym name="hm-swirl" className="bkp-deco dlb-deco--swirl-r" />
        </div>

        <div className="dlb-explore">
          <Deco name="dl-arrow" className="dlb-explore-arrow" />
          <p className="dlb-explore-title"><Brush>Explore how to:</Brush></p>
          <ul className={`dlb-list${b.explore.length % 2 ? ' dlb-list--odd' : ''}`}>{b.explore.map(t => <li key={t}>{t}</li>)}</ul>
        </div>

        <div className="dlb-closing">
          <p>{b.closing}</p>
          <Sym name="hm-spark" className="bkp-deco dlb-deco--star-l" />
          <Sym name="hm-loop" className="bkp-deco dlb-deco--loop-r" />
        </div>

        <div className="dlb-band" id="buy">
          <Deco name="dl-sprig" className="dlb-band-sprig" />
          <div className="dlb-band-buy">
            <p className="dlb-band-price">{b.format} · {b.price}</p>
            <BuyButton b={b} className="dlb-band-btn" />
          </div>
          <div className="dlb-band-more">
            <p className="dlb-band-note"><em>{b.note}</em></p>
            {b.program && <p className="dlb-band-program"><Link href={b.program.href}>{b.program.label}</Link></p>}
          </div>
          <Sym name="hm-spark" className="dlb-band-star" />
        </div>

        <OtherBooks slug={b.slug} />
      </div>
    </main>
  );
}
