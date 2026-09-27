import Link from 'next/link';
import { RABBIT_HOLES } from '@/content/home';
import { Brush, Sym } from './ui';

// WHICH RABBIT HOLE — heading with its looping arrow on the left, six painted cards on the right (home design part 1)
export default function RabbitHoles() {
  return (
    <section id="rabbit-holes" className="section holes" aria-labelledby="holes-h">
      <div className="holes-head">
        <h2 id="holes-h" className="holes-title">Which rabbit hole shall we disappear <Brush>down?</Brush></h2>
        <Sym name="hm-loop" className="holes-loop" />
      </div>
      <div className="holes-grid">
        {RABBIT_HOLES.map(h => (
          <Link href={h.href} className={`hole-card hole-card--${h.tone}`} key={h.title}>
            <div><h3>{h.title}</h3><p>{h.text}</p></div>
            <span className="hole-more">Explore <span aria-hidden="true">⟶</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
