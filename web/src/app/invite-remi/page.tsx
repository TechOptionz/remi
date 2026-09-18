// Invite Remi. Sections live in components/invite/, grouped in the three parts of the design.
import type { Metadata } from 'next';
import InviteHero from '@/components/invite/InviteHero';
import Rooms from '@/components/invite/Rooms';
import Formats from '@/components/invite/Formats';
import Founders from '@/components/invite/Founders';
import FoundersQuote from '@/components/invite/FoundersQuote';
import SomethingElse from '@/components/invite/SomethingElse';
import Topics from '@/components/invite/Topics';
import FitCheck from '@/components/invite/FitCheck';
import InviteForm from '@/components/invite/InviteForm';

export const metadata: Metadata = {
  title: 'Invite Remi — Remi Pearson',
  description: 'Invite Remi Pearson to your podcast, panel, stage, senior team, roundtable, salon, documentary, festival or something wonderfully difficult to categorise.',
};

export default function InvitePage() {
  return (
    <main>
      {/* Part One */}
      <InviteHero />
      <Rooms />
      {/* Part Two */}
      <Formats />
      <Founders />
      <FoundersQuote />
      <SomethingElse />
      {/* Part Three */}
      <Topics />
      <FitCheck />
      <InviteForm />
    </main>
  );
}
