// PART 05 — "Your nine-video program" beside the arch, the book and the rust cloth; the rust "Also included" panel and the
// CTA row with the price.
import Link from 'next/link';
import { BuyBtn, Head, Photo, Price } from './ui';
import { CAM_PROFILER_HREF, VIDEOS } from '@/content/cam-landing';

export default function CamVideos() {
  return (
    <section className="stl-section stl-split cml-videos" aria-labelledby="cml-videos-h">
      <div className="stl-split-copy">
        <Head id="cml-videos-h">Your <span className="stl-nowrap">nine-video</span> program</Head>
        <ol className="cml-video-list">
          {VIDEOS.map((v, i) => (
            <li key={v.name}>
              <span className="stl-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div><h3>{v.name}</h3><p>{v.text}</p></div>
            </li>
          ))}
        </ol>
        <div className="cml-also">
          <h3>Also included</h3>
          <p>Workbooks • Practical examples • Downloadable video transcripts<br />Access to the free <Link href={CAM_PROFILER_HREF}>CAM Mini Profiler</Link>, also available separately at no cost.</p>
        </div>
        <div className="cml-cta-row">
          <BuyBtn>Get immediate access</BuyBtn>
          <Price compact note="One payment. Self-paced." />
        </div>
      </div>
      <Photo name="cml-nine" width={455} height={1070} className="stl-split-photo" />
    </section>
  );
}
