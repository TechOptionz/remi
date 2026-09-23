// "Talk to Remi" chat widget content. Replies are scripted and matched on keywords;
// swap the reply step in components/shared/ChatWidget.tsx for a real backend later.

export type ChatReply = { text: string; cta: string; interest: string };

export const CHAT = {
  title: 'Talk to Remi',
  avatar: '/assets/photos/story.webp',
  teaser: 'Have a question? Talk to Remi',
  greeting: "Hi, thanks for stopping by. Ask about keynotes, strategy days, media or Remi's books and programs. Pick a topic or type a question.",
  placeholder: 'Ask about keynotes, strategy days…',
  formLink: 'Prefer a form? Send a full enquiry',
  quickReplies: ['Keynote speaking', 'Strategy day', 'Podcast / media', 'Books & programs'],
  replyDelayMs: 1100,
};

export const CHAT_REPLIES: Record<string, ChatReply> = {
  Speaking: { text: 'Remi speaks at conferences and leadership events on truth, leadership and decision-making. Share your date, location and audience size and the team will come back to you.', cta: 'Send a speaking enquiry', interest: 'Speaking' },
  Facilitation: { text: "Remi facilitates strategy days, offsites and board sessions. Tell us a little about the team and what's on the table, and we'll be in touch.", cta: 'Send a facilitation enquiry', interest: 'Facilitation' },
  Media: { text: 'Thanks for thinking of Remi. Send the show or publication, the topic and your timing, and the team will reply.', cta: 'Send a media request', interest: 'Media' },
  Products: { text: "Remi's books and self-paced programs are built on her frames. Leave your details and we'll point you to what fits.", cta: 'Ask about books & programs', interest: 'Products' },
  Coaching: { text: "Remi doesn't take on individual coaching, but her books and programs work through the same frames. Would one of those help?", cta: 'See books & programs', interest: 'Products' },
  Other: { text: "Good question. I can help with keynotes, strategy days, media and Remi's books and programs. For anything else, send the details through the enquiry form and Remi's team will pick it up.", cta: 'Open the enquiry form', interest: 'Other' },
};

// First match wins, top to bottom; anything else falls through to "Other"
export const CHAT_TOPICS: [RegExp, string][] = [
  [/coach/, 'Coaching'],
  [/keynote|speak|stage|conference|event/, 'Speaking'],
  [/strateg|facilitat|offsite|board|workshop/, 'Facilitation'],
  [/podcast|media|interview|press|\btv\b|television|radio/, 'Media'],
  [/book|program|course|product|audit/, 'Products'],
];
