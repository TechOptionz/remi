// Come Back to Yourself's sales page (/products/come-back-to-yourself, the personal-change bundle), from Remi's copy
// deck "COME BACK TO YOURSELF BUNDLE LANDING PAGE" and the four-panel mockup "COME BACK TO YOURSELF BUNDLE MOCKUP"
// (Oct 2026; the files are labelled out of order: the page reads TWO, ONE, THREE, FOUR). Copy carried over word for
// word from the deck (the mockups shorten it; the deck wins; its opening note to Remi is not page copy); the layout
// and pictures follow the mockups. The bundle is not on sale: every "Join the waitlist" goes to the closing band
// (#get) with its name + email form. Prices come from content/products.ts (the bundle and each program), so the
// combined price and the saving follow them. Component: components/cby-landing/CbyLanding.tsx; styles:
// styles/cby-landing.css (.cby-*); photos cut from the mockups in public/assets/cby-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';
import { FREE, priceOf, productBySlug } from '@/content/products';
import type { IconName } from '@/components/shared/Icon';

export const CBY_SLUG = 'come-back-to-yourself';
export const CBY = programOf(CBY_SLUG);

const dollars = (price: string) => Number(price.replace(/[^0-9.]/g, '')) || 0;
const INCLUDED = productBySlug(CBY_SLUG)?.includes ?? [];
/** The four paid programs bought one by one, and what the bundle saves on them ('$136', '$57'). */
export const COMBINED = `$${INCLUDED.reduce((sum, s) => sum + dollars(priceOf(s)), 0)}`;
export const SAVING = `$${dollars(COMBINED) - dollars(CBY.price)}`;

/** "You might recognise some of these moments:" — mockup two's ringed icons. */
export const MOMENTS: { icon: IconName; text: string }[] = [
  { icon: 'chat', text: 'Saying “That’s fine” while knowing it isn’t.' },
  { icon: 'heart', text: 'Feeling guilty for having a need that inconveniences someone.' },
  { icon: 'repeat', text: 'Replaying a conversation long after the other person has moved on.' },
  { icon: 'pair', text: 'Wanting closeness, then pulling away when it becomes available.' },
  { icon: 'armchair', text: 'Knowing you need rest, but feeling uncomfortable whenever you stop.' },
  { icon: 'brain', text: 'Becoming so busy analysing your feelings that you barely experience them.' },
  { icon: 'spiral', text: 'Getting frustrated with yourself for repeating something you understand perfectly well.' },
];

/** "Across this bundle, you’ll learn and practise ways to:" — the mockup's ringed icons, two across. */
export const WAYS: (LeadItem & { icon: IconName })[] = [
  { icon: 'sprout', lead: 'Notice your own response sooner.', text: 'Recognise what you feel before automatically adjusting to everyone else.' },
  { icon: 'chat', lead: 'Ask for what matters.', text: 'Find language for your needs, giving others a clearer opportunity to understand you.' },
  { icon: 'shield', lead: 'Hold a limit through discomfort.', text: 'Explore how to stay with a boundary when guilt or disappointment makes you want to retreat.' },
  { icon: 'layers', lead: 'Understand the conflict behind a familiar pattern.', text: 'Become curious about what feels at risk when part of you resists change.' },
  { icon: 'waves', lead: 'Respond more deliberately under pressure.', text: 'Recognise your signals and explore practices that help you remain available.' },
  { icon: 'eye', lead: 'Be present for more of your life.', text: 'Notice the conversation, the walk or the quiet moment you would otherwise spend somewhere in your thoughts.' },
  { icon: 'heart', lead: 'Meet difficult feelings with greater care.', text: 'Explore what becomes possible when self-criticism stops being your only response.' },
];

export type Program = {
  slug: string; name: string; lede: string; intro: string; explore: LeadItem[]; after: string;
  /** "Individual price: AUD $29", or the deck's line for the free series. */
  price: string; image: string; alt: string;
};
const program = (p: Omit<Program, 'name' | 'price'> & { price?: string }): Program => ({
  ...p, name: productBySlug(p.slug)?.title ?? p.slug,
  price: p.price ?? `Individual price: ${priceOf(p.slug)}`,
});

/** The five programs: 01 and 02 as cards side by side (mockup one), 03–05 as rows beside their photos (mockup three). */
export const PROGRAMS: Program[] = [
  program({
    slug: 'self-esteem-triad',
    lede: 'Take your feelings and needs seriously enough to act on them.',
    intro: 'Explore how emotions, emotional needs and boundaries work together, with your sense of being worthy, lovable and enough at the centre.',
    explore: [
      { lead: 'Your emotional experience', text: ', so you can begin hearing yourself before dismissing what you feel.' },
      { lead: 'The needs beneath your reactions', text: ', giving you clearer language for what matters.' },
      { lead: 'Your boundaries and responsibilities', text: ', helping you recognise what is yours to address and what belongs to someone else.' },
      { lead: 'Applying the whole model to a real situation', text: ', so the learning becomes relevant to a conversation or decision in your own life.' },
    ],
    after: 'The workbook gives you space to work through your experiences. The transcripts let you revisit an idea without searching through a video.',
    image: 'cby-p1', alt: 'A closed notebook and a mug of olive sprigs on a wooden table',
  }),
  program({
    slug: 'why-do-i-keep-doing-this',
    lede: 'Make sense of the part of you that wants change and the part that resists it.',
    intro: 'You can sincerely want to speak honestly and also fear what honesty might cost. You can want to be seen while feeling deeply uncomfortable with the attention. This series introduces the language of parts to help you understand those competing responses.',
    explore: [
      { lead: 'Why knowing better doesn’t settle the conflict', text: ', so you can examine what happens when an intention meets an emotionally difficult moment.' },
      { lead: 'The parts of you that disagree', text: ', giving you a way to understand why two opposing responses can both feel true.' },
      { lead: 'What a pattern may be protecting', text: ', helping you look beneath avoidance, pleasing or withdrawal.' },
      { lead: 'What happens when you turn against yourself', text: ', so you can recognise how criticism becomes part of the struggle.' },
      { lead: 'A different question to begin with', text: ', bringing curiosity to what a protective part is concerned about.' },
    ],
    after: 'This series helps you approach a familiar pattern with more understanding and a clearer starting point for further work.',
    price: 'This introductory series is available free and forms part of the bundle’s learning pathway.',
    image: 'cby-p2', alt: 'Two chairs on a terrace looking out over the sea at sunset',
  }),
  program({
    slug: 'self-regulation-when-it-matters',
    lede: 'Give yourself more room to choose your response.',
    intro: 'When intensity rises, you may feel driven to argue, explain or get an answer immediately. At other times, you may become distant, go blank or struggle to follow what someone is saying.',
    explore: [
      { lead: 'How pressure shows up in your body', text: ', helping you recognise the signals you usually notice too late.' },
      { lead: 'Practices for working with urgency and tension', text: ', so you have options when everything feels as though it must be resolved now.' },
      { lead: 'Ways to respond to withdrawal or disconnection', text: ', helping you discover what supports your return to the moment.' },
      { lead: 'A plan for difficult situations', text: ', including how to pause and come back to what still needs attention.' },
    ],
    after: 'You’ll use the workbook to identify your signals and record what helps. The guided meditation brings the practices into an experience you can revisit.',
    image: 'cby-p3', alt: 'A woman sitting on rocks above the sea, eyes closed, face to the sun',
  }),
  program({
    slug: 'becoming-conscious',
    lede: 'Spend more of your life actually here.',
    intro: 'You’re listening, but also preparing your reply. You’re walking outside, but mentally working through tomorrow. Even a quiet moment can become another opportunity to revisit something that happened hours ago.',
    explore: [
      { lead: 'Noticing your surroundings', text: ', giving you an accessible way to return your attention to where you are.' },
      { lead: 'Becoming aware of bodily sensations', text: ', offering something immediate to notice when thinking has absorbed you.' },
      { lead: 'Observing your thoughts', text: ', so you can begin recognising a story without following it all the way through.' },
    ],
    after: 'You can bring these practices into an ordinary day. A few moments while the kettle boils, a pause before answering or the beginning of a walk can become opportunities to notice more.',
    image: 'cby-p4', alt: 'A woman resting her chin on her hand at a table, looking out of the window',
  }),
  program({
    slug: 'emotion-integration-technique-foundations',
    lede: 'Understand how to approach the feelings you’ve learned to avoid.',
    intro: 'You may know why you withdraw or keep yourself busy. Yet when you try to meet the feeling beneath that response, you become frustrated, numb or critical of yourself. Being told to “have compassion” can feel like another instruction you cannot follow.',
    explore: [
      { lead: 'Your learned relationship with emotion', text: ', helping you understand why some feelings are easier to approach than others.' },
      { lead: 'The protective responses that keep feelings at a distance', text: ', so you can recognise their role without overlooking their consequences.' },
      { lead: 'How EIT approaches compassion when it feels unavailable', text: ', giving you a starting point grounded in your actual experience.' },
      { lead: 'The movement outward and gently inward within EIT', text: ', showing how room around an experience can support a different relationship with it.' },
      { lead: 'What emotional integration means in everyday life', text: ', including being able to feel something without letting it determine everything you do.' },
    ],
    after: 'The demonstration shows the principles coming together. Your workbook helps you connect what you observe with your own experience.',
    image: 'cby-p5', alt: 'A woman in a rust scarf outdoors, eyes closed, smiling into the breeze',
  }),
];
/** Each program's "Your program includes …" line, in the deck's bold. */
export const PROGRAM_INCLUDES: Record<string, string> = {
  'self-esteem-triad': 'Your program includes six videos, a workbook and downloadable transcripts.',
  'why-do-i-keep-doing-this': 'Your program includes five introductory videos.',
  'self-regulation-when-it-matters': 'Your program includes five videos, a workbook and the Returning to Steadiness guided meditation.',
  'becoming-conscious': 'Your program includes three short videos with guided practices.',
  'emotion-integration-technique-foundations': 'Your program includes five teaching videos, a separate guided demonstration with Remi and a workbook.',
};

/** "Learn at a pace that lets you use it." */
export const PACE: LeadItem[] = [
  { lead: 'Recorded videos', text: 'let you learn around your existing commitments.' },
  { lead: 'Workbooks in three programs', text: 'help you connect the ideas with your own situations.' },
  { lead: 'Guided practices and a meditation', text: 'give you experiences to explore alongside the teaching.' },
  { lead: 'An EIT demonstration', text: 'helps you see how the principles come together.' },
  { lead: 'Self-Esteem Triad transcripts', text: 'give you another way to read and revisit that material.' },
];

export const FOR_YOU = [
  'You’re often attentive to other people while your own needs remain difficult to name.',
  'You understand your patterns but struggle to respond differently when something matters.',
  'You want to explore boundaries without losing your capacity for care.',
  'You recognise people-pleasing, overexplaining, withdrawal or harsh self-criticism.',
  'You want practical models and guided experiences you can bring into daily life.',
  'You prefer private, self-paced learning with space to reflect.',
];
export const NOT_FOR = [
  'You’re seeking individual coaching or personalised therapy.',
  'You want practitioner certification or training to facilitate EIT with clients.',
  'You want a quick technique that removes uncomfortable feelings.',
  'Your main aim is to change somebody else’s behaviour.',
];

/** "Your Come Back to Yourself bundle": each included program with its individual price. */
export const BUNDLE_ROWS = INCLUDED.map(slug => {
  const price = priceOf(slug);
  return { slug, name: productBySlug(slug)?.title ?? slug, price: price === FREE ? 'Free introductory series' : price };
});

export const FAQ: Faq[] = [
  { q: 'Do I need previous experience?', a: 'No. The programs introduce their ideas and connect them with everyday experiences. You can begin with a situation you recognise and a willingness to explore it.' },
  { q: 'What if I’ve already done a lot of personal development?', a: 'You may recognise the gap between explaining a pattern and responding differently in the moment. The bundle gives you models, reflective work and guided experiences for exploring that gap in your own life.' },
  { q: 'Is this live or self-paced?', a: 'The programs are self-paced. You can watch the recorded teaching in your own time and revisit it as you practise.' },
  { q: 'Is there a recommended order?', a: 'Begin with the Self-Esteem Triad, then move through Why Do I Keep Doing This?, Self-Regulation When It Matters, Becoming Conscious and EIT Foundations. You can revisit any program when it becomes relevant to something you’re experiencing.' },
  { q: 'What exactly am I saving?', a: `The four paid programs cost ${COMBINED} when purchased individually. The bundle is ${CBY.amount}, saving you ${SAVING}. Why Do I Keep Doing This? remains a free introductory series and is included in the pathway.` },
  { q: 'Does every program include a workbook?', a: 'The Self-Esteem Triad, Self-Regulation When It Matters and EIT Foundations include workbooks. Becoming Conscious includes guided practices within its videos, and Why Do I Keep Doing This? is a five-part video series.' },
  { q: 'Will I learn to facilitate EIT with other people?', a: 'EIT Foundations is for personal understanding. It includes a demonstration of the approach but does not qualify you to facilitate EIT with clients.' },
  { q: 'What happens when I join the waitlist?', a: 'We’ll let you know when we’re taking applications again. You can review the details then and decide whether you’d like to join.' },
];
