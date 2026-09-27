// The site's one Lenis instance (smooth, eased wheel scrolling; started by components/layout/SmoothScroll.tsx).
// Code that moves the page should go through scrollToY / scrollToEl so Lenis and the window never disagree about where
// the page is. Without Lenis (reduced motion, or before it starts) they fall back to plain window scrolling.
import type Lenis from 'lenis';

let lenis: Lenis | null = null;

export const setLenis = (l: Lenis | null) => { lenis = l; };

/** Scrolls to a y position. `immediate` jumps without the glide (page changes, corrections). */
export function scrollToY(y: number, { immediate = false } = {}) {
  if (lenis) lenis.scrollTo(y, { immediate, force: true });
  else window.scrollTo({ top: y, left: 0, behavior: immediate ? 'instant' : 'smooth' });
}

/** Scrolls an element to the top of the window, honouring its CSS scroll-margin-top, less any extra `offset`. */
export function scrollToEl(el: HTMLElement, { offset = 0, immediate = false } = {}) {
  if (lenis) lenis.scrollTo(el, { offset: -offset, immediate, force: true });
  else el.scrollIntoView({ behavior: immediate ? 'instant' : 'smooth', block: 'start' });
}
