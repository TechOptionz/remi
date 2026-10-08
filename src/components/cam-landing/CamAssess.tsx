// PART 02 — "How much effort goes into fixing something you haven't accurately assessed?", the five dimensions (with the
// line between Structure and Implementation) and the rust "A benchmark for your decisions." band.
import { Head, Photo } from './ui';
import { DIMENSIONS } from '@/content/cam-landing';

export default function CamAssess() {
  return (
    <>
      <section className="stl-section stl-split" aria-labelledby="cml-effort-h">
        <div className="stl-split-copy">
          <Head id="cml-effort-h">How much effort goes into fixing something you haven’t accurately assessed?</Head>
          <p>A leader sends someone to training when expectations were never clear. A business introduces another system while people work towards different priorities. A project gets more meetings, yet nobody has established what success means.</p>
          <p>Each response can sound reasonable. Whether it helps depends on what the situation actually needs.</p>
          <p>CAM gives you somewhere to look beyond your first interpretation. You can compare what exists with what would support the result you want.</p>
        </div>
        <Photo name="cml-arch" width={515} height={710} className="stl-split-photo" />
      </section>

      <section className="stl-section" aria-labelledby="cml-framework-h">
        <Head id="cml-framework-h" star>A framework for recognising what excellence requires.</Head>
        <ol className="stl-video-list cml-dims">
          {DIMENSIONS.map((d, i) => (
            <li key={d.name} className={d.belowLine ? 'cml-below' : undefined}>
              <span className="stl-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{d.name}</h3>
              <p>{d.question}<br />{d.text}</p>
            </li>
          ))}
        </ol>
        <p className="cml-note">Environment and Structure sit above the line. Implementation and People sit below it.<br />Learn how the dimensions influence one another.</p>
      </section>

      <div className="stl-band">
        <p className="stl-band-title">A benchmark for your decisions.</p>
      </div>
    </>
  );
}
