import { PRACTICE_VS_BUSINESS, PRODUCTS_HREF, PROOF, SALES_STEPS } from '@/content/ideas';
import { Arrow, Art, Body, Btn, H3, Hand, HeadNote, NextLink, Panel, Part, PartHead } from './ui';

const CIRCLES_ALT = 'Core, 70%: the most important thing. Do what works consistently until it is stable, systemised and replicable by others. Improve, 20%: strengthen what already works so it stays relevant, robust, fit for purpose and scalable. Innovate, 10%: add what is genuinely new only after Core is cared for and dependable.';

/** Ultimate Influence: the idea on the left, the eight-step path on the right (SALES_STEPS). */
function UltimateInfluence() {
  return (
    <div className="ui-grid">
      <div>
        <H3 v={['left']}>Ultimate Influence Consultative Sales</H3>
        <Hand>How do I help someone make a quality buying decision without scripts, pressure or bullshit?</Hand>
        <Body sm>Diagnose before prescribing. Understand the buyer's values, needs and decision process. Communicate intangible value clearly. Recommend only when there is a genuine match.</Body>
      </div>
      <div className="ui-steps">
        <Art name="p8-path" />
        <ol className="ui-list">{SALES_STEPS.map(s => <li key={s}>{s}</li>)}</ol>
        <HeadNote art="p8-arrow" inline className="ui-note"><Hand v={['sm']}>A conversation, not a performance.</Hand></HeadNote>
      </div>
    </div>
  );
}

/** Rust panel: Core → Improve → Innovate, practice vs business, and the proof row. */
function CoreImproveInnovate() {
  return (
    <Panel tone="rust">
      <H3 className="panel-title">Core <Arrow /> Improve <Arrow /> Innovate</H3>
      <p className="panel-body panel-body--center">A Meta Dynamics model created by Remi Pearson.</p>
      <Hand v={['center', 'cream', 'underline-cream']}>What deserves my attention if I want to build something stable, useful and able to live beyond me?</Hand>
      <div className="cii-grid">
        <img src="/assets/ideas/p8-circles.webp" alt={CIRCLES_ALT} />
        <div>
          <h4 className="cii-h">From practice to business</h4>
          <div className="cii-cols">
            {PRACTICE_VS_BUSINESS.map(c => <div key={c.title}><h5>{c.title}</h5><p>{c.text}</p></div>)}
          </div>
          <Hand v={['center', 'cream', 'sm']}>Income should be the least surprising thing about the business.</Hand>
        </div>
      </div>
      <ul className="proof-row">{PROOF.map(p => <li key={p.big}><span>{p.big}</span>{p.small}</li>)}</ul>
      <div className="panel-actions panel-actions--two">
        <Btn href={PRODUCTS_HREF} v={['outline']}>Explore Core <Arrow /> Improve <Arrow /> Innovate</Btn>
        <Btn href="/invite-remi?invite=Consulting#invite-form" v={['outline']}>Build something beyond me</Btn>
      </div>
    </Panel>
  );
}

// PART EIGHT · INFLUENCE & ENTERPRISE
export default function Part8Influence() {
  return (
    <Part n={8}>
      <PartHead n={8} rule title="Help people decide. Build something that doesn't need you." aside={<Art name="p8-star" />}>
        <Body>These two bodies of work came from the same refusal: I did not want good people manipulated into buying, and I did not want talented founders trapped inside the thing they had built.</Body>
      </PartHead>
      <UltimateInfluence />
      <Btn href={PRODUCTS_HREF} v={['sm', 'right']}>Explore Ultimate Influence</Btn>
      <CoreImproveInnovate />
      <Btn href="#part-9" v={['dark']}>Continue to the research &amp; next steps</Btn>
      <NextLink href="#part-9">Continue to research &amp; next steps</NextLink>
    </Part>
  );
}
