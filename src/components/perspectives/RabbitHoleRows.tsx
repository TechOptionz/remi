import Icon from '@/components/shared/Icon';
import { RABBIT_HOLES } from '@/content/perspectives';

// WHICH RABBIT HOLE SHALL WE DISAPPEAR DOWN? — four themes; each button opens the archive filtered to its topic (data-topic)
export default function RabbitHoleRows() {
  return (
    <section className="section section--tight" aria-labelledby="holes-h">
      <div className="centered">
        <h2 id="holes-h" className="part-title">Which rabbit hole shall we <span className="underline">disappear down?</span></h2>
        <p className="part-lede part-lede--center persp-sub">The archive follows my curiosity rather than one tidy niche. Start with the question that has hold of you today.</p>
      </div>
      <div className="hole-rows">
        {RABBIT_HOLES.map(h => (
          <article className="hole-row" key={h.title}>
            <span className="hole-row-art"><Icon name={h.icon} size={48} strokeWidth={1.2} /></span>
            <div>
              <h3>{h.title}</h3>
              <p>{h.question}</p>
              <p className="hole-row-explore"><strong>Explore:</strong> {h.explore.join(' · ')}</p>
            </div>
            <a href="#archive" className="btn btn--primary btn--caps" data-topic={h.topic}>{h.cta}</a>
          </article>
        ))}
      </div>
      <p className="hand-quote hand-quote--center"><span className="underline">My interests are broad because human beings are broad.</span></p>
    </section>
  );
}
