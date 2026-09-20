import { EXPLANATIONS } from '@/content/programs';
import { TestimonialSlot } from './ui';

// EVERYONE CAN EXPLAIN THE PROBLEM — heading left, the accepted explanations set like meeting minutes, body right
export default function Explanation() {
  return (
    <section className="ry-section" aria-labelledby="explain-h">
      <div className="ry-split">
        <div className="ry-split-head">
          <h2 id="explain-h" className="ry-title">Everyone can explain the problem. <em>That doesn’t mean the explanation is true.</em></h2>
        </div>
        <div className="ry-prose">
          <p>By the time a leadership team reaches an impasse, it will usually have a perfectly reasonable account of what is going wrong.</p>
          <ul className="ry-minutes" aria-label="The usual explanations">
            {EXPLANATIONS.map(t => <li key={t}>{t}</li>)}
          </ul>
          <p>Some of that may be true.</p>
          <p className="ry-callout">It may also be the explanation the system has learned to live with.</p>
          <p>Capable people are very good at constructing rational explanations for problems with far less rational forces underneath them. History, loyalty, fear, status, unspoken conflict, incentives, identity, old decisions nobody wants to revisit and truths the group does not yet have the capacity to discuss can all quietly shape what happens next.</p>
          <p>The accepted diagnosis can become part of what keeps the problem in place.</p>
          <p>Then the organisation does more of what it already knows how to do. It holds another meeting, introduces another process, restructures responsibilities or brings in a facilitator to help everybody communicate more effectively.</p>
          <p className="ry-verdict">People leave with action points.<br /><em>Nothing essential changes.</em></p>
        </div>
      </div>
      <TestimonialSlot slot="diagnosis" />
    </section>
  );
}
