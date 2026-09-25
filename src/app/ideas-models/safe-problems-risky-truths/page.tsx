// Safe Problems, Risky Truths — a chapter of Ideas & Models on its own page. Sections in components/safe/;
// lists in content/safe.ts; styles in styles/safe-problems.css (on top of ideas-models.css and self-esteem-triad.css).
import type { Metadata } from 'next';
import SafeIntro from '@/components/safe/SafeIntro';
import SafeWhat from '@/components/safe/SafeWhat';
import SafeBeneath from '@/components/safe/SafeBeneath';
import SafeStreet from '@/components/safe/SafeStreet';
import SafeReal from '@/components/safe/SafeReal';
import SafeInquiry from '@/components/safe/SafeInquiry';
import SafeOkay from '@/components/safe/SafeOkay';

export const metadata: Metadata = {
  title: 'Why Do We Keep Trying to Solve the Same Problem? Safe Problems, Risky Truths — Remi Pearson',
  description: 'What the problem we keep trying to solve may be protecting us from. Remi Pearson’s distinction between safe problems and risky truths, taking care of your side of the street, and the compassionate inquiry that follows.',
};

export default function SafeProblemsPage() {
  return (
    <main className="ideas triad safe">
      <div className="ideas-page">
        <SafeIntro />
        <SafeWhat />
        <SafeBeneath />
        <SafeStreet />
        <SafeReal />
        <SafeInquiry />
        <SafeOkay />
      </div>
    </main>
  );
}
