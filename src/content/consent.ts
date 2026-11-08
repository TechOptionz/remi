// The optional "weekly teaching while you wait" choice on every program waitlist form (components/shared/WeeklyOptIn.tsx).
// Separate from the Let Truth Lead newsletter: ticking it puts the person in the "Weekly teaching from Remi" segment /
// topic only. Each yes and each unsubscribe is logged with the exact wording agreed to (lib/consent.ts); the team sees
// the log at /stats/consent?key=<STATS_KEY>.
//
// To change the wording, ADD a new version below and point WEEKLY_CONSENT at it. Never edit an old version's text:
// records name the version they agreed to, and the log keeps the text itself too.

export const WEEKLY_CONSENT_VERSIONS: Record<string, string> = {
  '2026-11-08': 'Yes, I’d also like a short weekly email from Remi with practical teaching and ideas while I’m on this waitlist. I can unsubscribe from these emails at any time without losing my place.',
};

export const WEEKLY_CONSENT = { version: '2026-11-08', text: WEEKLY_CONSENT_VERSIONS['2026-11-08'] };

/** Where people stop the weekly emails (put this link, with ?email=, in every weekly email's footer). */
export const WEEKLY_UNSUBSCRIBE_PATH = '/weekly-teaching/unsubscribe';
