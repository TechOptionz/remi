// The Self-Esteem Triad product's sales page (/products/self-esteem-triad), from the six-part design "SELF ESTEEM TRIAD
// LANDING PAGE FINAL" (Oct 2026), copy carried over word for word. Sections in components/triad-landing/, styles in
// styles/landing.css, photos cut from the design in public/assets/triad-landing/. The price comes from the product
// in content/products.ts; until it has a `buyHref` every "Get the Self-Esteem Triad" button goes to the closing band (#get),
// which takes "tell me when it's ready" sign-ups instead of a payment.
import { productBySlug } from '@/content/products';

export const TRIAD_SLUG = 'self-esteem-triad';
const product = productBySlug(TRIAD_SLUG);

/** Checkout link: the product's `buyHref` once it exists. */
export const TRIAD_BUY_HREF = product?.buyHref ?? null;
export const TRIAD_CTA_HREF = TRIAD_BUY_HREF ?? '#get';
/** The design prints the price as "$29 AUD" / "$29": the number from the product's 'AUD $29'. */
export const TRIAD_PRICE = (product?.price ?? 'AUD $29').replace(/^AUD\s*/, '');

export const INCLUDES = ['Six videos with Remi', 'Workbook', 'Downloadable transcripts'];

export const TRIAD_PARTS = [
  { icon: 'heart', title: 'Emotions', text: 'Notice what you feel without immediately judging it or treating every feeling as an instruction.' },
  { icon: 'sprout', title: 'Emotional needs', text: 'Explore what you need, how you learned to respond to those needs, and how to communicate them more clearly.' },
  { icon: 'summit', title: 'Boundaries', text: 'Learn where your responsibility ends and another person’s begins, and how to express your limits while respecting theirs.' },
] as const;

export const CAPABILITIES = [
  { title: 'Catch the automatic yes.', text: 'Notice when you are agreeing freely and when you are trying to prevent disappointment.' },
  { title: 'Hear your emotions earlier.', text: 'Recognise hurt, anger or sadness before dismissing them or waiting for them to become overwhelming.' },
  { title: 'Name the need beneath the reaction.', text: 'Find language for what you need instead of expecting someone to guess.' },
  { title: 'Ask for care more directly.', text: 'Practise expressing a need without turning it into an accusation or an apology for having it.' },
  { title: 'Hold a boundary through discomfort.', text: 'Understand why guilt or pushback can arise, and consider your response without automatically abandoning your limit.' },
  { title: 'Build self-trust through everyday choices.', text: 'Identify a small commitment that supports you and practise following through.' },
  { title: 'Bring the whole Triad into a real situation.', text: 'Connect what you feel, what you need and what you choose to do.' },
];

export const VIDEOS = [
  { name: 'Welcome', lead: 'A different relationship with yourself.', text: 'An introduction to the program, the distinction between confidence and self-esteem, and how to use the learning at your own pace.' },
  { name: 'The Self-Esteem Triad', lead: 'How the model works.', text: 'Explore the connections between emotions, emotional needs and boundaries, with worthy, lovable and enough at the centre.' },
  { name: 'Emotions', lead: 'Learning to hear yourself.', text: 'Notice how you respond to your emotional experience and practise listening without immediately dismissing, judging or acting on it.' },
  { name: 'Emotional needs', lead: 'What matters beneath the feeling.', text: 'Explore your needs, the patterns you use to meet or avoid them, and clearer ways of expressing what matters.' },
  { name: 'Boundaries', lead: 'Staying yourself with other people.', text: 'Understand your limits, distinguish your responsibilities from someone else’s, and explore what happens when expressing a boundary brings discomfort.' },
  { name: 'Bringing it into your life', lead: 'From understanding to practice.', text: 'Apply the whole Triad to a real situation and choose manageable next steps you can return to in everyday life.' },
];

export const MATERIALS = [
  { icon: 'book', title: 'Your workbook', text: 'Reflection questions and space to apply the model to your own experiences.' },
  { icon: 'document', title: 'Downloadable transcripts', text: 'Read the material and revisit the teaching while you work through the exercises.' },
] as const;

export const FAQ = [
  { q: 'Is this for me if I’m already confident?', a: 'It may be. Confidence in a skill can coexist with difficulty expressing a need or honouring a limit.' },
  { q: 'Do I need previous experience?', a: 'No. The program introduces the model and its application.' },
  { q: 'Is it live or self-paced?', a: 'Self-paced, with six recorded videos.' },
  { q: `What does the ${TRIAD_PRICE} include?`, a: 'All six videos, the workbook and downloadable transcripts.' },
  { q: 'Is this a subscription?', a: 'No. One payment.' },
  { q: 'Is this therapy or a professional qualification?', a: 'It is an educational personal development program. It does not include individual therapy or certify you to practise professionally.' },
];

/** "What people say about Remi's work": empty until real testimonials arrive (the design's two boxes are placeholders);
 *  the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: { quote: string; name: string; program: string }[] = [];
