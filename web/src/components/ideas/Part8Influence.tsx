import Link from 'next/link';

// PART EIGHT · INFLUENCE & ENTERPRISE
export default function Part8Influence() {
  return (
    <section id="part-8" className="ideas-part" aria-labelledby="p8-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Eight</p>
          <h2 id="p8-h" className="ideas-title ideas-title--rule">Help people decide. Build something that doesn't need you.</h2>
          <p className="ideas-body">These two bodies of work came from the same refusal: I did not want good people manipulated into buying, and I did not want talented founders trapped inside the thing they had built.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p8-star.webp" alt="" aria-hidden="true" />
      </div>
      <div className="ui-grid">
        <div>
          <h3 className="ideas-h3 ideas-h3--left">Ultimate Influence Consultative Sales</h3>
          <p className="ideas-hand">How do I help someone make a quality buying decision without scripts, pressure or bullshit?</p>
          <p className="ideas-body ideas-body--sm">Diagnose before prescribing. Understand the buyer's values, needs and decision process. Communicate intangible value clearly. Recommend only when there is a genuine match.</p>
        </div>
        <div className="ui-steps">
          <img className="ideas-art" src="/assets/ideas/p8-path.webp" alt="" aria-hidden="true" />
          <ol className="ui-list"><li>Connect</li><li>Build</li><li>Flip</li><li>Match</li><li>Recommend</li><li>Backtrack</li><li>Close</li><li>Future pace</li></ol>
          <div className="head-note head-note--inline ui-note"><img className="ideas-art" src="/assets/ideas/p8-arrow.webp" alt="" aria-hidden="true" /><p className="ideas-hand ideas-hand--sm">A conversation, not a performance.</p></div>
        </div>
      </div>
      <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm ideas-btn--right">Explore Ultimate Influence <span aria-hidden="true">→</span></Link>
      <div className="panel panel--rust">
        <h3 className="ideas-h3 panel-title">Core <span aria-hidden="true">→</span> Improve <span aria-hidden="true">→</span> Innovate</h3>
        <p className="panel-body panel-body--center">A Meta Dynamics model created by Remi Pearson.</p>
        <p className="ideas-hand ideas-hand--center ideas-hand--cream ideas-hand--underline-cream">What deserves my attention if I want to build something stable, useful and able to live beyond me?</p>
        <div className="cii-grid">
          <img src="/assets/ideas/p8-circles.webp" alt="Core, 70%: the most important thing. Do what works consistently until it is stable, systemised and replicable by others. Improve, 20%: strengthen what already works so it stays relevant, robust, fit for purpose and scalable. Innovate, 10%: add what is genuinely new only after Core is cared for and dependable." />
          <div>
            <h4 className="cii-h">From practice to business</h4>
            <div className="cii-cols">
              <div><h5>Practice</h5><p>The owner delivers the widget. The owner goes away and so does the income.</p></div>
              <div><h5>Business</h5><p>Core can be delivered by others through documented systems, benchmarks and capability.</p></div>
            </div>
            <p className="ideas-hand ideas-hand--center ideas-hand--cream ideas-hand--sm">Income should be the least surprising thing about the business.</p>
          </div>
        </div>
        <ul className="proof-row"><li><span>Nearly $200M</span>in revenue</li><li><span>11,000+</span>coaches trained</li><li><span>The Coaching Institute</span>built &amp; sold</li></ul>
        <div className="panel-actions panel-actions--two">
          <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--outline">Explore Core <span aria-hidden="true">→</span> Improve <span aria-hidden="true">→</span> Innovate <span aria-hidden="true">→</span></Link>
          <Link href="/invite-remi?invite=Consulting#invite-form" className="ideas-btn ideas-btn--outline">Build something beyond me <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <a href="#part-9" className="ideas-btn ideas-btn--dark">Continue to the research &amp; next steps <span aria-hidden="true">→</span></a>
      <a href="#part-9" className="ideas-next">Continue to Part Nine · Research &amp; next steps</a>
    </section>
  );
}
