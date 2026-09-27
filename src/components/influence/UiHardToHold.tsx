import TopicLinks from '@/components/rabbit-holes/TopicLinks';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { HARD_TO_HOLD, TOPIC_LINKS } from '@/content/ultimate-influence';
import { Cards } from './ui';

// DESIGN PART THREE, middle: "Especially when what you sell is hard to hold" beside "Conversations to disappear into"
// (side by side on desktop, stacked on phones)
export default function UiHardToHold() {
  return (
    <div className="ui-pair">
      <section className="kb-section ui-hold" aria-labelledby="ui-hold-h">
        <Head id="ui-hold-h">Especially when what you sell <Brush>is hard</Brush> to hold</Head>
        <p className="kb-sub kb-indent">Intangible value needs a better conversation, not a louder pitch.</p>
        <Cards items={HARD_TO_HOLD} layout="disc" cols={2} className="ui-cards--ring" />
      </section>
      <TopicLinks id="ui-convs-h" title={<><Brush>Conversations</Brush> to disappear into</>} lede="Because buying decisions are human decisions." links={TOPIC_LINKS} cta="filled" />
    </div>
  );
}
