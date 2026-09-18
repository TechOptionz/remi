import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';

const THEMES: { icon: IconName; label: string }[] = [
  { icon: 'pair', label: 'Pursuit & withdrawal' },
  { icon: 'person', label: 'Self-abandonment' },
  { icon: 'shield', label: 'Boundaries' },
  { icon: 'heartCrack', label: 'Rupture & repair' },
];

// RELATIONSHIPS BRING ALL OUR SHIT TO THE SURFACE — two photos, centred statement, four themes and the CTA
export default function Relationships() {
  return (
    <section className="section section--tight section--flush centered" aria-labelledby="rel-h">
      <div className="photo-pair">
        <img loading="lazy" decoding="async" src="/assets/photos/about-community.webp" alt="Remi with a room full of people cheering" />
        <img loading="lazy" decoding="async" src="/assets/photos/group-screens.webp" alt="Remi with a group of participants in front of screens full of online attendees" />
      </div>
      <h2 id="rel-h" className="part-title part-title--sm"><span className="underline">Relationships bring all our shit to the surface</span></h2>
      <p className="part-lede part-lede--center">Relationships are where attachment patterns stop being interesting theories and become lived experiences.</p>
      <ul className="icon-labels">
        {THEMES.map(t => (
          <li key={t.label}><span className="icon-ring"><Icon name={t.icon} size={26} /></span>{t.label}</li>
        ))}
      </ul>
      <Link href="/ideas-models#part-3" className="btn btn--primary btn--caps btn--big">Let's talk relationships</Link>
    </section>
  );
}
