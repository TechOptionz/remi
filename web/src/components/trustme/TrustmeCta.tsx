import Link from 'next/link';

// CTA
export default function TrustmeCta() {
  return (
    <section className="page-cta" aria-labelledby="cta-h">
      <h2 id="cta-h">Ready to see the level you're leading from?</h2>
      <Link href="/invite-remi?invite=Facilitation#invite-form" className="btn">Invite Remi to facilitate</Link>
    </section>
  );
}
