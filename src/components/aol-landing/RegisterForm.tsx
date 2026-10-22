'use client';

// The free series registration, as Why Do I Keep Doing This? does it (components/wdk-landing/RegisterForm.tsx): first
// name and email (visible labels, autofill), plus an optional, unticked marketing choice. Goes through
// submitLead('waitlist') with the product name; /api/lead puts the person in the series' own segment and, only if they
// ticked the choice, the relationships list too. Each of the deck's three forms has its own button and fine print.
// The fields keep what was typed when sending fails.
import Link from 'next/link';
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';
import { AOL_SEGMENT, AOL_TITLE, AOL_WATCH_HREF } from '@/content/aol-landing';

export default function RegisterForm({ button, fine, wide = false }: { button: string; fine: string; wide?: boolean }) {
  const [sent, setSent] = useState<string | null>(null); // the first name, once registered
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent !== null) return (
    <div className="aol-done" role="status">
      <p className="aol-done-title">Thank you{sent ? `, ${sent}` : ''}.</p>
      {AOL_WATCH_HREF
        ? <><p>Your free series is ready. We’ve also emailed your access link.</p><a href={AOL_WATCH_HREF} className="aol-btn">Watch video one</a></>
        : <p>You’re registered for the free series. We’ll email your access link.</p>}
    </div>
  );

  return (
    <form className={`aol-form${wide ? ' aol-form--wide' : ''}`} onSubmit={async e => {
      e.preventDefault();
      const form = e.currentTarget;
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', form);
      setBusy(false);
      if (err) setError(err); else setSent(String(new FormData(form).get('firstName') ?? '').trim());
    }}>
      <input type="hidden" name="product" value={AOL_TITLE} />
      <input type="hidden" name="segment" value={AOL_SEGMENT} />
      <div className="aol-fields">
        <div className="aol-field">
          <label htmlFor={`${id}-n`}>First name</label>
          <input id={`${id}-n`} name="firstName" type="text" required placeholder="Your first name" autoComplete="given-name" />
        </div>
        <div className="aol-field">
          <label htmlFor={`${id}-e`}>Email address</label>
          <input id={`${id}-e`} name="email" type="email" required placeholder="Your email address" autoComplete="email" inputMode="email" />
        </div>
      </div>
      <div className="aol-optin">
        {/* Unticked sends "No" (the hidden field); ticked, the checkbox's "Yes" comes later and wins */}
        <input type="hidden" name="marketing" value="No" />
        <input id={`${id}-m`} name="marketing" type="checkbox" value="Yes" />
        <label htmlFor={`${id}-m`}>Yes, I’d also like ideas and occasional program invitations from Remi. I can unsubscribe at any time.</label>
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="aol-btn aol-submit" disabled={busy}>{busy ? 'Sending…' : button}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="aol-fine">{fine}</p>
      <p className="aol-fine">We’ll email your access link. <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  );
}
