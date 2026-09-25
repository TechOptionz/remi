import Link from 'next/link';
import { Body, Box, H3, Panel, Part } from '@/components/ideas/ui';
import { HELD_WORK } from '@/content/dsr';

// WHAT DOES SELF-FORGIVENESS MEAN WHEN SOMEONE ELSE CAUSED THE HARM? + HOW DOES DSR WORK ALONGSIDE PARTS WORK AND EMOTIONAL INTEGRATION?
export default function DsrForgiveness() {
  return (
    <Part n={5}>
      <Panel tone="dark" className="centre-panel real-panel">
        <H3 className="panel-title centre-title">What does self-forgiveness mean when someone else caused the harm?</H3>
        <p className="panel-body">Self-forgiveness is essential within the model, and it is often misunderstood. It does not mean the person caused what happened. In work involving childhood sexual abuse, the opposite recognition is frequently required: I could not possibly have prevented an adult from doing what they chose to do. A child may carry responsibility because personalising the event created an illusion of control. If it was my fault, perhaps I can become good enough, quiet enough, useful enough or invisible enough to stop it happening again. The strategy is tragic, but it is not foolish. It was the mind trying to survive an impossible experience.</p>
        <p className="panel-body">Forgiving the self means releasing the charge of imagined responsibility, the shame of having been vulnerable, and sometimes the judgement of the protective strategies developed afterwards. It allows compassion to enter the memory without rewriting the facts.</p>
        <p className="centre-quote">Forgiveness of another person may emerge, but it is never a demand to minimise harm, reconcile, remove boundaries or abandon accountability.</p>
      </Panel>

      <H3 v={['left', 'rule']}>How does Deep State Repatterning™ work alongside parts work and emotional integration?</H3>
      <div className="triad-prose">
        <Body>Deep State Repatterning™ is a distinct intervention, but it does not sit in isolation from the rest of my work. When a person returns symbolically to an early event, a younger part may need attention.</Body>
      </div>
      <div className="held-grid">
        {HELD_WORK.map(w => (
          <Box as="article" className="held" key={w.title}>
            <h4>{w.href ? <Link href={w.href}>{w.title}</Link> : w.title}</h4>
            <p>{w.text}</p>
          </Box>
        ))}
      </div>
      <div className="triad-prose">
        <Body>These are not techniques thrown together for effect. Each offers a different way of understanding what is occurring at the same moment. DSR™ provides the architecture of symbolic time, depth, safety and repatterning. The other models help determine what work needs to happen once the relevant experience is available. A skilled practitioner does not drag a person through a script. They understand the purpose of every element well enough to respond to the person in front of them.</Body>
        <Body>This was central to my work with people who had experienced childhood sexual abuse. The intervention was never simply about making a memory feel less vivid. The deeper work was often the recovery of self-trust. Parts that had carried fear, shame, vigilance or self-blame needed to be met rather than overridden. The person needed to discover, at the level where the injury had been organised, that their perceptions belonged to them, their boundaries were real, their vulnerability was never consent, and their adult self could now protect what the child could not.</Body>
      </div>
    </Part>
  );
}
