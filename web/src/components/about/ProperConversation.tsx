import Link from 'next/link';

// A PROPER CONVERSATION
export default function ProperConversation() {
  return (
    <section className="section about-split about-split--flip" aria-labelledby="convo-h">
      <img className="about-side-photo" loading="lazy" decoding="async" src="/assets/photos/about-audience.webp" alt="Remi speaking to a seated audience" />
      <div>
        <p className="eyebrow">Perspectives</p>
        <h2 id="convo-h" className="about-h2"><span className="underline">I love a proper conversation</span></h2>
        <p className="body-xl">I love conversations where both people think, question, challenge, laugh and occasionally change their minds. That is what Perspectives is for.</p>
        <p className="guests"><span className="guests-label">Guests have included</span> Richard Schwartz · Peter Singer · Michael E. Gerber · Dr Julie Smith · Dr Shefali Tsabary · Oliver Burkeman</p>
        <Link href="/#rabbit-holes" className="btn btn--primary">Watch or listen to Perspectives</Link>
      </div>
    </section>
  );
}
