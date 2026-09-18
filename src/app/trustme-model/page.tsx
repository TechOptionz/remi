// The T.R.U.S.T.M.E. model. Sections live in components/trustme/; the levels themselves in content/site.ts.
import type { Metadata } from 'next';
import TrustmeHero from '@/components/trustme/TrustmeHero';
import SamePlace from '@/components/trustme/SamePlace';
import StopCarrying from '@/components/trustme/StopCarrying';
import TrustmeCta from '@/components/trustme/TrustmeCta';

export const metadata: Metadata = {
  title: 'The T.R.U.S.T.M.E. model — Remi Pearson',
  description: 'People do not all make sense of the world from the same place. T.R.U.S.T.M.E. reveals the level of thinking shaping what a person, group or organisation notices, values, fears and can take responsibility for.',
};

export default function TrustmePage() {
  return (
    <main>
      <TrustmeHero />
      <SamePlace />
      <StopCarrying />
      <TrustmeCta />
    </main>
  );
}
