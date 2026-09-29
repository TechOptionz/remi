'use client';

// "Tell me when it's ready" for a product that has no sales page yet. Goes through submitLead('waitlist') with the
// product name, so the team is told which product and the person joins the contacts list (see app/api/lead/route.ts).
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function NotifyForm({ product, segment }: { product: string; segment?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return <p className="pr-thanks" role="status">Thank you. I’ll let you know as soon as it’s ready.</p>;
  return (
    <form className="pr-notify" onSubmit={async e => {
      e.preventDefault();
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', e.currentTarget);
      setBusy(false);
      if (err) setError(err); else setSent(true);
    }}>
      <input type="hidden" name="product" value={product} />
      {segment && <input type="hidden" name="segment" value={segment} />}
      <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required placeholder="Your email address" autoComplete="email" />
      <button type="submit" className="pr-btn" disabled={busy}>{busy ? 'Sending…' : 'Tell me when it’s ready'}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
