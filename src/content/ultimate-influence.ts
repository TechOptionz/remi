// "How do I sell without scripts, pressure or bullshit?" — the fifth rabbit hole from the homepage (/ultimate-influence).
// Built from the three ULTIMATE INFLUENCE design screenshots (13–15); there was no copy deck and no pattern boxes for this
// page, so the copy is transcribed from the designs and the hero reuses the homepage card's title and line.
import { ENTRY_PRICE } from '@/content/home';

// ---------- Meet Ultimate Influence: the conversation has four responsibilities ----------
export const RESPONSIBILITIES = [
  { name: 'Understand before explaining', text: 'What are they trying to change and why does it matter?' },
  { name: 'Diagnose before prescribing', text: 'What is producing the gap and is your offer actually appropriate?' },
  { name: 'Make value visible', text: 'What becomes possible if the right change occurs?' },
  { name: 'Recommend clearly', text: 'Say what you believe would serve them and let the decision remain theirs.' },
];

// ---------- Ethical does not mean passive ----------
export const ETHICAL = [
  { icon: 'ear', name: 'Listen without disappearing', text: 'Curiosity is not an excuse to avoid saying what you see.' },
  { icon: 'northstar', name: 'Challenge without coercing', text: 'Help them examine the story, cost and consequence without creating fear.' },
  { icon: 'door', name: 'Invite a decision without attachment', text: 'Make the recommendation clear. Leave ownership where it belongs.' },
] as const;

// ---------- The same principles. Different rooms. ----------
export const ROOMS = [
  { icon: 'bubble', name: 'One conversation', text: 'Diagnose before you prescribe.' },
  { icon: 'document', name: 'An offer page', text: 'Make intangible value visible before listing features.' },
  { icon: 'mic', name: 'A stage', text: 'Move the room towards a quality decision, not merely applause.' },
  { icon: 'headphones', name: 'A podcast', text: 'Create desire through depth, not a disguised pitch.' },
] as const;

// ---------- Meet the Ultimate Influence method: the eight-step conversation ----------
export const EIGHT_STEPS = [
  { name: 'Connect', text: 'Help them feel relaxed enough to talk honestly.' },
  { name: 'Build', text: 'Discover what they care about and value.' },
  { name: 'Flip', text: 'Let them get clear on why this matters to them.' },
  { name: 'Match', text: 'Explore whether and how you can genuinely serve them.' },
  { name: 'Recommend', text: 'Agree on fee solution that best fits.' },
  { name: 'Backtrack', text: 'Revisit what matters so the decision feels complete.' },
  { name: 'Close', text: 'Help them commit fully and feel excited.' },
  { name: 'Future pace', text: 'Reassure the decision and make what happens next real.' },
];

// ---------- Why it doesn't feel like bullshit ----------
export const NOT_BULLSHIT = [
  { icon: 'heart', name: 'Make them feel', text: 'Rapport is not small talk. Match their tone, listen deeply and create a conversation they want to stay in.' },
  { icon: 'brain', name: 'Let them do the thinking', text: 'Do not interrupt, over-explain or improve their words. Reflect accurately and let them discover why this matters.' },
  { icon: 'puzzle', name: 'Make the recommendation fit', text: 'Do not become an information booth. Recommend what serves the person in front of you.' },
] as const;

// ---------- The psychology under the conversation ----------
export const PSYCHOLOGY = [
  { icon: 'globe', name: 'Model of the world', text: 'Respect how they make sense of things.' },
  { icon: 'scales', name: 'Law of consistency', text: 'Notice what they have already said matters.' },
  { icon: 'heart', name: 'Secret and admitted desires', text: 'Understand what they want to feel, not only what they say they want.' },
  { icon: 'scribble', name: 'Cognitive dissonance', text: 'Help the decision become coherent with who they believe they are.' },
  { icon: 'ear', name: 'Needs and thinking styles', text: 'Use language the individual can actually hear.' },
  { icon: 'shieldcheck', name: 'Reassurance', text: 'People need to know they have thought it through.' },
] as const;

// ---------- The Ultimate Influence Fast Start Guide (same $29 entry price as the homepage products) ----------
export const GUIDE_PRICE = ENTRY_PRICE;
export const GUIDE_STEPS = ['The complete eight-step conversation map', 'Questions and language prompts for every stage', 'How to diagnose, match and recommend', 'How to backtrack, close and future pace naturally'];
/** "Start with Ultimate Influence": the enquiry form preset to Books & programs until the product page exists. */
export const GUIDE_HREF = '/products/ultimate-influence-consultative-sales-introduction';

// ---------- Especially when what you sell is hard to hold ----------
export const HARD_TO_HOLD = [
  { icon: 'eyeoff', text: 'A service they cannot inspect before buying' },
  { icon: 'bars', text: 'A transformation that is hard to measure' },
  { icon: 'chat', text: 'Expertise that sounds like everybody else’s' },
  { icon: 'chair', text: 'An idea sold from a stage, page or conversation' },
] as const;

// ---------- Conversations to disappear into: each opens the Perspectives archive on its closest topic ----------
export const TOPIC_LINKS = [
  { icon: 'heart', title: 'Why people buy feelings, not products', topic: 'Founders & business' },
  { icon: 'scales', title: 'The difference between influence and pressure', topic: 'Ideas & meaning' },
  { icon: 'spiral', title: 'Selling intangible outcomes', topic: 'Founders & business' },
  { icon: 'people', title: 'How to move a room without manipulating it', topic: 'Founders & business' },
] as const;
