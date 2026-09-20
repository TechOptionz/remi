import { TruthLead } from './ui';

// WHY "REBEL YELL"? — burgundy band, centred, signed off in handwriting
export default function WhyRebelYell() {
  return (
    <section className="ry-band ry-band--burgundy ry-why" aria-labelledby="name-h">
      <h2 id="name-h" className="ry-title">Why <em>“Rebel Yell”?</em></h2>
      <div className="ry-prose ry-prose--center">
        <p className="ry-callout ry-callout--lg">Every organisation develops an approved version of reality.</p>
        <p className="ry-callout ry-callout--lg">Somebody eventually has to become willing to question it.</p>
        <p>A rebel yell is the moment the organisation stops cooperating with an explanation that no longer fits the evidence. It breaks the spell of “this is just how it is,” without replacing thought with noise, rebellion for its own sake or reckless confrontation.</p>
        <p>There is still judgment. There is care. There is calibration.</p>
        <p>And there is a point at which the truth needs to be allowed into the room.</p>
      </div>
      <TruthLead className="ry-hand--center" />
    </section>
  );
}
