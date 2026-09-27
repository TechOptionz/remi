import Link from 'next/link';
import { EIT_VIDEO_HREF } from '@/content/know-better';
import { EIT_HREF } from '@/content/rabbit-holes';
import { Art, Brush, PlayRing, Sym } from '@/components/rabbit-holes/ui';

const STEPS = [
  { name: 'Catch', text: 'Notice the Point of Departure' },
  { name: 'Stay', text: 'Remain with what is present' },
  { name: 'Choose', text: 'Act without abandoning yourself' },
];
const NOT_ABOUT = ['Fixing', 'Suppressing', 'Analysing forever', 'Managing the symptom'];
const TAGS = ['Trauma', 'Attachment', 'Parts', 'Holding space', 'Emotional integration'];

// THIS IS WHY I CREATED EIT — catch → stay → choose, what EIT isn't / is about, and the way into the chapter (design part two)
export default function KbEit() {
  return (
    <section id="eit" className="kb-section kb-eit" aria-labelledby="kb-eit-h">
      <Sym name="hm-spark" className="kb-spark" />
      <h2 id="kb-eit-h" className="kb-h2 kb-center">This is why I created<br />Emotion <Brush>Integration</Brush> Technique</h2>
      <div className="kb-eit-lede">
        <p>I created EIT because understanding a pattern is not enough. We need a way to remain with ourselves when discomfort is present, integrate the emotion driving the protection, and choose without abandoning who we are.</p>
        <Sym name="hm-swirl-sm" className="kb-eit-swirl" />
      </div>

      <ol className="kb-steps">
        {STEPS.map(s => <li key={s.name}><span className="kb-step-name">{s.name}</span><span>{s.text}</span></li>)}
      </ol>

      <div className="kb-eit-boxes">
        <div className="kb-box">
          <h3 className="kb-box-title">EIT isn’t about…</h3>
          <ul className="kb-crossed">{NOT_ABOUT.map(n => <li key={n}>{n}</li>)}</ul>
        </div>
        <div className="kb-box kb-box--warm">
          <h3 className="kb-box-title">It’s about integration</h3>
          <p>Helping your protective parts feel safe enough to release their grip.</p>
          <p>So you can stay connected in the moments that used to break you.</p>
          <p>And act in alignment with who you truly are.</p>
          <Sym name="hm-spark" className="kb-box-star" />
          <Art name="kb-flourish" className="kb-box-flourish" />
        </div>
      </div>

      <ul className="kb-tags">{TAGS.map(t => <li key={t}>{t}</li>)}</ul>
      <div className="kb-btns kb-btns--center">
        <Link href={EIT_HREF} className="hm-btn">Explore EIT</Link>
        <Link href={EIT_VIDEO_HREF} className="kb-btn-ghost"><PlayRing /> See EIT in action</Link>
      </div>
    </section>
  );
}
