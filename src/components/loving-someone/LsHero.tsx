import Link from 'next/link';
import { Brush, Sym, kbArt } from '@/components/rabbit-holes/ui';
import { RELATIONSHIPS_HREF } from '@/content/loving-someone';

// WHY DOES LOVING SOMEONE… — title, lede and the two ways in on the left, the reaching hands on the right (design part one)
export default function LsHero() {
  return (
    <section className="ls-hero" aria-labelledby="ls-title">
      <div className="ls-hero-copy">
        <h1 id="ls-title" className="kb-title">Why does loving someone<br /> bring all my shit<br /> <Brush>to the surface?</Brush></h1>
        <p>Relationships have an extraordinary talent for finding the parts of us we thought we had dealt with. The closer someone becomes, the harder our attachment strategies work to protect us.</p>
        <div className="ls-hero-btns">
          <a href="#patterns" className="hm-btn">Help me recognise my pattern</a>
          <Link href={RELATIONSHIPS_HREF} className="kb-textlink">Let’s talk relationships <span aria-hidden="true">⟶</span></Link>
        </div>
      </div>
      <div className="ls-hero-art">
        <Sym name="hm-loop" className="ls-hero-loop" />
        <img className="ls-hero-photo" src={kbArt('ls-hero')} alt="Two hands reaching towards each other, almost touching, in soft window light" width="944" height="1086" />
      </div>
    </section>
  );
}
