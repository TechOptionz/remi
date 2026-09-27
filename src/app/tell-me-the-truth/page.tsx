// "Tell me the truth. What am I not seeing?" — the third rabbit hole from the homepage, after the design
// (Photos-Images/7–9. TELL ME THE TRUTH) and its copy deck. Sections in components/truth/ (the pieces shared with the other
// rabbit-hole pages in components/rabbit-holes/), lists and links in content/tell-me-the-truth.ts, styles in
// styles/rabbit-holes.css (shared) + styles/tell-me-the-truth.css.
import type { Metadata } from 'next';
import TtHero from '@/components/truth/TtHero';
import TtPatterns from '@/components/truth/TtPatterns';
import TtGap from '@/components/truth/TtGap';
import TtQuestions from '@/components/truth/TtQuestions';
import TtLead from '@/components/truth/TtLead';
import TtConversations from '@/components/truth/TtConversations';
import Product from '@/components/rabbit-holes/Product';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import { Brush, StarRule } from '@/components/rabbit-holes/ui';
import { TRUTH_AUDIT_HREF, TRUTH_AUDIT_PRICE, TRUTH_AUDIT_STEPS } from '@/content/tell-me-the-truth';

export const metadata: Metadata = {
  title: 'Tell Me the Truth. What Am I Not Seeing? — Remi Pearson',
  description: 'Most of us don’t struggle because we lack information. We struggle because something in us is protecting a conclusion, an identity or a certainty we are not yet ready to question. The gap is where the truth lives.',
};

export default function TellMeTheTruthPage() {
  return (
    <main className="kb tt">
      <div className="kb-page">
        <TtHero />
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
        <TtConversations />
        <StarRule />
        <OtherHoles show={[0, 3]} className="kb-isolation--left" title={<>Truth has a habit of <Brush>turning up</Brush> everywhere</>} />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}
