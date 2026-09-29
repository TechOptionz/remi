import Link from 'next/link';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { TRUSTME_LEVELS } from '@/content/site';
import { BUSINESS_QUESTIONS } from '@/content/build-an-asset';

const LEVELS = [...TRUSTME_LEVELS].sort((a, b) => a.num - b.num);

// T.R.U.S.T.M.E. SHOWS WHERE THE BUSINESS IS STUCK — the seven levels as a numbered timeline, each with its business
// question; the names come from the shared TRUSTME_LEVELS, the questions from BUSINESS_QUESTIONS (design part two)
export default function BdTrustme() {
  return (
    <section className="kb-section bd-trustme" aria-labelledby="bd-trustme-h">
      <Head id="bd-trustme-h"><Brush>T.R.U.S.T.M.E.</Brush> shows where the business is stuck</Head>
      <p className="kb-sub kb-indent">Each level asks a different question. You cannot solve a<br /> Systems problem with more founder heroics.</p>
      <ol className="bd-levels">
        {LEVELS.map(l => (
          <li key={l.num}>
            <span className="bd-level-num">{l.num}</span>
            <span className="bd-level-name">{l.name}</span>
            <span>{BUSINESS_QUESTIONS[l.num]}</span>
          </li>
        ))}
      </ol>
      <p className="kb-center bd-trustme-link"><Link href="/ideas-models/trustme-model" className="kb-textlink">Explore the T.R.U.S.T.M.E. model <span aria-hidden="true">⟶</span></Link></p>
    </section>
  );
}
