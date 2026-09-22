import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { DIMENSIONS, PEOPLE_QUESTIONS, THE_LINE } from '@/content/cam';

/** The alignment gap as a figure: the five dimensions in sequence, split by the line between intended and expressed. */
function TheLine() {
  const above = DIMENSIONS.filter(d => d.line !== 'below');
  const below = DIMENSIONS.filter(d => d.line === 'below');
  const dim = (d: (typeof DIMENSIONS)[number]) => (
    <li key={d.title} className={`cam-dim cam-dim--${d.line}`}><h4>{d.title}</h4><p>{d.lead}</p></li>
  );
  return (
    <figure className="cam-line" aria-label="The alignment gap: what is intended above the line, what is expressed below it">
      <div className="cam-half cam-half--above">
        <span className="cam-half-t">{THE_LINE.above.title}</span>
        <ol className="cam-dims">{above.map(dim)}</ol>
        <p className="cam-half-s">{THE_LINE.above.text}</p>
      </div>
      <div className="cam-gap" aria-hidden="true"><span>The alignment gap</span></div>
      <div className="cam-half cam-half--below">
        <span className="cam-half-t">{THE_LINE.below.title}</span>
        <ol className="cam-dims" start={4}>{below.map(dim)}</ol>
        <p className="cam-half-s">{THE_LINE.below.text}</p>
      </div>
      <figcaption className="ladder-cap">What occurs below the line tells us what was missing above it.</figcaption>
    </figure>
  );
}

// THE LINE BETWEEN INTENTION AND REALITY + IMPLEMENTATION + PEOPLE
export default function CamExpressed() {
  return (
    <Part n={3}>
      <H3 v={['left', 'rule']}>The line between intention and reality</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Purpose, Environment and Structure tell us what has been intended and what is available. Environment and Structure contain the written ground rules. They describe what the organisation, family, team or individual says should happen.</Body>
          <Body>Implementation and People reveal what is expressed. They contain the unwritten ground rules, the repeated behaviours through which we discover what the system truly permits, prioritises and produces. The distance between the two is the alignment gap. If the values say that honesty is welcome but people are punished for bringing difficult information into the room, the unwritten rule wins. If a policy requires careful review but every deadline makes review impossible, speed is the real policy.</Body>
          <Body>This is why CAM is recursive rather than merely a checklist. What occurs below the line gives us information about what was missing, confused or contradicted above it. We then move back through the model, revise our understanding and try again. It is a thinking architecture, not a process to complete once and place in a folder.</Body>
          <Hand v={['sm']}>The unwritten rule wins.</Hand>
        </div>
        <TheLine />
      </div>

      <H3 v={['left', 'rule']}>Implementation is what actually happens</H3>
      <div className="triad-prose">
        <Body>Implementation is the work people actually do. It is how decisions are made, what receives attention, what is avoided, how consistently agreed processes are followed, and whether action produces the intended result. It is where Purpose, Environment and Structure become visible in behaviour.</Body>
        <Body>Most organisations rush here. They begin doing because doing feels productive, then attempt to repair the resulting confusion with more meetings, more urgency and more feedback. Conventional coaching often makes the same error. It asks what the client wants, what they will do next and when they will do it, without examining whether the goal belongs to them, what assumptions shaped it, what system surrounds it or what the outcome will cost. That may produce activity. I do not regard it as deep coaching.</Body>
        <Body>Behaviour matters, of course. The mistake is treating it as though it appeared independently. CAM asks whether implementation is aligned with the stated purpose, supported by the structure and possible within the environment. If it is not, exhorting people to try harder is poor leadership wearing the costume of accountability.</Body>
      </div>

      <H3 v={['left', 'rule']}>People come last because people come first</H3>
      <div className="triad-prose">
        <Body>People are the final dimension because leaders have an obligation to establish the conditions in which people can reasonably succeed before deciding that the problem resides within them.</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{PEOPLE_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>The phrase I have used for years is that people come last because people come first. It is not sentimental. It is a demanding leadership standard. Until Environment, Structure and Implementation are in place, what appears to be a people problem is usually a leadership or systems problem.</Body>
        <Body>Imagine a meeting in which someone says that a colleague failed to complete their part of a project. The surface reading is simple: the person did not do it. Move one dimension back and we may find that their work depended on an approval that never arrived. Move into Structure and we discover there was no clear owner for that approval, no escalation point and no benchmark for when the work had to leave one part of the operation to reach the next. What looked like an individual failure was the predictable end of an upstream bottleneck.</Body>
        <Body>I have used CAM in organisations for many years, and the pattern is remarkably consistent. Leaders arrive believing they have a people problem. Once we examine the earlier dimensions, we find unclear purpose, a culture that contradicts its stated values, missing architecture, confused decision rights, inadequate resources or implementation that has drifted away from the original design. Sometimes, after all of that has been repaired, there is genuinely a people problem. CAM does not remove accountability. It makes accountability honest.</Body>
      </div>
      <p className="ideas-note triad-note">Before deciding that a person has failed, examine the system in which success was expected.</p>
    </Part>
  );
}
