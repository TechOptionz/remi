import Link from 'next/link';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { CAM_LENS } from '@/content/f90';

/** The CAM lens: the five dimensions in the order a leader learns to see them. */
function Lens() {
  return (
    <figure className="f90-lens" aria-label="The CAM lens: Purpose, Environment, Structure, Implementation, People">
      <span className="f90-lens-t">The CAM lens</span>
      <ol className="f90-lens-steps">
        {CAM_LENS.map((d, i) => (
          <li key={d} className={i < 3 ? 'f90-lens-step f90-lens-step--intended' : 'f90-lens-step f90-lens-step--expressed'}>{d}</li>
        ))}
      </ol>
      <p className="f90-lens-s"><b>Intended and available:</b> Environment and Structure. <b>Actually expressed:</b> Implementation and People.</p>
      <figcaption className="ladder-cap">Begin with the purpose, not the person.</figcaption>
    </figure>
  );
}

// THE TWO WAYS INEXPERIENCED LEADERS LOSE THE ROOM + CAM: THE ORDER IN WHICH A LEADER LEARNS TO SEE
export default function F90Ground() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>The two ways inexperienced leaders lose the room</H3>
      <div className="triad-prose">
        <Body>Most developing leaders tend to fall toward one of two positions. Some try to become friends with everyone. They seek agreement, avoid difficult feedback and begin protecting relationships at the expense of the purpose. They may be liked, but the team soon learns that standards are negotiable and that discomfort has more authority than the outcome. Others become authoritarian. They mistake certainty for leadership, impose changes before understanding context and use their title to end conversations they should have been curious enough to continue.</Body>
        <Body>Neither position creates mature leadership. Friendship makes belonging the organising principle. Dictatorship makes control the organising principle. Leadership requires enough confidence to hold a standard and enough humility to recognise that useful information, expertise and leadership may come from anywhere in the system.</Body>
        <Body>I think of a business as a matrix. It is not a committee and it is not a democracy in which every decision remains open until everyone agrees. Someone is responsible for deciding, and once an appropriate decision has been made, the group needs to throw its weight behind it. Within that clarity, leadership should be functional. The person best equipped to lead a particular conversation, decision or piece of work should be able to lead it, whether or not they carry the most senior title. This is functional flow. The leader is not attached to being the person in front. They are attached to the best possible result and to increasing the capability of the system that produces it.</Body>
        <Hand v={['sm']}>Enough confidence to hold a standard. Enough humility to learn from anywhere.</Hand>
      </div>

      <H3 v={['left', 'rule']}>CAM: the order in which a leader learns to see</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>The <Link href="/ideas-models/critical-alignment-model">Critical Alignment Model</Link> is the backbone of the first 90 days because it prevents the leader from beginning at the easiest and most visible point, which is usually the behaviour of an individual. CAM begins with the purpose or intended outcome, then examines Environment, Structure, Implementation and People, in that order. Environment and Structure tell us what is intended and available. Implementation and People reveal what is actually expressed.</Body>
          <Body>The sequence matters. If the purpose is vague, people can work very hard in different directions and every disagreement will appear personal. If the environment rewards silence, you cannot reasonably blame people for failing to raise risks. If the structure contains contradictory priorities, missing resources or no criteria for success, effort will not reliably produce the desired result. If the implementation does not use the agreed processes, the written system is largely fictional. Only after those conditions have been understood and addressed can we make a fair assessment of a person’s performance.</Body>
        </div>
        <Lens />
      </div>
      <p className="f90-rule-label">A rule worth remembering</p>
      <p className="ideas-note triad-note">Until Environment, Structure and Implementation are in place, I have a leadership problem rather than a people problem.</p>
      <div className="triad-prose">
        <Body>This does not remove accountability from people. It makes accountability credible. Being uncompromising about standards is useful when the standard is clear, the conditions for success exist, the person has been trained to competence and the leader has not quietly tolerated an unwritten rule that contradicts everything on the wall. Rigour without context becomes punishment. Context without rigour becomes excuse-making. Leadership needs both.</Body>
      </div>
    </Part>
  );
}
