// Pieces shared by the three book pages (/books/<slug>): breadcrumb, the buy button, and the strip of Remi's other books.
// Each page is drawn from its own mock-up (DlBook, UyBook, UyqBook); art cut from the mock-ups lives in public/assets/books.
import Link from 'next/link';
import { BOOKS, type Book } from '@/content/books';

export const bookArt = (name: string) => `/assets/books/${name}.webp`;

/** Decoration cut from a book's mock-up. */
export function Deco({ name, className }: { name: string; className?: string }) {
  return <img className={className} src={bookArt(name)} alt="" aria-hidden="true" loading="lazy" decoding="async" />;
}

export function BookCrumbs({ title }: { title: string }) {
  return (
    <nav className="crumbs stl-crumbs bkp-crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/books">Books</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
    </nav>
  );
}

/** The purchase button once the book has a `buyHref`; until then the same shape says "Buy link coming soon". */
export function BuyButton({ b, className, arrow }: { b: Book; className: string; arrow?: boolean }) {
  const tail = arrow && <span className="bkp-arrow" aria-hidden="true">⟶</span>;
  return b.buyHref
    ? <a href={b.buyHref} className={className} target="_blank" rel="noopener noreferrer">{b.buyLabel}{tail}</a>
    : <p className={`${className} is-soon`}>Buy link coming soon{tail}</p>;
}

/** "More books by Remi": the other two covers, each opening its own page. */
export function OtherBooks({ slug }: { slug: string }) {
  const others = BOOKS.filter(b => b.slug !== slug);
  return (
    <aside className="bkp-more" aria-labelledby="bkp-more-h">
      <p id="bkp-more-h" className="bkp-more-title">More books by Remi</p>
      <ul className="bkp-more-list">
        {others.map(b => (
          <li key={b.slug}>
            <Link href={`/books/${b.slug}`} className="bkp-more-card">
              <span className={`bkp-more-cover${b.cover.mockup ? ' bkp-more-cover--mockup' : ''}`}><img src={b.cover.src} alt="" width={b.cover.width} height={b.cover.height} loading="lazy" decoding="async" /></span>
              <span className="bkp-more-body">
                <span className="bkp-more-name">{b.title}</span>
                <span className="bkp-more-tag">{b.tagline}</span>
                <span className="bkp-more-price">{b.format} · {b.price}</span>
                <span className="bkp-more-cta">About the book <span aria-hidden="true">→</span></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="bkp-more-all"><Link href="/books">All books</Link></p>
    </aside>
  );
}
