'use client';

// The home hero layouts. Hero.tsx renders the one picked in the Variants menu.
// `onWatch` opens the video modal (C2/C3 open their own picture-in-picture player instead).
import { useEffect, useRef, useState } from 'react';
import { HERO_COPY } from '@/content/site';
import SocialLinks from '@/components/shared/SocialLinks';
import { Buttons, Eyebrow, Lede, Title, VIMEO, VimeoFrame } from './parts';

type Props = { onWatch: () => void };

// A · Statement
export function HeroA({ onWatch }: Props) {
  return (
    <section className="hero" aria-label="Introduction">
      <Eyebrow />
      <Title stack={false} />
      <Lede />
      <Buttons onWatch={onWatch} start={false} />
      <div className="hero-video">
        <div className="video-frame"><VimeoFrame params={VIMEO.loop} /></div>
      </div>
    </section>
  );
}

// B · Video first, text below
export function HeroB({ onWatch }: Props) {
  return (
    <section className="hero hero--b" aria-label="Introduction">
      <div className="hero-video hero-video--tall">
        <div className="video-frame video-frame--r16"><VimeoFrame params={VIMEO.loop} /></div>
      </div>
      <div className="hero-b-copy">
        <div><Eyebrow /><Title /></div>
        <div className="hero-b-side"><Lede /><Buttons onWatch={onWatch} /></div>
      </div>
    </section>
  );
}

// C · Split
export function HeroC({ onWatch }: Props) {
  return (
    <section className="hero-c" aria-label="Introduction">
      <div>
        <Eyebrow />
        <Title modifier="hero-title--c" />
        <Lede />
        <Buttons onWatch={onWatch} />
      </div>
      <div className="video-frame"><VimeoFrame params={VIMEO.loop} /></div>
    </section>
  );
}

// Portrait photo with the copy over it (C1, C2, C3)
function PortraitTop({ tall, onWatch, children }: { tall?: boolean; onWatch: () => void; children?: React.ReactNode }) {
  return (
    <div className={tall ? 'portrait-top portrait-top--tall' : 'portrait-top'}>
      <img className="portrait-img" src={HERO_COPY.portrait.src} alt={HERO_COPY.portrait.alt} />
      <div className="portrait-fade" aria-hidden="true"></div>
      <div className="portrait-inner">
        <div className="portrait-copy">
          <Eyebrow />
          <Title modifier="hero-title--c1" />
          <Lede />
          <Buttons onWatch={onWatch} />
        </div>
      </div>
      {children}
    </div>
  );
}

// C1 · Portrait, text & video
export function HeroC1({ onWatch }: Props) {
  return (
    <section className="hero-c1" aria-label="Introduction">
      <PortraitTop onWatch={onWatch} />
      <div className="hero-video">
        <div className="video-frame"><VimeoFrame params={VIMEO.loop} /></div>
      </div>
    </section>
  );
}

// C2 · Picture-in-picture video  /  C3 · same, full screen (the full-screen styling keys off html[data-active-hero="C3"])
export function HeroC2() {
  const [pipOpen, setPipOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPipOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="hero-c2" aria-label="Introduction">
      <PortraitTop tall onWatch={() => setPipOpen(true)}>
        <div className="pip-small" hidden={pipOpen}>
          <span className="pip-tag"><span></span>Introduction</span>
          <button type="button" className="pip-thumb" aria-label="Watch the introduction video" onClick={() => setPipOpen(true)}>
            <VimeoFrame params={VIMEO.background} title="Remi Pearson — introduction (preview)" allow="autoplay" />
            <span className="pip-shade" aria-hidden="true"></span>
            <span className="pip-watch"><span className="play play--light" aria-hidden="true"></span>Watch</span>
          </button>
        </div>
        <div className="pip-big" hidden={!pipOpen}>
          <div className="pip-big-frame">{pipOpen && <VimeoFrame params={VIMEO.player} />}</div>
          <button type="button" className="glass-btn" aria-label="Close video" onClick={() => setPipOpen(false)}>Close ×</button>
        </div>
      </PortraitTop>
    </section>
  );
}

// D · Full-screen video, with the intro copy in its own section below
export function HeroD({ onWatch }: Props) {
  const [muted, setMuted] = useState(true);
  const frame = useRef<HTMLIFrameElement>(null);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    const post = (method: string, value: unknown) => frame.current?.contentWindow?.postMessage(JSON.stringify({ method, value }), '*');
    post('setMuted', next);
    if (!next) post('setVolume', 1);
  };

  return (
    <>
      <section className="hero-d" aria-label="Introduction">
        <VimeoFrame ref={frame} className="cover-video" params={VIMEO.background} />
        <div className="hero-d-shade" aria-hidden="true"></div>
        <div className="hero-d-inner">
          <p className="hero-d-eyebrow">{HERO_COPY.eyebrow}</p>
          <div className="hero-d-social">
            <SocialLinks only={['linkedin', 'instagram', 'youtube', 'facebook', 'x', 'podcast']} size={18} />
          </div>
        </div>
        <button type="button" className={muted ? 'mute-btn' : 'mute-btn is-on'} aria-label="Toggle sound" onClick={toggleSound}>
          <span className="mute-dot"></span><span className="mute-label">{muted ? 'Sound off' : 'Sound on'}</span>
        </button>
      </section>
      <section className="hero-d-intro" aria-label="Introduction copy">
        <div><Eyebrow /><Title /></div>
        <div className="hero-b-side"><Lede /><Buttons onWatch={onWatch} /></div>
      </section>
    </>
  );
}
