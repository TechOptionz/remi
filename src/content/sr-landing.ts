// Self-Regulation When It Matters' sales page (/products/self-regulation-when-it-matters), from Remi's copy deck and the
// three-page mockup "SELF REGULATION MOCKUP PAGE 1–3" (Oct 2026). Copy carried over word for word from the deck; the
// layout, button wording ("Get the program") and pictures follow the mockup. Component: components/sr-landing/SrLanding.tsx;
// styles: styles/sr-landing.css (.srl-*); pictures cut from the mockup in public/assets/sr-landing/.
import { programOf, type Faq, type LeadItem, type Lesson, type Testimonial } from '@/content/program-landing';

export const SR_SLUG = 'self-regulation-when-it-matters';
export const SR = programOf(SR_SLUG);

export const FAMILIAR: LeadItem[] = [
  { lead: 'You start defending yourself before the other person has finished.', text: 'You’re preparing your response while they’re still trying to explain.' },
  { lead: 'An unresolved issue feels unbearable.', text: 'You need an answer now, and their request for space makes you push harder.' },
  { lead: 'You go quiet, but inside you’re furious or overwhelmed.', text: 'The conversation carries on while you rehearse everything you want to say.' },
  { lead: 'You withdraw or refuse to discuss it.', text: 'Engaging feels like more than you can manage, so you avoid the person or hope the issue disappears.' },
  { lead: 'You’re physically there, but you’ve zoned out.', text: 'You can hear the words without being able to take them in.' },
  { lead: 'Afterwards, you regret your response.', text: 'You promise yourself you’ll handle it differently, yet the next difficult moment feels painfully familiar.' },
];

export const LEARNING: LeadItem[] = [
  { lead: 'Recognise your early warning signs,', text: 'so you have an opportunity to respond before you reach your limit.' },
  { lead: 'Work with physical tension and urgency,', text: 'giving yourself more room to decide whether something needs to be said or done immediately.' },
  { lead: 'Notice when you’re becoming disconnected,', text: 'including the quiet withdrawal that can look like calm from the outside.' },
  { lead: 'Choose a practice that fits what you’re experiencing,', text: 'then check whether it actually helps.' },
  { lead: 'Take a pause with a clear intention to return,', text: 'so space can support a difficult conversation rather than leave it indefinitely unfinished.' },
];

export const LESSONS: Lesson[] = [
  { name: 'Understand what happens when things get difficult',
    text: ['Explore why you can feel ready to argue one moment and unable to engage the next. You’ll be introduced to sympathetic mobilisation, dorsal vagal shutdown and ventral vagal connection as concepts within the polyvagal framework, with everyday examples that make the language accessible.'],
    take: 'a clearer way to recognise and describe your experience, including the difference between feeling settled and simply going quiet.' },
  { name: 'Catch your early warning signs',
    text: ['Discover how pressure begins to show up in your body, attention and impulses. You’ll gently explore the signals you tend to overlook until you’re already overwhelmed.'],
    take: 'your own map of early warning signs, so you can begin noticing when you need support before you snap, withdraw or lose the thread of the conversation.' },
  { name: 'When you need to argue, act or fix it right now',
    text: ['Work with the physical experience of urgency. You’ll try gentle muscle tension-and-release practices, with an optional breathing practice, and notice how each affects your experience.'],
    take: 'options for working with the intensity while giving yourself time to consider what you actually want to do next.' },
  { name: 'When you shut down, withdraw or go blank',
    text: ['Explore the experience of becoming distant or unavailable. You’ll experiment with comfortable movement, attention to your surroundings and supportive connection, noticing what helps you feel more present.'],
    take: 'alternatives to forcing yourself through a conversation you can barely follow, or disappearing without knowing how to return.' },
  { name: 'Bring it into the moments that matter',
    text: ['Apply what you’ve learned to difficult conversations, challenging situations and everyday pressure. You’ll practise recognising your signals, choosing a response and checking whether it helps you become more able to engage.'],
    take: 'a personal plan for before, during and after a difficult moment, including how to pause and return to what still needs attention.' },
];

/** The photo beside each video in "Your five-video program", cut from the mockup (sr-v1 … sr-v5), with its size. */
export const LESSON_IMAGES = [
  { alt: 'A woman holding a mug, looking out thoughtfully', width: 307, height: 162 },
  { alt: 'A man resting his chin on his hand, thinking', width: 307, height: 126 },
  { alt: 'A woman writing in a notebook', width: 233, height: 128 },
  { alt: 'An older woman outdoors, looking up calmly', width: 265, height: 130 },
  { alt: 'A man at a laptop, chin in his hand, thinking', width: 301, height: 121 },
];

export const FAQ: Faq[] = [
  { q: 'Is this for me if I shut down rather than get angry?', a: 'Yes. The program includes withdrawal, going blank and feeling disconnected, as well as defensiveness and urgency. Becoming very quiet can be just as difficult to navigate as becoming visibly upset.' },
  { q: 'What if I already understand why I react this way?', a: 'You can understand a response and still struggle with it in the moment. This program focuses on recognising your bodily signals and practising responses, so you have something to work with alongside that understanding.' },
  { q: 'Will this teach me to stay calm all the time?', a: 'No. You’ll still have emotions and encounter difficult situations. The aim is to build your capacity to notice what’s happening and respond more deliberately, including when you need to pause.' },
  { q: 'Is taking a break from a conversation avoidance?', a: 'A pause can be useful when you’re struggling to participate. The program explores how to communicate that need and make a clear arrangement to return. Settling yourself is one step; the issue may still need discussion or repair.' },
  { q: 'Do I need experience with meditation or body-based work?', a: 'No. The practices are introductory and guided. You can keep your eyes open, adjust your participation or stop if something feels uncomfortable.' },
  { q: 'Is this therapy?', a: 'This is an educational program for everyday situations. It doesn’t include individual therapy or ask you to revisit traumatic experiences. If overwhelm or disconnection is severe or persistent, individual support may be a more appropriate place to work with it.' },
  { q: `What does the ${SR.amount} include?`, a: `All five videos, the workbook and the guided meditation. It’s a self-paced program with one payment of ${SR.price}.` },
];

/** Two approved testimonials, with each person's name and the program they attended. Empty until real ones arrive;
 *  the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
