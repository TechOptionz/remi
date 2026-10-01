// Privacy policy. Copy lives in components/legal/PrivacyPolicy.tsx.
import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy — Remi Pearson',
  description: 'How remipearson.com collects, uses and protects the personal information you share through its forms and newsletter.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
