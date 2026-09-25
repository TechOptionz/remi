import { Body, H3, Hand, Panel, Part } from '@/components/ideas/ui';

// WHAT IF THE EXTERNAL PROBLEM IS REAL? — illness, abuse and the care this distinction needs
export default function SafeReal() {
  return (
    <Part n={5}>
      <Panel tone="dark" className="centre-panel real-panel">
        <H3 className="panel-title centre-title">What if the external problem is real?</H3>
        <p className="panel-body">This distinction needs particular care when we are talking about illness, childhood abuse or other experiences a person did not choose.</p>
        <p className="panel-body">Someone living with cancer has a real illness. Someone who was abused as a child experienced real harm. The invitation to explore agency must never become an implication that they created what happened, or that changing their attitude will make the external difficulty disappear.</p>
        <p className="panel-body">What I am interested in is whether there is any room to care for ourselves within what is happening. Can we claim something for ourselves while life is difficult? Can we receive love, recognise a need, ask for help or experience a moment of joy without requiring the entire situation to be resolved first?</p>
        <p className="panel-body">Even that can be a big ask. If someone hears it as “Now I am supposed to feel joy while I am going through this”, we have added another burden. That is not the intent.</p>
        <p className="panel-body">The invitation needs to remain small enough and compassionate enough to be useful. Perhaps today there is no access to joy. Perhaps what is available is the possibility of feeling frightened without criticising ourselves for being frightened. Perhaps we can let someone sit beside us, or say honestly that we are having a hard day.</p>
        <p className="centre-quote">Agency includes how we respond to our own limits. There is no requirement to turn pain into a positive experience before we deserve care.</p>
      </Panel>
    </Part>
  );
}
