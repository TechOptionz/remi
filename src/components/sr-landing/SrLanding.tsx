// Self-Regulation When It Matters' sales page, shown at /products/self-regulation-when-it-matters in place of the
// generic product page (see app/products/[slug]/page.tsx). Composed from the program-page kit; copy and lists in
// content/sr-landing.ts.
import { Head } from '@/components/landing/ui';
import { BuyRow, Close, Crumbs, Hero, LeadCards, Lessons, NumberedPoints, Panel, Photo, Questions, RemiNote, Testimonials } from '@/components/program-landing/ui';
import { FAMILIAR, FAQ, LEARNING, LESSONS, SR, TESTIMONIALS } from '@/content/sr-landing';

const buyLabel = `Get Self-Regulation When It Matters • ${SR.price}`;

export default function SrLanding() {
  return (
    <main className="kb stl pgl">
      <div className="kb-page">
        <Crumbs title={SR.title} />

        <Hero id="sr-title" eyebrow="Self-Regulation When It Matters"
          title="Do you push harder, shut down or disappear when things get difficult?"
          includes="Five videos • Workbook • Guided meditation"
          buy={<BuyRow program={SR} label={buyLabel} note="One payment. Learn and practise at your own pace." />}
          photo={<Photo name="story" alt="Remi Pearson smiling, in a patterned pink jacket" width={1040} height={694} pos="30% 30%" />}>
          <p>Perhaps you need to settle it right now. You keep explaining, defending yourself or demanding an answer, even as the conversation gets worse. Or you go the other way. Your mind goes blank, you stop responding and you want everyone to leave you alone.</p>
          <p>Afterwards, you’re left with what happened … and a conversation that still needs to be had.</p>
          <p>Self-Regulation When It Matters helps you recognise what happens in your body as intensity builds and practise ways to regain enough steadiness to respond more deliberately.</p>
          <p>Through five videos, a workbook and a guided meditation, you’ll explore what helps when you’re overwhelmed, defensive or struggling to stay present.</p>
        </Hero>

        <section className="stl-section" aria-labelledby="sr-respond-h">
          <Head id="sr-respond-h">You know how you’d like to respond. Then something happens.</Head>
          <div className="pgl-prose">
            <p>Someone questions your decision. A conversation takes a turn you weren’t expecting. You’re already stretched, and one more demand feels like too much.</p>
            <p>You may know that pushing will make things worse. You may want to listen. But in that moment, defending yourself, getting an answer or getting away can feel much more urgent.</p>
          </div>
          <h3 className="pgl-subhead">Does any of this sound familiar?</h3>
          <LeadCards items={FAMILIAR} />
          <div className="pgl-prose"><p>These responses can leave people around you feeling pushed away or unable to reach you. They can also leave you exhausted, misunderstood and increasingly reluctant to face the next conversation.</p></div>
        </section>
      </div>

      <div className="stl-band pgl-band"><p>This program gives you a practical place to begin working with what happens in those moments.</p></div>

      <div className="kb-page">
        <section className="stl-section pgl-first" aria-labelledby="sr-intensity-h">
          <Head id="sr-intensity-h" star>Learn to recognise the intensity before it takes over the conversation.</Head>
          <div className="pgl-prose pgl-indent">
            <p>You might first notice a tight jaw, heat in your face or a powerful urge to interrupt. At other times, you become foggy, distant or unable to find words. Learning your own signals gives you something more useful to work with than the instruction to “just calm down”.</p>
            <p>We’ll draw on polyvagal theory and body-based practices to explore different responses to pressure. You’ll learn the language, connect it with your own experience and try practices that help you discover what supports you.</p>
          </div>
          <h3 className="pgl-subhead pgl-indent">You’ll begin learning how to:</h3>
          <NumberedPoints items={LEARNING} inline />
          <div className="pgl-prose pgl-indent"><p>You can still feel angry, hurt or anxious while learning to respond with greater care. The aim is to become more able to participate in what matters, even when it’s uncomfortable.</p></div>
          <BuyRow program={SR} label={buyLabel} note="All five videos, the workbook and guided meditation are included." center />
        </section>

        <Lessons lessons={LESSONS}
          still={<Photo name="frame-1" alt="Remi Pearson teaching, hands raised as she makes a point" width={720} height={397} pos="45% 30%" />} />

        <section className="stl-section" aria-labelledby="sr-between-h">
          <Head id="sr-between-h">Something to work with between the videos.</Head>
          <div className="pgl-panels">
            <Panel id="sr-workbook-h" title="Your workbook">
              <p>Use the workbook to connect the teaching with your own life. You’ll identify your early signals, record how you respond to the practices and build a plan you can refer to when thinking clearly feels harder.</p>
              <p>Over time, those observations can help you become more specific about what supports you. A practice that helps in one situation may not be the right choice in another.</p>
            </Panel>
            <Panel id="sr-meditation-h" title="Your guided meditation">
              <p><em>Returning to Steadiness</em> brings the body-based practices into one guided experience you can revisit. It includes choices for keeping your eyes open, moving gently or pausing, so you can respond to how you’re actually feeling.</p>
              <p>There’s no requirement to become completely relaxed. You’re exploring what helps you feel more present and able to choose.</p>
            </Panel>
          </div>
          <BuyRow program={SR} label={`Get the complete program • ${SR.price}`} note="Five videos, workbook and guided meditation. One payment." center />
        </section>

        <RemiNote photo={<Photo name="cta-remi" alt="Remi Pearson speaking, hands raised" width={1920} height={1059} pos="35% 30%" />}>
          <p>I’m Remi Pearson, author and founder of The Coaching Institute. Much of my work has explored the gap between understanding ourselves and being able to live that understanding when something matters.</p>
          <p>It’s one thing to know you want to listen. It’s another to stay available when you feel criticised, misunderstood or afraid of what someone might say. I’ve designed this program to give you a manageable introduction to working with that experience through your body, with practices you can explore in your own time.</p>
          <p>Understanding your response can help you take responsibility for it. You can recognise that a moment felt overwhelming and still care about how you treated someone, what needs repairing and what you want to practise next.</p>
        </RemiNote>

        <Testimonials items={TESTIMONIALS} />
        <Questions items={FAQ} />
      </div>

      <Close program={SR} title="Give yourself another way to meet a difficult moment." includes="Five videos • Workbook • Guided meditation" label={buyLabel}>
        <p>There will be conversations you don’t enjoy, situations you can’t control and days when you have less capacity than you’d like. You can begin learning your signals and discovering what helps you stay more available within those experiences.</p>
        <p>Start with one familiar situation. Work through the videos, try the practices and build a plan you can return to.</p>
      </Close>
    </main>
  );
}
