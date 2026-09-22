import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, NextLink, Panel, Part } from '@/components/ideas/ui';
import { BEGIN_STEPS, RELATED, WORK_WITH } from '@/content/cam';

// WHERE TO BEGIN + WORK WITH THE MODEL + related ideas
export default function CamClose() {
  return (
    <Part n={5}>
      <H3 v={['left', 'rule']}>Where to begin</H3>
      <div className="triad-prose">
        <Body>The next time a performance problem appears, resist beginning with the person.</Body>
      </div>
      <ol className="cam-begin">{BEGIN_STEPS.map(s => <li key={s}>{s}</li>)}</ol>
      <div className="triad-prose">
        <Body>This does not make leadership slower. It stops organisations spending months trying to correct the wrong part of the system.</Body>
        <Hand>People come last because people come first.</Hand>
      </div>

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

      <Btn href="/ideas-models#part-5">Back to Ideas &amp; Models</Btn>
      <NextLink href="/ideas-models#part-6" decorated>Continue to leadership, evolution &amp; decision</NextLink>
    </Part>
  );
}
