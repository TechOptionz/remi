// PART 05 — "Meet Remi" beside the desk photograph, what people say (only once real testimonials exist), and the FAQ
// "A few things you might be wondering": each answer beside its question, as drawn (the answers are one line each).
import { Head, Photo } from './ui';
import { FAQ, TESTIMONIALS } from '@/content/triad-landing';

export default function TriadRemi() {
  return (
    <>
      <section className="stl-section stl-split stl-remi" aria-labelledby="stl-remi-h">
        <div className="stl-split-copy">
          <Head id="stl-remi-h" star>Meet Remi</Head>
          <p className="stl-signature" aria-hidden="true">Remi</p>
          <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of the Self-Esteem Triad. Over more than two decades, my work has explored how we think, relate and change, including the gap between understanding ourselves and being able to live what we understand.</p>
          <p>I built a business that turned over $200 million across its history and trained more than 14,000 coaches. I also know that being capable and achieving things doesn’t settle every question we have about ourselves. This program brings one of my models into a format you can work through in your own life, for $29.</p>
        </div>
        <Photo name="stl-desk" width={554} height={670} className="stl-split-photo" />
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="stl-section" aria-labelledby="stl-say-h">
          <Head id="stl-say-h" star>What people say about Remi’s work</Head>
          <ul className="stl-quotes">
            {TESTIMONIALS.map(t => (
              <li key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <p>{t.name} <span aria-hidden="true">•</span> {t.program}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="stl-section" aria-labelledby="stl-faq-h">
        <Head id="stl-faq-h" star>A few things you might be wondering</Head>
        <dl className="stl-faq">
          {FAQ.map(f => (
            <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>
          ))}
        </dl>
      </section>
    </>
  );
}
