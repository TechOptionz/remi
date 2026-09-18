import { CONVERSATIONS, PLACES_TO_BEGIN } from '@/content/perspectives';
import EpisodeImage from './EpisodeImage';

// THREE VERY DIFFERENT PLACES TO BEGIN — three starter conversations (PLACES_TO_BEGIN), then the way into the archive
export default function PlacesToBegin() {
  return (
    <section className="section section--tight section--flush centered" aria-labelledby="begin-h">
      <h2 id="begin-h" className="part-title part-title--sm"><span className="underline">Three very different places to begin</span></h2>
      <div className="begin-cards">
        {PLACES_TO_BEGIN.map(place => {
          const c = CONVERSATIONS.find(x => x.id === place.id)!;
          return (
            <article className="begin-card" key={c.id}>
              <EpisodeImage conversation={c} showName />
              <div className="begin-card-body">
                <h3><span className="underline">{c.title}</span></h3>
                <p>{place.intro}</p>
                <a href={c.href} className="btn btn--primary btn--wide">Watch the conversation</a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="hand-quote hand-quote--center hand-quote--ink"><span className="underline">Same host. Completely different rabbit holes.</span></p>
      <a href="#archive" className="btn btn--primary btn--caps btn--big begin-cta">Take me into the archive</a>
    </section>
  );
}
