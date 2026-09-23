import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

const CAM_ALT = 'The Critical Alignment Model. Purpose sits at the top: what are we here to achieve, decide or make possible? Above the line, the written ground rules, what is available and intended: Environment, the context and container, values, beliefs, culture, norms and what is allowed; and Structure, the architecture for success, resources, sequence, systems, benchmarks and accountabilities. The alignment gap. Below the line, the unwritten ground rules, what is expressed and actually happens: Implementation, what is actually done, decisions, focus, behaviour, follow-through and results; and People, who enacts and experiences it, capability, relationships, support, mentoring and accountability. A loop runs around all four. People come last because people come first. Before deciding that a person has failed, examine the system in which success was expected. Purpose gives direction. Alignment makes performance possible.';

// THE CRITICAL ALIGNMENT MODEL — breadcrumb, title beside the model diagram, where performance problems get diagnosed, why CAM exists
export default function CamIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">The Critical Alignment Model</span>
      </nav>
      <p className="ideas-eyebrow">Meaning &amp; alignment · A thinking architecture</p>
      <PartHead n={1} title="The Critical Alignment Model"
        aside={
          <figure className="cam-hero-fig">
            <div className="triad-diagram cam-plate"><Art name="cam-model" alt={CAM_ALT} /></div>
          </figure>
        }>
        <Hand v={['underline']}>Why people come last because people come first.</Hand>
        <Body>Most performance problems are diagnosed at the point where they become visible. Someone misses a deadline. A team member fails to follow through. A meeting goes nowhere. A strategy that looked perfectly sensible on paper produces patchy results, and eventually the conversation arrives at the person: Why didn’t they do it? What is wrong with their attitude? Do they need more feedback, more accountability, perhaps a performance review?</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>It is an understandable place to look because the person is standing right there. Their behaviour is observable. Their name is attached to the task. Yet by the time a problem becomes visible through a person, it may have travelled through an entire system that was never designed carefully enough to support the outcome being demanded of them.</Body>
        <Body>I developed the Critical Alignment Model, or CAM, because I wanted a way to think before reacting. I wanted to be able to examine a decision, a coaching conversation, a leadership problem or an entire organisation without being captured by whichever part of it happened to be loudest. I then organised the research program around the model and its profiling architecture so that the work could be examined rather than resting only on my experience or authority. CAM asks us to consider five dimensions in sequence: Purpose, Environment, Structure, Implementation and People. Each dimension changes how we understand the next one. Leave one out and we begin making decisions with missing information.</Body>
      </div>
    </Part>
  );
}
