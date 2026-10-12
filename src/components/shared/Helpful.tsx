'use client';

// "Was this helpful?" — two buttons under an article. A vote is counted in Upstash Redis through /api/helpful (no
// email, no name or address; one vote per connection per article per day) and remembered in this browser so it isn't
// asked again. Once enough readers have said yes (SHOW_FROM in lib/helpful.ts) the article shows how many.
// Team totals for every article: /stats (STATS_KEY).
import { useEffect, useState } from 'react';

const key = (id: string) => `rp:helpful:${id}`;
type Counts = { yes: number; no: number; show: boolean };
/** Fired with the new counts after a vote, so HelpfulCount at the top of the article updates too. */
const EVENT = 'rp:helpful-counts';

export const readers = (n: number) => `${n.toLocaleString('en-AU')} ${n === 1 ? 'reader' : 'readers'} found this helpful`;

/** The article's count on its own ("♡ 12 readers found this helpful"), e.g. under the Share button at the top. */
export function HelpfulCount({ id, className = '' }: { id: string; className?: string }) {
  const [counts, setCounts] = useState<Counts | null>(null);
  useEffect(() => {
    fetch(`/api/helpful?slug=${encodeURIComponent(id)}`).then(r => r.ok ? r.json() : null).then(setCounts).catch(() => {});
    const onVote = (e: Event) => { const d = (e as CustomEvent<Counts & { id: string }>).detail; if (d.id === id) setCounts(d); };
    window.addEventListener(EVENT, onVote);
    return () => window.removeEventListener(EVENT, onVote);
  }, [id]);
  return counts?.show ? <p className={`rf-helpful-count ${className}`.trim()}><span aria-hidden="true">♡</span> {readers(counts.yes)}</p> : null;
}

export default function Helpful({ id }: { id: string }) {
  const [vote, setVote] = useState<string | null>(null);
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    try { setVote(localStorage.getItem(key(id))); } catch {}
    fetch(`/api/helpful?slug=${encodeURIComponent(id)}`).then(r => r.ok ? r.json() : null).then(setCounts).catch(() => {});
  }, [id]);

  const pick = (answer: 'yes' | 'no') => {
    const label = answer === 'yes' ? 'Yes' : 'Not really';
    setVote(label);
    try { localStorage.setItem(key(id), label); } catch {}
    fetch('/api/helpful', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: id, answer }) })
      .then(r => r.ok ? r.json() : null).then(c => { if (!c) return; setCounts(c); window.dispatchEvent(new CustomEvent(EVENT, { detail: { ...c, id } })); }).catch(() => {});
  };

  return (
    <div className="rf-helpful" role="group" aria-labelledby={`${id}-helpful`}>
      <p id={`${id}-helpful`} className="rf-helpful-q">Was this helpful?</p>
      {vote
        ? <p className="rf-helpful-thanks" role="status">{vote === 'Yes' ? 'Thank you. That helps me know what to write next.' : 'Thank you for saying so. If you tell me what was missing below, I’ll read it.'}</p>
        : (
          <div className="rf-helpful-btns">
            <button type="button" onClick={() => pick('yes')}><span aria-hidden="true">♡</span> Yes, it helped</button>
            <button type="button" onClick={() => pick('no')}>Not really</button>
          </div>
        )}
      {counts?.show && <p className="rf-helpful-count"><span aria-hidden="true">♡</span> {readers(counts.yes)}</p>}
    </div>
  );
}
