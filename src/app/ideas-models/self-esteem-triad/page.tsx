// The Self-Esteem Triad — a chapter of Ideas & Models on its own page. Sections in components/triad/;
// lists in content/triad.ts; styles in styles/self-esteem-triad.css (on top of ideas-models.css).
import type { Metadata } from 'next';
import TriadIntro from '@/components/triad/TriadIntro';
import TriadWhy from '@/components/triad/TriadWhy';
import TriadArms from '@/components/triad/TriadArms';
import TriadTogether from '@/components/triad/TriadTogether';
import FifteenNeeds from '@/components/triad/FifteenNeeds';
import TriadBegin from '@/components/triad/TriadBegin';
import TriadClose from '@/components/triad/TriadClose';

export const metadata: Metadata = {
  title: 'The Self-Esteem Triad — Remi Pearson',
  description: 'Self-esteem is something we live. Remi Pearson’s Self-Esteem Triad brings together needs, boundaries and emotions, with worthy, lovable and enough at the centre, and the fifteen emotional needs inside the Needs arm.',
};

export default function SelfEsteemTriadPage() {
  return (
    <main className="ideas triad">
      <div className="ideas-page">
        <TriadIntro />
        <TriadWhy />
        <TriadArms />
        <TriadTogether />
        <FifteenNeeds />
        <TriadBegin />
        <TriadClose />
      </div>
    </main>
  );
}
