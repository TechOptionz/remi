import Link from 'next/link';
import { TRUSTME_INTRO } from '@/content/site';
import TrustmeLevels from '@/components/shared/TrustmeLevels';

// T.R.U.S.T.M.E. MODEL teaser (full page: /ideas-models#part-6)
export default function TrustmeIntro() {
  return (
    <section id="trustme" className="section model-intro" aria-labelledby="trustme-h">
      <div>
        <p className="eyebrow">Ideas &amp; models</p>
        <h2 id="trustme-h" className="h2">Meet the T.R.U.S.T.M.E. model</h2>
        <p className="body-lg">{TRUSTME_INTRO.body}</p>
        <p className="aside-note">{TRUSTME_INTRO.note}</p>
        <Link href="/ideas-models#part-6" className="btn btn--primary">Explore the model →</Link>
      </div>
      <TrustmeLevels />
    </section>
  );
}
