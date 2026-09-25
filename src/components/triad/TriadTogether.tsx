import { Body, H3, Hand, Panel, Part } from '@/components/ideas/ui';
import { CENTRE_LINES } from '@/content/triad';

// HOW DO NEEDS, BOUNDARIES AND EMOTIONS WORK TOGETHER? — how the arms inform one another, then why worthy, lovable and enough sit at the centre
export default function TriadTogether() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>How do needs, boundaries and emotions work together?</H3>
      <div className="triad-prose">
        <Body>Needs, boundaries and emotions continually inform one another.</Body>
        <Body>An emotion may alert us to an unmet need. A boundary may protect our ability to respond to that need. Recognising the need may help us understand why the emotion has become so intense. Our emotional response may then show us whether the boundary feels safe, rigid, unclear or repeatedly violated.</Body>
        <Body>When one part of the triad is underdeveloped, we tend to compensate through protective strategies.</Body>
        <Body>We may recognise our feelings but have no language for what we need, leaving us flooded, confused or dependent on immediate relief. We may know what we need but struggle to communicate or protect it, leading to hints, resentment, overgiving or repeated self-abandonment. We may become highly skilled at setting boundaries while remaining emotionally unavailable, turning boundaries into walls rather than structures that support healthy connection.</Body>
        <Body>Some people have developed considerable strength in one or two areas. In my experience, however, most of us have meaningful work to do across all three.</Body>
        <Body>This is not evidence that we are broken. These gaps usually reflect what we were taught, what was modelled for us and what we had to do to remain safe or connected. People pleasing, perfectionism, withdrawal, control, hyper-independence, emotional shutdown and overfunctioning often began as intelligent attempts to protect us or get an important need met.</Body>
        <Hand v={['sm']}>They deserve understanding. They also need updating.</Hand>
      </div>

      <Panel tone="dark" className="centre-panel">
        <H3 className="panel-title centre-title">Why are ‘worthy, lovable and enough’ at the centre?</H3>
        <p className="panel-body">Worthiness is not a prize awarded once we have healed enough, achieved enough or behaved well enough. It becomes an experience we build through the way we relate to ourselves. Within the Self-Esteem Triad, being worthy, lovable and enough looks like this:</p>
        <ul className="centre-lines">{CENTRE_LINES.map(l => <li key={l}>{l}</li>)}</ul>
        <p className="panel-body">These are not affirmations intended to drown out doubt. They describe the inner coherence that begins to emerge when needs, boundaries and emotions are held together.</p>
        <p className="panel-body">The centre of the model is the felt result of repeatedly showing ourselves:</p>
        <p className="centre-quote">I know you. I can hear you. I will care for you. I will not keep leaving you to preserve a relationship, avoid a feeling or earn a place in the world.</p>
      </Panel>
    </Part>
  );
}
