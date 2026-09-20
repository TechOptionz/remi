import { WaitlistCta } from './ui';

// WHAT REBEL YELL DOES — three numbered movements: the outcome, the system, the leverage
export default function WhatItDoes() {
  return (
    <section className="ry-section" aria-labelledby="does-h">
      <p id="does-h" className="eyebrow">What Rebel Yell does</p>

      <article className="ry-step">
        <div className="ry-step-head">
          <span className="ry-step-num" aria-hidden="true">1</span>
          <h3 className="ry-title ry-title--sm">We begin with the outcome. <em>Including whether it is the outcome you genuinely want.</em></h3>
        </div>
        <div className="ry-prose">
          <p>Organisations often arrive with a stated objective that has already been negotiated into something respectable.</p>
          <p className="ry-aside">Improve accountability. Strengthen the culture. Repair trust. Create alignment. Lift performance. Prepare the next generation of leaders.</p>
          <p>I want to know what would be different if the work genuinely succeeded. What would people be doing that they are not doing now? What decisions would become possible? What would stop happening? What would the organisation gain, and what might somebody have to relinquish?</p>
          <p>Sometimes the requested outcome is real.</p>
          <p>Sometimes it is a safer substitute for the outcome people actually want.</p>
          <p className="ry-callout">That distinction changes everything.</p>
        </div>
      </article>

      <article className="ry-step">
        <div className="ry-step-head">
          <span className="ry-step-num" aria-hidden="true">2</span>
          <h3 className="ry-title ry-title--sm">Then I read the system that is producing the current reality.</h3>
        </div>
        <div className="ry-prose">
          <p>I look across the organisation rather than accepting the presenting problem at face value.</p>
          <p>Depending on what is happening, that may include the wider environment and culture, structures and incentives, leadership behaviour, team dynamics, decision-making, capability, emotional patterns and the small moments where stated intentions repeatedly become something else.</p>
          <p>I draw on tested frameworks, benchmarks and criteria for success. I also draw on more than three decades of watching what people do when what they say they want collides with what they are organised to protect.</p>
          <p>The work may move between levels very quickly. A strategic problem can contain a relationship problem. A team dynamic can be reinforced by a structural decision. An apparently rational disagreement can be organised around fear, status or identity. A founder may be trying to solve at an organisational level what is actually happening inside one conversation.</p>
          <p className="ry-callout">The level at which the problem presents is not always the level at which it can be changed.</p>
        </div>
      </article>

      <article className="ry-step">
        <div className="ry-step-head">
          <span className="ry-step-num" aria-hidden="true">3</span>
          <h3 className="ry-title ry-title--sm">I identify the differences that matter.</h3>
        </div>
        <div className="ry-prose">
          <p>There may be dozens of differences between the current system and one capable of producing the desired outcome. They are not equally important.</p>
          <p>The task is to find the leverage.</p>
          <p>Which missing capability changes several downstream problems? Which accepted belief has distorted the diagnosis? Which conversation has been repeatedly avoided? Which structure rewards the behaviour everyone claims to oppose? Which person is carrying something that belongs to the system? Where has the organisation confused agreement with alignment, activity with progress or emotional control with actual capacity?</p>
          <p>This is where a generic leadership program becomes useless. It teaches what was prepared in advance.</p>
          <p className="ry-callout">Rebel Yell works with what is true here.</p>
          <WaitlistCta />
        </div>
      </article>
    </section>
  );
}
