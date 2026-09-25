import { Body, H3, Hand, Panel, Part } from '@/components/ideas/ui';

// HOW COMPASSION BUILDS EMOTIONAL CAPACITY + WHAT DOES IT MEAN TO INTEGRATE AN EMOTION?
export default function EitCapacity() {
  return (
    <Part n={5}>
      <H3 v={['left', 'rule']}>How compassion builds emotional capacity</H3>
      <div className="triad-prose">
        <Body>Is compassion the mechanism of EIT, or is capacity? Both. Compassion is the experience that becomes available. Capacity is what expands because the person can remain with an experience they previously had to avoid, suppress or push outside themselves.</Body>
        <Body>Emotional capacity, as I understand it, means I can be with my uncomfortable feeling. I do not have to enjoy sadness or grief. I do not have to romanticise loneliness. I can stay in relationship with myself while the feeling is present. If I can feel compassion for my sadness, loneliness or grief, I am feeling compassion for myself. My emotional bandwidth has expanded.</Body>
        <Body>That expansion changes relationships as well. When I cannot tolerate grief in myself, I am likely to struggle with grief in another person. I may minimise it, solve it too quickly, deflect into humour, become defensive, retreat, intellectualise or simply not know what to do. Once I can be compassionately present with my own emotion, another person’s emotion is less threatening. I have a way of being with it without having to erase it.</Body>
        <Body>This is why EIT is bigger than reducing reactivity. It increases the range of human experience a person can remain present to. With more capacity comes more choice. The automatic protector does not need to disappear or be defeated.</Body>
        <Hand v={['sm']}>It no longer has to carry the entire burden alone.</Hand>
      </div>

      <Panel tone="dark" className="centre-panel real-panel">
        <H3 className="panel-title centre-title">What does it mean to integrate an emotion?</H3>
        <p className="panel-body">I believe wholeness is our natural state. We do not manufacture it through enough personal development. We notice it as we bring back into the fold what we previously had to exclude. Integration means welcoming the emotions that were pushed away, shut down or suppressed and meeting them with compassion rather than judgement.</p>
        <p className="panel-body">Every emotion belongs. Every emotion developed within a context and serves a purpose. Protection makes sense because it organised around experiences the person could not safely tolerate at the time. The work is not to cut away the branches of the tree. The work is to become capable of being with what is underneath them.</p>
        <p className="panel-body">A client has integrated an emotion when they can remain with it without becoming overwhelmed, rejecting it, disappearing into analysis or requiring a protector to take over immediately. The emotion can move through the person without becoming an identity or an emergency. What was previously exiled becomes part of the whole again.</p>
        <p className="panel-body">This is also the movement towards self-acceptance. Compassion for dissociation becomes compassion for the self who needed to dissociate. Compassion for grief becomes compassion for the self who lost something. Compassion for shame reaches the self who concluded there was something fundamentally missing or wrong.</p>
        <p className="centre-quote">Bit by bit, the person comes home to more of themselves.</p>
      </Panel>
    </Part>
  );
}
