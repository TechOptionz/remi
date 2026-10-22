// Obstacles to Love's sales page (/products/obstacles-to-love), from Remi's copy deck "OBSTACLES TO LOVE LANDING PAGE
// COPY OCT 2026" and the four-panel mockup "OBSTACLES TO LOVE MOCKUP ONE–FOUR" (Oct 2026). Copy carried over word for
// word from the deck (the mockup shortens it; the deck wins); the layout and pictures follow the mockup.
// Component: components/otl-landing/OtlLanding.tsx; styles: styles/otl-landing.css (.otl-*); pictures in
// public/assets/otl-landing/ (cut from the mockup, low resolution) and the note portrait public/assets/bc-landing/bc-note.webp.
import { PROGRAM_PHOTOS, programOf, type Faq, type LeadItem, type Testimonial } from '@/content/program-landing';
import { FREE, priceOf, productHref } from '@/content/products';

export const OTL_SLUG = 'obstacles-to-love';
export const OTL = programOf(OTL_SLUG);

/** A price as the deck prints it: '$49 AUD', or 'Free'. */
export const audOf = (price: string) => price === FREE ? FREE : price.replace(/^AUD\s*(.+)$/, '$1 AUD');
export const OTL_PRICE = audOf(OTL.price);

export const RECOGNISE = [
  'You work hard to maintain connection, even when you’re becoming exhausted.',
  'You want closeness, then feel uncomfortable when someone needs you.',
  'You know your partner’s preferences better than your own.',
  'You find it easier to be useful than to let someone care for you.',
  'You keep hoping someone will become the partner you need.',
  'You become so overwhelmed during conflict that their experience disappears from view.',
  'You’ve forgiven the same behaviour several times, but nothing seems to change.',
  'You care deeply, yet the relationship has become mostly logistics and unfinished conversations.',
];

/** "When patterns remain unexamined:" — drawn in the mockup as six ringed icons across the burgundy band. */
export const UNEXAMINED: (LeadItem & { icon: 'person' | 'rings' | 'shield' | 'chat' | 'heart' | 'scales' })[] = [
  { icon: 'person', lead: 'You can lose touch with your own needs.', text: 'Keeping the relationship becomes more familiar than asking whether it works for you.' },
  { icon: 'rings', lead: 'You may keep mistaking familiarity for compatibility.', text: 'A recognisable dynamic can draw you in even when it repeatedly hurts.' },
  { icon: 'shield', lead: 'Protection can become distance.', text: 'The responses that help you avoid exposure can also make it difficult for someone trustworthy to know you.' },
  { icon: 'chat', lead: 'Unresolved hurt can shape new conversations.', text: 'You begin responding to what you expect will happen.' },
  { icon: 'heart', lead: 'Care can become difficult to feel.', text: 'Good intentions remain, while attention, affection and responsiveness become less available.' },
  { icon: 'scales', lead: 'You can take responsibility for too much, or too little.', text: 'You blame yourself for the whole relationship or overlook the impact of your own behaviour.' },
];

export const LEARN = [
  'Recognise when fear is influencing how you reach for or retreat from connection.',
  'Notice where you silence yourself to preserve a relationship.',
  'Understand conflicting responses within you with more curiosity.',
  'Distinguish what someone is offering from what you hope they will offer.',
  'Ask for support while respecting the other person’s needs and limits.',
  'Consider your impact without taking responsibility for everything.',
  'Identify hurt that still needs attention.',
  'Express care in ways the other person can experience.',
  'Choose one practical place to begin.',
];

/** One of the seven videos: its number word and title, the quotation, the paragraphs, then the four labelled parts. */
export type Obstacle = { n: string; name: string; quote: string; text: string[]; explore: string[]; cost: string; take: string; practice: string };

export const VIDEOS: Obstacle[] = [
  { n: 'one', name: 'When fear starts making the decisions',
    quote: '“I want to feel close, but I keep doing things that make closeness harder.”',
    text: ['A delayed reply can become an urgent need for reassurance. A request for more time together can leave you feeling crowded. You may alternate between wanting someone nearer and needing them further away.', 'This video introduces attachment-related patterns and helps you consider both your expectations and what is actually happening in the relationship.'],
    explore: ['How fear can shape the way you pursue or avoid connection.', 'What you do when you feel uncertain about someone.', 'How your response affects the interaction between you.', 'Why another person’s current behaviour matters too.'],
    cost: 'You can spend more energy trying to secure connection or escape discomfort than discovering whether the relationship is caring and reliable.',
    take: 'A simple reflection process to separate the event, the fear and your next move, so you can consider a clearer request.',
    practice: 'What happened? What did I fear? What did I do? What could I ask for?' },
  { n: 'two', name: 'Losing yourself to keep the relationship',
    quote: '“I can tell you what they need. I’m less sure what I need.”',
    text: ['You say you don’t mind. You accommodate another change of plan. You hold back a preference because it feels easier than disappointing someone. Over time, there may be less of you available to be known.'],
    explore: ['The difference between chosen compromise and repeatedly silencing yourself.', 'How fear of disconnection can influence your decisions.', 'Making room for two people’s preferences and limits.', 'Remaining connected while allowing differences.'],
    cost: 'Resentment can build around agreements you never wanted to make. Your partner may also have little opportunity to understand what matters to you.',
    take: 'A way to identify one small truth you’ve been withholding and practise expressing it with care.',
    practice: 'What have I been saying is fine when it isn’t fine for me?' },
  { n: 'three', name: 'Being so protected that care struggles to reach you',
    quote: '“I want someone to know me, but I don’t want them to see how much I need them.”',
    text: ['Perhaps you’re capable, helpful and easy to rely on. Receiving care is more complicated. You may dismiss reassurance, make a joke when something becomes tender or keep your more vulnerable feelings out of view.', 'This video introduces parts work as a way to understand conflicting inner responses.'],
    explore: ['The part of you that wants connection and the part that fears it.', 'What protective responses may be trying to prevent.', 'How to approach those responses with curiosity.', 'Taking a small step towards openness with someone who has shown themselves trustworthy.'],
    cost: 'You can remain admired for what you offer while feeling unseen in what you need. People may care about you without knowing how to reach you.',
    take: 'Language for noticing inner conflict without immediately judging yourself or forcing yourself to be vulnerable.',
    practice: '“A part of me wants … and another part is worried that …”' },
  { n: 'four', name: 'Relating to the person you hope they will become',
    quote: '“If they would just change this, we could finally be happy.”',
    text: ['You can see their potential. You understand why they struggle. You’ve explained what would help, perhaps many times. Meanwhile, the relationship you’re experiencing remains different from the relationship you keep imagining.'],
    explore: ['The difference between supporting someone and managing their growth.', 'What you observe, what you hope for and what you need.', 'Allowing another person to be themselves while making your own choices.', 'Considering compatibility without having to make either person wrong.'],
    cost: 'You can invest months or years in a hoped-for future while repeatedly setting aside the information available now.',
    take: 'A clearer way to consider the relationship as it is, make an honest request and identify a decision that belongs to you.',
    practice: 'What am I observing? What am I hoping for? What do I need to decide?' },
  { n: 'five', name: 'Losing sight of each other when feelings get intense',
    quote: '“Once I’m upset, all I can think about is making this feeling stop.”',
    text: ['You may need reassurance immediately. Your partner may want to leave the conversation. Both of you can become so occupied with your distress that caring for each other becomes difficult.', 'This video explores co-regulation and shared emotional responsibility.'],
    explore: ['How distress can affect your capacity to listen.', 'Asking for support in a specific, realistic way.', 'Offering comfort without becoming responsible for every feeling.', 'Communicating limits while remaining considerate.', 'Taking space with an agreed return.'],
    cost: 'One person’s attempt to feel better can leave the other feeling overwhelmed or abandoned. The interaction can become increasingly difficult for both.',
    take: 'A starting point for discussing what helps each of you when emotions rise, including what you can reasonably offer.',
    practice: '“When this happens, something that would help me is … What would help you?”' },
  { n: 'six', name: 'Letting hurt accumulate without repair',
    quote: '“We’ve moved on, apparently. But I’m still carrying it.”',
    text: ['You’re talking again, but something remains unsettled. Perhaps the apology was vague, the impact was dismissed or the behaviour happened again. Perhaps you’re the person who wants everything to feel normal before you’ve understood what needs attention.'],
    explore: ['Recognising when hurt remains unresolved.', 'Listening to impact without immediately defending intention.', 'Taking responsibility for a specific behaviour.', 'Considering what needs to change after an apology.'],
    cost: 'You can become increasingly guarded, or find that old hurt returns in new disagreements. Apologies may become harder to trust.',
    take: 'A thoughtful opening for a repair conversation and a clearer understanding of your own contribution.',
    practice: '“I’ve been thinking about what happened. I can see that I … and I want to understand how that affected you.”' },
  { n: 'seven', name: 'Assuming love is understood while everyday connection fades',
    quote: '“Of course I love you. I just haven’t been showing you in ways you can feel.”',
    text: ['Life becomes busy. Conversations become practical. You know what needs doing, but perhaps less about what your partner has been feeling. Appreciation stays in your head, and affection becomes something you intend to offer when there is more time.'],
    explore: ['The attention you bring to everyday interactions.', 'Assumptions that can replace curiosity.', 'Expressing appreciation and affection in welcome ways.', 'Discovering what feels connecting to each of you now.'],
    cost: 'You can care deeply and still leave each other feeling unnoticed. The relationship may function while closeness becomes less familiar.',
    take: 'A simple conversation to help you discover where connection is already present and what you both miss.',
    practice: '“When do you feel close to me? Is there something you miss between us?”' },
];

/** The photo beside each video, cut from the mockup (otl-v1 … otl-v7); rows alternate sides as drawn. */
export const VIDEO_IMAGES = [
  { alt: 'A woman on a sofa, chin in her hand, looking away in thought', width: 475, height: 297 },
  { alt: 'A woman listening, chin in her hand, as a man talks with open hands', width: 506, height: 299 },
  { alt: 'A man sitting alone, chin in his hand, deep in thought', width: 475, height: 301 },
  { alt: 'A woman lost in thought while a man beside her watches her', width: 474, height: 288 },
  { alt: 'A woman holding a mug, listening to a man as he explains something', width: 485, height: 297 },
  { alt: 'A woman listening, chin in her hand, as a man in glasses talks to her', width: 510, height: 301 },
  { alt: 'A couple outdoors in autumn light, smiling at each other', width: 482, height: 303 },
];

export const WORKBOOK = [
  'Which patterns you recognise and when they tend to appear.',
  'What you may be trying to protect.',
  'How your behaviour affects you and the other person.',
  'What the relationship is actually offering.',
  'What you can practise yourself and what needs mutual participation.',
  'Which next step feels useful and manageable.',
];

export const INCLUDES = [
  'Seven focused teaching videos.',
  'A practical workbook.',
  'Everyday examples to help you recognise the patterns.',
  'A first practice for each obstacle.',
  'A guide to choosing relevant further learning.',
];

/** "Where would you like to go next?": the deck's heading, the program, its line and link. Prices come from
 *  content/products.ts (the deck prints The Five Paths at $79; the catalogue's price is used). Each card shows a photo from the linked program's own page (PROGRAM_PHOTOS). */
export const NEXT = [
  { head: 'Understand what fear is doing in your relationships', title: 'Attachment or Love?', slug: 'attachment-or-love',
    text: 'Three introductory videos exploring attachment patterns, shared emotional safety and caring for each other when something hurts.' },
  { head: 'Strengthen the wider foundations of your relationship', title: 'The Five Paths to a Healthy Relationship', slug: 'five-paths-to-a-healthy-relationship',
    text: 'Explore what you each bring, how you respond to each other and the relationship you want to build.' },
  { head: 'Learn how to return after a difficult moment', title: 'Finding Our Way Back', slug: 'finding-our-way-back',
    text: 'Explore how to revisit a disagreement, understand the hurt and make agreements you can follow through on.' },
  { head: 'Stay present without taking over', title: 'Holding Space Without Rescuing or Disappearing', slug: 'holding-space-without-rescuing-or-disappearing',
    text: 'Explore how to listen and support someone while respecting their autonomy and your own limits.' },
  { head: 'Support yourself when emotions become intense', title: 'Self-Regulation When It Matters', slug: 'self-regulation-when-it-matters',
    text: 'Learn more about your responses to pressure and explore ways to support yourself when you become overwhelmed, defensive or withdrawn.' },
  { head: 'Bring more awareness to everyday experience', title: 'Becoming Conscious', slug: 'becoming-conscious',
    text: 'A simple introduction to presence, bodily awareness and noticing thoughts as they arise.' },
].map((n, i) => ({ ...n, href: productHref(n.slug), price: audOf(priceOf(n.slug)), image: PROGRAM_PHOTOS[n.slug] }));

/** The planned program at the end of "Where would you like to go next?" (no page yet; the box takes a sign-up). */
export const PLANNED = { title: 'Getting to Know All of You', price: '$149 AUD' };

export const FAQ: Faq[] = [
  { q: 'Is this for people who are single or in a relationship?', a: 'Both. You can reflect on a current relationship or patterns you have noticed across previous relationships. The emphasis is on recognising your experience and finding a useful place to begin.' },
  { q: 'Do I need to know my attachment style?', a: 'No. The program introduces relevant patterns in everyday language. You don’t need a label before you can explore what happens when connection feels uncertain.' },
  { q: 'Will this tell me whether I should stay or leave?', a: 'No. It gives you questions and distinctions to help you consider your experience more clearly. Your needs, compatibility and the other person’s behaviour all matter in that decision.' },
  { q: 'Does this mean the problems are my fault?', a: 'No. Some difficulties involve your own responses, some emerge between you and some concern behaviour you are receiving. Understanding your contribution does not make you responsible for another person’s choices.' },
  { q: 'What if my partner won’t do the program?', a: 'You can learn and reflect individually. Some changes are yours to practise, while mutual connection and repair require the other person’s participation.' },
  { q: 'Is this an IFS course?', a: 'It includes a gentle introduction to parts as one way of understanding conflicting inner responses. It does not teach a full IFS process or provide practitioner training.' },
  { q: 'Will seven videos resolve my relationship patterns?', a: 'The program offers an introduction, practical reflection and first steps. Changing longstanding patterns can take continued practice and, sometimes, personalised support.' },
  { q: 'Is this therapy?', a: 'No. It is an independent educational program with self-paced videos and a workbook. It does not include individual assessment or therapy.' },
  { q: 'What if my relationship involves intimidation or abuse?', a: 'This program does not ask you to reinterpret harmful behaviour as your own obstacle to love. Where there is coercion, intimidation or abuse, safety and individual specialist support take priority over shared relationship exercises.' },
  { q: `What do I receive for ${OTL_PRICE}?`, a: 'Seven focused videos, a practical workbook and a first practice for each of the seven themes.' },
  { q: 'Do I need to buy the other programs?', a: 'No. The program includes its own explanations, reflection prompts and practices. Further learning is optional.' },
];

/** Two approved, exact quotations about learning with Remi, with accurate attribution and the relevant program where
 *  appropriate. Empty until real ones arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
