import Link from 'next/link';
import { RABBIT_HOLES } from '@/content/home';
import { Brush, Sym } from './ui';

// The next two rabbit holes from the homepage (same titles and links as the painted cards)
const NEXT = RABBIT_HOLES.slice(1, 3);

// BECAUSE NONE OF THIS HAPPENS IN ISOLATION — links on to the neighbouring rabbit holes (design part three)
export default function KbIsolation() {
  return (
    <section className="kb-section kb-isolation" aria-labelledby="kb-isolation-h">
      <Sym name="hm-spark" className="kb-spark" />
      <Sym name="hm-swirl-sm" className="kb-isolation-swirl" />
      <h2 id="kb-isolation-h" className="kb-h2 kb-center">Because none of this <Brush>happens in</Brush> isolation</h2>
      <div className="kb-isolation-grid">
        {NEXT.map(h => (
          <Link key={h.title} href={h.href} className="kb-hole">
            <span>{h.title}</span>
            <span className="kb-arrow" aria-hidden="true">⟶</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
