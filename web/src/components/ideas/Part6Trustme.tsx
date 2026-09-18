import Link from 'next/link';

// PART SIX · T.R.U.S.T.M.E. & DISRUPTIVE LEADERSHIP
export default function Part6Trustme() {
  return (
    <section id="part-6" className="ideas-part" aria-labelledby="p6-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Six</p>
          <h2 id="p6-h" className="ideas-title ideas-title--rule">The thinking that got us here may not get us there</h2>
          <p className="ideas-body">People, teams and organisations do not need the same thing at every stage. The useful question is not which level sounds best. It is which kind of thinking the present problem requires.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p6-star.webp" alt="" aria-hidden="true" />
      </div>
      <h3 className="ideas-h3 ideas-h3--left">The T.R.U.S.T.M.E. Model</h3>
      <p className="ideas-hand ideas-hand--sm">Created by Remi Pearson · informed by Spiral Dynamics</p>
      <div className="trustme-grid">
        <img className="ideas-art" src="/assets/ideas/p6-spiral.webp" alt="The seven levels of T.R.U.S.T.M.E., rising in a spiral: 1 Trust, 2 Relatability, 3 Uniqueness, 4 Systems, 5 Tenacity, 6 Meaning, 7 Evolution." />
        <div>
          <p className="ideas-body ideas-body--sm">T.R.U.S.T.M.E. reveals the operating logic a person, team or organisation returns to, especially under pressure. Every level solves a problem, creates new limits and points toward the thinking required next.</p>
          <div className="head-note head-note--inline"><img className="ideas-art" src="/assets/ideas/p6-arrow.webp" alt="" aria-hidden="true" /><p className="ideas-hand">You cannot solve a problem from the same thinking that created it.</p></div>
          <Link href="/trustme-model" className="ideas-btn ideas-btn--sm">Explore T.R.U.S.T.M.E. <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="panel panel--rust">
        <h3 className="ideas-h3 panel-title">Disruptive Leadership</h3>
        <p className="ideas-hand ideas-hand--center ideas-hand--cream">How do I lead without carrying everybody?</p>
        <p className="panel-body panel-body--center">A philosophy and practice of leadership built on truth, responsibility, accountability, healthy relationships and the ability to hold space. Set clear standards. Give honest feedback. Develop capable people. Stop rescuing, controlling or rewarding helplessness.</p>
        <img className="dl-icons" src="/assets/ideas/p6-icons.webp" alt="" aria-hidden="true" />
        <ul className="dl-labels"><li>Truth</li><li>Responsibility</li><li>Accountability</li><li>Healthy relationships</li><li>Holding space</li></ul>
        <div className="panel-actions">
          <p className="ideas-hand ideas-hand--cream ideas-hand--sm">High standards and humanity belong in the same room.</p>
          <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--outline">Explore Disruptive Leadership <span aria-hidden="true">→</span></Link>
          <Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--outline">Meet the book <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <a href="#part-7" className="ideas-btn ideas-btn--dark">Continue to the practice of leadership <span aria-hidden="true">→</span></a>
    </section>
  );
}
