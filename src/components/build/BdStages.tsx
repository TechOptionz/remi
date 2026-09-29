import { Art, Brush, Head } from '@/components/rabbit-holes/ui';
import { STAGES } from '@/content/build-an-asset';

// FROM PRACTICE TO ASSET — four numbered stages joined by arrows, then the quote between two flourishes (design part two)
export default function BdStages() {
  return (
    <section className="kb-section bd-stages" aria-labelledby="bd-stages-h">
      <Head id="bd-stages-h">From practice <Brush>to asset</Brush></Head>
      <p className="kb-sub kb-indent">The shift is not simply hiring people. It is turning value into something other people can understand, deliver, improve and trust.</p>
      <ol className="bd-stage-row">
        {STAGES.map((s, i) => (
          <li key={s.name}>
            <span className="bd-stage-num">{i + 1}</span>
            <span className="bd-stage-name">{s.name}</span>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
      <blockquote className="bd-stages-quote">
        <Art name="kb-flourish" className="bd-flourish" />
        <p>Hiring people around founder dependence<br /> only creates more people who depend on the founder.</p>
        <Art name="kb-flourish" className="bd-flourish bd-flourish--r" />
      </blockquote>
    </section>
  );
}
