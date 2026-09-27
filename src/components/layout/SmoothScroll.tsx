'use client';

// Smooth, eased scrolling for the whole site (Lenis). Mouse wheel and trackpad glide; touch screens keep their native
// scrolling; anyone who asks for reduced motion gets ordinary scrolling (Lenis stands down by itself).
// Same-page "#section" links glide to their section too (landing under the header via each section's scroll-margin-top).
// Inner scroll areas (mobile menu, search results, zoomed diagrams, chat) keep scrolling themselves: allowNestedScroll.
import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '@/lib/smooth-scroll';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, autoRaf: true, allowNestedScroll: true, stopInertiaOnNavigate: true });
    setLenis(lenis);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
      if (!a || (a.target && a.target !== '_self')) return;
      const url = new URL(a.href);
      const here = window.location;
      // only links to a section of this very page; links elsewhere (or with a different ?query) are left to Next
      if (url.origin !== here.origin || url.pathname !== here.pathname || url.search !== here.search || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el);
      if (url.hash !== here.hash) window.history.pushState(null, '', url.hash);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
