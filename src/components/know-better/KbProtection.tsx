import { Art, Brush, Sym } from './ui';

// THE PATTERN ISN'T THE PROBLEM — the three-ring drawing with its labels, the copy, and the painted quote (design part two)
export default function KbProtection() {
  return (
    <section className="kb-section kb-protection" aria-labelledby="kb-protection-h">
      <Sym name="hm-spark" className="kb-spark" />
      <h2 id="kb-protection-h" className="kb-h2 kb-center">The pattern isn’t the problem.<br />It’s <Brush>the protection.</Brush></h2>
      <div className="kb-protection-grid">
        <figure className="kb-rings">
          <Art name="kb-protection" className="kb-rings-art" />
          <figcaption>
            <span className="kb-ring-label kb-ring-label--1">What you do</span>
            <span className="kb-ring-label kb-ring-label--2">What you’re protecting</span>
            <span className="kb-ring-label kb-ring-label--3">What you’re trying not to feel</span>
          </figcaption>
        </figure>
        <div className="kb-protection-copy">
          <p>That behaviour you can’t seem to stop isn’t random.</p>
          <p>It’s a protective part of you doing its best to prevent an emotion or a feared relational consequence.</p>
          <p>Once you see the pattern, it can make perfect sense.</p>
          <p>But insight alone doesn’t change it under pressure.</p>
          <a href="#eit" className="hm-btn hm-btn--sm">Show me how change happens</a>
          <blockquote className="kb-quote"><p>Understanding why you leave yourself is not the same as being able to stay.</p></blockquote>
        </div>
      </div>
    </section>
  );
}
