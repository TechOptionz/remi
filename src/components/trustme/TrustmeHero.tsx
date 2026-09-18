import Link from 'next/link';
import { TRUSTME_INTRO } from '@/content/site';
import TrustmeLevels from '@/components/shared/TrustmeLevels';

// MEET THE MODEL
export default function TrustmeHero() {
  return (
    <section className="page-hero model-intro" aria-labelledby="page-h">
      <div>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span><span aria-current="page">The T.R.U.S.T.M.E. model</span>
        </nav>
        <h1 id="page-h" className="page-title">Meet the <em>T.R.U.S.T.M.E.</em> model</h1>
        <p className="body-lg">{TRUSTME_INTRO.body}</p>
        <p className="aside-note">{TRUSTME_INTRO.note}</p>
      </div>
      <TrustmeLevels />
    </section>
  );
}
