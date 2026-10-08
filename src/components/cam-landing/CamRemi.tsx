// PART 06 — "Learn it with the woman who created it." beside the arch and the book, what people say (only once real
// testimonials exist) and "Questions before you begin" as cards.
import { Head, Photo } from './ui';
import { FAQ, TESTIMONIALS } from '@/content/cam-landing';

export default function CamRemi() {
  return (
    <>
      <section className="stl-section stl-split stl-remi" aria-labelledby="cml-remi-h">
        <div className="stl-split-copy">
          <Head id="cml-remi-h">Learn it with the woman who created it.</Head>
          <p>I’m Remi Pearson, founder of The Coaching Institute and creator of the Critical Alignment Model.</p>
          <p>I started my business cold-calling from my bedroom and built a company that turned over more than $200 million across twenty-three years, before exiting in 2024.</p>
          <p>CAM was a framework I used in that work. It gave me a way to examine a situation, establish what excellence required and identify where our current approach fell short.</p>
          <p>In this program, I’ll teach you the model and show you how to apply it. You’ll have a framework you can return to when the situation changes or your first answer needs a closer look.</p>
          <p className="stl-signature" aria-hidden="true">Remi</p>
        </div>
        <Photo name="cml-desk" width={565} height={575} className="stl-split-photo" />
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="stl-section" aria-labelledby="cml-say-h">
          <Head id="cml-say-h" star>What people say about using CAM</Head>
          <ul className="stl-quotes">
            {TESTIMONIALS.map(t => (
              <li key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <p>{t.name} <span aria-hidden="true">•</span> {t.context}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="stl-section" aria-labelledby="cml-faq-h">
        <Head id="cml-faq-h" star>Questions before you begin</Head>
        <dl className="cml-faq">
          {FAQ.map(f => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a.map((line, i) => <span key={i}>{line}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
