// Build Beyond the Founder's sales page (/products/build-beyond-the-founder), from Remi's copy deck "BUSINESS BUNDLE
// SALES COPY" and the four-panel mockup "BUSINESS BUNDLE MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for word
// from the deck (the mockups shorten it; the deck wins; the deck's opening note to Remi is not page copy); the layout
// and pictures follow the mockups. The collection is not on sale yet: every "Join the waitlist" goes to the rust
// closing band (#get) with its name + email form. Component: components/bbf-landing/BbfLanding.tsx; styles:
// styles/bbf-landing.css (.bbf-*); photos cut from the mockups in public/assets/bbf-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';
import { productHref } from '@/content/products';

export const BBF_SLUG = 'build-beyond-the-founder';
export const BBF = programOf(BBF_SLUG);
/** The deck prints the catalogue's AUD $129 struck through beside an offer of $97 (the mockups add "+ GST"; the deck
 *  does not). The catalogue price stays AUD $129 until Remi confirms the offer, so only this page shows $97. */
export const BBF_WAS = BBF.amount;
export const BBF_OFFER = '$97';

/** "Through the programs and their exercises, you’ll work towards:" — mockup two's numbered rows, each beside a photo. */
export const TOWARDS: (LeadItem & { image: string; alt: string })[] = [
  { lead: 'Making your expertise usable by someone else.', text: 'Identify what you do instinctively and begin turning it into something another person can understand, practise and deliver.', image: 'bbf-r1', alt: 'A hand writing notes in a notebook at a wooden table' },
  { lead: 'Handing over responsibility with greater confidence.', text: 'Clarify the outcome, the standard and the authority someone needs, so every decision doesn’t come back for your approval.', image: 'bbf-r2', alt: 'A woman in glasses explaining something to a colleague' },
  { lead: 'Choosing improvements that deserve your attention.', text: 'Separate what needs protecting from what needs strengthening, and recognise where innovation could genuinely help.', image: 'bbf-r3', alt: 'A hand with a pen pointing at a chart on the desk' },
  { lead: 'Recognising how your own thinking affects the business.', text: 'Notice the responses you rely on under pressure and explore what a more resourceful response could make possible.', image: 'bbf-r4', alt: 'A woman in a rust shirt sitting quietly in thought' },
  { lead: 'Building value beyond your personal availability.', text: 'Identify the knowledge, processes and capability that can continue working when you’re elsewhere.', image: 'bbf-r5', alt: 'Books and plants on a shelf in a bright office' },
];

export type Program = {
  /** The program's name as the deck prints it, and the catalogue page it links to. */
  name: string; href: string;
  /** The deck's heading above the program, then its bold line. */
  kicker: string; lede: string;
  text: string[]; gets: string; contents: string;
  icon: 'star' | 'target' | 'sprout'; image: string; alt: string;
};

/** The three programs (mockup three's framed cards). The deck calls the first "Technician to Entrepreneur"; it is the
 *  catalogue's From Practice to Enterprise, which it links to. */
export const PROGRAMS: Program[] = [
  {
    name: 'Technician to Entrepreneur', href: productHref('from-practice-to-enterprise'),
    kicker: 'Start with the work that keeps coming back to you.',
    lede: 'Make your expertise transferable, so delivering value doesn’t always require delivering you.',
    text: [
      'When you’re good at what you do, becoming indispensable can happen almost without noticing. Clients trust you. Your team asks you. You know how to get the result, so doing it yourself often feels easier than explaining it.',
      'This program helps you examine the roles you’re carrying and begin transferring work in a way that protects its quality. You’ll explore how to make your expertise teachable, create processes people can actually use, and give someone responsibility with enough clarity to succeed.',
      'The workbook takes you from identifying a dependency to planning a specific handover. You’ll develop a delivery-transfer plan, a practical process guide and a responsibility agreement, then bring your next steps into a 90-day plan.',
    ],
    gets: 'a clearer route to reducing your involvement in one part of the business, with a way to assess whether capability is genuinely moving beyond you.',
    contents: 'Six self-paced videos, worked examples and an application workbook.',
    icon: 'star', image: 'bbf-p1', alt: 'A woman with a laptop and a man listening across a table',
  },
  {
    name: 'Core, Improve, Innovate', href: productHref('core-improve-innovate'),
    kicker: 'Stop giving every new idea the same claim on your time.',
    lede: 'Know what to protect, what to strengthen and where a new approach belongs.',
    text: [
      'When you can see possibilities everywhere, choosing what deserves attention becomes a business skill in its own right. A new offer can be exciting while an existing service still needs work. A familiar process can feel safe long after it has stopped serving you.',
      'Core, Improve, Innovate gives you a way to think through those choices. You’ll examine what already creates value, where improvement would make a meaningful difference, and where genuine innovation is warranted.',
      'An introduction, a fuller explanation of the model and worked examples help you apply the thinking to your own business. The workbook gives you somewhere to sort competing priorities and decide what to act on next.',
    ],
    gets: 'a more considered use of your time and resources, with clearer reasons for what you pursue and what you leave alone.',
    contents: 'Three self-paced videos and an application workbook.',
    icon: 'target', image: 'bbf-p2', alt: 'Someone writing in a notebook beside a coffee mug and a stack of books',
  },
  {
    name: 'Trust That Holds', href: productHref('trust-that-holds'),
    kicker: 'Understand the thinking you bring to the business you’re building.',
    lede: 'Expand how you respond when the business asks something different of you.',
    text: [
      'You may know how to achieve results and still find yourself taking over when someone works differently. You might value belonging so much that you avoid a necessary conversation, or rely on familiar systems when the situation needs a fresh approach.',
      'The T.R.U.S.T.M.E. Model helps you explore those patterns through Trust, Relatability, Uniqueness, Systems, Tenacity, Meaning and Evolution. You’ll examine how each can be expressed resourcefully, what happens under pressure, and how to draw on a wider range of responses.',
      'The reflective assessment helps you consider your patterns across all seven levels. You’ll then use the workbook to explore a real challenge and choose a development focus you can practise.',
    ],
    gets: 'greater awareness of how you are contributing to a situation, and more choice in how you respond to it.',
    contents: 'Eleven self-paced videos, a reflective self-assessment and an application workbook.',
    icon: 'sprout', image: 'bbf-p3', alt: 'Two people talking at a table with an open notebook and a cup',
  },
];

export const RELEVANT = [
  'Clients rely heavily on your personal expertise.',
  'You have people around you, but too much still comes back to you.',
  'You want to grow without continually expanding your own workload.',
  'You’re beginning to think about the business as an asset, whether or not you ever intend to sell it.',
];

export const FAQ: Faq[] = [
  { q: 'Do I need a team already?', a: 'No. If you’re working alone, you can begin identifying what needs to become teachable and repeatable before someone else takes it on. If you already have a team, you can apply the work to an existing responsibility or handover.' },
  { q: 'Is this only for people who want to sell their business?', a: 'No. You might want more time away, greater delivery capacity or the freedom to concentrate on the parts you enjoy. Reducing dependence on you supports those choices too.' },
  { q: 'Are these different programs from the individual versions?', a: 'They are the same programs brought together in one collection. Choose the bundle if you want to work across founder dependence, business priorities and your own development. If one specific issue has your attention, an individual program may be enough.' },
  { q: 'Is Core, Improve, Innovate also available free?', a: 'Yes. It remains available as a free standalone program and is included here as part of the collection.' },
  { q: 'Does the T.R.U.S.T.M.E. assessment give me a fixed type?', a: 'No. It is a reflective self-assessment to help you explore patterns across the model’s seven levels and identify a useful development focus.' },
  { q: 'Will there be live classes or personal feedback?', a: 'This is a self-paced collection. You can work through the videos and exercises around your existing commitments. Live classes and individual feedback are not included.' },
  { q: 'Can I access the collection now?', a: 'The programs are being created. Join the waitlist and I’ll email you when the collection is ready. Joining does not commit you to buying.' },
];
