import { Art, Body, Btn, Hand, Part, PartHead } from '@/components/ideas/ui';
import { CAM_QUIZ_HREF, PROFILER_GUIDANCE } from '@/content/cam';

// CAM MINI PROFILER — before you begin, then on to the online quiz
export default function ProfilerBegin() {
  return (
    <Part n={3}>
      <PartHead n={3} title="Before you begin" aside={<Art name="cam-mp-compass" className="mp-compass" />}>
        <Hand v={['underline']}>Set yourself up for a useful result.</Hand>
        <Body>This is not a test of who you want to be. It is a snapshot of how you currently think, decide and behave in one real situation.</Body>
      </PartHead>

      <div className="mp-divider" aria-hidden="true"></div>
      <div className="mp-cards">
        {PROFILER_GUIDANCE.map(g => (
          <article key={g.title} className="mp-card">
            <Art name={`cam-mp-${g.icon}`} className="mp-icon" />
            <h4>{g.title}</h4>
            <p>{g.text}</p>
          </article>
        ))}
      </div>

      <Hand v={['center']} className="mp-tag">The more truthful the answers, the more useful the picture.</Hand>
      <Btn href={CAM_QUIZ_HREF}>Access the assessment</Btn>
      <p className="mp-next mp-next--still">This button opens the online quiz · Results follow after completion</p>
    </Part>
  );
}
