// The Critical Alignment Model for Leaders' sales page, shown at /products/critical-alignment-model-for-leaders in place of
// the generic product page (see app/products/[slug]/page.tsx). Built from the seven-part design; copy and lists in
// content/cam-landing.ts.
import Link from 'next/link';
import CamHero from './CamHero';
import CamAssess from './CamAssess';
import CamArchetypes from './CamArchetypes';
import CamFacilitation from './CamFacilitation';
import CamVideos from './CamVideos';
import CamRemi from './CamRemi';
import CamClose, { CamShare } from './CamClose';

export default function CamLanding() {
  return (
    <main className="kb stl cml">
      <div className="kb-page">
        <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">Critical Alignment Model for Leaders</span>
        </nav>
        <CamHero />
        <CamAssess />
        <CamArchetypes />
        <CamFacilitation />
        <CamVideos />
        <CamRemi />
        <CamShare />
      </div>
      <CamClose />
    </main>
  );
}
