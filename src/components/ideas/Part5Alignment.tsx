import { CAM_PAIR, CAM_STATS, PRODUCTS_HREF } from '@/content/ideas';
import { Art, Body, Btn, H3, Hand, HeadNote, Panel, Part, PartHead, Star } from './ui';

const CAM_ALT = 'The Critical Alignment Model: four domains around a compass. Environment — vision, culture, personal strength and the conditions people need to thrive. Structure — strategy, innovation, planning and decision-making. Implementation — autonomy, order, sustained focus and turning intention into results. People — mentoring, connection, social skill and mindful leadership.';

/** Dark panel: how CAM was tested, with the four headline numbers (CAM_STATS in content/ideas.ts). */
function ResearchPanel() {
  return (
    <Panel tone="dark" className="research-panel">
      <img className="research-mag" src="/assets/ideas/p5-magnifier.webp" alt="" aria-hidden="true" />
      <H3 className="panel-title">I didn't want a model that only sounded clever</H3>
      <p className="panel-body">I hired researchers to challenge CAM, operationalise it and build a profiling tool that could be tested for reliability and validity.</p>
      <ul className="stats-row">
        {CAM_STATS.map(s => <li key={s.label}><span className="stat-big">{s.num}</span><span className="stat-lbl">{s.label}</span></li>)}
      </ul>
      <div className="research-foot"><p className="panel-body">The final 16 dimensions returned internal-consistency coefficients from .692 to .904. Factor analysis closely reproduced CAM's Environment, Structure, Implementation and People domains.</p><img src="/assets/ideas/p5-chart.webp" alt="" aria-hidden="true" /></div>
    </Panel>
  );
}

// PART FIVE · THE CRITICAL ALIGNMENT MODEL
export default function Part5Alignment() {
  return (
    <Part n={5}>
      <PartHead n={5} rule note title="The gap is never just the gap"
        aside={<HeadNote art="p5-arrow"><Hand>Different gap.<br />Different intervention.</Hand></HeadNote>}>
        <Body>When something keeps failing, leaders often prescribe more effort. CAM asks a better question: where is alignment actually breaking?</Body>
      </PartHead>
      <H3>The Critical Alignment Model</H3>
      <Hand v={['center', 'sm']}>Created by Remi Pearson</Hand>
      <Art name="p5-cam" alt={CAM_ALT} className="ideas-art--center cam-art" />
      <ResearchPanel />
      <div className="two-up">
        {CAM_PAIR.map(item => (
          <div key={item.title}><H3 v={['rust']}>{item.title}</H3><Body sm>{item.text}</Body><Btn href={PRODUCTS_HREF} v={['sm']}>{item.cta}</Btn></div>
        ))}
      </div>
      <Hand v={['center']}><Star /> Not a personality label. A development map. <Star /></Hand>
      <Btn href="#part-6">Continue to leadership, evolution &amp; decision</Btn>
    </Part>
  );
}
