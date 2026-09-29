// The product catalogue (from the product mock-ups in Photos-Images/PRODUCT *.png). Every product has its own page at
// /products/<slug>, "Coming soon" until Remi's sales copy exists: give a product a `body` (paragraphs) and/or a `buyHref`
// and its page shows them instead. Prices are as drawn in the mock-ups.
export type Tone = 'burgundy' | 'navy' | 'green' | 'black' | 'gold' | 'cream';

/** Each rabbit-hole page shows the range for its category; `segment` is the list a sign-up from that page joins. */
export const CATEGORIES = {
  personal: { name: 'Personal change & emotional work', tagline: 'For the patterns you understand perfectly … until emotion takes over.', segment: 'personal-development' },
  relationships: { name: 'Relationships & attachment', tagline: 'Why does loving someone bring all my shit to the surface?', segment: 'relationships' },
  truth: { name: 'Truth & alignment', tagline: 'Tell me the truth … what am I not seeing?', segment: 'personal-development' },
  leadership: { name: 'Leadership & performance', tagline: 'How do I lead without carrying everybody?', segment: 'leadership' },
  influence: { name: 'Influence & consultative sales', tagline: 'How do I sell without scripts, pressure or bullshit?', segment: 'consultative-sales' },
  business: { name: 'Business & enterprise', tagline: 'I’ve built myself a job. How do I build an asset?', segment: 'business' },
  further: { name: 'Go further', tagline: 'Some work needs more room. The fuller recorded programs.', segment: 'personal-development' },
} as const;
export type CategoryId = keyof typeof CATEGORIES;

/** The five lists a visitor can be added to from a page's sign-up (see SegmentCta and /api/lead). */
export const SEGMENTS = [
  { id: 'leadership', label: 'Leadership' },
  { id: 'business', label: 'Business' },
  { id: 'personal-development', label: 'Personal development' },
  { id: 'consultative-sales', label: 'Consultative sales' },
  { id: 'relationships', label: 'Relationships' },
] as const;
export type SegmentId = (typeof SEGMENTS)[number]['id'];

export type Product = {
  slug: string; title: string; text: string; category: CategoryId; tone: Tone;
  price?: string; value?: string;            // bundle: `value` is the individual total, `price` the bundle price
  kicker?: string; bundle?: boolean; cta?: string; also?: CategoryId[];
  body?: string[]; buyHref?: string;          // sales copy and checkout link, once they exist
};

const P = (p: Product) => p;
export const PRODUCTS: Product[] = [
  // Personal change & emotional work
  P({ slug: 'self-esteem-from-the-inside-out', title: 'Self-Esteem from the Inside Out', text: 'The Self-Esteem Triad: boundaries, emotions and needs, including the Fifteen Emotional Needs.', category: 'personal', tone: 'cream', price: 'AUD $29', kicker: 'A powerful place to begin', cta: 'See what’s inside' }),
  P({ slug: 'why-do-i-keep-doing-this', title: 'Why Do I Keep Doing This?', text: 'EIT, trauma-informed emotional integration, protective patterns and IFS-informed parts work.', category: 'personal', tone: 'burgundy', price: 'AUD $29' }),
  P({ slug: 'becoming-conscious', title: 'Becoming Conscious', text: 'See the patterns, stories and protective responses shaping your behaviour.', category: 'personal', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'self-regulation-when-it-matters', title: 'Self-Regulation When It Matters', text: 'Audio guidance for staying connected and capable under emotional pressure.', category: 'personal', tone: 'green', price: 'AUD $29' }),
  P({ slug: 'deep-state-repatterning', title: 'Deep State Repatterning', text: 'Why insight alone does not necessarily change an established pattern.', category: 'personal', tone: 'black', price: 'AUD $29' }),
  P({ slug: 'come-back-to-yourself', title: 'Come Back to Yourself', text: 'Five interconnected programs.', category: 'personal', tone: 'burgundy', bundle: true, cta: 'Explore the bundle' }),
  // Relationships & attachment
  P({ slug: 'five-paths-to-a-healthy-relationship', title: 'The Five Paths to a Healthy Relationship', text: 'Five ways relationships become healthier, more honest and more capable of repair.', category: 'relationships', tone: 'burgundy', price: 'AUD $29', kicker: 'Begin here', cta: 'Explore the five paths' }),
  P({ slug: 'attachment-or-love', title: 'Attachment or Love?', text: 'Understand the difference between attachment activation and genuine connection.', category: 'relationships', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'conflict-repair-and-harmony', title: 'Conflict, Repair and Harmony', text: 'What happens after the rupture matters.', category: 'relationships', tone: 'green', price: 'AUD $29' }),
  P({ slug: 'holding-space-without-rescuing-or-disappearing', title: 'Holding Space Without Rescuing or Disappearing', text: 'Remain present without taking over, collapsing or abandoning yourself.', category: 'relationships', tone: 'black', price: 'AUD $29', also: ['personal'] }),
  P({ slug: 'love-without-losing-yourself', title: 'Love Without Losing Yourself', text: 'The complete relationship pathway. Four programs.', category: 'relationships', tone: 'cream', bundle: true, value: '$116', price: 'AUD $79', cta: 'Explore the bundle' }),
  // Truth & alignment
  P({ slug: 'find-the-gap-in-your-own-life', title: 'Find the Gap in Your Own Life', text: 'Use Critical Alignment to identify what is actually preventing movement.', category: 'truth', tone: 'navy', price: 'AUD $29', kicker: 'Start with the gap', cta: 'Find your gap' }),
  P({ slug: 'when-your-values-and-your-life-stop-matching', title: 'When Your Values and Your Life Stop Matching', text: 'Values alignment for individuals.', category: 'truth', tone: 'burgundy', price: 'AUD $29' }),
  P({ slug: 'safe-or-risky-problems', title: 'Safe or Risky Problems?', text: 'Stop solving the wrong problem.', category: 'truth', tone: 'black', price: 'AUD $29' }),
  P({ slug: 'let-truth-lead', title: 'Let Truth Lead', text: 'Stop negotiating against what you already know.', category: 'truth', tone: 'gold', price: 'AUD $29' }),
  P({ slug: 'find-the-truth-of-the-situation', title: 'Find the Truth of the Situation', text: 'Four programs.', category: 'truth', tone: 'green', bundle: true, value: '$116', price: 'AUD $79', cta: 'Explore the bundle' }),
  // Leadership & performance
  P({ slug: 'disruptive-leadership', title: 'Disruptive Leadership', text: 'Leadership becomes different when we stop rewarding compliance and start expecting responsibility.', category: 'leadership', tone: 'black', price: 'AUD $29', kicker: 'From the bestselling book', cta: 'Explore Disruptive Leadership' }),
  P({ slug: 'the-performance-management-blueprint', title: 'The Performance Management Blueprint', text: 'Performance conversations that create clarity and responsibility.', category: 'leadership', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'your-first-90-days-as-a-leader', title: 'Your First 90 Days as a Leader', text: 'What to establish before habits and expectations harden.', category: 'leadership', tone: 'burgundy', price: 'AUD $29' }),
  P({ slug: 'the-ground-rules-nobody-wrote-down', title: 'The Ground Rules Nobody Wrote Down', text: 'See the written and unwritten rules shaping the culture.', category: 'leadership', tone: 'green', price: 'AUD $29' }),
  P({ slug: 'the-90-day-review', title: 'The 90-Day Review', text: 'A practical process for honest reflection, recalibration and direction.', category: 'leadership', tone: 'cream', price: 'AUD $29' }),
  P({ slug: 'benchmarking-what-good-actually-looks-like', title: 'Benchmarking: What Good Actually Looks Like', text: 'Benchmarking in business and leadership.', category: 'leadership', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'lead-align-and-perform', title: 'Lead, Align and Perform', text: 'Five programs plus Critical Alignment Model for Leaders.', category: 'leadership', tone: 'gold', bundle: true, value: '$195', price: 'AUD $129', cta: 'Explore the bundle' }),
  // Influence & consultative sales
  P({ slug: 'ultimate-influence-consultative-sales-introduction', title: 'Ultimate Influence Consultative Sales Introduction', text: 'A practical introduction to consultative selling without scripts, pressure or manipulation.', category: 'influence', tone: 'black', price: 'AUD $79', kicker: 'The complete introduction', cta: 'Explore Ultimate Influence', also: ['further'] }),
  P({ slug: 'holding-space-for-magnetic-sales', title: 'Holding Space for Magnetic Sales', text: 'Create the conditions for an honest buying conversation.', category: 'influence', tone: 'green', price: 'AUD $29' }),
  P({ slug: 'understand-before-you-prescribe', title: 'Understand Before You Prescribe', text: 'Diagnose what the buyer genuinely needs before offering a solution.', category: 'influence', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'selling-something-intangible', title: 'Selling Something Intangible', text: 'Communicate the value of an outcome people cannot hold in their hands.', category: 'influence', tone: 'burgundy', price: 'AUD $29' }),
  P({ slug: 'move-the-room', title: 'Move the Room', text: 'Ethical influence, stage presentation and creating an emotional buying experience.', category: 'influence', tone: 'gold', price: 'AUD $29' }),
  P({ slug: 'influence-without-pressure', title: 'Influence Without Pressure', text: 'Five programs.', category: 'influence', tone: 'navy', bundle: true, value: '$195', price: 'AUD $129', cta: 'Explore the bundle' }),
  // Business & enterprise
  P({ slug: 'from-practice-to-enterprise', title: 'From Practice to Enterprise', text: 'Turn expertise into intellectual property, systems and an asset that can operate beyond you.', category: 'business', tone: 'black', price: 'AUD $29', kicker: 'The Founder Pathway', cta: 'Build beyond yourself' }),
  P({ slug: 'core-improve-innovate', title: 'Core, Improve, Innovate', text: 'Know what to protect, what to strengthen and where genuine innovation belongs.', category: 'business', tone: 'navy', price: 'AUD $29' }),
  P({ slug: 'trust-that-holds', title: 'Trust That Holds', text: 'The T.R.U.S.T.M.E. Model for building a business people can believe in and grow with.', category: 'business', tone: 'cream', price: 'AUD $29' }),
  P({ slug: 'build-beyond-the-founder', title: 'Build Beyond the Founder', text: 'Four programs.', category: 'business', tone: 'burgundy', bundle: true, value: '$116', price: 'AUD $79', cta: 'Explore the bundle' }),
  // Go further: the fuller recorded programs
  P({ slug: 'untriggerable', title: 'Untriggerable', text: 'Emotional integration, Points of Departure and applying the process to real situations.', category: 'further', tone: 'burgundy', price: 'AUD $197', kicker: 'The complete recorded training', cta: 'Explore Untriggerable' }),
  P({ slug: 'critical-alignment-model-for-leaders', title: 'Critical Alignment Model for Leaders', text: 'Decision-making, leadership and project management through the four CAM dimensions.', category: 'further', tone: 'navy', price: 'AUD $79', cta: 'Explore CAM for leaders', also: ['leadership'] }),
];

export const productBySlug = (slug: string) => PRODUCTS.find(p => p.slug === slug);
export const productHref = (slug: string) => `/products/${slug}`;
export const productsIn = (category: CategoryId) => PRODUCTS.filter(p => p.category === category || p.also?.includes(category));
export const priceLine = (p: Product) => p.bundle
  ? (p.price ? `Individual value ${p.value} · Bundle investment ${p.price}` : 'Bundle pricing to come')
  : (p.price ?? '');
