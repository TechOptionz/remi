import Link from 'next/link';
import { Art, Brush, Head } from '@/components/rabbit-holes/ui';
import { CAM_HREF, QUESTIONS } from '@/content/tell-me-the-truth';

// FOUR QUESTIONS I KEEP RETURNING TO — four numbered cards into the Critical Alignment Model, then the rust line (design part two)
export default function TtQuestions() {
  return (
    <section className="kb-section tt-questions" aria-labelledby="tt-questions-h">
      <Head id="tt-questions-h"><Brush>Four questions</Brush> I keep returning to</Head>
      <p className="kb-sub kb-indent">Not a formula. Four places where a more useful truth often begins.</p>
      <ol className="tt-q-grid">
        {QUESTIONS.map((q, i) => (
          <li key={q.q}>
            <Link href={CAM_HREF} className="tt-q">
              <span className="tt-q-num" aria-hidden="true">{i + 1}</span>
              <span className="tt-q-body"><span className="tt-q-title">{q.q}</span><span>{q.text}</span></span>
              <span className="kb-arrow" aria-hidden="true">⟶</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="tt-banner"><Art name="kb-flourish-light" className="tt-banner-flourish" />Insight without a changed choice is just a more sophisticated explanation.</p>
    </section>
  );
}
