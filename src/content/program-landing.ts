// Shared by the self-paced program sales pages built from Remi's copy decks and their mockups (EIT Foundations,
// Self-Regulation, Holding Space, Deep State Repatterning, Becoming Conscious): the product facts each page reads, and
// the types of its lists. Each page's copy is in its own content file (eit-landing.ts, sr-landing.ts, …).
import { CATEGORIES, productBySlug } from '@/content/products';

/** What a program page needs from its product: the price as the decks print it ('AUD $49', and '$49' in running copy),
 *  the checkout link once it exists (until then every buy button goes to the closing band, #get), and its sign-up list. */
export function programOf(slug: string) {
  const p = productBySlug(slug);
  if (!p) throw new Error(`No product ${slug}`);
  const price = p.price ?? '';
  return {
    title: p.title, price, amount: price.replace(/^AUD\s*/, ''),
    buyHref: p.buyHref ?? null, ctaHref: p.buyHref ?? '#get', segment: CATEGORIES[p.category].segment,
  };
}
export type ProgramInfo = ReturnType<typeof programOf>;

/** A lesson in "Your five-video program": its paragraphs, then "What you’ll take from it". */
export type Lesson = { name: string; text: string[]; take: string };
/** A list item that opens with a sentence in bold. */
export type LeadItem = { lead: string; text: string };
export type Faq = { q: string; a: string };
export type Testimonial = { quote: string; name: string; program: string };
