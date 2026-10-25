// Selling from Stage Fundamentals (/products/selling-from-stage-fundamentals, $79 AUD) — the three-video introduction
// to the pitch structure, a separate product from the full Selling from Stage program (/products/selling-from-stage).
// From Remi's copy deck "SELLING FROM STAGE 79 DOLLAR LANDING PAGE COPY" and the four-part mockup "SFS SMALL PROGRAM
// MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for word from the deck (the mockups shorten it; the deck wins);
// the layout and pictures follow the mockups. Not on sale yet: every "Join the waitlist" goes to the closing band
// (#get). The homepage Spotlight's Selling from Stage slide opens this page (SFS_MINI_HREF in content/home.ts).
// Component: components/sff-landing/SffLanding.tsx; styles: styles/sff-landing.css (.sff-*); photos cut from the
// mockups in public/assets/sff-landing/.
import { programOf, type Faq } from '@/content/program-landing';
import { audOf } from '@/content/otl-landing';

export const SFF_SLUG = 'selling-from-stage-fundamentals';
export const SFF = programOf(SFF_SLUG);
/** The price as the deck prints it: '$79 AUD'. */
export const SFF_PRICE = audOf(SFF.price);

/** The three videos (mockup two's photo rows). */
export const VIDEOS = [
  {
    label: 'Video one', name: 'Before you pitch … know who you’re speaking to.',
    text: [
      'A pitch begins with understanding the people you want to reach and why they would choose to learn from you.',
      'Get a concise introduction to your market, your character match and the connection between what you teach and what you sell. You’ll see why the promise that brings people into the room needs to match the experience and offer that follow.',
    ],
    helps: 'Recognise what needs to be clear before you start writing your pitch, so your invitation speaks to something your audience actually wants.',
    image: 'sff-v1', alt: 'A woman in an audience listening closely, her chin on her hand, while a presenter speaks',
  },
  {
    label: 'Video two', name: 'The eight steps … know what to say and when.',
    text: [
      'Walk through the structure of a pitch, from creating connection to answering questions after the invitation. Learn what each step is there to achieve, with short spoken examples you can adapt to your own offer.',
      'You’ll see how to move into the offer, translate features into benefits, explain the price and tell people exactly how to take the next step.',
    ],
    helps: 'Prepare your pitch in a clear sequence instead of improvising the part of your presentation where you ask people to buy.',
    image: 'sff-v2', alt: 'Someone watching a presenter on a laptop at a desk',
  },
  {
    label: 'Video three', name: 'Hear it together … then make it your own.',
    text: [
      'Watch a condensed example that brings the eight steps together. Hear how the transitions work, how the offer is introduced and how the invitation leads into questions and reassurance.',
      'Then learn a simple way to prepare and rehearse your own version, including what to listen for when you practise aloud.',
    ],
    helps: 'Move from understanding the structure to preparing a first pitch for your own program or service.',
    image: 'sff-v3', alt: 'A smiling woman in a brown jacket listening in a workshop, others taking notes around her',
  },
];

/** The eight steps table (mockup three's framed boxes). */
export const STEPS = [
  { name: 'Create connection', text: 'Help your audience feel understood and give them a reason to listen.' },
  { name: 'Get permission', text: 'Set expectations so the offer feels like an acknowledged part of the presentation.' },
  { name: 'Engage', text: 'Use useful teaching and relatable examples to hold attention.' },
  { name: 'Establish the need', text: 'Connect the problem your audience recognises with the value of your solution.' },
  { name: 'Reveal your offer', text: 'Explain what you’re selling, who it’s for and how it helps.' },
  { name: 'Make the offer compelling', text: 'Bring the benefits, price and terms into a clear buying decision.' },
  { name: 'Invite action', text: 'Tell interested people exactly what to do next.' },
  { name: 'Answer questions and reassure', text: 'Clarify concerns and help people assess whether the offer fits.' },
];

export const STARTING_POINT = [
  'Have a program or service you want to sell through a presentation.',
  'Feel more comfortable teaching than explaining your offer.',
  'Tend to rush the price or leave the invitation until the last minute.',
  'Want to understand the pitch sequence before investing in more detailed training.',
];

/** "What you’ll receive" — the deck's lines under the price. */
export const RECEIVE = [
  'Three focused video lessons with Remi Pearson',
  'An introduction to the eight-step pitch',
  'Spoken examples and a condensed demonstration',
  'Guidance for preparing and rehearsing your own version',
];

export const FAQ: Faq[] = [
  { q: 'Will this help with webinars?', a: 'Yes. The pitch structure applies to online presentations as well as workshops and live events.' },
  { q: 'Will I hear examples of what to say?', a: 'Yes. You’ll hear short examples as the steps are explained, followed by a condensed demonstration showing how the sequence connects.' },
  { q: 'Do I need an offer already?', a: 'You can learn the structure without one, but having a program or service in mind will make it easier to apply the teaching.' },
  { q: 'Is this the full Selling from Stage program?', a: 'No. Fundamentals is a three-video introduction to the pitch structure. The full program explores the wider preparation, design and application in greater depth.' },
  { q: 'Does it include coaching or feedback?', a: 'No. This is self-paced video teaching that you can use to prepare and practise independently.' },
  { q: 'What happens when I join the waitlist?', a: 'You’ll be notified when we’re taking applications again, so you can decide whether you’d like to join.' },
];
