import { Brush, Head } from '@/components/rabbit-holes/ui';
import { CYCLE } from '@/content/loving-someone';

// The five circles sit on a pentagon, clockwise from the top; each arrow bows outwards from one circle to the next.
const W = 520, H = 470, CX = 260, CY = 245, R = 185, RING = 60;
const NODES = CYCLE.map((label, i) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / CYCLE.length;
  return { label, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
});
const f = (n: number) => n.toFixed(1);
const ARROWS = NODES.map((a, i) => {
  const b = NODES[(i + 1) % NODES.length];
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
  const ux = dx / len, uy = dy / len, gap = RING + 14;
  const sx = a.x + ux * gap, sy = a.y + uy * gap, ex = b.x - ux * gap, ey = b.y - uy * gap;
  const mx = (sx + ex) / 2, my = (sy + ey) / 2;
  const ox = mx - CX, oy = my - CY, olen = Math.hypot(ox, oy);
  return `M${f(sx)} ${f(sy)} Q${f(mx + (ox / olen) * 26)} ${f(my + (oy / olen) * 26)} ${f(ex)} ${f(ey)}`;
});
/** Splits a label into lines of about 12 characters for the circle. */
const lines = (label: string) => label.split(' ').reduce<string[]>((acc, w) => {
  const last = acc[acc.length - 1];
  if (last && (last + ' ' + w).length <= 12) acc[acc.length - 1] = last + ' ' + w; else acc.push(w);
  return acc;
}, []);

// LOVE DOESN'T CREATE ALL YOUR PATTERNS — the attachment cycle drawn as five linked circles, the copy and the rust quote (design part two)
export default function LsCycle() {
  return (
    <section className="kb-section ls-cycle" aria-labelledby="ls-cycle-h">
      <Head id="ls-cycle-h">Love doesn’t create all your patterns.<br /> It gives them <Brush>somewhere to</Brush> show up.</Head>
      <div className="ls-cycle-grid">
        <figure className="ls-cycle-fig">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`The attachment cycle: ${CYCLE.join(', then ')}, and round again.`}>
            <defs>
              <marker id="ls-arrowhead" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M1 1 L8 5 L1 9" fill="none" stroke="#a8401a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            {ARROWS.map(d => <path key={d} d={d} className="ls-cycle-arrow" markerEnd="url(#ls-arrowhead)" />)}
            {NODES.map(n => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r={RING} className="ls-cycle-ring" />
                <circle cx={n.x + 1.5} cy={n.y - 1} r={RING - 3} className="ls-cycle-ring ls-cycle-ring--in" />
                <text x={n.x} y={n.y} className="ls-cycle-text">
                  {lines(n.label).map((l, k, all) => <tspan key={l} x={n.x} dy={k === 0 ? `${-(all.length - 1) * 0.55 + 0.35}em` : '1.1em'}>{l}</tspan>)}
                </text>
              </g>
            ))}
          </svg>
        </figure>
        <div className="ls-cycle-copy">
          <p>When connection feels threatened, intelligent people can behave in ways that make no sense to them later. Pursuing, withdrawing, fixing, pleasing and controlling are attempts to protect the bond, the self, or both.</p>
          <blockquote className="ls-quote">Knowing your attachment style does not automatically change what happens when attachment is activated.</blockquote>
        </div>
      </div>
    </section>
  );
}
