// "How do I lead without carrying everybody?" — the fourth rabbit hole from the homepage, after the design
// (Photos-Images/10–12. LEADERSHIP) and its copy deck. Sections in components/leadership/ (the pieces shared with the other
// rabbit-hole pages in components/rabbit-holes/), lists and links in content/leadership.ts, styles in
// styles/rabbit-holes.css (shared) + styles/leadership.css.
import type { Metadata } from 'next';
import LdPatterns from '@/components/leadership/LdPatterns';
import LdTrustme from '@/components/leadership/LdTrustme';
import LdPrinciples from '@/components/leadership/LdPrinciples';
import LdStopCarrying from '@/components/leadership/LdStopCarrying';
import LdBook from '@/components/leadership/LdBook';
import SplitHero from '@/components/rabbit-holes/SplitHero';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import Product from '@/components/rabbit-holes/Product';
import TopicLinks from '@/components/rabbit-holes/TopicLinks';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import { Brush } from '@/components/rabbit-holes/ui';
import { LEADERSHIP_AUDIT_HREF, LEADERSHIP_AUDIT_PRICE, LEADERSHIP_AUDIT_STEPS, TOPIC_LINKS } from '@/content/leadership';

export const metadata: Metadata = {
  title: 'How Do I Lead Without Carrying Everybody? — Remi Pearson',
  description: 'If everything depends on your vigilance, energy and ability to hold it all together, you are not leading a capable system. You are compensating for one. Where leadership has become carrying, and the T.R.U.S.T.M.E. model.',
};

export default function LeadershipPage() {
  return (
    <main className="kb ld">
      <div className="kb-page">
        <SplitHero
          id="ld-title"
          title={<>How do I lead without<br /> <Brush>carrying</Brush> everybody?</>}
          lede="If everything depends on your vigilance, energy and ability to hold it all together, you are not leading a capable system. You are compensating for one."
          primary={{ label: 'Show me what I’m carrying', href: '#patterns' }}
          secondary={{ label: 'Meet the T.R.U.S.T.M.E. model', href: '#trustme' }}
          photo={{ name: 'ld-hero', alt: 'Brass bowls and spheres balanced on stone discs, stacked on a stone plinth in warm light', width: 812, height: 1354, position: '50% 0' }}
        />
        <LdPatterns />
        <LdTrustme />
        <LdPrinciples />
        <LdStopCarrying />
        <ReadyStrip href="#leadership-audit" arrows="down">Ready to see the level you’re leading from?</ReadyStrip>
        <Product
          id="leadership-audit"
          title={<>The T.R.U.S.T.M.E. <Brush>leadership audit</Brush></>}
          art="ld-audit"
          price={LEADERSHIP_AUDIT_PRICE}
          lede="A clear, self-directed assessment for seeing the level of thinking shaping your leadership, where you are over-functioning and what the next shift requires."
          steps={LEADERSHIP_AUDIT_STEPS}
          cta={{ label: 'Start the leadership audit', href: LEADERSHIP_AUDIT_HREF }}
          note="Work through it in your own time. No classes. No calls. No weekly obligation."
        />
        <LdBook />
        <TopicLinks id="ld-convs-h" title={<><Brush>Conversations</Brush> to disappear into</>} lede="Because leadership gets interesting when we stop talking in slogans." links={TOPIC_LINKS} cta="filled" />
        <OtherHoles show={[2, 5]} className="kb-isolation--left" title={<>Nothing important <Brush>stays in</Brush> one box</>} />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}
