// PART 02 — "You know what you want to say. Then someone looks disappointed.", the three parts of the Triad, and the
// rust "Worthy. Lovable. Enough." band.
import Icon from '@/components/shared/Icon';
import { Head, Photo } from './ui';
import { TRIAD_PARTS } from '@/content/triad-landing';

export default function TriadProblem() {
  return (
    <>
      <section className="stl-section stl-split" aria-labelledby="stl-know-h">
        <div className="stl-split-copy">
          <Head id="stl-know-h">You know what you want to say. Then someone looks disappointed.</Head>
          <p>You soften it. Explain it again. Agree to something you were certain you didn’t want to do. Later, you’re lying in bed replaying the conversation, wondering why being honest felt so difficult when you knew perfectly well what mattered to you.</p>
          <p>Perhaps you can make difficult decisions at work, yet struggle to ask someone you love for more care. Perhaps you notice everybody else’s mood before you’ve checked in with your own. Or you keep saying ‘It’s fine’ until resentment gives you the force to admit that it hasn’t been fine for quite some time.</p>
        </div>
        <Photo name="stl-ribbon" width={494} height={615} className="stl-split-photo" />
      </section>

      <section className="stl-section" aria-labelledby="stl-together-h">
        <Head id="stl-together-h" star>When your emotions, needs and boundaries work together</Head>
        <p className="stl-intro stl-indent">I created the Self-Esteem Triad because I kept meeting intelligent, committed people who understood their patterns and still found themselves repeating them. They knew boundaries mattered. They could explain their childhood. Yet when connection felt uncertain, what they knew became difficult to live.</p>
        <ul className="stl-parts">
          {TRIAD_PARTS.map(p => (
            <li key={p.title}>
              <span className="stl-parts-icon"><Icon name={p.icon} size={30} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="stl-band">
        <p className="stl-band-title">Worthy. Lovable. Enough.</p>
        <p>Practise treating yourself as someone whose experience matters.</p>
      </div>
    </>
  );
}
