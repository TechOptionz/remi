// Holding Space Without Rescuing or Disappearing's sales page, shown at
// /products/holding-space-without-rescuing-or-disappearing in place of the generic product page (see
// app/products/[slug]/page.tsx). Composed from the program-page kit; copy and lists in content/hs-landing.ts.
import { BuyBtn, Head } from '@/components/landing/ui';
import { BuyRow, Close, Crumbs, Hero, LeadCards, Lessons, NumberedPoints, Panel, Photo, Questions, RemiNote, Testimonials } from '@/components/program-landing/ui';
import { FAQ, HS, INCLUDES, LESSONS, PRACTISE, RECOGNISE, TESTIMONIALS, WORKBOOK } from '@/content/hs-landing';

const yesLabel = `Yes, I want to learn this · ${HS.price}`;

export default function HsLanding() {
  return (
    <main className="kb stl pgl">
      <div className="kb-page">
        <Crumbs title={HS.title} />

        <Hero id="hs-title" eyebrow="Holding Space Without Rescuing or Disappearing"
          title="When someone you love is upset, do you rush to fix it … or wish you could escape?"
          includes={`Five videos + companion workbook · ${HS.price}`}
          buy={<BuyRow program={HS} label={yesLabel} note="A self-paced program for people who want deeper connections and a more honest, sustainable way to be there for others." />}
          photo={<Photo name="about-remi" alt="Remi Pearson smiling, in a cream jumper" width={394} height={900} pos="50% 30%" />}>
          <p>You want to help. But sometimes your advice lands badly, your reassurance closes the conversation down, or you find yourself getting defensive when you meant to be supportive. Other times, you simply don’t know what to say, and the distance between you grows.</p>
          <p>Learn how to stay with a difficult conversation, understand what someone needs from you and offer support without taking responsibility for making their feelings go away.</p>
        </Hero>

        <section className="stl-section" aria-labelledby="hs-wrong-h">
          <Head id="hs-wrong-h">You care about them. So why do these conversations keep going wrong?</Head>
          <div className="pgl-prose">
            <p>Someone opens up, and you can already see what they should do. You offer a solution, perhaps several, and feel confused when they become frustrated. You were trying to help.</p>
            <p>Or they tell you something has hurt them, and you begin explaining why it happened. By the time you have finished defending your intentions, the thing they wanted you to understand has almost disappeared from the conversation.</p>
            <p>Perhaps your response is quieter. You nod and say very little, but inside you are waiting for it to be over. You avoid asking how they are because you’re not sure you can manage the answer.</p>
          </div>
          <h3 className="pgl-subhead">You might recognise yourself here:</h3>
          <LeadCards items={RECOGNISE} />
          <div className="pgl-prose"><p>These responses can happen in loving relationships. Caring about someone doesn’t automatically give us the capacity to be with everything they feel, particularly when their experience brings up something uncomfortable in us.</p></div>
        </section>

        <section className="stl-section" aria-labelledby="hs-price-h">
          <Head id="hs-price-h" star>The price we pay when we keep missing each other</Head>
          <div className="pgl-prose pgl-indent">
            <p className="pgl-lede">A conversation can end politely and still leave someone feeling alone.</p>
            <p>They shared something painful, and received a solution they weren’t ready for. They tried to explain their disappointment, and ended up reassuring you that you’re a good person. They wanted a little company in their uncertainty, and felt pushed towards an answer.</p>
            <p>Meanwhile, you may leave feeling unappreciated. You gave your time, tried to help and somehow got it wrong again.</p>
            <p>When this becomes familiar, people may begin editing what they share. Certain subjects become too difficult. You can still talk about the day, organise dinner and get everything done, while knowing there are parts of your experience that rarely make it into the relationship.</p>
          </div>
        </section>
      </div>

      <div className="stl-band pgl-band"><p>If you want deeper connections, how you receive someone matters.</p></div>

      <div className="kb-page">
        <section className="stl-section pgl-first" aria-labelledby="hs-involve-h">
          <div className="pgl-prose"><p className="pgl-pull">Holding space gives you something to practise in those moments. It helps you become more available to the person in front of you, while remaining aware of your own feelings, limits and responsibilities.</p></div>
          <div className="pgl-gap"><Head id="hs-involve-h">What does holding space actually involve?</Head></div>
          <div className="pgl-prose">
            <p>Holding space means giving someone room to have their experience while you remain attentive and responsive. You listen closely enough to discover what they mean, rather than assuming you already know. You allow some uncertainty without immediately trying to remove it.</p>
            <p>That can sound simple until someone is disappointed in you, making a choice you disagree with or feeling something you desperately want to make better.</p>
            <p>This is where the work becomes personal. Can you notice the urge to take over without automatically following it? Can you acknowledge their hurt before explaining yourself? Can you remain interested when there is no quick solution?</p>
            <p>You also remain a person in the conversation. Your perspective matters. Your capacity matters. Holding space includes knowing what you can offer and communicating that honestly.</p>
            <p>Holding Space Without Rescuing or Disappearing introduces these skills through five videos and a companion workbook, with examples you can recognise and bring into your own relationships.</p>
          </div>
          <BuyRow program={HS} label={`Get the five videos + workbook · ${HS.price}`} />
        </section>

        <section className="stl-section" aria-labelledby="hs-different-h">
          <Head id="hs-different-h" star>What could become different in your conversations?</Head>
          <h3 className="pgl-subhead pgl-indent">This program will help you begin practising how to:</h3>
          <NumberedPoints items={PRACTISE} />
          <div className="pgl-prose pgl-indent"><p>You do not have to get every response right. Learning to notice what happened and return with genuine interest gives you somewhere to begin.</p></div>
        </section>

        <Lessons lessons={LESSONS} title="Five videos to help you be there when it matters" take="What you’ll take away:"
          still={<Photo name="about-convo-b" alt="Remi Pearson in conversation on a television set" width={1400} height={700} pos="70% 40%" />} />
        <BuyRow program={HS} label={`Start learning with Remi · ${HS.price}`} center />

        <section className="stl-section" aria-labelledby="hs-more-h">
          <h2 id="hs-more-h" className="sr-only">The workbook, and who this is for</h2>
          <div className="pgl-panels">
            <Panel id="hs-workbook-h" title="A workbook to bring this into your own life">
              <p>It is easy to recognise yourself in a video and then respond in exactly the same way when a familiar conversation becomes difficult. The workbook gives you a place to slow down and look at what is happening in your relationships.</p>
              <p>Use it alongside the videos to:</p>
              <ul className="pgl-dots">{WORKBOOK.map(w => <li key={w}>{w}</li>)}</ul>
              <p>The aim is to develop your understanding so the words you use are your own.</p>
            </Panel>
            <Panel id="hs-for-h" title="This is for you if you want more depth in your relationships">
              <p>Perhaps you want your partner to feel able to tell you something difficult. You want to be a friend who can hear pain without immediately searching for a positive. You want to support an adult child without directing their life, or listen to someone at work without turning every concern into a task you must solve.</p>
              <p>You may already be the person everyone comes to, and need a way to care that doesn’t leave you carrying everything afterwards.</p>
              <p>Or you may recognise that you often retreat when people need you emotionally, even though connection matters to you.</p>
              <p>You can begin learning this from wherever you honestly are. You don’t need a coaching background or knowledge of psychological terminology.</p>
            </Panel>
          </div>
        </section>

        <RemiNote photo={<Photo name="about-rel-a" alt="Remi Pearson greeting a member of the audience" width={1400} height={700} pos="35% 40%" />}>
          <p>Over the years, I’ve spent a great deal of time with people who are trying to say something they don’t yet have clear words for. Those moments ask something of us. It can be uncomfortable to listen when we cannot resolve the situation, especially when we care deeply about the person.</p>
          <p>I’m interested in what happens when we become a little more willing to stay curious. When we notice that the answer we are about to offer might be arriving because we want relief from the uncertainty. When we can hear something difficult without immediately making the conversation about our intentions.</p>
          <p>I also care about the person doing the listening. Being available to others cannot depend on repeatedly overriding yourself. There needs to be room for your honesty and your limits, alongside your willingness to remain connected.</p>
          <p>That is what I want to help you explore in this program. We all miss each other sometimes. There is something worth learning about how we find our way back.</p>
        </RemiNote>

        <Testimonials items={TESTIMONIALS} />

        <section className="stl-section" aria-labelledby="hs-includes-h">
          <div className="pgl-offer">
            <Head id="hs-includes-h" star>Your program includes</Head>
            <ul className="pgl-dots">{INCLUDES.map(i => <li key={i}>{i}</li>)}</ul>
            <p className="pgl-offer-price">{HS.price} · One payment</p>
            <BuyBtn href={HS.ctaHref}>{`Get Holding Space Without Rescuing or Disappearing · ${HS.price}`}</BuyBtn>
          </div>
        </section>

        <Questions items={FAQ} title="A few questions you might have" />
      </div>

      <Close program={HS} title="When someone opens up to you, what happens next matters" sub="Five videos with Remi Pearson + companion workbook" terms="One payment · Self-paced" label={yesLabel}>
        <p>You may not be able to change what they are facing. You can learn to notice when you are moving too quickly, ask a question that helps you understand and leave room for something you haven’t heard yet.</p>
        <p>Over time, those are the moments in which a relationship can become more honest. Someone gets to finish what they were trying to say. You discover that you don’t have to supply every answer. A difficult conversation has a little more room for both of you.</p>
        <p>If you want to become more capable of being there, this is a place to begin.</p>
      </Close>
    </main>
  );
}
