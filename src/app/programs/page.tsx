// Programs — "Where shall we begin?" (round four edits, the PROGRAMS summary mock-up): the free ways in (Perspectives, the
// CAM Mini Profiler, the Attachment Style Assessment), the three programs with their prices (PROGRAMS in content/products.ts),
// then the self-paced programs by question, each opening its range on /products. The homepage's "Browse all programs" lands here.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CAM_PROFILER_HREF } from '@/content/ideas';
import { ATTACHMENT_QUIZ_HREF, CATEGORIES, FREE, PROGRAMS, productsIn, type CategoryId } from '@/content/products';

export const metadata: Metadata = {
  title: 'Programs — Remi Pearson',
  description: 'Where shall we begin? Free ways in, Ultimate Self Club, Rebel Yell, The Shift and Remi Pearson’s self-paced programs, by the question that has your attention.',
};

/** What a category's range costs to start: "From free" when any program in it is free, otherwise the lowest price. */
const fromLine = (c: CategoryId) => {
  const list = productsIn(c).filter(p => !p.bundle);
  const prices = list.map(p => p.price ?? '');
  const lowest = prices.includes(FREE) ? 'free' : prices.map(p => p.match(/\$(\d[\d,]*)/)).filter(m => m !== null)
    .sort((a, b) => Number(a[1].replace(',', '')) - Number(b[1].replace(',', '')))[0]?.[0];
  return `${list.length} programs${lowest ? ` · from ${lowest === 'free' ? 'free' : `AUD ${lowest}`}` : ''}`;
};

const CAM_DIMENSIONS = [
  { label: 'Environment', x: 160, y: 92 }, { label: 'Structure', x: 92, y: 160 },
  { label: 'People', x: 228, y: 160 }, { label: 'Implementation', x: 160, y: 228 },
];

export default function ProgramsPage() {
  return (
    <main className="pr-page pr-page--cream pg">
      <section className="pg-hero" aria-labelledby="programs-h">
        <div className="pg-hero-copy">
          <p className="pr-eyebrow">Programs</p>
          <h1 id="programs-h" className="pr-title">“Where shall we begin?”</h1>
          <p className="pg-hero-quote">“You don’t need all of this. Start with the question that has your attention.”</p>
        </div>
        <img className="pg-hero-photo" src="/assets/photos/about-rel-a.webp" alt="Remi Pearson shaking hands with a woman in a seminar room" width={1400} height={700} />
      </section>

      <section className="pg-card pg-card--paper" aria-labelledby="pg-persp-h">
        <img src="/assets/photos/perspectives-hero-crop.webp" alt="Remi Pearson smiling at a podcast microphone in front of bookshelves" width={720} height={720} loading="lazy" decoding="async" />
        <div className="pg-card-copy">
          <h2 id="pg-persp-h" className="pr-h2">Perspectives</h2>
          <p>Conversations and ideas across the whole body of work.</p>
          <Link href="/perspectives" className="pg-btn">Watch or listen</Link>
        </div>
      </section>

      <section className="pg-card pg-card--navy" aria-labelledby="pg-cam-h">
        <div className="pg-card-copy">
          <p className="pr-eyebrow">Start here · Free</p>
          <h2 id="pg-cam-h" className="pr-h2">Critical Alignment Model Mini Profiler</h2>
          <p>Find the dimension most likely to be creating the gap between what you want and what keeps happening.</p>
          <Link href={CAM_PROFILER_HREF} className="pg-btn">Access the assessment</Link>
        </div>
        <svg className="pg-cam" viewBox="0 0 320 320" role="img" aria-label="The four dimensions of the Critical Alignment Model: Environment, Structure, Implementation and People">
          {CAM_DIMENSIONS.map(d => <circle key={d.label} cx={d.x} cy={d.y} r="62" />)}
          <circle className="pg-cam-dot" cx="160" cy="160" r="4" />
          {CAM_DIMENSIONS.map(d => <text key={d.label} x={d.x} y={d.y + (d.y === 160 ? 4 : d.y < 160 ? -14 : 22)}>{d.label.toUpperCase()}</text>)}
        </svg>
      </section>

      <section className="pg-card pg-card--blush" aria-labelledby="pg-attach-h">
        <div className="pg-card-copy">
          <p className="pr-eyebrow">Free</p>
          <h2 id="pg-attach-h" className="pr-h2">How Do You Attach?</h2>
          <p>A free Attachment Style Assessment for relationships, self-esteem and emotional change.</p>
          <Link href={ATTACHMENT_QUIZ_HREF} className="pg-btn">Take the assessment</Link>
        </div>
        <img className="pg-multiply" src="/assets/rabbit-holes/ls-hero.webp" alt="Two hands reaching towards each other, almost touching, in soft window light" width={944} height={1086} loading="lazy" decoding="async" />
      </section>

      <section className="pr-range" aria-labelledby="pg-prog-h">
        <p className="pr-eyebrow">Go deeper</p>
        <h2 id="pg-prog-h" className="pr-h2">Programs with Remi</h2>
        <div className="pr-grid pr-grid--three">
          {PROGRAMS.map(p => (
            <article key={p.title} className={`pr-card pr-card--${p.tone}`}>
              <p className="pr-kicker">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="pr-price">{p.price}</p>
              {p.external
                ? <a href={p.href} className="pr-btn" target="_blank" rel="noopener noreferrer">{p.cta} <span aria-hidden="true">↗</span></a>
                : <Link href={p.href} className="pr-btn">{p.cta}</Link>}
            </article>
          ))}
        </div>
      </section>

      <section className="pr-range" aria-labelledby="pg-self-h">
        <p className="pr-eyebrow">Self-paced programs</p>
        <h2 id="pg-self-h" className="pr-h2">Choose the question that has your attention</h2>
        <div className="pg-topics">
          {(Object.keys(CATEGORIES) as CategoryId[]).map(c => (
            <Link key={c} href={`/products#${c}`} className="pg-topic">
              <span className="pr-kicker">{CATEGORIES[c].name}</span>
              <span className="pg-topic-title">{CATEGORIES[c].tagline}</span>
              <span className="pg-topic-meta">{fromLine(c)} <span aria-hidden="true">⟶</span></span>
            </Link>
          ))}
        </div>
        <p className="pr-more"><Link href="/products">Browse every self-paced program</Link></p>
      </section>
    </main>
  );
}
