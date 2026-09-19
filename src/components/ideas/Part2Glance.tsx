import Link from 'next/link';
import { GLANCE, type GlanceCard, type GlanceIconName } from '@/content/ideas';
import { Art, Btn, Hand, Img, NextLink, Part, PartHead } from './ui';

const GLANCE_ICONS: Record<GlanceIconName, React.ReactNode> = {
  triangle: <path d="M12 4l8 15H4z" />,
  warning: <><path d="M12 3l9 17H3z" /><path d="M12 10v4M12 16.5v.5" /></>,
  spiral: <path d="M12 12a3 3 0 1 1 3 3 6 6 0 1 1-6-6 9 9 0 1 1 9 9" />,
  waves: <path d="M2 17c3 0 4-4 7-4s4 4 7 4 4-4 6-4M2 21c3 0 4-3 7-3s4 3 7 3 4-3 6-3M13 6a4 4 0 0 1 6 4" />,
  rose: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M12 8l1.5 3 3 1-3 1-1.5 3-1.5-3-3-1 3-1z" /></>,
  venn: <><circle cx="9" cy="10" r="5" /><circle cx="15" cy="10" r="5" /><circle cx="12" cy="15" r="5" /></>,
  team: <><circle cx="6" cy="6" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><path d="M3 20v-5a3 3 0 0 1 6 0v5M9 20v-5a3 3 0 0 1 6 0v5M15 20v-5a3 3 0 0 1 6 0v5" /></>,
  summit: <path d="M3 21l6-10 4 5 3-4 5 9zM13 3v6M13 3h5l-1.5 1.5L18 6h-5" />,
  quadrants: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></>,
  exchange: <path d="M3 11l4-4 5 3 4-3 5 4-5 5-4-3-5 3z" />,
  growth: <path d="M4 20V10M10 20V6M16 20v-8M22 20V4M3 20h20M4 9l6-3 6 4 6-6" />,
};

/** One model in the index: icon, title, the question it answers and an optional tag line. */
function GlanceCardLink({ card }: { card: GlanceCard }) {
  const inner = (
    <>
      <span className="glance-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{GLANCE_ICONS[card.icon]}</svg></span>
      <span>
        <span className="glance-title">{card.title}</span>
        <span className="glance-q">{card.question}</span>
        {card.tag && <span className="glance-tag">{card.tag}</span>}
      </span>
    </>
  );
  return card.href.startsWith('#')
    ? <a href={card.href} className="glance-card">{inner}</a>
    : <Link href={card.href} className="glance-card">{inner}</Link>;
}

// PART TWO · THE BODY OF WORK, AT A GLANCE — five numbered groups of models (GLANCE in content/ideas.ts)
export default function Part2Glance() {
  return (
    <Part n={2}>
      <PartHead n={2} title="The body of work, at a glance" aside={<Art name="p2-compass" />}>
        <Hand v={['underline']}>Not every idea does the same job. Here is the map before we go wandering through it.</Hand>
      </PartHead>
      <ol className="glance">
        {GLANCE.map((group, i) => (
          <li className="glance-group" key={group.name}>
            <div className="glance-head">
              <div className="glance-name-row"><span className="glance-num">{i + 1}</span><a href={group.href} className="glance-name">{group.name}</a></div>
              <Img name={group.art} className="glance-art" />
            </div>
            <ul className="glance-cards">
              {group.cards.map(card => <li key={card.title}><GlanceCardLink card={card} /></li>)}
            </ul>
          </li>
        ))}
      </ol>
      <p className="research-thread"><span className="rt-label"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></svg> Research thread</span><span>Values, meaning, organisational wellbeing, leadership, reliability and validity.</span></p>
      <Hand v={['center']}>Different questions. Different models. One body of work.</Hand>
      <Btn href="#part-3">Start with the human foundations</Btn>
      <NextLink href="#part-3" decorated>Continue to human foundations</NextLink>
    </Part>
  );
}
