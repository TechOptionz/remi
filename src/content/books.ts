// The books on /books, from Remi's "All three books sales copy and pricing" (Oct 2026; pricing may change). Copy is word
// for word. Rashid supplies the online purchase links: set `buyHref` and the "Buy …" button goes live; until then the
// card shows the price with "Buy link coming soon". `program` links the book to its online program in content/products.ts.
export type Book = {
  slug: string; title: string;
  badge?: string;                                   // e.g. "Bestseller", shown above the title
  tagline: string;                                  // the bold line under the byline
  text: string[];                                   // paragraphs before "Explore how to:" (*italic* marks the book's title)
  explore: string[];                                // the "Explore how to:" list
  closing: string;                                  // the paragraph after the list
  format: string; price: string;                    // "Ebook", "AUD $14.95"
  buyLabel: string; buyHref?: string;               // the purchase button
  note: string;                                     // the line under the button
  program?: { label: string; href: string };        // the online program built on the book
  cover: { src: string; width: number; height: number; mockup?: boolean }; // public/assets/books; `mockup`: a 3D shot on transparency, shown unframed
};

export const BOOKS: Book[] = [
  {
    slug: 'disruptive-leadership', cover: { src: '/assets/books/disruptive-leadership.webp', width: 900, height: 1274 },
    title: 'Disruptive Leadership', badge: 'Bestseller',
    tagline: 'Build a team that can think, take responsibility and achieve more together.',
    text: [
      'When every decision comes back to you, every standard needs reminding and every problem becomes yours to solve, being the leader can feel suspiciously like doing everybody else’s job. You may have capable people around you, yet somehow the business still depends on how much you can personally carry.',
      '*Disruptive Leadership* invites you to examine the conditions that produce those results. What does your culture encourage? What do your systems make possible? Where have you rewarded compliance when you wanted initiative, or stepped in so often that people stopped stepping up?',
      'Through the Critical Alignment Model, Remi Pearson explores four dimensions of a winning team: Environment, Structure, Implementation and People. The framework gives you a practical way to understand what needs attention and how the different parts of your business influence one another.',
    ],
    explore: [
      'Create a culture where high standards and personal responsibility are expected.',
      'Build structures that support excellent work while allowing room for innovation.',
      'Recognise when a recurring problem begins in the environment or systems around your people.',
      'Develop people beyond their job descriptions and towards their leadership potential.',
      'Challenge familiar ways of working that are limiting what your team can achieve.',
    ],
    closing: 'Written for business owners, leaders, managers and people ready to step into leadership, this book draws on the thinking Remi used to build The Coaching Institute. It offers a way to approach leadership with greater clarity, so your team has the conditions to contribute more fully.',
    format: 'Ebook', price: 'AUD $14.95', buyLabel: 'Buy Disruptive Leadership — $14.95 AUD',
    note: 'Electronic edition. No physical book will be shipped.',
    program: { label: 'Click here to be taken to the online program, Disruptive Leadership', href: '/ideas-models/disruptive-leadership' },
  },
  {
    slug: 'ultimate-you', cover: { src: '/assets/books/ultimate-you.webp', width: 900, height: 1317 },
    title: 'Ultimate You', badge: 'Bestseller',
    tagline: 'What would become possible if you trusted that your life mattered too?',
    text: [
      'You can become very good at being who other people need you to be. You learn what earns approval, which feelings to keep quiet and how to accommodate everyone around you. Years can pass that way, until you begin to wonder where you went in the middle of it all.',
      '*Ultimate You* is an invitation to explore that question honestly. Drawing on years of coaching and her own journey, Remi Pearson examines the fear, people-pleasing, procrastination and self-doubt that can keep you living at a distance from the life you want.',
      'This is a book for the person who senses there is more available, even if they cannot yet explain what that means. It asks you to look beneath familiar patterns, understand what has held you back and begin making room for your own emotional wellbeing.',
    ],
    explore: [
      'Understand the patterns that keep you doubting yourself or putting your life on hold.',
      'Recognise where pleasing others has come at a cost to you.',
      'Develop a more compassionate relationship with your emotional experience.',
      'Reconnect with what you want and what makes life meaningful to you.',
      'Begin creating a life you can cherish, with more room for who you actually are.',
    ],
    closing: 'You do not need to have yourself figured out before opening this book. Come with the questions you have, the uncertainty you feel and the possibility that the quiet wish for something different deserves your attention.',
    format: 'Ebook', price: 'AUD $14.95', buyLabel: 'Buy Ultimate You — $14.95 AUD',
    note: 'Electronic edition. No physical book will be shipped.',
  },
  {
    slug: 'ultimate-you-quest', cover: { src: '/assets/books/ultimate-you-quest.webp', width: 900, height: 889, mockup: true },
    title: 'Ultimate You Quest Edition',
    tagline: 'Get to know yourself beyond the roles you learned to play.',
    text: [
      'Perhaps you have already done quite a lot of personal development. You understand some of your patterns and can explain why you feel the way you do. Yet in an ordinary conversation, a difficult relationship or a moment when someone wants something from you, those familiar responses still take over.',
      '*Ultimate You Quest Edition* offers tools for exploring your inner experience and how it shapes the way you live and relate. Remi Pearson invites you to become curious about your feelings, recognise what you need and develop boundaries that give you a clearer sense of yourself.',
      'You can approach the book in your own way, returning to the ideas that speak to what is happening in your life. There is room to reflect, revisit and discover something you were not ready to see the first time.',
    ],
    explore: [
      'Recognise what holds you back from expressing more of who you are.',
      'Pay attention to your feelings, thoughts and wants.',
      'Develop healthier boundaries and a clearer understanding of what matters to you.',
      'Examine the fears that influence your choices and relationships.',
      'Bring greater openness and intimacy to the way you connect with others.',
      'Make more room for joy, connection and your own experience of being alive.',
    ],
    closing: 'For readers ready to explore themselves more deeply, the Quest Edition offers a personal journey through the questions that shape self-trust and relationships. Take your time with it. Your experience deserves more than being hurried past.',
    format: 'Ebook', price: 'AUD $24.95', buyLabel: 'Buy Ultimate You Quest Edition — $24.95 AUD',
    note: 'Electronic edition. No physical book will be shipped.',
  },
];
