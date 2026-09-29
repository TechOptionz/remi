'use client';

// The one simple call to action every topic page carries, so people can be sorted into lists: leadership, business,
// personal development, consultative sales or relationships. The page says which list (`segment`); the sign-up posts
// it through submitLead('newsletter') and /api/lead adds the contact to that segment (see app/api/lead/route.ts).
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';
import { SEGMENTS, type SegmentId } from '@/content/products';

const COPY: Record<SegmentId, { head: string; text: string }> = {
  leadership: { head: 'Leading without carrying everybody?', text: 'Occasional, honest thinking on leadership, accountability and culture, and the first to hear when new leadership programs open.' },
  business: { head: 'Building something that outlasts you?', text: 'Occasional, honest thinking on building a business that can operate beyond the founder, and the first to hear about new programs.' },
  'personal-development': { head: 'Ready to understand your own patterns?', text: 'Occasional, honest thinking on emotional change, self-esteem and alignment, and the first to hear about new programs and conversations.' },
  'consultative-sales': { head: 'Selling without scripts, pressure or bullshit?', text: 'Occasional, honest thinking on consultative sales and ethical influence, and the first to hear about new programs.' },
  relationships: { head: 'Loving someone and keeping yourself?', text: 'Occasional, honest thinking on relationships, attachment and repair, and the first to hear about new programs and conversations.' },
};

export default function SegmentCta({ segment, className = '' }: { segment: SegmentId; className?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();
  const c = COPY[segment];
  const name = SEGMENTS.find(s => s.id === segment)!.label;

  return (
    <section className={`seg-cta ${className}`.trim()} aria-labelledby={`${id}-h`}>
      <div className="seg-cta-inner">
        <p className="seg-cta-eyebrow">{name}</p>
        <h2 id={`${id}-h`} className="seg-cta-h">{c.head}</h2>
        <p>{c.text}</p>
        {sent
          ? <p className="seg-cta-thanks" role="status">Thank you, you’re in. Let truth lead.</p>
          : (
            <form className="seg-cta-form" onSubmit={async e => {
              e.preventDefault();
              setBusy(true); setError(null);
              const err = await submitLead('newsletter', e.currentTarget);
              setBusy(false);
              if (err) setError(err); else setSent(true);
            }}>
              <input type="hidden" name="segment" value={segment} />
              <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
              <input id={`${id}-e`} name="email" type="email" required placeholder="Your email address" autoComplete="email" />
              <button type="submit" disabled={busy}>{busy ? 'Sending…' : 'Keep me in the conversation'}</button>
              {error && <p className="form-error" role="alert">{error}</p>}
            </form>
          )}
      </div>
    </section>
  );
}
