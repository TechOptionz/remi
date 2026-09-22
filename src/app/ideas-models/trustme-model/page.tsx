// The T.R.U.S.T.M.E. Model — a chapter of Ideas & Models on its own page. Sections in components/trustme/;
// lists in content/trustme.ts; styles in styles/trustme.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import TmIntro from '@/components/trustme/TmIntro';
import TmFoundations from '@/components/trustme/TmFoundations';
import TmLevels from '@/components/trustme/TmLevels';
import TmPressure from '@/components/trustme/TmPressure';
import TmClose from '@/components/trustme/TmClose';

export const metadata: Metadata = {
  title: 'The T.R.U.S.T.M.E. Model — Remi Pearson',
  description: 'How our values develop and why our best thinking can disappear under pressure. Remi Pearson’s T.R.U.S.T.M.E. model: seven levels of thinking, Trust, Relatability, Uniqueness, Systems, Tenacity, Meaning and Evolution, each with a resourceful and an unresourceful expression.',
};

export default function TrustmeModelPage() {
  return (
    <main className="ideas triad safe dsr eit vat cam tm">
      <div className="ideas-page">
        <TmIntro />
        <TmFoundations />
        <TmLevels />
        <TmPressure />
        <TmClose />
      </div>
    </main>
  );
}
