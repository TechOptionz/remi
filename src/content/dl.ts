// Content for the Disruptive Leadership page (/ideas-models/disruptive-leadership): the lists it renders.
// Headings and body copy live in components/dl/. Source: "Disruptive Leadership" copy deck + the model diagram.
import { DISRUPTIVE_LEADERSHIP_HREF, REBEL_YELL_HREF } from './cam';
import { TRUSTME_INVITE_HREF } from './trustme';

export const DL_PAGE_HREF = '/ideas-models/disruptive-leadership';

/** The five movements, in cycle order, with the practices lettered on the diagram. */
export type Movement = { num: number; name: string; tag: string; note: string; points: string[] };
export const MOVEMENTS: Movement[] = [
  { num: 1, name: 'See', tag: 'See what could be', note: 'Possibility begins with a different question.',
    points: ['Look to the white space', 'Question assumptions', 'Imagine what’s possible', 'Be willing to challenge your own thinking'] },
  { num: 2, name: 'Align', tag: 'Align what must be true', note: 'Good intentions need a well-aligned system.',
    points: ['Examine the whole system', 'Identify friction and bottlenecks', 'Distinguish Core, Improve, Innovate', 'Ensure the right people are in the right roles'] },
  { num: 3, name: 'Mobilise', tag: 'Enable and expect everyone’s best contribution', note: 'Great results come from people who bring their best.',
    points: ['Create clarity and shared responsibility', 'Build a culture of truth, not false harmony', 'Use individual strengths (including personality differences)', 'Enable graceful inclusion and graceful exit', 'Expect everyone to contribute to the culture'] },
  { num: 4, name: 'Deliver', tag: 'Achieve the result while improving the system', note: 'The result is never just the result.',
    points: ['Focus on the outcome', 'Assess and improve the systems that produce it', 'Question whether systems remain fit for purpose', 'Remove unnecessary complexity', 'Learn from what worked and what didn’t'] },
  { num: 5, name: 'Evolve', tag: 'Turn experience into greater capacity', note: 'A great result leaves us more capable.',
    points: ['Capture what we’ve learned', 'Build individual, team and organisational capability', 'Strengthen what works', 'Stop what no longer serves', 'Increase our capacity for what’s next'] },
];

/** The purpose at the centre of the cycle. */
export const PURPOSE = 'Achieve a result in a way that includes the graceful inclusion of everybody, whilst increasing the capacity of the people and systems responsible for producing it.';

/** The five movements as the deck lists them. */
export const MOVEMENT_LINES = [
  { name: 'See', text: 'See what could be' },
  { name: 'Align', text: 'Align what must be true to make it possible' },
  { name: 'Mobilise', text: 'Enable and expect everyone’s best contribution' },
  { name: 'Deliver', text: 'Achieve the result while assessing, supporting and improving the systems that produce it' },
  { name: 'Evolve', text: 'Convert experience into greater individual, collective and organisational capacity' },
];

/** What every project, initiative, success and failure becomes an opportunity to ask. */
export const EVOLVE_QUESTIONS = [
  'What did we learn?',
  'What did we discover about ourselves and each other?',
  'What assumptions proved wrong?',
  'What worked that we should repeat?',
  'What would we do differently next time?',
  'What capability have we developed?',
  'What difficult conversation can we now have that we couldn’t have before?',
  'What should now become part of Core?',
  'What should we improve?',
  'What are we now ready to disrupt?',
];

/** What a great result should leave behind, from the foot of the diagram. */
export const LEAVES_BEHIND = [
  { title: 'Better results', q: 'What became possible because we led?' },
  { title: 'Stronger people', q: 'How did people grow through the experience?' },
  { title: 'More capable systems', q: 'How did the systems improve?' },
  { title: 'What’s next', q: 'What can we now do, think or create that we couldn’t before?' },
];

/** Work with the model: the book, Rebel Yell and the invitation. */
export const WORK_WITH = [
  { text: 'For the full philosophy and practice, read my bestselling book Disruptive Leadership.', cta: 'Purchase Disruptive Leadership', href: DISRUPTIVE_LEADERSHIP_HREF },
  { text: 'For senior leaders who want to think through a substantial strategic question, join the waitlist for Rebel Yell.', cta: 'Join the Rebel Yell waitlist', href: REBEL_YELL_HREF },
  { text: 'If your leadership team wants to see what could be and align the system to make it real, bring me in to work with your leadership team.', cta: 'Invite Remi to work with your leadership team', href: TRUSTME_INVITE_HREF },
];

/** Related ideas. */
export const RELATED = [
  { title: 'The Critical Alignment Model', text: 'Why people come last because people come first.', href: '/ideas-models/critical-alignment-model', cta: 'Explore CAM', art: 'p5-arrow' },
  { title: 'The T.R.U.S.T.M.E. Model', text: 'How our values develop and why our best thinking can disappear under pressure.', href: '/ideas-models/trustme-model', cta: 'See the levels', art: 'p6-spiral' },
  { title: 'Core → Improve → Innovate', text: 'What deserves most of my attention?', href: '/ideas-models#part-8', cta: 'Read on', art: 'p8-circles' },
];
