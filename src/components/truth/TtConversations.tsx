import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { TOPIC_LINKS } from '@/content/tell-me-the-truth';

// CONVERSATIONS TO DISAPPEAR INTO — four topics, each opening the Perspectives archive filtered to its closest topic (design part three)
export default function TtConversations() {
  return (
    <section className="kb-section tt-convs" aria-labelledby="tt-convs-h">
      <Head id="tt-convs-h"><Brush>Conversations</Brush> to disappear into</Head>
      <p className="kb-sub kb-indent">Follow the questions wherever they lead.</p>
      <div className="tt-topic-grid">
        {TOPIC_LINKS.map(t => (
          <Link key={t.title} href={`/perspectives?topic=${encodeURIComponent(t.topic)}#archive`} className="tt-topic">
            <Icon name={t.icon} size={48} strokeWidth={1.1} />
            <span>{t.title}</span>
            <span className="kb-arrow" aria-hidden="true">⟶</span>
          </Link>
        ))}
      </div>
      <p className="kb-center tt-convs-cta"><Link href="/perspectives" className="kb-btn-outline">Explore Perspectives</Link></p>
    </section>
  );
}
