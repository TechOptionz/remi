// "I've built myself a job. How do I build an asset?" — the sixth rabbit hole from the homepage, after the design
// (Photos-Images/16–18. BUILD) and its copy deck. Sections in components/build/ (the pieces shared with the other
// rabbit-hole pages in components/rabbit-holes/), lists and links in content/build-an-asset.ts, styles in
// styles/rabbit-holes.css (shared) + styles/build-an-asset.css.
import type { Metadata } from 'next';
import BdPatterns from '@/components/build/BdPatterns';
import BdStages from '@/components/build/BdStages';
import BdTransferable from '@/components/build/BdTransferable';
import BdTrustme from '@/components/build/BdTrustme';
import BdBuilt from '@/components/build/BdBuilt';
import SplitHero from '@/components/rabbit-holes/SplitHero';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import Product from '@/components/rabbit-holes/Product';
import TopicLinks from '@/components/rabbit-holes/TopicLinks';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import { Brush } from '@/components/rabbit-holes/ui';
import { AUDIT_HREF, AUDIT_PRICE, AUDIT_STEPS, TOPIC_LINKS } from '@/content/build-an-asset';
import ProductRange from '@/components/products/ProductRange';
import SegmentCta from '@/components/shared/SegmentCta';

export const metadata: Metadata = {
  title: 'I’ve Built Myself a Job. How Do I Build an Asset? — Remi Pearson',
  description: 'If revenue stops when you stop, the business may be successful, but it is not independent. From practice to asset: turning personal expertise into intellectual property, repeatable delivery and a company worth selling.',
};

export default function BuildAnAssetPage() {
  return (
    <main className="kb bd">
      <div className="kb-page">
        <SplitHero
          id="bd-title"
          title={<>I’ve built myself a job.<br /> How do I <Brush>build an asset?</Brush></>}
          lede="If revenue stops when you stop, the business may be successful, but it is not independent. I learned this by turning personal expertise into intellectual property, repeatable delivery and eventually a company worth selling."
          primary={{ label: 'Show me what still depends on me', href: '#patterns' }}
          secondary={{ label: 'See how I built beyond the founder', href: '#built' }}
          photo={{ name: 'bd-hero', alt: 'A travertine arch built from stone blocks beside a vase of olive branches and a brass block, in warm window light', width: 906, height: 1286 }}
        />
        <BdPatterns />
        <BdStages />
        <BdTransferable />
        <BdTrustme />
        <ReadyStrip href="#founder-audit" arrows="down">Ready to find the next thing to transfer?</ReadyStrip>
        <Product
          id="founder-audit"
          title={<>Build <Brush>beyond you</Brush></>}
          art="bd-book"
          price={AUDIT_PRICE}
          lede="A practical, self-directed process for seeing where value, decisions, delivery, demand and relationships still depend on you, and what must become transferable next."
          steps={AUDIT_STEPS}
          cta={{ label: 'Start the founder dependency audit', href: AUDIT_HREF }}
          note="Work through it in your own time. No classes. No calls. No weekly obligation."
        />
        <BdBuilt />
        <TopicLinks id="bd-convs-h" title={<><Brush>Conversations</Brush> to disappear into</>} lede="Because the business usually reveals what the founder has not yet transferred." links={TOPIC_LINKS} cta="filled" />
        <ProductRange category="business" />
        <SegmentCta segment="business" />
        <OtherHoles show={[3, 4]} className="kb-isolation--left" title={<>Nothing important <Brush>stays in</Brush> one box</>} />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}
