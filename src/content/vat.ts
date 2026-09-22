// Content for the Values Alignment Technique page (/ideas-models/values-alignment-technique): the lists it renders.
// Headings and body copy live in components/vat/. Source: "Values Alignment Technique" copy deck.

export const VAT_PAGE_HREF = '/ideas-models/values-alignment-technique';

/** Where "Find out more" about practitioner training goes until that page exists: the enquiry form, preset to Books & programs. */
export const VAT_TRAINING_HREF = '/?interest=Products#contact';

/** Questions that open the conversation between what we name and what we live. */
export const PRESENCE_QUESTIONS = [
  'Where does adventure appear in your life?',
  'What happens when an opportunity brings uncertainty?',
  'If you say you value intimacy, what do you do when someone gets close enough to know something uncomfortable about you?',
];

/** Curiosity about resourcefulness. */
export const RESOURCE_QUESTIONS = [
  'If a resource is missing, are they seeking help to obtain it?',
  'What do they believe is within their influence?',
  'Have they encountered a genuine limit, or have they reached an expectation of failure that has started to feel like a fact?',
];

/** The two questions about a goal that gives comfort. */
export const GOAL_QUESTIONS = ['What does having this goal give them now?', 'What does not pursuing it protect them from?'];

/** Diagram 2: the five stages of the technique. The inner-work stage is the substantial one. */
export const STAGES: { title: string; text: string; deep?: boolean }[] = [
  { title: 'Explore strengths', text: 'Through the VIA character strengths survey and conversation.' },
  { title: 'Discover operating values', text: 'What is already directing choices, responses and the emotional experiences the person organises around.' },
  { title: 'Recognise protection', text: 'Secondary gain, and the gap between intention and experience.' },
  { title: 'Work with the underlying protection', text: 'Through parts work or Emotion Integration Technique, at the person’s pace, developing a relationship with what the protection has kept at a distance.', deep: true },
  { title: 'Revisit values and form aligned goals', text: 'With the understanding included.' },
];

/** Related ideas. */
export const RELATED = [
  { title: 'Emotion Integration Technique', text: 'How moving further away can become the path back to compassion.', href: '/ideas-models/emotion-integration-technique', cta: 'Explore EIT', art: 'p4-woman' },
  { title: 'The Self-Esteem Triad', text: 'Needs, boundaries and emotions, with worthy, lovable and enough at the centre.', href: '/ideas-models/self-esteem-triad', cta: 'Read the triad', art: 'p3-heart' },
  { title: 'Safe Problems, Risky Truths', text: 'What the problem we keep trying to solve may be protecting us from.', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
];
