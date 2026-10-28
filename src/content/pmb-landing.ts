// The Performance Management Blueprint (/products/the-performance-management-blueprint, AUD $29, coming soon), from
// Remi's copy deck "PERF MGMT LANDING PAGE COPY" and the four-part mockup "PERF MGMT MOCKUP ONE–FOUR" (Oct 2026). Copy
// carried over word for word from the deck (the mockups shorten it; the deck wins); the layout and pictures follow the
// mockups. The program is not on sale yet: every "Join the waitlist" goes to the rust closing band (#get) with its
// first name + email form. Component: components/pmb-landing/PmbLanding.tsx; styles: styles/pmb-landing.css (.pmb-*);
// photos cut from the mockups in public/assets/pmb-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';

export const PMB_SLUG = 'the-performance-management-blueprint';
export const PMB = programOf(PMB_SLUG);

/** "You’ll learn how to:" — mockup two's numbered cards, two across. */
export const LEARN: LeadItem[] = [
  { lead: 'Stop relying on “I thought you understood.”', text: 'Make a good result specific enough that you and your team can recognise it.' },
  { lead: 'Address the right problem.', text: 'Check whether expectations, working conditions, processes or capability are contributing to the gap before deciding what someone needs.' },
  { lead: 'Give direct feedback without making it personal.', text: 'Describe what happened and why it matters, then invite a useful conversation about what needs to change.' },
  { lead: 'Spend less time chasing progress.', text: 'Agree on actions, ownership and follow-up while everyone is still in the conversation.' },
  { lead: 'Recognise contribution more accurately.', text: 'Notice both the results people achieve and how their behaviour affects the people working alongside them.' },
];

/** The four lessons (mockup three's framed boxes with rust numerals). */
export const LESSONS = [
  {
    name: 'Make expectations clear enough to act on',
    so: 'So people can take responsibility without having to guess what you mean.',
    text: [
      '“Be more proactive” might describe your frustration, but it doesn’t tell someone what good performance looks like. You’ll learn to turn broad expectations into observable standards, connect someone’s work to the outcome that matters and check that you genuinely share the same understanding.',
      'We’ll also explore where managing the work and leading the people each matter, so you can provide direction without becoming the person who makes every decision.',
    ],
    work: 'Choose one recurring frustration and turn it into a clear expectation you can discuss with the person responsible.',
  },
  {
    name: 'Find the gap before you decide on the fix',
    so: 'So you stop repeating an intervention that isn’t solving the problem.',
    text: [
      'More training won’t repair an unclear process. Another reminder won’t resolve conflicting priorities. Drawing on the Critical Alignment Model, you’ll learn to look across Environment, Structure, Implementation and People to understand what is contributing to the result you’re seeing.',
      'A practical introduction to benchmarking helps you compare what is happening with what is required. Lead and lag measures help you distinguish the result you want from the activities you can influence now.',
    ],
    work: 'Map one performance gap and identify where your attention is most likely to help.',
  },
  {
    name: 'Say what needs to be said, with clarity and respect',
    so: 'So you can address an issue without burying it in compliments or letting frustration do the talking.',
    text: [
      'You’ll learn to prepare feedback around specific observations, explain the impact and hear the other person’s perspective without losing the point of the conversation. Genuine appreciation has a place of its own. It doesn’t need to become packaging for something difficult.',
      'You’ll also consider your own contribution to the situation. Feedback becomes more useful when the leader is willing to learn as well as speak.',
    ],
    work: 'Prepare a conversation you’ve been postponing, including the evidence, the expectation and the questions you need to ask.',
  },
  {
    name: 'Turn the conversation into shared accountability',
    so: 'So a good discussion leads to something you can actually follow through on.',
    text: [
      'An agreeable conversation can still end with nobody quite sure what happens next. You’ll learn to establish who owns the action, what support is needed and when you’ll check progress together.',
      'The focus is on developing someone’s capacity to deliver, while keeping responsibility with the person doing the work. You’ll also learn to acknowledge progress specifically, so people understand what is working and can repeat it.',
    ],
    work: 'Create a simple action agreement for the situation you’ve worked through.',
  },
];

export const FAQ: Faq[] = [
  { q: 'Is this only for dealing with poor performance?', a: 'No. It also helps you establish expectations earlier, recognise good work and support development. You can use it before an issue becomes a recurring frustration.' },
  { q: 'Is this the same as The 90-Day Review?', a: 'No. This program focuses on everyday performance expectations, feedback and follow-through. The 90-Day Review is a separate program for a structured review at a defined interval.' },
  { q: 'Do I need to have studied the Critical Alignment Model or benchmarking?', a: 'No prior study is required. The relevant ideas are introduced within the program so you can apply them to the situation in front of you.' },
  { q: 'What will I receive?', a: 'Four self-paced videos and one application workbook. You can pause between lessons to prepare your own examples and return to the material when you need it.' },
  { q: 'How much is it?', a: `${PMB.price}. The program is currently being developed. Joining the waitlist requires no payment and doesn’t commit you to purchasing.` },
];
