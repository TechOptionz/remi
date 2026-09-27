// "I've built myself a job. How do I build an asset?" — the sixth rabbit hole from the homepage (/build-an-asset).
// The six patterns are carried over word for word from the copy deck (BUILD — WHAT TO DO WITH THE BOXES, Sept 2026).
// The deck also gives each box a "panel title" for the design's rust panel, which the client asked to leave out.
import { ENTRY_PRICE } from '@/content/home';
import type { Pattern } from '@/content/rabbit-holes';

// The four answers under each pattern, in the order of PATTERN_LABELS
export const PATTERN_LABELS = ['What only I know', 'What only I decide', 'What only I deliver', 'What must become transferable'];

export const PATTERNS: Pattern[] = [
  {
    title: 'Everything important still comes through me',
    panel: ['Founder dependence is rarely caused by lack of effort. It happens when value, decisions, relationships and know-how never become transferable. The founder keeps solving the same problem because the business never learns.'],
    answers: [
      'I hold the history, the context and the unwritten rules that make things work.',
      'Important choices wait for my judgement, even when someone else could make them with the right criteria.',
      'Clients and the team rely on my personal involvement to feel confident in the result.',
      'The knowledge, decision criteria and standards people need to produce a good result without coming through me.',
    ],
  },
  {
    title: 'Sales drop when I stop promoting',
    panel: ['Your visibility creates the demand. When you speak, post or launch, people buy. When you need space, enquiries slow down. The business has an audience, but it has not yet built a reliable way to turn interest into sales without your constant presence.'],
    answers: [
      'I know why people buy, what concerns they have and how to explain the value of the work.',
      'I choose when to promote, what to offer and how each sales conversation moves forward.',
      'My voice and personal relationships generate most of the trust that leads to a sale.',
      'Clear offers, useful content and a sales process that people can follow even when I am not actively promoting.',
    ],
  },
  {
    title: 'My expertise still lives in my head',
    panel: ['You can see what a client needs and adapt your work in the moment. That ability is valuable, but much of it remains invisible to anyone else. Until you make your thinking clear, the business cannot teach, repeat or build on what you know.'],
    answers: [
      'I recognise the patterns, ask the questions and make the distinctions that shape the outcome.',
      'I determine which approach fits each situation, often without having to explain my reasoning.',
      'Clients come to me for an insight or intervention they cannot get from the wider business.',
      'My models, methods, examples and decision criteria, documented well enough for others to learn and apply.',
    ],
  },
  {
    title: 'People need me to make the decisions',
    panel: ['The team brings choices to you because your answer is faster or feels safer. Over time, even capable people stop exercising their own judgement. You become the point every important decision has to pass through.'],
    answers: [
      'I understand the priorities and trade-offs behind decisions that appear simple from the outside.',
      'I settle issues that could sit with a clearly defined role or process.',
      'I give the certainty people need before they act.',
      'Decision rights, clear priorities and examples of how to make a sound call when I am unavailable.',
    ],
  },
  {
    title: 'Delivery depends on my energy and calendar',
    panel: ['The work gets done because you show up, hold the details and give it your best thinking. Clients may love the experience, but there is a limit to how much of you can be scheduled. Your capacity has become the business’s capacity.'],
    answers: [
      'I know how to create the experience and quality clients have come to expect.',
      'I determine how the work is adapted and what happens when something does not go to plan.',
      'My time, attention and energy are needed for much of the promised result.',
      'A defined delivery method, supporting materials and trained people who can uphold the standard.',
    ],
  },
  {
    title: 'The business makes money but would be hard to sell',
    panel: ['Revenue tells you the business has value. A buyer will also want to know whether that value continues when you leave. If relationships, sales and delivery still depend on you, much of what they would be buying could walk out the door with you.'],
    answers: [
      'The relationships, methods and history that explain why customers stay and the business works.',
      'Choices that affect performance but have never been assigned to a role or made part of a process.',
      'The trust, sales or client results that make the revenue possible.',
      'Documented intellectual property, dependable systems, capable leadership and customer relationships held by the business.',
    ],
  },
];

// ---------- From practice to asset ----------
export const STAGES = [
  { name: 'Practice', text: 'You are the value.' },
  { name: 'Intellectual property', text: 'What you know becomes teachable.' },
  { name: 'Business', text: 'The value becomes repeatable through people and systems.' },
  { name: 'Asset', text: 'The value can continue, grow and transfer without you.' },
];

// ---------- What has to become transferable ----------
export const TRANSFERABLE = [
  { icon: 'sparkle', name: 'Expertise', text: 'Turn what you know into a model other people can learn.' },
  { icon: 'route', name: 'Sales', text: 'Turn instinct into a process that can be understood and repeated.' },
  { icon: 'lines', name: 'Delivery', text: 'Make the standard visible, teachable and measurable.' },
  { icon: 'compass', name: 'Decisions', text: 'Replace constant approval with clear principles.' },
  { icon: 'rings', name: 'Relationships', text: 'Build trust in the business, not only in the founder.' },
  { icon: 'branch', name: 'Culture', text: 'Make responsibility and quality part of how the business works.' },
] as const;

// ---------- T.R.U.S.T.M.E. shows where the business is stuck: the business question at each level (names from TRUSTME_LEVELS) ----------
export const BUSINESS_QUESTIONS: Record<number, string> = {
  1: 'Can it survive?',
  2: 'Who belongs?',
  3: 'What makes it distinct?',
  4: 'Can it repeat?',
  5: 'Can it perform?',
  6: 'Why does it matter?',
  7: 'Can the founder step back and the right person lead?',
};

// ---------- Build Beyond You: the founder dependency audit (same $29 entry price as the homepage products) ----------
export const AUDIT_PRICE = ENTRY_PRICE;
export const AUDIT_STEPS = ['Map the founder-dependent points', 'Separate the expertise from the person holding it', 'Identify the IP, systems and decision principles needed', 'Choose the next transfer without building bureaucracy'];
/** "Start the founder dependency audit": the enquiry form preset to Books & programs until the product page exists. */
export const AUDIT_HREF = '/?interest=Products#contact';

// ---------- I did not learn this from a diagram ----------
export const BUILT_STATS = [
  { num: '11,000+', label: 'Coaches trained' },
  { top: 'Nearly', num: '$200M', label: 'In revenue' },
  { num: 'Sold', label: 'In 2024' },
];

// ---------- Conversations to disappear into: each opens the Perspectives archive on its closest topic ----------
export const TOPIC_LINKS = [
  { icon: 'sparkle', title: 'Turning expertise into intellectual property', topic: 'Founders & business' },
  { icon: 'mask', title: 'Founder dependence disguised as quality control', topic: 'Founders & business' },
  { icon: 'layers', title: 'Systems without bureaucracy', topic: 'Founders & business' },
  { icon: 'diamond', title: 'What makes a business valuable beyond revenue', topic: 'Founders & business' },
] as const;
