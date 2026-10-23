// A product range drawn from its own mock-up (RANGE_DESIGNS in content/product-ranges.ts), in place of ProductRange's
// plain cards. "bands" (influence): the first product as a dark hero band with the range's question, then one full-width
// band per product, photo and coloured panel meeting at a curved gold seam, the bundle last. "cards" (business): the
// range's title beside its photograph, the first product and the bundle as wide framed cards, the others side by side.
// Every product opens its own page: its title is the link, stretched over the whole band or card. Styles: styles/product-ranges.css (.pb-*); colours are fixed, like the mock-ups.
import Link from 'next/link';
import { Sym } from '@/components/home/ui';
import { CATEGORIES, levelLine, priceLine, productHref, productsIn, type CategoryId, type Product, type Program } from '@/content/products';
import type { RangeArt, RangeDesign } from '@/content/product-ranges';

/** The mock-ups' gold sound-wave line: a hairline that swells into bars around `at`. */
function Wave({ className = '', at = 0.62 }: { className?: string; at?: number }) {
  const bars = Array.from({ length: 64 }, (_, i) => {
    const x = (i + 0.5) / 64;
    const near = Math.exp(-(((x - at) / 0.12) ** 2));
    const h = 1 + near * (6 + 5 * Math.abs(Math.sin(i * 2.3)) + 3 * Math.abs(Math.sin(i * 0.7)));
    return <rect key={i} x={x * 400 - 1.2} y={12 - h} width={2.4} height={h * 2} rx={1.2} />;
  });
  return <svg className={`pb-wave ${className}`} viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true"><rect x="0" y="11.5" width="400" height="1" />{bars}</svg>;
}

/** The curved edge where a band's panel meets its photo, with its gold line. Drawn for a panel on the right. */
function Seam() {
  return (
    <svg className="pb-seam" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path className="pb-seam-fill" d="M100 0 H52 C30 18 78 38 56 58 C38 74 30 88 50 100 H100 Z" />
      <path className="pb-seam-line" d="M52 0 C30 18 78 38 56 58 C38 74 30 88 50 100" />
    </svg>
  );
}

function Photo({ a, className, eager }: { a?: RangeArt; className: string; eager?: boolean }) {
  if (!a) return null;
  return <div className={className}><img src={a.src} alt={a.alt ?? ''} aria-hidden={a.alt ? undefined : true} width={a.width} height={a.height} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>;
}

function Price({ p, invest }: { p: Product; invest?: boolean }) {
  return (
    <p className="pb-price">
      {invest && !p.bundle && p.price && p.price !== 'Free' ? `Investment ${p.price}` : priceLine(p)}
      {p.level && <span className="pb-level">{levelLine(p)}</span>}
    </p>
  );
}

/** Light tones (cream, gold) can't carry the hero's cream copy or the bundle's gold title: those bands stay dark. */
const dark = (t: Product['tone']) => (t === 'cream' || t === 'gold' ? 'black' : t);

const count = (p: Product) => p.includes?.length ? `${['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][p.includes.length] ?? p.includes.length} programs` : p.text;

/* ---------- Influence: bands ---------- */
function Bands({ list, d, category, id }: { list: Product[]; d: RangeDesign; category: CategoryId; id: string }) {
  const c = CATEGORIES[category];
  const [lead, ...rest] = list;
  return (
    <>
      <article className={`pb-hero pb-tone--${dark(lead.tone)}`}>
        <Photo a={d.art[lead.slug]} className="pb-hero-photo" />
        <div className="pb-hero-copy">
          <h2 id={`${id}-h`} className="pb-range-name">{c.name}</h2>
          <p className="pb-range-q">{c.tagline}</p>
          <Wave className="pb-wave--hero" at={0.78} />
          {lead.kicker && <p className="pb-tag">{lead.kicker}</p>}
          <h3 className="pb-title pb-title--lead"><Link href={productHref(lead.slug)}>{lead.title}</Link></h3>
          <p className="pb-text">{lead.text}</p>
          <Price p={lead} invest />
          <span className="pb-btn" aria-hidden="true">{lead.cta ?? 'See what’s inside'}</span>
        </div>
      </article>
      {rest.map((p, i) => {
        const a = d.art[p.slug];
        const side = p.bundle ? 'right' : a?.side ?? (i % 2 ? 'right' : 'left');
        return (
          <article key={p.slug} className={`pb-band pb-band--photo-${side} pb-tone--${p.bundle ? 'navy' : p.tone}${p.bundle ? ' pb-band--bundle' : ''}`}>
            <Photo a={a} className="pb-band-photo" />
            <div className="pb-band-panel">
              <Seam />
              <div className="pb-band-copy">
                {!p.bundle && <Wave />}
                <h3 className="pb-title">{p.bundle && <span className="pb-sr">Bundle: </span>}<Link href={productHref(p.slug)}>{p.title}</Link>{p.bundle && <Wave className="pb-wave--after" at={0.4} />}</h3>
                {!p.bundle && <span className="pb-rule" aria-hidden="true"></span>}
                <p className="pb-text">{p.bundle ? count(p) : p.text}</p>
                <Price p={p} />
                <span className="pb-btn" aria-hidden="true">{p.cta ?? 'See what’s inside'}</span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

/* ---------- Business: cards ---------- */
function Cards({ list, d, category, id }: { list: Product[]; d: RangeDesign; category: CategoryId; id: string }) {
  const c = CATEGORIES[category];
  const [lead, ...others] = list.filter(p => !p.bundle);
  const bundle = list.find(p => p.bundle);
  const Wide = ({ p }: { p: Product }) => (
    <article className={`pb-card pb-card--wide pb-tone--${p.tone}${p.bundle ? ' pb-card--bundle' : ''}`}>
      <div className="pb-card-copy">
        {p.kicker && <p className="pb-kicker">{p.kicker}</p>}
        <h3 className="pb-title pb-title--lead">{p.bundle && <span className="pb-sr">Bundle: </span>}<Link href={productHref(p.slug)}>{p.title}</Link></h3>
        <span className="pb-rule" aria-hidden="true"></span>
        <p className="pb-text">{p.bundle ? count(p) : p.text}</p>
        <Price p={p} />
        <span className="pb-btn" aria-hidden="true">{p.cta ?? 'See what’s inside'}</span>
      </div>
      <Photo a={d.art[p.slug]} className="pb-card-photo" />
    </article>
  );
  return (
    <>
      <header className="pb-bhero">
        <div className="pb-bhero-copy">
          <h2 id={`${id}-h`} className="pb-range-name">{c.name}</h2>
          <p className="pb-star-rule" aria-hidden="true"><span></span><Sym name="hm-spark" /><span></span></p>
          <p className="pb-range-q">{c.tagline}</p>
          {d.intro && <><span className="pb-rule" aria-hidden="true"></span><p className="pb-intro">{d.intro}</p></>}
        </div>
        <Photo a={d.hero} className="pb-bhero-photo" />
      </header>
      <div className="pb-cards">
        {lead && <Wide p={lead} />}
        {others.length > 0 && (
          <div className="pb-pair">
            {others.map(p => (
              <article key={p.slug} className={`pb-card pb-tone--${p.tone}`}>
                <div className="pb-card-copy">
                  <h3 className="pb-title"><Link href={productHref(p.slug)}>{p.title}</Link></h3>
                  <span className="pb-rule" aria-hidden="true"></span>
                  <p className="pb-text">{p.text}</p>
                  <Price p={p} />
                  <span className="pb-more" aria-hidden="true">{p.cta ?? 'See what’s inside'} →</span>
                </div>
                <Photo a={d.art[p.slug]} className="pb-card-photo" />
              </article>
            ))}
          </div>
        )}
        {bundle && <Wide p={bundle} />}
      </div>
    </>
  );
}

/* ---------- Programs (/programs): the same bands, for PROGRAMS (content/products.ts) ---------- */
function ProgramLink({ p }: { p: Program }) {
  return p.external
    ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title}<span className="pb-sr"> (opens in a new tab)</span></a>
    : <Link href={p.href}>{p.title}</Link>;
}

export function ProgramBands({ list, id, name, question }: { list: Program[]; id: string; name: string; question: string }) {
  const [lead, ...rest] = list;
  return (
    <section id={id} className="pb pb--bands" aria-labelledby={`${id}-h`}>
      <article className={`pb-hero pb-tone--${dark(lead.tone)}`}>
        <Photo a={lead.photo} className="pb-hero-photo" />
        <div className="pb-hero-copy">
          <h2 id={`${id}-h`} className="pb-range-name">{name}</h2>
          <p className="pb-range-q">{question}</p>
          <Wave className="pb-wave--hero" at={0.78} />
          <p className="pb-tag">{lead.kicker}</p>
          <h3 className="pb-title pb-title--lead"><ProgramLink p={lead} /></h3>
          <p className="pb-text">{lead.text}</p>
          <p className="pb-price">{lead.price}</p>
          <span className="pb-btn" aria-hidden="true">{lead.cta}{lead.external && ' ↗'}</span>
        </div>
      </article>
      {rest.map((p, i) => (
        <article key={p.title} className={`pb-band pb-band--photo-${i % 2 ? 'right' : 'left'} pb-tone--${p.tone}`}>
          <Photo a={p.photo} className="pb-band-photo" />
          <div className="pb-band-panel">
            <Seam />
            <div className="pb-band-copy">
              <Wave />
              <p className="pb-kicker">{p.kicker}</p>
              <h3 className="pb-title"><ProgramLink p={p} /></h3>
              <span className="pb-rule" aria-hidden="true"></span>
              <p className="pb-text">{p.text}</p>
              <p className="pb-price">{p.price}</p>
              <span className="pb-btn" aria-hidden="true">{p.cta}{p.external && ' ↗'}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function DesignedRange({ category, id, design }: { category: CategoryId; id: string; design: RangeDesign }) {
  const list = productsIn(category);
  return (
    <section id={id} className={`pb pb--${design.layout}`} aria-labelledby={`${id}-h`}>
      {design.layout === 'bands'
        ? <Bands list={list} d={design} category={category} id={id} />
        : <Cards list={list} d={design} category={category} id={id} />}
    </section>
  );
}
