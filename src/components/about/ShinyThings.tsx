import Link from 'next/link';

const AWARDS = [
  'Telstra Victorian Micro Business Award',
  'Telstra Victorian Business Award for Innovation',
  'Victorian Business Owner category winner',
  "National finalist and People's Choice recognition",
];

// A LOVELY COLLECTION OF SHINY THINGS · BUILT WITH WONDERFUL PEOPLE — awards, banner, quote and CTA
export default function ShinyThings() {
  return (
    <section className="section section--tight section--flush" aria-labelledby="shiny-h">
      <div className="shiny">
        <div>
          <h2 id="shiny-h" className="part-title part-title--xs part-title--accent"><span className="underline">A lovely collection of shiny things</span></h2>
          <ul className="awards">{AWARDS.map(a => <li key={a}>{a}</li>)}</ul>
        </div>
        <p className="banner">Built with wonderful people</p>
      </div>
      <blockquote className="serif-quote serif-quote--center"><p>The ideas survived contact with actual people, difficult decisions, commercial pressure, rapid growth and the occasional complete shitshow.</p></blockquote>
      <div className="centered">
        <Link href="/ideas-models" className="btn btn--primary btn--caps btn--big">See what I've worked out</Link>
      </div>
    </section>
  );
}
