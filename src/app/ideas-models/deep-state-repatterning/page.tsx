// Deep State Repatterning — a chapter of Ideas & Models on its own page. Sections in components/dsr/;
// lists in content/dsr.ts; styles in styles/dsr.css (on top of ideas-models.css, self-esteem-triad.css and safe-problems.css).
import type { Metadata } from 'next';
import DsrIntro from '@/components/dsr/DsrIntro';
import DsrChain from '@/components/dsr/DsrChain';
import DsrAssociation from '@/components/dsr/DsrAssociation';
import DsrChange from '@/components/dsr/DsrChange';
import DsrForgiveness from '@/components/dsr/DsrForgiveness';
import DsrTested from '@/components/dsr/DsrTested';

export const metadata: Metadata = {
  title: 'Deep State Repatterning — Remi Pearson',
  description: 'Why an old experience can stop being over, and how the mind can finally place it in the past. Remi Pearson’s Deep State Repatterning™: the chain of pearls, association and dissociation, the release of stored emotion, self-forgiveness and future pacing.',
};

export default function DeepStateRepatterningPage() {
  return (
    <main className="ideas triad safe dsr">
      <div className="ideas-page">
        <DsrIntro />
        <DsrChain />
        <DsrAssociation />
        <DsrChange />
        <DsrForgiveness />
        <DsrTested />
      </div>
    </main>
  );
}
