import Icon from '@/components/shared/Icon';
import { Brush, Head, QuoteBanner } from '@/components/rabbit-holes/ui';
import { PRINCIPLES } from '@/content/leadership';

// YOU CANNOT LEAD EVERYONE FROM THE SAME PLACE — three principle cards, then the rust quote (design part two)
export default function LdPrinciples() {
  return (
    <section className="kb-section ld-principles" aria-labelledby="ld-principles-h">
      <Head id="ld-principles-h"><Brush>You cannot</Brush> lead everyone from the same place</Head>
      <p className="kb-sub kb-indent">The level of thinking present determines what kind of leadership can actually be heard.</p>
      <ul className="ld-principle-grid">
        {PRINCIPLES.map(p => (
          <li key={p.title}>
            <span className="ld-icon-ring"><Icon name={p.icon} size={30} strokeWidth={1.3} /></span>
            <span className="ld-principle-title">{p.title}</span>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
      <QuoteBanner>Leadership is not dragging everyone to where you are.<br /> It is seeing what thinking is present and creating the conditions for the next capability.</QuoteBanner>
    </section>
  );
}
