import Link from 'next/link';
import { Brush, Sym } from './ui';

const HOLES: { tone: string; href: string; title: string; text: string }[] = [
  { tone: 'rust', href: '/ideas-models#part-4', title: 'I know better. Why do I still keep doing this?', text: 'Patterns, triggers and protective responses that insight alone has not changed.' },
  { tone: 'blush', href: '/ideas-models#part-3', title: 'Why does loving someone bring all my shit to the surface?', text: 'Attachment, boundaries, conflict, intimacy and the moments you leave yourself.' },
  { tone: 'paper', href: '/ideas-models#part-5', title: 'Tell me the truth. What am I not seeing?', text: 'Decisions, contradictions and stories that keep your life out of alignment.' },
  { tone: 'coal', href: '/ideas-models#part-6', title: 'How do I lead without carrying everybody?', text: 'Leadership, accountability, culture, holding space and honest conversations.' },
  { tone: 'gold', href: '/ideas-models#part-8', title: 'How do I sell without scripts, pressure or bullshit?', text: 'Consultative sales, ethical influence, presenting and moving a room.' },
  { tone: 'oxblood', href: '/ideas-models#part-8', title: 'I’ve built myself a job. How do I build an asset?', text: 'Turn expertise into intellectual property and build beyond the founder.' },
];

// WHICH RABBIT HOLE — heading with its looping arrow on the left, six painted cards on the right (home design part 1)
export default function RabbitHoles() {
  return (
    <section id="rabbit-holes" className="section holes" aria-labelledby="holes-h">
      <div className="holes-head">
        <h2 id="holes-h" className="holes-title">Which rabbit hole shall we disappear <Brush>down?</Brush></h2>
        <Sym name="hm-loop" className="holes-loop" />
      </div>
      <div className="holes-grid">
        {HOLES.map(h => (
          <Link href={h.href} className={`hole-card hole-card--${h.tone}`} key={h.title}>
            <div><h3>{h.title}</h3><p>{h.text}</p></div>
            <span className="hole-more">Explore <span aria-hidden="true">⟶</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
