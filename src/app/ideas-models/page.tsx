// Ideas & Models — the hand-drawn map. One component per part in components/ideas/; styles in styles/ideas-models.css.
import type { Metadata } from 'next';
import Part1Intro from '@/components/ideas/Part1Intro';
import Part2Glance from '@/components/ideas/Part2Glance';
import Part3SelfEsteem from '@/components/ideas/Part3SelfEsteem';
import Part4Change from '@/components/ideas/Part4Change';
import Part5Alignment from '@/components/ideas/Part5Alignment';
import Part6Trustme from '@/components/ideas/Part6Trustme';
import Part7Quadrants from '@/components/ideas/Part7Quadrants';
import Part8Influence from '@/components/ideas/Part8Influence';
import Part9Research from '@/components/ideas/Part9Research';

export const metadata: Metadata = {
  title: 'Ideas & Models — Remi Pearson',
  description: 'Things Remi Pearson has spent years trying to figure out: the models and ideas behind the work, from the Self-Esteem Triad to T.R.U.S.T.M.E., the Critical Alignment Model and Core → Improve → Innovate.',
};

export default function IdeasModelsPage() {
  return (
    <main className="ideas">
      <div className="ideas-page">
        <Part1Intro />
        <Part2Glance />
        <Part3SelfEsteem />
        <Part4Change />
        <Part5Alignment />
        <Part6Trustme />
        <Part7Quadrants />
        <Part8Influence />
        <Part9Research />
      </div>
    </main>
  );
}
