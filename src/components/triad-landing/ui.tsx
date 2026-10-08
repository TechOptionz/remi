// Small pieces shared by the Self-Esteem Triad sales page's sections.
import { Sym } from '@/components/home/ui';
import { TRIAD_CTA_HREF } from '@/content/triad-landing';

export const stlArt = (name: string) => `/assets/triad-landing/${name}.webp`;

/** Photograph cut from the design; its edges fade into the paper (see .stl-photo in styles/triad-landing.css). */
export function Photo({ name, alt = '', width, height, className = '' }: { name: string; alt?: string; width: number; height: number; className?: string }) {
  return <img className={`stl-photo ${className}`} src={stlArt(name)} alt={alt} aria-hidden={alt ? undefined : true} width={width} height={height} loading="lazy" decoding="async" />;
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

/** "Get the Self-Esteem Triad": the checkout once it exists, until then the closing band's sign-up. */
export function BuyBtn({ children = 'Get the Self-Esteem Triad', light, arrow }: { children?: React.ReactNode; light?: boolean; arrow?: boolean }) {
  return (
    <a href={TRIAD_CTA_HREF} className={`hm-btn stl-btn${light ? ' stl-btn--light' : ''}`}>
      {children}{arrow && <span className="stl-btn-arrow" aria-hidden="true">⟶</span>}
    </a>
  );
}
