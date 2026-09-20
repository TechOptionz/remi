// Programs — Rebel Yell. Sections live in components/programs/.
import type { Metadata } from 'next';
import RebelHero from '@/components/programs/RebelHero';
import Explanation from '@/components/programs/Explanation';
import RealMeeting from '@/components/programs/RealMeeting';
import WhatItDoes from '@/components/programs/WhatItDoes';
import Calibration from '@/components/programs/Calibration';
import Engagement from '@/components/programs/Engagement';
import WhoFor from '@/components/programs/WhoFor';
import WhyMe from '@/components/programs/WhyMe';
import WhyRebelYell from '@/components/programs/WhyRebelYell';
import WaitlistForm from '@/components/programs/WaitlistForm';
import Faq from '@/components/programs/Faq';
import RebelClosing from '@/components/programs/RebelClosing';

export const metadata: Metadata = {
  title: 'Rebel Yell — Remi Pearson',
  description: 'A private diagnostic and intervention for founders, owners, CEOs and senior leadership teams who have reached an impasse that more meetings, another strategy day or another round of polite agreement will not solve.',
};

export default function ProgramsPage() {
  return (
    <main>
      <RebelHero />
      <Explanation />
      <RealMeeting />
      <WhatItDoes />
      <Calibration />
      <Engagement />
      <WhoFor />
      <WhyMe />
      <WhyRebelYell />
      <WaitlistForm />
      <Faq />
      <RebelClosing />
    </main>
  );
}
