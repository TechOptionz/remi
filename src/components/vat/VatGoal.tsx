import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { GOAL_QUESTIONS } from '@/content/vat';

const PROTECTION_ALT = 'What does staying the same protect? A desired future can coexist with a powerful need for protection. The future I imagine: I want to share my work; having the goal can offer hope and possibility. The protection I preserve: if I stay unseen, I cannot be judged; staying the same can preserve familiarity and reduce exposure. Both can be true. Bring compassionate inquiry to the protection: what feels threatening about being seen? What does this part of me need? Parts work or EIT, Emotion Integration Technique: meet the underlying experience with support, at the person’s capacity. As protection softens, revisit values and form aligned goals.';

// THE COMFORT OF HAVING A GOAL + BEGINNING WITH STRENGTHS
export default function VatGoal() {
  return (
    <Part n={3}>
      <H3 v={['left', 'rule']}>The comfort of having a goal</H3>
      <div className="dsr-grid">
        <div className="triad-prose">
          <Body>A goal can give us something emotionally long before we achieve it. Imagining a successful business might offer relief from feeling stuck. Imagining a loving relationship might make present loneliness more bearable. There is nothing inherently wrong with that; the capacity to imagine a different future can help sustain us.</Body>
          <Body>But sometimes the imagined future becomes an escape valve. Someone repeatedly announces that they want to earn a million dollars, yet does very little to bring their work into contact with potential customers. Having the goal allows them to continue experiencing themselves as someone who is going somewhere, while their everyday choices preserve the familiarity of where they are.</Body>
          <Body>In that situation, I am interested in two questions:</Body>
          <ol className="vat-two">{GOAL_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ol>
          <Body>Perhaps visibility brings the possibility of criticism. Perhaps succeeding would unsettle an important relationship. Perhaps trying wholeheartedly would expose them to a disappointment they have spent years avoiding. We cannot know until we inquire, and the person may not know either.</Body>
          <Body>This is where secondary gain becomes relevant. Staying the same may provide something the person relies on, even when they are unhappy with the consequences. Recognising that benefit helps us understand why an apparently desirable change has remained so difficult.</Body>
          <Body>There may also be discomfort in the discrepancy between their stated ambition and their behaviour. People find ways to explain that discrepancy, sometimes convincingly enough that they stop noticing it. The conversation needs to make it possible to look again without turning the discovery into another reason to attack themselves.</Body>
        </div>
        <ZoomArt name="vat-protection" alt={PROTECTION_ALT} label="What does staying the same protect?" className="street-poster vat-side" />
      </div>

      <H3 v={['left', 'rule']}>Beginning with strengths</H3>
      <div className="triad-prose">
        <Body>I use the VIA character strengths survey early in the process as a starting point for conversation. It can help someone recognise qualities they have overlooked, taken for granted or never considered particularly meaningful. Their response to the results is often as useful as the results themselves.</Body>
        <Body>We might explore where they recognise a strength in their life, where they struggle to express it, or why a particular description feels unfamiliar. The survey gives us material to work with and a way of bringing aspects of their experience into conscious awareness.</Body>
        <Body>Strengths and values have different roles in this inquiry. Recognising a capacity for curiosity, for example, does not automatically tell us what takes priority when curiosity brings the person close to something uncomfortable. We still need to explore how they live, and what influences them when there is something at stake.</Body>
        <Body>The process can take around four hours because these distinctions need room. We are separating what the person believes they should value from what they desire, and exploring both alongside what is already operating.</Body>
        <Hand v={['sm']}>Some answers become clearer only after the person has had time to hear themselves.</Hand>
      </div>
    </Part>
  );
}
