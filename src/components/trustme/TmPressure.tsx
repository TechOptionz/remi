import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { CLASHES, NEXT_PROBLEMS, REVIEW_QUESTIONS } from '@/content/trustme';

// WE DO NOT GRADUATE FROM THE EARLIER LEVELS + WHAT THE MODEL REVEALS IN BUSINESS + THE NEXT PROBLEM REQUIRES DIFFERENT THINKING
export default function TmPressure() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>We do not graduate from the earlier levels</H3>
      <div className="triad-prose">
        <Body>Ken Wilber’s phrase ‘transcend and include’ captures something essential. Development is not the rejection of earlier capacities. If a later level cannot access healthy power, order, enterprise or belonging, it is not integrated. It is merely avoiding parts of the spiral while claiming to be above them.</Body>
        <Body>We also do not express one level everywhere. Someone may show Tenacity at work, Relatability in their family and unresourceful Trust when facing illness or financial shock. Life conditions can pull earlier patterns forward. Under pressure, people commonly fall back, sometimes by two levels or more, until they reach the thinking they have truly embodied rather than the thinking they can describe.</Body>
        <Body>This is why pressure is so revealing in leadership. Ask someone about feedback when everything is calm and most will claim to welcome it. Challenge a decision they identify with and you may meet the level actually governing them. The point is not to catch people out. It is to know what capacity is available, what has not yet been integrated and what the situation requires next.</Body>
      </div>
      <p className="ideas-note triad-note">Under pressure, we fall back to the level we have genuinely integrated.</p>

      <H3 v={['left', 'rule']}>What the model reveals in business</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>I once worked with a business generating more than one million dollars a year in bad debt. The leaders were focused on acquiring new customers, dominating their market and keeping the energy moving forward. They resisted the Systems work of measurement, accountability and repeatable correction because it felt slow and restrictive. The problem was not a lack of drive. It was drive that had not integrated the next capacity, and eventually the business failed.</Body>
          <Body>The model also explains team clashes that appear personal. Relatability experiences the certainty of Uniqueness as threatening. Uniqueness experiences Systems as suffocating. Systems experiences Tenacity as reckless. Tenacity experiences Meaning as slow or commercially naive. Meaning experiences Tenacity as selfish. Each may be responding coherently from within its own value system while remaining unable to see what the other level is protecting or providing.</Body>
          <Body>A useful cultural review therefore asks:</Body>
        </div>
        <figure className="tm-clashes" aria-label="How each level experiences its neighbour">
          <ul>
            {CLASHES.map(c => (
              <li key={`${c.from}-${c.to}`}><span className="tm-clash-from">{c.from}</span><span className="tm-clash-arrow" aria-hidden="true">→</span><span className="tm-clash-to">{c.to}</span><span className="tm-clash-as">feels {c.as}</span></li>
            ))}
          </ul>
          <figcaption className="ladder-cap">Each is coherent from inside its own value system.</figcaption>
        </figure>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{REVIEW_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>The same questions work in a family. One parent may privilege loyalty, another independence. A child may be trying to differentiate inside a system that interprets difference as betrayal. Suddenly the conflict has a structure, and structure gives us somewhere more intelligent to begin.</Body>
      </div>

      <H3 v={['left', 'rule']}>The next problem requires different thinking</H3>
      <div className="triad-prose">
        <Body>We cannot solve the central problem of one level using only the thinking that created it.</Body>
      </div>
      <ol className="tm-next">
        {NEXT_PROBLEMS.map(n => <li key={n.level}><span className="tm-next-level">{n.level}</span><span className="tm-next-must">must {n.must}.</span></li>)}
      </ol>
      <div className="triad-prose">
        <Body>We may be able to imitate later language, particularly when the culture rewards it. We cannot sustainably skip the developmental work. The unresolved level waits for pressure, then returns with surprising authority.</Body>
        <Body>The most useful question is therefore not ‘Which level am I?’ It is:</Body>
      </div>
      <p className="ideas-note triad-note">Which level is organising my response here, is it resourceful, and what capacity must become available next?</p>
      <div className="triad-prose">
        <Hand v={['sm']}>The unresolved level waits for pressure.</Hand>
      </div>
    </Part>
  );
}
