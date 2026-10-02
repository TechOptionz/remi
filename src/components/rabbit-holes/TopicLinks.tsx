import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';
import { Head } from './ui';

type Props = {
  id: string; title: React.ReactNode; lede: string;
  links: readonly { icon: IconName; title: string; topic: string; video?: { title: string; href: string } }[];
  cta?: 'outline' | 'filled';
};

/** CONVERSATIONS TO DISAPPEAR INTO — topic cards, each opening the Perspectives archive filtered to its topic, then "Explore Perspectives".
 *  A card with a `video` whose `href` is set also offers Remi's own video on that topic underneath. */
export default function TopicLinks({ id, title, lede, links, cta = 'outline' }: Props) {
  return (
    <section className="kb-section kb-topics" aria-labelledby={id}>
      <Head id={id}>{title}</Head>
      <p className="kb-sub kb-indent">{lede}</p>
      <div className="kb-topic-grid">
        {links.map(t => {
          const card = (
            <Link key={t.title} href={`/perspectives?topic=${encodeURIComponent(t.topic)}#archive`} className="kb-topic">
              <Icon name={t.icon} size={48} strokeWidth={1.1} />
              <span>{t.title}</span>
              <span className="kb-arrow" aria-hidden="true">⟶</span>
            </Link>
          );
          return t.video?.href
            ? <div key={t.title} className="kb-topic-wrap">{card}<Link href={t.video.href} className="kb-topic-video">Watch: {t.video.title} <span aria-hidden="true">⟶</span></Link></div>
            : card;
        })}
      </div>
      <p className="kb-center kb-topics-cta"><Link href="/perspectives" className={cta === 'filled' ? 'hm-btn hm-btn--sm' : 'kb-btn-outline'}>Explore Perspectives</Link></p>
    </section>
  );
}
