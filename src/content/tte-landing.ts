// Technician to Entrepreneur's sales page (/products/from-practice-to-enterprise — the catalogue's From Practice to
// Enterprise, which the deck and the Build Beyond the Founder bundle call Technician to Entrepreneur), from Remi's copy
// deck "TECHNICIAN TO ENTREPRENEUR PRODUCT LANDING PAGE COPY" and the four-part mockup "TECH TO ENTRE MOCK UP ONE–FOUR"
// (Oct 2026). Copy carried over word for word from the deck (the mockups shorten it; the deck wins); the layout follows
// the mockups. The program is not on sale yet: every "Join the waitlist" goes to the rust closing band (#get) with its
// first name + email form. Component: components/tte-landing/TteLanding.tsx; styles: styles/tte-landing.css (.tte-*);
// the hero photo is cut from the mockup in public/assets/tte-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';

export const TTE_SLUG = 'from-practice-to-enterprise';
export const TTE = programOf(TTE_SLUG);
/** The program's name as the deck prints it. */
export const TTE_NAME = 'Technician to Entrepreneur';

export const HERO_POINTS = [
  'Take time away with fewer things waiting for your return.',
  'Help others deliver to your standards without checking every detail.',
  'Give your team the confidence and authority to make more decisions.',
  'Build value that can continue beyond your personal involvement.',
];

export const PERHAPS = [
  'Finish your day without being the person everyone is waiting on.',
  'Trust someone else to deliver work your customers will value.',
  'Spend time developing the business instead of constantly keeping it moving.',
  'Stop taking back responsibilities you thought you’d handed over.',
  'Know that what you’ve built has value beyond your ability to keep showing up.',
];

/** "Five reasons to begin" — mockup two's numbered rows. */
export const REASONS = [
  { name: 'Get more choice about how you spend your week', text: 'Identify the work that keeps you tied to delivery and the responsibilities someone else could begin carrying. Create room for the contribution you want to make, alongside a life outside the business.' },
  { name: 'Let your expertise reach further than your diary allows', text: 'When someone else can learn your method and deliver it well, your capacity is no longer limited entirely by your personal availability. Begin turning what you know into something others can use.' },
  { name: 'Make handing over feel less like gambling with your reputation', text: 'Understand how to define quality, develop capability and review progress. Give yourself a more grounded basis for trusting the work to someone else.' },
  { name: 'Reduce the questions and decisions that keep interrupting you', text: 'Help people understand what they own, what they can decide and when they need support. Make it easier for them to move work forward without checking every step.' },
  { name: 'Give yourself more options for what comes next', text: 'Retain ownership with a different role. Spend more time creating. Prepare for a possible future sale. Start building the transferable capability that can support those choices.' },
];

/** The two dates and the figure in Remi's story (mockup two's strip). */
export const STORY_FIGURES = [
  { figure: '2014', label: 'Stepped out of day-to-day management' },
  { figure: 'Approximately $200M', label: 'Cumulative business revenue during ownership' },
  { figure: '2024', label: 'Successfully exited' },
];

export type Module = { lede: string; text: string[]; learn: string[]; takeaway: string };
/** The six modules (mockup three's framed cards). */
export const MODULES: Module[] = [
  {
    lede: 'Stop letting daily delivery consume the future you’re trying to build.',
    text: [
      'You can finish a busy week having done everything your customers needed and almost nothing that makes the business less dependent on you. This module helps you see where that pattern begins and decide what deserves more of your attention.',
      'Using the four roles of technician, manager, business builder and investor, you’ll examine how you currently spend your time and how your contribution needs to evolve.',
    ],
    learn: [
      'Recognise work you keep because you’re good at it, even when it keeps you overcommitted.',
      'Identify business-building responsibilities that get pushed aside by immediate demands.',
      'Decide which parts of your role you want to retain and which you want to develop elsewhere.',
      'Choose a realistic starting point for changing your working week.',
    ],
    takeaway: 'A map of your current role and clear priorities for creating more time for the work that moves the business forward.',
  },
  {
    lede: 'Help someone else deliver the work customers currently rely on you for.',
    text: [
      'If customers come specifically for you, stepping back can feel impossible. This module helps you examine what makes your work effective and how another person could learn to deliver part of that value.',
      'Remi draws on her experience of replacing herself in training and content delivery to show how expertise can become teachable.',
    ],
    learn: [
      'Identify the method and judgement behind what you do naturally.',
      'Explain what excellent delivery looks like so someone else can work towards it.',
      'Develop capability through demonstration, practice and feedback.',
      'Choose a part of your delivery to transfer without trying to replace yourself everywhere at once.',
    ],
    takeaway: 'A practical plan for helping another person carry a piece of work that currently requires your presence.',
  },
  {
    lede: 'Stop explaining the same things and fixing the same avoidable mistakes.',
    text: [
      'When important knowledge lives in your head, people have to keep coming back to you. This module helps you turn recurring work into guidance others can understand and use.',
      'You’ll learn how to capture enough of your thinking to support good work, including what to do when a situation doesn’t follow the usual pattern.',
    ],
    learn: [
      'Choose which recurring activities would save the most repeated explanation.',
      'Make the intended result and quality standard clear.',
      'Capture the decisions behind the steps, so people understand why they matter.',
      'Test a process with the person using it and improve what isn’t working.',
    ],
    takeaway: 'One usable process guide and a method for making more of your business’s knowledge accessible to others.',
  },
  {
    lede: 'Hand over responsibility without having it land straight back in your lap.',
    text: [
      'You may have delegated plenty of tasks while remaining responsible for every decision around them. This module helps you give people clearer ownership and the support to carry it.',
      'Examine what makes a handover work, why some handovers fail and how to review progress without becoming the default rescuer.',
    ],
    learn: [
      'Define the outcome someone owns, beyond a list of activities.',
      'Make their decision-making authority explicit.',
      'Identify whether they need clearer expectations, more skill or better support.',
      'Give feedback that develops their capability rather than pulling the work back to you.',
    ],
    takeaway: 'A responsibility agreement that helps someone understand what they can own, what good looks like and when to involve you.',
  },
  {
    lede: 'Build value that doesn’t disappear when you step away.',
    text: [
      'Your business may earn well while remaining heavily dependent on your personal effort. This module helps you look at what another owner could continue using or developing if your involvement changed.',
      'Drawing on introductory strategic-exit thinking, you’ll begin examining the capabilities and assets that could make your business transferable.',
    ],
    learn: [
      'Recognise value in your intellectual property, systems, relationships and team capability.',
      'Identify where that value is still tied too closely to you.',
      'Consider who could benefit from what you’ve built and why.',
      'Use a future-owner perspective to make more deliberate decisions today.',
    ],
    takeaway: 'An initial inventory of transferable value, with a clearer picture of what needs strengthening to support your future choices.',
  },
  {
    lede: 'Make one meaningful change in the next 90 days.',
    text: [
      'Knowing you need to step back is different from knowing what to do on Monday. This module helps you choose a specific responsibility and plan how to transfer it.',
      'Worked examples show how to connect documentation, training and handover, then assess whether the change is actually reducing dependence on you.',
    ],
    learn: [
      'Choose a starting point that is manageable and worth the effort.',
      'Plan who will carry the responsibility and what support they need.',
      'Set milestones so the handover keeps moving.',
      'Recognise progress through observable results, including fewer avoidable interventions from you.',
    ],
    takeaway: 'Your own 90-day action plan, with a clear first step and a way to judge whether it’s working.',
  },
];

/** "By completing the exercises, you’ll develop:" */
export const DEVELOP: LeadItem[] = [
  { lead: 'A clearer role for yourself', text: ', so you can see what to keep and what to begin transferring.' },
  { lead: 'A plan for transferring part of your delivery', text: ', so your expertise can be used by someone else.' },
  { lead: 'A process people can follow', text: ', reducing the need for repeated explanations.' },
  { lead: 'An agreement about responsibility and authority', text: ', helping someone act with greater confidence.' },
  { lead: 'A clearer picture of transferable value', text: ', informing what you build next.' },
  { lead: 'A 90-day implementation plan', text: ', so the learning has somewhere to go.' },
];

export const RELEVANT = [
  'You run a consulting, coaching, training or other service business.',
  'You are still central to delivering what customers buy.',
  'You have a team but remain the person who makes most of the decisions.',
  'You want consistent standards without supervising everything.',
  'You want more time for strategy, creating new work or enjoying your life.',
  'You would like the option of changing your involvement or eventually selling.',
];

export const INCLUDES = [
  'Six self-paced video modules',
  'A practical workbook with six application exercises',
  'Worked examples',
  'Your 90-day action plan',
];

export const FAQ: Faq[] = [
  { q: 'What if people buy because of me?', a: 'That is exactly why Module Two matters. You’ll examine what customers value in your work and what someone else would need to learn to deliver part of it. Remi’s transition from a guru model to other people carrying the training provides a concrete example.' },
  { q: 'I’ve tried delegating. Why would this be different?', a: 'You’ll look at the whole handover, including capability, standards, authority and feedback. That gives you a way to identify what was missing and improve the conditions for someone else to succeed.' },
  { q: 'Do I need managers already?', a: 'No. You can begin with one recurring activity or part of your delivery. Remi replaced herself as the talent before putting management in place.' },
  { q: 'Do I have to want to sell?', a: 'No. You may want to keep the business and enjoy a different role within it. The program helps you begin building capability that supports more choice.' },
  { q: 'I’m already busy. How do I fit this in?', a: 'The program is self-paced, and you can apply it to one responsibility at a time. Choose a recurring demand on your attention and use the exercises to work towards a more sustainable way of handling it.' },
  { q: 'What is included?', a: 'Six recorded video modules with Remi, a practical workbook with an exercise for each module, worked examples and your 90-day planning exercise.' },
  { q: 'Will Remi review my business?', a: 'Individual feedback and live coaching are not included in this self-paced program.' },
  { q: 'Will this teach me the entire business-sale process?', a: 'The focus is on changing your role, transferring expertise and developing business capability. Strategic-exit thinking is introduced to help you understand what could make the business valuable beyond your own involvement.' },
];
