// PART 03 — "What you'll learn to do": the seven capabilities beside the stacked stones, and the worked example
// "A friend cancels your plans again." beside the bowl.
import { BuyBtn, Head, Photo } from './ui';
import { CAPABILITIES, TRIAD_PRICE } from '@/content/triad-landing';

export default function TriadLearn() {
  return (
    <>
      <section className="stl-section stl-learn" aria-labelledby="stl-learn-h">
        <div>
          <Head id="stl-learn-h">What you’ll learn to do</Head>
          <p className="stl-intro">Seven practical capabilities for a steadier, more honest relationship with yourself and with others.</p>
          <ol className="stl-caps">
            {CAPABILITIES.map((c, i) => (
              <li key={c.title}>
                <span className="stl-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{c.title}</h3><p>{c.text}</p></div>
              </li>
            ))}
          </ol>
          <div className="stl-center"><BuyBtn>Get the Self-Esteem Triad • {TRIAD_PRICE}</BuyBtn></div>
        </div>
        <Photo name="stl-stones" width={314} height={780} className="stl-learn-photo" />
      </section>

      <section className="stl-example" aria-labelledby="stl-friend-h">
        <Photo name="stl-bowl" width={330} height={466} className="stl-example-photo" />
        <div className="stl-example-box">
          <Head id="stl-friend-h" star>A friend cancels your plans again.</Head>
          <p>You feel hurt, but you reply, ‘No worries,’ and spend the evening telling yourself you shouldn’t be so sensitive.</p>
          <p>Through the Triad, you can explore the hurt without making it a criticism of yourself. You might recognise that reliability and consideration matter to you. Then you can decide what you want to say, and whether you want to keep arranging your time around plans that are regularly cancelled.</p>
          <p>Your friend still gets to respond in their own way. You have a clearer way to remain present to yourself while finding out whether the relationship has room for what matters to you.</p>
        </div>
      </section>
    </>
  );
}
