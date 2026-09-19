// WAYS TO WORK
export default function WaysToWork() {
  return (
    <section id="work" className="work" aria-label="Ways to work with Remi">
      <div className="work-card work-card--accent">
        <div>
          <p className="card-eyebrow">Strategy facilitation</p>
          <h2>Leadership teams and boards</h2>
          <p>Offsites, strategy days and decisions that need an outside mind. Remi brings the frames into the room and leaves the team thinking differently.</p>
        </div>
        <a href="#contact" className="btn btn--bg" data-interest="Facilitation">Facilitation enquiry →</a>
      </div>
      <div className="work-card">
        <div>
          <p className="card-eyebrow">Keynote speaking</p>
          <h2>Bring Remi to your stage</h2>
          <p>Keynotes and conference sessions on leadership, truth and decision-making for audiences who expect substance.</p>
        </div>
        <a href="#contact" className="btn btn--outline" data-interest="Speaking">Speaking enquiry</a>
      </div>
      <div className="work-card">
        <div>
          <p className="card-eyebrow">Books &amp; programs</p>
          <h2>Take the frames with you</h2>
          <p>Books, self-paced programs and tools built on Remi's models, for leaders who want to work through the thinking on their own terms.</p>
        </div>
        <a href="#contact" className="btn btn--outline" data-interest="Products">Browse books &amp; programs</a>
      </div>
    </section>
  );
}
