import Link from 'next/link';
import { Art, Brush, kbArt } from '@/components/rabbit-holes/ui';
import { CAM_HREF } from '@/content/tell-me-the-truth';

// TELL ME THE TRUTH — title, lede and the two ways in on the left; the mirror by the curtain runs to the window edge (design part one)
export default function TtHero() {
  return (
    <section className="tt-hero" aria-labelledby="tt-title">
      <div className="tt-hero-copy">
        <h1 id="tt-title" className="kb-title">Tell me the truth.<br /> <Brush>What am I</Brush> not seeing?</h1>
        <p>Most of us don’t struggle because we lack information. We struggle because something in us is protecting a conclusion, an identity or a certainty we are not yet ready to question.</p>
        <div className="tt-hero-btns">
          <a href="#patterns" className="hm-btn">Help me see what I’m missing</a>
          <Link href={CAM_HREF} className="kb-textlink">Meet the Critical Alignment Model <span aria-hidden="true">⟶</span></Link>
        </div>
        <Art name="kb-flourish" className="tt-hero-flourish" />
      </div>
      <div className="tt-hero-photo">
        <img src={kbArt('tt-hero')} alt="An oval brass mirror on a marble table beside a linen curtain, in late sunlight" width="982" height="1344" />
      </div>
    </section>
  );
}
