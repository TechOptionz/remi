// FIT
export default function FitCheck() {
  return (
    <section className="section" aria-labelledby="fit-h">
      <p className="eyebrow">Is this the right room?</p>
      <h2 id="fit-h" className="h2">A quick, honest fit check</h2>
      <div className="fit-lists">
        <div>
          <h3>We'll probably be a wonderful fit if…</h3>
          <ul className="fit-list fit-list--yes">
            <li>You value depth more than performance.</li>
            <li>You want thought, challenge and genuine conversation.</li>
            <li>You need someone who can hold a room of highly capable people without shrinking, rescuing or taking over.</li>
            <li>You care about what happens in the room, not merely who appears on the program.</li>
          </ul>
        </div>
        <div>
          <h3>Probably not my room if…</h3>
          <ul className="fit-list fit-list--no">
            <li>You want a rehearsed motivational speech with no conversation.</li>
            <li>You need recurring middle-management training.</li>
            <li>You are looking for operational consulting or ongoing accountability.</li>
            <li>You want somebody to make a difficult subject sound conveniently simple.</li>
          </ul>
        </div>
      </div>
      <p className="pull-quote pull-quote--center">I don't need a perfect brief. I need enough truth to know whether we could create something worthwhile together.</p>
    </section>
  );
}
