// Emotion Integration Technique Foundations' sales page, shown at /products/emotion-integration-technique-foundations in
// place of the generic product page (see app/products/[slug]/page.tsx). Composed from the program-page kit; copy and
// lists in content/eit-landing.ts.
import { Head } from '@/components/landing/ui';
import { BuyRow, Close, Crumbs, Hero, LeadCards, Lessons, NumberedPoints, Panel, Photo, Questions, RemiNote, Testimonials } from '@/components/program-landing/ui';
import { AVOIDING, EIT, FAQ, LESSONS, TESTIMONIALS, UNDERSTAND, WORKBOOK } from '@/content/eit-landing';

const buyLabel = `Get EIT Foundations • ${EIT.price}`;

export default function EitLanding() {
  return (
    <main className="kb stl pgl">
      <div className="kb-page">
        <Crumbs title={EIT.title} />

        <Hero id="eit-title" eyebrow="Emotion Integration Technique Foundations"
          title="You can explain why you do it. Why can’t you stop doing it?"
          includes="Five videos • Guided demonstration with Remi • Workbook"
          buy={<BuyRow program={EIT} label={buyLabel} note="One payment. Learn at your own pace." />}
          photo={<Photo name="about-hero" alt="Remi Pearson smiling, one arm raised, in a pink jacket" width={1024} height={1365} pos="50% 20%" />}>
          <p>You know you withdraw when things get personal. You know you stay busy when something hurts. You can explain where the pattern began and what you’re probably protecting.</p>
          <p>Then someone asks what you’re feeling, and you go blank. Or you know exactly what you feel, but immediately judge yourself for feeling it.</p>
          <p>Understanding yourself hasn’t necessarily made it easier to stay with yourself when something uncomfortable comes up.</p>
          <p>Emotion Integration Technique Foundations introduces a compassionate way to understand the feelings you avoid and the responses that help you keep them at a distance. Across five videos, I’ll explain the principles behind EIT, followed by a guided demonstration that shows how the approach works.</p>
        </Hero>

        <section className="stl-section" aria-labelledby="eit-avoid-h">
          <Head id="eit-avoid-h" star>What do you do when you don’t want to feel what you’re feeling?</Head>
          <div className="pgl-prose pgl-indent">
            <p>Sometimes it’s obvious. You leave the conversation, become defensive or insist you’re fine. At other times, it looks like being productive, staying positive or helping everybody else.</p>
            <p>You may barely notice the moment you move away from your own experience.</p>
          </div>
          <LeadCards items={AVOIDING} />
          <div className="pgl-prose pgl-indent"><p>These responses can be exhausting. They can also leave you feeling strangely distant from yourself, even after years of personal development.</p></div>
        </section>
      </div>

      <div className="stl-band pgl-band"><p>EIT begins with what you can honestly notice, including the frustration, numbness or “I don’t know”.</p></div>

      <div className="kb-page">
        <section className="stl-section pgl-first" aria-labelledby="eit-shaped-h">
          <Head id="eit-shaped-h">How much of your life is shaped by what you’re trying not to feel?</Head>
          <div className="pgl-prose">
            <p>You turn down an opportunity because you don’t want to feel exposed. You avoid a conversation because you can’t bear the discomfort it might bring. You keep a relationship on the surface because closeness asks something of you that feels difficult to meet.</p>
            <p>Avoidance may bring relief in the moment. Over time, it can narrow the experiences you feel able to have.</p>
            <p>Learning to be with an uncomfortable emotion can create room for a different choice. You might still feel nervous and consider the opportunity. You might acknowledge hurt and express what matters. You might hear someone’s sadness without immediately trying to make it disappear.</p>
            <p className="pgl-pull">That is the capacity this program introduces: becoming more able to stay connected with yourself while something difficult is present.</p>
          </div>
        </section>

        <section className="stl-section" aria-labelledby="eit-compassion-h">
          <Head id="eit-compassion-h">What if you can’t feel compassion for the part of you that struggles?</Head>
          <div className="pgl-prose">
            <p className="pgl-lede">This question sits at the heart of Emotion Integration Technique.</p>
            <p>Perhaps you understand why you withdraw, yet hate that you do it. Perhaps you know your numbness has served a protective purpose, but feel impatient with it. Being told to “have compassion for yourself” doesn’t help when compassion is precisely what you cannot access.</p>
            <p>I developed EIT to begin with that difficulty.</p>
            <p>The approach explores whether more room around an experience makes genuine compassion possible. From there, we gently consider how that compassion can be brought closer to the feelings and responses that have been difficult to meet.</p>
            <p>You don’t have to produce the right emotional word or pretend to feel kind towards yourself. An honest starting point gives us something to work with.</p>
          </div>
          <BuyRow program={EIT} label={buyLabel} note="Understand the principles, watch the guided demonstration and reflect with your workbook." />
        </section>

        <section className="stl-section" aria-labelledby="eit-understand-h">
          <Head id="eit-understand-h" star>What you’ll begin to understand about yourself</Head>
          <NumberedPoints items={UNDERSTAND} />
          <div className="pgl-prose pgl-indent"><p>Welcoming an emotion doesn’t require acting on every impulse. You can make room for anger and still take responsibility for how you speak. You can acknowledge loneliness while choosing thoughtfully how you seek connection.</p></div>
        </section>

        <Lessons lessons={LESSONS}
          still={<Photo name="about-convo-a" alt="Remi Pearson at a microphone in a book-lined room" width={1400} height={700} pos="70% 30%" />} />

        <section className="stl-section" aria-labelledby="eit-more-h">
          <h2 id="eit-more-h" className="sr-only">The guided demonstration and your workbook</h2>
          <div className="pgl-panels">
            <Panel id="eit-demo-h" title="See the principles come together in a guided demonstration">
              <p>The separate guided demonstration with me shows how the principles of EIT come together in practice.</p>
              <p>You’ll see the importance of beginning with what is actually present, recognising when compassion is unavailable and allowing enough room around the experience. The demonstration will help you understand the movement outward and inward, and why pace matters.</p>
              <p>You can watch without needing to produce an emotional response of your own. There is nothing to prove by feeling more, going deeper or having a particular result.</p>
              <p className="pgl-fine">The demonstration supports your understanding of EIT. It does not train you to facilitate the intervention with another person.</p>
            </Panel>
            <Panel id="eit-workbook-h" title="Your workbook">
              <p>Use the workbook to connect the principles with your own experience, with space to explore:</p>
              <ul className="pgl-dots">{WORKBOOK.map(w => <li key={w}>{w}</li>)}</ul>
              <p>You can work with everyday examples and leave anything you’re not ready to explore. The workbook is a place for honest reflection, without an expectation to uncover your deepest experience.</p>
            </Panel>
          </div>
          <BuyRow program={EIT} label={`Get the complete program • ${EIT.price}`} note="Five videos, a guided demonstration with Remi and your workbook." center />
        </section>

        <RemiNote photo={<Photo name="invite-teaching" alt="Remi Pearson teaching a full room" width={900} height={1200} pos="50% 30%" />}>
          <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of Emotion Integration Technique.</p>
          <p>I developed EIT through working with people who could explain themselves brilliantly but struggled to access what they felt. Some became frustrated when asked to notice an emotion. Others understood their protective responses, yet couldn’t feel compassion towards the part of themselves that was protecting them.</p>
          <p>I began paying closer attention to that difficulty. What happened if we worked with the distance someone needed, instead of asking them to move past it? What if numbness or frustration gave us the place to begin?</p>
          <p>This foundations program introduces the principles that grew from that work. I want you to understand more of your own experience without turning emotional awareness into another test you have to pass.</p>
        </RemiNote>

        <Testimonials items={TESTIMONIALS} />
        <Questions items={FAQ} />
      </div>

      <Close program={EIT} title="You don’t have to become better at explaining yourself before you begin." includes="Five videos • Guided demonstration • Workbook" label={buyLabel}>
        <p>Perhaps you already have the explanation. What remains difficult is being with the sadness, hurt or uncertainty when it appears.</p>
        <p>Begin with the experience you recognise, including whatever makes it hard to approach. I’ll introduce you to the principles of EIT and show you how compassion can become part of that relationship.</p>
      </Close>
    </main>
  );
}
