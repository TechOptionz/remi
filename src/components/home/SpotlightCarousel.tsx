'use client';

// The spotlight carousel: one slide at a time, moving on every few seconds. It pauses while the pointer or keyboard is
// in it; under reduced motion it stays still. Swipe / scroll-snap moves it by hand.
import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { SpotlightSlide } from '@/content/home';

const EVERY = 7000;

export default function SpotlightCarousel({ slides }: { slides: SpotlightSlide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [still, setStill] = useState(false); // the visitor prefers reduced motion
  const [holding, setHolding] = useState(false); // pointer or focus inside
  const id = useId();

  // A copy of the first slide sits after the last, so the carousel always moves forward: it glides onto the copy, then
  // jumps (unseen) back to the real first slide. Going back from the first slide does the reverse.
  const loop = slides.length > 1;
  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const n = slides.length, w = el.clientWidth;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!smooth) { el.scrollTo({ left: ((i % n + n) % n) * w, behavior: 'auto' }); return; }
    if (i < 0) {
      el.scrollTo({ left: n * w, behavior: 'instant' });
      requestAnimationFrame(() => el.scrollTo({ left: (n - 1) * w, behavior: 'smooth' }));
      return;
    }
    el.scrollTo({ left: Math.min(i, n) * w, behavior: 'smooth' });
  }, [slides.length]);

  useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setStill(true); }, []);

  // Which slide is showing, however it got there (buttons, swipe, timer); once it settles on the copy, swap to the original
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const n = slides.length;
    let settle = 0;
    const onScroll = () => {
      const w = el.clientWidth;
      setCurrent(Math.round(el.scrollLeft / w) % n);
      window.clearTimeout(settle);
      // On the copy = scrolled to the very end (measured from the end, as slide widths can be fractional)
      if (loop && el.scrollLeft >= el.scrollWidth - w - 2) settle = window.setTimeout(() => el.scrollTo({ left: 0, behavior: 'instant' }), 120);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); window.clearTimeout(settle); };
  }, [slides.length, loop]);

  // The timer re-arms itself on every tick, not only when the slide changes: a tick that moves nothing (tab hidden,
  // a scroll that didn't happen) would otherwise stop the carousel for good.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (still || holding || slides.length < 2) return;
    const t = window.setTimeout(() => {
      if (!document.hidden) go(current + 1);
      setTick(x => x + 1);
    }, EVERY);
    return () => window.clearTimeout(t);
  }, [still, holding, current, tick, go, slides.length]);

  if (!slides.length) return null;
  return (
    <section className="section hm-spot" aria-roledescription="carousel" aria-label="Spotlight"
      onPointerEnter={e => e.pointerType === 'mouse' && setHolding(true)} onPointerLeave={() => setHolding(false)}
      onFocus={() => setHolding(true)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setHolding(false); }}>
      <div className="hm-spot-track" ref={track} id={`${id}-track`} aria-live={still || holding ? 'polite' : 'off'}>
        {slides.map((s, i) => (
          <article key={s.href + s.title} className={`hm-spot-slide hm-spot--${s.tone}`} aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`} aria-hidden={i !== current} inert={i !== current}>
            <div className="hm-spot-copy">
              <p className="hm-spot-eyebrow">{s.eyebrow}</p>
              <h2 className="hm-spot-title">{s.title}</h2>
              {s.text && <p className="hm-spot-text">{s.text}</p>}
              <Link href={s.href} className="hm-btn hm-btn--sm">{s.cta}</Link>
            </div>
            <div className={`hm-spot-art${s.fit ? ' hm-spot-art--contain' : ''}${s.multiply ? ' hm-spot-art--multiply' : ''}`}
              style={s.bg ? { background: s.bg } : undefined}>
              <img src={s.image} alt={s.alt} style={s.pos ? { objectPosition: s.pos } : undefined}
                loading={i ? 'lazy' : undefined} decoding="async" />
            </div>
          </article>
        ))}
        {loop && (
          <article className={`hm-spot-slide hm-spot--${slides[0].tone}`} aria-hidden inert>
            <div className="hm-spot-copy">
              <p className="hm-spot-eyebrow">{slides[0].eyebrow}</p>
              <p className="hm-spot-title">{slides[0].title}</p>
              {slides[0].text && <p className="hm-spot-text">{slides[0].text}</p>}
              <span className="hm-btn hm-btn--sm">{slides[0].cta}</span>
            </div>
            <div className={`hm-spot-art${slides[0].fit ? ' hm-spot-art--contain' : ''}${slides[0].multiply ? ' hm-spot-art--multiply' : ''}`}
              style={slides[0].bg ? { background: slides[0].bg } : undefined}>
              <img src={slides[0].image} alt="" style={slides[0].pos ? { objectPosition: slides[0].pos } : undefined}
                loading="lazy" decoding="async" />
            </div>
          </article>
        )}
      </div>
      {slides.length > 1 && (
        <div className="hm-spot-controls">
          <button type="button" className="hm-spot-arrow" aria-controls={`${id}-track`} aria-label="Previous slide" onClick={() => go(current - 1)}>
            <span aria-hidden="true">←</span>
          </button>
          <div className="hm-spot-dots">
            {slides.map((s, i) => (
              <button key={s.href + s.title} type="button" className="hm-spot-dot" aria-controls={`${id}-track`}
                aria-label={`Slide ${i + 1}: ${s.eyebrow}`} aria-current={i === current} onClick={() => go(i)} />
            ))}
          </div>
          <button type="button" className="hm-spot-arrow" aria-controls={`${id}-track`} aria-label="Next slide" onClick={() => go(current + 1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </section>
  );
}
