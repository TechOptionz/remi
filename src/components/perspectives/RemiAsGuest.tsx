import Link from 'next/link';

// WHEN SOMEBODY ELSE ASKS THE QUESTIONS — portrait left; hear Remi as the guest, or invite her onto your podcast
export default function RemiAsGuest() {
  return (
    <section className="section section--tight section--flush guest-split" aria-labelledby="guest-h">
      <img loading="lazy" decoding="async" src="/assets/photos/about-remi.webp" alt="Remi smiling, in a cream jumper" />
      <div>
        <h2 id="guest-h" className="part-title part-title--sm"><span className="underline">When somebody else asks the questions</span></h2>
        <p className="part-lede">I enjoy being interviewed just as much as hosting. A thoughtful interviewer can take my own ideas somewhere I had not expected them to go.</p>
        <p className="part-lede">Explore conversations where I am the guest, or invite me into one of your own.</p>
        <div className="guest-actions">
          <a href="#archive" className="btn btn--primary btn--caps" data-topic="Remi as guest">Hear Remi as the guest</a>
          <Link href="/invite-remi?invite=Conversation#invite-form" className="btn btn--outline btn--caps">Invite me to your podcast</Link>
        </div>
      </div>
    </section>
  );
}
