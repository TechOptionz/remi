// Invite Remi. Sections live in components/invite/.
import type { Metadata } from 'next';
import InviteHero from '@/components/invite/InviteHero';
import Rooms from '@/components/invite/Rooms';
import Formats from '@/components/invite/Formats';
import SpeakerReel from '@/components/invite/SpeakerReel';
import Founders from '@/components/invite/Founders';
import FoundersQuote from '@/components/invite/FoundersQuote';
import SomethingElse from '@/components/invite/SomethingElse';
import Topics from '@/components/invite/Topics';
import FitCheck from '@/components/invite/FitCheck';
import InviteForm from '@/components/invite/InviteForm';

export const metadata: Metadata = {
  title: 'Invite Remi — Remi Pearson',
  description: 'Invite Remi Pearson to your podcast, TV or radio show, panel, stage, senior team, roundtable, salon, documentary, festival or something wonderfully difficult to categorise.',
};

export default function InvitePage() {
  return (
    <main>
      <InviteHero />
      <Rooms />
      <Formats />
      <SpeakerReel />
      <Founders />
      <FoundersQuote />
      <SomethingElse />
      <Topics />
      <FitCheck />
      <InviteForm />
    </main>
  );
}
