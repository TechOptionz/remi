import Icon from '@/components/shared/Icon';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { STOP_CARRYING } from '@/content/leadership';

// WHEN YOU STOP CARRYING — four outlined cards, icon on the left (design part two)
export default function LdStopCarrying() {
  return (
    <section className="kb-section ld-stop" aria-labelledby="ld-stop-h">
      <Head id="ld-stop-h">When you <Brush>stop carrying</Brush></Head>
      <p className="kb-sub kb-indent">You do not abandon people. You stop doing the developmental work that belongs to them.</p>
      <ul className="ld-stop-grid">
        {STOP_CARRYING.map(s => (
          <li key={s.title}>
            <Icon name={s.icon} size={40} strokeWidth={1.2} />
            <span><span className="ld-stop-title">{s.title}</span><span>{s.text}</span></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
