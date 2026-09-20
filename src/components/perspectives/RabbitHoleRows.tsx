import { RABBIT_HOLES } from '@/content/perspectives';

const art = (name: string) => `/assets/perspectives/${name}.webp`;

// WHICH RABBIT HOLE SHALL WE DISAPPEAR DOWN? — after design screenshot 27: four torn-paper strips on the normal page
// background, every symbol cut from the design (public/assets/perspectives). Each button opens the archive on its topic.
export default function RabbitHoleRows() {
  return (
    <section className="section section--tight rh" aria-labelledby="holes-h">
      <div className="rh-stage">
        <div className="rh-canvas">
          <header className="rh-head">
            <h2 id="holes-h" className="rh-title">
              Which rabbit hole<br />shall we{' '}
              <span className="rh-mark">disappear down?<img src={art('rh-underline')} alt="" aria-hidden="true" /></span>
            </h2>
            <p className="rh-sub">The archive follows my curiosity rather than one tidy niche.{' '}<br />Start with the question that has hold of you today.</p>
            <img className="rh-swirl" src={art('rh-swirl')} alt="" aria-hidden="true" />
          </header>

          <div className="rh-rows">
            {RABBIT_HOLES.map((h, i) => (
              <article className="rh-row" key={h.art}>
                <img className="rh-art" src={art(h.art)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div className="rh-copy">
                  <h3 className="rh-h">{h.title}</h3>
                  <p className="rh-q">{h.question}</p>
                  <p className="rh-explore"><strong>Explore:</strong>{h.explore.map(x => <span key={x}>{x}</span>)}</p>
                </div>
                <p className="rh-go">
                  <img src={art(`rh-arrow-${i + 1}`)} alt="" aria-hidden="true" />
                  <a href="#archive" className="rh-btn" data-topic={h.topic}>{h.cta}</a>
                </p>
              </article>
            ))}
          </div>

          <p className="rh-quote">
            <img className="rh-spark" src={art('rh-spark-l')} alt="" aria-hidden="true" />
            <img className="rh-quote-hand" src={art('rh-quote')} alt="My interests are broad because human beings are broad." loading="lazy" decoding="async" />
            <img className="rh-spark" src={art('rh-spark-r')} alt="" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}
