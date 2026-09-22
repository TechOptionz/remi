import { Body, H3, Hand, Part } from '@/components/ideas/ui';

// WHEN INSIGHT DOES NOT CREATE ACCESS — parts work, the limit of asking for compassion, the part that would not step aside
export default function EitInsight() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>When insight does not create access</H3>
      <div className="triad-prose">
        <Body>Internal Family Systems gave us a powerful way of recognising that our apparently difficult behaviours are often organised by protective parts. A part withdraws, intellectualises, becomes angry, stays busy, forgets, controls, pleases or goes numb because at some point that strategy helped the system manage something it could not safely hold. This changed the conversation from what is wrong with you to what is this trying to do for you.</Body>
        <Body>Yet the healing movement in parts work usually depends on some access to curiosity or compassion. Many clients can understand that instruction intellectually. They can see that a part is protective and still feel irritated by it, ashamed of it or desperate to make it disappear. If compassion is unavailable, repeatedly asking for compassion becomes another demand. The client is left with the original protection and a fresh piece of evidence that they are somehow doing healing badly.</Body>
        <Body>I encountered this very clearly with one client when I used the familiar parts-work invitation: could the dissociative part step aside? Another part appeared. I asked whether that part would step aside, and another appeared behind it. The process continued, part after part, while the dissociation remained. Eventually the obvious became unavoidable. Dissociation was not interrupting the work. Dissociation was the central protective strategy. Trying to move it out of the way made no sense.</Body>
      </div>
      <p className="ideas-note triad-note">So I stopped trying to defeat it and began working with it.</p>
    </Part>
  );
}
