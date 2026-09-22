import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';

const TOPICS: { icon: IconName; title: string; text: React.ReactNode }[] = [
  { icon: 'headHeart', title: 'Human change, trauma & protective patterns', text: 'Emotion Integration Technique, IFS and parts work, holding space, emotional integration and why insight alone so rarely creates change.' },
  { icon: 'couple', title: 'Relationships, attachment & repair', text: 'Attachment patterns, self-abandonment, boundaries, conflict, intimacy, rupture and the difficult work of remaining ourselves while loving another person.' },
  { icon: 'compass', title: 'Truth, alignment & decision-making', text: 'Let Truth Lead, the Critical Alignment Model, values, perception and what becomes possible when we stop negotiating with what we already know.' },
  { icon: 'people', title: 'Leadership, culture & senior team facilitation', text: <>Disruptive Leadership, <Link href="/ideas-models/trustme-model">T.R.U.S.T.M.E.</Link>, accountability, healthy culture and holding the room when difficult conversations and consequential decisions matter.</> },
  { icon: 'growth', title: 'Consultative sales & ethical influence', text: 'Ultimate Influence, diagnosing before prescribing, selling intangible value and helping someone make a quality decision without scripts, pressure or bullshit.' },
  { icon: 'sprout', title: 'Building beyond the founder', text: 'Turning expertise into intellectual property, moving from practice to business, building an asset instead of a job and creating something valuable enough to sell.' },
];

// WHAT COULD WE TALK ABOUT — intro with portrait, then six numbered themes
export default function Topics() {
  return (
    <section className="section section--tight" aria-labelledby="talk-h">
      <div className="part-head part-head--portrait">
        <div>
          <h2 id="talk-h" className="part-title">What could we talk about?</h2>
          <p className="part-lede part-lede--rule">Quite a lot, as it happens. My work crosses the emotional, relational, intellectual and commercial architecture of how people change, decide, lead, influence and build.</p>
        </div>
        <img className="part-portrait" loading="lazy" decoding="async" src="/assets/photos/about-convo-a.webp" alt="Remi laughing behind a podcast microphone in front of a wall of books" />
      </div>
      <div className="topics">
        {TOPICS.map((t, i) => (
          <article className="topic-card" key={t.title}>
            <div className="topic-top">
              <span className="topic-icon"><Icon name={t.icon} size={40} strokeWidth={1.2} /></span>
              <span className="topic-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
