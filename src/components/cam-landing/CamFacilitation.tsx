// PART 04 — "Imagine you're planning a facilitation day with your team." (the four dimensions applied to the day) beside
// the arch and the book; then the rust band "For people whose work requires sound judgement." beside the sphere and arch.
import Icon from '@/components/shared/Icon';
import { Head, Photo } from './ui';
import { AUDIENCE, FACILITATION } from '@/content/cam-landing';

export default function CamFacilitation() {
  return (
    <>
      <section className="stl-section stl-split" aria-labelledby="cml-day-h">
        <div className="stl-split-copy">
          <Head id="cml-day-h">Imagine you’re planning a facilitation day with your team.</Head>
          <p>Without a framework, you might collect activities, prepare some slides and hope the day produces a useful conversation. People could enjoy it. You might still struggle to say what it changed or how the discussion will translate into their work.</p>
          <p>With CAM, begin by establishing the purpose. What needs to be different because the day happened?</p>
          <ul className="cml-day">
            {FACILITATION.map(f => (
              <li key={f.name}>
                <span className="cml-day-icon"><Icon name={f.icon} size={30} /></span>
                <div><h3>{f.name}</h3><p>{f.text}</p></div>
              </li>
            ))}
          </ul>
          <p>Together, the dimensions provide a complete framework for the day and a way to review whether it achieved what you intended.</p>
        </div>
        <Photo name="cml-facilitation" width={470} height={905} className="stl-split-photo" />
      </section>

      <section className="cml-judgement" aria-labelledby="cml-judgement-h">
        <Photo name="cml-judgement" width={400} height={366} className="cml-judgement-photo" />
        <div className="cml-judgement-copy">
          <Head id="cml-judgement-h" star>For people whose work requires sound judgement.</Head>
          <p className="cml-audience">{AUDIENCE.join(' • ')}</p>
          <p>CAM is cross-contextual and content-free. Bring different situations to the same framework. The questions and answers become specific to your work.</p>
          <p>You can apply what you learn in paid professional work, including client conversations, project planning and facilitation.</p>
          <p>No prior knowledge of CAM required.</p>
        </div>
      </section>
    </>
  );
}
