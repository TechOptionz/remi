// "Why does loving someone bring all my shit to the surface?" — the second rabbit hole from the homepage, after the design
// (Photos-Images/4–6. WHY DOES LOVING SOMEONE) and its copy deck. Sections in components/loving-someone/ (the pieces shared
// with the other rabbit-hole pages in components/rabbit-holes/), lists and links in content/loving-someone.ts, styles in
// styles/rabbit-holes.css (shared) + styles/loving-someone.css.
import type { Metadata } from 'next';
import LsHero from '@/components/loving-someone/LsHero';
import LsPatterns from '@/components/loving-someone/LsPatterns';
import LsCycle from '@/components/loving-someone/LsCycle';
import LsRemain from '@/components/loving-someone/LsRemain';
import LsCapable from '@/components/loving-someone/LsCapable';
import LsFivePaths from '@/components/loving-someone/LsFivePaths';
import LsConversations from '@/components/loving-someone/LsConversations';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import ProductRange from '@/components/products/ProductRange';
import SegmentCta from '@/components/shared/SegmentCta';

export const metadata: Metadata = {
  title: 'Why Does Loving Someone Bring All My Shit to the Surface? — Remi Pearson',
  description: 'Relationships have an extraordinary talent for finding the parts of us we thought we had dealt with. Love doesn’t create all your patterns. It gives them somewhere to show up.',
};

export default function LovingSomeonePage() {
  return (
    <main className="kb ls">
      <div className="kb-page">
        <LsHero />
        <LsPatterns />
        <LsCycle />
        <LsRemain />
        <LsCapable />
        <LsFivePaths />
        <LsConversations />
        <ProductRange category="relationships" />
        <SegmentCta segment="relationships" />
        <OtherHoles show={[0, 2]} className="kb-isolation--left" />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}
