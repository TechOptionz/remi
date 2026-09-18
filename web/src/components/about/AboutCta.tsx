import Link from 'next/link';

// INVITE
export default function AboutCta() {
  return (
    <section className="page-cta" aria-labelledby="cta-h">
      <h2 id="cta-h">Fancy a proper conversation?</h2>
      <div className="btn-row">
        <Link href="/invite-remi?invite=Conversation#invite-form" className="btn">Invite me to your podcast</Link>
        <Link href="/invite-remi?invite=Speaking#invite-form" className="btn">Invite me to speak</Link>
      </div>
    </section>
  );
}
