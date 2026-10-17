// Deep State Repatterning™'s sales page, shown at /products/deep-state-repatterning in place of the generic product
// page (see app/products/[slug]/page.tsx). Composed from the program-page kit, with the Ideas & Models chapter's
// chain-of-pearls diagram in the gestalt section; copy and lists in content/dsr-landing.ts.
import { Head } from '@/components/landing/ui';
import { BuyRow, Close, Crumbs, Hero, LeadCards, Lessons, NumberedPoints, Panel, Photo, Questions, RemiNote, Testimonials } from '@/components/program-landing/ui';
import { PEARLS_ALT } from '@/content/dsr';
import { DSR, DSR_NAME, FAQ, LESSONS, OPPORTUNITY, OVER_IT, TESTIMONIALS, WORKBOOK } from '@/content/dsr-landing';

const buyLabel = `Get ${DSR_NAME} • ${DSR.price}`;

export default function DsrLanding() {
  return (
    <main className="kb stl pgl">
      <div className="kb-page">
        <Crumbs title={DSR_NAME} />

        <Hero id="dsr-title" eyebrow={DSR_NAME}
          title="You know it’s over. Why does it still have this much power over you?"
          includes="Five videos • Workbook • Guided DSR experience"
          buy={<BuyRow program={DSR} label={buyLabel} note="One payment. Explore the program at your own pace." />}
          photo={<Photo name="remi-pink-jacket" alt="Remi Pearson smiling, in a patterned pink jacket" width={1600} height={1067} pos="38% 30%" />}>
          <p>Someone questions your ability and you feel small again. A person you care about pulls away, and the rejection feels painfully familiar. An opportunity appears, but before you’ve considered it properly, you’re remembering the last time you put yourself out there.</p>
          <p>You may understand where these feelings come from. You may have talked about what happened and know that your life is different now. Yet something about that earlier experience still shapes what you expect, how you see yourself and what you allow yourself to do.</p>
          <p>Deep State Repatterning™ introduces a way of working with the emotional meaning attached to past experiences. Through five videos and a guided DSR experience with me, you’ll explore your relationship with the past and the possibility of responding differently in the present.</p>
        </Hero>

        <section className="stl-section" aria-labelledby="dsr-over-h">
          <Head id="dsr-over-h">How many times have you told yourself you should be over it by now?</Head>
          <div className="pgl-prose">
            <p>Perhaps you’ve made sense of what happened. You can explain why someone behaved as they did. You know you were younger then, had fewer choices or couldn’t possibly have known what you know today.</p>
            <p className="pgl-lede">But when something touches that familiar place, the explanation can feel a long way away.</p>
          </div>
          <LeadCards items={OVER_IT} />
          <div className="pgl-prose"><p>The frustration can be considerable. You’re living a different life, with more experience and more choices, while an old meaning continues to influence what feels possible.</p></div>
        </section>

        <section className="stl-section" aria-labelledby="dsr-mean-h">
          <Head id="dsr-mean-h" star>What did that experience come to mean about you?</Head>
          <div className="pgl-prose pgl-indent">
            <p>A painful experience can leave you with more than a memory of what happened. You may also carry a conclusion about your worth, your ability or what to expect from other people.</p>
            <p>Perhaps being laughed at became a reason to stay quiet. Being let down became a reason to expect disappointment. A moment when you had little power became connected with the feeling that your choices wouldn’t matter.</p>
            <p>In DSR, we explore those meanings and the way you represent the experiences connected with them. We use the idea of a gestalt: memories linked by a familiar emotional theme, like pearls on a string. It offers a way to understand why something happening today can seem to carry so much history.</p>
          </div>
          <figure className="pgl-figure">
            <img src="/assets/ideas/dsr-pearls.webp" alt={PEARLS_ALT} width={1536} height={1024} loading="lazy" decoding="async" />
          </figure>
          <div className="pgl-prose pgl-indent"><p className="pgl-pull">The intention is to change your relationship with the emotional meaning of an experience. You can remember what happened while exploring whether it still needs to define what you expect from yourself or your future.</p></div>
        </section>
      </div>

      <div className="stl-band pgl-band"><h2 id="dsr-approach-h">Understand the approach. Then experience it with me.</h2></div>

      <div className="kb-page">
        <section className="stl-section pgl-first" aria-labelledby="dsr-approach-h">
          <div className="pgl-prose">
            <p>I created Deep State Repatterning™ drawing on my background in neuro-linguistic programming and timeline work. This program introduces the ideas in ordinary language before I guide you through an introductory DSR experience.</p>
          </div>
          <h3 className="pgl-subhead">You’ll have the opportunity to:</h3>
          <NumberedPoints items={OPPORTUNITY} inline />
          <div className="pgl-prose"><p>You’re participating in your own introductory experience. No previous knowledge of NLP or timeline work is needed.</p></div>
          <BuyRow program={DSR} label={buyLabel} note="Includes all five videos, the workbook and guided DSR experience." center />
        </section>

        <Lessons lessons={LESSONS}
          still={<Photo name="band-4" alt="Remi Pearson teaching online, in front of screens of participants" width={900} height={675} pos="50% 40%" />} />

        <section className="stl-section" aria-labelledby="dsr-more-h">
          <h2 id="dsr-more-h" className="sr-only">Your guided DSR experience and your workbook</h2>
          <div className="pgl-panels">
            <Panel id="dsr-guided-h" title="Your guided DSR experience with Remi">
              <p>Once you’ve worked through the videos, I’ll guide you through an introductory experience of Deep State Repatterning™.</p>
              <p>You’ll explore your symbolic timeline and your relationship with a manageable past experience, with invitations to gain perspective and discover understanding that is meaningful to you.</p>
              <p>There’s no requirement to visualise perfectly or have a dramatic emotional release. You remain able to pause or stop, and you won’t be asked to treat an image or impression as proof of something that happened.</p>
              <p>This is where you experience the approach for yourself, then take time to notice what it was like and what you want to carry into your everyday life.</p>
            </Panel>
            <Panel id="dsr-workbook-h" title="Your workbook">
              <p>The workbook accompanies the videos and guided experience, giving you space to:</p>
              <ul className="pgl-dots">{WORKBOOK.map(w => <li key={w}>{w}</li>)}</ul>
              <p>You don’t have to write out your life story. The workbook helps you stay focused on the experience you’ve chosen and what you’re discovering.</p>
            </Panel>
          </div>
          <BuyRow program={DSR} label={`Get the complete program • ${DSR.price}`} note="Five videos, workbook and guided DSR experience. One payment." center />
        </section>

        <RemiNote photo={<Photo name="about-rel-b" alt="Remi Pearson at a microphone in a book-lined room" width={1400} height={700} pos="60% 30%" />}>
          <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of Deep State Repatterning™. A question that has occupied much of my working life is why we can understand an experience so clearly and still feel its influence in moments when we want to respond differently.</p>
          <p>My training in NLP and work with symbolic timelines helped shape DSR. Within this approach, we explore how a person represents an experience, the meaning attached to it and what becomes available when their perspective changes.</p>
          <p>I’ve created this introduction so you can understand the approach and experience it with my guidance. Your own response matters. You don’t need to find a gift in something painful, forgive someone or report a change simply because you think you should.</p>
        </RemiNote>

        <Testimonials items={TESTIMONIALS} />
        <Questions items={FAQ} />
      </div>

      <Close program={DSR} name={DSR_NAME} title="What would you like to feel more able to do now?" includes="Five videos • Workbook • Guided DSR experience" label={buyLabel}>
        <p>Speak without immediately expecting humiliation. Consider an opportunity without treating an earlier disappointment as a prediction. Let yourself discover what this relationship is like, while remaining attentive to what is actually happening.</p>
        <p>Begin with one familiar pattern and something you would like to experience differently. I’ll introduce you to DSR and guide you through an experience of working with it.</p>
      </Close>
    </main>
  );
}
