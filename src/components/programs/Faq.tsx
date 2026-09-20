import { FAQ } from '@/content/programs';

// FREQUENTLY ASKED QUESTIONS — native <details>, questions and answers live in FAQ (content/programs.ts)
export default function Faq() {
  return (
    <section className="ry-section" aria-labelledby="faq-h">
      <div className="ry-split">
        <div className="ry-split-head">
          <h2 id="faq-h" className="ry-title">Frequently asked <em>questions</em></h2>
        </div>
        <div className="ry-faq">
          {FAQ.map(item => (
            <details key={item.q}>
              <summary>{item.q}<span className="ry-faq-mark" aria-hidden="true" /></summary>
              <div className="ry-faq-body">{item.a.map(p => <p key={p}>{p}</p>)}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
