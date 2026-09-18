import Link from 'next/link';

// PART TWO · THE BODY OF WORK, AT A GLANCE
export default function Part2Glance() {
  return (
    <section id="part-2" className="ideas-part" aria-labelledby="p2-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Two</p>
          <h2 id="p2-h" className="ideas-title">The body of work, at a glance</h2>
          <p className="ideas-hand ideas-hand--underline">Not every idea does the same job. Here is the map before we go wandering through it.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p2-compass.webp" alt="" aria-hidden="true" />
      </div>
      <ol className="glance">
        <li className="glance-group">
          <div className="glance-head"><div className="glance-name-row"><span className="glance-num">1</span><a href="#part-3" className="glance-name">Human foundations</a></div><img className="glance-art" src="/assets/ideas/p2-v1.webp" alt="" aria-hidden="true" /></div>
          <ul className="glance-cards">
            <li><a href="#part-3" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4l8 15H4z"/></svg></span><span><span className="glance-title">Self-Esteem Triad</span><span className="glance-q">Needs. Boundaries. Emotions.</span><span className="glance-tag">Fifteen Emotional Needs · Within the Emotions arm</span></span></a></li>
            <li><a href="#part-3" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l9 17H3z"/><path d="M12 10v4M12 16.5v.5"/></svg></span><span><span className="glance-title">Safe versus Risky Problems</span><span className="glance-q">Am I fixing out there so I do not have to turn within?</span></span></a></li>
          </ul>
        </li>
        <li className="glance-group">
          <div className="glance-head"><div className="glance-name-row"><span className="glance-num">2</span><a href="#part-4" className="glance-name">Emotional change</a></div><img className="glance-art" src="/assets/ideas/p2-v2.webp" alt="" aria-hidden="true" /></div>
          <ul className="glance-cards">
            <li><a href="#part-4" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 12a3 3 0 1 1 3 3 6 6 0 1 1-6-6 9 9 0 1 1 9 9"/></svg></span><span><span className="glance-title">Deep State Repatterning</span><span className="glance-q">How is the past still shaping what happens now?</span></span></a></li>
            <li><a href="#part-4" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 17c3 0 4-4 7-4s4 4 7 4 4-4 6-4M2 21c3 0 4-3 7-3s4 3 7 3 4-3 6-3M13 6a4 4 0 0 1 6 4"/></svg></span><span><span className="glance-title">Emotion Integration Technique</span><span className="glance-q">What do I do in the live moment of activation?</span></span></a></li>
          </ul>
        </li>
        <li className="glance-group">
          <div className="glance-head"><div className="glance-name-row"><span className="glance-num">3</span><a href="#part-5" className="glance-name">Meaning &amp; alignment</a></div><img className="glance-art" src="/assets/ideas/p2-v3.webp" alt="" aria-hidden="true" /></div>
          <ul className="glance-cards">
            <li><a href="#part-4" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M12 8l1.5 3 3 1-3 1-1.5 3-1.5-3-3-1 3-1z"/></svg></span><span><span className="glance-title">Values Alignment Model</span><span className="glance-q">How do I build a meaningful life that is actually mine?</span></span></a></li>
            <li><a href="#part-5" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="10" r="5"/><circle cx="15" cy="10" r="5"/><circle cx="12" cy="15" r="5"/></svg></span><span><span className="glance-title">Critical Alignment Model</span><span className="glance-q">Where is alignment really breaking?</span><span className="glance-tag">Meta Dynamics Profiling Tool · The measurement application</span></span></a></li>
          </ul>
        </li>
        <li className="glance-group">
          <div className="glance-head"><div className="glance-name-row"><span className="glance-num">4</span><a href="#part-6" className="glance-name">Leadership &amp; evolution</a></div><img className="glance-art" src="/assets/ideas/p2-v4.webp" alt="" aria-hidden="true" /></div>
          <ul className="glance-cards">
            <li><Link href="/trustme-model" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><path d="M3 20v-5a3 3 0 0 1 6 0v5M9 20v-5a3 3 0 0 1 6 0v5M15 20v-5a3 3 0 0 1 6 0v5"/></svg></span><span><span className="glance-title">T.R.U.S.T.M.E.</span><span className="glance-q">What operating logic is this person, team or organisation using?</span></span></Link></li>
            <li><a href="#part-6" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 21l6-10 4 5 3-4 5 9zM13 3v6M13 3h5l-1.5 1.5L18 6h-5"/></svg></span><span><span className="glance-title">Disruptive Leadership</span><span className="glance-q">How do I lead without carrying everybody?</span></span></a></li>
            <li><a href="#part-7" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg></span><span><span className="glance-title">Four Quadrants to Leadership</span><span className="glance-q">Can I lead and manage myself before I lead and manage others?</span><span className="glance-tag">Benchmarking · Critical Thinking · CAM Top Five · Written &amp; Unwritten Ground Rules · First 90 Days · 90-Day Review</span></span></a></li>
          </ul>
        </li>
        <li className="glance-group">
          <div className="glance-head"><div className="glance-name-row"><span className="glance-num">5</span><a href="#part-8" className="glance-name">Influence &amp; enterprise</a></div><img className="glance-art" src="/assets/ideas/p2-v5.webp" alt="" aria-hidden="true" /></div>
          <ul className="glance-cards">
            <li><a href="#part-8" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 11l4-4 5 3 4-3 5 4-5 5-4-3-5 3z"/></svg></span><span><span className="glance-title">Ultimate Influence Consultative Sales</span><span className="glance-q">How do I help someone make a quality buying decision?</span></span></a></li>
            <li><a href="#part-8" className="glance-card"><span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V6M16 20v-8M22 20V4M3 20h20M4 9l6-3 6 4 6-6"/></svg></span><span><span className="glance-title">Core → Improve → Innovate</span><span className="glance-q">What deserves most of my attention?</span><span className="glance-tag">Practice to Business · The field-tested application</span></span></a></li>
          </ul>
        </li>
      </ol>
      <p className="research-thread"><span className="rt-label"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="M15 15l6 6"/></svg> Research thread</span><span>Values, meaning, organisational wellbeing, leadership, reliability and validity.</span></p>
      <p className="ideas-hand ideas-hand--center">Different questions. Different models. One body of work.</p>
      <a href="#part-3" className="ideas-btn">Start with the human foundations <span aria-hidden="true">→</span></a>
      <a href="#part-3" className="ideas-next"><span className="star" aria-hidden="true">✳</span> Continue to Part Three · Human foundations <span aria-hidden="true">⟶</span></a>
    </section>
  );
}
