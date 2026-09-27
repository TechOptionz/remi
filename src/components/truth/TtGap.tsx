import { Art, Brush, Head, StarRule } from '@/components/rabbit-holes/ui';

// THE GAP IS WHERE THE TRUTH LIVES — what I say I want → the gap ← what keeps happening, then the rust line (design part two)
export default function TtGap() {
  return (
    <section className="kb-section tt-gap" aria-labelledby="tt-gap-h">
      <Head id="tt-gap-h" star={false}><Brush>The gap</Brush> is where the truth lives</Head>
      <p className="kb-indent tt-gap-lede">The Critical Alignment Model begins with the distance between the outcome you say you want and what your current thinking, choices and behaviour keep producing.</p>
      <div className="tt-gap-diagram" role="img" aria-label="What I say I want, and what keeps happening, both point to the gap between them.">
        <span className="tt-gap-box">What I say I want</span>
        <span className="tt-gap-arrow" aria-hidden="true"></span>
        <span className="tt-gap-circle">The gap</span>
        <span className="tt-gap-arrow tt-gap-arrow--in" aria-hidden="true"></span>
        <span className="tt-gap-box">What keeps happening</span>
      </div>
      <div className="tt-gap-after">
        <p className="kb-indent">The gap gives us somewhere honest to look. Not for blame. For the thinking, protection and choices that make the present outcome make sense.</p>
        <Art name="kb-flourish" className="tt-gap-flourish" />
      </div>
      <StarRule />
      <blockquote className="tt-gap-quote"><Art name="kb-flourish" className="tt-gap-quote-flourish" /><p>More information does not close a gap<br /> you are still organised around protecting.</p></blockquote>
    </section>
  );
}
