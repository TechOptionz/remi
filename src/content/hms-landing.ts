// Holding Space for Magnetic Sales (/products/holding-space-for-magnetic-sales, free), from Remi's copy deck "HOLDING
// SPACE MEGNETIC SALES LANDING PAGE COPY" and the three-part mockup "HOLDING SPACE MAGNETIC (SALES) MOCKUP ONE–THREE"
// (Oct 2026). Copy carried over word for word from the deck (the mockups shorten it; the deck wins); the layout and
// pictures follow the mockups. The introduction is free but not yet open: every "Join the waitlist" goes to the closing
// band (#get) with its name + email form. Component: components/hms-landing/HmsLanding.tsx; styles:
// styles/hms-landing.css (.hms-*); photos cut from the mockups in public/assets/hms-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';
import type { IconName } from '@/components/shared/Icon';

export const HMS_SLUG = 'holding-space-for-magnetic-sales';
export const HMS = programOf(HMS_SLUG);
/** Ultimate Influence, which the deck points to as the complete methodology. */
export const UI_SLUG = 'ultimate-influence-consultative-sales-introduction';

/** "See if any of this feels familiar:" — the mockup's ringed icons; each opens with its bold lead. */
export const FAMILIAR: (LeadItem & { icon: IconName })[] = [
  { icon: 'chat', lead: 'You explain more when someone goes quiet', text: ', because silence feels like a sign you’re losing them.' },
  { icon: 'people', lead: 'You start recommending before you understand', text: ', then spend the conversation trying to make the offer fit.' },
  { icon: 'handshake', lead: 'You give so much help that the invitation disappears', text: ', and a potential client leaves with advice but no clear next step.' },
  { icon: 'ear', lead: 'You rehearse your next response while they’re talking', text: ', missing something that would have changed your recommendation.' },
  { icon: 'scales', lead: 'You justify your price before they question it', text: ', or offer flexibility they haven’t asked for.' },
  { icon: 'waves', lead: 'You finish the call exhausted', text: ', wondering why selling something you believe in takes so much effort.' },
];

/** "You’ll practise how to:" */
export const PRACTISE: LeadItem[] = [
  { lead: 'Recognise when you’re crowding the conversation', text: ', so you can stop adding explanations that make it harder to hear what the buyer needs.' },
  { lead: 'Ask questions that invite meaningful answers', text: ', giving you more to work with than a polite “sounds good”.' },
  { lead: 'Let a pause do its work', text: ', without rushing to rescue the conversation.' },
  { lead: 'Hear what their words mean to them', text: ', so your recommendation responds to their situation.' },
  { lead: 'Stay steady when you name the investment', text: ', giving them time to consider it.' },
  { lead: 'Make a clear invitation', text: ', while remaining open to an honest response.' },
];

/** The three lessons (mockup two's numbered rows beside their photos). */
export const LESSONS = [
  {
    name: 'Whoever fills the space is buying',
    lede: 'Recognise the moments when your enthusiasm starts getting in the way of their interest.',
    text: 'Discover Remi’s energetic-space principle and see how seemingly helpful habits can leave a potential client with little room to participate.',
    learn: [
      'Notice when you’re supplying all the reasons to buy.',
      'Recognise crowding through overexplaining, overhelping and premature recommendations.',
      'Create room for the other person to describe what drew them to you.',
      'Stay engaged and confident while allowing them more of the conversation.',
    ],
    takeaway: 'a clear picture of how you fill the space, and one behaviour to change on your next call.',
    image: 'hms-l1', alt: 'A woman in a rust cardigan explaining something across a table',
  },
  {
    name: 'Hold the space while they discover what matters',
    lede: 'Understand the person more accurately, so you can respond with greater relevance.',
    text: 'Explore how to listen when you’re tempted to impress, advise or prepare your next answer. Practise staying with the other person’s words long enough to understand what they mean.',
    learn: [
      'Follow their answer with a relevant question.',
      'Explore words such as “freedom”, “confidence” or “growth” without assuming you know what they mean.',
      'Reflect back what you’ve heard and give them room to correct it.',
      'Remain present through uncertainty without taking over.',
    ],
    takeaway: 'a five-minute listening exercise and prompts you can adapt to your own sales conversations.',
    image: 'hms-l2', alt: 'A woman listening and gesturing gently as she speaks with a client',
  },
  {
    name: 'Let them move towards you',
    lede: 'See how to hold the space when interest becomes a conversation about working together.',
    text: 'Watch two versions of the same sales conversation. Notice what changes when the seller stops filling every gap and begins responding to what the potential client actually says.',
    learn: [
      'Recognise when the person is expressing their own interest and motivation.',
      'Connect a recommendation to what they’ve told you.',
      'Answer questions about your offer and investment clearly.',
      'Explore hesitation without immediately defending your offer.',
      'Make an invitation and give them room to respond.',
    ],
    takeaway: 'a worked example you can learn from, plus a simple way to review and improve your next enquiry.',
    image: 'hms-l3', alt: 'A smiling woman resting her chin on her hand, listening to someone across from her',
  },
];

/** The six-page practice workbook. */
export const WORKBOOK: LeadItem[] = [
  { lead: 'See the space:', text: 'a visual explanation of the principle, so you can recognise it in your own conversations.' },
  { lead: 'Identify your habits:', text: 'discover where you interrupt, overexplain or rush to help.' },
  { lead: 'Prepare your attention:', text: 'a brief practice to settle your urgency before a call.' },
  { lead: 'Find useful words:', text: 'question prompts and reflective responses to help you listen more closely.' },
  { lead: 'Learn from the demonstrations:', text: 'annotated examples showing what changes when the buyer has more room.' },
  { lead: 'Improve through practice:', text: 'a reusable review sheet to capture what you heard, where you rushed and what you’ll try next.' },
];

export const NOT_FOR = [
  'You want lines to memorise and repeat regardless of what the buyer says.',
  'You’re looking for ways to use silence to make someone uncomfortable enough to agree.',
  // The third item names Ultimate Influence in bold; it is rendered in the component with its link.
  'You’re looking for live coaching or individual feedback. This is a self-paced resource.',
];

export const FAQ: Faq[] = [
  { q: 'Is this really free?', a: 'Yes. Holding Space for Magnetic Sales is a free introduction with three recorded videos and a practical workbook.' },
  { q: 'How much time will I need?', a: 'Allow approximately 30 minutes for the videos. The workbook includes short exercises you can practise with another person and use alongside your next sales conversation.' },
  { q: 'What do you mean by “energetic space”?', a: 'The felt space between you and the person you’re speaking with. You may recognise the difference between a conversation where someone keeps explaining and one where you have room to think and contribute. Remi teaches you how to notice and work with that space in sales.' },
  { q: 'Will this help if I already know how to sell?', a: 'It can give you a useful way to examine habits that are easy to overlook, particularly overexplaining, recommending too quickly and filling pauses. The demonstrations help you see where those habits might show up in your own conversations.' },
  { q: 'Will I learn what to say?', a: 'You’ll receive practical question prompts, reflective responses and example conversations. You’ll also learn why they are useful, so you can respond naturally to the person in front of you.' },
  { q: 'Does holding space mean I stop leading the conversation?', a: 'You still guide the conversation, answer questions and make a recommendation when appropriate. You’ll learn how to do that while giving the potential client room to explain what matters and consider their decision.' },
  { q: 'Do I need to buy Ultimate Influence first?', a: 'No. You can use this introduction on its own. It also gives you a foundation for exploring the complete Ultimate Influence methodology.' },
  { q: 'Is there live teaching?', a: 'No. The videos and workbook are designed for self-paced learning, so you can revisit the examples and practise around your own schedule.' },
  { q: 'What happens when I join the waitlist?', a: 'You’ll register your interest in Holding Space for Magnetic Sales and receive an email when enrolment opens.' },
];
