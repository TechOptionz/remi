// "Tell me the truth. What am I not seeing?" — the third rabbit hole from the homepage, after the design
// (Photos-Images/7–9. TELL ME THE TRUTH) and its copy deck. Sections in components/truth/ (the pieces shared with the other
// rabbit-hole pages in components/rabbit-holes/), lists and links in content/tell-me-the-truth.ts, styles in
// styles/rabbit-holes.css (shared) + styles/tell-me-the-truth.css.
import type { Metadata } from 'next';
import TtPatterns from '@/components/truth/TtPatterns';
import TtGap from '@/components/truth/TtGap';
import TtQuestions from '@/components/truth/TtQuestions';
import TtLead from '@/components/truth/TtLead';
import Product from '@/components/rabbit-holes/Product';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import SplitHero from '@/components/rabbit-holes/SplitHero';
import TopicLinks from '@/components/rabbit-holes/TopicLinks';
import { Brush, StarRule } from '@/components/rabbit-holes/ui';
import { CAM_HREF, TOPIC_LINKS, TRUTH_AUDIT_HREF, TRUTH_AUDIT_PRICE, TRUTH_AUDIT_STEPS } from '@/content/tell-me-the-truth';
import ProductRange from '@/components/products/ProductRange';
import SegmentCta from '@/components/shared/SegmentCta';

export const metadata: Metadata = {
  title: 'Tell Me the Truth. What Am I Not Seeing? — Remi Pearson',
  description: 'Most of us don’t struggle because we lack information. We struggle because something in us is protecting a conclusion, an identity or a certainty we are not yet ready to question. The gap is where the truth lives.',
};

export default function TellMeTheTruthPage() {
  return (
    <main className="kb tt">
      <div className="kb-page">
        <SplitHero
          id="tt-title"
          title={<>Tell me the truth.<br /> <Brush>What am I</Brush> not seeing?</>}
          lede="Most of us don’t struggle because we lack information. We struggle because something in us is protecting a conclusion, an identity or a certainty we are not yet ready to question."
          primary={{ label: 'Help me see what I’m missing', href: '#patterns' }}
          secondary={{ label: 'Meet the Critical Alignment Model', href: CAM_HREF }}
          photo={{ name: 'tt-hero', alt: 'An oval brass mirror on a marble table beside a linen curtain, in late sunlight', width: 982, height: 1344 }}
        />
        <TtPatterns />
        <TtGap />
        <TtQuestions />
        <TtLead />
        <ReadyStrip href="#truth-audit" arrows="down">Ready to look at your own gap?</ReadyStrip>
        <Product
          id="truth-audit"
          title={<><Brush>The truth</Brush> audit</>}
          art="tt-book"
          price={TRUTH_AUDIT_PRICE}
          lede="A clear, self-directed process for uncovering the gap between what you say you want and what your life, relationship, leadership or business is currently producing."
          steps={TRUTH_AUDIT_STEPS}
          cta={{ label: 'Start the truth audit', href: TRUTH_AUDIT_HREF }}
          note="Work through it in your own time. No classes. No calls. No weekly obligation."
        />
        <StarRule />
        <TopicLinks id="tt-convs-h" title={<><Brush>Conversations</Brush> to disappear into</>} lede="Follow the questions wherever they lead." links={TOPIC_LINKS} />
        <StarRule />
        <ProductRange category="truth" />
        <SegmentCta segment="personal-development" />
        <OtherHoles show={[0, 3]} className="kb-isolation--left" title={<>Truth has a habit of <Brush>turning up</Brush> everywhere</>} />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}
