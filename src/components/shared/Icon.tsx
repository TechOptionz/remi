// Line icons used across the inner pages. Usage: <Icon name="mic" size={40} />. Add new icons to ICONS (24×24, stroke only).
const ICONS = {
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" /></>,
  chat: <><path d="M4 4h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M16 8h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-4-3h-3a2 2 0 0 1-2-2v-1" /></>,
  roundtable: <><ellipse cx="12" cy="12" rx="6" ry="3.5" /><circle cx="12" cy="4.5" r="1.5" /><circle cx="4" cy="8" r="1.5" /><circle cx="20" cy="8" r="1.5" /><circle cx="4" cy="16.5" r="1.5" /><circle cx="20" cy="16.5" r="1.5" /><circle cx="12" cy="20" r="1.5" /></>,
  institution: <path d="M3 9l9-5 9 5H3zM5.5 9v8.500M9.8 9v8.500M14.2 9v8.500M18.5 9v8.500M4 17.500h16M3 21h18" />,
  book: <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1V5zM12 6v14" />,
  camera: <><rect x="3" y="10" width="12" height="10" rx="2" /><path d="M15 13l6-3v10l-6-3" /><circle cx="6.5" cy="6" r="2.5" /><circle cx="12" cy="6" r="2.5" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.100L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />,
  people: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="9" r="2.2" /><circle cx="19" cy="9" r="2.2" /><path d="M7 20c0-3 2.2-5.5 5-5.500s5 2.5 5 5.500M1.5 19c0-2.4 1.5-4.3 3.5-4.300M22.5 19c0-2.4-1.5-4.3-3.5-4.3" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.500l-2 5-5 2 2-5z" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  heartCrack: <><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /><path d="M12 7.500l-1.5 3 3 1.5-2 3.5" /></>,
  headHeart: <><path d="M9 21v-3H7a2 2 0 0 1-2-2v-2l-1.5-.8L5 10.500A7 7 0 1 1 17 15v6" /><path d="M12 12.500s-2.5-1.5-2.5-3.200a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8c0 1.7-2.5 3.2-2.5 3.200z" /></>,
  couple: <><circle cx="8" cy="6" r="2.5" /><circle cx="16" cy="6" r="2.5" /><path d="M4 20v-5a4 4 0 0 1 8 0 4 4 0 0 1 8 0v5M12 15v5" /></>,
  pair: <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M2.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M13 14.500c.9-.3 1.9-.5 3-.5 3 0 5.5 2 5.5 5" /></>,
  person: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M12 8v6M9.5 11.500L12 14l2.5-2.5" /></>,
  growth: <path d="M4 20v-3M9 20v-5M14 20v-7M19 20v-9M4 13l6-5 4 3 6-6M16 5h4v4" />,
  sprout: <path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 9c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5zM7 21h10" />,
  scribble: <path d="M5 12c0-5 6-8 10-5s3 10-2 11-9-3-7-8 9-6 12-2 0 10-5 9-6-7-2-10 8-1 8 3-4 6-7 4" />,
  spiral: <path d="M12 12a2 2 0 1 1 2 2 4 4 0 1 1-4-4 6 6 0 1 1 6 6 8 8 0 0 1-8-8" />,
  armchair: <path d="M6 11V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3M4 11a2 2 0 0 1 2 2v2h12v-2a2 2 0 1 1 4 0v5H2v-5a2 2 0 0 1 2-2zM5 18v2M19 18v2" />,
  brain: <path d="M12 5v14M12 5a3 3 0 0 0-5.5 1.500A3.5 3.5 0 0 0 5 13a3.5 3.5 0 0 0 3 5.500A3 3 0 0 0 12 19M12 5a3 3 0 0 1 5.5 1.500A3.5 3.5 0 0 1 19 13a3.5 3.5 0 0 1-3 5.500A3 3 0 0 1 12 19" />,
  flag: <path d="M5 21V4M5 4h13l-3 4 3 4H5" />,
  bars: <path d="M5 20v-6h3v6M10.5 20V9h3v11M16 20V5h3v15M3 20h18" />,
  handshake: <path d="M2 8l4-2 5 2 2-1 5-1 4 2v7l-3 1-4 3.500a1.5 1.5 0 0 1-2 0L7 15H4zM11 8l-3 3.500a1.5 1.5 0 0 0 2.2 1.800L13 11l4 4" />,
  stage: <><rect x="4" y="4" width="16" height="12" rx="1" /><path d="M8 8h8v4H8zM7 20l2-4M17 20l-2-4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
  books: <path d="M4 17h15v3H4zM5 13h15v4H5zM4 9h15v4H4z" />,
  play: <><circle cx="12" cy="12" r="9" /><path d="M10 8.500v7l6-3.500z" /></>,
  gradcap: <path d="M2 9l10-4 10 4-10 4zM6 11v5c2 2 10 2 12 0v-5M22 9v6" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  knot: <><circle cx="9" cy="9" r="4" /><circle cx="15" cy="9" r="4" /><circle cx="9" cy="15" r="4" /><circle cx="15" cy="15" r="4" /></>,
  burst: <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.600l3.5 3.500M14.9 14.900l3.5 3.500M18.4 5.600l-3.5 3.500M9.1 14.900l-3.5 3.5" />,
  eye: <><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  headphones: <path d="M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2zM20 15a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2z" />,
  summit: <path d="M3 21l6-10 4 5 3-4 5 9zM13 3v6M13 3h5l-1.5 1.5L18 6h-5" />,
  waves: <><circle cx="12" cy="12" r="9" /><path d="M7.5 9.5c3-1 6-.8 9 .7M8 12.500c2.5-.8 5-.6 7.5.6M8.5 15.300c2-.6 4-.4 6 .5" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.500L21 21" /></>,
  sparkle: <path d="M12 2.500v19M3.7 7.500l16.6 9M20.3 7.500l-16.6 9" />,
  tv: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 3l4 4 4-4M8 22h8" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /><circle cx="12" cy="12" r="6.5" /></>,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.900c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />,
} as const;

export type IconName = keyof typeof ICONS;

export default function Icon({ name, size = 24, strokeWidth = 1.5 }: { name: IconName; size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}
