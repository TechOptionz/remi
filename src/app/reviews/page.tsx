// Reviews — what people say about learning with Remi (under About Remi in the nav). The reviews live in
// content/reviews.ts; the filters and cards are components/reviews/ReviewsWall.tsx; styles styles/reviews.css (.rv-*,
// fixed colours like the sales pages: cream paper, burgundy bands, gold rules). The community photo is the HD original
// (Remi-Pearson-Photos 14) also used on /subscribe.
import type { Metadata } from 'next';
import Link from 'next/link';
import ReviewsWall from '@/components/reviews/ReviewsWall';
import { REVIEWS } from '@/content/reviews';

export const metadata: Metadata = {
  title: 'Reviews: What People Say About Learning with Remi Pearson',
  description: 'Reviews from people who have trained with Remi Pearson: Advanced Skills, Emotional Intimacy, Business Breakthrough, Ultimate You Quest and her coaching trainings, in their own words.',
  // Kept out of search (and the sitemap) while it only says "Coming soon"
  ...(REVIEWS.length ? {} : { robots: { index: false, follow: true } }),
};

/** The review shown large on the burgundy band; it is left out of the cards below. */
const FEATURED = "Stephen O'Keefe";

export default function ReviewsPage() {
  const featured = REVIEWS.find(r => r.name === FEATURED);
  const rest = REVIEWS.filter(r => r !== featured);
  return (
    <main className="rv">
      <section className="rv-hero" aria-labelledby="rv-title">
        <div className="rv-wrap">
          <nav className="crumbs rv-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/about-remi">About Remi</Link><span aria-hidden="true">/</span><span aria-current="page">Reviews</span>
          </nav>
          <div className="rv-hero-grid">
            <div>
              <p className="rv-eyebrow">Reviews</p>
              <h1 id="rv-title" className="rv-h1">In their <em>words.</em></h1>
            </div>
            <div>
              <p className="rv-lede">What people say about learning with Remi, from her coaching trainings, Advanced Skills, Emotional Intimacy, Business Breakthrough and Ultimate You Quest.</p>
              {REVIEWS.length > 0 && <p className="rv-count"><strong>{REVIEWS.length}</strong> reviews, each in the reviewer’s own words</p>}
            </div>
          </div>
        </div>
      </section>

      {REVIEWS.length === 0 ? (
        <section className="rv-wrap rv-section"><p className="rv-soon">Coming soon</p></section>
      ) : (
        <>
          <img className="rv-community" src="/assets/ltl/ltl-community.webp" alt="Remi Pearson with a large group of coaches and graduates at a celebration evening" width={1600} height={552} fetchPriority="high" decoding="async" />

          {featured && (
            <section className="rv-featured" aria-label="A review">
              <figure className="rv-wrap rv-featured-inner">
                <span className="rv-featured-mark" aria-hidden="true">“</span>
                <blockquote><p>{featured.quote}</p></blockquote>
                <figcaption><strong>{featured.name}</strong>{featured.program && <span>{featured.program}</span>}</figcaption>
              </figure>
            </section>
          )}

          <section className="rv-wrap rv-section" aria-labelledby="rv-all-h">
            <h2 id="rv-all-h" className="rv-h2">What people have said</h2>
            <ReviewsWall reviews={rest} />
          </section>
        </>
      )}

      <section className="rv-close" aria-labelledby="rv-close-h">
        <div className="rv-wrap rv-close-inner">
          <h2 id="rv-close-h" className="rv-h2">Want to work with Remi?</h2>
          <div className="rv-close-links">
            <Link href="/invite-remi" className="rv-btn">Invite Remi</Link>
            <Link href="/programs" className="rv-btn rv-btn--ghost">Explore the programs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
