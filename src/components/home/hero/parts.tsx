// Building blocks shared by the home hero variants. Copy comes from HERO_COPY in content/site.ts.
import { forwardRef } from 'react';
import { HERO_COPY, SITE } from '@/content/site';

// Vimeo player settings per use
export const VIMEO = {
  loop: 'dnt=1&title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1&autopause=0',
  background: 'dnt=1&title=0&byline=0&portrait=0&controls=0&autoplay=1&muted=1&loop=1&autopause=0&background=1',
  player: 'dnt=1&title=0&byline=0&portrait=0&autoplay=1&autopause=0',
  modal: 'autoplay=1&dnt=1',
};

type FrameProps = { params: string; title?: string; className?: string; allow?: string };

export const VimeoFrame = forwardRef<HTMLIFrameElement, FrameProps>(function VimeoFrame(
  { params, title = 'Remi Pearson — introduction', className, allow = 'autoplay; fullscreen; picture-in-picture' }, ref) {
  return (
    <iframe
      ref={ref}
      className={className}
      title={title}
      // The Vimeo video is domain-restricted; sending no referrer lets it play
      referrerPolicy="no-referrer"
      src={`https://player.vimeo.com/video/${SITE.vimeoId}?${params}`}
      allow={allow}
      allowFullScreen
    />
  );
});

export const Eyebrow = () => <p className="eyebrow">{HERO_COPY.eyebrow}</p>;
export const Lede = () => <p className="hero-lede">{HERO_COPY.lede}</p>;

/** `stack` breaks the title over two lines; `modifier` adds a per-variant class such as "hero-title--c". */
export function Title({ stack = true, modifier = '' }: { stack?: boolean; modifier?: string }) {
  const className = ['hero-title', stack ? 'hero-title--stack' : '', modifier].filter(Boolean).join(' ');
  return <h1 className={className}>{HERO_COPY.titleStart}{stack ? <br /> : ' '}<em>{HERO_COPY.titleEm}</em></h1>;
}

export function Buttons({ onWatch, start = true }: { onWatch: () => void; start?: boolean }) {
  return (
    <div className={start ? 'btn-row btn-row--start' : 'btn-row'}>
      <a href={HERO_COPY.primaryCta.href} className="btn btn--primary">{HERO_COPY.primaryCta.label}</a>
      <button type="button" className="btn btn--ghost" onClick={onWatch}><span className="play" aria-hidden="true"></span> {HERO_COPY.videoCta}</button>
    </div>
  );
}
