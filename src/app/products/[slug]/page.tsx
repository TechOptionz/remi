// One page per product in content/products.ts — Coming soon until its copy exists.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/products/ProductPage';
import { PRODUCTS, productBySlug } from '@/content/products';

export const dynamicParams = false;
export const generateStaticParams = () => PRODUCTS.map(p => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = productBySlug((await params).slug);
  return p ? { title: `${p.title} — Remi Pearson`, description: p.text } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = productBySlug((await params).slug);
  if (!p) notFound();
  return <ProductPage product={p} />;
}
