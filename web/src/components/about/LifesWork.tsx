import Link from 'next/link';

// LIFE'S WORK
export default function LifesWork() {
  return (
    <section className="section section--tight about-story" aria-labelledby="work-h">
      <h2 id="work-h" className="about-h2"><span className="underline">That question became my life's work</span></h2>
      <p className="body-xl">It led me into coaching, psychology, human behaviour, attachment theory, trauma, relationships, parts work and the emotional architecture beneath the patterns we repeat.</p>
      <p className="body-xl">It led me into thousands of hours holding space for people when the explanation they had for their pain was no longer enough.</p>
      <p className="body-xl">And, slowly, it helped me find my own way home.</p>

      <h2 className="about-h2 about-h2--accent"><span className="underline">Everything else came later.</span></h2>
      <p className="body-xl">The business. The books. The models. The stages. The awards. The millions of people reached.</p>
      <p className="body-xl">They all grew from one woman trying to understand why some people experience heartbreak and still find a way to triumph.</p>
      <p className="body-xl">More than twenty-three years later, I'm still following that question.</p>
      <img className="signature" src="/assets/remi-signature.png" alt="Remi" width="200" height="98" />
      <Link href="/ideas-models" className="btn btn--primary btn--caps">Explore the work <span aria-hidden="true">✳</span></Link>
    </section>
  );
}
