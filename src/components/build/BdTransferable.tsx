import Icon from '@/components/shared/Icon';
import { Brush, Head, QuoteBanner } from '@/components/rabbit-holes/ui';
import { TRANSFERABLE } from '@/content/build-an-asset';

// WHAT HAS TO BECOME TRANSFERABLE — six outlined cards, icon on the left, then the rust quote (design part two)
export default function BdTransferable() {
  return (
    <section className="kb-section bd-transfer" aria-labelledby="bd-transfer-h">
      <Head id="bd-transfer-h">What has to <Brush>become</Brush> transferable</Head>
      <p className="kb-sub kb-indent">Not everything needs a manual. Everything valuable does<br /> need a way to exist beyond one person.</p>
      <ul className="bd-transfer-grid">
        {TRANSFERABLE.map(t => (
          <li key={t.name}>
            <Icon name={t.icon} size={40} strokeWidth={1.2} />
            <span><span className="bd-transfer-name">{t.name}</span><span>{t.text}</span></span>
          </li>
        ))}
      </ul>
      <QuoteBanner>You do not get free by doing less of the same work.<br /> You get free when the value no longer needs to pass through you.</QuoteBanner>
    </section>
  );
}
