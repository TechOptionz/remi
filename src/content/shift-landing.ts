// The Shift — women in business mentoring (/programs/the-shift), from Remi's copy deck "THE SHIFT PLAIN TEXT COPY" and
// the mockups "THE SHIFT PART ONE–THREE" and "THE SHIFT WAITLIST CONFIRMATION" (Nov 2026). Copy carried over word for
// word from the deck (the mockups shorten it; the deck wins); the layout follows the mockups. It is a waitlist page:
// the deck prints no price, so none is shown here (the catalogue's is on /programs), and every "Join the waitlist"
// goes to the dark closing band (#get), whose first name + email form opens the confirmation page
// (/programs/the-shift/thank-you). Component: components/shift-landing/ShiftLanding.tsx (+ ShiftThanks.tsx); styles:
// styles/shift-landing.css (.shf-*). Both photos are cut from the HD original the mockups draw (Remi-Pearson-Photos
// 02, flipped as in the mockups so Remi faces the copy), in public/assets/shift-landing/.
import type { IconName } from '@/components/shared/Icon';

/** What the waitlist form files the sign-up under (PRODUCT_LISTS in app/api/lead/route.ts: "Waitlist — The Shift"). */
export const SHIFT_PRODUCT = 'The Shift';
export const SHIFT_HREF = '/programs/the-shift';
export const SHIFT_THANKS_HREF = '/programs/the-shift/thank-you';

/** The strip under the hero (mockup one), from the deck's own facts. */
export const STRIP = ['20 women', 'Monthly mentoring', 'Experienced guidance', 'A connected community'];

/** "That means learning how to:" — the mockup's four framed cards, with the deck's full wording. */
export const LEARN: { icon: IconName; lead: string; text: string }[] = [
  { icon: 'people', lead: 'Develop a team that can think and act independently.', text: 'Set clearer expectations, delegate with greater confidence and build accountability without becoming everyone’s reminder system.' },
  { icon: 'repeat', lead: 'Create a more repeatable way of working.', text: 'Identify what needs to be consistent so growth doesn’t depend on you personally holding everything together.' },
  { icon: 'chat', lead: 'Lead the conversations you’ve been putting off.', text: 'Address performance, communicate standards and work through disagreement with clarity and respect.' },
  { icon: 'sprout', lead: 'Make deliberate decisions about growth.', text: 'Assess opportunities against the business you want to build and the life you want it to support.' },
];

/** "What’s included" — three numbered rows. */
export const INCLUDED: { name: string; text: string[] }[] = [
  { name: 'Monthly group mentoring with Remi Pearson', text: ['Dedicated time to step out of the daily demands and work on the questions shaping your business. Bring your leadership challenges, decisions and opportunities for guidance that connects to what you’re actually experiencing.'] },
  { name: 'Practical guidance on leadership and business growth', text: ['We’ll work on the skills that help you lead a growing business, including delegation, team ownership, culture and communication. You’ll be supported to translate what you learn into action and review what changes as you apply it.'] },
  { name: 'A community of women building alongside you', text: [
    'Access to a group where you can ask a candid question, share something you’re finding difficult and contribute your own experience. We’re keeping the group to 20 women so there’s room to know one another beyond an introduction.',
    'The quality of that community matters. We’re looking for women who are generous with their insight, willing to participate and interested in one another’s progress.',
  ] },
];

/** "The Shift is for women who:" */
export const FOR_WOMEN_WHO = [
  'Run an established business generating more than $500,000 in annual revenue, with an offer that already sells.',
  'Remain central to too many decisions and want to change that.',
  'Want to strengthen their leadership and are willing to examine their own contribution to recurring problems.',
  'Value thoughtful conversation and practical application.',
  'Want commercial success while making a positive contribution to the world.',
  'Are ready to support other women and take responsibility for their own progress.',
];

/** The two ends of the line under Remi's note (mockup three), from the deck's own dates. */
export const MILESTONES = [
  { year: '2014', label: 'Under management' },
  { year: '2024', label: 'Business sold' },
];
