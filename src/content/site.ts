// Site-wide content and settings. Edit copy, links and options here; components read from this file.

export const SITE = {
  name: 'Remi Pearson',
  tagline: 'Let truth lead',
  logoAlt: 'Remi — Let truth lead',
  copyright: '© 2026 Remi Pearson. All rights reserved.',
  vimeoId: '1221386697',
};

// ---------- Navigation (header, mobile menu and footer "Explore" column) ----------
export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  { label: 'Perspectives', href: '/perspectives' },
  { label: 'Ideas & Models', href: '/ideas-models' },
  { label: 'Programs', href: '/programs' },
  { label: 'Books', href: '/#work' },
  { label: 'About Remi', href: '/about-remi' },
  { label: 'Invite Remi', href: '/invite-remi' },
];

export const HEADER_CTA = { label: 'Show me where to start', href: '/#rabbit-holes' };

// ---------- Variants menu (design review tool: home hero layout + colour palette) ----------
export const HEROES = [
  { id: 'E', label: 'E · Let truth lead', shortLabel: 'E · Let truth lead' },
  { id: 'A', label: 'A · Statement', shortLabel: 'A · Statement' },
  { id: 'B', label: 'B · Video first, text below', shortLabel: 'B · Video first' },
  { id: 'C', label: 'C · Split', shortLabel: 'C · Split' },
  { id: 'C1', label: 'C1 · Portrait, text & video', shortLabel: 'C1 · Portrait, text & video' },
  { id: 'C2', label: 'C2 · Picture-in-picture video', shortLabel: 'C2 · Picture-in-picture video' },
  { id: 'C3', label: 'Full screen C3', shortLabel: 'Full screen C3' },
  { id: 'D', label: 'D · Full-screen video', shortLabel: 'D · Full-screen video' },
] as const;
export type HeroId = (typeof HEROES)[number]['id'];
export const DEFAULT_HERO: HeroId = 'C2';

// Menu order differs from the default: palettes are defined in styles/tokens.css
export const PALETTES = [
  { id: 'oxblood-parchment', label: 'Oxblood & parchment' },
  { id: 'parchment-rust', label: 'Parchment & rust' },
  { id: 'midnight-gold', label: 'Midnight & gold' },
] as const;
export type PaletteId = (typeof PALETTES)[number]['id'];
export const DEFAULT_PALETTE: PaletteId = 'parchment-rust';

// ---------- Home hero copy (shared by every hero variant) ----------
export const HERO_COPY = {
  eyebrow: 'Strategist · Speaker · Author',
  titleStart: 'Let truth',
  titleEm: 'lead.',
  lede: "I'm Remi. I'm fascinated by why intelligent, self-aware humans get stuck — and how truth can set us free.",
  primaryCta: { label: 'Show me where to start', href: '#rabbit-holes' },
  videoCta: 'Watch perspectives',
  portrait: { src: '/assets/photos/cta-remi.webp', alt: 'Remi Pearson speaking' },
  photo: { src: '/assets/photos/remi-pink-jacket.webp', alt: 'Remi Pearson smiling' },
};

// ---------- Social links ----------
export type SocialId = 'linkedin' | 'instagram' | 'youtube' | 'facebook' | 'x' | 'podcast';
export const SOCIAL: { id: SocialId; label: string; href: string }[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/remi-sharon-pearson/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/remi.sharon.pearson/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC7zP_SmBHzsZG8lmInQBgHQ' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Remi.Sharon.Pearson' },
  { id: 'x', label: 'X', href: 'https://twitter.com/remi_pearson' }, // shown in hero D only
  { id: 'podcast', label: 'Podcast', href: 'https://podcasts.apple.com/us/podcast/braveheart-with-remi-pearson-formerly-perspectives/id1458461238' },
];

// ---------- Footer ----------
export const FOOTER = {
  statementStart: 'Fancy a proper',
  statementEm: 'conversation?',
  inviteCta: { label: 'Invite Remi →', href: '/invite-remi#invite-form' },
  newsHead: "I'll write when I have something worth saying",
  newsCopy: 'Thoughtful ideas, new conversations and the occasional invitation.',
  newsButton: 'Keep me in the conversation',
  newsThanks: "Thank you, you're in the conversation.",
  enquire: [
    { label: 'Strategy facilitation', interest: 'Facilitation' },
    { label: 'Keynote speaking', interest: 'Speaking' },
    { label: 'Media requests', interest: 'Media' },
    { label: 'Books & programs', interest: 'Products' },
  ],
  note: 'Let truth lead.',
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

// ---------- Homepage enquiry form: "I'm interested in" options ----------
export const INTERESTS = [
  { value: 'Facilitation', label: 'Strategy facilitation' },
  { value: 'Speaking', label: 'Keynote speaking' },
  { value: 'Media', label: 'Podcast / Media' },
  { value: 'Products', label: 'Books & programs' },
  { value: 'Other', label: 'Other' },
];

// ---------- Invite Remi form: "What are you inviting me to?" options ----------
export const INVITATIONS = [
  { value: 'Conversation', label: 'A proper conversation — podcast, interview, fireside chat' },
  { value: 'Room', label: 'An interesting room — panel, roundtable, salon, festival' },
  { value: 'Speaking', label: 'A stage — keynote or public lecture' },
  { value: 'Facilitation', label: 'Senior team facilitation' },
  { value: 'Consulting', label: 'High-level strategic consulting' },
  { value: 'Media', label: 'Books, editorial, documentary or media' },
  { value: 'Other', label: 'Something else' },
];

// ---------- T.R.U.S.T.M.E. levels, top (7) to bottom (1). Shown on the homepage and the model page ----------
export const TRUSTME_LEVELS: { num: number; name: string; question: string; tone?: 'dark' | 'accent' }[] = [
  { num: 7, name: 'Evolution', question: 'What serves the whole now?' },
  { num: 6, name: 'Meaning', question: 'What are we contributing beyond ourselves?', tone: 'dark' },
  { num: 5, name: 'Tenacity', question: 'How do we improve and achieve?', tone: 'accent' },
  { num: 4, name: 'Systems', question: 'How do we make this stable and repeatable?' },
  { num: 3, name: 'Uniqueness', question: 'Who am I when I stop conforming?', tone: 'dark' },
  { num: 2, name: 'Relatability', question: 'Where do I belong and whose truth do I trust?' },
  { num: 1, name: 'Trust', question: 'Can I survive and am I enough?', tone: 'accent' },
];
export const TRUSTME_INTRO = {
  body: 'People do not all make sense of the world from the same place. T.R.U.S.T.M.E. reveals the level of thinking shaping what a person, group or organisation notices, values, fears and can take responsibility for.',
  note: 'Under pressure, our natural level becomes easier to see.',
};
