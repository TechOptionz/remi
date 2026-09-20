const art = (name: string) => `/assets/perspectives/${name}.webp`;

// AND SOMETIMES, WE DO THE WORK LIVE — the charcoal band the rabbit-hole sheet tears off onto (design screenshot 27):
// gold armchair left, rust armchair right, ripples on the floor between them. Opens the archive on "Live human change".
export default function LiveWork() {
  return (
    <section className="rh-live" aria-labelledby="live-h">
      <div className="rh-stage">
        <div className="rh-canvas rh-live-canvas">
          <img className="rh-chair" src={art('rh-chair-gold')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="rh-live-copy">
            <h2 id="live-h" className="rh-live-title">And sometimes, we do the work live</h2>
            <p>Real coaching conversations, difficult questions and the moment when an explanation finally becomes an experience.</p>
            <a href="#archive" className="rh-btn rh-btn--gold" data-topic="Live human change">Watch live human change</a>
            <svg className="rh-ripples" viewBox="0 0 480 44" fill="none" stroke="currentColor" aria-hidden="true">
              <ellipse cx="240" cy="22" rx="236" ry="19" strokeWidth=".9" strokeDasharray="150 9 260 14" opacity=".55" />
              <ellipse cx="240" cy="23" rx="205" ry="15.5" strokeWidth=".8" strokeDasharray="90 7 310 11" opacity=".45" />
              <ellipse cx="240" cy="23" rx="172" ry="12" strokeWidth=".8" strokeDasharray="200 12 120 8" opacity=".4" />
              <ellipse cx="240" cy="24" rx="140" ry="8.5" strokeWidth=".7" strokeDasharray="60 6 170 9" opacity=".3" />
            </svg>
          </div>
          <img className="rh-chair" src={art('rh-chair-rust')} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
