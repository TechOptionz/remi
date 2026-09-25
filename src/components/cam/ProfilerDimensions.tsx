import { Art, Btn, H3, Hand, Part, PartHead } from '@/components/ideas/ui';
import { PROFILER_DIMENSIONS } from '@/content/cam';

// CAM MINI PROFILER — four dimensions, above and below the line
export default function ProfilerDimensions() {
  return (
    <Part n={2}>
      <PartHead n={2} title="Four dimensions. One clearer picture." aside={<Art name="cam-mp-compass" className="mp-compass" />}>
        <Hand v={['underline']}>CAM helps us stop prescribing the same solution to every problem. It asks where the gap is actually occurring.</Hand>
      </PartHead>

      {(['above', 'below'] as const).map(line => (
        <div key={line}>
          <H3 v={['rules']} className="mp-rules"><span></span>{line === 'above' ? 'Above the line' : 'Below the line'}<span></span></H3>
          <div className="mp-cards">
            {PROFILER_DIMENSIONS.filter(d => d.line === line).map(d => (
              <article key={d.title} className="mp-card mp-card--dim">
                <Art name={`cam-mp-${d.icon}`} className="mp-icon" />
                <h4>{d.title} · {d.role}</h4>
                <p>{d.text}</p>
                <p className="mp-q"><span className="rust">Question:</span> {d.question}</p>
              </article>
            ))}
          </div>
        </div>
      ))}

      <Hand v={['center']} className="mp-tag">Different gap. Different intervention.</Hand>
      <p className="mp-motto">People come last because people come first.</p>
      <Btn href="#part-3">Continue the assessment</Btn>
    </Part>
  );
}
