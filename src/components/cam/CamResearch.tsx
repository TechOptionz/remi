import { Body, H3, Hand, Panel, Part } from '@/components/ideas/ui';
import { CAM_RESEARCH } from '@/content/cam';

// A MODEL THAT WORKS AT ANY LEVEL + THE RESEARCH AND THE PROFILING TOOLS
export default function CamResearch() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>A model that works at any level</H3>
      <div className="triad-prose">
        <Body>CAM is content-independent and context-independent. The subject changes while the architecture remains useful. It can be applied to a strategic decision, a family conflict, a speaking event, a coaching session, a product launch, a personal goal or the design of an organisation. We still ask what the purpose is, what environment contains it, what structure supports it, what is being implemented and who is involved or affected.</Body>
        <Body>I built The Coaching Institute using this model, and it became the foundation of my bestselling book, Disruptive Leadership. CAM has since been adopted within large organisations internationally because it gives leaders a way to move beyond the most convenient explanation and examine the whole system. It has shaped how I coach leaders, facilitate difficult conversations, diagnose organisational problems and conduct strategic thinking at senior level. It also challenges one of the most persistent habits in leadership: blaming the point at which a problem becomes visible instead of tracing the conditions that produced it.</Body>
      </div>

      <H3 v={['left', 'rule']}>The research and the profiling tools</H3>
      <div className="triad-prose">
        <Body>The Critical Alignment Model is research-informed. I organised the research around it deliberately, drawing together bodies of work concerned with systems thinking, adult development, double-loop learning, motivation, organisational design and reflective inquiry. I also organised the development of the associated Meta Dynamics™ Profiling Tool to examine preferences across the Environment, Structure, Implementation and People dimensions. The 2017 technical handbook reports a normative sample of 535 professional participants and documents internal consistency testing, construct comparisons and factor analysis. That factor analysis broadly recovered the four proposed CAM domains, with an additional factor containing extraneous items or outliers.</Body>
      </div>
      <Panel tone="dark" className="research-panel">
        <img className="research-mag" src="/assets/ideas/p5-magnifier.webp" alt="" aria-hidden="true" />
        <H3 className="panel-title">That distinction matters to me</H3>
        <p className="panel-body">The psychometric work supports the development of the profiling tool and the coherence of its domains. I am not interested in inflating that into a claim that every proposition or application of CAM has somehow been proven.</p>
        <ul className="stats-row">
          {CAM_RESEARCH.map(s => <li key={s.label}><span className="stat-big">{s.num}</span><span className="stat-lbl">{s.label}</span></li>)}
        </ul>
        <div className="research-foot"><p className="panel-body">Its credibility comes from something more substantial: a clear theoretical foundation, an organised program of research around the profiling architecture, and decades of applied use across leadership, facilitation, coaching, business design and strategic decision-making.</p><img src="/assets/ideas/p5-chart.webp" alt="" aria-hidden="true" /></div>
      </Panel>
      <div className="triad-prose">
        <Body>The full Meta Dynamics™ profile offers a detailed view of thinking preferences across the model. The CAM mini profile provides a more accessible entry point, helping someone notice where they naturally place attention and which dimensions they may neglect. Neither should be used to place a person in a fixed box. The useful question is what their preference causes them to notice, what it causes them to miss and what becomes possible when their thinking widens.</Body>
        <Hand v={['sm']}>Not a personality label. A development map.</Hand>
      </div>
    </Part>
  );
}
