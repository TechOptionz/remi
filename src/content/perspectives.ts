// Content for the Perspectives page: the conversations, archive topics, rabbit holes and listening links.
import type { IconName } from '@/components/shared/Icon';

// ---------- Archive topics (filter chips). "All conversations" is added by the archive itself ----------
export const TOPICS = ['Human change', 'Relationships', 'Ideas & meaning', 'Founders & business', 'Live human change', 'Remi as guest'] as const;
export type Topic = (typeof TOPICS)[number];

// ---------- Conversations ----------
// Add every episode here; the archive, "places to begin" and "too good to leave in the archive" all read from this list.
// List order = "Most watched". `date` (YYYY-MM-DD) drives "Newest". `image` is optional: without one the card shows a Perspectives tile.
export type Conversation = {
  id: string; title: string; guest: string; topic: Topic; blurb: string;
  href: string; image?: string; date?: string;
  imageHasName?: boolean; // the image already shows the guest's name, so don't overlay it
  tone?: 'dark' | 'gold' | 'bronze'; // tile colour when there is no image
};
export const CONVERSATIONS: Conversation[] = [
  { id: 'schwartz', title: 'What are your parts trying to protect?', guest: 'Dr Richard Schwartz', topic: 'Human change', blurb: 'Dr Richard Schwartz on Internal Family Systems.', href: 'https://youtu.be/MroXcSrTqvs', date: '2021-05-11', image: '/assets/photos/perspectives-schwartz.webp', imageHasName: true },
  { id: 'richo', title: 'Relationships: should I stay or should I go?', guest: 'Dr David Richo', topic: 'Relationships', blurb: 'Psychotherapist Dr David Richo on readiness, endings and adult love.', href: 'https://youtu.be/TovKLawEzQU', date: '2022-05-17', image: '/assets/photos/perspectives-richo.webp' },
  { id: 'burkeman', title: 'How are you choosing to spend your 4,000 weeks?', guest: 'Oliver Burkeman', topic: 'Ideas & meaning', blurb: 'Oliver Burkeman on time, distraction and cosmic insignificance.', href: 'https://youtu.be/e4R45ZeSxfU', date: '2021-11-16', image: '/assets/photos/perspectives-burkeman.webp', imageHasName: true },
  { id: 'singer', title: 'What do we owe one another?', guest: 'Peter Singer', topic: 'Ideas & meaning', blurb: 'Peter Singer on ethics, suffering and the choices we make.', href: 'https://youtu.be/Nf7GihfVjqw', date: '2021-07-27', image: '/assets/photos/perspectives-singer.webp', imageHasName: true },
  { id: 'gerber', title: 'The man behind the myth', guest: 'Michael E. Gerber', topic: 'Founders & business', blurb: 'Michael E. Gerber on entrepreneurship, systems and building beyond yourself.', href: 'https://youtu.be/2H6kUOOm68E', date: '2021-04-20', image: '/assets/photos/perspectives-gerber.webp', imageHasName: true },
  { id: 'nash', title: 'What does it take to build something people said would never work?', guest: 'Tony Nash', topic: 'Founders & business', blurb: 'Talking business with Tony Nash, founder of Booktopia.', href: 'https://youtu.be/bXiNCEf8QfU', date: '2021-06-15', image: '/assets/photos/perspectives-nash.webp', imageHasName: true },
  // Guest conversations approved by Remi (Nov 2026), from her YouTube channel; artwork is each episode's YouTube thumbnail.
  { id: 'walker', title: 'Product launches, customer connection and marketing psychology', guest: 'Jeff Walker', topic: 'Founders & business', blurb: 'Jeff Walker on product launches, customer connection and marketing psychology.', href: 'https://youtu.be/B0UU67haDW0', date: '2022-02-01', image: '/assets/photos/perspectives-walker.webp', imageHasName: true },
  { id: 'clark', title: 'Long-term thinking, brand building and strategic growth', guest: 'Dorie Clark', topic: 'Founders & business', blurb: 'Dorie Clark on long-term thinking, brand building and strategic growth.', href: 'https://youtu.be/jVdhyQ9eRPM', date: '2021-10-19', image: '/assets/photos/perspectives-clark.webp', imageHasName: true },
  { id: 'karlsson', title: 'Building kikki.K, mistakes and systems for growth', guest: 'Kristina Karlsson', topic: 'Founders & business', blurb: 'Kristina Karlsson on building kikki.K, mistakes and systems for growth.', href: 'https://youtu.be/DLqGs1Tmb9c', date: '2021-09-14', image: '/assets/photos/perspectives-karlsson.webp', imageHasName: true },
  { id: 'howard', title: 'Amazon entrepreneurship and building a product business', guest: 'Sophie Howard', topic: 'Founders & business', blurb: 'Sophie Howard on Amazon entrepreneurship and building a product business.', href: 'https://youtu.be/QeisEo5LRd4', date: '2021-04-06', image: '/assets/photos/perspectives-howard.webp', imageHasName: true },
  { id: 'james', title: 'Brand creation and the entrepreneurial journey', guest: 'Blair James', topic: 'Founders & business', blurb: 'Blair James on brand creation and the entrepreneurial journey.', href: 'https://youtu.be/-wlyrl_QY8s', date: '2020-11-25', image: '/assets/photos/perspectives-james.webp', imageHasName: true },
  { id: 'archbold', title: 'Values-led entrepreneurship, resilience and changing priorities', guest: 'Tory Archbold', topic: 'Founders & business', blurb: 'Tory Archbold on values-led entrepreneurship, resilience and changing priorities.', href: 'https://youtu.be/nl5vVCn6gao', date: '2020-05-19', image: '/assets/photos/perspectives-archbold.webp', imageHasName: true },
  { id: 'fray', title: 'Everyday ruptures, trust and the breakdown of a marriage', guest: 'Matthew Fray', topic: 'Relationships', blurb: 'Matthew Fray on everyday ruptures, trust and the breakdown of a marriage.', href: 'https://youtu.be/_npd9n_Dsns', date: '2022-06-28', image: '/assets/photos/perspectives-fray.webp', imageHasName: true },
  { id: 'tsabary', title: 'Conscious parenting and emotional reactivity', guest: 'Dr Shefali Tsabary', topic: 'Relationships', blurb: 'Dr Shefali Tsabary on conscious parenting and emotional reactivity.', href: 'https://youtu.be/y0dfWnc77LI', date: '2022-04-21', image: '/assets/photos/perspectives-tsabary.webp', imageHasName: true },
  { id: 'richo-adult', title: 'How to be an adult in relationships, mindful loving and intimacy', guest: 'Dr David Richo', topic: 'Relationships', blurb: 'Dr David Richo on how to be an adult in relationships, mindful loving and intimacy.', href: 'https://youtu.be/YbOWGDxjZvU', date: '2021-03-23', image: '/assets/photos/perspectives-richo-adult.webp', imageHasName: true },
  { id: 'mcmillan', title: 'Manipulation, domestic abuse and social psychology', guest: 'Dr Dina McMillan', topic: 'Relationships', blurb: 'Dr Dina McMillan on manipulation, domestic abuse and social psychology.', href: 'https://youtu.be/4lprDqIT97o', date: '2021-10-05', image: '/assets/photos/perspectives-mcmillan.webp', imageHasName: true },
  { id: 'reeves', title: 'Emotional suppression, communication and creating connection in relationships', guest: 'Bryan Reeves', topic: 'Relationships', blurb: 'Bryan Reeves on emotional suppression, communication and creating connection in relationships.', href: 'https://youtu.be/WpTSC91ivY8', date: '2022-11-11', image: '/assets/photos/perspectives-reeves.webp', imageHasName: true },
  { id: 'breuning', title: 'Brain chemicals, happiness, connection and self-regulation', guest: 'Dr Loretta Graziano Breuning', topic: 'Human change', blurb: 'Dr Loretta Graziano Breuning on brain chemicals, happiness, connection and self-regulation.', href: 'https://youtu.be/X8viFjoIBYM', date: '2023-03-28', image: '/assets/photos/perspectives-breuning.webp', imageHasName: true },
  { id: 'milkman', title: 'Why good intentions fail and how to make behaviour change more achievable', guest: 'Professor Katy Milkman', topic: 'Human change', blurb: 'Professor Katy Milkman on why good intentions fail and how to make behaviour change more achievable.', href: 'https://youtu.be/d_wF6IIqU98', date: '2023-01-24', image: '/assets/photos/perspectives-milkman.webp', imageHasName: true },
  { id: 'smith', title: 'Emotional wellbeing and self-compassion', guest: 'Dr Julie Smith', topic: 'Human change', blurb: 'Dr Julie Smith on emotional wellbeing and self-compassion.', href: 'https://youtu.be/NarkbrI-8io', date: '2022-09-20', image: '/assets/photos/perspectives-smith.webp', imageHasName: true },
  { id: 'pillay', title: 'Ambiguity, perspective, flow and leadership decisions', guest: 'Dr Srini Pillay', topic: 'Human change', blurb: 'Dr Srini Pillay on ambiguity, perspective, flow and leadership decisions.', href: 'https://youtu.be/F3xVlyTnBbk', date: '2021-08-24', image: '/assets/photos/perspectives-pillay.webp', imageHasName: true },
  { id: 'murray', title: 'Mindfulness, high performance and responding to adversity', guest: 'Emma Murray', topic: 'Human change', blurb: 'Emma Murray on mindfulness, high performance and responding to adversity.', href: 'https://youtu.be/9b5eSXGs0xs', date: '2020-05-05', image: '/assets/photos/perspectives-murray.webp', imageHasName: true },
  { id: 'assaraf', title: 'Mindset, fear and procrastination in business and life', guest: 'John Assaraf', topic: 'Human change', blurb: 'John Assaraf on mindset, fear and procrastination in business and life.', href: 'https://youtu.be/lAx8k1cKhzs', date: '2020-10-13', image: '/assets/photos/perspectives-assaraf.webp', imageHasName: true },
  { id: 'forrest', title: 'Achievement, inner wellbeing and the experiences behind her book Glide', guest: 'Lisa Forrest', topic: 'Human change', blurb: 'Lisa Forrest on achievement, inner wellbeing and the experiences behind her book Glide.', href: 'https://youtu.be/IArnjW7_JH8', date: '2021-06-01', image: '/assets/photos/perspectives-forrest.webp', imageHasName: true },
  { id: 'gregorevic', title: 'Ageing, wellbeing and meaningful living', guest: 'Dr Kate Gregorevic', topic: 'Human change', blurb: 'Dr Kate Gregorevic on ageing, wellbeing and meaningful living.', href: 'https://youtu.be/CwNeyo7JeRs', date: '2020-10-27', image: '/assets/photos/perspectives-gregorevic.webp', imageHasName: true },
  { id: 'christie', title: 'Time, priorities and making room for what matters', guest: 'Kate Christie', topic: 'Human change', blurb: 'Kate Christie on time, priorities and making room for what matters.', href: 'https://youtu.be/DQxpgNPki98', date: '2020-08-19', image: '/assets/photos/perspectives-christie.webp', imageHasName: true },
  { id: 'blowers', title: 'Anxiety and rebuilding confidence', guest: 'Katrina Blowers', topic: 'Human change', blurb: 'Katrina Blowers on anxiety and rebuilding confidence.', href: 'https://youtu.be/B-qDVAVefr4', date: '2020-07-21', image: '/assets/photos/perspectives-blowers.webp', imageHasName: true },
  { id: 'lindsay', title: 'Resilience, perspective and lessons from history', guest: 'Patrick Lindsay', topic: 'Human change', blurb: 'Patrick Lindsay on resilience, perspective and lessons from history.', href: 'https://youtu.be/Frm9r9AB8V4', date: '2021-03-09', image: '/assets/photos/perspectives-lindsay.webp', imageHasName: true },
  { id: 'deen', title: 'Children’s storytelling, gender stereotypes and social change', guest: 'Sophie Deen', topic: 'Ideas & meaning', blurb: 'Sophie Deen on children’s storytelling, gender stereotypes and social change.', href: 'https://youtu.be/ZCVfHr6Lz8I', date: '2020-11-10', image: '/assets/photos/perspectives-deen.webp', imageHasName: true },
  { id: 'huntley', title: 'Climate psychology, communication and social change', guest: 'Dr Rebecca Huntley', topic: 'Ideas & meaning', blurb: 'Dr Rebecca Huntley on climate psychology, communication and social change.', href: 'https://youtu.be/epUImz0tF60', date: '2020-09-15', image: '/assets/photos/perspectives-huntley.webp', imageHasName: true },
  { id: 'gilmore', title: 'Feminism, media and assumptions about gender', guest: 'Jane Gilmore', topic: 'Ideas & meaning', blurb: 'Jane Gilmore on feminism, media and assumptions about gender.', href: 'https://youtu.be/p8EqdbAROZ4', date: '2020-06-02', image: '/assets/photos/perspectives-gilmore.webp', imageHasName: true },
  { id: 'tynes', title: 'Social-media judgement and the consequences of public backlash', guest: 'Natasha Tynes', topic: 'Ideas & meaning', blurb: 'Natasha Tynes on social-media judgement and the consequences of public backlash.', href: 'https://youtu.be/a3ZvMKRtUv8', date: '2020-08-05', image: '/assets/photos/perspectives-tynes.webp', imageHasName: true },
  { id: 'de-jong', title: 'Psychedelics research and therapeutic policy, discussed in 2021', guest: 'Tania de Jong', topic: 'Ideas & meaning', blurb: 'Tania de Jong on psychedelics research and therapeutic policy, discussed in 2021.', href: 'https://youtu.be/xwIPmbwwTsw', date: '2021-06-29', image: '/assets/photos/perspectives-de-jong.webp', imageHasName: true },
  { id: 'salt', title: 'Demography and social change in the post-COVID world, discussed in 2020', guest: 'Bernard Salt', topic: 'Ideas & meaning', blurb: 'Bernard Salt on demography and social change in the post-COVID world, discussed in 2020.', href: 'https://youtu.be/ji5pxTXHZ6I', date: '2020-05-12', image: '/assets/photos/perspectives-salt.webp', imageHasName: true },
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
// `art` is the hand-drawn illustration in /assets/perspectives (cut from design screenshot 27).
export const RABBIT_HOLES: { art: string; title: string; question: string; explore: string[]; cta: string; topic: Topic }[] = [
  { art: 'rh-head', title: 'The self beneath the pattern', question: 'What are our protective parts trying to prevent us from feeling, and why does understanding ourselves so rarely create change on its own?', explore: ['IFS', 'emotional integration', 'psychology', 'coaching conversations', 'the mind', 'human change'], cta: 'Explore human change', topic: 'Human change' },
  { art: 'rh-heart', title: 'Why does loving someone bring all our shit to the surface?', question: 'What do attachment, intimacy, parenting, conflict and endings reveal about who we become when another person matters deeply?', explore: ['attachment', 'adult love', 'boundaries', 'parenting', 'rupture & repair', 'relationships'], cta: 'Explore relationships', topic: 'Relationships' },
  { art: 'rh-eye', title: 'The ideas that change how we see the world', question: 'What do we owe one another? What makes a life meaningful? How should we think about time, culture, suffering, ambiguity and change?', explore: ['ethics', 'philosophy', 'meaning', 'culture', 'psychedelics', 'social change'], cta: 'Explore ideas & meaning', topic: 'Ideas & meaning' },
  { art: 'rh-stairs', title: 'People who built something unlikely', question: 'What happens inside the mind of someone who creates what did not previously exist, persists when it makes no sense and eventually makes it work?', explore: ['entrepreneurship', 'leadership', 'brands', 'risk', 'the long game', 'building beyond yourself'], cta: 'Explore builders & founders', topic: 'Founders & business' },
];

// ---------- Where to watch and listen — the channel URLs, used in the hero and the bottom band ----------
// The podcast is "BraveHeart with Remi Pearson (formerly Perspectives Podcast)".
export const CHANNEL_URLS = {
  youtube: 'https://www.youtube.com/channel/UC7zP_SmBHzsZG8lmInQBgHQ',
  spotify: 'https://open.spotify.com/show/354ePLIvSfb32sFMGP30nE',
  apple: 'https://podcasts.apple.com/us/podcast/braveheart-with-remi-pearson-formerly-perspectives/id1458461238',
};
export const LISTEN_LINKS: { icon: IconName; label: string; href: string }[] = [
  { icon: 'play', label: 'Watch on YouTube', href: CHANNEL_URLS.youtube },
  { icon: 'waves', label: 'Listen on Spotify', href: CHANNEL_URLS.spotify },
  { icon: 'mic', label: 'Listen on Apple Podcasts', href: CHANNEL_URLS.apple },
];
