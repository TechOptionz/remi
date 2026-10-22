// Finding Our Way Back's sales page (/products/finding-our-way-back; retitled from "Conflict, Repair and Harmony"),
// from Remi's copy deck "FINDING OUR WAY BACK LANDING PAGE OCT 2026" and the three-panel mockup "FINDING OUR WAY BACK
// … MOCKUP ONE–THREE" (Oct 2026). Copy carried over word for word from the deck (the mockup shortens it; the deck
// wins); the layout and pictures follow the mockup. Component: components/fwb-landing/FwbLanding.tsx; styles:
// styles/fwb-landing.css (.fwb-*); pictures in public/assets/fwb-landing/ (cut from the mockup, low resolution) and the
// note portrait public/assets/dsr-landing/dsr-hero.webp (the HD podcast-studio portrait the mockup draws).
import { PROGRAM_PHOTOS, programOf, type Faq, type LeadItem, type Testimonial } from '@/content/program-landing';
import { priceOf, productHref } from '@/content/products';
import { audOf } from '@/content/otl-landing';

export const FWB_SLUG = 'finding-our-way-back';
export const FWB = programOf(FWB_SLUG);
/** The price as the deck prints it: '$29 AUD'. */
export const FWB_PRICE = audOf(FWB.price);

export const RECOGNISE = [
  'You say, “That’s not what I meant,” before you’ve understood how it felt for them.',
  'You apologise because you want the tension to end, but neither of you knows what will change.',
  'You need space, while your partner is left wondering whether you’ll ever return to the conversation.',
  'You keep explaining your hurt because you don’t feel it has been understood.',
  'You resume everyday life while quietly becoming less open with each other.',
  'You want to reach out, but you’re afraid of being dismissed again.',
  'You care deeply about the relationship and still struggle to find your way through a difficult moment.',
];

/** "Over time:" — drawn in the mockup as five gold line icons across the charcoal band. */
export const OVER_TIME: (LeadItem & { icon: 'chat' | 'heart' | 'shield' | 'gear' | 'people' })[] = [
  { icon: 'chat', lead: 'We become more guarded.', text: 'There are things we stop sharing because being misunderstood feels too costly.' },
  { icon: 'heart', lead: 'Small moments carry old hurt.', text: 'Today’s disagreement arrives with the weight of previous conversations.' },
  { icon: 'shield', lead: 'We lose confidence in apologies.', text: 'Reassuring words become harder to trust when the behaviour stays the same.' },
  { icon: 'gear', lead: 'We spend more energy managing tension.', text: 'We monitor moods, avoid subjects or rehearse conversations in our heads.' },
  { icon: 'people', lead: 'We can feel lonely together.', text: 'The relationship continues, but feeling understood becomes less familiar.' },
];

export const LEARN = [
  'Recognise when a conversation is slipping into defensiveness or withdrawal.',
  'Raise a concern without turning it into a judgement of someone’s character.',
  'Offer a small attempt to reconnect before tension escalates further.',
  'Ask for a pause with a clear commitment to return.',
  'Listen to someone’s hurt without immediately arguing with their interpretation.',
  'Acknowledge your impact while remaining honest about your own experience.',
  'Offer an apology that names what you are taking responsibility for.',
  'Make a realistic agreement about what you’ll do differently.',
  'Follow up, so the conversation has a chance to change everyday behaviour.',
  'Recognise the limits of what you can repair on your own.',
];

/** The introduction and each video: its label and title, the question, the paragraph, then the three labelled parts
 *  and (for the videos) an example of what you might say. */
export type Part = { label: string; name: string; question?: string; text: string; cover: string[]; why: string; gives: string; say?: string };

export const INTRO: Part = {
  label: 'A short introduction', name: 'Why things can still feel unfinished',
  text: 'You’ve stopped arguing, but have you understood each other? This introduction explores what can remain after the tension settles and why returning to a conversation may matter.',
  cover: ['The difference between calming down and addressing what happened.', 'Why everyday differences need room for discussion.', 'What repair asks of each person.', 'How to use the program individually or together.'],
  why: 'Without a shared understanding of repair, one person may think everything is resolved while the other is still waiting to be heard.',
  gives: 'A clearer sense of what you’re trying to do when you return to a difficult moment.',
};

export const VIDEOS: Part[] = [
  { label: 'Video one', name: 'When the conversation starts going wrong',
    question: 'How do we interrupt the damage while keeping the issue open for discussion?',
    text: 'Sometimes you can feel the conversation turning. Your voice changes, you start building your defence, or you want to leave immediately. This video helps you recognise that moment and consider your next move.',
    cover: ['Bringing up a specific concern with less blame.', 'Recognising your own contribution to escalation.', 'Making and receiving small attempts to reconnect.', 'Taking a pause with an agreed return.'],
    why: 'When a conversation becomes increasingly hurtful, the original concern can disappear beneath everything said in response to it.',
    gives: 'Practical ways to slow the interaction and preserve an opportunity to talk about what matters.',
    say: '“I’m getting defensive, and I’m losing track of what you’re trying to tell me. Can we slow this down?”' },
  { label: 'Video two', name: 'Can I understand your hurt without defending myself?',
    question: 'Can your experience matter to me when it is uncomfortable to hear?',
    text: 'It is difficult to listen when you feel accused or misunderstood. This video explores how to remain interested in your partner’s experience while retaining your own perspective.',
    cover: ['Separating your intention from the impact of your behaviour.', 'Listening before explaining.', 'Acknowledging feelings without pretending to agree with every interpretation.', 'Taking responsibility without immediately adding a counteraccusation.', 'Making room for both experiences without assuming equal blame.'],
    why: 'A person can hear your explanation and still feel that their hurt has barely been acknowledged. Understanding requires enough curiosity to discover something you may have missed.',
    gives: 'A way to approach the conversation with more openness and clearer responsibility.',
    say: '“I can understand why you felt dismissed when I walked away. I was overwhelmed, and I still need to take responsibility for how I left.”' },
  { label: 'Video three', name: 'What will be different after this conversation?',
    question: 'How do we turn understanding into something we can rely on?',
    text: 'A thoughtful conversation creates an opening. What happens afterwards helps determine whether that opening becomes a change in how you relate.',
    cover: ['Making a specific apology.', 'Asking what would help now.', 'Agreeing on a realistic change in behaviour.', 'Returning to the agreement and checking how it is working.', 'Allowing closeness to return without demanding immediate forgiveness.', 'Recognising repeated apologies that are not followed by change.'],
    why: 'It is easier to trust an agreement when you can see it being honoured. Follow-through gives your partner something beyond your intentions to rely on.',
    gives: 'A practical way to carry the conversation into everyday life, with space to revisit what still needs attention.',
    say: '“Next time I need a break, I’ll tell you rather than walking out. We’ll agree on when to return, and I’ll take responsibility for restarting the conversation.”' },
];

/** The photo beside each video, cut from the mockup (fwb-v1 … fwb-v3); rows alternate left, right, left as drawn. */
export const VIDEO_IMAGES = [
  { alt: 'A woman on a sofa, chin in her hand, listening to a man as he talks with open hands', width: 521, height: 308 },
  { alt: 'A woman listening thoughtfully, chin in her hand, as a man speaks to her', width: 499, height: 304 },
  { alt: 'A woman resting her head on her hand while a man in glasses talks with her', width: 521, height: 286 },
];

export const WORKBOOK = [
  'What you tend to do when tension rises.',
  'What happened and what you understood it to mean.',
  'What you now understand about the other person’s experience.',
  'What you can honestly take responsibility for.',
  'How you will ask for space and return.',
  'What you want to agree on and revisit.',
];

export const INCLUDES = [
  'A short introductory video.',
  'Three core teaching videos.',
  'A practical workbook with reflection prompts and example language.',
  'Self-paced learning you can work through individually or together.',
];

/** "Continue with the support that fits what you’re noticing": the deck's quotation, the program, its line and link.
 *  Prices come from content/products.ts (the deck prints The Five Paths at $79 AUD; the catalogue's price is used).
 *  Each row shows a photo from the linked program's own page (PROGRAM_PHOTOS). */
export const NEXT = [
  { head: '“I want to listen without taking over or disappearing.”', title: 'Holding Space Without Rescuing or Disappearing', slug: 'holding-space-without-rescuing-or-disappearing',
    text: 'Explore how to remain present with someone’s experience while respecting their autonomy and your own limits.' },
  { head: '“When things get intense, I struggle to stay engaged.”', title: 'Self-Regulation When It Matters', slug: 'self-regulation-when-it-matters',
    text: 'Explore your responses to pressure and learn ways to support yourself when you become defensive, overwhelmed or withdrawn.' },
  { head: '“We want to strengthen the relationship beyond the arguments.”', title: 'The Five Paths to a Healthy Relationship', slug: 'five-paths-to-a-healthy-relationship',
    text: 'Explore the wider foundations of your relationship, including what you each bring, how you respond to each other and the relationship you want to build.' },
  { head: '“I want to understand what fear is doing in my relationships.”', title: 'Attachment or Love?', slug: 'attachment-or-love',
    text: 'Three introductory videos exploring attachment patterns, shared emotional safety and what caring for each other looks like when something hurts.' },
  { head: '“I’d like to explore what gets in the way of closeness.”', title: 'Obstacles to Love', slug: 'obstacles-to-love',
    text: 'Explore this related program for further learning about the difficulties you bring to connection.' },
].map((n, i) => ({ ...n, href: productHref(n.slug), price: audOf(priceOf(n.slug)), image: PROGRAM_PHOTOS[n.slug] }));

export const FAQ: Faq[] = [
  { q: 'Do we both need to do the program?', a: 'You can begin on your own. The videos and workbook can help you understand your responses, prepare for a conversation and become clearer about what you want to take responsibility for. Shared repair requires the other person’s participation too.' },
  { q: 'What if my partner won’t talk about what happened?', a: 'You can make an invitation and explain why the conversation matters to you. You cannot make someone participate, listen or take responsibility. The program helps you consider your contribution without making you responsible for repairing the entire relationship.' },
  { q: 'What if we remember the disagreement differently?', a: 'You can explore how each person experienced it without first agreeing on every detail. That doesn’t require you to accept an inaccurate account or dismiss a specific behaviour. The aim is to understand each other more clearly while remaining honest.' },
  { q: 'Does taking responsibility mean accepting all the blame?', a: 'No. You are looking honestly at your own behaviour and its impact. Both people deserve to be heard, and responsibility does not have to be equally divided.' },
  { q: 'What if I need space before I can talk?', a: 'A pause can be useful. The program explores how to communicate that need, agree on a return and take responsibility for following through.' },
  { q: 'Is saying sorry enough?', a: 'Sometimes a straightforward apology is all a small misunderstanding needs. Other situations need more conversation, a specific change or time to rebuild trust. You’ll explore how to move beyond a general apology when something remains unresolved.' },
  { q: 'Will this stop us from arguing?', a: 'That isn’t the promise. You will still have differences. This program introduces ways to approach difficult conversations and respond when hurt has occurred.' },
  { q: 'What if the relationship involves intimidation or abuse?', a: 'This program is designed for everyday conflict where both people can participate safely. It is not a process for managing coercion, threats or abuse, and does not ask you to take shared responsibility for someone else’s harmful behaviour. Those situations call for individual, specialist support.' },
  { q: 'Is this couples therapy?', a: 'No. It is a short educational program with videos and a workbook. It does not include individual assessment or personalised therapeutic support.' },
  { q: `What do I receive for ${FWB_PRICE}?`, a: 'A short introduction, three core videos and a practical workbook.' },
  { q: 'Do I need to buy another program first?', a: 'No. Finding Our Way Back stands on its own. The related resources are optional.' },
];

/** Two approved, exact quotations about learning with Remi, with accurate attribution and the relevant program where
 *  appropriate. Empty until real ones arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
