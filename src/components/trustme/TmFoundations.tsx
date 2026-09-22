import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { EXPRESSIONS, LEVELS } from '@/content/trustme';

/** The seven levels as a rising stack, each marked I or we, so the alternation is visible beside the copy. */
function Alternation() {
  return (
    <figure className="tm-stack" aria-label="The seven levels alternate between I-focused and we-focused">
      <ol className="tm-rungs" reversed>
        {[...LEVELS].reverse().map(l => (
          <li key={l.num} className={`tm-rung tm-rung--${l.focus.toLowerCase()}`}>
            <span className="tm-rung-n">{String(l.num).padStart(2, '0')}</span>
            <span className="tm-rung-name">{l.name}</span>
            <span className="tm-rung-tag">{l.tag}</span>
            <span className="tm-rung-focus">{l.focus} focused</span>
          </li>
        ))}
      </ol>
      <figcaption className="ladder-cap">Each movement solves what the last one could not.</figcaption>
    </figure>
  );
}

/** The two expressions of every level, with one example per level from the deck. */
function Expressions() {
  return (
    <figure className="tm-expr" aria-label="The resourceful and unresourceful expression of each level">
      <div className="tm-expr-head">
        <div className="tm-expr-col tm-expr-col--low"><strong>{EXPRESSIONS.low.title}</strong><span>{EXPRESSIONS.low.text}</span></div>
        <div className="tm-expr-col tm-expr-col--high"><strong>{EXPRESSIONS.high.title}</strong><span>{EXPRESSIONS.high.text}</span></div>
      </div>
      <ol className="tm-expr-rows">
        {LEVELS.map(l => (
          <li key={l.num} className="tm-expr-row">
            <span className="tm-expr-level">{l.name}</span>
            <span className="tm-expr-low">{l.low}</span>
            <span className="tm-expr-high">{l.high}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

// THE ENVIRONMENT GETS INSIDE US + DEVELOPMENT ALTERNATES BETWEEN I AND WE + THE RESOURCEFUL AND UNRESOURCEFUL EXPRESSION
export default function TmFoundations() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>The environment gets inside us</H3>
      <div className="triad-prose">
        <Body>Graves was interested in why human beings respond so differently to life. Spiral Dynamics describes value systems, sometimes called value memes, that arise through the relationship between life conditions and our capacity to cope with those conditions. A meme in this sense is not a slogan on the internet. It is a pattern of shared meaning that moves through families, organisations and cultures, shaping what people reward, fear, permit and regard as obviously true.</Body>
        <Body>We internalise the environments in which we live. A family may organise itself around loyalty and belonging. A start-up may reward rebellion and speed. A profession may prize rules, evidence and procedural correctness. A social movement may define goodness through agreement with the group. People absorb these messages, often long before they realise they have done so. This is why someone can feel competent in one culture and strangely wrong in another. Their values may be colliding with the organising values of the system.</Body>
        <Body>The model can therefore be applied at any scale. We can examine the thinking of one person, the tension between two parts of that person, a marriage, a leadership team, a company culture or an entire community. The content changes. The developmental questions remain surprisingly consistent.</Body>
      </div>

      <H3 v={['left', 'rule']}>Development alternates between I and we</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>The seven levels move between individual expression and collective stability. Trust, Uniqueness, Tenacity and Evolution are primarily I-focused. Relatability, Systems and Meaning are primarily we-focused. Each movement solves something the previous orientation could not solve, while eventually creating a new problem of its own.</Body>
          <Body>The group gives safety, and eventually the individual needs to differentiate. Individual power creates movement, and eventually the movement needs structure. Systems create reliability, and eventually the person wants achievement beyond compliance. Achievement produces results, and eventually those results can feel empty. Meaning brings contribution and belonging back into view, and eventually even the meaningful group can become rigid. Evolution makes the whole repertoire available according to what the situation actually requires.</Body>
          <Body>This is not a ladder of human worth. More complex thinking is still more complex, and pretending otherwise is not useful. A person at Evolution can hold more perspectives and deliberately access earlier capacities. That does not make them more deserving of dignity. A person whose home has just been destroyed may need the resourceful survival intelligence of Trust, not an abstract conversation about systems and meaning.</Body>
          <Hand v={['sm']}>Development expands complexity. It does not make one person more worthy than another.</Hand>
        </div>
        <Alternation />
      </div>

      <H3 v={['left', 'rule']}>The resourceful and unresourceful expression</H3>
      <div className="triad-prose">
        <Body>One of my additions to the developmental model is the deliberate distinction between the resourceful and unresourceful expression of each level. The level itself is not the problem. The question is whether we are using its capacities consciously, in response to reality, or being controlled by its unresolved fears and limitations.</Body>
        <Body>Dependence can be helplessness, or it can be the intelligent decision to rely on others while we learn. Belonging can require self-abandonment, or it can give us collaboration without the loss of self. Power can become domination, or it can be the energy required to leave a system that no longer permits truth. Systems can become bureaucracy, or they can preserve learning so that people do not have to reinvent excellence every day.</Body>
        <Body>The same distinction continues through the later levels. Tenacity can become exhausting proof that enough is never enough, or it can generate sustainable results. Meaning can become righteous agreement without action, or it can turn reliable resources toward contribution. Evolution can become intellectual distance and analysis paralysis, or functional flow, where the person can use the capacity that fits and allow the most suitable person to lead.</Body>
      </div>
      <Expressions />
      <p className="dsr-caption">The level itself is not the problem.</p>
    </Part>
  );
}
