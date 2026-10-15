// Perspectives — Remi's long-form conversations. Sections live in components/perspectives/; episodes in content/perspectives.ts.
import type { Metadata } from 'next';
import PerspectivesHero from '@/components/perspectives/PerspectivesHero';
import PlacesToBegin from '@/components/perspectives/PlacesToBegin';
import RabbitHoleRows from '@/components/perspectives/RabbitHoleRows';
import LiveWork from '@/components/perspectives/LiveWork';
import Featured from '@/components/perspectives/Featured';
import AskRemi from '@/components/shared/AskRemi';
import { CONVERSATIONS } from '@/content/perspectives';
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
      <div className="wrap rf-wrap">
        <AskRemi id="ask" options={CONVERSATIONS.map(c => `${c.guest} — ${c.title}`)} title="Questions about a conversation?"
          lede="Something an episode stirred up, a guest you’d like to hear, or a question you’d like me to take into the next conversation. It comes privately to me and my team; nothing is published." />
      </div>
      <RemiAsGuest />
      <KeepInConversation />
    </main>
  );
}
