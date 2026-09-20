// Programs page (Rebel Yell): the lists, FAQ, form options and proof slots. Headings and body copy stay in components/programs/.

/** Every "Join the private waitlist" button points here. */
export const WAITLIST_HREF = '#waitlist';

// ---------- "The meeting ends. Everyone nods." ----------
export const SIGNS = [
  'Decisions are made and then quietly reopened.',
  'The same disagreement keeps returning under different names.',
  'Senior people agree in the room and resist outside it.',
  'Everybody is busy, yet movement on what matters remains strangely slow.',
  'A founder wants greater ownership from the team but unknowingly keeps reclaiming control.',
  'The team has become careful with one another, which is being mistaken for trust.',
  'One person has become the identified problem while the system surrounding them remains conveniently unexamined.',
  'The organisation has outgrown the way it became successful, but too much identity is attached to the old way.',
  'The stated strategy and the lived culture are producing entirely different instructions.',
  'People understand the issue intellectually and still cannot behave differently when the pressure returns.',
];

// ---------- "Everyone can explain the problem" — the accepted explanations ----------
export const EXPLANATIONS = [
  'It’s an accountability problem.',
  'A communication problem.',
  'A difficult executive.',
  'A strategy that hasn’t landed.',
  'People are resisting change.',
  'The founder needs to let go.',
  'The team needs to step up.',
  'Everyone needs to become more aligned.',
];

// ---------- What an engagement may involve ----------
export const ENGAGEMENT = [
  'An initial confidential conversation with the founder, CEO or accountable executive',
  'Review of the stated problem, desired outcome and relevant organisational context',
  'Selected interviews, assessments or examination of existing material where useful',
  'A private intensive with the leadership team, delivered in person, online or through a combination of both',
  'Direct coaching, mentoring, facilitation, education and intervention according to what the situation requires',
  'A clear account of what is currently happening, what needs to become possible and where the leverage sits',
  'Light-touch advisory support while the team implements, observes and adjusts',
  'Further intervention when the next layer becomes visible',
];

// ---------- Who Rebel Yell is for ----------
export const POOR_FIT = [
  'You want a motivational speaker for an offsite.',
  'You have already decided who is to blame and want an expert to confirm it.',
  'You want a prewritten workshop delivered regardless of what is happening.',
  'The senior decision-makers will not participate.',
  'You want the appearance of change without allowing anything important to become discussable.',
  'You believe the team needs fixing while leadership remains exempt.',
];

// ---------- Why me? — the small line of credentials under the photos ----------
export const CREDENTIALS = [
  'Founded, built and sold The Coaching Institute',
  'More than $200 million generated over 23 years',
  'Three decades of watching what people actually do',
];

// ---------- Proof slots ----------
// Testimonials stay hidden until a real one is added here. Brief from the copy deck:
//  - diagnosis: short and highly specific, from a CEO, founder or senior executive, about a consequential problem
//    Remi saw differently — what she identified that others had missed, and what changed as a result.
//  - calibration: someone who experienced Remi challenging without overwhelming the room — feeling accurately seen,
//    saying what others avoided, safety for honesty, or a change in the quality of the conversation.
export type Testimonial = { quote: string; name: string; role: string };
export const TESTIMONIALS: Record<'diagnosis' | 'calibration', Testimonial | null> = {
  diagnosis: null,
  calibration: null,
};
// Authority proof (client logos, audience numbers, recognised organisations) — shown under "Why me?" once added.
// Only include proof that strengthens relevance for founders, CEOs and senior teams.
export const AUTHORITY_LOGOS: { src: string; alt: string }[] = [];

// ---------- Waitlist form ----------
export const DELIVERY = ['Primarily in person', 'Primarily online', 'A combination of both', 'Unsure'];

// ---------- FAQ (answers are paragraphs) ----------
export const FAQ: { q: string; a: string[] }[] = [
  {
    q: 'Is Rebel Yell coaching, consulting or facilitation?',
    a: [
      'The work can include all of them. I use the form of intervention the problem requires rather than forcing every organisation through the same professional label.',
      'At different moments, I may diagnose, question, teach, facilitate, challenge, coach, mentor or help redesign an element of the system. The purpose determines the method.',
    ],
  },
  {
    q: 'How long is an engagement?',
    a: [
      'It begins with diagnosis and a concentrated intervention. Some organisations may need only a small amount of follow-through. Others may benefit from a longer, light-touch advisory relationship while the leadership team implements the change.',
      'The scope is agreed once I understand the situation. You will not be sold months of involvement before we know what the problem requires.',
    ],
  },
  {
    q: 'Is the work in person or online?',
    a: ['Both. The likely format is a combination of in-person and online work, designed around the team, location and nature of the issue.'],
  },
  {
    q: 'Does the whole leadership team need to participate?',
    a: [
      'Usually, the people with the authority to shape the system must be involved. Sometimes the work begins with the founder or CEO. Sometimes selected interviews are useful before bringing the leadership team together.',
      'I will recommend participation based on what needs to change, not organisational etiquette.',
    ],
  },
  {
    q: 'What kinds of problems are appropriate?',
    a: ['Rebel Yell is designed for live, consequential problems involving leadership, execution, strategic alignment, founder dependence, team dynamics, culture, organisational change or an impasse the business has been unable to think its way through.'],
  },
  {
    q: 'Is joining the waitlist an application?',
    a: ['It is the beginning of a conversation. Rebel Yell will not suit every organisation, and I will only accept work where I believe my involvement can make a meaningful difference.'],
  },
  {
    q: 'What does it cost?',
    a: ['The investment will depend on the scope, preparation, delivery format and level of advisory support required. You will receive a clear recommendation and investment before deciding whether to proceed.'],
  },
];
