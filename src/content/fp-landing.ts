// The Five Paths to a Healthy Relationship's sales page (/products/five-paths-to-a-healthy-relationship), from Remi's
// copy deck "THE FIVE PATHS TO A HEALTHY RELATIONSHIP LANDING PAGE OCT 2026" and the three-panel mockup "THE FIVE PATHS
// TO A HEALTHY RELATIONSHIP MOCKUP ONE–THREE" (Oct 2026). Copy carried over word for word from the deck (the mockup
// shortens it; the deck wins); the layout and pictures follow the mockup. The deck prints the price as AUD $79; the
// catalogue's price (content/products.ts) is used everywhere.
// Component: components/fp-landing/FpLanding.tsx; styles: styles/fp-landing.css (.fpl-*); pictures in
// public/assets/fp-landing/ (cut from the mockup, low resolution), Remi's burgundy portrait
// public/assets/wdk-landing/wdk-portrait.webp (hero) and her podcast-studio portrait public/assets/dsr-landing/dsr-hero.webp (note).
import { programOf, type Faq, type LeadItem, type Testimonial } from '@/content/program-landing';
import { productHref } from '@/content/products';

export const FP_SLUG = 'five-paths-to-a-healthy-relationship';
export const FP = programOf(FP_SLUG);

/** The price as the deck prints it: 'AUD $29' on buttons and terms, '$29' in running copy. */
export const FP_PRICE = FP.price;

/** "Does any of this feel familiar?" — gold-ticked beside the couple in the mockup. */
export const FAMILIAR = [
  'You keep having versions of the same argument, even after promising it will be different.',
  'You want reassurance, but the way you ask seems to push your partner further away.',
  'You withdraw to avoid making things worse, then struggle to return to the conversation.',
  'You feel that keeping the peace depends on you saying less.',
  'You know your partner’s schedule better than you know what they are worried about or looking forward to.',
  'You apologise, resume normal life and wonder why the hurt keeps resurfacing.',
  'One person does most of the adjusting, initiating or repairing.',
  'You still love each other, but you miss enjoying each other.',
  'You want to understand your own contribution without being made responsible for everything.',
];

/** "Here are five ways that distance can develop." — drawn in the mockup as the numbered list 01–05 on the burgundy band. */
export const COSTS: LeadItem[] = [
  { lead: 'You begin editing yourself to keep the peace', text: 'You avoid subjects, soften your needs or agree before you have considered what you want. The relationship may appear calmer, while less of you is actually present in it.' },
  { lead: 'Small attempts to connect become easier to miss', text: 'A story, a question or a moment of affection passes without much response. When reaching out repeatedly feels unrewarding, someone may gradually stop trying.' },
  { lead: 'Old reactions keep directing new conversations', text: 'A disappointment quickly becomes “I don’t matter.” A request sounds like criticism. You respond to what the moment seems to mean, and struggle to understand what the other person was actually trying to communicate.' },
  { lead: 'Hurt accumulates beneath the return to normal', text: 'The argument ends, but there is little acknowledgment or follow-through. The next disagreement carries the weight of things that were never properly addressed.' },
  { lead: 'You become efficient at sharing a life, while feeling less connected within it', text: 'There may be reliability and routine, yet little curiosity or shared enjoyment. You know how to keep everything running, but are less sure what you are creating together.' },
];

/** "This program will help you:" — the bold opening, then the rest of the sentence ('' when the whole line is bold). */
export const LEARN: LeadItem[] = [
  { lead: 'Understand your reactions more clearly', text: ', so you can notice when fear, hurt or an assumption is directing what you do next.' },
  { lead: 'Ask for support more openly', text: ', without expecting your partner to guess what you need or take full responsibility for how you feel.' },
  { lead: 'Recognise everyday invitations to connect', text: ', including the small moments that are easy to dismiss as unimportant.' },
  { lead: 'Bring curiosity back into the relationship', text: ', rather than assuming you already know everything about each other.' },
  { lead: 'Express needs before resentment becomes the messenger.', text: '' },
  { lead: 'Make room for both perspectives', text: ', including when you disagree.' },
  { lead: 'Recognise the difference between compromise and repeatedly abandoning yourself.', text: '' },
  { lead: 'Approach a difficult conversation with greater care', text: ', while still addressing what matters.' },
  { lead: 'Understand what repair involves beyond saying sorry or becoming calm again.', text: '' },
  { lead: 'Create small, meaningful agreements', text: ', so the relationship you want has a place in your everyday life.' },
];

/** One of the five paths: its number word and name, the bold line under it, the paragraphs, "You’ll explore how to:"
 *  and "What this makes possible:". */
export type Path = { n: string; name: string; lead: string; text: string[]; explore: string[]; possible: string };

export const PATHS: Path[] = [
  { n: 'One', name: 'Understand What You Bring', lead: 'Recognise what happens in you when closeness becomes difficult.',
    text: ['You bring a history into a relationship, including expectations about whether your needs matter, what disagreement means and how available someone will be when you need them.', 'In this video, you’ll begin recognising the reactions that can take over when you feel uncertain or hurt. You’ll explore the difference between an event and the meaning you assign to it, and how to ask for comfort without making your partner solely responsible for restoring your emotional balance.', 'You’ll also keep an essential distinction in view: taking responsibility for your response does not mean dismissing something hurtful that happened.'],
    explore: ['Notice familiar responses such as pursuing, withdrawing, pleasing or controlling.', 'Identify what you are assuming in an emotionally charged moment.', 'Ask for support more directly.', 'Take responsibility for your behaviour while expecting care and respect from your partner.'],
    possible: 'A clearer understanding of your part in a recurring pattern, with somewhere practical to begin.' },
  { n: 'Two', name: 'Turn Towards Each Other', lead: 'Recognise the small moments when someone is asking for connection.',
    text: ['Your partner tells you about their day, shows you something funny or reaches for your hand. These moments can seem ordinary, but they offer opportunities to communicate interest and affection.', 'This video introduces emotional bids and the practice of responding to them. You’ll also explore curiosity, appreciation and the importance of continuing to discover who your partner is becoming.'],
    explore: ['Recognise invitations to connect that you might otherwise overlook.', 'Respond with genuine interest.', 'Express appreciation in ways that feel specific and personal.', 'Make your own invitations clearer.', 'Create more room for affection, humour and enjoyment.'],
    possible: 'More deliberate connection in the life you already share.' },
  { n: 'Three', name: 'Make Room for Both People', lead: 'Build closeness without requiring one person to disappear.',
    text: ['A relationship needs room for two sets of needs, preferences and perspectives. That becomes difficult when one person routinely adjusts while the other assumes everything is fine.', 'In this video, you’ll explore expressing needs, respecting boundaries and allowing your partner’s perspective to influence you. You’ll consider where compromise works, and where it has become a habit of overriding yourself.'],
    explore: ['Put words to a need before frustration builds.', 'Hear a limit without automatically treating it as rejection.', 'Consider a perspective that differs from your own.', 'Notice whether care and accommodation are reciprocal.', 'Remain connected while retaining your individuality.'],
    possible: 'A clearer picture of whether both people have a meaningful place in the relationship.' },
  { n: 'Four', name: 'Work Through Differences and Repair', lead: 'Learn what needs attention after you have hurt or disappointed each other.',
    text: ['Differences are inevitable. How you approach them, and what happens afterwards, deserves care.', 'This video introduces familiar patterns such as criticism, defensiveness and withdrawal, alongside ways to raise concerns and respond more constructively. You’ll explore the difference between ending an argument and addressing the hurt that occurred.'],
    explore: ['Describe a concern without turning it into an attack on someone’s character.', 'Listen to impact before explaining intention.', 'Take a pause with a clear agreement about returning.', 'Acknowledge your contribution to what happened.', 'Connect an apology with meaningful follow-through.'],
    possible: 'A starting point for repair that goes beyond hoping the issue will disappear.' },
  { n: 'Five', name: 'Build a Relationship You Both Want', lead: 'Give your shared life some deliberate attention.',
    text: ['What do you want it to feel like to be together? What matters to each of you beyond getting through the week? Which promises are reflected in how you actually spend your time?', 'This final video explores shared meaning, everyday rituals and supporting each other’s aspirations. You’ll begin thinking about the relationship you want to participate in and the small commitments that could help you create it.'],
    explore: ['Talk about what matters to each of you.', 'Identify expectations you may never have discussed.', 'Choose a meaningful ritual of connection.', 'Support individual interests alongside a shared life.', 'Make agreements you are willing to follow through on.'],
    possible: 'A more intentional direction for your relationship, with a manageable place to start.' },
];

/** The photo beside each path, cut from the mockup (fpl-p1 … fpl-p5). */
export const PATH_IMAGES = [
  { alt: 'A man talking with open hands while a woman listens, chin in her hand', width: 343, height: 148 },
  { alt: 'A couple smiling at each other on a sunny street', width: 343, height: 121 },
  { alt: 'A man in glasses listening, chin in his hand, as a woman explains something', width: 343, height: 125 },
  { alt: 'A man and a woman on a sofa, looking at each other in a serious conversation', width: 343, height: 124 },
  { alt: 'A couple sitting close on a sofa, laughing together', width: 343, height: 128 },
];

export const WORKSHEET = [
  'Identify a recurring reaction and what tends to set it off.',
  'Notice an invitation to connect and how you respond.',
  'Reflect on where each person’s needs receive attention.',
  'Consider an unresolved hurt and what meaningful repair would involve.',
  'Choose one practical commitment to begin with.',
];

export const FOR_YOU = [
  'You care about your relationship and want more than simply avoiding arguments.',
  'You recognise repeated patterns but don’t know what to do with that awareness.',
  'You want to feel closer without losing your voice.',
  'You want to take responsibility for your contribution while remaining clear about what you need from someone else.',
  'You are single and want to reflect on past relationships and what you want to bring into a future one.',
];

export const INCLUDES = [
  'Five teaching videos with Remi Pearson.',
  'A companion worksheet for reflection and practice.',
  'Self-paced learning so you can work through the material in your own time.',
];

/** The two programs the triggers answer names (shown in bold in the deck; linked here). */
export const TRIGGER_LINKS = {
  sr: { title: 'Self-Regulation When It Matters', href: productHref('self-regulation-when-it-matters') },
  eit: { title: 'Emotion Integration Technique Foundations', href: productHref('emotion-integration-technique-foundations') },
};

/** The questions. The triggers answer names two programs, so the component writes that one out with its links
 *  (`TRIGGERS_Q`); every other answer is plain text. */
export const TRIGGERS_Q = 'Will this teach me how to manage my triggers?';
export const FAQ: Faq[] = [
  { q: 'Do we have to do this together?', a: 'No. You can begin individually and reflect on your own responses, expectations and needs. If your partner is willing, the material can also provide a starting point for conversations together. Learning on your own does not make you responsible for doing both people’s work.' },
  { q: 'What if my partner thinks there is nothing wrong?', a: 'You can still develop greater clarity about what you are experiencing and what you want to discuss. The program cannot make someone else willing to engage, and it does not ask you to keep compensating for their lack of participation.' },
  { q: 'Is this useful if our relationship is already good?', a: 'Yes. You may want to strengthen everyday connection, revisit expectations or become more deliberate about what you are building together. The material gives you questions to explore before difficulties become entrenched.' },
  { q: 'Can I do this if I’m single?', a: 'Yes. You can use the videos and worksheet to reflect on previous patterns, clarify your expectations and consider how you want to participate in a future relationship.' },
  { q: TRIGGERS_Q, a: '' },
  { q: 'Does taking responsibility mean my partner’s behaviour is my problem?', a: 'No. You are responsible for how you respond, and your partner remains responsible for how they treat you. Recognising your history or sensitivity does not require excusing disrespect or dismissing a legitimate concern.' },
  { q: 'Is this a Gottman Institute program?', a: 'No. This is an independently created program by Remi Pearson. The teaching draws on relationship ideas from John and Julie Gottman, alongside relevant work by John Bradshaw and Nicole LePera. It is not affiliated with or endorsed by The Gottman Institute or those authors.' },
  { q: 'Is this couples therapy?', a: 'No. It is a focused educational introduction. It does not provide individual assessment or therapy, and it is not designed to address abuse, coercion or threats. Where those are present, specialist support and safety take priority over joint relationship exercises.' },
  { q: 'Will five videos fix our relationship?', a: 'Five videos can give you a clearer understanding and useful practices to begin. What changes depends on how the learning is applied and whether both people are willing to participate. The program does not promise to resolve every difficulty or save a relationship.' },
  { q: `What do I receive for ${FP.amount}?`, a: `Five teaching videos with Remi Pearson and a companion worksheet. The program is self-paced, with a single payment of ${FP_PRICE}.` },
];

/** Two approved, exact quotations about learning with Remi (ideally about relationships, self-understanding or
 *  communication), with the name and accurate program or context. Empty until real ones arrive; the section renders
 *  nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
