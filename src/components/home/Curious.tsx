import Link from 'next/link';
import { Brush, Sym } from './ui';

// CURIOUS — paper on the left tearing into an oxblood panel that holds the button (home design part 1)
export default function Curious() {
  return (
    <section className="curious" aria-labelledby="curious-h">
      <div className="curious-copy">
        <h2 id="curious-h" className="hm-h2 hm-h2--plain">Curious about the thinking <Brush>behind the work?</Brush></h2>
        <p>Explore Remi’s original models, methods and ideas.</p>
      </div>
      <div className="curious-panel">
        <Link href="/ideas-models" className="hm-btn">Explore ideas &amp; models</Link>
        <Sym name="hm-arrow-dark" className="curious-arrow" />
      </div>
    </section>
  );
}
