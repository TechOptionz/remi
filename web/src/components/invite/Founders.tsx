// FOR FOUNDERS, BOARDS & SENIOR TEAMS
export default function Founders() {
  return (
    <section className="band-dark" aria-labelledby="founders-h">
      <div className="founders">
        <img className="invite-photo founders-photo" loading="lazy" decoding="async" src="/assets/photos/invite-teaching.webp" alt="Remi teaching in front of a screen that reads “You can't be happy living someone else's comfort level”" />
        <div>
          <p className="eyebrow">Senior work</p>
          <h2 id="founders-h" className="h2">For founders, boards &amp; senior teams</h2>
          <blockquote className="founders-quote"><p>“I know how to hold a room when the truth is difficult, the stakes are real and everyone present is highly capable.”</p></blockquote>
          <div className="founder-cards">
            <article className="room-card">
              <h3>Senior team facilitation</h3>
              <p>Designing and holding consequential conversations for boards, founders, executive teams and senior leaders when truth, alignment, relationships and difficult decisions matter.</p>
              <a href="#invite-form" className="text-link" data-invite="Facilitation">Invite Remi to facilitate →</a>
            </article>
            <article className="room-card">
              <h3>High-level strategic consulting</h3>
              <p>Working with founders, owners, boards and senior leaders on alignment, leadership, culture, intellectual property, consultative sales and building an asset beyond the founder.</p>
              <a href="#invite-form" className="text-link" data-invite="Consulting">Explore strategic consulting →</a>
            </article>
          </div>
          <p className="founders-note">This is senior-level facilitation and strategic consulting. It is not middle-management training, operational hand-holding or ongoing accountability.</p>
        </div>
      </div>
    </section>
  );
}
