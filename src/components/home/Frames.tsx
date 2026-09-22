import Link from 'next/link';

// FRAMES
export default function Frames() {
  return (
    <section id="frames" className="section" aria-labelledby="frames-h">
      <p className="kicker"><span>The frames</span><span className="kicker-rule" aria-hidden="true"></span><span className="kicker-count">04 original models</span></p>
      <div className="frames-head">
        <h2 id="frames-h" className="frames-title">Original models for <em>thinking clearly</em></h2>
        <div className="frames-intro">
          <p>Each frame names something leaders feel but rarely see. Used in boardrooms, on stages and in Remi's books.</p>
          <Link href="/ideas-models" className="text-link">Explore the ideas &amp; models →</Link>
        </div>
      </div>
      <div className="frames-grid">
        <Link href="/ideas-models/trustme-model" className="frame-card">
          <div className="frame-media"><img loading="lazy" decoding="async" src="/assets/photos/frame-1.webp" alt="" /></div>
          <div className="frame-body">
            <div className="frame-top"><span className="card-cat">Frame 01</span><span className="frame-arrow" aria-hidden="true">→</span></div>
            <h3 className="frame-title">The T.R.U.S.T.M.E. model</h3>
            <p className="frame-sub">Seven levels of thinking</p>
          </div>
        </Link>
        <Link href="/ideas-models#part-6" className="frame-card">
          <div className="frame-media"><img loading="lazy" decoding="async" src="/assets/photos/frame-2.webp" alt="" /></div>
          <div className="frame-body">
            <div className="frame-top"><span className="card-cat">Frame 02</span><span className="frame-arrow" aria-hidden="true">→</span></div>
            <h3 className="frame-title">Leading without carrying</h3>
            <p className="frame-sub">Accountability and readiness</p>
          </div>
        </Link>
        <Link href="/ideas-models#part-6" className="frame-card">
          <div className="frame-media"><img loading="lazy" decoding="async" src="/assets/photos/frame-3.webp" alt="" /></div>
          <div className="frame-body">
            <div className="frame-top"><span className="card-cat">Frame 03</span><span className="frame-arrow" aria-hidden="true">→</span></div>
            <h3 className="frame-title">The level of the room</h3>
            <p className="frame-sub">Reading collective thinking</p>
          </div>
        </Link>
        <Link href="/ideas-models#part-4" className="frame-card">
          <div className="frame-media"><img loading="lazy" decoding="async" src="/assets/photos/frame-4.webp" alt="" /></div>
          <div className="frame-body">
            <div className="frame-top"><span className="card-cat">Frame 04</span><span className="frame-arrow" aria-hidden="true">→</span></div>
            <h3 className="frame-title">Why capable people stay stuck</h3>
            <p className="frame-sub">Pattern over problem</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
