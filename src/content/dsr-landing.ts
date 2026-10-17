// Deep State Repatterning™'s sales page (/products/deep-state-repatterning), from Remi's copy deck (Oct 2026), copy
// carried over word for word. No design mock-up: the page is composed from components/program-landing/ui.tsx, with the
// chapter's chain-of-pearls diagram. Component: components/dsr-landing/DsrLanding.tsx.
import { programOf, type Faq, type LeadItem, type Lesson, type Testimonial } from '@/content/program-landing';

export const DSR_SLUG = 'deep-state-repatterning';
export const DSR = programOf(DSR_SLUG);
/** The deck always prints the name with its trade mark; the product's title (cards, lists) does not. */
export const DSR_NAME = 'Deep State Repatterning™';

export const OVER_IT: LeadItem[] = [
  { lead: 'Criticism quickly becomes a verdict on who you are.', text: 'One piece of feedback leaves you feeling inadequate, exposed or ashamed.' },
  { lead: 'A new disappointment brings back an old feeling.', text: 'The circumstances are different, but the sense of being unwanted or unimportant is familiar.' },
  { lead: 'You hold yourself back because you remember what happened last time.', text: 'You hesitate to speak, try again or let someone get close.' },
  { lead: 'You know something wasn’t your fault, yet still feel responsible.', text: 'Understanding the facts hasn’t quite reached the self-blame.' },
  { lead: 'You keep arriving at the same conclusion about yourself.', text: '“I don’t matter.” “I always get it wrong.” “It isn’t safe to be seen.”' },
  { lead: 'You’ve talked about the experience, but it still has a hold on you.', text: 'You want to explore what changing your relationship with it could involve.' },
];

export const OPPORTUNITY: LeadItem[] = [
  { lead: 'Recognise a familiar emotional theme,', text: 'so you can begin making sense of connections between experiences that seem unrelated.' },
  { lead: 'Explore how you represent your past and future,', text: 'using your own imagery, sensations or impressions.' },
  { lead: 'Understand how perspective affects your experience of a memory,', text: 'including the difference between feeling immersed in it and observing it from a distance.' },
  { lead: 'Consider what you know about yourself now that wasn’t available then,', text: 'without having to excuse what happened or force a positive interpretation.' },
  { lead: 'Experience DSR with my guidance,', text: 'then notice what, if anything, feels different in a relevant situation in your life.' },
];

export const LESSONS: Lesson[] = [
  { name: 'Why something that happened then can still affect you now',
    text: ['Explore the difference between remembering an event and carrying its emotional meaning into the present. We’ll look at why you can understand a pattern and still feel caught in it.'],
    take: 'a clearer understanding of what DSR is intended to address, and a way to recognise the problem in your own experience.' },
  { name: 'How you represent your past and future',
    text: ['Discover the NLP concept of an internal timeline. You might imagine the past behind you, beside you or somewhere else entirely. Some people see images; others have a sense of direction or simply an impression.'],
    take: 'familiarity with your own representation of time and the symbolic language we’ll use in the guided experience.' },
  { name: 'The gestalt of memories … why today can carry so much history',
    text: ['Explore the chain-of-pearls metaphor and how experiences can feel connected through a recurring emotion or conclusion. We’ll introduce significant emotional events and their place within the DSR model.'],
    take: 'a way to understand why one present-day disappointment can feel connected with much more than the immediate situation.' },
  { name: 'How perspective changes your experience of a memory',
    text: ['Learn about association and dissociation as they’re used in NLP: experiencing a memory through your own eyes, or intentionally imagining an observer’s perspective. We’ll explore how DSR works with distance, resources and new understanding.'],
    take: 'a clearer sense of what I’ll invite you to do, with choice about your participation throughout.' },
  { name: 'Preparing for your guided DSR experience',
    text: ['Choose a manageable focus and understand how to approach the recording. We’ll also explore how to reflect afterwards and imagine meeting a relevant future situation.'],
    take: 'preparation for your guided experience, along with a way to notice changes without needing to manufacture a particular result.' },
];

export const WORKBOOK = [
  'Sketch or describe your representation of past, present and future.',
  'Recognise a familiar emotional theme and the meanings connected with it.',
  'Identify what you would like to experience differently.',
  'Prepare for the guided exercise and record what you notice afterwards.',
  'Return to a relevant everyday situation and reflect on your response.',
];

export const FAQ: Faq[] = [
  { q: 'Do I need to know anything about NLP?', a: 'No. The videos introduce the relevant concepts in accessible language before you begin the guided experience.' },
  { q: 'What if I don’t see pictures in my mind?', a: 'You don’t need vivid visual imagery. You may work with a sense of direction, a feeling or an impression. The introduction gives you room to explore how you represent experience.' },
  { q: 'Will I have to relive something painful?', a: 'The introductory recording is intended for a manageable, known experience. You can adjust your participation, pause or stop. Overwhelming or traumatic experiences are better approached with individual support that can respond to you directly.' },
  { q: 'Is this about finding forgotten memories?', a: 'No. You don’t need to search for a hidden event. Imagery and impressions are part of the symbolic experience; they aren’t evidence that something historically occurred.' },
  { q: 'Does changing my relationship with an experience mean saying it was okay?', a: 'No. You can explore a different relationship with its emotional meaning while retaining your judgement about what happened, your boundaries and another person’s responsibility.' },
  { q: 'Will one exercise resolve my pattern?', a: 'There’s no promised result from one recording. This is an introduction to DSR, with an opportunity to experience the approach and notice your response. More established or distressing patterns may need individually supported work.' },
  { q: 'Am I learning to facilitate DSR with other people?', a: 'No. This program is for your personal understanding and participation. It isn’t practitioner training or a professional qualification.' },
  { q: `What does the ${DSR.amount} include?`, a: `All five explanatory videos, the workbook and the guided DSR experience with Remi. One payment of ${DSR.price}, with learning at your own pace.` },
];

/** Two approved testimonials, with each person's name and the program or DSR experience they attended. Empty until
 *  real ones arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
