import { TruthLead, WaitlistCta } from './ui';

// THE PROBLEM WILL KEEP PRODUCING EVIDENCE — closing burgundy band
export default function RebelClosing() {
  return (
    <section className="ry-band ry-band--burgundy ry-why" aria-labelledby="closing-h">
      <h2 id="closing-h" className="ry-title ry-title--wide">The problem will keep producing evidence until <em>something essential changes.</em></h2>
      <div className="ry-prose ry-prose--center">
        <p>If your leadership team has reached an impasse, you probably do not need another explanation of why the situation is difficult.</p>
        <p>You need to discover whether you are solving the right problem, what the current system is protecting and which truth can create movement now.</p>
      </div>
      <WaitlistCta label="Join the Rebel Yell waitlist" align="center" />
      <TruthLead className="ry-hand--center" />
    </section>
  );
}
