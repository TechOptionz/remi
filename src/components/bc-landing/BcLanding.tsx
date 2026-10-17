// Becoming Conscious' sales page, shown at /products/becoming-conscious in place of the generic product page (see
// app/products/[slug]/page.tsx). Composed from the program-page kit; copy and lists in content/bc-landing.ts.
import { Head } from '@/components/landing/ui';
import { BuyRow, Close, Crumbs, Hero, Lessons, NumberedPoints, Photo, Questions, RemiNote, Testimonials } from '@/components/program-landing/ui';
import { BC, BEGIN_TO, FAQ, LESSONS, TESTIMONIALS } from '@/content/bc-landing';

const buyLabel = `Get Becoming Conscious • ${BC.price}`;

export default function BcLanding() {
  return (
    <main className="kb stl pgl">
      <div className="kb-page">
        <Crumbs title={BC.title} />

        <Hero id="bc-title" eyebrow="Becoming Conscious"
          title="How much of your life do you spend somewhere other than here?"
          includes="Three short videos with guided practices • Learn at your own pace"
          buy={<BuyRow program={BC} label={buyLabel} note="One payment. Watch and practise in your own time." />}
          photo={<Photo name="rebel-listening" alt="Remi Pearson seated, listening, in a pale pink jacket" width={585} height={690} pos="50% 25%" />}>
          <p>You’re having a conversation, but part of your attention is on what you need to do afterwards. You finally have a quiet moment and find yourself replaying something that happened yesterday. Even when there’s nothing you need to solve, your mind keeps finding something to work on.</p>
          <p>Becoming Conscious is a gentle introduction to being more present in your own life. Through three short videos, I’ll guide you into noticing your surroundings, feeling the sensations in your body and becoming aware of your thoughts without having to follow every one.</p>
          <p>You can begin exactly as you are, with a busy mind and no previous experience.</p>
        </Hero>

        <section className="stl-section" aria-labelledby="bc-here-h">
          <Head id="bc-here-h">There are moments you’d like to actually be here for.</Head>
          <div className="pgl-prose">
            <p className="pgl-lede">The person sitting across from you. The first few minutes of a walk. An evening when you’ve finished what you can reasonably do, yet your attention is still working through tomorrow.</p>
            <p>Thinking is useful. But when it occupies nearly all our attention, we can miss much of the experience we’re having. We taste very little of the meal, barely notice our surroundings or reach the end of a conversation and realise we weren’t really listening.</p>
          </div>
          <h3 className="pgl-subhead">This program introduces simple ways to bring your attention back, so you can begin to:</h3>
          <NumberedPoints items={BEGIN_TO} />
        </section>
      </div>

      <div className="stl-band pgl-band"><p>You won’t be trying to remain present every second. You’ll be learning how to notice when you’ve drifted and find your way back.</p></div>

      <div className="kb-page">
        <Lessons lessons={LESSONS} title="Three short videos. A simple place to begin." take="What you get from this:" label="Three short videos"
          still={<Photo name="frame-3" alt="Remi Pearson smiling in a book-lined room" width={720} height={480} pos="50% 30%" />} />
        <BuyRow program={BC} label={buyLabel} note="Includes all three videos and the guided practices within them." center />

        <RemiNote photo={<Photo name="frame-4" alt="Remi Pearson seated, holding one of her books" width={720} height={1080} pos="50% 30%" />}>
          <p>I’m Remi Pearson, author and founder of The Coaching Institute. Much of my work explores our relationship with ourselves, including how easily we can become occupied with understanding our lives while barely noticing the experience of living them.</p>
          <p>I’ve kept Becoming Conscious deliberately simple. We’ll spend time noticing things you can experience directly, with enough guidance to help you begin. You don’t need to arrive feeling peaceful or knowing how to meditate. If your attention wanders, that gives us something to notice.</p>
        </RemiNote>

        <Testimonials items={TESTIMONIALS} />
        <Questions items={FAQ} />
      </div>

      <Close program={BC} title="Give yourself a few minutes to be where you are." sub="Three short videos with Remi Pearson" label={buyLabel}>
        <p>You don’t have to finish every task before you notice the light through the window. You can feel your feet on the ground while there are still things on your mind. These small moments are available within the life you’re already living.</p>
        <p>Join me for a gentle introduction to noticing them.</p>
      </Close>
    </main>
  );
}
