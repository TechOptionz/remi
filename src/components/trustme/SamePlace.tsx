// YOU CANNOT LEAD EVERYONE FROM THE SAME PLACE
export default function SamePlace() {
  return (
    <section className="section" aria-labelledby="same-place-h">
      <h2 id="same-place-h" className="h2">You cannot lead everyone from the same place</h2>
      <p className="section-sub">The level of thinking present determines what kind of leadership can actually be heard.</p>
      <div className="principles">
        <article className="principle">
          <span className="icon-ring"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19h4v-4h4v-4h4V7h4"/></svg></span>
          <h3>You cannot skip a level</h3>
          <p>Each stage has problems that must be solved before the next becomes available.</p>
        </article>
        <article className="principle">
          <span className="icon-ring"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v16M8 20h8M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0L5 7zM19 7l-3 6a3 3 0 0 0 6 0l-3-6z"/></svg></span>
          <h3>Every level can be functional or dysfunctional</h3>
          <p>Belonging can create trust or conformity. Systems can create freedom or bureaucracy.</p>
        </article>
        <article className="principle">
          <span className="icon-ring"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg></span>
          <h3>The thinking that created the problem cannot solve it</h3>
          <p>The leader must respond from the level the situation requires.</p>
        </article>
      </div>
      <figure className="quote-band">
        <blockquote><p>Leadership is not dragging everyone to where you are. It is seeing what thinking is present and creating the conditions for the next capability.</p></blockquote>
      </figure>
    </section>
  );
}
