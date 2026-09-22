import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { ENVIRONMENT_QUESTIONS } from '@/content/cam';

// THE QUESTION ABOVE EVERY OTHER QUESTION + ENVIRONMENT + STRUCTURE (what has been intended and what is available)
export default function CamIntended() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>The question above every other question</H3>
      <div className="triad-prose">
        <Body>Purpose is the fifth and highest dimension of CAM. It sits above the model because without it, we can become extremely efficient at achieving an outcome that was never worth pursuing. Before discussing who will do something or how it will be done, I want to know what we are here to achieve. What is the purpose of this meeting, this project, this performance review, this coaching session or this organisation? What will be different if we succeed, and is that difference actually worthy?</Body>
        <Body>This sounds obvious until you observe how rarely it is settled. People enter meetings carrying different purposes without realising it. A leader believes a performance conversation is about improvement while the person receiving it experiences it as evidence that a decision has already been made about them. A marketing team believes the purpose is to generate leads while the founder is trying to protect the reputation of the brand. Everyone can work hard and still pull the system apart.</Body>
        <Body>Purpose is therefore more than a goal. A goal may tell us what we hope to produce. Purpose tells us why the outcome matters, what it must remain aligned with and what we are unwilling to sacrifice in order to achieve it. Once that is clear, the other four dimensions have something coherent to organise around.</Body>
        <Hand v={['sm']}>Purpose gives direction. Alignment makes performance possible.</Hand>
      </div>

      <H3 v={['left', 'rule']}>Environment and the container in which everything occurs</H3>
      <div className="triad-prose">
        <Body>Environment is the context or container in which the outcome is being pursued. At an organisational level it includes culture, values, shared assumptions, market conditions, standards, written ground rules and what the organisation has decided is acceptable. Within a family, it may include the family’s norms, loyalties, unspoken permissions, beliefs about conflict and what happens when someone tells the truth. Within an individual, Environment includes beliefs, attitudes, identity, values, expectations and what that person holds to be possible.</Body>
        <Body>The inner and outer environments can also be in conflict. A family may claim openness as a value while one parent carries an internal rule that disagreement is disrespect. A company may publish values about initiative while a leader privately believes that control equals competence. The written environment says one thing and the lived experience teaches another. That conflict matters because people learn the actual rules of a system very quickly, however beautifully the official ones are written.</Body>
        <Body>When I work with a leader, I am curious about the environment from which they operate.</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{ENVIRONMENT_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>These questions reveal the conditions in which every later decision will be made.</Body>
      </div>

      <H3 v={['left', 'rule']}>Structure and the architecture for success</H3>
      <div className="triad-prose">
        <Body>Structure is everything that should make the desired outcome possible and repeatable. It includes available resources, roles, decision rights, categories of responsibility, policies, operational manuals, checklists, sequences, measures and benchmarks of excellence. It includes what happens first, what cannot happen until that first step is complete, how competence is established, and how anyone knows whether the work is good enough to move forward.</Body>
        <Body>Take lead generation. A team cannot sensibly be told to generate more leads as though that instruction contains a strategy. There must be a product, then an offer, then a pathway through which the offer becomes visible. A landing page has its own benchmarks: the language, images, promise, evidence, call to action and the experience after someone responds. Each part depends on something earlier. If the sequence is incomplete, a bottleneck is not evidence that the person at the end of it is inadequate. The structure made the bottleneck likely.</Body>
        <Body>Structure also includes resources and resourcefulness. Has the person been given the information, authority, time, tools and examples required to succeed? Have the benchmarks remained trapped in the leader’s head, only becoming visible when someone violates them? Many leaders believe they have delegated when what they have really done is transferred an expectation they have never made explicit.</Body>
      </div>
    </Part>
  );
}
