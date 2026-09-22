import Link from 'next/link';
import ZoomArt from '@/components/ideas/ZoomArt';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

const CYCLE_ALT = 'The Disruptive Leadership Model: see more, achieve more, leave more. Disruptive leadership is the willingness and capacity to challenge a status quo that no longer serves the greater good, to see what could be, and to mobilise people and systems to achieve the result while increasing the capacity of the people and systems responsible for producing it. Five movements form a cycle around a purpose: achieve a result in a way that includes the graceful inclusion of everybody, whilst increasing the capacity of the people and systems responsible for producing it. 01 See, see what could be: look to the white space, question assumptions, imagine what is possible, be willing to challenge your own thinking. 02 Align, align what must be true: examine the whole system, identify friction and bottlenecks, distinguish Core, Improve, Innovate, ensure the right people are in the right roles. 03 Mobilise, enable and expect everyone’s best contribution: create clarity and shared responsibility, build a culture of truth not false harmony, use individual strengths including personality differences, enable graceful inclusion and graceful exit, expect everyone to contribute to the culture. 04 Deliver, achieve the result while improving the system: focus on the outcome, assess and improve the systems that produce it, question whether systems remain fit for purpose, remove unnecessary complexity, learn from what worked and what did not. 05 Evolve, turn experience into greater capacity: capture what we have learned, build individual, team and organisational capability, strengthen what works, stop what no longer serves, increase our capacity for what is next. Better results: what became possible because we led? Stronger people: how did people grow through the experience? More capable systems: how did the systems improve? What is next: what can we now do, think or create that we could not before? A stronger tomorrow, together.';

// DISRUPTIVE LEADERSHIP — breadcrumb, title, what could be, the definition, the model diagram
export default function DlIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Disruptive Leadership</span>
      </nav>
      <p className="ideas-eyebrow">Leadership &amp; evolution · A philosophy and practice</p>
      <PartHead n={1} title="Disruptive Leadership" aside={<Art name="p7-star" className="dl-head-art" />}>
        <Hand v={['underline']}>The leadership model for what could be.</Hand>
        <Body>Most leadership begins with what already exists. It looks at the people, systems, structures, results and problems in front of us and asks how we make them work better.</Body>
        <Body>Disruptive Leadership begins somewhere else. It asks: What could be?</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>Disruptive Leadership is the willingness and capacity to challenge a status quo that no longer serves the greater good, to see possibilities for which there may yet be little or no evidence, and to mobilise people and systems coherently to bring those possibilities into being. It disrupts whatever prevents the system from producing its best result, including the leader’s own thinking.</Body>
        <Body>But disruption is not destruction, and leadership is not simply the achievement of a result. A leader can hit every target while exhausting their people, creating dependency, bypassing systems, avoiding difficult conversations and leaving behind an organisation less capable of repeating the performance. That’s achievement, but it isn’t great leadership.</Body>
      </div>
      <p className="ideas-note triad-note">Disruptive Leadership achieves the result while increasing the capacity of the people and systems responsible for producing it.</p>
      <div className="triad-prose">
        <Hand v={['sm']}>That distinction changes everything.</Hand>
      </div>
      <ZoomArt name="dl-cycle" alt={CYCLE_ALT} label="the Disruptive Leadership Model" className="triad-diagram dl-plate" />
      <p className="dsr-caption">See more. Achieve more. Leave more.</p>
    </Part>
  );
}
