// Ultimate Influence Foundations (/products/ultimate-influence-foundations, AUD $79 + GST) — the introduction to
// Ultimate Influence, a separate product from the complete program (/products/ultimate-influence-consultative-sales-
// introduction). From Remi's copy deck "ULTIMATE INFLUENCE LANDING PAGE COPY" and the four-part mockup "ULTIMATE
// INFLUENCE MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for word from the deck (the mockups shorten it; the
// deck wins; its opening note to Remi is not page copy); the layout and pictures follow the mockups. Not on sale yet:
// every "Join the waitlist" goes to the burgundy closing band (#get). Component: components/uif-landing/UifLanding.tsx;
// styles: styles/uif-landing.css (.uif-*); photos cut from the mockups in public/assets/uif-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';
import type { IconName } from '@/components/shared/Icon';

export const UIF_SLUG = 'ultimate-influence-foundations';
export const UIF = programOf(UIF_SLUG);
/** "$79" and "$86.90": the price before GST, and with Australia's 10% GST added. */
const amount = Number(UIF.amount.replace(/[^0-9.]/g, ''));
export const UIF_PRICE = UIF.price;
export const UIF_PRICE_INC_GST = `$${(amount * 1.1).toFixed(2)}`;
/** The complete program the deck builds towards. */
export const UI_SLUG = 'ultimate-influence-consultative-sales-introduction';

/** "Inside Foundations, you’ll begin learning how to:" — the mockup's ringed icons, two across. */
export const LEARN: (LeadItem & { icon: IconName })[] = [
  { icon: 'chat', lead: 'Discover the reasons behind the enquiry', text: ', so you can speak to what matters to this person.' },
  { icon: 'sprout', lead: 'Make the value of an intangible offer easier to understand', text: ', especially when you sell expertise, coaching or a service.' },
  { icon: 'ear', lead: 'Recognise when you’re explaining too much', text: ', and return to a conversation the buyer can participate in.' },
  { icon: 'target', lead: 'Connect your recommendation to their priorities', text: ', giving them a clear basis for considering it.' },
  { icon: 'bars', lead: 'Ask for a decision with greater ease', text: ', without apologising for your price or filling every silence.' },
  { icon: 'repeat', lead: 'Review your conversations intelligently', text: ', so each one gives you something useful to practise.' },
];

/** The six lessons; `steps` names the conversation steps a lesson covers (set in bold in the deck). */
export const LESSONS: { name: string; text: string; steps?: string; after?: string; result: string }[] = [
  {
    name: 'Understand what your buyer is really buying',
    text: 'Someone might enquire about a program while hoping for confidence, a sense of belonging or the ability to do something they’ve been putting off. Learn to explore the practical outcome and the personal meaning behind it, without assuming you already know.',
    result: 'You’ll map the motivations your offer might serve and prepare questions that help you discover what is true for the person in front of you.',
  },
  {
    name: 'Create a conversation people want to stay in',
    text: 'Explore the role of warmth, curiosity and holding space. Learn to notice when you’re taking over, rushing to help or talking past an opportunity to understand someone more deeply.',
    result: 'You’ll prepare an opening that gives the conversation direction and helps the buyer feel welcome to speak honestly.',
  },
  {
    name: 'Understand before you recommend',
    text: 'Meet the first four steps: ', steps: 'Connect, Build the Dream, Flip and Match.',
    after: ' Learn how to explore what someone wants, examine the gap between that and their current experience, and establish whether you can help.',
    result: 'You’ll have a structure for discovering fit before you start explaining your offer.',
  },
  {
    name: 'Make your recommendation and invite a decision',
    text: 'Follow the conversation through ', steps: 'Recommend, Backtrack, Close and Future Pace.',
    after: ' Learn to bring the buyer’s priorities together, explain your recommendation and make the invitation clear.',
    result: 'You’ll draft a way to state your offer and investment, ask for a decision and explain what happens next.',
  },
  {
    name: 'Use persuasive language that sounds like you',
    text: 'Explore how the buyer’s own words, well-chosen questions and specific descriptions can make an offer more meaningful. See how seeding introduces relevant possibilities early in a conversation, and how tone and pauses affect the way your words are received.',
    result: 'You’ll practise turning feature-heavy explanations into language that helps someone recognise the value for themselves.',
  },
  {
    name: 'Bring it into your next conversation',
    text: 'Watch the approach come together in a worked example, with explanations of the choices being made along the way. Then prepare to use it with your own offer.',
    result: 'You’ll finish with a conversation plan and a simple review process to help you keep improving through practice.',
  },
];

export const FAQ: Faq[] = [
  { q: 'Do I need sales experience?', a: 'No. The program introduces the approach from the foundations. Having an offer you can apply it to will make the exercises more useful.' },
  { q: 'Will this help if I sell coaching, consulting or another service?', a: 'Yes. The teaching is especially relevant when the value of what you offer needs to be understood through conversation. You’ll practise connecting your service to what the buyer wants to achieve and experience.' },
  { q: 'Will I receive a script?', a: 'You’ll receive a conversation structure, questions and language prompts you can adapt. The worked example helps you hear how the approach comes together, while your workbook helps you develop language appropriate to your offer.' },
  { q: 'How much time will I need?', a: 'The six video lessons total approximately 80 minutes. Allow additional time to complete the exercises and practise. You can work through the program in shorter sessions.' },
  { q: 'Is this the full Ultimate Influence training?', a: 'This is Foundations: an introduction to the psychology, all eight steps and persuasive language, with practical exercises to help you begin. It is designed to give you a coherent starting point at an accessible investment.' },
  { q: 'What happens when I join the waitlist?', a: 'You’ll receive an email when we’re taking applications again, so you can review the details and decide whether to join. There is no payment or purchase commitment when you add your name.' },
];
