// Content for the Emotion Integration Technique page (/ideas-models/emotion-integration-technique): the lists it renders.
// Headings and body copy live in components/eit/. Source: "EIT" article (Sept 2026).

export const EIT_PAGE_HREF = '/ideas-models/emotion-integration-technique';

/** Where "Explore practitioner training" goes until the training page exists: the enquiry form, preset to Books & programs. */
export const EIT_TRAINING_HREF = '/?interest=Products#contact';

/** The outward movement, one layer at a time, as the deck describes it. */
export const OUTWARD_LAYERS = [
  { ask: 'Can you feel compassion for the part of you that feels frustrated?', answer: 'No.' },
  { ask: 'Can you feel compassion for the part of you that cannot feel compassion for the frustration?', answer: 'No.' },
  { ask: 'Can you feel compassion for the part that cannot feel compassion for the part that cannot feel compassion?', answer: 'Yes.' },
];

/** The three movements EIT repeats. */
export const MOVEMENTS = [
  { title: 'Outward', text: 'Move further out, one layer at a time, until a part appears that can be met with genuine compassion.' },
  { title: 'Inward', text: 'Carry that compassion back through every layer until it reaches the original presentation.' },
  { title: 'Down', text: 'Ask what is underneath, and begin again from there.' },
];

/** What the pattern is protecting, from the branch down to the root (matches the tree image). */
export const ROOTS = ['Fear', 'Hurt', 'Loneliness', 'Grief', 'Shame'];

/** Related ideas. */
export const RELATED = [
  { title: 'Deep State Repatterning', text: 'Why an old experience can stop being over, and how the mind can place it in the past.', href: '/ideas-models/deep-state-repatterning', cta: 'Explore DSR', art: 'p4-compass' },
  { title: 'The Self-Esteem Triad', text: 'Needs, boundaries and emotions, with worthy, lovable and enough at the centre.', href: '/ideas-models/self-esteem-triad', cta: 'Read the triad', art: 'p3-heart' },
  { title: 'Safe Problems, Risky Truths', text: 'What the problem we keep trying to solve may be protecting us from.', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
];
