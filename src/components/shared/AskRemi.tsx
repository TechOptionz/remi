'use client';

// Send Remi a question or feedback privately — in place of public comments. Goes to the team by email through
// submitLead('feedback'); nothing is published. Name and email are optional (an email means the team can reply).
// `about` names the article, or `options` lets the reader choose (the Perspectives episodes). `fax` is a hidden
// honeypot field: /api/lead drops anything that fills it.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function AskRemi({ about, options, title = 'Ask Remi a question', lede, id: anchor }: {
  about?: string; options?: string[]; title?: string; lede?: string; id?: string;
}) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  return (
    <section id={anchor} className="rf-ask" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="rf-ask-h">{title}</h2>
      <p className="rf-ask-lede">{lede ?? 'A question it raised, something that didn’t sit right, or what you’d like me to write about next. This goes privately to me and my team; nothing is published.'}</p>
      {sent
        ? <p className="rf-ask-thanks" role="status">Thank you. It’s with me now. If you left your email, we’ll reply.</p>
        : (
          <form className="rf-ask-form" onSubmit={async e => {
            e.preventDefault();
            const f = e.currentTarget;
            setBusy(true); setError(null);
            const err = await submitLead('feedback', f);
            setBusy(false);
            if (err) setError(err); else setSent(true);
          }}>
            {about && <input type="hidden" name="about" value={about} />}
            {options && (
              <label className="rf-ask-wide"><span>Which conversation?</span>
                <select name="about" defaultValue="">
                  <option value="">Perspectives in general</option>
                  {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
            )}
            <label className="rf-ask-wide"><span>Your question or feedback</span><textarea name="message" rows={4} required maxLength={4000}></textarea></label>
            <label><span>First name <em>(optional)</em></span><input name="name" autoComplete="given-name" /></label>
            <label><span>Email <em>(optional, for a reply)</em></span><input name="email" type="email" autoComplete="email" /></label>
            <label className="rf-hp" aria-hidden="true">Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
            <button type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send privately'}</button>
            {error && <p className="form-error rf-ask-wide" role="alert">{error}</p>}
          </form>
        )}
    </section>
  );
}
