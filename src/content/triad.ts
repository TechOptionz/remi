// Content for the Self-Esteem Triad page (/ideas-models/self-esteem-triad): the lists it renders.
// Headings and body copy live in components/triad/. Source: "How to Build Self-Esteem" article (Sept 2026).

/** Where "Explore the Self-Esteem Triad" goes once the guided introduction exists. Until then the CTA
 *  shows the "Tell me when it's ready" form instead. */
export const TRIAD_PRODUCT_HREF: string | null = null;

export const TRIAD_PAGE_HREF = '/ideas-models/self-esteem-triad';

/** The three arms: name, the question each asks, and the questions the reader can begin with. */
export type Arm = { id: string; name: string; question: string; explore: string[]; tone: 'rust' | 'gold' | 'olive' };
export const ARMS: Arm[] = [
  { id: 'needs', name: 'Needs', question: 'Can I recognise and respond to what I need?', tone: 'rust', explore: [
    'What do I need in order to feel safe, connected and able to be myself?',
    'Which needs can I recognise easily?',
    'Which needs do I judge, minimise or expect myself to have outgrown?',
    'Do I know how to meet some of these needs for myself?',
    'Can I ask safe people to participate in meeting them?',
    'Am I chasing a higher-level need while neglecting something more foundational?',
  ] },
  { id: 'boundaries', name: 'Boundaries', question: 'Can I remain myself while being connected to you?', tone: 'gold', explore: [
    'Can I tell where my responsibility ends and another person’s begins?',
    'What happens inside me when somebody is disappointed with me?',
    'Do I alter, silence or abandon myself to preserve connection?',
    'Can I say yes freely, or is my yes driven by fear, guilt or obligation?',
    'Can I remain emotionally connected to another person while holding a different view?',
  ] },
  { id: 'emotions', name: 'Emotions', question: 'Can all of me be welcome?', tone: 'olive', explore: [
    'Which emotions feel welcome in me?',
    'Which ones do I suppress, intellectualise, dismiss or judge?',
    'What happens when somebody else expresses those emotions?',
    'Can I notice a feeling without immediately acting on it?',
    'Can I become curious about what the emotion is protecting, communicating or asking me to acknowledge?',
  ] },
];

/** Questions knowing our needs lets us ask (Needs arm). */
export const NEEDS_QUESTIONS = [
  'What am I actually needing here?',
  'Is this the immediate need, or is something deeper underneath it?',
  'Which part of this need can I meet for myself?',
  'Where do I need support, care or cooperation from another person?',
  'Can I communicate that directly, without blame, manipulation or self-abandonment?',
];

/** Speaking for an emotion rather than from it (Emotions arm). */
export const EMOTION_VOICES = [
  'My anger is telling me that something feels unfair.',
  'My sadness needs acknowledgement.',
  'My fear is asking for more information and safety.',
  'My resentment may be showing me where I have repeatedly abandoned a boundary.',
];

/** What "worthy, lovable and enough" look like in practice. */
export const CENTRE_LINES = [
  'I know myself.',
  'I recognise what I need and take responsibility for responding to it.',
  'I can ask for help without making another person entirely responsible for me.',
  'I can welcome my emotional experience with honesty and compassion.',
  'I can stay connected without erasing myself.',
  'I can protect what matters to me without needing to control you.',
  'I can make mistakes, experience discomfort and remain in relationship with myself.',
];

/** The fifteen emotional needs as three developmental stages, numbered 1–15 (matches the poster). */
export const NEED_STAGES: { stage: string; title: string; tone: 'rust' | 'gold' | 'olive'; lede: string; needs: string[] }[] = [
  { stage: 'Stage one', title: 'Safety and connection', tone: 'rust', lede: 'Where life first becomes safe enough.', needs: [
    'Safety and security', 'Stability and predictability', 'Attachment and belonging', 'Love and acceptance', 'To matter, be seen and be truly known',
  ] },
  { stage: 'Stage two', title: 'Selfhood and agency', tone: 'gold', lede: 'The self becoming visible, truthful and able to act.', needs: [
    'Authenticity and truth', 'Emotional expression', 'Autonomy and agency', 'Freedom and sovereignty', 'Competence and capability',
  ] },
  { stage: 'Stage three', title: 'Wholeness and expansion', tone: 'olive', lede: 'A secure enough self reaching into a wider life.', needs: [
    'Self-worth and identity', 'Playfulness, joy and aliveness', 'Meaning and purpose', 'Growth and expansion', 'Transcendence and existential peace',
  ] },
];

/** The closing statement. */
export const STAND_LINES = ['This is who I am.', 'This is what I feel.', 'This is what I need.', 'This is where I stand.', 'I can be close to you and still belong to myself.'];

/** Related ideas. The Emotional Intimacy Threshold has no page yet, so it points at the body of work. */
export const RELATED = [
  { title: 'The Fifteen Emotional Needs', text: 'The developmental hierarchy inside the Needs arm.', href: '#fifteen-needs', cta: 'See the needs', art: 'p3-mtn' },
  { title: 'Safe Problems and Risky Problems', text: 'Am I fixing out there so I do not have to turn within?', href: '/ideas-models/safe-problems-risky-truths', cta: 'Read on', art: 'p3-wrench' },
  { title: 'Emotional Intimacy Threshold', text: 'Where closeness starts to feel unsafe, and what happens next.', href: '/ideas-models', cta: 'Explore the models', art: 'p3-heart' },
];
