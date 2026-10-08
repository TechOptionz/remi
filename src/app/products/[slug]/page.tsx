// One page per product in content/products.ts — Coming soon until its copy exists. A product with its own designed sales
// page (LANDINGS) shows that instead, with its own search listing.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/products/ProductPage';
import TriadLanding from '@/components/triad-landing/TriadLanding';
import CamLanding from '@/components/cam-landing/CamLanding';
import UiLanding from '@/components/ui-landing/UiLanding';
import SfsLanding from '@/components/sfs-landing/SfsLanding';
import { PRODUCTS, productBySlug } from '@/content/products';

const LANDINGS: Record<string, { page: () => React.ReactNode; metadata: Metadata }> = {
  'self-esteem-triad': {
    page: TriadLanding,
    metadata: {
      title: 'The Self-Esteem Triad — Remi Pearson',
      description: 'A self-paced program with Remi Pearson: six videos, a workbook and transcripts on emotions, emotional needs and boundaries, so you can stay connected without leaving yourself behind. AUD $29, one payment.',
    },
  },
  'critical-alignment-model-for-leaders': {
    page: CamLanding,
    metadata: {
      title: 'Critical Alignment Model for Leaders — Remi Pearson',
      description: 'Learn the Critical Alignment Model with its creator, Remi Pearson: nine videos, workbooks and examples for assessing a situation across purpose, environment, structure, implementation and people before you decide where to intervene.',
    },
  },
  'ultimate-influence-consultative-sales-introduction': {
    page: UiLanding,
    metadata: {
      title: 'Ultimate Influence: Consultative Sales Training — Remi Pearson',
      description: 'The complete eight-step consultative sales methodology with Remi Pearson: eleven videos, a workbook and example conversations on understanding someone, recommending with a clear rationale and asking for a decision without becoming pushy.',
    },
  },
  'selling-from-stage': {
    page: SfsLanding,
    metadata: {
      title: 'Selling from Stage: Turn an Audience into Buyers — Remi Pearson',
      description: 'A self-paced online program with Remi Pearson: shape a compelling offer, present it on a live stage or a webinar, and follow through after the pitch. Recorded teaching, workbooks and supporting resources.',
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
