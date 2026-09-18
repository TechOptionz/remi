const YES = [
  'You value depth more than performance.',
  'You want thought, challenge and genuine conversation.',
  'You need someone who can hold a room of highly capable people without shrinking, rescuing or taking over.',
  'You care about what happens in the room, not merely who appears on the program.',
];
const NO = [
  'You want a rehearsed motivational speech with no conversation.',
  'You need recurring middle-management training.',
  'You are looking for operational consulting or ongoing accountability.',
  'You want somebody to make a difficult subject sound conveniently simple.',
];

// FIT — group photo left, the two honest lists right, then the handwritten closing line
export default function FitCheck() {
  return (
    <section className="section section--tight section--flush" aria-label="Is this the right room?">
      <div className="fit">
        <img className="fit-photo" loading="lazy" decoding="async" src="/assets/photos/group-screens.webp" alt="Remi with a group of participants in front of screens full of online attendees" />
        <div className="fit-lists">
          <div>
            <h3><span className="underline">We'll probably be a wonderful fit if…</span></h3>
            <ul className="fit-list">{YES.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <h3><span className="underline">Probably not my room if…</span></h3>
            <ul className="fit-list">{NO.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </div>
      <p className="hand-quote hand-quote--center"><span className="underline">I don't need a perfect brief. I need enough truth to know whether we could create something worthwhile together.</span></p>
    </section>
  );
}
