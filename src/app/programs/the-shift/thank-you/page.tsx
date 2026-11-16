// Where The Shift's waitlist form sends a new sign-up (/programs/the-shift/thank-you): Remi's confirmation, from the
// deck and the "WAITLIST CONFIRMATION" mockup. Noindex and held out of the sitemap (HELD_BACK in app/sitemap.ts).
import type { Metadata } from 'next';
import ShiftThanks from '@/components/shift-landing/ShiftThanks';

export const metadata: Metadata = {
  title: 'You’re on the waitlist for The Shift — Remi Pearson',
  description: 'You’re on the waitlist for The Shift. You’ll hear from us by email when applications open.',
  robots: { index: false, follow: false },
};

export default function TheShiftThankYouPage() {
  return <ShiftThanks />;
}
