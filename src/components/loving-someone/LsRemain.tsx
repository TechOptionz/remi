import Link from 'next/link';
import { Brush, Sym } from '@/components/rabbit-holes/ui';
import { PRACTICES, STEPS } from '@/content/loving-someone';
import { EIT_HREF } from '@/content/rabbit-holes';
import { Head } from './ui';

// THE RELATIONSHIP CHANGES WHEN YOU CAN REMAIN WITH YOURSELF — catch → stay → choose, the four practices, into EIT (design part two)
export default function LsRemain() {
  return (
    <section className="kb-section ls-remain" aria-labelledby="ls-remain-h">
      <Sym name="hm-loop" className="ls-remain-loop" />
      <Head id="ls-remain-h">The relationship changes<br /> when you can <Brush>remain with</Brush> yourself</Head>
      <p className="ls-indent ls-remain-lede">The work is not becoming endlessly calm.<br /> It is noticing the moment you begin to leave yourself and creating another choice.</p>
      <ol className="ls-steps">
        {STEPS.map(s => <li key={s.name}><span className="ls-step-name">{s.name}</span><span>{s.text}</span></li>)}
      </ol>
      <ul className="ls-practices">
        {PRACTICES.map(p => <li key={p}><Sym name="hm-spark" />{p}</li>)}
      </ul>
      <p className="kb-center ls-remain-cta"><Link href={EIT_HREF} className="hm-btn">Explore Emotion Integration Technique</Link></p>
    </section>
  );
}
