import Link from 'next/link';
import { ENTRY_PRICE, ENTRY_PRODUCTS } from '@/content/home';
import { Brush, Sym } from './ui';

// WANT TO DO SOMETHING WITH ALL THIS? — three entry products, ENTRY_PRODUCTS in content/home.ts (home design part 2)
export default function EntryProducts() {
  return (
    <section id="entry-products" className="section hm-products" aria-labelledby="hm-products-h">
      <p className="hm-eyebrow"><Sym name="hm-spark" />Entry products</p>
      <div className="hm-products-head">
        <h2 id="hm-products-h" className="hm-h2">Want to do something <Brush>with all this?</Brush></h2>
        <p className="hm-lede">Three practical places to begin. Each is self-paced, focused and {ENTRY_PRICE}.<Sym name="hm-swirl-sm" className="hm-products-swirl" /></p>
      </div>
      <div className="hm-product-grid">
        {ENTRY_PRODUCTS.map(p => (
          <article className={`hm-product hm-product--${p.tone}`} key={p.title}>
            <div className="hm-product-copy">
              <h3>{p.title}</h3>
              {p.text && <p>{p.text}</p>}
            </div>
            <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
            <div className="hm-product-foot">
              <span className="hm-price">{ENTRY_PRICE}</span>
              <a href={p.href} className="hm-btn hm-btn--sm" data-interest="Products">See what’s inside</a>
            </div>
          </article>
        ))}
      </div>
      <p className="hm-center"><Link href="/programs" className="hm-btn hm-btn--sm">Browse all programs</Link></p>
    </section>
  );
}
