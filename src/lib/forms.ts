'use client';

// Shared form plumbing: presetting a <select> from links/chat, and the (stubbed) lead submission.
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

/** Single place every form submits through. */
export function submitLead(kind: 'enquiry' | 'invitation' | 'newsletter', form: HTMLFormElement) {
  const data = Object.fromEntries(new FormData(form));
  // TODO: replace with the GoHighLevel webhook / form endpoint (enquiry, invitation) and the mailing list provider (newsletter)
  console.log(`${kind} → CRM`, data);
  return data;
}
