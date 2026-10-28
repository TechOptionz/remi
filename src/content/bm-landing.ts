// Benchmarking: What Good Actually Looks Like (/products/benchmarking-what-good-actually-looks-like), from Remi's copy
// deck "BENCHMARKING LANDING PAGE COPY" and the one-page "BENCHMARKING MOCKUP" (Oct 2026). Copy carried over word for
// word from the deck (the mockup shortens it; the deck wins; the deck's opening note to Remi is not page copy); the
// layout and pictures follow the mockup. The program is not on sale yet: every "Join the waitlist" goes to the rust
// closing band (#get) with its name + email form; the price is shown as the deck prints it. Component:
// components/bm-landing/BmLanding.tsx; styles: styles/bm-landing.css (.bml-*); pictures cut from the mockup in
// public/assets/bm-landing/ (low resolution).
import { programOf, type LeadItem } from '@/content/program-landing';
import { audOf } from '@/content/otl-landing';

export const BM_SLUG = 'benchmarking-what-good-actually-looks-like';
export const BM = programOf(BM_SLUG);
/** The price as the deck prints it: '$29 AUD'. */
export const BM_PRICE = audOf(BM.price);
/** The program's full name, as the deck prints it in the close. */
export const BM_NAME = 'Benchmarking: What Good Actually Looks Like';

/** The strip under the hero (the mockup's line, from the deck's facts about Remi). */
export const STRIP = ['Built The Coaching Institute', 'Approximately $200M in revenue over 23 years'];

/** "Through this program, you’ll learn how to:" — the mockup's gold numerals in a row. */
export const LEARN: LeadItem[] = [
  { lead: 'Define what good looks like.', text: 'Translate broad expectations into observable standards, so people know what they are aiming for.' },
  { lead: 'Learn from people who already do it well.', text: 'Study the practices behind their results and adapt what fits your business and values.' },
  { lead: 'Measure the process as well as the outcome.', text: 'Identify the actions worth tracking alongside the results you want.' },
  { lead: 'Make feedback more specific.', text: 'Discuss the gap between the agreed standard and what happened, with a clearer basis for improvement.' },
  { lead: 'Build consistency into everyday work.', text: 'Document useful benchmarks so the standard can be repeated and refined.' },
];

/** "Four focused video lessons" — the mockup's 2 × 2 framed boxes. */
export const LESSONS = [
  { name: 'What good actually looks like', text: 'Understand benchmarking and identify where unclear expectations are costing you time, consistency or results.' },
  { name: 'Find and adapt a model of excellence', text: 'Learn how to examine what works, identify the practices behind it and choose what fits your values and circumstances.' },
  { name: 'Measure what you can influence', text: 'Connect your benchmarks with lead and lag measures, so you can review both the work being done and the outcomes it produces.' },
  { name: 'Put it to work in your business', text: 'Follow practical examples and build a set of benchmarks for one area of your own business.' },
];
