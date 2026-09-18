import Link from 'next/link';

// WHAT COULD WE TALK ABOUT
export default function Topics() {
  return (
    <section className="section" aria-labelledby="talk-h">
      <p className="eyebrow">Themes</p>
      <h2 id="talk-h" className="h2">What could we talk about?</h2>
      <p className="section-sub">Quite a lot, as it happens. My work crosses the emotional, relational, intellectual and commercial architecture of how people change, decide, lead, influence and build.</p>
      <div className="topics">
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">01</span>
          <h3>Human change, trauma &amp; protective patterns</h3>
          <p>Emotion Integration Technique, IFS and parts work, holding space, emotional integration and why insight alone so rarely creates change.</p>
        </article>
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">02</span>
          <h3>Relationships, attachment &amp; repair</h3>
          <p>Attachment patterns, self-abandonment, boundaries, conflict, intimacy, rupture and the difficult work of remaining ourselves while loving another person.</p>
        </article>
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">03</span>
          <h3>Truth, alignment &amp; decision-making</h3>
          <p>Let Truth Lead, the Critical Alignment Model, values, perception and what becomes possible when we stop negotiating with what we already know.</p>
        </article>
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">04</span>
          <h3>Leadership, culture &amp; senior team facilitation</h3>
          <p>Disruptive Leadership, <Link href="/trustme-model">T.R.U.S.T.M.E.</Link>, accountability, healthy culture and holding the room when difficult conversations and consequential decisions matter.</p>
        </article>
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">05</span>
          <h3>Consultative sales &amp; ethical influence</h3>
          <p>Ultimate Influence, diagnosing before prescribing, selling intangible value and helping someone make a quality decision without scripts, pressure or bullshit.</p>
        </article>
        <article className="topic-card">
          <span className="topic-num" aria-hidden="true">06</span>
          <h3>Building beyond the founder</h3>
          <p>Turning expertise into intellectual property, moving from practice to business, building an asset instead of a job and creating something valuable enough to sell.</p>
        </article>
      </div>
    </section>
  );
}
