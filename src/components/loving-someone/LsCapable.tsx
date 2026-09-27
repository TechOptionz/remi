import Icon from '@/components/shared/Icon';
import { Brush } from '@/components/rabbit-holes/ui';
import { CAPABLE } from '@/content/loving-someone';
import { Head } from './ui';

// NOT PERFECT. JUST MORE HONEST AND MORE CAPABLE. — six outlined cards, each with a line icon (design part two)
export default function LsCapable() {
  return (
    <section className="kb-section ls-capable" aria-labelledby="ls-capable-h">
      <Head id="ls-capable-h"><Brush>Not perfect.</Brush> Just more honest and more capable.</Head>
      <ul className="ls-capable-grid">
        {CAPABLE.map(c => <li key={c.text}><Icon name={c.icon} size={34} strokeWidth={1.3} /><span>{c.text}</span></li>)}
      </ul>
    </section>
  );
}
