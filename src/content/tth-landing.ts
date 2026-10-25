// Trust That Holds — the T.R.U.S.T.M.E. program (/products/trust-that-holds, AUD $49), from Remi's copy deck "TRUSTME
// LANDING PAGE COPY" and the four-part mockup "TRUSTME MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for word
// from the deck (the mockups shorten it; the deck wins; the deck's opening note to Remi is not page copy); the layout
// follows the mockups. The program is not on sale yet: every "Join the waitlist" goes to the burgundy closing band
// (#get) with its first name + email form. Component: components/tth-landing/TthLanding.tsx; styles:
// styles/tth-landing.css (.tth-*). The hero is the HD original of Remi in her pink jacket (public/assets/ltl/ltl-hero,
// from Remi-Pearson-Photos 23, the photo the mockup draws); the workbook photo is cut from the mockup.
import { programOf, type Faq, type Testimonial } from '@/content/program-landing';
import type { IconName } from '@/components/shared/Icon';

export const TTH_SLUG = 'trust-that-holds';
export const TTH = programOf(TTH_SLUG);

/** The strip under the hero (mockup one), from the deck's facts about Remi. */
export const STRIP = [
  { figure: '23 years', label: 'building a business' },
  { figure: '$200 million', label: 'in revenue', pre: 'Approximately' },
  { figure: '13,000', label: 'coaches trained', pre: 'More than' },
];

/** "What you’ll be able to work on" — mockup one's four framed cards, plus the deck's fifth. */
export const WORK_ON: { icon: IconName; name: string; text: string }[] = [
  { icon: 'ear', name: 'Stop taking every difficult response at face value.', text: 'Someone’s resistance may involve more than an unwillingness to cooperate. You’ll learn to explore what they understand as safety, responsibility or success, so you can have a better-informed conversation about what needs to happen.' },
  { icon: 'eye', name: 'Recognise when you become part of the problem.', text: 'Examine the moments when you take over, retreat into agreement or defend a familiar approach. Understanding what you’re protecting gives you a clearer starting point for changing your response.' },
  { icon: 'bars', name: 'Identify what your business needs beyond more effort.', text: 'Learn to distinguish between a need for greater initiative and a need for reliable structure. You’ll be better equipped to question whether pushing harder is helping, or whether a missing capacity needs attention.' },
  { icon: 'people', name: 'Make room for disagreement without losing direction.', text: 'Explore why different perspectives can feel threatening, and how to consider what another person sees while remaining responsible for the decision.' },
  { icon: 'compass', name: 'Give your development a practical focus.', text: 'Use the model to choose something specific to practise in your working life. You’ll finish with an application plan connected to a challenge that matters to you.' },
];

/** The eleven videos: each title is "<name>: <lede>" in the deck, then its description. */
export const VIDEOS = [
  { name: 'Introduction', lede: 'Find the question worth exploring.', text: 'Begin with a current challenge and learn how to use the model to investigate it. You’ll have a practical focus from the outset, so each lesson connects to something more useful than remembering terminology.' },
  { name: 'Trust', lede: 'Recover your ability to act when you feel out of your depth.', text: 'Explore how to seek support while retaining a part in what happens next. Recognise the difference between needing help and waiting for someone else to take responsibility for your progress.' },
  { name: 'Relatability', lede: 'Belong without agreeing to things you don’t believe.', text: 'Understand how loyalty and the need for acceptance influence your choices. Learn to recognise when cooperation becomes self-silencing, including the team habit of agreeing in the room and resisting afterwards.' },
  { name: 'Uniqueness', lede: 'Stand for something without needing to control everything.', text: 'Explore the capacity to advocate for yourself and make decisions others may dislike. You’ll also examine when conviction becomes domination, and how that can leave everyone waiting for your direction.' },
  { name: 'Systems', lede: 'Make good work repeatable without making people rigid.', text: 'See how standards and shared expectations can reduce confusion and dependence on you. Learn to question processes that have become more important than the outcomes they were created to support.' },
  { name: 'Tenacity', lede: 'Put your drive to work without moving the finish line forever.', text: 'Understand the thinking that helps turn opportunity into results. Examine what happens when achievement becomes a continuing attempt to prove you are enough, and what that pressure asks of the people around you.' },
  { name: 'Meaning', lede: 'Turn what matters to you into something that works.', text: 'Explore what sustained contribution requires. Identify where meaningful intentions need stronger decisions, commercial capacity or reliable delivery to become real.' },
  { name: 'Evolution', lede: 'Respond to what the situation needs.', text: 'Learn how the earlier capacities can work together, giving you more ways to respond. Explore what it means to let the most suitable person lead and to choose an approach without making it your entire identity.' },
  { name: 'The whole model', lede: 'Understand why you respond differently in different situations.', text: 'Connect the levels and examine the movement between individual needs and collective needs. Make sense of why a capacity you access easily in one part of life may be harder to reach elsewhere.' },
  { name: 'Worked examples', lede: 'Practise seeing what you might otherwise miss.', text: 'Follow examples of leadership and business challenges. Compare interpretations and possible responses, then use that process to examine a situation of your own.' },
  { name: 'Your next step', lede: 'Turn recognition into deliberate practice.', text: 'Review what you’ve learned about yourself and choose a specific development focus. Decide what you’ll try, where you’ll try it, and what you’ll pay attention to afterwards.' },
];

/** The workbook table ("What you’ll work with" / "What it helps you do"). */
export const WORKBOOK = [
  { item: 'A guide to the seven levels', does: 'Recognise the thinking you’re encountering without relying on memory.' },
  { item: 'Reflection prompts alongside the lessons', does: 'Connect the teaching to your decisions and the consequences you’re seeing.' },
  { item: 'Your self-assessment reflections', does: 'Compare how you see yourself with examples of what you actually do.' },
  { item: 'A practical case exercise', does: 'Examine a recurring problem from several perspectives before choosing a response.' },
  { item: 'Your development plan', does: 'Decide what to practise and how to review whether it is helping.' },
];

/** Real participant feedback the deck supplies (Remi's previous training). */
export const TESTIMONIALS: Pick<Testimonial, 'quote' | 'name'>[] = [
  { quote: 'I attended a business Breakthrough training and Remi over-delivered in the training as usual.', name: 'Ute C.' },
  { quote: 'The training is presented in easy to understand concepts models and examples. The use of coaching exercises reinforces the learning.', name: 'Julie Coveny' },
];

export const GOOD_FIT = [
  { lead: 'You lead a team', text: 'and want to understand why the same communication or accountability problems keep returning.' },
  { lead: 'You own a business', text: 'and suspect that the approach that helped you build it is also contributing to its current limitations.' },
  { lead: 'You’re responsible for change', text: 'and want to understand the perspectives that make people embrace it, question it or resist it.' },
  { lead: 'You’re interested in your own development', text: 'and willing to examine what you do when your preferred approach stops working.' },
];
export const NOT_FOR = [
  'You want a quick technique for getting other people to agree with you.',
  'You want an assessment that places everyone into a fixed category.',
  'You want to analyse other people while leaving your own contribution unexplored.',
  'You need live coaching, individual feedback or a professional qualification.',
];

export const FAQ: Faq[] = [
  { q: 'I already understand leadership. What would this add?', a: 'You may know what good leadership looks like and still find it difficult to sustain in particular situations. This program helps you examine that gap, including the assumptions and responses that become more influential under pressure.' },
  { q: 'What makes this an advanced program?', a: 'You’ll examine the thinking beneath behaviour, the limitations of different approaches, and how several perspectives can contribute to understanding a situation. The introduction and individual lessons make the model accessible without requiring you to have studied it before.' },
  { q: 'Will the assessment tell me which level I’m operating from?', a: 'It will help you explore your predominant responses in the context you’re considering. You’ll then examine those results alongside real examples. You may recognise different patterns at work, in relationships and under pressure; those differences are part of what makes the exercise useful.' },
  { q: 'Can this help me understand my team?', a: 'Yes. The model gives you questions to explore about decisions, expectations and the way people interpret situations. Use it to open conversations and test your understanding with the people involved.' },
  { q: 'Do I need to run a business?', a: 'No. Leadership and business are a focus, but the model also applies to individual development and relationships. A willingness to examine your own responses matters more than your job title.' },
  { q: 'Why take the program if I’ve read the article?', a: 'The program guides you through each level separately, then helps you connect them and practise applying the model. The assessment and workbook bring the learning back to your own patterns and a challenge you want to address.' },
  { q: 'Is there individual coaching or feedback?', a: 'No. This is a self-paced program of recorded teaching and guided exercises. It suits people who want a structured way to learn and reflect independently.' },
  { q: 'What happens when I join the waitlist?', a: 'You’ll be on the list to receive an invitation when enrolment opens. Joining is free, and it does not commit you to purchasing the program.' },
];
