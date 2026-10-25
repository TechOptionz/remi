'use client';

// The Let Truth Lead sign-up on /subscribe: first name + email, "Send me Let Truth Lead". Goes through
// submitLead('newsletter'), like the footer's NewsletterForm, so it joins the same newsletter list.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function LtlForm({ inline }: { inline?: boolean }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return <p className="ltl-thanks" role="status">Thank you. Your first edition of Let Truth Lead arrives on a Sunday evening soon, with the link for sending Remi your questions.</p>;
  return (
    <form className={`ltl-form${inline ? ' ltl-form--inline' : ''}`} onSubmit={async e => {
      e.preventDefault();
      setBusy(true); setError(null);
      const err = await submitLead('newsletter', e.currentTarget);
      setBusy(false);
      if (err) setError(err); else setSent(true);
    }}>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="sr-only" htmlFor={`${id}-n`}>First name</label>
      <input id={`${id}-n`} name="firstName" type="text" placeholder="First name" autoComplete="given-name" />
      <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required placeholder="Email address" autoComplete="email" />
      <button type="submit" className="ltl-btn" disabled={busy}>{busy ? 'Sending…' : <>Send me Let Truth Lead <span aria-hidden="true">→</span></>}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
