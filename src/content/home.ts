// Homepage lists that are meant to be swapped often: the six rabbit holes, the three featured Perspectives and the three entry products.
import { CONVERSATIONS } from '@/content/perspectives';

// ---------- Which rabbit hole: the six painted cards. Each gets its own page as it is built (/i-know-better, /loving-someone, /tell-me-the-truth, /leadership, /ultimate-influence, /build-an-asset) ----------
export const RABBIT_HOLES: { tone: string; href: string; title: string; text: string }[] = [
  { tone: 'rust', href: '/i-know-better', title: 'I know better. Why do I still keep doing this?', text: 'Patterns, triggers and protective responses that insight alone has not changed.' },
  { tone: 'blush', href: '/loving-someone', title: 'Why does loving someone bring all my shit to the surface?', text: 'Attachment, boundaries, conflict, intimacy and the moments you leave yourself.' },
  { tone: 'paper', href: '/tell-me-the-truth', title: 'Tell me the truth. What am I not seeing?', text: 'Decisions, contradictions and stories that keep your life out of alignment.' },
  { tone: 'coal', href: '/leadership', title: 'How do I lead without carrying everybody?', text: 'Leadership, accountability, culture, holding space and honest conversations.' },
  { tone: 'gold', href: '/ultimate-influence', title: 'How do I sell without scripts, pressure or bullshit?', text: 'Consultative sales, ethical influence, presenting and moving a room.' },
  { tone: 'oxblood', href: '/build-an-asset', title: 'I’ve built myself a job. How do I build an asset?', text: 'Turn expertise into intellectual property and build beyond the founder.' },
];

// ---------- Featured Perspectives: the first entry is the large card. `title` overrides the archive title on the homepage ----------
const FEATURED: { id: string; title: string }[] = [
  { id: 'schwartz', title: 'An Exploration of Internal Family Systems Therapy' },
  { id: 'richo', title: 'Relationships: Should I Stay or Should I Go?' },
  { id: 'gerber', title: 'The Importance of Looking Outward' },
];
export const HOME_PERSPECTIVES = FEATURED.map(f => {
  const c = CONVERSATIONS.find(x => x.id === f.id)!;
  return { ...f, guest: c.guest, href: c.href, image: c.image };
});

// ---------- Entry products. Each opens its own product page; its price comes from content/products.ts ----------
export const ENTRY_PRODUCTS: { tone: 'rust' | 'navy' | 'green'; title: string; text?: string; image: string; alt: string; slug: string }[] = [
  { tone: 'rust', title: 'Why do I keep doing this?', text: 'EIT, trauma-informed emotional integration, protective patterns and IFS-informed parts work.', image: '/assets/home/hm-prod-1.webp', alt: 'Hands writing in a notebook', slug: 'why-do-i-keep-doing-this' },
  { tone: 'navy', title: 'The five paths to a healthy relationship', text: 'A practical introduction to the five paths that support healthier, more connected relationships.', image: '/assets/home/hm-prod-2.webp', alt: 'Two people talking, hands open', slug: 'five-paths-to-a-healthy-relationship' },
  { tone: 'green', title: 'Core, improve, innovate', image: '/assets/home/hm-prod-3.webp', alt: 'A hand sketching a model among sticky notes', slug: 'core-improve-innovate' },
];

// ---------- "Things I've spent years trying to figure out" — the model names in the dark band ----------
export const MODEL_NAMES = ['EIT', 'CAM', 'The Self-Esteem Triad', 'T.R.U.S.T.M.E.', 'Ultimate Influence', 'Disruptive Leadership'];

// ---------- Spotlight: the rotating carousel under the hero. Slides show in this order; `when: false` hides one ----------
// The Selling from Stage mini course: the Spotlight slide opens Selling from Stage Fundamentals ($79, three videos).
export const SFS_MINI_HREF = '/products/selling-from-stage-fundamentals';
export type SpotlightSlide = {
  tone: 'coal' | 'navy' | 'gold' | 'rust' | 'green' | 'oxblood';
  eyebrow: string; title: string; text?: string; cta: string; href: string;
  image: string; alt: string; fit?: 'contain'; bg?: string; multiply?: boolean; pos?: string;
};
export const SPOTLIGHT: (SpotlightSlide | 'article' | 'reviews')[] = [
  { tone: 'coal', eyebrow: 'Speaking', title: 'Explore having Remi speak at your event', cta: 'Invite Remi', href: '/invite-remi', image: '/assets/photos/invite-stage.webp', alt: 'Remi Pearson speaking on stage' },
  { tone: 'navy', eyebrow: 'Critical Alignment Model', title: 'Learn how to lead using the proven model', text: 'Critical Alignment, for leaders.', cta: 'Explore CAM for Leaders', href: '/products/critical-alignment-model-for-leaders', image: '/assets/cam-landing/cml-hero.webp', alt: '' },
  'reviews',
  'article',
  { tone: 'green', eyebrow: 'Selling from Stage', title: 'Want to learn how to sell from stage?', cta: 'Click here', href: SFS_MINI_HREF, image: '/assets/sfs-landing/sfs-speaker.webp', alt: '' },
  { tone: 'oxblood', eyebrow: 'Stay in touch', title: 'Stay in touch with Remi', text: 'Thoughtful ideas, new conversations and the occasional invitation.', cta: 'Subscribe', href: '/subscribe', image: '/assets/photos/remi-pink-jacket.webp', alt: 'Remi Pearson' },
];
// This week's showcased article: the slugs it rotates through, one per week (Monday, Australian eastern time).
// Empty means every article in the library, in order.
export const SHOWCASE_ARTICLES: string[] = [];
