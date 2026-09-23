import { AWARDS } from '@/content/site';

// AWARDS — a scrolling marquee of the badges from The Coaching Institute's site, straight under the hero.
// The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
// Runs the full width of the window, straight on the page background.
export default function Awards() {
  const list = (copy: boolean) => (
    <ul className="award-marquee-list" aria-hidden={copy || undefined}>
      {AWARDS.map(a => (
        <li key={a.src}>
          <img decoding="async" src={a.src} alt={copy ? '' : a.alt} width={a.width} height={a.height} style={{ height: a.h }} />
        </li>
      ))}
    </ul>
  );
  return (
    <section className="section section--tight section--flush" aria-labelledby="award-marquee-h">
      <div className="award-marquee">
        <h2 id="award-marquee-h" className="eyebrow award-marquee-title">Recognised along the way</h2>
        <div className="award-marquee-window">
          <div className="award-marquee-track">
            {list(false)}
            {list(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
