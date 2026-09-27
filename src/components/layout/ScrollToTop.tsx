'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToY } from '@/lib/smooth-scroll';

// Next's <Link> keeps the scroll position while any of the new page is in view, so long pages opened from
// a button lower down used to land part-way down. On every page change this jumps to the very top instead —
// except for links to a section (#id), which Next scrolls to itself, and back/forward, which the browser restores.
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
    if (first.current) { first.current = false; return; }
    if (popped.current) { popped.current = false; return; }
    if (window.location.hash) return;
    scrollToY(0, { immediate: true });
  }, [pathname]);

  return null;
}
