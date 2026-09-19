// Perspectives — Remi's long-form conversations. Sections live in components/perspectives/; episodes in content/perspectives.ts.
import type { Metadata } from 'next';
import PerspectivesHero from '@/components/perspectives/PerspectivesHero';
import PlacesToBegin from '@/components/perspectives/PlacesToBegin';
import RabbitHoleRows from '@/components/perspectives/RabbitHoleRows';
import LiveWork from '@/components/perspectives/LiveWork';
import Featured from '@/components/perspectives/Featured';
import Archive from '@/components/perspectives/Archive';
import RemiAsGuest from '@/components/perspectives/RemiAsGuest';
import KeepInConversation from '@/components/perspectives/KeepInConversation';

export const metadata: Metadata = {
  title: 'Perspectives — Remi Pearson',
  description: 'Long-form conversations on ideas, psychology, philosophy, relationships, culture, leadership and business. Come for the idea. Stay for where the conversation goes.',
};

export default function PerspectivesPage() {
  return (
    <main>
      <PerspectivesHero />
      <PlacesToBegin />
      <RabbitHoleRows />
      <LiveWork />
      <Featured />
      <Archive />
      <RemiAsGuest />
      <KeepInConversation />
    </main>
  );
}
