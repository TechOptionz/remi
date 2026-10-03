// Reviews — what people say about working with Remi. The reviews live in content/reviews.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { REVIEWS } from '@/content/reviews';

export const metadata: Metadata = {
  title: 'Reviews — Remi Pearson',
  description: 'What people say about working with Remi Pearson.',
  // Kept out of search (and the sitemap) while it only says "Coming soon"
  ...(REVIEWS.length ? {} : { robots: { index: false, follow: true } }),
};

export default function ReviewsPage() {
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero" aria-labelledby="reviews-h">
        <p className="pr-eyebrow">Reviews</p>
        <h1 id="reviews-h" className="pr-title">In their <em>words.</em></h1>
        <p className="pr-lede">What people say about working with Remi.</p>
      </section>
      <section className="pr-range" aria-label="Reviews">
        {REVIEWS.length === 0
          ? <p className="pr-soon"><span>Coming soon</span></p>
          : (
            <div className="pr-reviews">
              {REVIEWS.map(r => (
                <figure key={r.name + r.quote.slice(0, 24)} className="pr-review">
                  <blockquote>{r.quote.split('\n').map(t => <p key={t}>{t}</p>)}</blockquote>
                  <figcaption><strong>{r.name}</strong>{r.role && <span>{r.role}</span>}</figcaption>
                </figure>
              ))}
            </div>
          )}
        <p className="pr-more">Want to work with Remi? <Link href="/invite-remi">Invite Remi</Link></p>
      </section>
    </main>
  );
}
