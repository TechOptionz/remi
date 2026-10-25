// One page per product in content/products.ts — Coming soon until its copy exists. A product with its own designed sales
// page (LANDINGS) shows that instead, with its own search listing.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/products/ProductPage';
import TriadLanding from '@/components/triad-landing/TriadLanding';
import CamLanding from '@/components/cam-landing/CamLanding';
import UiLanding from '@/components/ui-landing/UiLanding';
import SfsLanding from '@/components/sfs-landing/SfsLanding';
import WdkLanding from '@/components/wdk-landing/WdkLanding';
import EitLanding from '@/components/eit-landing/EitLanding';
import SrLanding from '@/components/sr-landing/SrLanding';
import BcLanding from '@/components/bc-landing/BcLanding';
import DsrLanding from '@/components/dsr-landing/DsrLanding';
import HsLanding from '@/components/hs-landing/HsLanding';
import OtlLanding from '@/components/otl-landing/OtlLanding';
import FpLanding from '@/components/fp-landing/FpLanding';
import AolLanding from '@/components/aol-landing/AolLanding';
import FwbLanding from '@/components/fwb-landing/FwbLanding';
import N90Landing from '@/components/n90-landing/N90Landing';
import BmLanding from '@/components/bm-landing/BmLanding';
import BbfLanding from '@/components/bbf-landing/BbfLanding';
import CbyLanding from '@/components/cby-landing/CbyLanding';
import CiiLanding from '@/components/cii-landing/CiiLanding';
import DlpLanding from '@/components/dlp-landing/DlpLanding';
import { PRODUCTS, productBySlug, LANDING_SLUGS } from '@/content/products';

const LANDINGS: Record<(typeof LANDING_SLUGS)[number], { page: () => React.ReactNode; metadata: Metadata }> = {
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
  'why-do-i-keep-doing-this': {
    page: WdkLanding,
    metadata: {
      title: 'Why Do I Keep Doing This? Free Video Series — Remi Pearson',
      description: 'Five free videos with Remi Pearson on self-sabotage and the inner conflicts that keep you repeating familiar patterns: what a part of you may be protecting, and a more useful question to begin with.',
    },
  },
  'emotion-integration-technique-foundations': {
    page: EitLanding,
    metadata: {
      title: 'Emotion Integration Technique (EIT) Foundations — Remi Pearson',
      description: 'Learn the principles of Emotion Integration Technique with its creator, Remi Pearson: five videos, a guided demonstration and a workbook on staying with the feelings you avoid and finding compassion when it feels out of reach. AUD $49.',
    },
  },
  'self-regulation-when-it-matters': {
    page: SrLanding,
    metadata: {
      title: 'Self-Regulation When It Matters — Remi Pearson',
      description: 'A self-paced program with Remi Pearson: recognise your early warning signs, work with urgency and shutdown through body-based practices, and stay present in difficult conversations. Five videos, a workbook and a guided meditation. AUD $29.',
    },
  },
  'becoming-conscious': {
    page: BcLanding,
    metadata: {
      title: 'Becoming Conscious: A Gentle Introduction to Presence — Remi Pearson',
      description: 'Three short videos with guided practices from Remi Pearson: notice your surroundings, feel the sensations in your body and become aware of your thoughts without following every one. No meditation experience needed. AUD $29.',
    },
  },
  'deep-state-repatterning': {
    page: DsrLanding,
    metadata: {
      title: 'Deep State Repatterning™ — Remi Pearson',
      description: 'Why does the past still have so much power over you? Five videos, a workbook and a guided Deep State Repatterning experience with its creator, Remi Pearson, on the emotional meaning attached to past experiences. AUD $29.',
    },
  },
  'holding-space-without-rescuing-or-disappearing': {
    page: HsLanding,
    metadata: {
      title: 'Holding Space Without Rescuing or Disappearing — Remi Pearson',
      description: 'Learn to stay with a difficult conversation when someone you love is upset: listen so they feel heard, understand what support they want, and care without taking over or withdrawing. Five videos and a workbook with Remi Pearson. AUD $29.',
    },
  },
  'obstacles-to-love': {
    page: OtlLanding,
    metadata: {
      title: 'Obstacles to Love: Why You Keep Ending Up Hurt, Guarded or Alone — Remi Pearson',
      description: 'Recognise seven patterns that make connection difficult, from fear-driven reassurance to losing yourself and hurt that never gets repaired. Seven videos and a practical workbook with Remi Pearson, with a first practice for each. AUD $49.',
    },
  },
  'five-paths-to-a-healthy-relationship': {
    page: FpLanding,
    metadata: {
      title: 'The Five Paths to a Healthy Relationship — Remi Pearson',
      description: 'A self-paced relationship program with Remi Pearson: five videos and a companion worksheet to help you recognise the patterns that pull you apart, turn towards each other, make room for both people, repair after conflict and build a relationship you both want.',
    },
  },
  'attachment-or-love': {
    page: AolLanding,
    metadata: {
      title: 'Attachment or Love? Free Three-Video Series — Remi Pearson',
      description: 'Why does love so often leave you on edge? A free three-video series with Remi Pearson on attachment patterns, emotional safety, co-regulation and caring for each other when something hurts. Self-paced, no purchase required.',
    },
  },
  'finding-our-way-back': {
    page: FwbLanding,
    metadata: {
      title: 'Finding Our Way Back: Repair After Conflict — Remi Pearson',
      description: 'Learn how to repair after conflict and reconnect with care: return to a difficult conversation, understand each other’s hurt and make agreements you can follow through on. Three practical videos and a workbook with Remi Pearson. AUD $29.',
    },
  },
  'the-90-day-review': {
    page: N90Landing,
    metadata: {
      title: 'The 90-Day Review & Personal Success Plan — Remi Pearson',
      description: 'Run quarterly performance reviews that connect your team’s work to your vision and values, make expectations clear and end in a 90-day Personal Success Plan. Three videos and editable review templates from Remi Pearson. Join the waitlist.',
    },
  },
  'benchmarking-what-good-actually-looks-like': {
    page: BmLanding,
    metadata: {
      title: 'Benchmarking: What Good Actually Looks Like — Remi Pearson',
      description: 'Make the standard in your head clear to your team: define what good looks like, learn from people who already do it well and track lead and lag measures. Four videos and an implementation workbook from Remi Pearson. AUD $29. Join the waitlist.',
    },
  },
  'build-beyond-the-founder': {
    page: BbfLanding,
    metadata: {
      title: 'Build Beyond the Founder: Three Programs for Business Owners — Remi Pearson',
      description: 'Make your expertise teachable, hand over responsibility with confidence and decide what your business needs next. Technician to Entrepreneur, Core, Improve, Innovate and Trust That Holds in one self-paced collection from Remi Pearson. Join the waitlist.',
    },
  },
  'come-back-to-yourself': {
    page: CbyLanding,
    metadata: {
      title: 'Come Back to Yourself: Five Self-Paced Programs — Remi Pearson',
      description: 'Care about other people without leaving yourself behind: five self-paced programs from Remi Pearson on emotions, needs and boundaries, protective patterns, self-regulation and presence. AUD $79, saving $57. Join the waitlist.',
    },
  },
  'core-improve-innovate': {
    page: CiiLanding,
    metadata: {
      title: 'Core, Improve, Innovate: Free Program for Business Owners — Remi Pearson',
      description: 'A free program from Remi Pearson: three videos and a workbook to decide what to protect, what to strengthen and when a new direction deserves your investment, so your effort goes where your business needs it. Join the waitlist.',
    },
  },
  'disruptive-leadership': {
    page: DlpLanding,
    metadata: {
      title: 'Disruptive Leadership: Free Introductory Program — Remi Pearson',
      description: 'A free introductory leadership program from Remi Pearson for business owners and team leaders: set expectations people can act on, address behaviour that undermines your team and stop carrying everyone else’s responsibilities. Join the waitlist.',
    },
  },
};

export const dynamicParams = false;
export const generateStaticParams = () => PRODUCTS.map(p => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return LANDINGS[slug as (typeof LANDING_SLUGS)[number]]?.metadata ?? { title: `${p.title} — Remi Pearson`, description: p.text };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const Landing = LANDINGS[slug as (typeof LANDING_SLUGS)[number]]?.page;
  return Landing ? <Landing /> : <ProductPage product={p} />;
}
