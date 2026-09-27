import { Art, Brush, Head } from '@/components/rabbit-holes/ui';
import { EIGHT_STEPS, NOT_BULLSHIT, PSYCHOLOGY } from '@/content/ultimate-influence';
import { Cards } from './ui';

// DESIGN PART TWO: the eight-step conversation (two rows of four joined by arrows, the first row bending round into the
// second), why it doesn't feel like bullshit, and the psychology under the conversation.
export default function UiMethod() {
  return (
    <>
      <section id="method" className="kb-section ui-method" aria-labelledby="ui-method-h">
        <Head id="ui-method-h">Meet the ultimate <Brush>influence method</Brush></Head>
        <p className="kb-sub kb-indent ui-lede">An eight-step consultative sales process designed to create a buying conversation that feels natural, emotionally intelligent and exact.</p>
        <p className="ui-rule-label ui-rule-label--centre">The eight-step conversation</p>
        <ol className="ui-flow ui-flow--8">
          {EIGHT_STEPS.map((s, i) => (
            <li key={s.name}><span className="ui-flow-num">{i + 1}</span><span className="ui-flow-name">{s.name}</span><span>{s.text}</span></li>
          ))}
        </ol>
        <blockquote className="ui-method-quote">
          <Art name="kb-flourish" className="ui-quote-flourish" />
          <p>The sale should feel like the natural conclusion of a conversation they were fully part of.</p>
          <Art name="kb-flourish" className="ui-quote-flourish ui-quote-flourish--r" />
        </blockquote>
      </section>

      <section className="kb-section ui-bs" aria-labelledby="ui-bs-h">
        <Head id="ui-bs-h">Why it doesn’t <Brush>feel like</Brush> bullshit</Head>
        <p className="kb-sub kb-indent">The buyer is not an audience for your pitch.<br /> They are a participant in their own decision.</p>
        <Cards items={NOT_BULLSHIT} layout="disc" cols={3} />
      </section>

      <section className="kb-section ui-psych" aria-labelledby="ui-psych-h">
        <Head id="ui-psych-h">The psychology <Brush>under the</Brush> conversation</Head>
        <Cards items={PSYCHOLOGY} layout="disc" cols={3} />
      </section>
    </>
  );
}
