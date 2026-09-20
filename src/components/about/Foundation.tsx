const CAUSES = ['Animals Asia', 'Moon Bear Rescue', 'People and communities experiencing profound hardship'];

// SUCCESS WAS ALWAYS MEANT TO TRAVEL FURTHER THAN ME — intro with group photo, then the giving statement
export default function Foundation() {
  return (
    <section className="section section--tight" aria-labelledby="foundation-h">
      <div className="part-head">
        <div>
          <h2 id="foundation-h" className="part-title"><span className="underline">Success was always meant to travel further than me</span></h2>
          <p className="part-lede">As The Coaching Institute grew, I became increasingly aware that the opportunity to pursue a meaningful life was not equally available to everyone. So I founded The Coaching Institute Foundation.</p>
        </div>
        <img className="part-photo" loading="lazy" decoding="async" src="/assets/photos/about-foundation.webp" alt="Remi, arms wide, in front of screens full of online attendees" />
      </div>
      <div className="giving centered">
        <h3 className="part-title part-title--sm part-title--accent">Millions of dollars contributed to causes <span className="underline">around the world</span></h3>
        <p className="part-lede part-lede--center">Through my personal giving, the Foundation and the generosity of our community, we supported causes that were confronting, overlooked or unlikely to attract fashionable attention.</p>
        <ul className="dot-list">{CAUSES.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  );
}
