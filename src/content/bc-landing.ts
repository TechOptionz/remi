// Becoming Conscious' sales page (/products/becoming-conscious), from Remi's copy deck and the three-page mockup
// "BECOMING CONSCIOUS PAGE ONE–THREE MOCKUP" (Oct 2026). Copy carried over word for word from the deck; the layout and
// pictures follow the mockup. Component: components/bc-landing/BcLanding.tsx; styles: styles/bc-landing.css (.bcl-*);
// pictures in public/assets/bc-landing/ (video photos cut from the mockup; the note portrait from the HD studio photo)
// and the hero portrait public/assets/wdk-landing/wdk-portrait.webp.
import { programOf, type Faq, type LeadItem, type Lesson, type Testimonial } from '@/content/program-landing';

export const BC_SLUG = 'becoming-conscious';
export const BC = programOf(BC_SLUG);

export const BEGIN_TO: LeadItem[] = [
  { lead: 'Notice more of the ordinary things you enjoy.', text: 'The warmth of a cup in your hands, fresh air on your skin or the sound of someone you love laughing.' },
  { lead: 'Recognise when your attention has wandered.', text: 'Catch yourself rehearsing the next conversation while the one you’re having is still underway.' },
  { lead: 'Become more familiar with your body’s sensations.', text: 'Notice the pressure of your feet on the floor or tension in your shoulders, without needing to explain it.' },
  { lead: 'Let a thought be there without immediately pursuing it.', text: 'Discover what it’s like to notice your mind making plans or revisiting the past, then return your attention to what’s here.' },
];

export const LESSONS: Lesson[] = [
  { name: 'Coming into the present moment',
    text: ['We’ll begin with what you can notice around you. A sound. The light in the room. The feeling of the chair supporting you. I’ll guide you through a simple experience of bringing your attention to where you actually are.'],
    take: 'an accessible way to return to the present during an ordinary day. You can practise while waiting for the kettle or stepping outside, without needing a special setting.' },
  { name: 'Becoming aware of your body',
    text: ['Your body is always part of your experience, although you may barely notice it while you’re busy thinking. We’ll gently explore sensations in your hands and feet, and the movement of your breath, without forcing anything to feel different.'],
    take: 'a familiar place to rest your attention when you notice you’ve become absorbed in thought. There’s no particular sensation you have to produce and nothing you need to get right.' },
  { name: 'Noticing your thoughts',
    text: ['A thought appears, and before you know it, you’re several minutes into an imagined conversation. In this video, we’ll practise noticing thoughts as they arise and gently returning to a sound or bodily sensation.'],
    take: 'an introduction to observing your thinking. You can begin to recognise a thought without needing to finish the story it starts.' },
];

/** The icon beside each of BEGIN_TO, in its gold ring, as drawn. */
export const BEGIN_TO_ICONS = ['eye', 'brain', 'heart', 'sprout'] as const;

/** The photo beside each video, cut from the mockup (bc-v1 … bc-v3); rows alternate sides as drawn. */
export const LESSON_IMAGES = [
  { alt: 'A woman in sunlight under leaves, looking up with a soft smile', width: 532, height: 412 },
  { alt: 'Hands resting on a knee', width: 505, height: 388 },
  { alt: 'A woman by a window, chin in her hand, quietly thinking', width: 522, height: 375 },
];

export const FAQ: Faq[] = [
  { q: 'Do I need to know how to meditate?', a: 'No. You’ll be guided through simple experiences of noticing. No previous practice or knowledge is needed.' },
  { q: 'What if my mind is really busy?', a: 'You can begin with a busy mind. You’re learning to recognise when your attention has wandered and gently return it. Each time you notice is another opportunity to practise.' },
  { q: 'Do I have to feel calm for it to be working?', a: 'No. You might notice restlessness, tension or very little at all. The invitation is to become aware of your experience as it is, without requiring yourself to feel a particular way.' },
  { q: 'Will I need to make a lot of time for this?', a: 'The program contains three short videos, each with a guided practice. You can watch at your own pace and bring brief moments of noticing into things you already do.' },
  { q: `What does the ${BC.amount} include?`, a: `All three videos, including the guided practices within them. It’s a self-paced introductory program with one payment of ${BC.price}.` },
];

/** Two approved testimonials about Remi's teaching, with each person's name and the program they attended. Empty until
 *  real ones arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
