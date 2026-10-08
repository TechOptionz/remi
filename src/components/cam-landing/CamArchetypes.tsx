// PART 03 — "Which part of leadership do you naturally bring?": the four archetypes beside the columns and the book; then
// "What you'll be able to do" and the CTA row with the price.
import { BuyBtn, Head, Photo, Price } from './ui';
import { ABILITIES, ARCHETYPES } from '@/content/cam-landing';

export default function CamArchetypes() {
  return (
    <>
      <section className="stl-section stl-split cml-arch-split" aria-labelledby="cml-bring-h">
        <div className="stl-split-copy">
          <Head id="cml-bring-h">Which part of leadership do you naturally bring?</Head>
          <p className="cml-lede">Some people see where an organisation needs to go. Some design the framework. Others get things moving, while others notice what is happening between people.</p>
          <ul className="cml-archetypes">
            {ARCHETYPES.map(a => (
              <li key={a.name}>
                <Photo name={a.art} width={110} height={156} className="cml-archetype-art" />
                <div>
                  <h3>{a.name} <span>| {a.dimension}</span></h3>
                  <p>{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>These archetypes help you notice which contributions are present and which need strengthening. Assess what the situation needs beyond your preferred response.</p>
        </div>
        <Photo name="cml-columns" width={423} height={965} className="stl-split-photo" />
      </section>

      <section className="stl-section" aria-labelledby="cml-able-h">
        <Head id="cml-able-h" star>What you’ll be able to do</Head>
        <ul className="cml-abilities">
          {ABILITIES.map(a => <li key={a}>{a}</li>)}
        </ul>
        <div className="cml-cta-row">
          <BuyBtn>Learn to assess the whole situation</BuyBtn>
          <Price compact />
        </div>
      </section>
    </>
  );
}
