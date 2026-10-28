// Selling from Stage, the full online program (/products/selling-from-stage, $1,997 AUD including GST), rebuilt from
// Remi's copy deck "SELLING FROM STAGE ONLINE PROGRAM LANDING PAGE COPY" and the five-part mockup "SFS STAGE ONLINE
// PROGRAM MOCKUP ONE–FIVE" (Oct 2026; it replaces the earlier seven-page design). Copy carried over word for word from
// the deck (the mockups shorten it; the deck wins). The deck's [TESTIMONIAL PLACEMENT] notes are briefs, not copy:
// TESTIMONIALS is empty and those slots render nothing until verified quotes arrive. Not on sale yet: every "Join the
// waitlist" goes to the closing band (#get). Selling from Stage Fundamentals ($79) is the separate mini course.
// Component: components/sfs-landing/SfsLanding.tsx; styles: styles/sfs-landing.css (.sfs-*); pictures cut from the
// mockups in public/assets/sfs-landing/ (the 13 lesson drawings flattened to white and multiplied).
import { programOf, type Faq, type Testimonial } from '@/content/program-landing';

export const SFS_SLUG = 'selling-from-stage';
export const SFS = programOf(SFS_SLUG);
/** '$1,997 AUD including GST', as the deck prints it; '$1,997' in running copy. */
export const SFS_PRICE = SFS.price.replace(/^AUD\s*(\S+)(.*)$/, '$1 AUD$2');
export const SFS_AMOUNT = SFS.amount.split(' ')[0];
export const FUNDAMENTALS_SLUG = 'selling-from-stage-fundamentals';

/** Verified quotes about learning sales or pitching from Remi (name, business, photo). Empty until real ones arrive. */
export const TESTIMONIALS: Testimonial[] = [];

/** "Five reasons to learn how to sell from stage" — mockup one's icon list. */
export const REASONS = [
  { icon: 'people', name: 'Help more of the right people become clients', text: 'Make the connection between what your audience wants and what your offer helps them achieve. Give people enough clarity to recognise whether working with you makes sense.' },
  { icon: 'target', name: 'Give your presentations a clear commercial purpose', text: 'Choose teaching, stories and examples that deliver value while preparing people to understand your offer. Know where the presentation is going before you begin creating slides.' },
  { icon: 'chat', name: 'Understand why interested people hesitate', text: 'Learn to recognise uncertainty about the offer, the result, the commitment or their own ability to follow through. Address what matters instead of adding more explanation indiscriminately.' },
  { icon: 'growth', name: 'Become more confident making the invitation', text: 'Prepare how you reveal the offer, communicate its value and state the investment. Learn to hold the moment without rushing, apologising or filling every pause.' },
  { icon: 'repeat', name: 'Develop a pitch you can refine and use again', text: 'Create a business asset you can rehearse, deliver and improve. Build on what you learn from each audience rather than starting from a blank page every time.' },
] as const;

/** The 13 lessons, each with its drawing from the mockups (sfs-l01 … sfs-l13). */
export const LESSONS = [
  { name: 'Understand the psychology of buying', text: 'Explore what people may need to feel and understand before they consider investing. Drawing on Ultimate Influence, this lesson examines safety, belonging, certainty, perceived value and the space you create for a buying decision.', result: 'You’ll learn to recognise what may be missing when interest hasn’t yet become a decision.' },
  { name: 'Match your audience, message and offer', text: 'Understand the outcomes your audience wants, the concerns they bring and the reasons your offer might matter to them. Clarify your promise, connect inclusions to benefits and identify relevant supporting evidence.', result: 'You’ll develop an offer brief grounded in the people you want to reach.' },
  { name: 'Design the presentation around the decision', text: 'Choose your event promise, teaching, stories and demonstrations. Use a worked example to understand how the presentation fits together, then plan your own sequence and timing.', result: 'You’ll know what each section contributes and where your offer belongs.' },
  { name: 'Create connection', text: 'Develop an opening that gives people a reason to listen. Work with relevant questions, credibility and warmth to establish rapport and show that you understand why the audience came.', result: 'You’ll build an opening that begins a relationship with the room.' },
  { name: 'Get permission', text: 'Set expectations for the content, your approach and the opportunity you will offer. Learn how to make the commercial purpose clear while keeping the language comfortable and natural.', result: 'You’ll prepare your audience for an invitation that feels like part of the experience.' },
  { name: 'Engage through valuable teaching', text: 'Choose what to teach and demonstrate, and when to involve the audience. Make your ideas understandable through examples while recognising when more information becomes overload.', result: 'You’ll create a teaching segment that delivers value and holds attention.' },
  { name: 'Establish the need for your solution', text: 'Connect your teaching to something the audience wants to change or achieve. Introduce relevant ideas throughout the presentation and address uncertainty before you reveal the offer.', result: 'You’ll help people understand why the solution matters to them.' },
  { name: 'Reveal your offer', text: 'Explain what you offer, who it suits and how it works. Connect important inclusions to their benefits and make the relationship between the teaching and the product clear.', result: 'You’ll present the offer in a way people can understand and assess.' },
  { name: 'Make the offer compelling', text: 'Bring together price, payment options, evidence, relevant bonuses and reassurance. Explain genuine deadlines or limits and the reasons behind the way you’ve structured the offer.', result: 'You’ll communicate the complete value of the opportunity.' },
  { name: 'Invite action', text: 'Prepare how you state the investment, guide the next step and allow space for a response. Make the buying instructions clear for both physical rooms and online presentations.', result: 'You’ll finish with a confident invitation people know how to accept.' },
  { name: 'Return and reassure', text: 'Work through questions about suitability, time, money and implementation. Learn how to respond constructively and recognise when the offer genuinely isn’t right for someone.', result: 'You’ll be better prepared for the conversation after the invitation.' },
  { name: 'Rehearse the complete pitch', text: 'Join the sections and practise your transitions, pace and delivery. Review a recording of yourself using the rehearsal scorecard, then make purposeful changes, including adaptations for webinars.', result: 'You’ll turn your written preparation into a presentation you’re ready to deliver.' },
  { name: 'Follow through and improve', text: 'Plan what happens after someone buys and how you’ll follow up with interested non-buyers. Review audience questions, responses and results before your next presentation.', result: 'You’ll carry the quality of the experience into the client relationship and improve your next pitch.' },
];

export const DEVELOP = [
  'An audience and offer brief that clarifies who you’re speaking to and why they might buy.',
  'A complete presentation structure, from the opening to the final invitation.',
  'Your offer explanation, price presentation and call to action.',
  'Prepared responses to the questions your audience is likely to raise.',
  'A rehearsed pitch, supported by a slide outline.',
  'A follow-up plan for buyers and people who remain interested.',
];

export const GOOD_FIT = [
  'Have an offer, or sufficient clarity about your expertise to develop one as you progress.',
  'Want to sell through live events, workshops, webinars or smaller group presentations.',
  'Are ready to write, rehearse and refine your pitch.',
  'Want a structured method you can deliver in your own voice.',
  'Care about the relationship you create with people before and after they buy.',
];
export const NOT_FOR = [
  'Want someone to write and deliver your pitch for you.',
  'Plan to watch the lessons without applying the work.',
  'Need individual coaching or personal pitch reviews included in the online course.',
];

/** "Your complete enrolment" — the deck's table, with the mockup's line icons. */
export const ENROLMENT = [
  { icon: 'tv', item: '13 in-depth online lessons', does: 'Develop your offer and complete pitch, supported by buying psychology, preparation and follow-through.' },
  { icon: 'document', item: 'Pitch Builder and practical templates', does: 'Apply the teaching to your own business and organise your work.' },
  { icon: 'clipboard', item: 'Worked examples and rehearsal resources', does: 'Understand the method in practice and improve your delivery.' },
  { icon: 'people', item: 'Two-day training with Remi', does: 'Deepen your understanding through focused training. Bonus value: $3,000.' },
  { icon: 'play', item: 'Inside the Pitch: Three Expert Breakdowns', does: 'Learn from Remi’s analysis of three people pitching. Bonus value: $600.' },
  { icon: 'shieldcheck', item: '12-month investment-back guarantee', does: 'Request a complete refund if you don’t earn back your investment from applying the program within 12 months, and keep the materials.' },
] as const;

export const FAQ: Faq[] = [
  { q: 'How is this different from Selling from Stage Fundamentals?', a: 'Fundamentals is a three-video introduction. This full program takes you through buying psychology, offer preparation and each pitch step in depth, with resources to help you construct and rehearse your own presentation. It also includes the two-day training bonus and three expert pitch analyses.' },
  { q: 'Do I need to complete Fundamentals first?', a: 'No. You can begin directly with this program.' },
  { q: 'Do I need a large audience?', a: 'No. Remi’s personal sales experience includes live events, webinars and small teleconferences. The program helps you consider the audience and setting you’re working with, and adapt the presentation accordingly.' },
  { q: 'Can I use this for webinars?', a: 'Yes. The teaching includes applying the method to online presentations, including engagement, delivery and clear instructions for responding to the offer.' },
  { q: 'Do I need to be an experienced speaker?', a: 'You need expertise you can share and a willingness to practise. You don’t need to arrive with a polished presentation.' },
  { q: 'Do I need a finished offer?', a: 'You can refine your offer during the program. You should have a clear area of expertise and an idea of the people you want to help, so you can apply the teaching to a real opportunity.' },
  { q: 'Will Remi review my pitch personally?', a: 'Personal pitch reviews are not included. You receive resources to assess and improve your own work, plus recorded analyses of three people pitching.' },
  { q: 'When is the two-day training?', a: 'The training is held annually, with dates and scheduling determined by Remi Pearson. Enrolled participants will receive the dates and delivery details when announced. Your enrolment includes one place at one annual event.' },
  { q: 'How does the guarantee work?', a: `Apply what you learn in the program. If you don’t earn back your entire ${SFS_AMOUNT} investment from doing so within 12 months of enrolment, you can request a complete refund and keep all the materials.` },
  { q: 'Is GST included?', a: `Yes. The total price is ${SFS_PRICE}.` },
  { q: 'What happens when I join the waitlist?', a: 'You’ll be notified when we’re taking applications again, with the information you need to decide whether to join. Joining the waitlist does not commit you to purchasing.' },
];
