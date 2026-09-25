import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

const TRIAD_ALT = 'The Self-Esteem Triad: a triangle whose three sides are Emotional Needs, Boundaries and Emotions, with Worthy, Lovable, Enough at the centre. Each side strengthens and protects the others.';

// SELF-ESTEEM IS SOMETHING WE LIVE — breadcrumb, title beside the triad (triangle only), the "I am" lines, why confidence is not the same thing, I-amness
export default function TriadIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">The Self-Esteem Triad</span>
      </nav>
      <p className="ideas-eyebrow">How Do You Build Self-Esteem That Lasts?</p>
      <PartHead n={1} title="The Self-Esteem Triad" aside={
          <figure className="triad-hero-fig">
            <Art name="triad-hero" alt={TRIAD_ALT} />
          </figure>
        }>
        <Body>Self-esteem is built through the relationship we have with ourselves. We strengthen it when we can recognise our needs and respond to them, remain ourselves while connected to other people, and stay present with our emotions without letting them decide everything we do. I call these three capacities the Self-Esteem Triad: needs, boundaries and emotions. At their centre is the lived experience of being worthy, lovable and enough.</Body>
        <Hand v={['underline']}>Self-esteem is something we live.</Hand>
        <Body>It is a grounded sense of:</Body>
        <p className="triad-iam">
          <span>I am.</span>
          <span>I know who I am.</span>
          <span>I know how to take care of myself.</span>
          <span>All of me is welcome here.</span>
        </p>
      </PartHead>
      <div className="triad-prose">
        <Body>We often talk about self-esteem as though it were a belief we could install through repetition. Think more positively. Stop doubting yourself. Tell yourself you are worthy. Act confident until you feel confident.</Body>
        <Body>Sometimes those things help. They can change how we perform, how we speak or what we are willing to attempt. Yet none of them necessarily changes the relationship we have with ourselves.</Body>
        <Body>Confidence can rise and fall according to the situation. You might be exceptionally confident in your work and deeply uncertain in an intimate relationship. You might speak comfortably to a room full of people, then abandon yourself the moment somebody you love becomes disappointed in you.</Body>
        <Body>Self-esteem sits underneath those fluctuations. It is quieter and more fundamental. It is the embodied experience of knowing yourself, remaining in relationship with yourself and being able to care for the person you actually are.</Body>
      </div>
      <p className="ideas-note triad-note">I call this I-amness.</p>
      <div className="triad-prose">
        <Body>It is the grounded feeling that I exist as a person in my own right. I can recognise what I need. I can remain present with what I feel. I know where I end and another person begins. I can belong to myself while being deeply connected to you.</Body>
        <Hand v={['sm']}>That is the foundation of the Self-Esteem Triad.</Hand>
      </div>
    </Part>
  );
}
