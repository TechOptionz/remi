// WHAT KIND OF ROOM
export default function Rooms() {
  return (
    <section id="rooms" className="section rooms-section" aria-labelledby="rooms-h">
      <h2 id="rooms-h" className="rooms-title"><span className="underline">What kind of room are we creating?</span></h2>
      <div className="rooms">
        <article className="room-card">
          <span className="room-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M16 8h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-4-3h-3a2 2 0 0 1-2-2v-1"/></svg></span>
          <div className="room-body"><h3>A proper conversation</h3><p>Podcasts, interviews, fireside chats and reciprocal conversations where both people get to think.</p></div>
          <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Conversation">Invite me to a conversation</a>
        </article>
        <article className="room-card">
          <span className="room-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="12" rx="6" ry="3.5"/><circle cx="12" cy="4.5" r="1.5"/><circle cx="4" cy="8" r="1.5"/><circle cx="20" cy="8" r="1.5"/><circle cx="4" cy="16.5" r="1.5"/><circle cx="20" cy="16.5" r="1.5"/><circle cx="12" cy="20" r="1.5"/></svg></span>
          <div className="room-body"><h3>An interesting room</h3><p>Panels, roundtables, salons, private gatherings, festivals and ideas that refuse to fit neatly into a box.</p></div>
          <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Room">Invite me into the room</a>
        </article>
        <article className="room-card">
          <span className="room-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 3l4 3-2 3-4-3z"/><path d="M7 8l7 8M6 9l3 8"/><ellipse cx="13" cy="19" rx="8" ry="2.5"/></svg></span>
          <div className="room-body"><h3>A stage that matters</h3><p>Keynotes, public lectures and high-impact experiences designed to move a room, not merely address it.</p></div>
          <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Speaking">Invite me to the stage</a>
        </article>
        <article className="room-card">
          <span className="room-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="3"/><circle cx="5" cy="9" r="2.2"/><circle cx="19" cy="9" r="2.2"/><path d="M7 20c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5M1.5 19c0-2.4 1.5-4.3 3.5-4.3M22.5 19c0-2.4-1.5-4.3-3.5-4.3"/></svg></span>
          <div className="room-body"><h3>A senior team ready to move</h3><p>High-level facilitation for boards, founders, executive teams and senior leaders when truth, alignment, relationships and consequential decisions matter.</p></div>
          <a href="#invite-form" className="btn btn--primary btn--wide" data-invite="Facilitation">Invite me to facilitate</a>
        </article>
      </div>
      <div className="center-cta">
        <p>Not sure where your invitation belongs? Wonderful.<br /><span>Tell me what you're imagining.</span></p>
        <a href="#invite-form" className="btn btn--primary btn--big" data-invite="Other">Start the conversation</a>
      </div>
    </section>
  );
}
