// The 90-Day Review's sales page (/products/the-90-day-review), from Remi's copy deck "90 DAY REVIEW AND SUCCESS PLAN
// LANDING PAGE" and the four-panel mockup "90 DAY REVIEW MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for word
// from the deck (the mockups shorten it; the deck wins); the layout and pictures follow the mockups. The program is not
// on sale yet: every button goes to the closing waitlist form (#get), and no price is shown (the deck: pricing comes
// with the launch details). Component: components/n90-landing/N90Landing.tsx; styles: styles/n90-landing.css (.n90-*);
// photos cut from the mockups in public/assets/n90-landing/ (low resolution).
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';
import type { IconName } from '@/components/shared/Icon';

export const N90_SLUG = 'the-90-day-review';
export const N90 = programOf(N90_SLUG);
/** The program's full name, as the deck prints it. */
export const N90_NAME = 'The 90-Day Review & Personal Success Plan';

/** The strip under the hero (mockup one). */
export const STRIP = ['3 practical videos', 'Editable templates', 'Worked examples'];

/** "Make your next review worth the time you put into it." — the mockup's ringed ticks, two columns. */
export const BENEFITS: LeadItem[] = [
  { lead: 'Spend less time repeating expectations.', text: 'Agree on what needs to happen, what good work looks like and who owns the next step.' },
  { lead: 'Address performance gaps with greater confidence.', text: 'Use specific examples and clear benchmarks to discuss what needs attention.' },
  { lead: 'Bring your values into everyday decisions.', text: 'Help people understand how their behaviour contributes to the culture you’re building.' },
  { lead: 'Recognise the work you want to see more of.', text: 'Make good performance visible, so people understand what they’re doing well and why it matters.' },
  { lead: 'Know when to help and when to step back.', text: 'Match your support to the person’s capability in each responsibility.' },
  { lead: 'Keep progress moving after the meeting.', text: 'Finish with a Personal Success Plan and a simple rhythm for following through.' },
];

/** The review lens table (mockup three's numbered rows). */
export const LENSES = [
  { name: 'Environment', text: 'Make your vision, values and standards meaningful in the person’s daily work.' },
  { name: 'Structure', text: 'Identify unclear responsibilities, missing systems or bottlenecks that are making success harder.' },
  { name: 'Implementation', text: 'Review delivery against agreed expectations, so the conversation is grounded in what happened.' },
  { name: 'People', text: 'Identify the skills, feedback and support that will help someone become more capable and independent.' },
];

export type Module = { name: string; text: string[]; gives: string; leave: string };
export const MODULES: Module[] = [
  {
    name: 'Prepare for a conversation that matters',
    text: ['Learn how to connect the review to your business vision, translate your values into observable behaviour and prepare evidence from the quarter. You’ll clarify responsibilities and benchmarks, with preparation prompts for both the leader and team member.'],
    gives: 'a clear starting point and a conversation grounded in shared expectations. You spend less time trying to remember what happened and more time discussing what will help the person succeed.',
    leave: 'a prepared review, relevant examples and a clear connection between the person’s role and the business you’re building.',
  },
  {
    name: 'Review performance without losing sight of the person',
    text: [
      'Walk through the review using the Critical Alignment Model. Explore values and cultural contribution, examine systems and responsibilities, review results and discuss capability. You’ll also look at self-management and, where relevant, the person’s leadership of others.',
      'Practical prompts help you recognise contribution, discuss missed expectations and explore differences between your assessment and theirs.',
    ],
    gives: 'a way to be specific about performance and thoughtful about what is causing it. You can address the issue in front of you and choose a response that fits, whether that means clearer expectations, better support or stronger follow-through.',
    leave: 'a completed review that identifies strengths, performance gaps and the changes needed from both the team member and their leader.',
  },
  {
    name: 'Turn the conversation into greater ownership',
    text: [
      'Build the next 90-day Personal Success Plan, with measurable outcomes, clear responsibilities and agreed check-ins. Learn how to adjust your direction and support as someone develops, including which decisions they can own and when they should involve you.',
      'Worked examples show how to develop someone who is learning a responsibility and how to help a capable leader stop taking everyone else’s work back.',
    ],
    gives: 'a practical path towards greater independence. You know where your involvement is useful, and your team member knows what they need to demonstrate to take on more ownership.',
    leave: 'an agreed plan, specific commitments from both of you and the first follow-up booked.',
  },
];

/** The editable pack, with the mockup's ringed line icons. */
export const TEMPLATES: (LeadItem & { icon: IconName })[] = [
  { icon: 'document', lead: 'Preparation guide:', text: 'helps both people arrive with useful examples, so the review starts with substance.' },
  { icon: 'people', lead: '90-Day Review template:', text: 'gives the conversation a clear structure, with space for team member and leader reflections.' },
  { icon: 'target', lead: 'Personal Success Plan:', text: 'turns discussion into measurable commitments with owners, deadlines and agreed support.' },
  { icon: 'bars', lead: 'Monthly check-in page:', text: 'helps you spot progress and address difficulties before the next quarterly review.' },
  { icon: 'clipboard', lead: 'Two completed examples:', text: 'show you the level of detail to aim for and how to turn a concern into an actionable agreement.' },
];

export const IDEAL = [
  'You keep revisiting expectations that never seem to become consistent behaviour.',
  'You want your team to live your values and understand how their role contributes to the bigger picture.',
  'You want to address performance concerns clearly and respectfully.',
  'You have capable people who could take more ownership with the right agreements.',
  'You want a repeatable review process without creating a large administrative project.',
  'You’re willing to examine your own clarity, systems and support alongside your team’s performance.',
];

export const FAQ: Faq[] = [
  { q: 'Do I need to understand the Critical Alignment Model already?', a: 'No. The videos explain the parts you need and show you how to apply them within the review.' },
  { q: 'Can I adapt this to my business?', a: 'Yes. The editable templates allow you to use your own vision, values, responsibilities and performance benchmarks.' },
  { q: 'Is this only for someone who is underperforming?', a: 'No. It also helps you recognise strong contribution, discuss development and agree on greater responsibility with people who are doing well.' },
  { q: 'Can I use it with team leaders?', a: 'Yes. The leadership section explores how they create clarity, develop others and support their team’s results.' },
  { q: 'How much content is there?', a: 'Three focused videos, an editable template pack and two completed examples. The program is designed to help you prepare and use the review in your business.' },
  { q: 'Is this a review after someone’s first 90 days?', a: 'The focus is a recurring quarterly review and plan for the next 90 days. You can also adapt the questions to a newer team member’s responsibilities and stage of development.' },
  { q: 'What happens when I join the waitlist?', a: 'You’ll receive launch details, including pricing and how to access the program when it becomes available. Joining does not commit you to buying.' },
];
