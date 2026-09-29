// Values Alignment Technique — a chapter of Ideas & Models on its own page. Sections in components/vat/;
// lists in content/vat.ts; styles in styles/vat.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import VatIntro from '@/components/vat/VatIntro';
import VatValue from '@/components/vat/VatValue';
import VatGoal from '@/components/vat/VatGoal';
import VatMattering from '@/components/vat/VatMattering';
import VatClose from '@/components/vat/VatClose';
import ChapterVideo from '@/components/ideas/ChapterVideo';
import SegmentCta from '@/components/shared/SegmentCta';

export const metadata: Metadata = {
  title: 'Values Alignment Technique — Remi Pearson',
  description: 'Understanding what is driving your life before deciding where to take it. Remi Pearson’s Values Alignment Technique: lived values versus desired experiences, the comfort of having a goal, protection and secondary gain, inner work, and goals that emerge from a clearer relationship with ourselves.',
};

export default function ValuesAlignmentPage() {
  return (
    <main className="ideas triad safe dsr eit vat">
      <div className="ideas-page">
        <VatIntro />
        <ChapterVideo chapter="values-alignment-technique" />
        <VatValue />
        <VatGoal />
        <VatMattering />
        <VatClose />
        <SegmentCta segment="personal-development" />
      </div>
    </main>
  );
}
