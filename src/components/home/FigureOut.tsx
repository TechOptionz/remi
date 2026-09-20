import Link from 'next/link';
import { MODEL_NAMES } from '@/content/home';
import { Sym } from './ui';

// THINGS I'VE SPENT YEARS TRYING TO FIGURE OUT — charcoal band with gold spatter (home design part 2)
export default function FigureOut() {
  return (
    <section className="hm-band" aria-labelledby="hm-band-h">
      <Sym name="hm-maps" className="hm-band-maps" />
      <h2 id="hm-band-h" className="hm-band-title">Things I’ve spent years <span>trying to figure out</span></h2>
      <ul className="hm-band-models">{MODEL_NAMES.map(m => <li key={m}>{m}</li>)}</ul>
      <p>The models are not the point. They are the maps I created when the usual answers were not good enough.</p>
      <p className="hm-band-cta"><Link href="/ideas-models" className="hm-btn">Explore ideas &amp; models</Link><Sym name="hm-arrow-band" /></p>
    </section>
  );
}
