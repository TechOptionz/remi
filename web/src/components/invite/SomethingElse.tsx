// HAVE SOMETHING ELSE IN MIND? — photo left, prompt and button right; closes Part Two
export default function SomethingElse() {
  return (
    <section className="section section--tight section--flush something-else" aria-labelledby="else-h">
      <img className="something-else-photo" loading="lazy" decoding="async" src="/assets/photos/remi-pink-jacket.webp" alt="Remi smiling in a pink patterned jacket" />
      <div>
        <h2 id="else-h" className="part-title part-title--sm">Have something else in mind?</h2>
        <p className="part-lede">Wonderful. The most interesting invitations do not always arrive with a familiar label.</p>
        <a href="#invite-form" className="btn btn--primary btn--caps" data-invite="Other">Tell me what you're imagining</a>
      </div>
    </section>
  );
}
