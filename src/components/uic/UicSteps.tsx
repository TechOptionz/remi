import { Body, H3, Part } from '@/components/ideas/ui';
import { STEPS, stepId } from '@/content/uic';

/** Heading for one step: its number, name and the line it carries in the deck. */
function StepHead({ num }: { num: number }) {
  const s = STEPS[num - 1];
  return (
    <h3 className={`ideas-h3 ideas-h3--left ideas-h3--rule uic-step-h uic-step-h--${num}`} id={stepId(s)}>
      <span className="uic-step-h-n" aria-hidden="true">{s.num}</span>
      {s.name.toUpperCase()}
      <span className="uic-step-h-tag">{s.tag}</span>
    </h3>
  );
}

// THE EIGHT STEPS OF THE ULTIMATE INFLUENCE METHOD: IGNITE · EXCITE · FLIP · MATCH · RECOMMEND · BACKTRACK · CLOSE · FUTURE PACE
export default function UicSteps() {
  return (
    <Part n={3}>
      <H3 v={['rules']}><span></span>The eight steps of the Ultimate Influence method<span></span></H3>

      <StepHead num={1} />
      <div className="triad-prose">
        <Body>Ignite is about helping someone feel comfortable enough to have a real conversation. Pay attention to their tone and pace. Be relaxed, interested, and a little more understated than you might instinctively want to be. You don&apos;t need to impress them in the first minute. You need to establish that this is a conversation they can participate in.</Body>
        <Body>Rapport is easy to mistake for a technique when it is written down. In practice, it shows up in whether you are responsive to the person in front of you. If they are reserved, charging in with enthusiasm may leave them further away from you. If they want to talk, give them room.</Body>
      </div>

      <StepHead num={2} />
      <div className="triad-prose">
        <Body>Before talking about your offer, learn something about the person and the future they are imagining. What do they care about in their work? Where do they want to go? What do they value about what they do? The answers begin to tell you what a good outcome would mean to them.</Body>
        <Body>This is sometimes described as building the dream, although the dream must belong to them. You may hear someone say they want to grow a business, for example, and discover that what matters most is having more choice about how they spend their time. You would miss that if you stopped at the first answer and began explaining your program.</Body>
        <Body>Your job here is to stay interested long enough to understand their meaning. Share an insight if it helps the conversation, but don&apos;t make it a speech about yourself.</Body>
      </div>

      <StepHead num={3} />
      <div className="triad-prose">
        <Body>Once you understand something about the person, you can gently turn toward the reason they&apos;re speaking with you. I call this Flip. You&apos;re connecting what matters to them with the possibility that you might be able to help.</Body>
        <Body>The shift might be as simple as asking how the offer they&apos;re considering fits into what they&apos;ve told you. Then listen. Let them explain why they&apos;ve made the inquiry and what they hope might come of it. Reflect their words accurately, without improving them or translating them into your preferred sales language.</Body>
        <Body>If the conversation becomes strained when you begin talking about the offer, that&apos;s useful information. You may need to go back and understand more. The steps aren&apos;t a staircase you must keep climbing regardless of what happens.</Body>
      </div>

      <StepHead num={4} />
      <div className="triad-prose">
        <Body>This is the most important part of the method. Match is where you examine the fit between the buyer&apos;s needs, values, desired outcomes, concerns, and circumstances, and what your offer can deliver.</Body>
        <Body>I think of it as a careful gap analysis. What are they hoping to achieve? What would they need to do for the work to succeed? Does the way you deliver it suit their life or business? What concerns have they raised about time, money, support, or their previous experiences? You need to learn enough to make a recommendation you can stand behind.</Body>
        <Body>In a workshop demonstration of Ultimate Influence, I used the example of someone looking at a real estate offer. Being near a golf course mattered to him because it was part of the future he imagined. It would have been easy to hear “golf course” as a property feature and move on. The conversation became more useful when we explored what it meant to him, alongside his concerns about the investment and the practical requirements. The offer had to match the life and outcome he was considering, not merely contain a feature that sounded relevant.</Body>
        <Body>This is also where objections belong. A concern about cost, time, or whether something will work in a particular location may be entirely reasonable. You cannot resolve it by being more enthusiastic. You have to understand the concern and see whether there is a truthful answer.</Body>
      </div>

      <StepHead num={5} />
      <div className="triad-prose">
        <Body>When you have enough information, ask permission to make a recommendation. Keep it tentative enough that the buyer can correct you:</Body>
        <p className="ideas-note triad-note">“I&apos;m thinking this may be the best fit, based on what you&apos;ve told me. How am I doing?”</p>
        <Body>Explain your reasoning in their terms. You might recommend the smaller option because it gives them the space to make use of it, even if they initially asked about the more advanced one. You might recommend a different route altogether. Their response will tell you whether you&apos;ve understood them and what still needs discussing.</Body>
        <Body>This is a small commitment in the conversation. You&apos;re putting forward a view, and the buyer is helping you test it. You haven&apos;t finished the assessment simply because they&apos;ve responded positively.</Body>
      </div>

      <StepHead num={6} />
      <div className="triad-prose">
        <Body>Backtrack is the part of Ultimate Influence I particularly love. Many sales methods would move straight from a promising recommendation to closing. I want to go back through what we&apos;ve learned first.</Body>
        <Body>We revisit what the person told us mattered, what they wanted to achieve, the concerns they raised, and why we think this particular option fits. We ask whether we&apos;ve missed anything. When we&apos;ve listened well, they will often say yes as they hear their own priorities reflected back to them. Those yeses build commitment because the decision is becoming clearer. They also give the buyer repeated opportunities to say, “Actually, that isn&apos;t quite what I meant.”</Body>
        <Body>For me, that is the point of backtracking. If we are a match, let&apos;s be confident about why. If we aren&apos;t, I&apos;d rather discover it here than push ahead and leave someone with a decision that doesn&apos;t suit them.</Body>
      </div>

      <StepHead num={7} />
      <div className="triad-prose">
        <Body>A close needn&apos;t arrive as an abrupt change in tone. By this stage you&apos;ve explored the fit, made a recommendation, and checked it together. You can ask whether they are ready to go ahead and, if they are, help them take the next step.</Body>
        <Body>I still believe in asking for the business. Some people are so anxious about sounding pushy that they do all the work of a good consultation and then leave the decision hanging. Being direct is respectful when the buyer knows what they&apos;re agreeing to, has had their questions answered, and can say no.</Body>
        <Body>If a concern appears at this point, take it seriously. It may reveal something you need to revisit in Match or Backtrack. The process is there to help you think, not to force a particular outcome.</Body>
      </div>

      <StepHead num={8} />
      <div className="triad-prose">
        <Body>After someone decides to proceed, they need clarity about what they&apos;ve agreed to and what happens now. Future Pace connects the decision to the outcome they told you they wanted, while making the immediate next steps concrete. Who will contact them? What will they receive? When can they begin? What will they need to do?</Body>
        <Body>This is part of the buying experience, and it should feel as considered as the conversation that led to it. Match their level of excitement rather than performing your own. The moment belongs to them.</Body>
      </div>
    </Part>
  );
}
