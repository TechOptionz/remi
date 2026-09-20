import Link from 'next/link';
import { TruthLead, WaitlistCta } from './ui';

// REBEL YELL — black band, editorial photograph bleeding off the right, one handwritten line over it
export default function RebelHero() {
  return (
    <section className="ry-band ry-band--black ry-hero" aria-labelledby="page-h">
      <img className="ry-hero-photo" src="/assets/photos/rebel-hero.webp" alt="Remi Pearson mid-thought, hands raised, in a darkened room" />
      <div className="ry-hero-copy">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Programs</span>
        </nav>
        <p className="ry-wordmark">Rebel Yell</p>
        <h1 id="page-h" className="ry-hero-title">Your leadership team is too intelligent to stay <em>stuck here.</em></h1>
        <p className="ry-hero-lede">A private diagnostic and intervention for founders, owners, CEOs and senior leadership teams who have reached an impasse … where more meetings, another strategy day or another round of polite agreement will not solve what is really happening.</p>
        <WaitlistCta />
        <p className="ry-hero-note">For consequential problems that require clear thinking, honest conversations and the willingness to let truth lead.</p>
      </div>
      <TruthLead className="ry-hero-hand" />
    </section>
  );
}
