import Link from 'next/link';
import { CATEGORIES, priceLine, productHref, productsIn, type CategoryId } from '@/content/products';

/** A category's products as the mock-ups draw them: coloured cards, the bundle last and full width. Each card opens
 *  its own product page. Used on the rabbit-hole pages (`category` per page); `id` lets a button scroll to it. */
export default function ProductRange({ category, id = 'range', title }: { category: CategoryId; id?: string; title?: React.ReactNode }) {
  const c = CATEGORIES[category];
  const list = productsIn(category);
  return (
    <section id={id} className="pr-range" aria-labelledby={`${id}-h`}>
      <p className="pr-eyebrow">{c.name}</p>
      <h2 id={`${id}-h`} className="pr-h2">{title ?? 'Programs to begin with'}</h2>
      <p className="pr-lede">Each is self-paced and focused. Choose the one that matches the question that has your attention.</p>
      <div className="pr-grid">
        {list.map(p => (
          <article key={p.slug} className={`pr-card pr-card--${p.tone}${p.bundle ? ' pr-card--bundle' : ''}`}>
            {p.kicker && <p className="pr-kicker">{p.kicker}</p>}
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p className="pr-price">{priceLine(p)}</p>
            <Link href={productHref(p.slug)} className="pr-btn">{p.cta ?? 'See what’s inside'}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
