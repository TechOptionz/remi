// Programs — the list of Remi's programs: Rebel Yell (waitlist), The Shift (coming soon) and Ultimate Self Club (its own site).
import type { Metadata } from 'next';
import Link from 'next/link';
import { ULTIMATE_SELF_CLUB_URL } from '@/content/site';

export const metadata: Metadata = {
  title: 'Programs — Remi Pearson',
  description: 'Rebel Yell, The Shift and Ultimate Self Club: the programs Remi Pearson offers.',
};

export default function ProgramsPage() {
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="programs-h">
        <p className="pr-eyebrow">Programs</p>
        <h1 id="programs-h" className="pr-title">Three ways to <em>go deeper.</em></h1>
        <p className="pr-lede">Choose the one that matches where you are.</p>
      </section>
      <section className="pr-range" aria-label="Programs">
        <div className="pr-grid pr-grid--three">
          <article className="pr-card pr-card--burgundy">
            <p className="pr-kicker">Private waitlist</p>
            <h2 className="pr-book-title">Rebel Yell</h2>
            <p>A private diagnostic and intervention for founders, owners, CEOs and senior leadership teams who have reached an impasse.</p>
            <Link href="/programs/rebel-yell" className="pr-btn">Explore Rebel Yell</Link>
          </article>
          <article className="pr-card pr-card--navy">
            <p className="pr-kicker">Waitlist</p>
            <h2 className="pr-book-title">The Shift</h2>
            <p className="pr-soon"><span>Coming soon</span></p>
            <Link href="/programs/the-shift" className="pr-btn">Join the waitlist</Link>
          </article>
          <article className="pr-card pr-card--black">
            <p className="pr-kicker">Membership</p>
            <h2 className="pr-book-title">Ultimate Self Club</h2>
            <p>One place for all the questions you can’t leave alone.</p>
            <a href={ULTIMATE_SELF_CLUB_URL} className="pr-btn" target="_blank" rel="noopener noreferrer">Visit ultimateselfclub.com ↗</a>
          </article>
        </div>
        <p className="pr-more">Looking for something shorter? <Link href="/products">Browse the self-paced programs</Link>.</p>
      </section>
    </main>
  );
}
