import { Brush, Head } from '@/components/rabbit-holes/ui';
import { BUILT_STATS } from '@/content/build-an-asset';

// I DID NOT LEARN THIS FROM A DIAGRAM — The Coaching Institute story and its three numbers (design part three)
export default function BdBuilt() {
  return (
    <section id="built" className="kb-section bd-built" aria-labelledby="bd-built-h">
      <Head id="bd-built-h">I did not learn this <Brush>from a</Brush> diagram</Head>
      <p className="kb-indent bd-built-lede">I built The Coaching Institute from a spare-room practice into a company that trained more than 11,000 coaches, generated nearly $200 million in revenue and was sold in 2024. The hard part was not growth. It was making the value transferable.</p>
      <dl className="bd-stats">
        {BUILT_STATS.map(s => (
          <div key={s.label}>
            <dt>{s.top && <small>{s.top} </small>}{s.num}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
