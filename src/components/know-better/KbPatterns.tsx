'use client';

// WHICH VERSION OF THIS IS YOURS? — six pattern boxes that expand in place on hover to show the pattern and its four
// answers (What I do / What I avoid / How it protected me / What can change). Copy lives in PATTERNS (content/know-better.ts).
// Touch and keyboard: a tap / Enter pins a box open (and closes it again), since there is no hover there.
import { useId, useState } from 'react';
import { PATTERNS, PATTERN_TABS } from '@/content/know-better';
import { Brush, Sym } from './ui';

export default function KbPatterns() {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section id="patterns" className="kb-section kb-patterns" aria-labelledby="kb-patterns-h">
      <h2 id="kb-patterns-h" className="kb-h2 kb-center">Which version <Brush>of this is</Brush> yours?</h2>
      <p className="kb-sub kb-patterns-sub"><Sym name="hm-loop" className="kb-patterns-loop" />Because protective patterns rarely introduce themselves politely.</p>

      <div className="kb-pattern-grid">
        {PATTERNS.map((p, i) => (
          <div key={p.title} className={`kb-pattern${open === i ? ' is-open' : ''}`}>
            <button type="button" className="kb-pattern-head" aria-expanded={open === i} aria-controls={`${id}-${i}`} onClick={() => setOpen(open === i ? null : i)}>
              <span>{p.title}</span><span className="kb-arrow" aria-hidden="true">⟶</span>
            </button>
            <div id={`${id}-${i}`} className="kb-pattern-body">
              <div>
                <div className="kb-pattern-inner">
                  {p.panel.map(line => <p key={line}>{line}</p>)}
                  <dl className="kb-pattern-answers">
                    {PATTERN_TABS.map(t => (
                      <div key={t.key}><dt>{t.label}</dt><dd>{p[t.key]}</dd></div>
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
