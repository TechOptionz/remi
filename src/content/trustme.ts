// Content for the T.R.U.S.T.M.E. Model page (/ideas-models/trustme-model): the lists it renders.
// Headings and body copy live in components/trustme/. Source: "The T.R.U.S.T.M.E. Model" copy deck.
// The seven level names and questions the rest of the site shares live in TRUSTME_LEVELS (content/site.ts).
import { PRODUCTS_HREF } from './ideas';

export const TRUSTME_PAGE_HREF = '/ideas-models/trustme-model';

/** Work with Remi: the leadership-team invitation (invite form, preset to facilitation), the Rebel Yell waitlist,
 *  and the online program, which goes to the enquiry form until its page exists. */
export const TRUSTME_INVITE_HREF = '/invite-remi?invite=Facilitation#invite-form';
export const TRUSTME_WAITLIST_HREF = '/programs#waitlist';
export const TRUSTME_PROGRAM_HREF = PRODUCTS_HREF;

/** The seven levels, bottom (1) to top (7), as lettered on the poster: what each is about and whether it is
 *  I-focused or we-focused. `low` / `high` are the unresourceful and resourceful expressions from the deck. */
export type Level = { num: number; name: string; tag: string; focus: 'I' | 'We'; low: string; high: string };
export const LEVELS: Level[] = [
  { num: 1, name: 'Trust', tag: 'Survival and agency', focus: 'I', low: 'Helplessness', high: 'The intelligent decision to rely on others while we learn' },
  { num: 2, name: 'Relatability', tag: 'Belonging and safety', focus: 'We', low: 'Belonging that requires self-abandonment', high: 'Collaboration without the loss of self' },
  { num: 3, name: 'Uniqueness', tag: 'Power and identity', focus: 'I', low: 'Domination', high: 'The energy required to leave a system that no longer permits truth' },
  { num: 4, name: 'Systems', tag: 'Order and continuity', focus: 'We', low: 'Bureaucracy', high: 'Learning preserved so excellence is not reinvented every day' },
  { num: 5, name: 'Tenacity', tag: 'Achievement and enterprise', focus: 'I', low: 'Exhausting proof that enough is never enough', high: 'Sustainable results' },
  { num: 6, name: 'Meaning', tag: 'Contribution and belonging', focus: 'We', low: 'Righteous agreement without action', high: 'Reliable resources turned toward contribution' },
  { num: 7, name: 'Evolution', tag: 'Functional flow', focus: 'I', low: 'Intellectual distance and analysis paralysis', high: 'The capacity that fits, and the most suitable person leading' },
];

/** The two expressions of every level, from the poster. */
export const EXPRESSIONS = {
  low: { title: 'Unresourceful', text: 'The level controls us through unresolved fear.' },
  high: { title: 'Resourceful', text: 'The level becomes a capacity we can use consciously.' },
};

/** Team clashes that appear personal: how each level experiences its neighbour. */
export const CLASHES = [
  { from: 'Relatability', to: 'Uniqueness', as: 'threatening' },
  { from: 'Uniqueness', to: 'Systems', as: 'suffocating' },
  { from: 'Systems', to: 'Tenacity', as: 'reckless' },
  { from: 'Tenacity', to: 'Meaning', as: 'slow or commercially naive' },
  { from: 'Meaning', to: 'Tenacity', as: 'selfish' },
];

/** The questions of a useful cultural review. */
export const REVIEW_QUESTIONS = [
  'Which thinking does the organisation reward?',
  'Which level dominates under stress?',
  'What capacity is missing?',
  'Is the business attempting to claim a later purpose without building the foundations beneath it?',
];

/** The next problem each level must solve, in order. */
export const NEXT_PROBLEMS = [
  { level: 'Trust', must: 'recover agency' },
  { level: 'Relatability', must: 'permit differentiation' },
  { level: 'Uniqueness', must: 'accept structure' },
  { level: 'Systems', must: 'make room for enterprise' },
  { level: 'Tenacity', must: 'confront the limits of achievement' },
  { level: 'Meaning', must: 'turn its values into functioning reality' },
  { level: 'Evolution', must: 'remain engaged rather than disappearing into complexity' },
];

/** Work with Remi: the three next steps. */
export const WORK_WITH = [
  { text: 'If your leadership team wants to identify the thinking shaping its culture, its blind spots and its next stage of development, bring me in to work with your leadership team.', cta: 'Invite Remi to work with your leadership team', href: TRUSTME_INVITE_HREF },
  { text: 'To take this work further through Rebel Yell, join the waitlist here.', cta: 'Join the Rebel Yell waitlist', href: TRUSTME_WAITLIST_HREF },
  { text: 'To learn the complete model in your own time, purchase the online program on the T.R.U.S.T.M.E. model.', cta: 'Purchase the T.R.U.S.T.M.E. online program', href: TRUSTME_PROGRAM_HREF },
];

/** Further reading, as listed in the deck. */
export const FURTHER_READING = ['Graves (1970)', 'Beck and Cowan (1996)', 'Wilber (2000, 2004)', 'Cacioppe and Edwards (2005)', 'Butters (2015)'];

/** Related ideas. */
export const RELATED = [
  { title: 'The Critical Alignment Model', text: 'Why people come last because people come first.', href: '/ideas-models/critical-alignment-model', cta: 'Explore CAM', art: 'p5-arrow' },
  { title: 'Values Alignment Technique', text: 'Understanding what is driving your life before deciding where to take it.', href: '/ideas-models/values-alignment-technique', cta: 'Explore VAT', art: 'p4-compass' },
  { title: 'Safe Problems, Risky Truths', text: 'What the problem we keep trying to solve may be protecting us from.', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
];
