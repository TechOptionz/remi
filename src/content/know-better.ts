// "I know better. Why do I still keep doing this?" — the first rabbit hole from the homepage (/i-know-better).
// The six patterns are carried over word for word from the copy deck (I KNOW BETTER — WHAT HAPPENS FROM THE BOXES, Sept 2026).
import { EIT_HREF, episodeHref, type Pattern } from '@/content/rabbit-holes';

// The four answers under each pattern, in the order of PATTERN_LABELS
export const PATTERN_LABELS = ['What I do', 'What I avoid', 'How it protected me', 'What can change'];

export const PATTERNS: Pattern[] = [
  {
    title: 'I people-please and leave myself',
    panel: ['You say yes to keep the peace and protect the connection.', 'You abandon your needs to avoid disappointing others.', 'Over time, you lose touch with what you want.'],
    answers: [
      'I read what others need, adapt quickly and say yes before checking in with myself.',
      'Disapproval, conflict and the possibility that someone might pull away.',
      'Keeping others comfortable may once have helped me stay connected and accepted.',
      'I can notice my own answer before giving someone else one, and practise being honest in small, manageable moments.',
    ],
  },
  {
    title: 'I become angry or defensive',
    panel: ['A comment lands as criticism, even when it wasn’t meant that way.', 'You move quickly to explain, argue or push back.', 'Underneath the anger, something in you feels exposed.'],
    answers: [
      'I argue, explain myself or strike back when I feel criticised.',
      'Feeling ashamed, powerless, misunderstood or wrong.',
      'Anger gave me a way to protect myself when being vulnerable felt unsafe.',
      'I can recognise the hurt beneath the reaction and give myself enough space to choose how I respond.',
    ],
  },
  {
    title: 'I shut down, withdraw or go numb',
    panel: ['When things feel too much, you disappear inward.', 'You may go quiet, lose access to what you feel or find it hard to respond.', 'Distance gives you relief, but it can leave the other person unable to reach you.'],
    answers: [
      'I go quiet, pull away or lose touch with what I feel.',
      'Overwhelm, conflict and feelings I don’t yet know how to hold.',
      'Switching off helped me get through situations where I had too little support or too much to feel.',
      'I can notice the first signs of withdrawal and return to myself and the conversation gradually.',
    ],
  },
  {
    title: 'I chase reassurance or fear being abandoned',
    panel: ['A change in someone’s tone or attention can feel enormous.', 'You look for a sign that the connection is still safe.', 'Reassurance helps for a moment, then the doubt returns.'],
    answers: [
      'I seek contact, check for signs of distance and ask whether things are okay.',
      'The uncertainty of not knowing where I stand with someone.',
      'Staying alert to changes in connection may once have helped me prepare for rejection or loss.',
      'I can name what has been triggered, ask clearly for what I need and build trust in my ability to stay with uncertainty.',
    ],
  },
  {
    title: 'I agree to things and resent them later',
    panel: ['In the moment, agreeing feels easier than risking tension.', 'Later, you feel the cost of a choice you didn’t really make.', 'The resentment often points to a boundary you couldn’t voice.'],
    answers: [
      'I say yes when I mean maybe or no, then feel trapped by my own agreement.',
      'The discomfort of setting a limit and seeing how someone responds.',
      'Agreeing helped me avoid conflict and preserve relationships when saying no felt costly.',
      'I can pause before committing, tell the truth sooner and let a boundary be part of a healthy relationship.',
    ],
  },
  {
    title: 'I know what I should do, but I cannot seem to do it',
    panel: ['You can see the pattern clearly and may even know the next step.', 'Yet when the moment comes, another part of you takes over.', 'Understanding the behaviour hasn’t made that part feel safe enough to change it.'],
    answers: [
      'I plan, analyse and promise myself I’ll change, then repeat the familiar behaviour.',
      'The feelings, risks or consequences that come with doing something different.',
      'The old pattern may have kept me safe, connected or in control when I needed it.',
      'I can get curious about what the pattern is protecting, work with that part of me and make change at a pace I can actually sustain.',
    ],
  },
];

// ---------- Links. Swap these when the real pages exist ----------
/** "See EIT in action": the EIT chapter until there is an EIT video. */
export const EIT_VIDEO_HREF = EIT_HREF;
/** Untriggerable "See what's inside": the enquiry form preset to Books & programs until the book page exists. */
export const UNTRIGGERABLE_HREF = '/products/untriggerable';

// ---------- Go deeper ----------
export const WATCH = [
  { title: 'An exploration of Internal Family Systems', image: '/assets/rabbit-holes/kb-watch-ifs.webp', href: episodeHref('schwartz') },
  { title: 'Relationships: should I stay or should I go?', image: '/assets/rabbit-holes/kb-watch-stay.webp', href: episodeHref('richo') },
];
// The articles are not written yet; until they are, each opens the closest part of the EIT chapter / Ideas & Models.
export const READ = [
  { title: 'Why insight isn’t enough', image: '/assets/rabbit-holes/kb-read-insight.webp', href: EIT_HREF },
  { title: 'The moment you leave yourself', image: '/assets/rabbit-holes/kb-read-leave.webp', href: '/ideas-models#part-4' },
];
