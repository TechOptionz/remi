'use client';

// Newsletter signup. Pass className to restyle it (e.g. the Perspectives band).
// Newsletter signup. variant "footer" asks for first name + email; "keep" (Ideas & Models, Part Nine) asks for email only.
import { useId, useState } from 'react';
import { FOOTER } from '@/content/site';
import { submitLead } from '@/lib/forms';

export default function NewsletterForm({ variant = 'footer', className }: { variant?: 'footer' | 'keep'; className?: string }) {
  const [sent, setSent] = useState(false);
  const id = useId();

  if (sent) return <p className="news-thanks">{FOOTER.newsThanks}</p>;

  return (
    <form className={className ?? (variant === 'keep' ? 'news-form keep-form' : 'news-form')} onSubmit={e => { e.preventDefault(); submitLead('newsletter', e.currentTarget); setSent(true); }}>
      {variant === 'footer' && (
        <>
          <label className="sr-only" htmlFor={`${id}-name`}>First name</label>
          <input id={`${id}-name`} name="firstName" placeholder="Your first name" autoComplete="given-name" />
        </>
      )}
      <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
      <input id={`${id}-email`} name="email" type="email" required placeholder="Your email address" autoComplete="email" />
      <button type="submit">{variant === 'keep' ? <>I'm in <span aria-hidden="true">→</span></> : FOOTER.newsButton}</button>
    </form>
  );
}
