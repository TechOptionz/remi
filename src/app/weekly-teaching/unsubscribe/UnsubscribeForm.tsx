'use client';

import { useId, useState } from 'react';

export default function UnsubscribeForm({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  if (done) return <p className="weekly-unsub-done" role="status">Done. You won’t receive the weekly teaching emails any more, and your waitlist place is unchanged. If you change your mind, tick the weekly box the next time you join a waitlist.</p>;
  return (
    <form className="weekly-unsub-form" onSubmit={async e => {
      e.preventDefault();
      const fields = Object.fromEntries(new FormData(e.currentTarget));
      setBusy(true); setError(null);
      try {
        const res = await fetch('/api/weekly-teaching/unsubscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) });
        if (res.ok) setDone(true);
        else setError((await res.json().catch(() => null))?.error ?? 'Something went wrong. Please try again.');
      } catch {
        setError('We could not reach the server. Please check your connection and try again.');
      }
      setBusy(false);
    }}>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-f`}>Fax</label>
        <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor={`${id}-e`}>Email address</label>
      <input id={`${id}-e`} name="email" type="email" required defaultValue={email} autoComplete="email" />
      <button type="submit" className="pr-btn" disabled={busy}>{busy ? 'Saving…' : 'Stop the weekly emails'}</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
