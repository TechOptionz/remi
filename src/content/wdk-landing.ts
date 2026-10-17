// Why Do I Keep Doing This?'s registration page (/products/why-do-i-keep-doing-this), from the copy deck "Why Do I Keep
// Doing This — Landing page copy and designer handoff" (Oct 2026), copy carried over word for word. A free five-part
// video series: the page's one goal is registration (first name and email), so it has no related products, newsletter
// or enquiry prompts. Component: components/wdk-landing/; styles: styles/wdk-landing.css on the shared kit (landing.css).
// Photos are existing photographs of Remi from public/assets/photos/.
import { CATEGORIES } from '@/content/products';

export const WDK_SLUG = 'why-do-i-keep-doing-this';
export const WDK_TITLE = 'Why Do I Keep Doing This?';
/** The list a registration joins only if the person ticks the marketing choice (see /api/lead). */
export const WDK_SEGMENT = CATEGORIES.personal.segment;

/** Video one, once the series is recorded and access works. While it is null the form thanks the person and says the
 *  access link will be emailed; once set, it shows the deck's confirmation copy with a "Watch video one" button.
 *  Set it only when the access email goes out too (the deck: "Use this wording only once both actions work"). */
export const WDK_WATCH_HREF: string | null = null;

export const CONVERSATIONS = [
  { said: '“I need to say no.”', then: 'Then you hear yourself agreeing, because disappointing someone feels worse in the moment.' },
  { said: '“I want to be closer.”', then: 'Yet when someone gets close, you start finding reasons to pull away.' },
  { said: '“This matters to me.”', then: 'You keep putting it off, and the longer you wait, the harder it becomes to begin.' },
  { said: '“I’m going to let myself rest.”', then: 'You sit down and immediately feel you should be doing something useful.' },
];

/** The five lesson titles are proposed for the recordings: match them to the videos before launch. */
export const LESSONS = [
  { name: 'Why knowing better doesn’t settle it', text: 'Explore why a sincere decision can lose its force when an emotionally difficult moment arrives.' },
  { name: 'Meet the parts that disagree', text: 'Understand what we mean by “a part of me wants this” and “another part of me doesn’t”, using everyday examples you can recognise.' },
  { name: 'What the pattern might be protecting', text: 'Look beneath avoidance, pleasing and pulling away to consider what a part of you may fear would happen if you responded differently.' },
  { name: 'When you turn against yourself', text: 'Explore how the part that criticises you can become caught in the same conflict as the part it wants to change.' },
  { name: 'A different question to begin with', text: 'Consider what becomes possible to notice when you ask, “What is this part of me concerned about?” Bring the ideas together around a familiar pattern.' },
];

export const FAQ = [
  { q: 'Is the whole series free?', a: 'Yes. All five videos are free. Enter your first name and email address to receive access. No payment details are needed.' },
  { q: 'Do I need experience with parts work?', a: 'No. I’ll introduce the ideas in ordinary language and connect them with everyday experiences.' },
  { q: 'What if I’ve already done a lot of personal development?', a: 'You may recognise the gap we’re exploring: being able to explain a pattern and still getting caught in it. This is an introductory series, so some ideas may be familiar. Its focus is the conflict between the parts of you that want different things.' },
  { q: 'Will this help me stop self-sabotaging?', a: 'The series is designed to help you understand what may be happening. Working through an established pattern takes more than recognising it. These five videos introduce the ideas; they don’t provide individual therapy or a complete process for resolving the pattern.' },
];

/** "What people say about learning with Remi": two short, genuine testimonials with the person's name and the program
 *  they attended. Empty until approved quotations arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: { quote: string; name: string; program: string }[] = [];
