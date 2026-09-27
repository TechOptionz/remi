import Link from 'next/link';
import { RABBIT_HOLES } from '@/content/home';
import { Brush, Sym } from './ui';

// BECAUSE NONE OF THIS HAPPENS IN ISOLATION — links on to other rabbit holes, by their index in RABBIT_HOLES
// (content/home.ts), so they carry the same titles and links as the homepage cards.
export default function OtherHoles({ show, className = '' }: { show: number[]; className?: string }) {
  return (
    <section className={`kb-section kb-isolation ${className}`} aria-labelledby="kb-isolation-h">
      <Sym name="hm-spark" className="kb-spark" />
      <Sym name="hm-swirl-sm" className="kb-isolation-swirl" />
      <h2 id="kb-isolation-h" className="kb-h2">Because none of this <Brush>happens in</Brush> isolation</h2>
      <div className="kb-isolation-grid">
        {show.map(i => RABBIT_HOLES[i]).map(h => (
          <Link key={h.title} href={h.href} className="kb-hole">
            <span>{h.title}</span>
            <span className="kb-arrow" aria-hidden="true">⟶</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
