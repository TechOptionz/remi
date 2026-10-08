// PART 04 — "Your six-video program": the six videos beside the stacked stones, then the book and workbook pages with the
// workbook, the transcripts and the button.
import Icon from '@/components/shared/Icon';
import { BuyBtn, Head, Photo } from './ui';
import { MATERIALS, TRIAD_PRICE, VIDEOS } from '@/content/triad-landing';

export default function TriadVideos() {
  return (
    <section className="stl-section stl-videos" aria-labelledby="stl-videos-h">
      <div className="stl-videos-top">
        <div>
          <Head id="stl-videos-h">Your <span className="stl-nowrap">six-video</span> program</Head>
          <p className="stl-intro stl-intro--lg">A <strong>framework</strong> you can return to.</p>
          <ol className="stl-video-list">
            {VIDEOS.map((v, i) => (
              <li key={v.name}>
                <span className="stl-num stl-num--gold" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.name}</h3>
                <p><strong>{v.lead}</strong> {v.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <Photo name="stl-stack" width={320} height={825} className="stl-videos-photo" />
      </div>
      <div className="stl-materials">
        <Photo name="stl-kit" alt="The Self-Esteem Triad book beside loose workbook pages headed Video 03, Emotions" width={595} height={475} className="stl-materials-photo" />
        <div>
          <ul className="stl-material-list">
            {MATERIALS.map(m => (
              <li key={m.title}>
                <span className="stl-ring-icon"><Icon name={m.icon} size={26} /></span>
                <div><h3>{m.title}</h3><p>{m.text}</p></div>
              </li>
            ))}
          </ul>
          <BuyBtn arrow>Get the Self-Esteem Triad • {TRIAD_PRICE}</BuyBtn>
        </div>
      </div>
    </section>
  );
}
