import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { MOVEMENT_LINES, PURPOSE } from '@/content/dl';

/** The five movements as a cycle: a ring of five steps around the purpose. */
function Cycle() {
  return (
    <figure className="dl-cycle" aria-label="The five movements of Disruptive Leadership form a continuous cycle">
      <ol className="dl-moves">
        {MOVEMENT_LINES.map((m, i) => (
          <li key={m.name} className="dl-move">
            <span className="dl-move-n">{String(i + 1).padStart(2, '0')}</span>
            <span className="dl-move-name">{m.name}</span>
            <span className="dl-move-text">{m.text}</span>
          </li>
        ))}
      </ol>
      <p className="dl-loop" aria-hidden="true">↺ Every time we move through the cycle, we should become more capable of beginning it again.</p>
      <figcaption className="ladder-cap">Purpose: {PURPOSE}</figcaption>
    </figure>
  );
}

// LEADERSHIP BEGINS WITH THE WHITE PAPER + THE FIVE MOVEMENTS
export default function DlWhitePaper() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>Leadership begins with the white paper</H3>
      <div className="triad-prose">
        <Body>Imagine a sheet of paper covered in words. Most of us have been educated to examine the words. We analyse them, categorise them, compare them with what we already know and draw conclusions from the available information.</Body>
        <Body>The Disruptive Leader notices something else: the white space. They look at what isn’t on the page and wonder what could be there. What hasn’t been considered? What assumption hasn’t been questioned? What doesn’t exist yet? What could we create if we weren’t limited by what has already been created?</Body>
        <Body>This is the inductive capacity at the heart of Disruptive Leadership. It doesn’t mean rejecting evidence; evidence matters enormously. It means refusing to confuse a lack of evidence with evidence of impossibility.</Body>
        <Hand v={['sm']}>Evidence helps us understand what is. Induction allows us to imagine what could be. Leadership builds the bridge between them.</Hand>
        <Body>That is why disruption must begin with the leader’s own thinking. Before we disrupt the market, the organisation, the process or the team, we have to be willing to ask whether the thing limiting what is possible is the way we are currently thinking about it.</Body>
      </div>

      <H3 v={['left', 'rule']}>The five movements of Disruptive Leadership</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Disruptive Leadership moves through five interconnected practices:</Body>
          <ol className="dl-lines">
            {MOVEMENT_LINES.map(m => <li key={m.name}><b>{m.name.toUpperCase()}</b> <span aria-hidden="true">→</span> {m.text}</li>)}
          </ol>
          <Body>These aren’t five boxes to tick. They form a continuous cycle, and every time we move through that cycle, we should become more capable of beginning it again.</Body>
        </div>
        <Cycle />
      </div>
    </Part>
  );
}
