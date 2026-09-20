// Building blocks for the Ideas & Models page. Every part is composed from these; styles live in styles/ideas-models.css.
import Link from 'next/link';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

export const Arrow = ({ long }: { long?: boolean }) => <span aria-hidden="true">{long ? '⟶' : '→'}</span>;
export const Star = () => <span className="star" aria-hidden="true">✳</span>;
export const Rust = ({ children }: { children: React.ReactNode }) => <span className="rust">{children}</span>;

/** Link that picks <a> for same-page #anchors and next/link for routes. */
function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith('#')
    ? <a href={href} className={className}>{children}</a>
    : <Link href={href} className={className}>{children}</Link>;
}

/** Hand-drawn illustration from /assets/ideas (multiply-blended onto the paper). Decorative unless `alt` is given. */
export function Art({ name, alt = '', className }: { name: string; alt?: string; className?: string }) {
  return <img className={cx('ideas-art', className)} src={`/assets/ideas/${name}.webp`} alt={alt} aria-hidden={alt ? undefined : true} />;
}

/** Plain image from /assets/ideas without the .ideas-art treatment. */
export function Img({ name, alt = '', className }: { name: string; alt?: string; className?: string }) {
  return <img className={className} src={`/assets/ideas/${name}.webp`} alt={alt} aria-hidden={alt ? undefined : true} />;
}

/** One numbered part of the page: <section id="part-N"> labelled by its title (id "pN-h"). */
export function Part({ n, className, children }: { n: number; className?: string; children: React.ReactNode }) {
  return <section id={`part-${n}`} className={cx('ideas-part', className)} aria-labelledby={`p${n}-h`}>{children}</section>;
}

/** Part heading: title and intro copy on the left, illustration (or note) on the right. */
export function PartHead({ n, title, rule, aside, note, children }: {
  n: number; title: string; rule?: boolean;
  aside: React.ReactNode; note?: boolean; children: React.ReactNode;
}) {
  return (
    <div className={cx('ideas-head', note && 'ideas-head--note')}>
      <div className="ideas-head-copy">
        <h2 id={`p${n}-h`} className={cx('ideas-title', rule && 'ideas-title--rule')}>{title}</h2>
        {children}
      </div>
      {aside}
    </div>
  );
}

type HandVariant = 'underline' | 'center' | 'tight' | 'sm' | 'label' | 'tags' | 'cream' | 'underline-cream';
/** Handwritten line (Caveat). */
export function Hand({ v = [], className, children }: { v?: HandVariant[]; className?: string; children: React.ReactNode }) {
  return <p className={cx('ideas-hand', ...v.map(x => `ideas-hand--${x}`), className)}>{children}</p>;
}

export function Body({ sm, inset, children }: { sm?: boolean; inset?: boolean; children: React.ReactNode }) {
  return <p className={cx('ideas-body', sm && 'ideas-body--sm', inset && 'ideas-body--inset')}>{children}</p>;
}

type H3Variant = 'left' | 'tight' | 'stars' | 'rust' | 'rule' | 'rules';
export function H3({ v = [], className, children }: { v?: H3Variant[]; className?: string; children: React.ReactNode }) {
  return <h3 className={cx('ideas-h3', ...v.map(x => `ideas-h3--${x}`), className)}>{children}</h3>;
}

type BtnVariant = 'sm' | 'outline' | 'dark' | 'right';
/** Button with trailing arrow. */
export function Btn({ href, v = [], children }: { href: string; v?: BtnVariant[]; children: React.ReactNode }) {
  return <SmartLink href={href} className={cx('ideas-btn', ...v.map(x => `ideas-btn--${x}`))}>{children} <Arrow /></SmartLink>;
}

/** Small "Continue to …" link under a part. `decorated` adds the star and long arrow. */
export function NextLink({ href, decorated, children }: { href: string; decorated?: boolean; children: React.ReactNode }) {
  return (
    <a href={href} className="ideas-next">
      {decorated ? <><Star /> {children} <Arrow long /></> : children}
    </a>
  );
}

/** Handwritten note with a little arrow. `inline` puts the arrow before the text. */
export function HeadNote({ art, inline, className, children }: { art: string; inline?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={cx('head-note', inline && 'head-note--inline', className)}>
      {inline ? <><Art name={art} />{children}</> : <>{children}<Art name={art} /></>}
    </div>
  );
}

/** Full-width textured panel. */
export function Panel({ tone, className, children }: { tone: 'dark' | 'rust'; className?: string; children: React.ReactNode }) {
  return <div className={cx('panel', `panel--${tone}`, className)}>{children}</div>;
}

/** Hand-drawn bordered box. */
export function Box({ as: Tag = 'div', className, children }: { as?: 'div' | 'article' | 'p'; className?: string; children: React.ReactNode }) {
  return <Tag className={cx('hd-box', className)}>{children}</Tag>;
}
