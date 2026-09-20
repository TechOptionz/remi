import Link from 'next/link';
import { HOME_PERSPECTIVES } from '@/content/home';
import { Brush, Sym } from './ui';

// I LOVE A CONVERSATION THAT CHANGES MY MIND — one large featured conversation and two smaller ones (home design part 2)
export default function HomePerspectives() {
  return (
    <section className="section hm-persp" aria-labelledby="hm-persp-h">
      <p className="hm-eyebrow"><Sym name="hm-spark" />Perspectives</p>
      <h2 id="hm-persp-h" className="hm-h2">I love a conversation <Brush>that changes</Brush> my mind</h2>
      <p className="hm-lede">Perspectives is where I sit down with people who know something worth knowing, ask the questions I genuinely care about, and follow the conversation wherever it goes.</p>
      <Sym name="hm-swirl" className="hm-persp-swirl" />
      <div className="hm-persp-grid">
        {HOME_PERSPECTIVES.map((p, i) => (
          <a href={p.href} target="_blank" rel="noopener" className={`hm-ep hm-ep--${i}`} key={p.id}>
            {p.image && <img src={p.image} alt="" loading="lazy" decoding="async" />}
            <span className="hm-ep-body">
              {i === 0 && <span className="hm-ep-tag">Featured perspective</span>}
              <span className="hm-ep-title">{p.title}</span>
              <span className="hm-ep-guest">with {p.guest}</span>
              <span className="hm-ep-watch"><span className="hm-play" aria-hidden="true" />Watch the conversation</span>
            </span>
          </a>
        ))}
      </div>
      <p className="hm-center"><Link href="/perspectives" className="hm-btn hm-btn--sm">Browse all Perspectives</Link></p>
    </section>
  );
}
