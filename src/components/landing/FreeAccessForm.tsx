'use client';

// The registration for a free program that is open (BuyMode's `free`): first name and email, plus an optional, unticked
// marketing choice. It takes the place of the page's "tell me when it's ready" / waitlist form (products/NotifyForm,
// landing/WaitlistForm) and is styled by their classes. Goes through submitLead('waitlist') with `enrol` = the
// program's slug: /api/lead enrols the person in the program's Thinkific course, emails them how to start, tells the
// team and files them under "Free program — <title>" (plus the page's list and the newsletter only if they ticked).
import Link from 'next/link';
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function FreeAccessForm({ slug, access, product, segment, label, formClass, btnClass, thanksClass }: {
  slug: string; access: string | null; product: string; segment?: string; label: string;
  formClass: string; btnClass: string; thanksClass: string;
}) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return (
    <div role="status">
      <p className={thanksClass}>You’re in. We’ve emailed you how to start {product}.</p>
      <p>If this is your first program with Remi, look for an email from Remi’s online school to set your password, then sign in.</p>
      {access && <p><a href={access} className={btnClass}>Sign in and start</a></p>}
    </div>
  );
  return (
    <form className={formClass} onSubmit={async e => {
      e.preventDefault();
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', e.currentTarget);
      setBusy(false);
      if (err) setError(err); else setSent(true);
    }}>
      <input type="hidden" name="enrol" value={slug} />
      <input type="hidden" name="product" value={product} />
      {segment && <input type="hidden" name="segment" value={segment} />}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="sr-only" htmlFor={`${id}-n`}>First name</label>
      <input id={`${id}-n`} name="firstName" type="text" required placeholder="First name" autoComplete="given-name" />
      <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required placeholder="Email address" autoComplete="email" />
      <button type="submit" className={btnClass} disabled={busy}>{busy ? 'Opening your access…' : label}</button>
      <div className="weekly-optin">
        {/* Unticked sends "No" (the hidden field); ticked, the checkbox's "Yes" comes later and wins */}
        <input type="hidden" name="marketing" value="No" />
        <input id={`${id}-m`} name="marketing" type="checkbox" value="Yes" />
        <label htmlFor={`${id}-m`}>Yes, I’d also like ideas and occasional program invitations from Remi. I can unsubscribe at any time.</label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="free-fine">Free. No payment details needed. We’ll email how to sign in. <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  );
}
