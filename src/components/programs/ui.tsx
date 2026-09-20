// Building blocks shared by the Programs (Rebel Yell) sections.
import { TESTIMONIALS, WAITLIST_HREF } from '@/content/programs';

/** The repeated "Join the private waitlist" button. */
export function WaitlistCta({ label = 'Join the private waitlist', align = 'start' }: { label?: string; align?: 'start' | 'center' }) {
  return (
    <p className={`ry-cta ry-cta--${align}`}>
      <a href={WAITLIST_HREF} className="btn btn--primary btn--caps">{label}</a>
    </p>
  );
}

/** Handwritten "Let truth lead." sign-off. */
export function TruthLead({ className = '' }: { className?: string }) {
  return <p className={`ry-hand ${className}`}><span className="underline">Let truth lead.</span></p>;
}

/** Testimonial slot: renders nothing until a real quote is added to TESTIMONIALS (content/programs.ts). */
export function TestimonialSlot({ slot }: { slot: keyof typeof TESTIMONIALS }) {
  const t = TESTIMONIALS[slot];
  if (!t) return null;
  return (
    <figure className="ry-testimonial">
      <blockquote><p>{t.quote}</p></blockquote>
      <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
    </figure>
  );
}
