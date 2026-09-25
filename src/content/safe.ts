// Content for the Safe Problems, Risky Truths page (/ideas-models/safe-problems-risky-truths): the lists it renders.
// Headings and body copy live in components/safe/. Source: "Safe Versus Risky Problems" article (Sept 2026).

export const SAFE_PAGE_HREF = '/ideas-models/safe-problems-risky-truths';

/** Diagram 1, "The problem we see, the truth we avoid", built as three layers of a cross-section. */
export const LAYERS: { label: string; title: string; items: string[] }[] = [
  { label: 'Above the surface', title: 'The problem we see', items: ['“They need to change.”', '“I need to stop doing this.”', '“It should never have happened.”'] },
  { label: 'Just beneath', title: 'The protective function', items: ['What does focusing here protect me from feeling?'] },
  { label: 'Deeper still', title: 'What may be waiting', items: ['Loneliness', 'Hurt', 'Fear of rejection', 'Feeling unlovable'] },
];
export const LAYERS_PATH = 'What can I meet with compassion? Where do I have agency?';

/** The compassionate inquiry. */
export const INQUIRY = [
  'What is the problem I keep returning to?',
  'What does focusing on this allow me to avoid feeling or acknowledging?',
  'What am I afraid might happen if I turned towards that experience?',
  'What support would help me meet it?',
  'Within what is happening, what can I influence or choose?',
];

/** Related ideas. */
export const RELATED = [
  { title: 'The Self-Esteem Triad', text: 'Needs, boundaries and emotions, with worthy, lovable and enough at the centre.', href: '/ideas-models/self-esteem-triad', cta: 'Read the triad', art: 'p3-heart' },
  { title: 'The Fifteen Emotional Needs', text: 'The developmental hierarchy inside the Needs arm.', href: '/ideas-models/self-esteem-triad#fifteen-needs', cta: 'See the needs', art: 'p3-mtn' },
  { title: 'Emotion Integration Technique', text: 'What to do in the live moment of activation.', href: '/ideas-models/emotion-integration-technique', cta: 'Explore EIT', art: 'p4-woman' },
];
