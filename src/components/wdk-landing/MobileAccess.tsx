'use client';

// The compact "Get the free video series" bar on phones: it slides up once the hero's form has scrolled away and
// hides whenever either form is on screen, so it never sits over the form it points to. Styles: .wdk-bar (≤760px only).
import { useEffect, useState } from 'react';

export default function MobileAccess() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const forms = [...document.querySelectorAll('[data-wdk-form], .wdk-done')];
    if (!forms.length) return;
    const seen = new Map<Element, { visible: boolean; above: boolean }>();
    const io = new IntersectionObserver(entries => {
      for (const e of entries) seen.set(e.target, { visible: e.isIntersecting, above: e.boundingClientRect.bottom < 0 });
      const all = [...seen.values()];
      // Show only after the first form has gone above the window, and while no form is visible
      setShow(all.some(s => s.above) && !all.some(s => s.visible));
    });
    forms.forEach(f => io.observe(f));
    return () => io.disconnect();
  }, []);
  return (
    <div className={`wdk-bar${show ? ' is-shown' : ''}`} aria-hidden={!show}>
      <a href="#get" className="hm-btn stl-btn" tabIndex={show ? 0 : -1}>Get the free video series</a>
    </div>
  );
}
