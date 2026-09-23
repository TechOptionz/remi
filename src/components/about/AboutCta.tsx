import Link from 'next/link';
import { SITE } from '@/content/site';

// INVITE — dark closing band that runs straight into the footer
export default function AboutCta() {
  return (
    <section className="band-dark band-dark--tight cta-dark" aria-labelledby="cta-h">
      <img src="/assets/remi-logo.webp" alt={SITE.logoAlt} width="220" height="79" loading="lazy" decoding="async" />
      <div>
        <h2 id="cta-h" className="part-title part-title--sm">Fancy a proper conversation?</h2>
        <div className="btn-row btn-row--start">
          <Link href="/invite-remi?invite=Conversation#invite-form" className="btn btn--outline btn--caps">Invite me to your podcast</Link>
          <Link href="/invite-remi?invite=Speaking#invite-form" className="btn btn--outline btn--caps">Invite me to speak</Link>
          <Link href="/invite-remi#speaker-reel" className="btn btn--outline btn--caps">Watch the speaker reel</Link>
        </div>
      </div>
    </section>
  );
}
