import Link from 'next/link';

// WHICH RABBIT HOLE
export default function RabbitHoles() {
  return (
    <section id="rabbit-holes" className="section holes" aria-labelledby="holes-h">
      <div className="holes-head">
        <h2 id="holes-h" className="holes-title">Which rabbit hole shall we <em>disappear down?</em></h2>
      </div>
      <div className="holes-grid">
        <Link href="/ideas-models#part-4" className="hole-card hole-card--accent">
          <div><h3>I know better. Why do I still keep doing this?</h3><p>Patterns, triggers and protective responses that insight alone has not changed.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
        <Link href="/ideas-models#part-3" className="hole-card">
          <div><h3>Why does loving someone bring all my shit to the surface?</h3><p>Attachment, boundaries, conflict, intimacy and the moments you leave yourself.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
        <Link href="/ideas-models#part-4" className="hole-card">
          <div><h3>Tell me the truth. What am I not seeing?</h3><p>Decisions, contradictions and stories that keep your life out of alignment.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
        <Link href="/ideas-models#part-6" className="hole-card hole-card--dark">
          <div><h3>How do I lead without carrying everybody?</h3><p>Leadership, accountability, culture, holding space and honest conversations.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
        <Link href="/ideas-models#part-8" className="hole-card">
          <div><h3>How do I sell without scripts, pressure or bullshit?</h3><p>Consultative sales, ethical influence, presenting and moving a room.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
        <Link href="/ideas-models#part-8" className="hole-card hole-card--dark">
          <div><h3>I've built myself a job. How do I build an asset?</h3><p>Turn expertise into intellectual property and build beyond the founder.</p></div>
          <span className="hole-more">Explore <span aria-hidden="true">→</span></span>
        </Link>
      </div>
    </section>
  );
}
