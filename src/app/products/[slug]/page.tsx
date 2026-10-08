// One page per product in content/products.ts — Coming soon until its copy exists. A product with its own designed sales
// page (LANDINGS) shows that instead, with its own search listing.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/products/ProductPage';
import TriadLanding from '@/components/triad-landing/TriadLanding';
import { PRODUCTS, productBySlug } from '@/content/products';

const LANDINGS: Record<string, { page: () => React.ReactNode; metadata: Metadata }> = {
  'self-esteem-triad': {
    page: TriadLanding,
    metadata: {
      title: 'The Self-Esteem Triad — Remi Pearson',
      description: 'A self-paced program with Remi Pearson: six videos, a workbook and transcripts on emotions, emotional needs and boundaries, so you can stay connected without leaving yourself behind. AUD $29, one payment.',
    },
  },
};

export const dynamicParams = false;
export const generateStaticParams = () => PRODUCTS.map(p => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return LANDINGS[slug]?.metadata ?? { title: `${p.title} — Remi Pearson`, description: p.text };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const Landing = LANDINGS[slug]?.page;
  return Landing ? <Landing /> : <ProductPage product={p} />;
}
