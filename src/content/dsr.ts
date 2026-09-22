// Content for the Deep State Repatterning page (/ideas-models/deep-state-repatterning): the lists it renders.
// Headings and body copy live in components/dsr/. Source: "Deep State Repatterning by Remi Pearson" copy deck.

export const DSR_PAGE_HREF = '/ideas-models/deep-state-repatterning';

/** What DSR brings together in one coherent process. */
export const DSR_ELEMENTS = ['Symbolic time', 'Light Ericksonian trance', 'Managed association and dissociation', 'Parts work', 'Emotional release', 'Meaning change', 'Self-forgiveness', 'Future pacing'];

/** The conclusions a child is likely to draw about the self. */
export const CHILD_CONCLUSIONS = ['I do not matter.', 'I am unsafe.', 'I caused this.', 'There is something wrong with me.', 'I cannot trust my own experience.'];

/** Chunking upward through the hierarchy of meaning: a learning as it rises. */
export const MEANING_LADDER = ['I can protect myself', 'I can trust myself', 'I belong to myself', 'I am whole', 'I am love'];

/** What the person checks once the originating event has been worked with. */
export const TEST_QUESTIONS = ['Is the charge still there?', 'Is the memory flat?', 'Does it feel distant, irrelevant, altered or strangely difficult to access?', 'What does the person now believe about themselves?'];

/** The other deep work DSR can hold. */
export const HELD_WORK: { title: string; text: string; href?: string }[] = [
  { title: 'Parts work / IFS', text: 'Helps a younger part reveal what it protected, what it feared and what it needed.' },
  { title: 'Emotion Integration Technique', text: 'Approaches the avoided emotional experience in manageable increments.', href: '/ideas-models/emotion-integration-technique' },
  { title: 'Attachment work', text: 'Clarifies why closeness, separation, dependence or autonomy carries a particular threat.' },
  { title: 'The Self-Esteem Triad', text: 'Reveals what happened to self-trust, self-worth and personal authority.', href: '/ideas-models/self-esteem-triad' },
];

/** Related ideas. */
export const RELATED = [
  { title: 'The Self-Esteem Triad', text: 'Needs, boundaries and emotions, with worthy, lovable and enough at the centre.', href: '/ideas-models/self-esteem-triad', cta: 'Read the triad', art: 'p3-heart' },
  { title: 'Safe Problems, Risky Truths', text: 'What the problem we keep trying to solve may be protecting us from.', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
  { title: 'Emotion Integration Technique', text: 'What to do in the live moment of activation.', href: '/ideas-models/emotion-integration-technique', cta: 'Explore EIT', art: 'p4-woman' },
];
