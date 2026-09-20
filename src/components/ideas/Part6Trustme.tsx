import { DISRUPTIVE_LEADERSHIP_PILLARS, PRODUCTS_HREF } from '@/content/ideas';
import { Art, Body, Btn, H3, Hand, HeadNote, Panel, Part, PartHead } from './ui';

const SPIRAL_ALT = 'The seven levels of T.R.U.S.T.M.E., rising in a spiral: 1 Trust, 2 Relatability, 3 Uniqueness, 4 Systems, 5 Tenacity, 6 Meaning, 7 Evolution.';

/** Rust panel: the Disruptive Leadership philosophy and its five pillars. */
function DisruptiveLeadership() {
  return (
    <Panel tone="rust">
      <H3 className="panel-title">Disruptive Leadership</H3>
      <Hand v={['center', 'cream']}>How do I lead without carrying everybody?</Hand>
      <p className="panel-body panel-body--center">A philosophy and practice of leadership built on truth, responsibility, accountability, healthy relationships and the ability to hold space. Set clear standards. Give honest feedback. Develop capable people. Stop rescuing, controlling or rewarding helplessness.</p>
      <div className="dl-strip">
        <div className="dl-strip-inner">
          <img className="dl-icons" src="/assets/ideas/p6-icons.webp" alt="" aria-hidden="true" />
          <ul className="dl-labels">{DISRUPTIVE_LEADERSHIP_PILLARS.map(p => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <div className="panel-actions">
        <Hand v={['cream', 'sm']}>High standards and humanity belong in the same room.</Hand>
        <Btn href={PRODUCTS_HREF} v={['outline']}>Explore Disruptive Leadership</Btn>
        <Btn href={PRODUCTS_HREF} v={['outline']}>Meet the book</Btn>
      </div>
    </Panel>
  );
}

// PART SIX · T.R.U.S.T.M.E. & DISRUPTIVE LEADERSHIP
export default function Part6Trustme() {
  return (
    <Part n={6}>
      <PartHead n={6} rule title="The thinking that got us here may not get us there" aside={<Art name="p6-star" />}>
        <Body>People, teams and organisations do not need the same thing at every stage. The useful question is not which level sounds best. It is which kind of thinking the present problem requires.</Body>
      </PartHead>
      <H3 v={['left']}>The T.R.U.S.T.M.E. Model</H3>
      <Hand v={['sm']}>Created by Remi Pearson · informed by Spiral Dynamics</Hand>
      <div className="trustme-grid">
        <Art name="p6-spiral" alt={SPIRAL_ALT} />
        <div>
          <Body sm>T.R.U.S.T.M.E. reveals the operating logic a person, team or organisation returns to, especially under pressure. Every level solves a problem, creates new limits and points toward the thinking required next.</Body>
          <HeadNote art="p6-arrow" inline><Hand>You cannot solve a problem from the same thinking that created it.</Hand></HeadNote>
        </div>
      </div>
      <DisruptiveLeadership />
      <Btn href="#part-7" v={['dark']}>Continue to the practice of leadership</Btn>
    </Part>
  );
}
