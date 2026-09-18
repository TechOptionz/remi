const GUESTS = ['Richard Schwartz', 'Peter Singer', 'Michael E. Gerber', 'Dr Julie Smith', 'Dr Shefali Tsabary', 'Oliver Burkeman'];

// Handwritten giving quote + stage selfie, then I LOVE A PROPER CONVERSATION + audience photo (2 × 2 grid)
export default function ProperConversation() {
  return (
    <section className="section section--tight section--flush convo-grid" aria-labelledby="convo-h">
      <p className="hand-quote"><span className="underline">If we had the ability to help, then we had a responsibility to notice where help was needed.</span></p>
      <img loading="lazy" decoding="async" src="/assets/photos/invite-stage.webp" alt="Remi taking a selfie with a theatre full of people cheering" />
      <div>
        <h2 id="convo-h" className="part-title part-title--sm"><span className="underline">I love a proper conversation</span></h2>
        <p className="part-lede">I love conversations where both people think, question, challenge, laugh and occasionally change their minds. That is what Perspectives is for.</p>
        <ul className="dot-list dot-list--accent">{GUESTS.map(g => <li key={g}>{g}</li>)}</ul>
      </div>
      <img loading="lazy" decoding="async" src="/assets/photos/about-audience.webp" alt="Remi speaking to a seated audience" />
    </section>
  );
}
