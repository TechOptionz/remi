import Link from 'next/link';

// PART FIVE · THE CRITICAL ALIGNMENT MODEL
export default function Part5Alignment() {
  return (
    <section id="part-5" className="ideas-part" aria-labelledby="p5-h">
      <div className="ideas-head ideas-head--note">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Five</p>
          <h2 id="p5-h" className="ideas-title ideas-title--rule">The gap is never just the gap</h2>
          <p className="ideas-body">When something keeps failing, leaders often prescribe more effort. CAM asks a better question: where is alignment actually breaking?</p>
        </div>
        <div className="head-note"><p className="ideas-hand">Different gap.<br />Different intervention.</p><img className="ideas-art" src="/assets/ideas/p5-arrow.webp" alt="" aria-hidden="true" /></div>
      </div>
      <h3 className="ideas-h3">The Critical Alignment Model</h3>
      <p className="ideas-hand ideas-hand--center ideas-hand--sm">Created by Remi Pearson</p>
      <img className="ideas-art ideas-art--center cam-art" src="/assets/ideas/p5-cam.webp" alt="The Critical Alignment Model: four domains around a compass. Environment — vision, culture, personal strength and the conditions people need to thrive. Structure — strategy, innovation, planning and decision-making. Implementation — autonomy, order, sustained focus and turning intention into results. People — mentoring, connection, social skill and mindful leadership." />
      <div className="panel panel--dark research-panel">
        <img className="research-mag" src="/assets/ideas/p5-magnifier.webp" alt="" aria-hidden="true" />
        <h3 className="ideas-h3 panel-title">I didn't want a model that only sounded clever</h3>
        <p className="panel-body">I hired researchers to challenge CAM, operationalise it and build a profiling tool that could be tested for reliability and validity.</p>
        <ul className="stats-row">
          <li><span className="stat-big">4</span><span className="stat-lbl">Domains</span></li>
          <li><span className="stat-big">16</span><span className="stat-lbl">Leadership dimensions</span></li>
          <li><span className="stat-big">41</span><span className="stat-lbl">Thinking characteristics</span></li>
          <li><span className="stat-big">535</span><span className="stat-lbl">People in the normative sample</span></li>
        </ul>
        <div className="research-foot"><p className="panel-body">The final 16 dimensions returned internal-consistency coefficients from .692 to .904. Factor analysis closely reproduced CAM's Environment, Structure, Implementation and People domains.</p><img src="/assets/ideas/p5-chart.webp" alt="" aria-hidden="true" /></div>
      </div>
      <div className="two-up">
        <div><h3 className="ideas-h3 ideas-h3--rust">CAM is the model</h3><p className="ideas-body ideas-body--sm">It reveals where alignment is breaking and what kind of thinking or action the situation requires.</p><Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Explore CAM <span aria-hidden="true">→</span></Link></div>
        <div><h3 className="ideas-h3 ideas-h3--rust">The Meta Dynamics™ Profiling Tool is the measurement</h3><p className="ideas-body ideas-body--sm">It translates CAM into a developmental assessment of thinking preferences across 16 dimensions and 41 characteristics.</p><Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Take the mini profiler <span aria-hidden="true">→</span></Link></div>
      </div>
      <p className="ideas-hand ideas-hand--center"><span className="star" aria-hidden="true">✳</span> Not a personality label. A development map. <span className="star" aria-hidden="true">✳</span></p>
      <a href="#part-6" className="ideas-btn">Continue to leadership, evolution &amp; decision <span aria-hidden="true">→</span></a>
    </section>
  );
}
