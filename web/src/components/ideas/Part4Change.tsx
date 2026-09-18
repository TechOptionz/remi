import Link from 'next/link';

// PART FOUR · PAST, PRESENT & FUTURE
export default function Part4Change() {
  return (
    <section id="part-4" className="ideas-part" aria-labelledby="p4-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Four</p>
          <h2 id="p4-h" className="ideas-title ideas-title--rule">Change has a past, a present and a future</h2>
          <p className="ideas-body">Knowing why a pattern exists is not the same as being free to respond differently. These three models work at different points in the human-change journey.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p4-tags.webp" alt="" aria-hidden="true" />
      </div>
      <div className="journey">
        <img className="journey-line" src="/assets/ideas/p4-timeline.webp" alt="Past, present, future" aria-hidden="true" />
        <div className="journey-model">
          <h3 className="ideas-h3 ideas-h3--left">Deep State Repatterning<sup>™</sup></h3>
          <p className="ideas-hand ideas-hand--label">Human question:</p>
          <p className="ideas-body ideas-body--sm">Why does something that happened long ago still have so much power now?</p>
          <p className="ideas-hand ideas-hand--label">Accurate explanation:</p>
          <p className="ideas-body ideas-body--sm">A complete methodology for finding the emotional history beneath a current pattern, loosening the charge and limiting beliefs attached to earlier experiences, reclaiming the authentic self and carrying new learning into action.</p>
          <p className="ideas-hand ideas-hand--tags">Detailed Personal History · emotional and belief release · Five Steps to Lack · Five Steps to Self-Love · future vision</p>
          <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Explore DSR <span aria-hidden="true">→</span></Link>
        </div>
        <div className="journey-art"></div>
        <div className="journey-model">
          <h3 className="ideas-h3 ideas-h3--left">Emotion Integration Technique</h3>
          <p className="ideas-hand ideas-hand--label">Human question:</p>
          <p className="ideas-body ideas-body--sm">What happens in the thirty seconds when I know better and still leave myself?</p>
          <p className="ideas-hand ideas-hand--label">Accurate explanation:</p>
          <p className="ideas-body ideas-body--sm">EIT works in the live moment of activation. Catch the Point of Departure. Stay with the emotion beneath the protective response. Choose while remaining connected to yourself.</p>
          <p className="ideas-steps">Catch <span aria-hidden="true">→</span> Stay <span aria-hidden="true">→</span> Choose</p>
          <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Explore EIT <span aria-hidden="true">→</span></Link>
        </div>
        <img className="journey-art ideas-art" src="/assets/ideas/p4-woman.webp" alt="" aria-hidden="true" />
        <div className="journey-model">
          <h3 className="ideas-h3 ideas-h3--left">Values Alignment Model</h3>
          <p className="ideas-hand ideas-hand--label">Human question:</p>
          <p className="ideas-body ideas-body--sm">How do I build a life that feels meaningful because it is actually mine?</p>
          <p className="ideas-hand ideas-hand--label">Accurate explanation:</p>
          <p className="ideas-body ideas-body--sm">A research-informed framework for strengthening meaning in life by connecting personal values with self-concordant goals, action, self-regulation and reflection.</p>
          <p className="ideas-steps">Exploration <span aria-hidden="true">→</span> Elicitation <span aria-hidden="true">→</span> Direction <span aria-hidden="true">→</span> Action <span aria-hidden="true">→</span> Reflection</p>
          <p className="ideas-fine">Developed through Remi's Master of Applied Positive Psychology capstone, drawing on positive psychology, evidence-based coaching, ACT and self-concordance research.</p>
          <a href="#part-9" className="ideas-btn ideas-btn--sm">Read the research <span aria-hidden="true">→</span></a>
        </div>
        <img className="journey-art ideas-art" src="/assets/ideas/p4-compass.webp" alt="" aria-hidden="true" />
      </div>
      <p className="ideas-hand ideas-hand--center">Different questions. Different moments. One human life.</p>
      <a href="#part-5" className="ideas-btn">Continue to alignment <span aria-hidden="true">→</span></a>
    </section>
  );
}
