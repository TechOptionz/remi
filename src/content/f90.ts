// Content for the First 90 Days page (/ideas-models/first-90-days): the lists it renders.
// Headings and body copy live in components/f90/. Source: "Your First 90 Days as a Leader" copy deck + the poster.
import { PRODUCTS_HREF } from './ideas';
import { REBEL_YELL_HREF } from './cam';

export const F90_PAGE_HREF = '/ideas-models/first-90-days';

/** Continue the work: the Developing Leaders program and the 90-days assessment go to the enquiry form until their
 *  pages exist; the organisation invitation opens the invite form preset to strategic consulting. */
export const F90_PROGRAM_HREF = PRODUCTS_HREF;
export const F90_ASSESSMENT_HREF = PRODUCTS_HREF;
export const F90_INVITE_HREF = '/invite-remi?invite=Consulting#invite-form';

/** The three phases, as lettered on the poster. */
export type Phase = { num: number; days: string; title: string; verbs: string[]; note: string };
export const PHASES: Phase[] = [
  { num: 1, days: 'Days 1–30', title: 'Observe & map reality', verbs: ['Listen', 'Question', 'Notice', 'Trace the work', 'Find the unwritten ground rules'], note: 'Understand the system first.' },
  { num: 2, days: 'Days 31–60', title: 'Interrogate & synthesise', verbs: ['Compare', 'Test assumptions', 'Analyse trust', 'Identify the real gaps'], note: 'A confident opinion is not an observation.' },
  { num: 3, days: 'Days 61–90', title: 'Improve & develop', verbs: ['Align', 'Establish rhythms', 'Strengthen the system', 'Develop leadership capacity'], note: 'Greater impact, stronger systems, happier people.' },
];

/** The CAM lens: the order in which a leader learns to see. */
export const CAM_LENS = ['Purpose', 'Environment', 'Structure', 'Implementation', 'People'];

/** Month one: the questions you are trying to answer. */
export const MONTH_ONE_QUESTIONS = [
  'What is the intended outcome, and what outcome is the system currently producing?',
  'What are the written ground rules, and what does the team actually believe it must do to succeed or stay safe?',
  'Which responsibilities are clear, and where does accountability dissolve between roles?',
  'What is measured, monitored and discussed? What is measured but ignored? What important reality is not measured at all?',
  'How does work flow through the team, and where are the delays, dependencies, repeated errors and decision bottlenecks?',
  'Which processes support people, and which require people to compensate for poor design?',
  'Who contributes thinking, who waits for permission, who dominates, and whose expertise is routinely overlooked?',
  'Where is the team already excellent, and what must not be damaged in the enthusiasm to improve something else?',
];

/** Month three: which model to reach for. */
export const MONTH_THREE_MODELS = [
  { name: 'Critical Alignment Model', use: 'to decide where each intervention belongs.', href: '/ideas-models/critical-alignment-model' },
  { name: 'T.R.U.S.T.M.E.', use: 'to understand the value systems operating within individuals and the group, particularly when one person experiences another person’s order as restriction, enterprise as selfishness or belonging as conformity.', href: '/ideas-models/trustme-model' },
  { name: 'Core, Improve, Innovate', use: 'to distinguish what must be protected, what can be made better and what requires genuinely new thinking.', href: '/ideas-models#part-8' },
  { name: 'Disruptive Leadership', use: 'when the status quo no longer serves the greater good and the team needs the courage to look at the white space rather than rearrange the words already on the page.', href: '/ideas-models/disruptive-leadership' },
];

/** Continue the work: the four next steps, as the deck lists them. */
export const CONTINUE = [
  { lead: 'For leaders ready to work at a deeper strategic level,', cta: 'Join the Rebel Yell waitlist', href: REBEL_YELL_HREF },
  { lead: 'To learn the complete approach in your own time,', cta: 'Purchase the Developing Leaders online program', href: F90_PROGRAM_HREF },
  { lead: 'To examine how you are approaching a new team or leadership role,', cta: 'Access the First 90 Days assessment and checklist', href: F90_ASSESSMENT_HREF },
  { lead: 'To establish a group of leaders in your organisation who know how to develop leaders,', cta: 'Invite Remi to work with your organisation', href: F90_INVITE_HREF },
];

/** Related ideas. */
export const RELATED = [
  { title: 'The Critical Alignment Model', text: 'Why people come last because people come first.', href: '/ideas-models/critical-alignment-model', cta: 'Explore CAM', art: 'p5-arrow' },
  { title: 'The T.R.U.S.T.M.E. Model', text: 'How our values develop and why our best thinking can disappear under pressure.', href: '/ideas-models/trustme-model', cta: 'See the levels', art: 'p6-spiral' },
  { title: 'Disruptive Leadership', text: 'The leadership model for what could be.', href: '/ideas-models/disruptive-leadership', cta: 'Read on', art: 'p7-star' },
];
