// Every self-paced program and bundle, by category (the mock-up ranges). /programs is the summary page before it.
import type { Metadata } from 'next';
import Link from 'next/link';
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
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">Self-paced programs</span>
        </nav>
        <p className="pr-eyebrow">Self-paced programs</p>
        <h1 id="pr-title" className="pr-title">Every program, <em>by question.</em></h1>
        <p className="pr-lede">Free introductions, focused programs and bundles. You don’t need all of this. Start with the question that has your attention.</p>
      </section>
      {(Object.keys(CATEGORIES) as CategoryId[]).map(c => (
        <ProductRange key={c} category={c} id={c} title={CATEGORIES[c].tagline} />
      ))}
    </main>
  );
}
