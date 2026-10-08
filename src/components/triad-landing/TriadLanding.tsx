// The Self-Esteem Triad's sales page, shown at /products/self-esteem-triad in place of the generic product page (see
// app/products/[slug]/page.tsx). Built from the six-part design; copy and lists in content/triad-landing.ts.
import Link from 'next/link';
import TriadHero from './TriadHero';
import TriadProblem from './TriadProblem';
import TriadLearn from './TriadLearn';
import TriadVideos from './TriadVideos';
import TriadRemi from './TriadRemi';
import TriadClose, { TriadAmbassador } from './TriadClose';

export default function TriadLanding() {
  return (
    <main className="kb stl">
      <div className="kb-page">
        <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">The Self-Esteem Triad</span>
        </nav>
        <TriadHero />
        <TriadProblem />
        <TriadLearn />
        <TriadVideos />
        <TriadRemi />
        <TriadAmbassador />
      </div>
      <TriadClose />
    </main>
  );
}
