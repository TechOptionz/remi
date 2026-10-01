// "How do I lead without carrying everybody?" — the fourth rabbit hole from the homepage (/leadership).
// The six patterns are carried over word for word from the copy deck (LEADERSHIP — WHAT TO DO WITH THE BOXES, Sept 2026).
// The deck also gives each box a shorter "panel title" for the design's rust panel, which the client asked to leave out.
import { ENTRY_PRICE } from '@/content/home';
import type { Pattern } from '@/content/rabbit-holes';

// The four answers under each pattern, in the order of PATTERN_LABELS
export const PATTERN_LABELS = ['What I’m carrying', 'Who it belongs to', 'What I’m preventing', 'What leadership requires'];

export const PATTERNS: Pattern[] = [
  {
    title: 'I am always the one who notices what needs doing',
    panel: ['You see the gap, anticipate the problem and step in before anything breaks. It feels responsible. It may even be necessary for a while. But every time your capability compensates for somebody else’s, the system learns to need you.'],
    answers: [
      'I hold the overview, spot what has been missed and follow through when nobody else does.',
      'Some of this belongs to people with the authority and ability to notice and act for themselves.',
      'I prevent mistakes, but I may also prevent others from seeing the consequences of what they haven’t taken ownership of.',
      'Make responsibilities and standards clear, then let the right people own the work and its follow-through.',
    ],
  },
  {
    title: 'People wait for me to decide',
    panel: ['Every question comes back to you, including decisions others could make. You become the quickest route to an answer, so people keep using it. Eventually, the team’s pace is limited by your availability.'],
    answers: [
      'I make routine decisions, settle uncertainty and give permission for work to move.',
      'Decisions within someone’s role should belong to them, with clear limits for when they need to involve me.',
      'I reduce the chance of a poor decision, but I also reduce opportunities for people to develop judgement.',
      'Define who decides what, share the criteria for a good decision and support people as they begin making their own.',
    ],
  },
  {
    title: 'Accountability keeps becoming my job',
    panel: ['You agree on an outcome, then find yourself reminding, checking and chasing until it happens. The work may get done, but you’ve become responsible for someone else’s responsibility. That is exhausting, and it tells you something about how expectations are being set and followed through.'],
    answers: [
      'I remember commitments, track progress and initiate every conversation when something slips.',
      'The person who accepted the responsibility owns the result and should raise problems early.',
      'My reminders protect deadlines, but they can hide unclear agreements or a lack of ownership.',
      'Agree on the outcome, owner, deadline and check-in point. Then address missed commitments directly rather than quietly taking the work back.',
    ],
  },
  {
    title: 'I am holding the culture together',
    panel: ['You work to keep people connected, smooth over tensions and protect the atmosphere. But if respect and honesty depend on your constant presence, they have not yet become shared ways of working. The culture needs to be practised by the team, including when you are not in the room.'],
    answers: [
      'I manage tensions, translate between people and try to keep everyone engaged.',
      'Everyone has a part in how they speak, work through disagreement and treat one another.',
      'By smoothing things over, I may be keeping important conversations from happening.',
      'Make the expected behaviours explicit, model them and address breaches with the people involved.',
    ],
  },
  {
    title: 'The moment I step back, standards fall',
    panel: ['You review, correct and hold the detail because you know what good work looks like. When you stop checking, the quality drops. That is useful information: the standard may be clear in your head, but it has not yet been built into the team’s way of working.'],
    answers: [
      'I act as the final quality check for work that should meet the standard before it reaches me.',
      'The people doing the work need to understand the standard and check their own work against it.',
      'My corrections protect quality, but they can conceal missing skills, weak processes or expectations that were never made clear.',
      'Show what good looks like, build useful checks into the process and develop the capability to meet the standard without me.',
    ],
  },
  {
    title: 'I keep rescuing capable adults',
    panel: ['You step in when someone struggles, takes too long or might get something wrong. It comes from wanting them to succeed. Yet if you repeatedly remove the difficult part, they lose the chance to build the capacity you need them to have.'],
    answers: [
      'I solve problems, finish tasks or absorb consequences that someone else could manage.',
      'The person responsible for the work needs room to attempt it, ask for support and learn from the result.',
      'I prevent discomfort and some mistakes, but I may also prevent growth and honest accountability.',
      'Offer guidance, resources and clear expectations. Stay available without taking the responsibility away.',
    ],
  },
];

// ---------- Links ----------
export const TRUSTME_HREF = '/ideas-models/trustme-model';
export const DL_HREF = '/ideas-models/disruptive-leadership';
/** "Start the leadership audit": the enquiry form preset to Books & programs until the product page exists. */
export const LEADERSHIP_AUDIT_HREF = '/products/disruptive-leadership';

// ---------- You cannot lead everyone from the same place ----------
export const PRINCIPLES = [
  { icon: 'stairs', title: 'You cannot skip a level', text: 'Each stage has problems that must be solved before the next becomes available.' },
  { icon: 'scales', title: 'Every level can be functional or dysfunctional', text: 'Belonging can create trust or conformity. Systems can create freedom or bureaucracy.' },
  { icon: 'target', title: 'The thinking that created the problem cannot solve it', text: 'The leader must respond from the level the situation requires.' },
] as const;

// ---------- When you stop carrying ----------
export const STOP_CARRYING = [
  { icon: 'clipboard', title: 'Clarify accountability', text: 'Make ownership visible before stepping in.' },
  { icon: 'badge', title: 'Match the role to the readiness', text: 'Do not confuse potential with current capability.' },
  { icon: 'cube', title: 'Build systems that hold', text: 'Replace memory, heroics and rescue with repeatability.' },
  { icon: 'star', title: 'Let the best person lead', text: 'At Evolution, function matters more than status.' },
] as const;

// ---------- The T.R.U.S.T.M.E. Leadership Audit (same $29 entry price as the homepage products) ----------
export const LEADERSHIP_AUDIT_PRICE = ENTRY_PRICE;
export const LEADERSHIP_AUDIT_STEPS = ['Identify where you lead from under pressure', 'See where you are carrying instead of leading', 'Recognise the thinking present around you', 'Choose the next shift without rescuing'];

// ---------- Conversations to disappear into: each opens the Perspectives archive on its closest topic ----------
export const TOPIC_LINKS = [
  { icon: 'search', title: 'Why accountability collapses', topic: 'Founders & business' },
  { icon: 'layers', title: 'Culture and levels of thinking', topic: 'Ideas & meaning' },
  { icon: 'growth', title: 'Leading through growth and change', topic: 'Founders & business' },
  { icon: 'lighthouse', title: 'Building beyond the founder', topic: 'Founders & business' },
] as const;
