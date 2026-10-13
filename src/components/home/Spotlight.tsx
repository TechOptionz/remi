import { ARTICLES } from '@/content/articles';
import { SHOWCASE_ARTICLES, SPOTLIGHT, type SpotlightSlide } from '@/content/home';
import { REVIEWS } from '@/content/reviews';
import SpotlightCarousel from './SpotlightCarousel';

const WEEK = 7 * 24 * 3600e3;
const FIRST_MONDAY = Date.UTC(2026, 0, 4, 14); // Monday 5 January 2026, midnight in Sydney (UTC+10)

/** The article showcased this week: the rotation moves on every Monday (the homepage is refreshed hourly, app/page.tsx). */
function weeksArticle() {
  const pool = SHOWCASE_ARTICLES.length
    ? SHOWCASE_ARTICLES.map(slug => ARTICLES.find(a => a.slug === slug)).filter(a => !!a)
    : ARTICLES;
  return pool[Math.floor((Date.now() - FIRST_MONDAY) / WEEK) % pool.length];
}

// SPOTLIGHT — the rotating carousel under the hero. Its slides are SPOTLIGHT in content/home.ts.
export default function Spotlight() {
  const slides = SPOTLIGHT.flatMap((s): SpotlightSlide[] => {
    if (s === 'reviews') {
      // Shown once there are reviews to read (content/reviews.ts)
      return REVIEWS.length ? [{ tone: 'gold', eyebrow: 'Reviews', title: 'Read what people have to say', cta: 'Read the reviews', href: '/reviews', image: '/assets/photos/about-audience.webp', alt: '' }] : [];
    }
    if (s === 'article') {
      const a = weeksArticle();
      return a ? [{
        tone: 'rust', eyebrow: 'This week’s article', title: a.title, text: a.summary, cta: 'Read the article', href: `/articles/${a.slug}`,
        image: a.image ?? '/assets/photos/about-built-a.webp', alt: '',
        fit: a.thumb?.fit, bg: a.thumb?.bg, multiply: a.thumb?.multiply, pos: a.thumb?.pos,
      }] : [];
    }
    return [s];
  });
  return <SpotlightCarousel slides={slides} />;
}
