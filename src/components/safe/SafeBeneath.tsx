import { Body, H3, Hand, Part } from '@/components/ideas/ui';

// WHY DO WE REPEAT BEHAVIOURS WE WANT TO STOP? + WHAT MAKES A TRUTH FEEL RISKY?
export default function SafeBeneath() {
  return (
    <Part n={3}>
      <H3 v={['left', 'rule']}>Why do we repeat behaviours we want to stop?</H3>
      <div className="triad-prose">
        <Body>In my work, I am rarely satisfied with helping someone manage a protective behaviour without also exploring what it is protecting. I want to understand what happens inside them when the familiar way of coping is unavailable.</Body>
        <Body>Consider someone whose addictive behaviour is bound up with loneliness or disconnection. “I have to stop doing this” may become the entire problem as they understand it. They monitor themselves, make promises, try harder and feel ashamed when they return to the behaviour. Meanwhile, the question of how to experience genuine connection remains largely untouched.</Body>
        <Body>Through this model, I would want to explore what connection asks of them. Can they allow someone to know them? Can they acknowledge that they need care? What happens when they feel lonely without immediately reaching for relief? Do they have any experience of being accompanied through that feeling?</Body>
        <Body>That is an inquiry into the role the behaviour may be playing for this person. It is not a claim that every addiction has the same explanation, or that understanding an emotional pattern replaces other support. It is a reason to look carefully at what we are asking someone to give up, and what capacity they have to meet the experience underneath it.</Body>
        <Body>A child who feels overwhelmed needs help with that experience. Someone who can remain present, respond with care and help them discover that a feeling can be endured without losing connection. When that support has been missing, a person may reach adulthood with very little confidence in their ability to experience loneliness, sadness or fear without being overtaken by it.</Body>
        <Body>From that position, protection makes sense. Numbing may make sense. Controlling what other people do may make sense. The pattern may be costly now, but we need to become curious about why it has felt necessary.</Body>
        <Body>My focus is on helping someone develop a different, felt relationship with what hurts. Being able to explain a feeling is useful, but I also want to know whether they can experience it with some compassion for themselves. Can they notice the loneliness and remain present? Can they feel hurt without deciding the hurt makes them weak or unlovable? Can they receive support without feeling ashamed of needing it?</Body>
        <Hand v={['sm']}>As that capacity develops, the behaviour may become less necessary. There is more available to the person than the familiar struggle to overpower themselves.</Hand>
      </div>

      <H3 v={['left', 'rule']}>What makes a truth feel risky?</H3>
      <div className="triad-prose">
        <Body>A risky truth often brings us close to something we have spent years avoiding. We may have to acknowledge how much we want to be loved, how lonely we have become, or how frightened we are that someone could know us properly and still leave.</Body>
        <Body>We may also have to recognise what we already know about a situation. That a relationship is hurting us. That we keep agreeing to things we resent. That the life we are maintaining requires us to suppress needs we can no longer pretend not to have.</Body>
        <Body>There can be consequences to knowing these things. Once I accept that my need for care is legitimate, it becomes harder to keep explaining away its absence. Once I recognise that I matter, some of the arrangements I have tolerated may become difficult to continue.</Body>
        <Body>This is why I do not treat the process as a clever exercise in getting someone to admit the “real problem”. An interpretation can be intellectually plausible and still arrive too quickly to be useful. The person needs enough emotional and intellectual bandwidth to consider what is emerging.</Body>
        <Hand v={['sm']}>Nothing is gained by making someone feel exposed and then calling that a breakthrough.</Hand>
      </div>
    </Part>
  );
}
