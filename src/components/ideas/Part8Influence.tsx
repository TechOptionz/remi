import { PRACTICE_VS_BUSINESS, PRODUCTS_HREF, PROOF } from '@/content/ideas';
import { Arrow, Art, Body, Btn, H3, Hand, HeadNote, Panel, Part, PartHead } from './ui';
import ZoomArt from './ZoomArt';

const CIRCLES_ALT = 'Core, Improve, Innovate by Remi Pearson: three nested circles. Core, at the centre: protect what works. Improve, around it: make the core better. Innovate, the outer ring: create what comes next. The balance changes as the business changes.';
const PATH_ALT = 'Ultimate Influence by Remi Pearson: eight stepping stones climbing a hillside. 1 Ignite, 2 Excite, 3 Flip, 4 Match, 5 Recommend, 6 Backtrack, 7 Close, 8 Future pace.';

/** Ultimate Influence: the idea on the left, the eight-step path illustration on the right. */
function UltimateInfluence() {
  return (
    <div className="ui-grid">
      <div>
        <H3 v={['left']}>Ultimate Influence Consultative Sales</H3>
        <Hand>How do I help someone make a quality buying decision without scripts, pressure or bullshit?</Hand>
        <Body sm>Diagnose before prescribing. Understand the buyer's values, needs and decision process. Communicate intangible value clearly. Recommend only when there is a genuine match.</Body>
        <Btn href={PRODUCTS_HREF} v={['sm']}>Explore Ultimate Influence</Btn>
      </div>
      <div className="ui-steps">
        <ZoomArt name="ui-path" alt={PATH_ALT} label="Ultimate Influence" className="ui-art" />
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
        <img src="/assets/ideas/cii-model.webp" alt={CIRCLES_ALT} />
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
      <CoreImproveInnovate />
    </Part>
  );
}
