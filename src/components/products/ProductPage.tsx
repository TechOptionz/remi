import Link from 'next/link';
import { CATEGORIES, levelLine, priceLine, productBySlug, productHref, productsIn, type Product } from '@/content/products';
import NotifyForm from './NotifyForm';

/** One product's page. Until the sales copy exists (`body`) and a `buyHref` is set, it says Coming soon and takes
 *  "tell me when it's ready" sign-ups; the related programs below keep the visitor moving. */
export default function ProductPage({ product }: { product: Product }) {
  const c = CATEGORIES[product.category];
  const related = productsIn(product.category).filter(p => p.slug !== product.slug && !p.bundle && !product.includes?.includes(p.slug)).slice(0, 3);
  const bundle = productsIn(product.category).find(p => p.bundle && p.slug !== product.slug);
  return (
    <main className={`pr-page pr-page--${product.tone}`}>
      <section className="pr-hero" aria-labelledby="pr-title">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.title}</span>
        </nav>
        <p className="pr-eyebrow">{product.kicker ?? c.name}</p>
        <h1 id="pr-title" className="pr-title">{product.title}</h1>
        <p className="pr-lede">{product.text}</p>
        <p className="pr-price pr-price--lg">{priceLine(product)}{product.level && <span className="pr-level">{levelLine(product)}</span>}</p>
        {product.buyHref
          ? <a href={product.buyHref} className="pr-btn">{product.cta ?? 'Get started'}</a>
          : <p className="pr-soon"><span>Coming soon</span></p>}
      </section>

      {product.includes && (
        <section className="pr-includes" aria-labelledby="pr-inc-h">
          <h2 id="pr-inc-h" className="pr-h2">What’s included</h2>
          <ul>
            {product.includes.map(productBySlug).filter(p => p !== undefined).map(p => (
              <li key={p.slug}><Link href={productHref(p.slug)}>{p.title}</Link><span>{[p.price, levelLine(p)].filter(Boolean).join(' · ')}</span></li>
            ))}
          </ul>
        </section>
      )}

      {product.body && (
        <section className="pr-body">{product.body.map(t => <p key={t}>{t}</p>)}</section>
      )}

      {!product.buyHref && (
        <section className="pr-notify-band" aria-labelledby="pr-notify-h">
          <h2 id="pr-notify-h" className="pr-h2">This one is still being written.</h2>
          <p>Leave your email and I’ll tell you the moment {product.title} is ready.</p>
          <NotifyForm product={product.title} segment={c.segment} />
          <p className="pr-fine">Prefer to talk it through first? <Link href={`/?interest=Products&about=${encodeURIComponent(product.title)}#contact`}>Send an enquiry</Link>.</p>
        </section>
      )}

      {(bundle || related.length > 0) && (
        <section className="pr-related" aria-labelledby="pr-rel-h">
          <h2 id="pr-rel-h" className="pr-h2">More from {c.name}</h2>
          <div className="pr-grid">
            {[...related, ...(bundle ? [bundle] : [])].map(p => (
              <article key={p.slug} className={`pr-card pr-card--${p.tone}${p.bundle ? ' pr-card--bundle' : ''}`}>
                <h3>{p.title}</h3><p>{p.text}</p><p className="pr-price">{priceLine(p)}{p.level && <span className="pr-level">{levelLine(p)}</span>}</p>
                <Link href={productHref(p.slug)} className="pr-btn">{p.cta ?? 'See what’s inside'}</Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
