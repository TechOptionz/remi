'use client';

// The 90-Day Review's waitlist form (the mockup's closing band: name, email, "Join the waitlist"). Goes through
// submitLead('waitlist') with the product's name and its list, like NotifyForm, which asks for an email only.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function WaitlistForm({ product, segment }: { product: string; segment?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return <p className="n90-thanks" role="status">Thank you. You’re on the waitlist, and you’ll receive the launch details as soon as they’re ready.</p>;
  return (
    <form className="n90-form" onSubmit={async e => {
      e.preventDefault();
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', e.currentTarget);
      setBusy(false);
      if (err) setError(err); else setSent(true);
    }}>
      <input type="hidden" name="product" value={product} />
      {segment && <input type="hidden" name="segment" value={segment} />}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="sr-only" htmlFor={`${id}-n`}>Name</label>
      <input id={`${id}-n`} name="name" type="text" required placeholder="Name" autoComplete="name" />
      <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required placeholder="Email address" autoComplete="email" />
      <button type="submit" className="n90-btn n90-btn--dark" disabled={busy}>{busy ? 'Sending…' : 'Join the waitlist'}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
