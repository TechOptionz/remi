import Link from 'next/link';
import { Art, Body, Btn, H3, Hand, Part, PartHead } from '@/components/ideas/ui';
import { CAM_PAGE_HREF } from '@/content/cam';

const WHEEL_ALT = 'The Critical Alignment Model as a compass: four quarters, Environment and Structure above the line, Implementation and People below it.';

// CAM MINI PROFILER — what's really getting in the way, the profiler, the compass of four dimensions
export default function ProfilerIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <Link href={CAM_PAGE_HREF}>The Critical Alignment Model</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Mini Profiler</span>
      </nav>
      <p className="ideas-eyebrow">CAM Mini Profiler</p>
      <PartHead n={1} title="What’s really getting in the way?" aside={<Art name="cam-mp-compass" className="mp-compass" />}>
        <Hand v={['underline']}>The gap is never just the gap.</Hand>
        <Body>You can work harder, learn more and keep trying the same solution. But if the real gap is somewhere else, effort will not fix it.</Body>
        <Body>The Critical Alignment Model helps you see where alignment is breaking across four dimensions: Environment. Structure. Implementation. People.</Body>
      </PartHead>

      <H3 v={['rules']} className="mp-rules"><span></span>The CAM Mini Profiler<span></span></H3>
      <div className="mp-centre">
        <Hand v={['center', 'sm']}>A clearer picture of what your situation actually requires.</Hand>
        <p className="mp-lede">Answer a concise set of questions and receive a development map to help you see which dimension deserves attention first. Not a personality label. Not a diagnosis. A practical way to think more clearly.</p>
      </div>
      <Art name="cam-mp-wheel" alt={WHEEL_ALT} className="mp-wheel" />
      <Btn href="#part-3">Take the mini profiler</Btn>
      <p className="mp-note">Answer at your own pace. No sales call. No application.</p>
      <Hand v={['center']} className="mp-tag">Different gap. Different intervention.</Hand>
    </Part>
  );
}
