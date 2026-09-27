import Link from 'next/link';
import { Art, Brush, Sym } from '@/components/rabbit-holes/ui';
import { FIVE_PATHS, FIVE_PATHS_HREF, FIVE_PATHS_PRICE } from '@/content/loving-someone';
import { Head } from './ui';

// READY FOR THE FIVE PATHS? — the torn rust strip, then the book, price, the five paths and the way in (design parts two and three)
export default function LsFivePaths() {
  return (
    <>
      <p className="ls-ready"><Sym name="hm-swirl-sm" className="ls-ready-arrow ls-ready-arrow--l" /><a href="#five-paths">Ready for the five paths?</a><Sym name="hm-swirl-sm" className="ls-ready-arrow" /></p>
      <section id="five-paths" className="kb-section ls-paths" aria-labelledby="ls-paths-h">
        <Head id="ls-paths-h">The five paths to your<br /> <Brush>healthy</Brush> relationship</Head>
        <Sym name="hm-loop" className="ls-paths-loop" />
        <div className="ls-paths-grid">
          <Art name="ls-book" className="ls-book" />
          <div className="ls-paths-copy">
            <p className="ls-price">{FIVE_PATHS_PRICE}</p>
            <p>A clear, practical guide to creating relationships that are more honest, secure and capable of repair.</p>
            <ol className="ls-paths-list">{FIVE_PATHS.map(p => <li key={p}>{p}</li>)}</ol>
            <Link href={FIVE_PATHS_HREF} className="hm-btn ls-paths-btn" data-interest="Products">Start the five paths</Link>
            <p className="ls-paths-note">Learn in your own time. No classes. No calls. No weekly obligation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
