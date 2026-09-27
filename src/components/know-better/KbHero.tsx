import { Brush, PlayRing, Sym, kbArt } from '@/components/rabbit-holes/ui';

// I KNOW BETTER — title, lede and buttons on the left, the photograph torn in from the right (design part one)
export default function KbHero() {
  return (
    <section className="kb-hero" aria-labelledby="kb-title">
      <div className="kb-hero-copy">
        <Sym name="hm-spark" className="kb-hero-spark" />
        <h1 id="kb-title" className="kb-title">I know better.<br /> Why do I still<br /> <Brush>keep doing</Brush> this?</h1>
        <p>You can understand your childhood, know your attachment style and recognise every protective pattern you have…</p>
        <p>And still, you keep doing the thing that hurts you.</p>
        <p>Let’s get honest about why.</p>
        <div className="kb-btns">
          <a href="#patterns" className="hm-btn">Help me find my pattern</a>
          <a href="#eit" className="kb-btn-ghost"><PlayRing /> What is EIT?</a>
        </div>
        <Sym name="hm-hero-arrow" className="kb-hero-arrow" />
      </div>
      <div className="kb-hero-photo">
        <img src={kbArt('kb-hero')} alt="A woman in a black shirt, chin resting on her hand, deep in thought" width="760" height="1200" />
      </div>
    </section>
  );
}
