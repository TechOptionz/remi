'use client';

// The six pattern boxes on a rabbit-hole page, as their own section (the page passes its heading in `head`). Each box
// expands in place on hover to show the pattern's lines and its four answers under the page's labels. Touch and keyboard:
// a tap / Enter pins a box open (and closes it again), since there is no hover there.
import { useId, useState } from 'react';
import type { Pattern } from '@/content/rabbit-holes';

type Props = { patterns: Pattern[]; labels: string[]; head: React.ReactNode; className?: string; labelledBy: string };

export default function PatternBoxes({ patterns, labels, head, className = '', labelledBy }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section id="patterns" className={`kb-section kb-patterns ${className}`} aria-labelledby={labelledBy}>
      {head}
      <div className="kb-pattern-grid">
        {patterns.map((x, i) => (
          <div key={x.title} className={`kb-pattern${open === i ? ' is-open' : ''}`}>
            <button type="button" className="kb-pattern-head" aria-expanded={open === i} aria-controls={`${id}-${i}`} onClick={() => setOpen(open === i ? null : i)}>
              <span>{x.title}</span><span className="kb-arrow" aria-hidden="true">⟶</span>
            </button>
            <div id={`${id}-${i}`} className="kb-pattern-body">
              <div>
                <div className="kb-pattern-inner">
                  {x.panel.map(line => <p key={line}>{line}</p>)}
                  <dl className="kb-pattern-answers">
                    {labels.map((label, n) => (
                      <div key={label}><dt>{label}</dt><dd>{x.answers[n]}</dd></div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
