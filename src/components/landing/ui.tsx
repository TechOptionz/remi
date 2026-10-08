// The kit shared by the designed product sales pages (components/triad-landing/, components/cam-landing/): photos cut
// from a design, the condensed headings with their brush stroke, the buy button. Styles: styles/landing.css (.stl-*).
import { Sym } from '@/components/home/ui';

/** Photograph cut from a page's design (public/assets/<dir>/), multiplied onto the paper with feathered edges. */
export function Photo({ dir, name, alt = '', width, height, className = '' }: { dir: string; name: string; alt?: string; width: number; height: number; className?: string }) {
  return <img className={`stl-photo ${className}`} src={`/assets/${dir}/${name}.webp`} alt={alt} aria-hidden={alt ? undefined : true} width={width} height={height} loading="lazy" decoding="async" />;
}

/** Condensed capitals heading with the rust brush stroke under it, and the gold star to its left when `star`. */
export function Head({ id, children, star, as: Tag = 'h2', className = '' }: { id: string; children: React.ReactNode; star?: boolean; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <div className={`stl-head${star ? ' stl-head--star' : ''} ${className}`}>
      {star && <Sym name="hm-spark" className="stl-head-star" />}
      <Tag id={id} className={Tag === 'h1' ? 'stl-title' : 'stl-h2'}>{children}</Tag>
    </div>
  );
}

/** The rust buy button (cream on a rust band with `light`), with the design's arrow when `arrow`. */
export function BuyBtn({ href, children, light, arrow }: { href: string; children: React.ReactNode; light?: boolean; arrow?: boolean }) {
  return (
    <a href={href} className={`hm-btn stl-btn${light ? ' stl-btn--light' : ''}`}>
      {children}{arrow && <span className="stl-btn-arrow" aria-hidden="true">⟶</span>}
    </a>
  );
}
