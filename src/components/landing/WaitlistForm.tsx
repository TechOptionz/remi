'use client';

// The name + email waitlist form for the sales pages whose program is not on sale yet (Benchmarking, Build Beyond the
// Founder). Goes through submitLead('waitlist') with the product's name and its list. Each page styles it through its
// own class prefix: `<prefix>-form`, `<prefix>-btn <prefix>-btn--dark` and `<prefix>-thanks`.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function WaitlistForm({ product, segment, prefix, namePlaceholder = 'Name', thanks }: {
  product: string; segment?: string; prefix: string; namePlaceholder?: string; thanks: string;
}) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return <p className={`${prefix}-thanks`} role="status">{thanks}</p>;
  return (
    <form className={`${prefix}-form`} onSubmit={async e => {
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
      <label className="sr-only" htmlFor={`${id}-n`}>{namePlaceholder}</label>
      <input id={`${id}-n`} name="name" type="text" required placeholder={namePlaceholder} autoComplete={namePlaceholder === 'First name' ? 'given-name' : 'name'} />
      <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required placeholder="Email address" autoComplete="email" />
      <button type="submit" className={`${prefix}-btn ${prefix}-btn--dark`} disabled={busy}>{busy ? 'Sending…' : 'Join the waitlist'}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
