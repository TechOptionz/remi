import Link from 'next/link';
import { Box, Btn, H3, Panel, Part } from '@/components/ideas/ui';
import { RELATED, WORK_WITH } from '@/content/dl';

// WORK WITH THE MODEL + related ideas
export default function DlClose() {
  return (
    <Part n={4}>
      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Work with the model</H3>
        <div className="cam-work-grid">
          {WORK_WITH.map(w => (
            <div key={w.cta} className="cam-work-item">
              <p className="panel-body">{w.text}</p>
              <Btn href={w.href} v={['outline']}>{w.cta}</Btn>
            </div>
          ))}
        </div>
      </Panel>

      <H3 v={['rules']}><span></span>Related ideas<span></span></H3>
      <div className="next-cards related-cards">
        {RELATED.map(r => (
          <Box as="article" className="ncard" key={r.title}>
            <img src={`/assets/ideas/${r.art}.webp`} alt="" aria-hidden="true" />
            <h4>{r.title}</h4><p>{r.text}</p>
            <Link href={r.href} className="ideas-btn ideas-btn--sm">{r.cta} <span aria-hidden="true">→</span></Link>
          </Box>
        ))}
      </div>

      <Btn href="/ideas-models#part-6">Back to Ideas &amp; Models</Btn>
    </Part>
  );
}
