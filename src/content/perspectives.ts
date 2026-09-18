// Content for the Perspectives page: the conversations, archive topics, rabbit holes and listening links.
import type { IconName } from '@/components/shared/Icon';

// ---------- Archive topics (filter chips). "All conversations" is added by the archive itself ----------
export const TOPICS = ['Human change', 'Relationships', 'Ideas & meaning', 'Founders & business', 'Live human change', 'Remi as guest'] as const;
export type Topic = (typeof TOPICS)[number];

// ---------- Conversations ----------
// Add every episode here; the archive, "places to begin" and "too good to leave in the archive" all read from this list.
// List order = "Most watched". `date` (YYYY-MM-DD) drives "Newest". `image` is optional: without one the card shows a Perspectives tile.
// TODO: replace each `href: '#'` with the episode's watch/listen URL.
export type Conversation = {
  id: string; title: string; guest: string; topic: Topic; blurb: string;
  href: string; image?: string; date?: string;
  tone?: 'dark' | 'gold' | 'bronze'; // tile colour when there is no image
};
export const CONVERSATIONS: Conversation[] = [
  { id: 'schwartz', title: 'What are your parts trying to protect?', guest: 'Dr Richard Schwartz', topic: 'Human change', blurb: 'Dr Richard Schwartz on Internal Family Systems.', href: '#', tone: 'dark' },
  { id: 'richo', title: 'Relationships: should I stay or should I go?', guest: 'Dr David Richo', topic: 'Relationships', blurb: 'Psychotherapist Dr David Richo on readiness, endings and adult love.', href: '#', tone: 'gold' },
  { id: 'burkeman', title: 'How are you choosing to spend your 4,000 weeks?', guest: 'Oliver Burkeman', topic: 'Ideas & meaning', blurb: 'Oliver Burkeman on time, distraction and cosmic insignificance.', href: '#', tone: 'gold' },
  { id: 'singer', title: 'What do we owe one another?', guest: 'Peter Singer', topic: 'Ideas & meaning', blurb: 'Peter Singer on ethics, suffering and the choices we make.', href: '#', tone: 'gold' },
  { id: 'gerber', title: 'The man behind the myth', guest: 'Michael E. Gerber', topic: 'Founders & business', blurb: 'Michael E. Gerber on entrepreneurship, systems and building beyond yourself.', href: '#', image: '/assets/photos/perspectives-gerber.webp' },
  { id: 'nash', title: 'What does it take to build something people said would never work?', guest: 'Tony Nash', topic: 'Founders & business', blurb: 'Talking business with Tony Nash, founder of Booktopia.', href: '#', tone: 'bronze' },
];

/** "Three very different places to begin": conversation ids with the longer intro shown on those cards. */
export const PLACES_TO_BEGIN: { id: string; intro: string }[] = [
  { id: 'schwartz', intro: 'An exploration of Internal Family Systems with Dr Richard Schwartz.' },
  { id: 'singer', intro: 'A conversation with philosopher Peter Singer about ethics, suffering and the choices we make.' },
  { id: 'nash', intro: 'Talking business with Tony Nash, founder of Booktopia.' },
];

/** "Too good to leave in the archive": the last one is shown wide. */
export const FEATURED_IDS = ['schwartz', 'richo', 'burkeman', 'singer', 'gerber'];

// ---------- Headline numbers ----------
export const PERSPECTIVES_STATS: { icon: IconName; num?: string; label: string }[] = [
  { icon: 'eye', num: '11M+', label: 'Views & listens' },
  { icon: 'headphones', num: '80+', label: 'Long-form conversations' },
  { icon: 'people', label: 'Thinkers, authors, founders & practitioners' },
];

// ---------- Rabbit holes: each button opens the archive filtered to its topic ----------
export const RABBIT_HOLES: { icon: IconName; title: string; question: string; explore: string[]; cta: string; topic: Topic }[] = [
  { icon: 'headHeart', title: 'The self beneath the pattern', question: 'What are our protective parts trying to prevent us from feeling, and why does understanding ourselves so rarely create change on its own?', explore: ['IFS', 'emotional integration', 'psychology', 'coaching conversations', 'the mind', 'human change'], cta: 'Explore human change', topic: 'Human change' },
  { icon: 'heartCrack', title: 'Why does loving someone bring all our shit to the surface?', question: 'What do attachment, intimacy, parenting, conflict and endings reveal about who we become when another person matters deeply?', explore: ['attachment', 'adult love', 'boundaries', 'parenting', 'rupture & repair', 'relationships'], cta: 'Explore relationships', topic: 'Relationships' },
  { icon: 'eye', title: 'The ideas that change how we see the world', question: 'What do we owe one another? What makes a life meaningful? How should we think about time, culture, suffering, ambiguity and change?', explore: ['ethics', 'philosophy', 'meaning', 'culture', 'psychedelics', 'social change'], cta: 'Explore ideas & meaning', topic: 'Ideas & meaning' },
  { icon: 'summit', title: 'People who built something unlikely', question: 'What happens inside the mind of someone who creates what did not previously exist, persists when it makes no sense and eventually makes it work?', explore: ['entrepreneurship', 'leadership', 'brands', 'risk', 'the long game', 'building beyond yourself'], cta: 'Explore builders & founders', topic: 'Founders & business' },
];

// ---------- Where to watch and listen (TODO: real channel URLs) ----------
export const LISTEN_LINKS: { icon: IconName; label: string; href: string }[] = [
  { icon: 'play', label: 'Watch on YouTube', href: 'https://www.youtube.com/' },
  { icon: 'waves', label: 'Listen on Spotify', href: 'https://open.spotify.com/' },
  { icon: 'mic', label: 'Listen on Apple Podcasts', href: 'https://podcasts.apple.com/' },
];
