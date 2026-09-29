// Content for the Ultimate Influence chapter (/ideas-models/ultimate-influence): the lists it renders.
// Headings and body copy live in components/uic/. Source: "Ultimate Influence" copy deck (Sept 2026) + the eight-step illustration.

export const UIC_PAGE_HREF = '/ideas-models/ultimate-influence';

/** "Explore the Ultimate Influence online training program": the enquiry form until the program page exists. */
export const UIC_TRAINING_HREF = '/products/ultimate-influence-consultative-sales-introduction';

/** The eight steps, in order, with the line each one's heading carries in the deck. Colours follow the stones in the illustration. */
export type Step = { num: number; name: string; tag: string };
export const STEPS: Step[] = [
  { num: 1, name: 'Ignite', tag: 'Begin the connection' },
  { num: 2, name: 'Excite', tag: 'Discover what matters to them' },
  { num: 3, name: 'Flip', tag: 'Explore why this conversation matters now' },
  { num: 4, name: 'Match', tag: 'Compare what they want with what you can actually provide' },
  { num: 5, name: 'Recommend', tag: 'Offer a considered view' },
  { num: 6, name: 'Backtrack', tag: 'Check the match again' },
  { num: 7, name: 'Close', tag: 'Agree on the decision' },
  { num: 8, name: 'Future Pace', tag: 'Help them see what happens next' },
];
export const stepId = (s: Step) => `step-${s.name.toLowerCase().replace(/\s+/g, '-')}`;

/** Related ideas. */
export const RELATED = [
  { title: 'How do I sell without scripts, pressure or bullshit?', text: 'Where sales conversations break, and the fast start guide.', href: '/ultimate-influence', cta: 'Go down this rabbit hole', art: 'p8-star' },
  { title: 'Values Alignment Technique', text: 'Understanding what is driving your life before deciding where to take it.', href: '/ideas-models/values-alignment-technique', cta: 'Explore VAT', art: 'p4-compass' },
  { title: 'Core → Improve → Innovate', text: 'What deserves most of my attention?', href: '/ideas-models#part-8', cta: 'Read on', art: 'p8-circles' },
];
