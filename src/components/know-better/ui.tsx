// Small pieces shared by the "I know better" sections. Symbols come from the homepage set (components/home/ui.tsx);
// the photo and drawings cut from this page's design live in public/assets/rabbit-holes (kb-*.webp).
export { Brush, Sym } from '@/components/home/ui';

export const kbArt = (name: string) => `/assets/rabbit-holes/${name}.webp`;

/** Drawing cut from this page's design (paper flattened to white, multiplied onto the page). */
export function Art({ name, className }: { name: string; className?: string }) {
  return <img className={className} src={kbArt(name)} alt="" aria-hidden="true" loading="lazy" decoding="async" />;
}

/** Outlined circle with a play triangle, as on the design's video buttons. */
export function PlayRing() {
  return <span className="kb-play" aria-hidden="true"></span>;
}
