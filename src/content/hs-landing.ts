// Holding Space Without Rescuing or Disappearing's sales page (/products/holding-space-without-rescuing-or-disappearing),
// from Remi's copy deck and the three-page mockup "HOLDING SPACE MOCK UP ONE–THREE" (Oct 2026). Copy carried over word
// for word from the deck (its typo "If you wat" corrected); the layout and pictures follow the mockup.
// Component: components/hs-landing/HsLanding.tsx; styles: styles/hs-landing.css (.hsl-*); pictures in
// public/assets/hs-landing/ (cut from the mockup) and the hero portrait public/assets/wdk-landing/wdk-portrait.webp.
import { programOf, type Faq, type LeadItem, type Lesson, type Testimonial } from '@/content/program-landing';

export const HS_SLUG = 'holding-space-without-rescuing-or-disappearing';
export const HS = programOf(HS_SLUG);

/** "You might recognise yourself here:" — whole sentences, so they render as the card's lead only. */
export const RECOGNISE: LeadItem[] = [
  'You offer advice before someone has finished explaining what is happening.',
  'You feel responsible for making them feel better, and helpless when you can’t.',
  'You reach for “At least…” or “Try to look at the positives” because you don’t know what else to say.',
  'You have heard, “I don’t need you to fix it. I need you to listen.”',
  'Someone’s disappointment feels like an accusation, even when they are trying to let you into their experience.',
  'You become frustrated when they keep struggling with something you think they could resolve.',
  'You agree with things you don’t believe because disagreement feels uncaring.',
  'You take their problems away with you, then feel exhausted or resentful.',
  'You withdraw when a conversation becomes emotional, sometimes without explaining whether you will return.',
].map(lead => ({ lead, text: '' }));

export const PRACTISE: LeadItem[] = [
  { lead: 'Respond when you don’t have an answer.', text: 'Offer something useful when advice cannot resolve what someone is going through.' },
  { lead: 'Listen beyond your first interpretation.', text: 'Find out what matters to them before deciding what the conversation needs.' },
  { lead: 'Understand what support is wanted.', text: 'Check whether they want to be heard, think something through or receive practical help.' },
  { lead: 'Receive hurt without immediately defending yourself.', text: 'Give their experience some room while retaining the opportunity to share your perspective.' },
  { lead: 'Care without carrying every outcome.', text: 'Support someone’s ability to choose rather than quietly taking ownership of their decisions.' },
  { lead: 'Allow emotion without rushing it away.', text: 'Recognise when reassurance, positivity or advice is arriving before understanding.' },
  { lead: 'Set a limit without leaving someone guessing.', text: 'Be clear about your availability and follow through on what you agree.' },
  { lead: 'Repair when you miss the moment.', text: 'Notice that you have interrupted, minimised or taken over, and find your way back into the conversation.' },
];

export const LESSONS: Lesson[] = [
  { name: 'What happens in you when someone else is struggling?',
    text: ['Explore your own responses to another person’s emotion. You might rush to solve, feel pressure to reassure or become impatient when nothing seems to help. You may go quiet because you feel overwhelmed or uncertain.', 'You’ll begin recognising what happens inside you, and how that shapes what the other person receives.'],
    take: 'A clearer understanding of the moments when your discomfort starts directing the conversation.' },
  { name: 'Listening so someone can actually feel heard',
    text: ['Learn how to follow someone’s meaning, reflect what you understand and check whether you have understood them accurately. Explore the difference between silence that allows someone room and silence that leaves them wondering whether you are still with them.', 'You’ll see how small responses can either invite someone to continue or move the conversation away from what they were trying to share.'],
    take: 'Practical ways to communicate attention and understanding without needing a perfect answer.' },
  { name: 'Understanding their feelings without agreeing with everything',
    text: ['What happens when you understand that someone is hurt, but disagree with their explanation? Or when their hurt concerns something you have done?', 'Explore how to acknowledge emotional experience while leaving room for different perspectives, honest disagreement and responsibility for behaviour.'],
    take: 'A way to remain receptive without agreeing automatically or abandoning what you believe.' },
  { name: 'Supporting someone without taking over',
    text: ['Advice can be useful. Timing and permission matter.', 'Learn how to ask what kind of support would help, notice when your suggestions become pressure and leave the other person room to make their own decisions. Explore the frustration that can arise when someone doesn’t take your advice, and what that tells you about the role you have assumed.'],
    take: 'More clarity about what is yours to offer and what belongs to the other person.' },
  { name: 'Staying present without losing yourself',
    text: ['Explore how to communicate your limits, ask for a pause and make a clear agreement about returning. Learn how to recognise when a conversation needs support beyond what you can provide, and how to repair after you have become defensive, started rescuing or withdrawn.'],
    take: 'A more sustainable way to stay involved in difficult conversations, including the ones you don’t handle well at first.' },
];

/** The photo on each video's row, cut from the mockup (hs-v1 … hs-v5); rows alternate sides as drawn. */
export const LESSON_IMAGES = [
  { alt: 'A woman listening, chin in her hand, to someone across from her', width: 390, height: 134 },
  { alt: 'An older man with glasses listening closely', width: 360, height: 131 },
  { alt: 'A woman listening, chin in her hand, as someone talks', width: 347, height: 131 },
  { alt: 'A man explaining something, hands open', width: 360, height: 136 },
  { alt: 'An older woman listening with a gentle smile', width: 372, height: 135 },
];

/** The three practices the mockup draws as icons beside the couple (from PRACTISE). */
export const PILLARS = [
  { icon: 'chat', text: 'Listen beyond your first interpretation' },
  { icon: 'heart', text: 'Care without carrying every outcome' },
  { icon: 'handshake', text: 'Repair when you miss the moment' },
] as const;

export const WORKBOOK = [
  'Identify your usual response when someone becomes upset.',
  'Revisit a conversation and separate what was said from what you assumed.',
  'Explore the difference between acknowledging a feeling and agreeing with an interpretation.',
  'Practise asking what kind of support someone wants.',
  'Clarify your availability, limits and commitments.',
  'Choose a real conversation in which to practise, then reflect on what you noticed.',
];

export const INCLUDES = [
  'Five teaching videos with Remi Pearson',
  'A companion workbook for reflection and practice',
  'Self-paced learning so you can work through the material in your own time',
];

export const FAQ: Faq[] = [
  { q: 'Does holding space mean I should never give advice?', a: 'No. Advice and practical help can be useful and welcome. You’ll explore how to understand what someone needs before offering your solution, and how to check whether they want suggestions. You’ll also look at what happens when advice becomes a way to hurry someone out of a feeling.' },
  { q: 'What if I disagree with what they are saying?', a: 'You can recognise someone’s emotional experience while questioning their interpretation or disagreeing with their decision. The program explores how to make room for understanding without pretending you share a view you don’t hold.' },
  { q: 'What if they are upset with me?', a: 'That is often when listening becomes hardest. You’ll explore how to notice defensiveness and make room for their account of what happened. You can hear the impact of your behaviour, take responsibility where appropriate and still have a perspective of your own.' },
  { q: 'What if I become overwhelmed?', a: 'Your capacity matters too. You’ll learn about communicating a pause, being clear about what you can offer and agreeing on a return where appropriate. You are not being asked to remain endlessly available.' },
  { q: 'Does this mean tolerating harmful behaviour?', a: 'No. Understanding a feeling does not require accepting threats, insults or coercion. You can acknowledge distress and set a boundary around behaviour. Holding space does not obligate you to remain in an unsafe conversation.' },
  { q: 'I already do all the listening. Will this ask me to give even more?', a: 'The program includes looking at over-responsibility, limits and whether the support you offer is sustainable. Learning to hold space does not make a one-sided relationship reciprocal, and it does not remove your need to be heard and supported too.' },
  { q: 'What if I tend to shut down rather than take over?', a: 'The program includes both patterns. You’ll explore what happens when you withdraw, how to communicate your capacity and ways to return to a conversation rather than leave the other person uncertain about where you have gone.' },
  { q: 'Is this different from Self-Regulation When It Matters?', a: 'Yes. Self-Regulation When It Matters focuses on your response to emotional pressure. This program focuses on how you listen and respond to another person, including what happens when their feelings bring up discomfort in you.' },
  { q: 'Is this a professional qualification or therapy training?', a: 'No. This is a focused educational program for everyday conversations and relationships. It does not qualify you to provide therapy or manage someone else’s mental health needs.' },
  { q: `What do I receive for ${HS.amount}?`, a: 'Five teaching videos with Remi and a companion workbook. The program is self-paced, so you can work through the material in your own time.' },
];

/** Two approved, exact quotations about learning with Remi (ideally on listening, emotional presence or relationships),
 *  with name and accurate program or context. Empty until real ones arrive; the section renders nothing while it is
 *  empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
