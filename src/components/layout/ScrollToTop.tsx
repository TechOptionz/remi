'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { remeasure, scrollToEl, scrollToY } from '@/lib/smooth-scroll';

/** A page opened at a section (/?interest=Speaking#contact, the footer's enquiry links) is scrolled there by Next, but
 *  Lenis still holds the previous page's height and pulls the page back, and images and carousels above the section
 *  keep changing height as they load. Re-measure, and keep the section in place while the page settles; stop as soon
 *  as the reader scrolls. */
function holdOnSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const until = performance.now() + 2500;
  let frame = 0;
  const check = () => {
    if (Math.abs(el.getBoundingClientRect().top - margin) > 2) { remeasure(); scrollToEl(el, { immediate: true }); }
    frame = performance.now() < until ? requestAnimationFrame(check) : 0;
  };
  const events = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
  const stop = () => { cancelAnimationFrame(frame); events.forEach(e => window.removeEventListener(e, stop)); };
  events.forEach(e => window.addEventListener(e, stop, { passive: true }));
  check();
  return stop;
}

// Next's <Link> keeps the scroll position while any of the new page is in view, so long pages opened from
// a button lower down used to land part-way down. On every page change this jumps to the very top instead —
// except for links to a section (#id), which are held on that section while the page settles, and back/forward, which the browser restores.
export default function ScrollToTop() {
  const pathname = usePathname();
  const first = useRef(true);
  const popped = useRef(false);

  useEffect(() => {
    const onPop = () => { popped.current = true; };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const isFirst = first.current;
    first.current = false;
    if (popped.current) { popped.current = false; return; }
    if (window.location.hash) return holdOnSection(decodeURIComponent(window.location.hash.slice(1)));
    if (isFirst) return;
    remeasure();
    scrollToY(0, { immediate: true });
  }, [pathname]);

  return null;
}
