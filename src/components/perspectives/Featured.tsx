import { CONVERSATIONS, FEATURED_IDS } from '@/content/perspectives';
import EpisodeImage from './EpisodeImage';

// SOME CONVERSATIONS ARE TOO GOOD TO LEAVE IN THE ARCHIVE — featured cards (FEATURED_IDS; the last one runs full width),
// then THE QUESTION IS THE STAR and the nudge to keep exploring
export default function Featured() {
  return (
    <section className="section section--tight" aria-labelledby="featured-h">
      <div className="centered">
        <h2 id="featured-h" className="part-title">Some conversations are too good to <span className="underline">leave in the archive</span></h2>
        <p className="part-lede part-lede--center persp-sub">Famous guest or not, the question is always the reason to press play.</p>
      </div>
      <div className="featured-cards">
        {FEATURED_IDS.map((id, i) => {
          const c = CONVERSATIONS.find(x => x.id === id)!;
          // the full-width last card crops the bottom of the image, which cuts off a name printed on it
          const wide = i === FEATURED_IDS.length - 1 && FEATURED_IDS.length % 2 === 1;
          return (
            <article className="featured-card" key={c.id}>
              <EpisodeImage conversation={c} nameWhenCropped={wide && c.imageHasName} />
              <div className="featured-card-body">
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
                <a href={c.href} className="btn btn--outline btn--caps btn--sm">Watch</a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="star-box">
        <div>
          <h3 className="part-title part-title--sm part-title--accent"><span className="underline">The question is the star</span></h3>
          <p className="part-lede">A recognised name may bring us to the conversation. What matters is whether we leave seeing something we could not see before.</p>
        </div>
        <p className="hand-quote"><span className="underline">Pick the question, not the celebrity.</span></p>
      </div>
      <div className="centered keep-exploring">
        <a href="#archive" className="btn btn--primary btn--caps btn--big">Keep exploring</a>
        <p className="part-lede part-lede--center">More relationships, philosophy, founders and very good rabbit holes continue below.</p>
      </div>
    </section>
  );
}
