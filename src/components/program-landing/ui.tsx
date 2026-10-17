// Building blocks for the paid program pages made from a copy deck (EitLanding, SrLanding): hero, buy row, numbered
// lists, the five videos, Remi's note, testimonials, questions and the closing band. Each page composes them with its
// own prose sections in between. Styles: styles/program-landing.css (.pgl-*) on landing.css (.stl-*).
import Link from 'next/link';
import NotifyForm from '@/components/products/NotifyForm';
import { BuyBtn, Head } from '@/components/landing/ui';
import type { Faq as FaqItem, LeadItem, Lesson, ProgramInfo, Testimonial } from '@/content/program-landing';

const num = (i: number) => String(i + 1).padStart(2, '0');

/** An existing photograph of Remi (public/assets/photos/), framed rather than multiplied. */
export function Photo({ name, alt, width, height, className = '', pos }: { name: string; alt: string; width: number; height: number; className?: string; pos?: string }) {
  return <img className={`pgl-photo ${className}`} src={`/assets/photos/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />;
}

export function Crumbs({ title }: { title: string }) {
  return (
    <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
    </nav>
  );
}

/** The buy button with the line under it ("One payment. Learn at your own pace."). */
export function BuyRow({ program, label, note, center }: { program: ProgramInfo; label: string; note?: string; center?: boolean }) {
  return (
    <div className={`pgl-buy${center ? ' pgl-buy--center' : ''}`}>
      <BuyBtn href={program.ctaHref}>{label}</BuyBtn>
      {note && <p className="pgl-buy-note">{note}</p>}
    </div>
  );
}

/** Eyebrow, the question as the title, the opening paragraphs, what's included and the first buy button, beside a photo. */
export function Hero({ id, eyebrow, title, children, includes, buy, photo }: {
  id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode; includes: string; buy: React.ReactNode; photo: React.ReactNode;
}) {
  return (
    <section className="pgl-hero" aria-labelledby={id}>
      <div className="pgl-hero-copy">
        <p className="stl-eyebrow">{eyebrow} <span>With Remi Pearson</span></p>
        <Head id={id} as="h1">{title}</Head>
        <div className="pgl-prose">{children}</div>
        <p className="pgl-includes">{includes}</p>
        {buy}
      </div>
      <div className="pgl-hero-photo">{photo}</div>
    </section>
  );
}

/** Cards that each open with a bold sentence ("You analyse the feeling instead of experiencing it. …"). */
export function LeadCards({ items }: { items: LeadItem[] }) {
  return (
    <ul className="pgl-cards">
      {items.map(i => <li key={i.lead}><p><strong>{i.lead}</strong> {i.text}</p></li>)}
    </ul>
  );
}

/** Numbered points in two columns, each a bold sentence and what follows it; `inline` runs the two together when the
 *  bold part is the start of one sentence ("Recognise your early warning signs, so you …"). */
export function NumberedPoints({ items, inline }: { items: LeadItem[]; inline?: boolean }) {
  return (
    <ol className="stl-caps pgl-points">
      {items.map((i, n) => (
        <li key={i.lead}>
          <span className="stl-num" aria-hidden="true">{num(n)}</span>
          {inline ? <p className="pgl-point-inline"><strong>{i.lead}</strong> {i.text}</p> : <div><h3>{i.lead}</h3><p>{i.text}</p></div>}
        </li>
      ))}
    </ol>
  );
}

/** "Your five-video program": a still with the play symbol, then each video and what you'll take from it. A deck with
 *  other wording passes its own `title`, `take` label and still `label`. */
export function Lessons({ lessons, still, title = 'Your five-video program', take = 'What you’ll take from it:', label = 'Five videos' }: {
  lessons: Lesson[]; still: React.ReactNode; title?: string; take?: string; label?: string;
}) {
  return (
    <section className="stl-section" aria-labelledby="pgl-videos-h">
      <Head id="pgl-videos-h" star>{title}</Head>
      <div className="pgl-videos">
        <div className="pgl-still">{still}<span className="pgl-still-play" aria-hidden="true"></span><p className="pgl-still-label" aria-hidden="true">{label}</p></div>
        <ol className="pgl-lessons">
          {lessons.map((l, i) => (
            <li key={l.name}>
              <span className="stl-num stl-num--gold" aria-hidden="true">{num(i)}</span>
              <div>
                <h3>{l.name}</h3>
                {l.text.map(t => <p key={t}>{t}</p>)}
                <p className="pgl-take"><strong>{take}</strong> {l.take}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** A bordered panel within a section (the demonstration, the workbook, the meditation). */
export function Panel({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div className="pgl-panel" role="group" aria-labelledby={id}>
      <h3 id={id} className="pgl-panel-h">{title}</h3>
      {children}
    </div>
  );
}

export function RemiNote({ children, photo }: { children: React.ReactNode; photo: React.ReactNode }) {
  return (
    <section className="stl-section stl-split stl-remi" aria-labelledby="pgl-remi-h">
      <div className="stl-split-copy">
        <Head id="pgl-remi-h" star>A note from Remi</Head>
        {children}
        <p className="stl-signature" aria-hidden="true">Remi</p>
      </div>
      <div className="pgl-note-photo">{photo}</div>
    </section>
  );
}

/** "What people say about learning with Remi": renders nothing until real, approved testimonials exist. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;
  return (
    <section className="stl-section" aria-labelledby="pgl-say-h">
      <Head id="pgl-say-h" star>What people say about learning with Remi</Head>
      <ul className="stl-quotes">
        {items.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} <span aria-hidden="true">•</span> {t.program}</p></li>)}
      </ul>
    </section>
  );
}

export function Questions({ items, title = 'A few things you might be wondering' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="stl-section" aria-labelledby="pgl-faq-h">
      <Head id="pgl-faq-h" star>{title}</Head>
      <dl className="stl-faq">
        {items.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
      </dl>
    </section>
  );
}

/** The closing rust band (#get): the last invitation, the program's name, what's included, the price and the button,
 *  or "Coming soon" and a tell-me-when-it's-ready form until the product has a checkout link. */
export function Close({ program, title, children, includes, label, sub = 'With Remi Pearson', name = program.title, terms = 'One payment' }: {
  program: ProgramInfo; title: string; children: React.ReactNode; includes?: string; label: string; sub?: string; name?: string; terms?: string;
}) {
  return (
    <section id="get" className="stl-close" aria-labelledby="pgl-close-h">
      <div className="stl-close-inner pgl-close">
        <div>
          <h2 id="pgl-close-h" className="stl-h2">{title}</h2>
          <div className="pgl-close-prose">{children}</div>
        </div>
        <div className="pgl-close-buy">
          <p className="stl-close-name">{name}</p>
          <p className="pgl-close-with">{sub}</p>
          {includes && <p className="stl-close-includes">{includes}</p>}
          <p className="pgl-close-price">{program.price} <span aria-hidden="true">•</span> {terms}</p>
          {program.buyHref
            ? <BuyBtn href={program.buyHref} light>{label}</BuyBtn>
            : <><p className="stl-close-soon">Coming soon</p><NotifyForm product={program.title} segment={program.segment} /></>}
        </div>
      </div>
    </section>
  );
}
