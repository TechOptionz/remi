'use client';

// CLOSING CTA — photo band with the final invitation
import { useSiteState } from '@/lib/site-state';

export default function ClosingCta() {
  const { hero } = useSiteState();
  // The portrait heroes already use cta-remi.webp up top, so they close on a different photo
  const photo = ['C1', 'C2', 'C3'].includes(hero) ? '/assets/photos/story.webp' : '/assets/photos/cta-remi.webp';
  return (
    <section className="cta" aria-label="Closing invitation">
      <img loading="lazy" decoding="async" className="cta-photo" src={photo} alt="" aria-hidden="true" />
      <div className="cta-fade" aria-hidden="true"></div>
      <div className="cta-inner">
        <div className="cta-spacer" aria-hidden="true"></div>
        <div className="cta-copy">
          <p className="eyebrow">Next step</p>
          <h2 className="balance">Ready to think at a different level?</h2>
          <p>Bring Remi to your stage, your strategy day or your leadership team.</p>
          <a href="#contact" className="btn btn--primary">Start the conversation</a>
        </div>
      </div>
    </section>
  );
}
