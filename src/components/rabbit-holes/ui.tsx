// Small pieces shared by the rabbit-hole pages. Symbols come from the homepage set (components/home/ui.tsx); the photos and
// drawings cut from each page's design live in public/assets/rabbit-holes (kb-* I know better, ls-* loving someone).
import { Sym } from '@/components/home/ui';
export { Brush, Sym } from '@/components/home/ui';

export const kbArt = (name: string) => `/assets/rabbit-holes/${name}.webp`;

/** Drawing cut from a page's design (paper flattened to white, multiplied onto the page). */
export function Art({ name, className }: { name: string; className?: string }) {
  return <img className={className} src={kbArt(name)} alt="" aria-hidden="true" loading="lazy" decoding="async" />;
}

/** Outlined circle with a play triangle, as on the design's video buttons. */
export function PlayRing() {
  return <span className="kb-play" aria-hidden="true"></span>;
}

/** Left-aligned section heading with the gold star hanging to its left; line body copy up with it using .kb-indent. */
export function Head({ id, children, star = true }: { id: string; children: React.ReactNode; star?: boolean }) {
  return (
    <div className="kb-head">
      {star && <Sym name="hm-spark" className="kb-head-star" />}
      <h2 id={id} className="kb-h2">{children}</h2>
    </div>
  );
}

/** Thin gold rule with a star in the middle, between sections. */
export function StarRule() {
  return <div className="kb-rule" aria-hidden="true"><Sym name="hm-spark" /></div>;
}
