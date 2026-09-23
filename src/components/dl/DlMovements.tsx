import Link from 'next/link';
import { Body, Box, Hand, Part } from '@/components/ideas/ui';
import Icon from '@/components/shared/Icon';
import { EVOLVE_QUESTIONS, LEAVES_BEHIND, MOVEMENTS } from '@/content/dl';

/** Heading for one movement: its number, name and what it asks of us. */
function MoveHead({ num }: { num: number }) {
  const m = MOVEMENTS[num - 1];
  return (
    <h3 className={`ideas-h3 ideas-h3--left ideas-h3--rule dl-move-h dl-move-h--${num}`} id={`move-${m.name.toLowerCase()}`}>
      <span className="dl-move-h-n" aria-hidden="true">{String(m.num).padStart(2, '0')}</span>
      {m.name.toUpperCase()}
      <span className="dl-move-h-tag">{m.tag}</span>
    </h3>
  );
}

/** The practices of one movement, from the diagram, beside its copy. */
function Practices({ num }: { num: number }) {
  const m = MOVEMENTS[num - 1];
  return (
    <aside className={`dl-practices dl-practices--${num}`} aria-label={`${m.name}: the practices`}>
      <ul>{m.points.map(p => <li key={p}>{p}</li>)}</ul>
      <p className="dl-practices-note">{m.note}</p>
    </aside>
  );
}

// THE FIVE MOVEMENTS: SEE · ALIGN · MOBILISE · DELIVER · EVOLVE
export default function DlMovements() {
  return (
    <Part n={3}>
      <MoveHead num={1} />
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>The first responsibility of the Disruptive Leader is to see beyond what already exists. This means questioning assumptions, challenging the apparently obvious and noticing possibilities that aren’t yet supported by precedent.</Body>
          <Body>Instead of limiting ourselves to asking What should we do?, we ask What could be possible here?</Body>
          <Body>This requires curiosity, imagination, the intellectual courage to hold an idea before we possess all the evidence that it will work, and enough humility to recognise that the status quo we need to disrupt may be our own. We examine our certainty and ask what we’re assuming, what we’re not seeing, what we’ve decided is impossible simply because we haven’t done it before, and what might exist in the white space.</Body>
          <Body>This is not innovation for innovation’s sake. The purpose is to challenge a status quo when it no longer serves the greater good.</Body>
        </div>
        <Practices num={1} />
      </div>

      <MoveHead num={2} />
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Possibility without alignment becomes enthusiasm without execution. Once we can see what could be, the next question is: What needs to be true for us to make it real?</Body>
          <Body>This is where the <Link href="/ideas-models/critical-alignment-model">Critical Alignment Model</Link> becomes essential. Rather than continually blaming individuals for outcomes that may be produced by misaligned systems, we examine the whole environment in which the result is being created. We look at the environment, the structures supporting people, the way implementation occurs and whether the people involved are able to make the contribution the organisation actually requires.</Body>
          <Body>We look for friction and bottlenecks. We examine where information stops flowing, where authority and accountability have become separated, where processes have become unnecessarily complicated, where unwritten ground rules contradict the stated culture, and where people are compensating for poorly designed systems through individual heroics.</Body>
          <Body>Alignment also demands that we distinguish between <Link href="/ideas-models#part-8">Core, Improve and Innovate</Link>. Not everything needs disrupting. Some things need protecting because they reliably produce the result. Some need improving because they remain useful but could function better. Others have reached the end of their usefulness and need to be reimagined.</Body>
          <Hand v={['sm']}>The leadership skill is knowing the difference.</Hand>
        </div>
        <Practices num={2} />
      </div>

      <MoveHead num={3} />
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Disruptive Leadership is not something a leader does to followers. Leadership is a shared responsibility for how we function together.</Body>
          <Body>The formal leader certainly has additional responsibilities. They model the standard, create clarity, establish expectations, make the decisions that belong to them and demonstrate consistency. But they do not own the culture. Everybody does.</Body>
          <Body>Culture is not the company name, the values painted on a wall or the vision statement in the induction manual. Culture is what people repeatedly bring, tolerate, reinforce and challenge. Every person therefore has a responsibility to contribute to the culture they claim they want.</Body>
          <Body>That responsibility includes supporting decisions once they have been made rather than quietly undermining them, giving and receiving feedback, acting with integrity, being transparent, taking responsibility and being willing both to have the fierce conversation and to hear something we would rather not hear.</Body>
          <Body>This is what I mean by graceful inclusion. It doesn’t mean everybody agrees, everybody gets their way or everybody participates in every decision. It means creating the conditions in which people can make their best contribution to the whole, while expecting them to take responsibility for making that contribution.</Body>
          <Body>Individual differences matter here as well. People bring different personalities, strengths, capacities, preferences and ways of interacting with the world. The Big Five research, for example, demonstrates that personality differences can relate meaningfully to workplace performance, although different traits matter differently depending on the role and criterion being considered. The leadership question is not how to make everybody the same; it is how to understand the people we actually have and create the best possible alignment between person, contribution and purpose.</Body>
          <Body>Sometimes that means recognising that someone’s best contribution cannot be made in their current role. Then the conversation becomes: Where could you thrive? Perhaps there is another role within the organisation, and perhaps there isn’t. If someone cannot find the place where they can thrive, strive and make their best contribution with us, then perhaps their next opportunity is somewhere else.</Body>
          <Body>A graceful exit can be as much an act of leadership as graceful inclusion. The objective is not to keep everybody. The objective is fit.</Body>
        </div>
        <Practices num={3} />
      </div>

      <MoveHead num={4} />
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Results matter enormously, but in Disruptive Leadership, the result is never just the result. Every result is simultaneously an opportunity to assess the systems that produced it.</Body>
          <Body>As we deliver, we are continually asking whether the systems are supporting us, where unnecessary friction is appearing, where decisions are stalling, where communication is failing, what is dependent upon one person knowing something nobody else knows, and what requires heroic effort that should have been routine. We also notice what worked brilliantly, what should become standard practice and what is no longer fit for purpose.</Body>
          <Body>The objective isn’t to achieve the result without damaging the system. That’s too low a standard.</Body>
          <Body>The objective is to achieve the result while supporting, assessing and improving the systems responsible for producing it.</Body>
          <Body>The system should never become sacred. A process doesn’t deserve to survive simply because that’s our process. Systems exist to serve purpose and results. When they no longer do, we question them. When they can be improved, we improve them. When they are no longer fit for purpose, we disrupt them.</Body>
          <Body>This is also why bottlenecks matter so much. If everything requires the leader’s approval, if knowledge resides with one indispensable person, if decisions repeatedly become stuck in the same place or if the organisation continually relies on individuals to compensate for weak systems, the result itself is giving us information. Leadership requires us to use it.</Body>
        </div>
        <Practices num={4} />
      </div>

      <MoveHead num={5} />
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Completion is not the end of a project. The final leadership responsibility is to harvest what the experience has taught us.</Body>
          <Body>Every project, initiative, success and failure becomes an opportunity to ask:</Body>
        </div>
        <Practices num={5} />
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{EVOLVE_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>This is how every piece of work becomes an opportunity for personal, team and organisational development.</Body>
        <Body>A great result should leave behind greater capacity, but greater capacity doesn’t necessarily mean more. It may mean greater simplicity, better judgement, stronger or more appropriate systems, greater emotional capacity, more sophisticated thinking, increased candour, clearer accountability, stronger relationships, fewer bottlenecks or the wisdom to stop doing something altogether.</Body>
      </div>
      <ul className="dl-leaves" aria-label="What a great result leaves behind">
        {LEAVES_BEHIND.map(l => (
          <li key={l.title}>
            <span className="dl-leaves-icon" aria-hidden="true"><Icon name={l.icon} size={26} strokeWidth={1.4} /></span>
            <b>{l.title}</b>
            <span className="dl-leaves-q">{l.q}</span>
          </li>
        ))}
      </ul>
      <div className="triad-prose">
        <Body>Then we return to the beginning, because what we have learned changes what we are capable of seeing.</Body>
        <Hand>A stronger tomorrow, together.</Hand>
      </div>
    </Part>
  );
}
