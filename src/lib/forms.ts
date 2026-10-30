'use client';

// Shared form plumbing: presetting a <select> from links/chat, and the lead submission.
import { useEffect, type RefObject } from 'react';

const PRESET_EVENT = 'rp:preset-select';

/** Ask the page's form to select a topic (used by the chat widget). */
export function presetSelect(value: string) {
  window.dispatchEvent(new CustomEvent(PRESET_EVENT, { detail: value }));
}

/**
 * Keeps a <select> in sync with the rest of the site. The value is preset by:
 *  - a URL parameter on arrival, e.g. /?interest=Speaking#contact or /invite-remi?invite=Speaking#invite-form
 *  - a click on any element carrying data-{param}="Value", anywhere on the page
 *  - presetSelect() from the chat widget
 * Unknown values are ignored. `onPick` runs after a click preset (e.g. to focus the form).
 */
export function usePresetSelect(ref: RefObject<HTMLSelectElement | null>, param: 'interest' | 'invite', onPick?: () => void) {
  useEffect(() => {
    const set = (value: string | null | undefined) => {
      const select = ref.current;
      if (select && value && [...select.options].some(o => o.value === value)) select.value = value;
    };
    set(new URLSearchParams(window.location.search).get(param));

    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>(`[data-${param}]`);
      if (!el) return;
      set(el.dataset[param]);
      onPick?.();
    };
    const onPreset = (e: Event) => set((e as CustomEvent<string>).detail);
    document.addEventListener('click', onClick);
    window.addEventListener(PRESET_EVENT, onPreset);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener(PRESET_EVENT, onPreset); };
  }, [ref, param, onPick]);
}

/**
 * Single place every form submits through: posts to /api/lead, which emails the team through Resend.
 * Resolves to an error message to show the visitor, or null when it went through.
 */
export type LeadKind = 'enquiry' | 'invitation' | 'waitlist' | 'newsletter' | 'feedback';

export async function submitLead(kind: LeadKind, form: HTMLFormElement): Promise<string | null> {
  return sendLead(kind, Object.fromEntries([...new FormData(form)].filter((e): e is [string, string] => typeof e[1] === 'string')));
}

// Cloudflare Turnstile bot check, on every form at once (off until NEXT_PUBLIC_TURNSTILE_SITE_KEY is set).
// Each submission renders a fresh widget that stays hidden unless Cloudflare needs the visitor to click it.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
let turnstileScript: Promise<Turnstile> | undefined;
function loadTurnstile() {
  const w = window as unknown as { turnstile?: Turnstile };
  turnstileScript ??= new Promise((resolve, reject) => {
    if (w.turnstile) return resolve(w.turnstile);
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = () => (w.turnstile ? resolve(w.turnstile) : reject());
    s.onerror = () => { turnstileScript = undefined; reject(); };
    document.head.appendChild(s);
  });
  return turnstileScript;
}
async function turnstileToken(): Promise<string | undefined> {
  if (!TURNSTILE_SITE_KEY) return undefined;
  const turnstile = await loadTurnstile();
  const box = document.createElement('div');
  box.className = 'turnstile-box';
  document.body.appendChild(box);
  let id: string | undefined;
  try {
    return await new Promise<string>((resolve, reject) => {
      id = turnstile.render(box, {
        sitekey: TURNSTILE_SITE_KEY, appearance: 'interaction-only',
        callback: resolve, 'error-callback': reject, 'expired-callback': reject, 'timeout-callback': reject,
      });
    });
  } finally {
    if (id) turnstile.remove(id);
    box.remove();
  }
}

/** The same submission without a form (e.g. a "Was this helpful?" button). */
export async function sendLead(kind: LeadKind, fields: Record<string, string>): Promise<string | null> {
  fields = { ...fields };
  // Every sign-up says where it came from, so a form without its own topic (the footer newsletter) is named after its page
  fields.page ??= window.location.pathname === '/' ? 'Home' : document.title.replace(/\s+—\s+Remi Pearson$/, '').trim() || window.location.pathname;
  fields.url ??= window.location.pathname;
  let token: string | undefined;
  try { token = await turnstileToken(); } catch {
    return 'We could not confirm you are not a robot. Please try again.';
  }
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, fields, token }),
    });
    if (res.ok) return null;
    const body = await res.json().catch(() => null);
    return body?.error ?? 'Something went wrong. Please try again.';
  } catch {
    return 'We could not reach the server. Please check your connection and try again.';
  }
}
