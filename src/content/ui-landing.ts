// The Ultimate Influence product's sales page (/products/ultimate-influence-consultative-sales-introduction), from the
// six-part design "Ultimate-Influence-Landing-Page-Mockup" (Oct 2026), copy carried over word for word. Sections in
// components/ui-landing/, styles in styles/ui-landing.css on the shared kit in styles/landing.css, photos cut from the
// design in public/assets/ui-landing/. The design's step names (Connect, Build the Dream …) are its own; the Ultimate
// Influence chapter (content/uic.ts) names the steps differently and is left as it is. Price from content/products.ts,
// shown plus GST; buttons go to the closing band (#get) until the product has a `buyHref`.
import { productBySlug } from '@/content/products';

export const UIL_SLUG = 'ultimate-influence-consultative-sales-introduction';
const product = productBySlug(UIL_SLUG);

export const UIL_BUY_HREF = product?.buyHref ?? null;
export const UIL_CTA_HREF = UIL_BUY_HREF ?? '#get';

const amount = Number((product?.price ?? 'AUD $79').replace(/[^0-9.]/g, ''));
export const UIL_PRICE = `$${amount}`;
export const UIL_PRICE_INC_GST = `$${(amount * 1.1).toFixed(2)}`;

export const INCLUDES = ['Eleven videos with Remi', 'Complete eight-step methodology', 'Workbook', 'Example conversations', 'Downloadable transcripts'];
export const CLOSE_INCLUDES = ['Eleven videos', 'Workbook', 'Example conversations', 'Downloadable transcripts'];

export const STEPS = ['Connect', 'Build the Dream', 'Flip the Conversation', 'Match to Needs', 'Recommend', 'Backtrack', 'Close', 'Future Pace'];

export const LEARN = [
  { icon: 'people', text: 'Begin with connection.' },
  { icon: 'chat', text: 'Ask questions that develop understanding.' },
  { icon: 'document', text: 'Recognise the needs your offer must address.' },
  { icon: 'bulb', text: 'Recommend with a clear rationale.' },
  { icon: 'shieldcheck', text: 'Ask for a decision without apologising.' },
  { icon: 'bubble', text: 'Work with hesitation in the conversation.' },
  { icon: 'gear', text: 'Bring consistency to your sales practice.' },
  { icon: 'heart', text: 'Stay connected while discussing money.' },
] as const;

export const VIDEOS = [
  { num: '01', name: 'Introduction', text: 'Understand the approach and how to use it.' },
  { num: '02', name: 'Overview', text: 'See how the sequence develops and why it matters.' },
  { num: '03–10', name: 'Eight dedicated step lessons', steps: true, text: 'Each step has its own video, purpose and application.' },
  { num: '11', name: 'Application and conclusion', text: 'Bring the methodology together for your own offer.' },
];

export const AUDIENCE = ['Coaches', 'Consultants', 'Professional service providers', 'Online marketers', 'Lightworkers', 'Therapists', 'Kinesiologists', 'Practitioners', 'Sales teams'];

export const FAQ = [
  { q: 'Complete methodology?', a: 'Yes. All eight steps, each in its own video.' },
  { q: 'Live or self-paced?', a: 'Recorded videos. Self-paced. Immediate access.' },
  { q: 'Rigid script?', a: 'A clear sequence and purpose, with example conversations.' },
  { q: 'Subscription?', a: `No. One payment of ${UIL_PRICE} AUD + GST (${UIL_PRICE_INC_GST} including GST).` },
  { q: 'Refunds?', a: 'No change-of-mind refunds for this immediate-access digital product. Applicable consumer rights remain unaffected.' },
];

/** "What people say": empty until real testimonials arrive (the design's boxes are "[Testimonial to be added]": one on
 *  confidence and ability to ask, one a specific, attributable sales outcome). Renders nothing while empty. */
export const TESTIMONIALS: { quote: string; name: string; context: string }[] = [];
