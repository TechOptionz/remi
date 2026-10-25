// Disruptive Leadership's sales page (/products/disruptive-leadership, the free introductory program — not the book,
// which is /books/disruptive-leadership), from Remi's copy deck "DISRUPTIVE LEADERSHIP COPY" and the four-part mockup
// "DL MOCKUP PART ONE–FOUR" (Oct 2026). Copy carried over word for word from the deck (the mockups shorten it; the
// deck wins); the layout and pictures follow the mockups. The program is free but not yet open: every "Join the
// waitlist" goes to the rust closing band (#get) with its first name + email form. Component:
// components/dlp-landing/DlpLanding.tsx; styles: styles/dlp-landing.css (.dlp-*); photos cut from the mockups in
// public/assets/dlp-landing/.
import { programOf, type Faq, type LeadItem } from '@/content/program-landing';

export const DLP_SLUG = 'disruptive-leadership';
export const DLP = programOf(DLP_SLUG);

export const HERO_POINTS = [
  'Set expectations people can understand and act on.',
  'Address behaviour that undermines your team.',
  'Recognise when someone needs support, clearer direction or a different role.',
  'Create more room to lead the business beyond today’s problems.',
];

/** "Does any of this sound familiar?" — each opens with the quoted thought in bold. */
export const FAMILIAR: LeadItem[] = [
  { lead: '“It’s quicker if I do it.”', text: 'Delegating creates another job for you: checking, correcting and following up.' },
  { lead: '“We’ve already had this conversation.”', text: 'Everyone agrees in the meeting, then familiar behaviour returns.' },
  { lead: '“They’re good at their job, but …”', text: 'One talented person’s behaviour is costing the rest of the team.' },
  { lead: '“My best people keep picking up the slack.”', text: 'Reliability is being rewarded with more work.' },
  { lead: '“I can’t get to the bigger decisions.”', text: 'Your attention disappears into problems you thought you’d resolved.' },
  { lead: '“This isn’t the culture I wanted.”', text: 'The values sound right. The everyday experience tells a different story.' },
];

export type Reason = { name: string; text: string[]; listLabel: string; list: string[]; after?: string; image: string };
/** "Five reasons to put yourself on this waitlist" — mockup two's numbered rows, each beside a still life. */
export const REASONS: Reason[] = [
  {
    name: 'Stop making yourself the solution to every problem',
    text: ['Each time you take a task back, you may solve today’s issue while reinforcing tomorrow’s dependence.'],
    listLabel: 'Learn to recognise:',
    list: ['Where helping has become habitual rescuing.', 'Which responsibilities keep finding their way back to you.', 'What needs to be clearer before someone can take ownership.'],
    image: 'dlp-r1',
  },
  {
    name: 'Make your standards easier to follow',
    text: ['“Take more initiative” can mean very different things to different people. So can “be professional” or “do a better job.”'],
    listLabel: 'Begin turning vague expectations into:',
    list: ['Observable behaviours people can practise.', 'Clearer criteria for what good work looks like.', 'Feedback that explains the gap and what needs to happen next.'],
    image: 'dlp-r2',
  },
  {
    name: 'Protect your team from behaviour you’ve tolerated for too long',
    text: ['When someone delivers results while dismissing colleagues or ignoring agreed processes, overlooking it sends a message. Your team learns which standards actually count.'],
    listLabel: 'Get clearer about:',
    list: ['The difference between individual talent and contribution to the team.', 'What you reinforce when you reward results regardless of behaviour.', 'Why culture needs to matter in the opportunities you give people.'],
    image: 'dlp-r3',
  },
  {
    name: 'Understand the problem before choosing your response',
    text: ['A new person finding their feet needs a different response from someone repeatedly refusing to take responsibility. A willing person struggling in the wrong role presents another problem again.'],
    listLabel: 'Learn to distinguish between:',
    list: ['Someone who needs training, guidance and encouragement.', 'Someone who needs clear feedback about their behaviour.', 'Someone whose capabilities and role may not be a good match.'],
    after: 'That distinction helps you put your attention where it can be useful.',
    image: 'dlp-r4',
  },
  {
    name: 'Make decisions with the whole business in view',
    text: ['A decision can improve one part of your business while creating strain somewhere else. Leadership requires you to see those connections.'],
    listLabel: 'Explore how your decisions affect:',
    list: ['The culture your team experiences.', 'The experience your customers receive.', 'The promises your marketing makes.', 'Your capacity to innovate and remain worth choosing.'],
    image: 'dlp-r5',
  },
];

export const NOTICING = [
  'Whether the same standards apply to everyone.',
  'Whether asking for help is welcomed or punished.',
  'Whether poor behaviour is excused when someone performs well.',
  'Whether taking responsibility leads to trust or simply more work.',
  'Whether feedback arrives early enough to be useful.',
];

/** "What you’ll explore" — mockup three's numbered rows; the deck's practical questions are italic. */
export const EXPLORE = [
  { name: 'The leadership patterns behind recurring problems', text: 'Look at the relationship between your expectations, your responses and the behaviour that keeps returning.', question: 'What am I doing, allowing or leaving unclear that helps this pattern continue?' },
  { name: 'Culture as an everyday responsibility', text: 'Explore how each person contributes to the working environment, and why being technically capable is only part of being a valuable team member.', question: 'What does contributing positively to our culture actually look like?' },
  { name: 'A more considered response to performance', text: 'Examine the difference between a development need, a behaviour issue and a mismatch between a person and their role.', question: 'What kind of problem am I looking at, and have I responded to it appropriately?' },
];

/** The Four Pillars of Business table. */
export const PILLARS = [
  { name: 'Culture', text: 'How expectations and everyday behaviour shape the way people work together.' },
  { name: 'Customer experience', text: 'What helps people feel valued, connected and willing to return.' },
  { name: 'Marketing', text: 'The value you contribute and the story you invite people to join.' },
  { name: 'Innovation', text: 'How you move beyond familiar approaches and create something worth choosing.' },
];
export const PILLARS_QUESTION = 'How will this decision affect the rest of the business?';

export const COSTS: LeadItem[] = [
  { lead: 'Your time:', text: 'spent checking work that should be owned elsewhere.' },
  { lead: 'Your team’s energy:', text: 'absorbed by avoidable friction and uneven workloads.' },
  { lead: 'Your credibility:', text: 'weakened when a stated standard repeatedly goes unenforced.' },
  { lead: 'Your attention:', text: 'pulled away from customers, opportunities and the future of the business.' },
  { lead: 'Your enjoyment:', text: 'reduced as leadership becomes an endless round of reminders.' },
];

export const FOR_YOU = [
  'You own a business or lead a team.',
  'You’re tired of repeating expectations without seeing enough change.',
  'You want people to take greater responsibility for their work and behaviour.',
  'You care about performance and the experience of working in your team.',
  'You’re willing to examine your own contribution to recurring problems.',
];
export const WILLING = [
  'Question a habit that has become normal.',
  'Give clearer feedback.',
  'Follow through on the standards you set.',
  'Notice when your own response is part of the pattern.',
];

export const FAQ: Faq[] = [
  { q: 'Is the introductory program free?', a: 'Yes. Disruptive Leadership is a free introductory program with Remi Pearson.' },
  { q: 'Do I need a large team?', a: 'No. These patterns can emerge with your first few team members. Clear expectations and constructive behaviour matter at every team size.' },
  { q: 'Is this relevant if I’m a manager rather than the owner?', a: 'Yes. If you influence expectations, give feedback or make decisions about how a team works, the material is relevant to your role.' },
  { q: 'Does “disruptive” mean being confrontational?', a: 'It means being willing to question patterns that have become accepted. That may involve an honest conversation or a firmer standard. You can do both with respect.' },
  { q: 'Is this the Disruptive Leadership book?', a: 'No. This is the free introductory program. The book is a separate resource.' },
];
