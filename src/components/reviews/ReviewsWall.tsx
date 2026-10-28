'use client';

// The reviews on /reviews: filter chips (All, then each program a review names) above the cards, laid out in balanced
// columns. Reviews come from content/reviews.ts; styles styles/reviews.css (.rv-*).
import { useMemo, useState } from 'react';
import { REVIEW_PROGRAMS, type Review, type ReviewProgram } from '@/content/reviews';

export default function ReviewsWall({ reviews }: { reviews: Review[] }) {
  const [show, setShow] = useState<ReviewProgram | 'all'>('all');
  const counts = useMemo(() => Object.fromEntries(REVIEW_PROGRAMS.map(p => [p, reviews.filter(r => r.program === p).length])), [reviews]);
  const list = show === 'all' ? reviews : reviews.filter(r => r.program === show);

  return (
    <>
      <div className="rv-filters" role="group" aria-label="Show reviews from">
        <button type="button" className="rv-chip" aria-pressed={show === 'all'} onClick={() => setShow('all')}>All reviews <span>{reviews.length}</span></button>
        {REVIEW_PROGRAMS.filter(p => counts[p]).map(p => (
          <button key={p} type="button" className="rv-chip" aria-pressed={show === p} onClick={() => setShow(p)}>{p} <span>{counts[p]}</span></button>
        ))}
      </div>
      <p className="rv-showing" aria-live="polite">{show === 'all' ? `Showing all ${list.length} reviews` : `Showing ${list.length} reviews of ${show}`}</p>
      <ul className="rv-grid">
        {list.map(r => (
          <li key={r.name + r.quote.slice(0, 24)} className="rv-card">
            <figure>
              <span className="rv-mark" aria-hidden="true">“</span>
              {r.title && <p className="rv-title">{r.title}</p>}
              <blockquote>{r.quote.split('\n').map(t => <p key={t}>{t}</p>)}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                {r.role && <span className="rv-role">{r.role}</span>}
                {r.program && <span className="rv-program">{r.program}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
