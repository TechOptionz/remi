'use client';

// "Tell me when it's ready" — email capture for the Self-Esteem Triad guided introduction, until the product exists.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function TriadNotify() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (sent) return <p className="news-thanks triad-thanks">Thank you. I’ll let you know the moment it’s ready.</p>;

  return (
    <form className="keep-form triad-notify" onSubmit={async e => {
      e.preventDefault();
      const f = e.currentTarget;
      setBusy(true); setError(null);
      const err = await submitLead('waitlist', f);
      setBusy(false);
      if (err) setError(err); else setSent(true);
    }}>
      <input type="hidden" name="product" value="Self-Esteem Triad" />
      <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
      <input id={`${id}-email`} name="email" type="email" required placeholder="Your email address" autoComplete="email" />
      <button type="submit" disabled={busy}>Tell me when it’s ready <span aria-hidden="true">→</span></button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
