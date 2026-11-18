// Which programs can be bought on the site, and where their buy buttons go: Stripe Checkout on this site, then the buyer
// is enrolled in the program's Thinkific course (lib/product-sales.ts, lib/thinkific.ts). For now (Nov 2026) only
// Critical Alignment Model for Leaders is sold this way (SOLD_HERE); the other programs keep their "Coming soon" /
// waitlist sign-ups. CAM goes on sale when BOTH
//   - STRIPE_SECRET_KEY is set at build time, and
//   - its Thinkific course id is in THINKIFIC_COURSES below,
// so nothing can be bought before there is a course to put the buyer in. A product's own `buyHref` still wins.
// To sell another program later: add its slug to SOLD_HERE and its course id below, and point its page's buy buttons
// at buyHrefOf(slug) (CAM's page reads CAML_BUY_HREF in content/cam-landing.ts).
// No secrets here: safe to import anywhere, but on-sale is decided on the server (the pages are built there).
import { FREE, PRODUCTS, productBySlug, type Product } from '@/content/products';
import { RANGE_DESIGNS } from '@/content/product-ranges';

/** The programs sold through Stripe + Thinkific on this site. */
export const SOLD_HERE = new Set(['critical-alignment-model-for-leaders']);

/** Thinkific course id for each program, by product slug: the number in the course's admin address,
 *  https://remi-s-site-9bea.thinkific.com/manage/courses/<id>. Add a line as each course is built. */
export const THINKIFIC_COURSES: Record<string, number> = {
  'critical-alignment-model-for-leaders': 3562638,
  // Added Nov 2026 (Remi's pre-order courses). A course id here only says where a buyer is enrolled; a program goes on
  // sale only when its slug is also in SOLD_HERE. Free programs (FREE in content/products.ts) are never sold through
  // Checkout. Not linked: "New course" (3569403) and the first draft of the Triad (3572982), both empty drafts, and
  // "Selling from Stage with Remi Pearson" (3569406), still a draft.
  'self-esteem-triad': 3577750,
  'self-regulation-when-it-matters': 3577754,
  'five-paths-to-a-healthy-relationship': 3577755,
  'obstacles-to-love': 3577756,
  'safe-or-risky-problems': 3577758,
  'why-do-i-keep-doing-this': 3577761,
  'holding-space-without-rescuing-or-disappearing': 3577765,
  'emotion-integration-technique-foundations': 3577769,
  'finding-our-way-back': 3577770,
  'deep-state-repatterning': 3577771,
  'the-90-day-review': 3577775,
  'benchmarking-what-good-actually-looks-like': 3577779,
  'build-beyond-the-founder': 3577782,
  'disruptive-leadership': 3577783,
  'the-performance-management-blueprint': 3577784,
  'trust-that-holds': 3577786,
  'from-practice-to-enterprise': 3577787,
  'selling-from-stage-fundamentals': 3577788,
  'core-improve-innovate': 3572984,
};

/** Programs whose price is shown before GST ("$79 AUD + GST"): Checkout adds 10% GST on top. Every other price
 *  already includes GST, and Checkout shows the GST inside it on the receipt. */
export const PLUS_GST = new Set(['critical-alignment-model-for-leaders', 'ultimate-influence-foundations']);

/** The price in cents before any added GST: the first figure the page shows ("AUD $1,997 including GST" → 199700;
 *  "AUD $197 or 4 payments of $59" → 19700, the one-payment price). 0 for a free program. */
export function amountOf(p: Product) {
  const m = p.price && p.price !== FREE ? p.price.match(/\$\s*([\d,]+(?:\.\d+)?)/) : null;
  return m ? Math.round(parseFloat(m[1].replace(/,/g, '')) * 100) : 0;
}

/** The Thinkific courses a purchase enrols the buyer in, or null when they are not all set up yet. */
export function coursesOf(slug: string): number[] | null {
  const p = productBySlug(slug);
  if (!p) return null;
  if (THINKIFIC_COURSES[slug]) return [THINKIFIC_COURSES[slug]];
  if (p.bundle && p.includes?.length) {
    const ids = p.includes.map(s => THINKIFIC_COURSES[s]);
    return ids.every(Boolean) ? ids : null;
  }
  return null;
}

/** True when the program's buy buttons open Stripe Checkout. */
export function onSale(slug: string) {
  const p = productBySlug(slug);
  return !!process.env.STRIPE_SECRET_KEY && SOLD_HERE.has(slug) && !!p && !p.buyHref && amountOf(p) > 0 && !!coursesOf(slug);
}

export const checkoutHref = (slug: string) => `/api/products/checkout?product=${encodeURIComponent(slug)}`;
/** Where a program's buy buttons go: its outside `buyHref`, else Stripe Checkout once on sale, else null (the page's
 *  own sign-up, usually the closing band #get). */
export function buyHrefOf(slug: string) {
  const p = productBySlug(slug);
  return p?.buyHref ?? (onSale(slug) ? checkoutHref(slug) : null);
}

/** The program's photo for Stripe Checkout: its band on /products (taken from its own sales page). */
export function imageOf(slug: string) {
  const p = productBySlug(slug);
  return p ? RANGE_DESIGNS[p.category]?.art[slug]?.src ?? null : null;
}

/** Every program that can be bought right now (for checks and notes). */
export const onSaleSlugs = () => PRODUCTS.filter(p => onSale(p.slug)).map(p => p.slug);
