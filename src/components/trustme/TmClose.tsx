import Link from 'next/link';
import { Body, Box, Btn, H3, Panel, Part } from '@/components/ideas/ui';
import { FURTHER_READING, RELATED, WORK_WITH } from '@/content/trustme';

// WORK WITH REMI + INTELLECTUAL FOUNDATIONS + related ideas
export default function TmClose() {
  return (
    <Part n={5}>
      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Work with Remi</H3>
        <div className="cam-work-grid">
          {WORK_WITH.map(w => (
            <div key={w.cta} className="cam-work-item">
              <p className="panel-body">{w.text}</p>
              <Btn href={w.href} v={['outline']}>{w.cta}</Btn>
            </div>
          ))}
        </div>
      </Panel>

      <H3 v={['left', 'rule']}>Intellectual foundations</H3>
      <div className="triad-prose">
        <Body>The T.R.U.S.T.M.E. model was developed by Remi Pearson and is informed by Clare W. Graves’ theory of levels of human existence, Don Beck and Christopher Cowan’s Spiral Dynamics, and Ken Wilber’s integral theory.</Body>
        <Body sm>Further reading includes {FURTHER_READING.join(', ')}.</Body>
      </div>

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
