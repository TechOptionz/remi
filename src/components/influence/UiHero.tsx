import { Art, Brush, Sym } from '@/components/rabbit-holes/ui';
import { RABBIT_HOLES } from '@/content/home';

const CARD = RABBIT_HOLES[4];

// The page's title. The designs have no hero for this page, so it reuses the homepage card's question and line (RABBIT_HOLES[4]).
export default function UiHero() {
  return (
    <section className="ui-hero" aria-labelledby="ui-title">
      <Sym name="hm-spark" className="ui-hero-star" />
      <h1 id="ui-title" className="kb-title">How do I sell without scripts,<br /> <Brush>pressure or</Brush> bullshit?</h1>
      <p>{CARD.text}</p>
      <div className="kb-split-hero-btns ui-hero-btns">
        <a href="#method" className="hm-btn">Show me the eight steps</a>
        <a href="#meet" className="kb-textlink">Meet Ultimate Influence <span aria-hidden="true">⟶</span></a>
      </div>
      <Art name="kb-flourish" className="ui-hero-flourish" />
    </section>
  );
}
