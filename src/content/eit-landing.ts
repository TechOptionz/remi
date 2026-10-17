// Emotion Integration Technique Foundations' sales page (/products/emotion-integration-technique-foundations), from
// Remi's copy deck and the three-page mockup "EIT MOCKUP PAGE ONE–THREE" (Oct 2026; read in the order one, three, two).
// Copy carried over word for word from the deck; the layout and pictures follow the mockup. Component:
// components/eit-landing/EitLanding.tsx; styles: styles/eit-landing.css (.eil-*); pictures in public/assets/eit-landing/.
import { programOf, type Faq, type LeadItem, type Lesson, type Testimonial } from '@/content/program-landing';

export const EIT_SLUG = 'emotion-integration-technique-foundations';
export const EIT = programOf(EIT_SLUG);

export const AVOIDING: LeadItem[] = [
  { lead: 'You analyse the feeling instead of experiencing it.', text: 'You can explain why you’re hurt, but struggle to acknowledge how much it actually hurts.' },
  { lead: 'You get frustrated with yourself for having emotions at all.', text: 'You feel sad, then tell yourself you’re being weak. You feel lonely, then criticise yourself for needing people.' },
  { lead: 'You stay busy because stopping feels uncomfortable.', text: 'There’s always another task, another person to help or something to check.' },
  { lead: 'You go blank when someone asks how you feel.', text: 'You search for an answer that makes sense, while your actual experience seems out of reach.' },
  { lead: 'You rush to fix someone else’s distress.', text: 'You offer reassurance or advice because staying with their sadness feels difficult.' },
  { lead: 'You understand the idea of self-compassion, but can’t seem to feel it.', text: 'You know you’re supposed to be kinder to yourself. That becomes another thing you think you’re failing at.' },
];

/** The line icon beside each of AVOIDING, in its tinted circle (the mockup draws four; the deck has six). */
export const AVOIDING_ICONS = ['brain', 'heartCrack', 'repeat', 'chat', 'handshake', 'heart'] as const;

export const UNDERSTAND: LeadItem[] = [
  { lead: 'Why insight and emotional capacity are different.', text: 'Knowing why you respond a certain way doesn’t necessarily mean you can stay with the feeling beneath it.' },
  { lead: 'How protection can show up in ordinary behaviour.', text: 'Analysis, busyness and withdrawal may help you avoid experiences that feel difficult to hold.' },
  { lead: 'Why judging your response adds another layer.', text: 'Frustration about being numb or shame about feeling needy can become part of what needs understanding.' },
  { lead: 'How compassion can be approached when it feels unavailable.', text: 'EIT begins with your actual experience and works at a pace you can meet.' },
  { lead: 'What integration means within this approach.', text: 'Developing more capacity to feel an emotion without immediately rejecting it or letting it decide everything you do.' },
];

export const LESSONS: Lesson[] = [
  { name: 'The feelings you learned to keep at a distance',
    text: ['Explore how you developed your relationship with emotion. Which feelings were welcomed? Which seemed inconvenient, embarrassing or unacceptable? We’ll look at how those experiences can influence what you allow yourself to feel today.'],
    take: 'a more compassionate understanding of why some emotions feel familiar and others feel difficult to approach.' },
  { name: 'What your protective responses may be doing for you',
    text: ['Explore the roles of intellectualising, staying busy, pleasing others and going numb. Using the language of parts, we’ll consider how a response can have a protective intention while also creating difficulties in your life.'],
    take: 'a way to recognise protection without treating yourself as defective or overlooking the consequences of your behaviour.' },
  { name: 'When compassion feels out of reach',
    text: ['Discover why asking yourself to be compassionate may not be enough. We’ll explore the EIT principle of creating more distance around a difficult experience until there is something you can genuinely meet with care.'],
    take: 'an understanding of how EIT finds a starting point when “I should be kinder to myself” has become another source of pressure.' },
  { name: 'Bringing compassion closer',
    text: ['Learn why EIT moves outward and then gently inward. We’ll explore how changing your relationship with frustration, numbness or another protective response can make room for further emotional experience.', 'There is no prescribed sequence of feelings you are expected to discover.'],
    take: 'a clearer understanding of how the approach respects protection while exploring what becomes available beneath it.' },
  { name: 'What it means to integrate an emotion',
    text: ['Explore integration as a growing ability to remain connected with yourself while an emotion is present. We’ll consider what that might mean in everyday life, including your ability to listen, acknowledge your needs and respond to other people.'],
    take: 'a practical understanding of what greater emotional capacity could look like beyond the teaching.' },
];

/** The photo on each video's row, cut from the mockup (eit-v1 … eit-v5); rows alternate sides as drawn. */
export const LESSON_IMAGES = [
  { alt: 'A man resting his chin on his hand, looking out thoughtfully', width: 401, height: 130 },
  { alt: 'A woman smiling softly, chin in her hand', width: 368, height: 134 },
  { alt: 'Hands holding a speckled mug', width: 401, height: 132 },
  { alt: 'A man looking into the distance, thinking', width: 368, height: 133 },
  { alt: 'Hands resting together on a knee', width: 401, height: 136 },
];

export const WORKBOOK = [
  'Which emotions you tend to welcome, judge or avoid.',
  'What you do when a feeling becomes uncomfortable.',
  'How you respond to the parts of yourself you find difficult.',
  'What you notice during the guided demonstration.',
  'What greater capacity might look like in one ordinary situation.',
];

export const FAQ: Faq[] = [
  { q: 'Is this for me if I understand myself but still repeat the same patterns?', a: 'Yes. The program explores the gap between understanding a protective response and having the emotional capacity to meet what lies beneath it.' },
  { q: 'What if I don’t know what I feel?', a: 'You don’t need to identify a precise emotion before you can learn from the program. EIT begins with what is available, which may include blankness, frustration or the thought “I don’t know”.' },
  { q: 'What if I feel too much rather than too little?', a: 'The principles may help you understand your relationship with difficult emotions. You won’t be asked to intensify an experience or push through overwhelm. If emotion regularly feels unmanageable, individual support can offer pacing that a recorded program cannot.' },
  { q: 'Does compassion mean excusing my behaviour?', a: 'No. You can understand why you developed a response and still acknowledge its impact. Compassion and responsibility can exist together.' },
  { q: 'Will this get rid of uncomfortable emotions?', a: 'That isn’t the aim. Within EIT, integration means becoming more capable of being with an emotion that you previously needed to push away. Sadness, fear and anger remain part of being human.' },
  { q: 'Do I need to know about parts work?', a: 'No. I’ll introduce the language used in the program. EIT is my own approach, informed by my work with protective parts; it is not an official or endorsed Internal Family Systems method.' },
  { q: 'Is this practitioner training or individual therapy?', a: 'Neither. This is a foundations program for personal understanding, with a guided demonstration. It does not qualify you to facilitate EIT. If you experience significant dissociation or become overwhelmed, the demonstration should not be used as a substitute for individual support.' },
  { q: `What does the ${EIT.amount} include?`, a: `All five teaching videos, one guided demonstration with Remi and the workbook. One payment of ${EIT.price}, with learning at your own pace.` },
];

/** Two approved testimonials, with each person's name and the program or EIT experience they attended. Empty until
 *  real ones arrive; the section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: Testimonial[] = [];
