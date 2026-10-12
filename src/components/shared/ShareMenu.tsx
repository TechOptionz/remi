'use client';

// "Share" drop-down for the top of a page, beside its breadcrumbs: a small button that opens a menu of the same
// targets as ShareLinks (copy link, the device share sheet, email, LinkedIn, Facebook, WhatsApp), icon + name.
// Closes on Escape, on a click outside and after a choice.
import { useEffect, useId, useRef, useState } from 'react';
import { Svg, external, useShare } from './ShareLinks';

export default function ShareMenu({ path, title }: { path: string; title: string }) {
  const [open, setOpen] = useState(false);
  const { native, copied, copy, share, targets } = useShare(path, title);
  const box = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <div className="rf-menu" ref={box}>
      <button ref={btn} type="button" className="rf-menu-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen(o => !o)}>
        <Svg name="share" size={16} /> Share <span className="rf-menu-caret" aria-hidden="true"></span>
      </button>
      <ul id={id} className="rf-menu-list" hidden={!open}>
        <li><button type="button" onClick={async () => { await copy(); setTimeout(() => setOpen(false), 900); }}><Svg name={copied ? 'check' : 'link'} />{copied ? 'Link copied' : 'Copy link'}</button></li>
        {native && <li><button type="button" onClick={() => { share(); setOpen(false); }}><Svg name="share" />More options…</button></li>}
        {targets.map(t => <li key={t.icon}><a href={t.href} {...external(t.href)} onClick={() => setOpen(false)}><Svg name={t.icon} />{t.name}</a></li>)}
      </ul>
      <span className="sr-only" role="status">{copied ? 'Link copied' : ''}</span>
    </div>
  );
}
