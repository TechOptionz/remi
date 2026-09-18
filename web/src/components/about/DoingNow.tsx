import Link from 'next/link';

// WHAT I'M DOING NOW
export default function DoingNow() {
  return (
    <section className="section about-now" aria-labelledby="now-h">
      <div>
        <h2 id="now-h" className="about-h2"><span className="underline">What I'm doing now</span></h2>
        <p className="body-xl">I write, think, record conversations and turn the strongest ideas from my life's work into books, models and practical programs people can explore in their own time.</p>
        <Link href="/#rabbit-holes" className="btn btn--primary">Show me where to start</Link>
      </div>
      <blockquote className="now-quote"><p>I want to create work that helps people see something they could not previously see, meet something within themselves they had been avoiding and become more capable of choosing what happens next.</p></blockquote>
    </section>
  );
}
