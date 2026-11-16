// The Shift — women in business mentoring (/programs/the-shift). A waitlist page from Remi's copy deck and mockups;
// the whole page is components/shift-landing/ShiftLanding.tsx (copy in content/shift-landing.ts).
import type { Metadata } from 'next';
import ShiftLanding from '@/components/shift-landing/ShiftLanding';

export const metadata: Metadata = {
  title: 'The Shift: Women in Business Mentoring — Remi Pearson',
  description: 'The Shift is Remi Pearson’s mentoring group for 20 women with businesses generating $500,000+ in annual revenue who want to grow, develop confident leaders and depend less on themselves. Beginning early 2027, by application: join the waitlist.',
};

export default function TheShiftPage() {
  return <ShiftLanding />;
}
