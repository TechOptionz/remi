import Link from 'next/link';

// CURIOUS
export default function Curious() {
  return (
    <section className="section curious" aria-labelledby="curious-h">
      <div>
        <h2 id="curious-h" className="h2">Curious about the thinking behind the work?</h2>
        <p className="body-lg">Explore Remi's original models, methods and ideas.</p>
      </div>
      <Link href="/ideas-models" className="btn btn--primary">Explore ideas &amp; models</Link>
    </section>
  );
}
