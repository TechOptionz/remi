import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';

// Each model opens its article in the free library (EIT: its chapter, which is its article).
const MODELS: { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: 'headHeart', title: 'Emotion Integration Technique', text: 'The emotions beneath protective patterns.', href: '/ideas-models/emotion-integration-technique' },
  { icon: 'target', title: 'Critical Alignment Model', text: 'What produces the gap between what we want and what repeatedly happens.', href: '/articles/find-the-root-cause-of-problems-in-your-business' },
  { icon: 'knot', title: 'T.R.U.S.T.M.E.', text: 'Trust. Relatability. Uniqueness. Systems. Tenacity. Meaning. Evolution.', href: '/articles/why-leaders-revert-to-old-habits-under-pressure' },
  { icon: 'burst', title: 'Ultimate Influence', text: 'Helping someone make a quality buying decision without scripts, manipulation or pressure.', href: '/articles/how-to-sell-without-being-pushy' },
];

// I MAKE MODELS BECAUSE I CAN'T LEAVE A GOOD QUESTION ALONE — intro with portrait, then the four models
export default function Models() {
  return (
    <section className="section section--tight" aria-labelledby="models-h">
      <div className="part-head">
        <div>
          <h2 id="models-h" className="part-title"><span className="underline">I make models because I can't leave a good question alone</span></h2>
          <p className="part-lede">When I encounter a problem that existing ideas do not adequately explain, I tend to disappear down the rabbit hole until I can see its underlying structure.</p>
        </div>
        <img className="part-photo" loading="lazy" decoding="async" src="/assets/photos/remi-pink-jacket.webp" alt="Remi smiling, seated, in a pink patterned jacket" />
      </div>
      <div className="model-cards">
        {MODELS.map(m => (
          <Link href={m.href} className="model-card" key={m.title}>
            <span className="model-card-icon"><Icon name={m.icon} size={40} strokeWidth={1.2} /></span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
