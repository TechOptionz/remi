import Icon, { type IconName } from '@/components/shared/Icon';

const FACTS: { icon: IconName; top?: string; num: string; label?: string }[] = [
  { icon: 'flag', top: 'Founded', num: '2004' },
  { icon: 'people', num: '11,000+', label: 'Coaches trained' },
  { icon: 'bars', top: 'Nearly', num: '$200M', label: 'Revenue' },
  { icon: 'handshake', top: 'Sold', num: '2024' },
  { icon: 'stage', num: '$50M', label: 'Sold from stage' },
  { icon: 'globe', num: '100+', label: 'Countries reached' },
];

// AND YES, I BUILT A RATHER LARGE BUSINESS TOO — copy left, two stacked photos right, then the six-fact strip
export default function BuiltBusiness() {
  return (
    <section className="section section--tight section--flush" aria-labelledby="business-h">
      <div className="part-head part-head--center">
        <div>
          <h2 id="business-h" className="part-title"><span className="underline">And yes, I built a rather large business too</span></h2>
          <p className="part-lede">I built The Coaching Institute from a spare room into one of Australasia's most successful coaching schools, then built it beyond my own delivery and sold it.</p>
        </div>
        <div className="photo-stack">
          <img loading="lazy" decoding="async" src="/assets/photos/about-community.webp" alt="Remi with a room full of people cheering" />
          <img loading="lazy" decoding="async" src="/assets/photos/invite-stage.webp" alt="Remi taking a selfie with a theatre full of people cheering" />
        </div>
      </div>
      <ul className="facts">
        {FACTS.map(f => (
          <li key={f.num}>
            <span className="fact-icon"><Icon name={f.icon} size={30} strokeWidth={1.2} /></span>
            {f.top && <span className="fact-label">{f.top}</span>}
            <span className="fact-num">{f.num}</span>
            {f.label && <span className="fact-label">{f.label}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
