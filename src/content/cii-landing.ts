// Core, Improve, Innovate's sales page (/products/core-improve-innovate, free), from Remi's copy deck "CORE IMPROVE
// INNOVATE LANDING PAGE COPY" and the three-part mockup "CORE PART ONE" / "CORE MOCKUP PART TWO–THREE" (Oct 2026).
// Copy carried over word for word from the deck (the mockups shorten it; the deck wins); the layout and pictures
// follow the mockups. The program is free but not yet open: every "Join the waitlist" goes to the closing band
// (#get) with its first name + email form. Component: components/cii-landing/CiiLanding.tsx; styles:
// styles/cii-landing.css (.cii-*); pictures cut from the mockups in public/assets/cii-landing/.
import { programOf, type Faq } from '@/content/program-landing';
import type { IconName } from '@/components/shared/Icon';

export const CII_SLUG = 'core-improve-innovate';
export const CII = programOf(CII_SLUG);

/** The dark strip under the hero (mockup one), from the deck's facts about Remi. */
export const STATS: { icon: IconName; figure: string; label: string }[] = [
  { icon: 'bars', figure: '$200M', label: 'Business revenue over 23 years' },
  { icon: 'people', figure: '13,000+', label: 'Coaches trained' },
];

/** "Know what to protect, what to strengthen and where to go next." — mockup two's three numbered columns. */
export const PARTS = [
  {
    name: 'Core', lead: 'Make the work your business depends on reliable.',
    text: [
      'Core is how your business delivers the value people pay for and remains viable. It includes attracting clients, delivering what you promised and collecting the income you’ve earned. It also includes the standards and knowledge that allow other people to do that work well.',
      'When Core is unclear, the owner often becomes the person who catches everything. You explain it again, fix it yourself or step in because it feels quicker. The business keeps moving, but its reliability depends heavily on your availability.',
      'Learn to identify what belongs in your Core, where it is vulnerable and what needs attention before you put more demand through it.',
    ],
  },
  {
    name: 'Improve', lead: 'Make what already works work better.',
    text: [
      'A useful improvement solves an identifiable problem. It could make a handover clearer, reduce mistakes or help a team member deliver a result without needing you beside them.',
      'The judgement comes in knowing what actually needs changing. Sometimes the process needs redesigning. Sometimes nobody is using the process you already have. Buying another platform won’t necessarily resolve that distinction.',
      'Learn to recognise improvements that strengthen the business and examine whether the proposed solution addresses the real difficulty.',
    ],
  },
  {
    name: 'Innovate', lead: 'Give new possibilities a sound business reason to exist.',
    text: [
      'A new offer, market or way of delivering your work can open a future your current business cannot reach. There are times when innovation deserves substantial attention, especially when what used to work is becoming less relevant.',
      'It also requires resources. The time you spend developing something new has to come from somewhere, and your existing clients still need you to deliver.',
      'Learn to examine a new direction with clear questions about demand, timing and what the business can support, while remaining willing to change a Core that no longer serves its future.',
    ],
  },
];

/** The three videos (mockup two's dark band of play rings). */
export const VIDEOS = [
  {
    name: 'Find the Core your business depends on',
    text: 'Look at how your business creates value and what allows it to deliver that value consistently. Examine the role of your standards, systems and people, including the knowledge that may still sit almost entirely with you.',
    benefit: 'a clearer view of what needs protecting or repairing, and where your business is relying on you to compensate for something that hasn’t been properly established.',
  },
  {
    name: 'Decide what is worth improving',
    text: 'Explore how to distinguish a useful improvement from a change that simply creates more work. Look at the evidence behind a recurring problem and consider whether the answer belongs in the process itself, how it is used or the support around it.',
    benefit: 'a more considered way to choose improvements, so effort goes towards a result you can describe and assess.',
  },
  {
    name: 'Know when to innovate',
    text: 'Examine when a new direction deserves attention and how that decision changes with the stage of your business. Explore why an established business might protect a dependable Core, while a business facing a changing market may need to invest much more heavily in what comes next.',
    benefit: 'a way to evaluate new opportunities without automatically chasing them or dismissing them because the current business keeps you busy.',
  },
];

/** "You’ll work through questions including:" — the workbook, with the mockup's ringed icons. */
export const QUESTIONS: { icon: IconName; text: string }[] = [
  { icon: 'lines', text: 'What currently brings clients in, delivers the result they value and turns that work into collected income?' },
  { icon: 'person', text: 'Where does the business depend on me because the process or standard hasn’t been made clear?' },
  { icon: 'search', text: 'Which proposed changes address an evidenced problem?' },
  { icon: 'gear', text: 'What will a new project take away from the work we already need to deliver?' },
  { icon: 'bars', text: 'Is our current Core still capable of supporting the future we want?' },
];

export const RELEVANT = [
  'Pulled between looking after existing clients and developing your next offer.',
  'Regularly rescuing work that should be more dependable.',
  'Considering a new system, hire or project without being clear about the problem it needs to solve.',
  'Leading a team that is busy but unclear about priorities.',
  'Questioning whether what made the business successful is still right for its future.',
];

export const FAQ: Faq[] = [
  { q: 'Is the program free?', a: 'Yes. Core, Improve, Innovate is a free program with three videos and a workbook.' },
  { q: 'Do I need to have a team?', a: 'No. You can apply the model to a business you run yourself. It is also useful when you’re developing a team and need more of the work to happen reliably without your direct involvement.' },
  { q: 'Is this only useful when something is going wrong?', a: 'No. It can help you assess opportunities and allocate attention in a business that is doing well. Growth creates its own decisions about what to preserve and what needs to evolve.' },
  { q: 'Does the model tell me to focus on Core all the time?', a: 'No. The balance changes with the business and its market. Sometimes making the existing business more reliable deserves most of your attention. Sometimes its future depends on developing something different.' },
];
