import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

// SAFE PROBLEMS, RISKY TRUTHS — breadcrumb, title, the client across the table, how the distinction came about
export default function SafeIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Safe Problems, Risky Truths</span>
      </nav>
      <p className="ideas-eyebrow">Human foundations · An identification model</p>
      <PartHead n={1} title="Safe Problems, Risky Truths" aside={<Art name="p3-mtn" className="ideas-art--figure" />}>
        <Hand v={['underline']}>What the problem we keep trying to solve may be protecting us from.</Hand>
        <Body>Someone sits across from me and explains, often with considerable accuracy, what is wrong with their partner. They are inconsistent. They avoid difficult conversations. They make promises and fail to keep them. If they would finally take responsibility, the person telling me this could stop feeling so anxious and get on with enjoying the relationship.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>Sometimes every word of that account is true. The partner really does need to behave differently. But as we talk, another question begins to emerge: what happens to this person if their partner never changes? Where does that leave their capacity to care for themselves, recognise what they need, or decide what they are willing to live with?</Body>
        <Body>I began developing the distinction between safe and risky problems through working with clients individually and doing intervention work with audiences. I kept noticing how often people located the problem somewhere outside their own influence. It was their past. It was someone else’s behaviour. It was a situation that should never have happened, or circumstances that refused to cooperate. Their explanations were frequently understandable, and sometimes impossible to dispute. Yet the explanation could also leave them with very little room to move.</Body>
        <Body>You cannot change what happened in your childhood. You cannot make another person become accountable, emotionally available or willing to love you well. There are circumstances you can influence and circumstances you cannot. If your relationship with yourself has to wait until all of that is resolved, you may find yourself waiting a very long time.</Body>
        <Body>The question that interested me was where some agency remained, even when the difficulty was real. Over time, I came to understand that the risky problem was more accurately a risky truth: something about our own experience that we had not yet felt able to meet.</Body>
      </div>
    </Part>
  );
}
