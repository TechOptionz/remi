// Emotion Integration Technique — a chapter of Ideas & Models on its own page. Sections in components/eit/;
// lists in content/eit.ts; styles in styles/eit.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import EitIntro from '@/components/eit/EitIntro';
import EitInsight from '@/components/eit/EitInsight';
import EitOutward from '@/components/eit/EitOutward';
import EitUnderneath from '@/components/eit/EitUnderneath';
import EitCapacity from '@/components/eit/EitCapacity';
import EitClose from '@/components/eit/EitClose';

export const metadata: Metadata = {
  title: 'Why Can’t I Feel My Emotions Even When I Understand Myself? Emotion Integration Technique — Remi Pearson',
  description: 'How moving further away can become the path back to compassion. Remi Pearson’s Emotion Integration Technique for highly dissociative, intellectually defended clients: move outward until compassion is available, carry it back inward, then move underneath.',
};

export default function EmotionIntegrationPage() {
  return (
    <main className="ideas triad safe dsr eit">
      <div className="ideas-page">
        <EitIntro />
        <EitInsight />
        <EitOutward />
        <EitUnderneath />
        <EitCapacity />
        <EitClose />
      </div>
    </main>
  );
}
