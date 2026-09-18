import Icon from '@/components/shared/Icon';

// FOR FOUNDERS, BOARDS & SENIOR TEAMS — dark band: teaching photo left, the two senior offers right.
// The buttons preset the invitation form (data-invite, see lib/forms.ts).
export default function Founders() {
  return (
    <section className="band-dark band-dark--tight" aria-labelledby="founders-h">
      <div className="founders">
        <img className="photo-print founders-photo" loading="lazy" decoding="async" src="/assets/photos/invite-teaching.webp" alt="Remi teaching in front of a screen that reads “You can't be happy living someone else's comfort level”" />
        <div>
          <h2 id="founders-h" className="founders-title">For founders, boards &amp; senior teams</h2>
          <div className="founder-cards">
            <article className="founder-card">
              <span className="icon-ring"><Icon name="people" size={26} /></span>
              <h3>Senior team facilitation</h3>
              <p>Designing and holding consequential conversations for boards, founders, executive teams and senior leaders when truth, alignment, relationships and difficult decisions matter.</p>
              <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Facilitation">Invite Remi to facilitate</a>
            </article>
            <article className="founder-card">
              <span className="icon-ring"><Icon name="compass" size={26} /></span>
              <h3>High-level strategic consulting</h3>
              <p>Working with founders, owners, boards and senior leaders on alignment, leadership, culture, intellectual property, consultative sales and building an asset beyond the founder.</p>
              <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Consulting">Explore strategic consulting</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
