import { TestimonialSlot, WaitlistCta } from './ui';

// I WILL PROBABLY SEE MORE THAN I SAY — warm cream band with room to breathe: listening portrait, then the signed pull quote
export default function Calibration() {
  return (
    <section className="ry-band ry-band--cream" aria-labelledby="calibrate-h">
      <div className="ry-calibrate">
        <img className="photo-print ry-calibrate-photo" loading="lazy" decoding="async" src="/assets/photos/rebel-listening.webp" alt="Remi listening closely, composed and attentive" />
        <div className="ry-prose">
          <h2 id="calibrate-h" className="ry-title">I will probably see more than I say.</h2>
          <p className="ry-callout ry-callout--lg">That is deliberate.</p>
          <p>Insight without calibration can do damage.</p>
          <p>Dumping every observation onto a person or team may look fearless, but it can produce shame, defensiveness, confusion, collapse or a very convincing performance of agreement. The truth has technically been spoken, and nothing usable has happened.</p>
          <p>I calibrate continuously.</p>
          <p>What does this person understand already? What can the team remain emotionally present to? Which truth will open the system, and which one will close it? Who needs to hear what, in what language, and in what sequence? What can be revealed now and integrated before we move further?</p>
          <p>I work at the edge of the system’s current emotional and intellectual bandwidth. I surface enough to challenge the pattern without overwhelming the people who must change it. Then I watch what happens, recalibrate and choose the next intervention.</p>
          <p><strong>This pacing is not politeness. It is precision.</strong></p>
          <p>The benchmark for success may remain stable. The route towards it will change according to the people, the problem and what becomes visible as the work progresses.</p>
        </div>
      </div>
      <figure className="ry-pull">
        <blockquote><p>Truth leads at the speed the system can genuinely metabolise it.</p></blockquote>
        <figcaption><span className="ry-signature" role="img" aria-label="Remi" /></figcaption>
      </figure>
      <TestimonialSlot slot="calibration" />
      <WaitlistCta align="center" />
    </section>
  );
}
