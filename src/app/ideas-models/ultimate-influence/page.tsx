// Ultimate Influence Consultative Sales — a chapter of Ideas & Models on its own page. Sections in components/uic/;
// lists in content/uic.ts; styles in styles/uic.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import UicIntro from '@/components/uic/UicIntro';
import UicConsultative from '@/components/uic/UicConsultative';
import UicSteps from '@/components/uic/UicSteps';
import UicClose from '@/components/uic/UicClose';

export const metadata: Metadata = {
  title: 'Consultative Sales: How to Know When You and a Buyer Are the Right Match — Remi Pearson',
  description: 'Ultimate Influence, Remi Pearson’s eight-step consultative sales method: Ignite, Excite, Flip, Match, Recommend, Backtrack, Close and Future Pace. Understand what the buyer values, assess the match honestly and help them make a good decision without pressure.',
};

export default function UltimateInfluenceChapterPage() {
  return (
    <main className="ideas triad safe dsr eit vat cam tm dl uic">
      <div className="ideas-page">
        <UicIntro />
        <UicConsultative />
        <UicSteps />
        <UicClose />
      </div>
    </main>
  );
}
