// Disruptive Leadership — a chapter of Ideas & Models on its own page. Sections in components/dl/;
// lists in content/dl.ts; styles in styles/dl.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import DlIntro from '@/components/dl/DlIntro';
import DlWhitePaper from '@/components/dl/DlWhitePaper';
import DlMovements from '@/components/dl/DlMovements';
import DlClose from '@/components/dl/DlClose';

export const metadata: Metadata = {
  title: 'Disruptive Leadership — Remi Pearson',
  description: 'The leadership model for what could be. Remi Pearson’s Disruptive Leadership: challenge a status quo that no longer serves the greater good, see what could be, and achieve the result while increasing the capacity of the people and systems responsible for producing it. Five movements: See, Align, Mobilise, Deliver, Evolve.',
};

export default function DisruptiveLeadershipPage() {
  return (
    <main className="ideas triad safe dsr eit vat cam tm dl">
      <div className="ideas-page">
        <DlIntro />
        <DlWhitePaper />
        <DlMovements />
        <DlClose />
      </div>
    </main>
  );
}
