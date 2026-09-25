// Content for the Critical Alignment Model page (/ideas-models/critical-alignment-model): the lists it renders.
// Headings and body copy live in components/cam/. Source: "The Critical Alignment Model" copy deck.
import { CAM_PROFILER_HREF, PRODUCTS_HREF } from './ideas';

export const CAM_PAGE_HREF = '/ideas-models/critical-alignment-model';

/** Rebel Yell waitlist (the Programs page form). */
export const REBEL_YELL_HREF = '/programs#waitlist';
/** The CAM Mini Profiler landing page. Disruptive Leadership goes to the enquiry form until its shop link exists. */
export const CAM_PROFILE_HREF = CAM_PROFILER_HREF;
export const DISRUPTIVE_LEADERSHIP_HREF = PRODUCTS_HREF;

/** The five dimensions in sequence, as lettered on the diagram. `line` says which side of the alignment gap each sits on. */
export const DIMENSIONS: { title: string; lead: string; line: 'purpose' | 'above' | 'below' }[] = [
  { title: 'Purpose', lead: 'What are we here to achieve, decide or make possible?', line: 'purpose' },
  { title: 'Environment', lead: 'The context and container', line: 'above' },
  { title: 'Structure', lead: 'The architecture for success', line: 'above' },
  { title: 'Implementation', lead: 'What is actually done', line: 'below' },
  { title: 'People', lead: 'Who enacts and experiences it', line: 'below' },
];

/** The two sides of the alignment gap. */
export const THE_LINE = {
  above: { title: 'Above the line', text: 'Written ground rules · what is available and intended' },
  below: { title: 'Below the line', text: 'Unwritten ground rules · what is expressed and actually happens' },
};

/** The questions a leader's environment answers. */
export const ENVIRONMENT_QUESTIONS = [
  'What are they rewarding without noticing?',
  'What do they make dangerous?',
  'What do they believe a good leader should already know?',
  'What can be discussed in the room, and what has everyone quietly learned to avoid?',
];

/** The questions asked before deciding the problem resides within a person. */
export const PEOPLE_QUESTIONS = [
  'Who needs to be involved?',
  'Who has relevant expertise?',
  'Who is being mentored, and by whom?',
  'Is the leader a bottleneck because every decision must travel back through them?',
  'Has the person been trained to competence, or merely exposed to information?',
  'Are they receiving authority that matches the accountability being placed upon them?',
];

/** The research headline numbers (the 2017 technical handbook). */
export const CAM_RESEARCH = [
  { num: '535', label: 'Professional participants in the normative sample' },
  { num: '4', label: 'CAM domains broadly recovered by factor analysis' },
  { num: '2017', label: 'Technical handbook' },
];

/** Where to begin: the sequence, in order, before the conversation reaches People. */
export const BEGIN_STEPS = [
  'Clarify the Purpose.',
  'Examine the Environment in which the work is occurring.',
  'Look at the Structure, including the resources, sequence, ownership and benchmarks.',
  'Compare what was intended with what is actually being implemented.',
  'Only then are you in a position to have an intelligent conversation about People.',
];

/** Work with the model: the three next steps. */
export const WORK_WITH = [
  { text: 'For senior leaders who want to use CAM to think through a substantial strategic question, join the waitlist for Rebel Yell, my senior-level strategic thinking offer.', cta: 'Join the Rebel Yell waitlist', href: REBEL_YELL_HREF },
  { text: 'To see where your attention naturally goes across the model, complete the CAM mini profile online.', cta: 'Take the CAM mini profile', href: CAM_PROFILE_HREF },
  { text: 'For the fuller leadership application of the model, read my bestselling book Disruptive Leadership.', cta: 'Purchase Disruptive Leadership', href: DISRUPTIVE_LEADERSHIP_HREF },
];

/** Related ideas. */
export const RELATED = [
  { title: 'Values Alignment Technique', text: 'Understanding what is driving your life before deciding where to take it.', href: '/ideas-models/values-alignment-technique', cta: 'Explore VAT', art: 'p4-compass' },
  { title: 'T.R.U.S.T.M.E.', text: 'What operating logic is this person, team or organisation using?', href: '/ideas-models/trustme-model', cta: 'See the levels', art: 'p6-spiral' },
  { title: 'Safe Problems, Risky Truths', text: 'What the problem we keep trying to solve may be protecting us from.', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
];

/* ---------- The CAM Mini Profiler (/ideas-models/critical-alignment-model/mini-profiler) ---------- */

/** "Access the assessment": the online quiz. Goes to the enquiry form until the quiz link exists — paste it here. */
export const CAM_QUIZ_HREF = PRODUCTS_HREF;

/** Part Two: the four dimensions, above and below the line. `icon` is /assets/ideas/cam-mp-<icon>.webp. */
export const PROFILER_DIMENSIONS: { line: 'above' | 'below'; title: string; role: string; icon: string; text: string; question: string }[] = [
  { line: 'above', title: 'Environment', role: 'The Visionary', icon: 'env', text: 'The context and container: purpose, values, beliefs, attitudes, perceptions, attachment, culture and intangible limits.', question: 'What is the world this situation is operating inside?' },
  { line: 'above', title: 'Structure', role: 'The Architect', icon: 'str', text: 'Internal thinking and resources, plus external systems, plans, procedures and manuals.', question: 'What needs to be designed or made visible?' },
  { line: 'below', title: 'Implementation', role: 'The Dynamo', icon: 'imp', text: 'What is actually happening in practice: action, autonomy, focus, follow-through and results.', question: 'What is actually being done?' },
  { line: 'below', title: 'People', role: 'The Collaborator', icon: 'ppl', text: 'The relationships, capability, mentoring, social skill and mindful leadership involved.', question: 'Who needs capability, clarity or support?' },
];

/** Part Three: before you begin. */
export const PROFILER_GUIDANCE: { title: string; icon: string; text: string }[] = [
  { title: 'Keep one real situation in mind', icon: 'clock', text: 'Choose a situation that is actually happening. Answer from what is true now, not how you imagine it, how you prefer it to be, or how you think it should be.' },
  { title: 'Answer as honestly as possible', icon: 'head', text: 'Choose the response that comes to mind first. Do not try to balance your answers or make your profile look good.' },
  { title: 'Answer from your current reality', icon: 'mtn', text: 'Answer based on what you currently are, not what you ideally would like to be. Only claim a behaviour you can recall demonstrating.' },
  { title: 'No right or wrong answers', icon: 'scales', text: 'Be objective and accurate. If you need someone else to prompt you for an example, it probably does not describe you strongly.' },
];
