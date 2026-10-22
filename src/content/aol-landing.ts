// Attachment or Love?'s registration page (/products/attachment-or-love), from Remi's copy deck "ATTACHMENT OR LOVE
// LANDING PAGE" and the three-panel mockup "ATTACHMENT OR LOVE MOCKUP ONE–THREE" (Oct 2026). A free three-video series:
// the page's goal is registration (first name and email), with the deck's own "If you would like to keep exploring"
// cards. Copy carried over word for word from the deck (the mockup shortens it; the deck wins); the layout and pictures
// follow the mockup. Component: components/aol-landing/ (AolLanding.tsx, RegisterForm.tsx); styles:
// styles/aol-landing.css (.aol-*); pictures in public/assets/aol-landing/ (cut from the mockup, low resolution), the
// hero public/assets/sr-landing/sr-meditation.webp and the note portrait public/assets/hs-landing/hs-note.webp (HD photos
// of Remi, the ones the mockup draws).
import { programOf, type Faq, type LeadItem, type Testimonial } from '@/content/program-landing';
import { priceOf, productHref } from '@/content/products';
import { audOf } from '@/content/otl-landing';

export const AOL_SLUG = 'attachment-or-love';
export const AOL = programOf(AOL_SLUG);
export const AOL_TITLE = 'Attachment or Love?';
/** The list a registration joins only if the person ticks the marketing choice (see /api/lead). */
export const AOL_SEGMENT = AOL.segment;

/** Video one, once the series is recorded and access works. While it is null the form thanks the person and says the
 *  access link will be emailed; once set, it shows a "Watch video one" button. Set it only when the access email goes out too. */
export const AOL_WATCH_HREF: string | null = null;

export const RECOGNISE = [
  'You feel unable to settle until you know that everything is okay between you.',
  'You analyse changes in tone, delayed replies or small signs of distance.',
  'You keep overriding your own needs because losing the connection feels worse.',
  'You want a relationship, but feel trapped when closeness brings expectations.',
  'You withdraw without explaining when, or whether, you will return.',
  'You hear your partner’s hurt as criticism and begin defending yourself.',
  'You feel responsible for keeping them emotionally okay, even when you are exhausted.',
  'You have been told to “deal with your triggers” when you were asking for consideration.',
  'You feel enormous relief when affection returns, but little changes in the pattern.',
  'You want a relationship where you can need each other without losing yourselves.',
];

/** "What can happen when fear keeps directing the relationship?" */
export const FEAR: LeadItem[] = [
  { lead: 'You begin abandoning yourself to preserve connection.', text: 'You tolerate what hurts, minimise what you need or stay silent because expressing yourself feels too risky.' },
  { lead: 'You keep retreating from the closeness you want.', text: 'Distance brings relief, but the difficult conversation remains and the other person is left uncertain.' },
  { lead: 'Your relationship becomes organised around preventing distress.', text: 'Both people become careful about what can be said, rather than confident that difficult feelings can be met.' },
  { lead: 'You mistake the end of tension for the repair of hurt.', text: 'Affection returns, but the behaviour that caused pain goes unaddressed.' },
  { lead: 'You lose trust in your own experience.', text: 'You wonder whether every concern is “just your attachment”, even when something genuinely needs attention.' },
  { lead: 'You overlook your effect on each other.', text: 'Protecting yourself becomes so urgent that there is little room to understand what your partner is experiencing.' },
];

/** "What these three videos can help you understand" — "You’ll begin exploring how to:" */
export const EXPLORE: LeadItem[] = [
  { lead: 'Distinguish the pull of connection from the quality of a relationship.', text: 'Longing and relief are experiences worth understanding; neither tells the whole story.' },
  { lead: 'Recognise what happens when you feel threatened.', text: 'Notice whether you pursue, withdraw or override yourself to regain a sense of security.' },
  { lead: 'Consider both your history and the present relationship.', text: 'Your sensitivity matters, and so does how you are being treated now.' },
  { lead: 'Understand co-regulation in everyday language.', text: 'Explore how reassurance, responsiveness and clear communication can help partners support each other.' },
  { lead: 'Recognise trustworthy behaviour.', text: 'Look at consistency and follow-through alongside affection and promises.' },
  { lead: 'Stay interested when someone tells you they are hurting.', text: 'Consider your impact without immediately defending your intentions.' },
  { lead: 'Look for reciprocity.', text: 'Notice whether both people’s needs and experiences have a meaningful place.' },
  { lead: 'Identify what you would like to explore next.', text: 'Leave with clearer questions about your patterns, your relationship and the support that might help.' },
];

/** One of the three videos: its number word, title, the question, the paragraphs, then the three labelled parts. */
export type Video = { n: string; name: string; question: string; text: string[]; covers: string[]; why: string; gives: string };

export const VIDEOS: Video[] = [
  { n: 'one', name: 'What Is Drawing Me In?',
    question: 'What am I drawn to in this relationship, beyond the relief of being wanted?',
    text: ['Sometimes we become so focused on securing someone’s attention that we have little room to consider how we actually experience the relationship. At other times, we want connection until it becomes close enough to make us feel exposed.', 'This video invites you to consider the person you know, the relationship you have and the future you may be hoping for.'],
    covers: ['The difference between enjoying someone and continually monitoring where you stand.', 'Why affection returning can feel so powerful when you have been uncertain.', 'What happens when closeness becomes available and you feel the urge to retreat.', 'The role of self-trust in acknowledging what you notice.', 'Looking for trustworthiness in behaviour rather than relying entirely on hope.'],
    why: 'You can spend a great deal of emotional energy maintaining a connection without asking whether it gives both people room to be known and cared for.',
    gives: 'A clearer way to examine what draws you in, what keeps you there and what the repeated pattern shows you.' },
  { n: 'two', name: 'Can We Help Each Other Feel Safe Without Losing Ourselves?',
    question: 'When either of us becomes distressed, how do we care for ourselves and remain considerate of each other?',
    text: ['We need connection, and we affect each other. Being able to turn towards someone for comfort is a meaningful part of intimacy.', 'This video introduces co-regulation and the distinction between contributing to someone’s emotional safety and becoming responsible for preventing every uncomfortable feeling they experience.'],
    covers: ['Asking for reassurance without making another person responsible for your entire emotional balance.', 'Offering comfort while remaining honest about your capacity.', 'Taking space with consideration, including communicating and following through on a return.', 'Recognising when protecting yourself leaves your partner’s experience unattended.', 'Considering whether distress reflects an old fear, present behaviour or a combination of both.'],
    why: '“Take responsibility for yourself” can become cold and dismissive when it is used to avoid care. “If you loved me, you would make me feel better” can place an impossible demand on the other person. Understanding the distinction gives both people more room.',
    gives: 'A warmer, more balanced understanding of personal responsibility and the support partners can offer each other.' },
  { n: 'three', name: 'When You Hurt, Does It Matter to Me?',
    question: 'When we hurt each other, are we willing to understand our impact and change how we relate?',
    text: ['Someone says, “That hurt.” What happens next can tell us a great deal.', 'Do we become curious? Do we explain why they shouldn’t feel that way? Do we offer an apology and expect the subject to close? Can we remain interested long enough to understand what needs attention?', 'This video explores the willingness to respond to hurt and revisit how we are treating one another.'],
    covers: ['Listening to someone’s experience before defending your intentions.', 'Recognising what you contributed without automatically accepting every interpretation.', 'Asking what would feel supportive now.', 'Connecting an apology with action and a change in behaviour.', 'Revisiting an agreement to see whether it is actually helping.', 'Looking at how trust is supported, damaged and gradually rebuilt through behaviour.'],
    why: 'A relationship can return to normal while the hurt remains unresolved. Understanding what repair asks of us helps us look beyond the relief of an argument ending.',
    gives: 'A way to recognise care through responsiveness and follow-through, including your own willingness to offer them.' },
];

/** The photo beside each video, cut from the mockup (aol-v1 … aol-v3, the drawn play buttons painted out and redrawn
 *  in code at the same place); rows alternate sides as drawn. */
export const VIDEO_IMAGES = [
  { alt: 'A woman sitting by a window, chin in her hand, deep in thought', width: 469, height: 344 },
  { alt: 'A man and a woman at a kitchen table with mugs, looking at each other as they talk', width: 467, height: 377 },
  { alt: 'A woman on a sofa, chin in her hand, listening to a man beside her', width: 495, height: 365 },
];

/** "If you would like to keep exploring": the deck's quotation, the program, its line. Prices come from
 *  content/products.ts (the deck prints The Five Paths at $79; the catalogue's price is used), and the deck's
 *  "Conflict, Repair and Harmony" is now titled "Finding Our Way Back". */
export const NEXT = [
  { quote: '“We get through the argument, but the hurt keeps returning.”', title: 'Finding Our Way Back', slug: 'finding-our-way-back',
    text: 'Explore what happens after a rupture and what deserves attention when you want to find your way back to each other.' },
  { quote: '“I want to be there for someone without fixing everything or shutting down.”', title: 'Holding Space Without Rescuing or Disappearing', slug: 'holding-space-without-rescuing-or-disappearing',
    text: 'Learn how to stay with a difficult conversation, understand what support is wanted and remain honest about your own limits.' },
  { quote: '“I want a clearer understanding of what a healthy relationship asks of both people.”', title: 'The Five Paths to a Healthy Relationship', slug: 'five-paths-to-a-healthy-relationship',
    text: 'Explore what you bring into the relationship, everyday connection, making room for both people, repair and building a shared life you want to participate in.' },
  { quote: '“I want to understand what keeps getting in the way of the love I want.”', title: 'Obstacles to Love', slug: 'obstacles-to-love',
    text: 'Continue exploring what makes the connection you want difficult to experience or sustain.' },
].map(n => ({ ...n, href: productHref(n.slug), price: audOf(priceOf(n.slug)).replace(/^(.+) AUD$/, 'AUD $1') }));

export const FAQ: Faq[] = [
  { q: 'Is the series really free?', a: 'Yes. Attachment or Love? includes three free teaching videos with Remi. Enter your first name and email address to access the series. There is no requirement to purchase another program.' },
  { q: 'Does the title mean attachment is bad and love is good?', a: 'No. Healthy attachment is part of love. The series explores what happens when fear of losing connection, or discomfort with closeness, starts directing how we relate. Love and attachment difficulties can coexist.' },
  { q: 'Will this tell me whether my partner loves me?', a: 'No. Three videos cannot determine another person’s feelings or intentions. The series helps you examine behaviour, responsiveness and the repeated pattern between you, rather than rely only on declarations or emotional intensity.' },
  { q: 'Do I need to know my attachment style?', a: 'No. We begin with experiences you can recognise. You do not need a label or prior knowledge of attachment theory.' },
  { q: 'What if my partner really is behaving hurtfully?', a: 'Understanding attachment does not require explaining away harmful behaviour. The series makes room for both your personal history and what is happening in the present relationship. A legitimate concern does not become invalid because you have attachment wounds.' },
  { q: 'Are we responsible for each other’s emotional safety?', a: 'We contribute to each other’s emotional safety through how we behave. Neither person can guarantee the other will always feel secure, but both remain responsible for offering respect and consideration. The second video explores how that works alongside personal responsibility and boundaries.' },
  { q: 'What if I tend to pull away rather than seek reassurance?', a: 'That is included. We explore both the urgency to preserve connection and the urge to escape when closeness becomes difficult. You may recognise different responses in different situations.' },
  { q: 'Can I watch if I’m single?', a: 'Yes. You can reflect on past experiences, notice patterns and consider what you want to bring into a future relationship.' },
  { q: 'Is this therapy or an attachment assessment?', a: 'No. This is an educational introduction, with questions to support reflection. It does not diagnose an attachment style, provide therapy or determine whether you should stay in a relationship.' },
  { q: 'What if my relationship involves fear, threats or coercion?', a: 'Those concerns need more than a communication lesson. This series is not designed to address abuse, and you are not being asked to become more understanding at the expense of your safety. Specialist support may be the more appropriate next step.' },
  { q: 'Do I need to buy the other programs?', a: 'No. The free series stands on its own as an introduction. The further programs are there if you want to continue exploring a particular area.' },
];

/** Two approved, exact quotations about learning with Remi (ideally relating to relationship awareness, emotional
 *  understanding or feeling heard), with the person's name and accurate program or context. Empty until real ones
 *  arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
