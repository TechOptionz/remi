// "Why does loving someone bring all my shit to the surface?" — the second rabbit hole from the homepage (/loving-someone).
// The six patterns are carried over word for word from the copy deck (LOVING SOMEONE — WHAT TO DO WITH THE BOXES, Sept 2026).
import { ENTRY_PRICE } from '@/content/home';
import { episodeHref, type Pattern } from '@/content/rabbit-holes';

// The four answers under each pattern, in the order of PATTERN_LABELS (this page asks "What I fear", not "What I avoid")
export const PATTERN_LABELS = ['What I do', 'What I fear', 'How it protected me', 'What can change'];

export const PATTERNS: Pattern[] = [
  {
    title: 'I disappear to keep the peace',
    panel: ['You silence what you need to protect the connection.', 'Their comfort becomes more important than your truth.', 'Eventually, you can no longer find yourself in the relationship.'],
    answers: [
      'I soften my opinions, hold back my needs and agree to things that don’t feel right to me.',
      'If I tell the truth, I might upset them or lose the connection.',
      'Staying agreeable may once have helped me remain close to someone whose love felt uncertain.',
      'I can begin saying what is true for me in small moments, and learn that connection can make room for both of us.',
    ],
  },
  {
    title: 'I panic when somebody pulls away',
    panel: ['A delayed reply or a change in tone can set off alarm.', 'You search for clues about what has gone wrong.', 'The fear can become so loud that it is hard to hear anything else.'],
    answers: [
      'I check for messages, seek reassurance or try to close the distance immediately.',
      'They are losing interest, leaving me or deciding I no longer matter.',
      'Staying alert to changes in closeness may have helped me prepare for separation before it happened.',
      'I can recognise the alarm, ask directly for clarity when I need it and give myself support while I wait.',
    ],
  },
  {
    title: 'I keep choosing emotionally unavailable people',
    panel: ['You feel drawn to someone who offers glimpses of closeness but rarely stays present.', 'You work harder for a connection that never quite settles.', 'The longing becomes familiar, even when it hurts.'],
    answers: [
      'I invest in someone’s potential and keep trying to earn the closeness I want.',
      'Being fully seen, depending on someone, or discovering that a genuinely available relationship feels unfamiliar.',
      'Wanting someone at a distance allowed me to pursue connection without having to trust it completely.',
      'I can notice what availability actually looks like, and pay attention to how I feel with someone consistently present.',
    ],
  },
  {
    title: 'I shut down when things become emotional',
    panel: ['When feelings intensify, you go quiet or retreat into your head.', 'The other person may want to get closer just as you need space.', 'Neither of you can easily reach the other from there.'],
    answers: [
      'I withdraw, change the subject, become practical or say I’m fine when I’m not.',
      'Being overwhelmed, losing control or having feelings I won’t know how to manage.',
      'Pulling back gave me a way to cope when emotional situations felt too intense or unsupported.',
      'I can ask for a pause without disappearing, then return when I have enough space to speak honestly.',
    ],
  },
  {
    title: 'I carry the whole relationship and quietly resent it',
    panel: ['You notice what needs doing and take responsibility for keeping things together.', 'You may struggle to ask for help, then feel hurt that none arrives.', 'Love starts to feel like work you are doing alone.'],
    answers: [
      'I anticipate needs, organise everything and take on more than I want to carry.',
      'If I stop, things will fall apart or I’ll discover the other person won’t show up for me.',
      'Taking charge may have given me a sense of security when relying on others felt uncertain.',
      'I can say what I need, share responsibility openly and notice whether the other person is willing to meet me there.',
    ],
  },
  {
    title: 'Conflict feels as though the relationship is ending',
    panel: ['A disagreement can feel much bigger than the issue itself.', 'Your body reacts as though the bond is in danger.', 'It becomes difficult to stay curious about what the other person means.'],
    answers: [
      'I rush to fix things, defend myself, appease them or assume the worst.',
      'This disagreement means they will stop loving me or leave.',
      'Treating conflict as urgent may have helped me respond quickly when disconnection once had real consequences.',
      'I can slow the conversation down, name what I’m feeling and learn that disagreement can be followed by repair.',
    ],
  },
];

// ---------- The attachment cycle, clockwise from the top ----------
export const CYCLE = ['Something happens', 'You make it mean something', 'Protection begins', 'The other person reacts', 'The cycle strengthens'];

// ---------- The relationship changes when you can remain with yourself ----------
export const STEPS = [
  { name: 'Catch', text: 'Notice your Point of Departure' },
  { name: 'Stay', text: 'Remain present with the discomfort' },
  { name: 'Choose', text: 'Respond without abandoning yourself' },
];
export const PRACTICES = ['Hold space without rescuing', 'Keep a boundary without punishing', 'Express a need without demanding', 'Let somebody have feelings without making them your fault'];

// ---------- Not perfect. Just more honest and more capable. ----------
export const CAPABLE = [
  { icon: 'sun', text: 'Recognise the cycle earlier' },
  { icon: 'heart', text: 'Stay connected during discomfort' },
  { icon: 'bubble', text: 'Ask rather than assume' },
  { icon: 'shield', text: 'Make boundaries clear' },
  { icon: 'repeat', text: 'Repair after rupture' },
  { icon: 'person', text: 'Take responsibility without taking all the blame' },
] as const;

// ---------- The Five Paths (the homepage's second entry product; same price) ----------
export const FIVE_PATHS_PRICE = ENTRY_PRICE;
export const FIVE_PATHS = ['Stay connected to yourself', 'Recognise the attachment cycle', 'Communicate needs and boundaries', 'Repair after rupture', 'Create emotional safety together'];
/** "Start the five paths": the enquiry form preset to Books & programs until the product page exists. */
export const FIVE_PATHS_HREF = '/?interest=Products#contact';

// ---------- Links ----------
/** "Let's talk relationships": the Perspectives archive, filtered to Relationships. */
export const RELATIONSHIPS_HREF = '/perspectives?topic=Relationships#archive';

// ---------- Conversations worth having ----------
export const CONVERSATIONS_WORTH = [
  { title: 'Relationships: should I stay or should I go?', guest: 'David Richo', image: '/assets/rabbit-holes/ls-watch-richo.webp', href: episodeHref('richo') },
  // Not in the Perspectives archive yet, so this links to the episode's post on remipearson.com
  { title: 'Transform your relationships using these ‘language needles’', guest: 'Bryan Reeves', image: '/assets/rabbit-holes/ls-watch-reeves.webp', href: 'https://www.remipearson.com/post/transformyourrelationshipusingthese-languageneedles' },
];
