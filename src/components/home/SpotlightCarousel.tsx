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

  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const n = (i + slides.length) % slides.length;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: n * el.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  }, [slides.length]);

  useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setStill(true); }, []);

  // Which slide is showing, however it got there (buttons, swipe, timer)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setCurrent(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (still || holding || slides.length < 2) return;
    const t = window.setTimeout(() => { if (!document.hidden) go(current + 1); }, EVERY);
    return () => window.clearTimeout(t);
  }, [still, holding, current, go, slides.length]);

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
