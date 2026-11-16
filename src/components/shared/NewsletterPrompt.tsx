'use client';

// The Let Truth Lead sign-up pop-up (Nov 2026): a small card that slides in once someone has been on the site for
// WAIT_MS, rather than on exit (leaving cannot be detected on phones). It is not a modal:
// the page stays usable behind it. Bottom-left on desktop (the chat sits bottom-right), a bottom sheet on phones.
// It closes with the X, Esc or a tap anywhere outside it, then stays away for QUIET_MS and comes back (the client's call: one
// minute, no scrolling needed); it never shows to a browser that has joined the newsletter through any form
// (NEWSLETTER_JOINED_KEY, set in lib/forms.ts), waits while the chat, search, mobile menu or a form field is in use, and skips the pages in SKIP.
// Copy is the /subscribe page's own. Styles: styles/newsletter-prompt.css.
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NEWSLETTER_JOINED_KEY, submitLead } from '@/lib/forms';

const WAIT_MS = 15_000;
const QUIET_MS = 60_000;
const DISMISSED_KEY = 'rp:newsletter-prompt-dismissed';
const SESSION_START_KEY = 'rp:visit-start';
// The newsletter's own page, private / legal pages and the pages people land on after buying or unsubscribing
const SKIP = /^\/(subscribe|stats|weekly-teaching|privacy-policy)(\/|$)|\/thank-you$/;

const read = (store: 'localStorage' | 'sessionStorage', key: string) => { try { return window[store].getItem(key); } catch { return null; } };
const write = (store: 'localStorage' | 'sessionStorage', key: string, value: string) => { try { window[store].setItem(key, value); } catch {} };

function mayShow() {
  if (read('localStorage', NEWSLETTER_JOINED_KEY)) return false;
  const dismissed = Number(read('localStorage', DISMISSED_KEY));
  return !(dismissed && Date.now() - dismissed < QUIET_MS);
}

/** True while the visitor is in the middle of something the card should not interrupt. */
function busyElsewhere() {
  if (document.querySelector('.chat.is-open, dialog[open], #mobile-nav:not([hidden])')) return true;
  return !!document.activeElement?.closest('input, textarea, select, [contenteditable="true"]');
}

export default function NewsletterPrompt() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const card = useRef<HTMLElement>(null);
  const id = useId();
  const skip = SKIP.test(pathname);

  // Wait for the visit to reach WAIT_MS (counted across pages), and for the quiet period after a dismissal to pass
  useEffect(() => {
    if (open || skip || read('localStorage', NEWSLETTER_JOINED_KEY)) return;
    let start = Number(read('sessionStorage', SESSION_START_KEY));
    if (!start) { start = Date.now(); write('sessionStorage', SESSION_START_KEY, String(start)); }
    const timer = window.setInterval(() => {
      if (Date.now() - start < WAIT_MS) return;
      if (!mayShow() || busyElsewhere()) return;
      window.clearInterval(timer);
      setOpen(true);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [open, skip, pathname]);

  const close = useCallback(() => {
    setOpen(false);
    if (!read('localStorage', NEWSLETTER_JOINED_KEY)) write('localStorage', DISMISSED_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    const onDown = (e: PointerEvent) => { if (!card.current?.contains(e.target as Node)) close(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [open, close]);

  if (!open || skip) return null;
  return (
    <aside ref={card} className="nl-prompt" role="dialog" aria-labelledby={`${id}-t`} aria-describedby={`${id}-d`}>
      <button type="button" className="nl-prompt-close" aria-label="Close" onClick={close}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" /></svg>
      </button>
      <p className="nl-prompt-kicker">Let Truth Lead · Remi’s newsletter</p>
      {sent ? (
        <p className="nl-prompt-title" id={`${id}-t`} role="status">Thank you. Your first edition of Let Truth Lead arrives on a Sunday evening soon, with the link for sending Remi your questions.</p>
      ) : (
        <>
          <p className="nl-prompt-title" id={`${id}-t`}>Start your week with a clearer mind and a question worth asking.</p>
          <p className="nl-prompt-lede" id={`${id}-d`}>A free five-minute read, delivered every second Sunday evening.</p>
          <form className="nl-prompt-form" onSubmit={async e => {
            e.preventDefault();
            setBusy(true); setError(null);
            const err = await submitLead('newsletter', e.currentTarget);
            setBusy(false);
            if (err) setError(err); else setSent(true);
          }}>
            <div className="sr-only" aria-hidden="true">
              <label htmlFor={`${id}-f`}>Fax</label>
              <input id={`${id}-f`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="sr-only" htmlFor={`${id}-n`}>First name</label>
            <input id={`${id}-n`} name="firstName" type="text" placeholder="First name" autoComplete="given-name" />
            <label className="sr-only" htmlFor={`${id}-e`}>Email address</label>
            <input id={`${id}-e`} name="email" type="email" required placeholder="Email address" autoComplete="email" />
            <button type="submit" className="btn btn--primary" disabled={busy}>{busy ? 'Sending…' : <>Send me Let Truth Lead <span aria-hidden="true">→</span></>}</button>
            {error && <p className="form-error" role="alert">{error}</p>}
          </form>
          <p className="nl-prompt-small">Unsubscribe whenever you like. <Link href="/privacy-policy" onClick={close}>Privacy Policy</Link> · <Link href="/subscribe" onClick={close}>About the newsletter</Link></p>
        </>
      )}
    </aside>
  );
}
