import Link from 'next/link';
import TrustmeLevels from '@/components/shared/TrustmeLevels';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { TRUSTME_INTRO } from '@/content/site';
import { TRUSTME_HREF } from '@/content/leadership';

// MEET THE T.R.U.S.T.M.E. MODEL — the intro and handwritten note on the left, the seven levels as a stack of blocks on the
// right (the shared TRUSTME_LEVELS / TRUSTME_INTRO, restyled for this page) (design part two)
export default function LdTrustme() {
  return (
    <section id="trustme" className="kb-section ld-trustme" aria-labelledby="ld-trustme-h">
      <div className="ld-trustme-copy">
        <Head id="ld-trustme-h">Meet the <Brush>T.R.U.S.T.M.E.</Brush> model</Head>
        <p className="kb-indent">{TRUSTME_INTRO.body}</p>
        <p className="ld-hand">{TRUSTME_INTRO.note}</p>
        <p className="kb-indent"><Link href={TRUSTME_HREF} className="kb-textlink">Explore the model <span aria-hidden="true">⟶</span></Link></p>
      </div>
      <TrustmeLevels />
    </section>
  );
}
