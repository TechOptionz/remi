'use client';

// The free series registration: first name and email (visible labels, autofill), plus an optional, unchecked marketing
// choice. Goes through submitLead('waitlist') with the product name; /api/lead puts the person in the series' own
// segment and, only if they ticked the choice, the personal development list too. The fields keep what was typed when
// sending fails.
import Link from 'next/link';
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';
import { WDK_SEGMENT, WDK_TITLE, WDK_WATCH_HREF } from '@/content/wdk-landing';

export default function RegisterForm() {
  const [sent, setSent] = useState<string | null>(null); // the first name, once registered
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent !== null) return WDK_WATCH_HREF
    ? (
      <div className="wdk-done" role="status">
        <p className="wdk-done-title">You’re in.</p>
        <p>Your free series is ready. Start with video one below. We’ve also emailed your access link.</p>
        <a href={WDK_WATCH_HREF} className="hm-btn stl-btn">Watch video one</a>
      </div>
    ) : (
      <div className="wdk-done" role="status">
        <p className="wdk-done-title">Thank you{sent ? `, ${sent}` : ''}.</p>
        <p>You’re registered for the free series. We’ll email your access link.</p>
      </div>
    );

  return (
    <form className="wdk-form" data-wdk-form onSubmit={async e => {
      e.preventDefault();
      const form = e.currentTarget;
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', form);
      setBusy(false);
      if (err) setError(err); else setSent(String(new FormData(form).get('firstName') ?? '').trim());
    }}>
      <input type="hidden" name="product" value={WDK_TITLE} />
      <input type="hidden" name="segment" value={WDK_SEGMENT} />
      <div className="wdk-field">
        <label htmlFor={`${id}-n`}>First name</label>
        <input id={`${id}-n`} name="firstName" type="text" required placeholder="Your first name" autoComplete="given-name" />
      </div>
      <div className="wdk-field">
        <label htmlFor={`${id}-e`}>Email address</label>
        <input id={`${id}-e`} name="email" type="email" required placeholder="Your email address" autoComplete="email" inputMode="email" />
      </div>
      <div className="wdk-optin">
        {/* Unticked sends "No" (the hidden field); ticked, the checkbox's "Yes" comes later and wins */}
        <input type="hidden" name="marketing" value="No" />
        <input id={`${id}-m`} name="marketing" type="checkbox" value="Yes" />
        <label htmlFor={`${id}-m`}>Yes, I’d also like ideas and occasional program invitations from Remi. I can unsubscribe at any time.</label>
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="hm-btn stl-btn wdk-submit" disabled={busy}>{busy ? 'Sending…' : 'Get the free video series'}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="wdk-fine">Free access to all five videos. No payment details needed.</p>
      <p className="wdk-fine">We’ll email your access link. <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  );
}
