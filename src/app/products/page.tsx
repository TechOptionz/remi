// Every program and product, by category.
import type { Metadata } from 'next';
import ProductRange from '@/components/products/ProductRange';
import { CATEGORIES, type CategoryId } from '@/content/products';

export const metadata: Metadata = {
  title: 'Programs & products — Remi Pearson',
  description: 'Self-paced programs and bundles across personal change, relationships, truth, leadership, influence and business.',
};

export default function ProductsPage() {
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="pr-title">
        <p className="pr-eyebrow">Programs</p>
        <h1 id="pr-title" className="pr-title">“Where shall we begin?”</h1>
        <p className="pr-lede">You don’t need all of this. Start with the question that has your attention.</p>
      </section>
      {(Object.keys(CATEGORIES) as CategoryId[]).map(c => (
        <ProductRange key={c} category={c} id={c} title={CATEGORIES[c].tagline} />
      ))}
    </main>
  );
}
