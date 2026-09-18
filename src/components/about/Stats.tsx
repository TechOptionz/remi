import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';

const STATS: { icon: IconName; label: React.ReactNode }[] = [
  { icon: 'books', label: <>Six<br />books</> },
  { icon: 'star', label: <>Three<br />bestsellers</> },
  { icon: 'play', label: <>11M+ podcast<br />views &amp; listens</> },
  { icon: 'gradcap', label: <>Master of Applied<br />Positive Psychology</> },
];

// STATS strip with the Perspectives CTA underneath
export default function Stats() {
  return (
    <section className="section section--tight section--flush centered" aria-label="Remi in numbers">
      <ul className="stats-strip">
        {STATS.map((s, i) => (
          <li key={i}><span className="stats-strip-icon"><Icon name={s.icon} size={38} strokeWidth={1.2} /></span><span>{s.label}</span></li>
        ))}
      </ul>
      <Link href="/perspectives" className="btn btn--primary btn--caps btn--big">Watch or listen to Perspectives</Link>
    </section>
  );
}
