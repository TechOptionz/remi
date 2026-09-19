import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import { PERSPECTIVES_STATS } from '@/content/perspectives';

// I LOVE A CONVERSATION THAT CHANGES MY MIND — intro copy and note left, studio photo right, then the headline numbers
export default function PerspectivesHero() {
  return (
    <section className="page-hero" aria-labelledby="page-h">
      <div className="persp-hero">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Perspectives</span>
          </nav>
          <h1 id="page-h" className="invite-title"><span className="underline">I love a conversation that changes my mind</span></h1>
          <p className="part-lede">Ideas, psychology, philosophy, relationships, culture, leadership, business and whatever else seems worth following.</p>
          <p className="part-lede">I am not interested in interviewing somebody while they politely wait for my next question. I want the conversation neither of us could have planned before we sat down.</p>
          <p className="quote-note persp-note">Come for the idea. Stay for where the conversation goes.</p>
        </div>
        <img className="persp-hero-photo" src="/assets/photos/perspectives-hero.webp" alt="Remi smiling at a podcast microphone in front of a wall of books" />
      </div>
      <ul className="persp-stats">
        {PERSPECTIVES_STATS.map(s => (
          <li key={s.label}>
            <span className="persp-stats-icon"><Icon name={s.icon} size={40} strokeWidth={1.2} /></span>
            <span>{s.num && <span className="persp-stats-num">{s.num}</span>}<span className="persp-stats-label">{s.label}</span></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
