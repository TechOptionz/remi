// Selling from Stage's sales page, shown at /products/selling-from-stage in place of the generic product page (see
// app/products/[slug]/page.tsx). Seven parts from the design; copy and lists in content/sfs-landing.ts.
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { BuyBtn as LandingBuyBtn, Head, Photo as LandingPhoto } from '@/components/landing/ui';
import { CATEGORIES } from '@/content/products';
import {
  FAQ, FORMAT_SHORT, FOR_WHOM_SHORT, INCLUDED, LEARN, MODULES, PATH, PROGRAM_INCLUDES, SFS_BUY_HREF, SFS_CTA_HREF,
  SFS_INSTALMENT, SFS_INSTALMENT_INC_GST, SFS_PLAN_TOTAL, SFS_PLAN_TOTAL_INC_GST, SFS_PRICE, SFS_PRICE_INC_GST, WHO,
} from '@/content/sfs-landing';

const Photo = (props: Omit<Parameters<typeof LandingPhoto>[0], 'dir'>) => <LandingPhoto dir="sfs-landing" {...props} />;
const BuyBtn = ({ children = 'Enrol in Selling from Stage' }: { children?: React.ReactNode }) => <LandingBuyBtn href={SFS_CTA_HREF} arrow>{children}</LandingBuyBtn>;
const num = (i: number) => String(i + 1).padStart(2, '0');

function Price() {
  return (
    <div className="cml-price">
      <p className="stl-price">{SFS_PRICE}<span>AUD + GST</span></p>
      <p className="cml-gst">{SFS_PRICE_INC_GST} including GST</p>
    </div>
  );
}

export default function SfsLanding() {
  return (
    <main className="kb stl cml sfs">
      <div className="kb-page">
        <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">Selling from Stage</span>
        </nav>

        {/* PART 01 — hero */}
        <section className="stl-split sfs-hero" aria-labelledby="sfs-title">
          <div className="stl-split-copy">
            <p className="stl-eyebrow">Selling from Stage <span>With Remi Pearson</span></p>
            <Head id="sfs-title" as="h1">Master the skill of turning an audience into buyers.</Head>
            <p className="sfs-lede">Learn how to shape a compelling offer and communicate its value, on a live stage or a webinar.</p>
            <p>You have something worth selling. The challenge is helping an audience understand why it matters to them, what becomes possible through your offer and how to take the next step. That work begins well before you stand in front of the room.</p>
            <p>Selling from Stage takes you through the preparation, the pitch and the follow-through. You will develop a compelling offer for your market and learn how to communicate why it matters, what it includes and how to buy.</p>
            <ul className="sfs-facts">
              <li><span className="cml-day-icon"><Icon name="people" size={28} /></span><div><h2>For people with an existing offer</h2><p>{FOR_WHOM_SHORT.join(' • ')}</p></div></li>
              <li><span className="cml-day-icon"><Icon name="tv" size={28} /></span><div><h2>Self-paced online learning</h2><p>{FORMAT_SHORT.join(' • ')}</p></div></li>
            </ul>
            <Price />
            <div className="sfs-btn"><BuyBtn /></div>
            <p className="sfs-plan-line">Or five payments of {SFS_INSTALMENT} + GST</p>
          </div>
          <Photo name="sfs-hero" alt="A speaker addressing an audience, hands open, in warm light" width={320} height={1185} className="stl-split-photo sfs-photo-tall" />
        </section>

        {/* PART 02 — why they didn't buy, and the path through the sale */}
        <section className="stl-section stl-split" aria-labelledby="sfs-loved-h">
          <div className="stl-split-copy">
            <Head id="sfs-loved-h">They loved your presentation. Why didn’t they buy?</Head>
            <p>You finish speaking. People thank you, tell you how much they enjoyed it and say they have plenty to think about. You gave them good material. You answered their questions. Yet the offer lands quietly and you leave wondering what was missing.</p>
            <p>An audience can appreciate your expertise without understanding the reason to buy. They may recognise their problem but struggle to see how your offer addresses it. They may understand the offer and still have unanswered questions about the investment, the fit or the next step.</p>
            <p>These are communication problems you can examine. You need to understand what the audience wants before choosing your content, and connect the teaching to the decision you are inviting them to make.</p>
          </div>
          <Photo name="sfs-audience" width={422} height={780} className="stl-split-photo" />
        </section>

        <section className="stl-section" aria-labelledby="sfs-path-h">
          <Head id="sfs-path-h" star>A clear path through the whole sale</Head>
          <ol className="stl-video-list cml-dims">
            {PATH.map((p, i) => (
              <li key={p.name}><span className="stl-num" aria-hidden="true">{num(i)}</span><h3>{p.name}</h3><p>{p.text}</p></li>
            ))}
          </ol>
          <p className="cml-note">The program gives you a sequence to work with, so you can locate what needs attention instead of changing everything after an unsuccessful presentation.</p>
          <div className="cml-cta-row"><BuyBtn>Build your presentation with Remi</BuyBtn></div>
        </section>

        {/* PART 03 — what belongs in the presentation */}
        <section className="stl-section stl-split" aria-labelledby="sfs-belongs-h">
          <div className="stl-split-copy">
            <Head id="sfs-belongs-h">Know what belongs in the presentation. Know why it is there.</Head>
            <p className="sfs-lede">The aim is to develop a presentation around your own offer. Work through the teaching, apply it to your market and use the supporting resources to prepare the communication you will deliver.</p>
            <div className="cml-real"><Head id="sfs-learn-h" star>What you will learn to do</Head></div>
            <ol className="cml-video-list sfs-learn">
              {LEARN.map((l, i) => (
                <li key={l.name}><span className="stl-num" aria-hidden="true">{num(i)}</span><div><h3>{l.name}</h3><p>{l.text}</p></div></li>
              ))}
            </ol>
            <p>Use the same preparation to adapt your communication for a webinar or a live room. The setting changes how you engage and how people respond, so the delivery needs attention too.</p>
            <div className="cml-cta-row"><BuyBtn /><Price /></div>
          </div>
          <Photo name="sfs-speaker" width={383} height={1220} className="stl-split-photo sfs-photo-tall" />
        </section>

        {/* PART 04 — bring a real offer; who it's for; what you need; the format */}
        <section className="stl-section stl-split" aria-labelledby="sfs-real-h">
          <div className="stl-split-copy">
            <Head id="sfs-real-h">Bring a real offer. Work on a real presentation.</Head>
            <p>Imagine preparing your next webinar with a clear understanding of who is attending and why. You know the problem you are addressing. You have chosen the examples that help people recognise it, and you understand how your offer continues the work you begin in the presentation.</p>
            <p>When it is time to explain the offer, you have already considered what it includes, who it suits and how to communicate the price. Your invitation has a clear next step. You have also planned what happens with the people who are interested and the people who purchase.</p>
            <p>That is the work this program is designed to help you prepare.</p>
          </div>
          <Photo name="sfs-webinar" width={462} height={700} className="stl-split-photo" />
        </section>

        <section className="stl-section sfs-who" aria-labelledby="sfs-who-h">
          <div>
            <Head id="sfs-who-h" star>Who this is for</Head>
            <ul className="cml-day">
              {WHO.map(w => <li key={w.text}><span className="cml-day-icon"><Icon name={w.icon} size={28} /></span><p>{w.text}</p></li>)}
            </ul>
          </div>
          <div>
            <Head id="sfs-bring-h" star>What you need to bring</Head>
            <ul className="cml-day"><li><span className="cml-day-icon"><Icon name="document" size={28} /></span><p>An existing offer, even if it needs refining. You also need the willingness to work through the material, make decisions about your market and rehearse your delivery.</p></li></ul>
            <div className="cml-real"><Head id="sfs-format-h" star>The format</Head></div>
            <ul className="cml-day"><li><span className="cml-day-icon"><Icon name="tv" size={28} /></span><p>This is an introductory self-paced online program. You learn from recorded teaching and supporting resources, then apply the work independently. Individual feedback is not included.</p></li></ul>
          </div>
        </section>

        <blockquote className="sfs-pull">A clear approach to selling gives you something practical to prepare before your next opportunity to speak.</blockquote>
        <div className="cml-cta-row sfs-center"><BuyBtn>Start building your presentation</BuyBtn></div>

        {/* PART 05 — the twelve modules in three parts */}
        <section className="stl-section" aria-labelledby="sfs-path2-h">
          <h2 id="sfs-path2-h" className="stl-h2 sfs-path-title">Your path from preparation to follow-through.</h2>
          <Photo name="sfs-crowd" width={1055} height={190} className="sfs-crowd" />
          {(() => { let n = 0; return MODULES.map(m => (
            <div key={m.part} className="sfs-part">
              <h3 className="sfs-part-h"><span>{m.part}</span> {m.title}</h3>
              <ol className="stl-video-list cml-dims">
                {m.steps.map(s => <li key={s.name}><span className="stl-num" aria-hidden="true">{num(n++)}</span><h3>{s.name}</h3><p>{s.text}</p></li>)}
              </ol>
            </div>
          )); })()}
        </section>
      </div>

      <div className="stl-band sfs-included">
        <p className="stl-band-title">Included</p>
        <p>{INCLUDED.join(' • ')}<br />Self-paced learning. Apply each part to your own offer and presentation.</p>
      </div>

      <div className="kb-page">
        {/* PART 06 — Remi, questions */}
        <section className="stl-section stl-split stl-remi" aria-labelledby="sfs-remi-h">
          <div className="stl-split-copy">
            <Head id="sfs-remi-h">Learn with the woman who built the business.</Head>
            <p>I’m Remi Pearson. I started The Coaching Institute cold-calling from my bedroom and built a business that turned over more than $200 million across twenty-three years, before exiting in 2024.</p>
            <p>Presenting, making offers and developing other people to do the same were part of building that business. I had to learn how to hold an audience’s attention, explain an offer and move from teaching into a buying conversation.</p>
            <p>In this program, I teach the preparation and communication behind selling from stage. You will work with your own market and offer, so the material becomes something you can use in your business.</p>
            <p className="stl-signature" aria-hidden="true">Remi</p>
          </div>
          <Photo name="sfs-remi" alt="A speaker on stage, seen from behind, addressing a full room" width={372} height={750} className="stl-split-photo" />
        </section>

        <section className="stl-section" aria-labelledby="sfs-faq-h">
          <Head id="sfs-faq-h" star>Questions before you begin</Head>
          <dl className="cml-faq sfs-faq">
            {FAQ.map((f, i) => <div key={f.q}><dt><span className="stl-num" aria-hidden="true">{num(i)}</span>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
          <div className="cml-cta-row"><BuyBtn /></div>
        </section>

        {/* PART 07 — make your offer worth saying yes to */}
        <section className="stl-section stl-split" aria-labelledby="sfs-yes-h">
          <div className="stl-split-copy">
            <Head id="sfs-yes-h">Make your offer worth saying yes to.</Head>
            <p>You have something worth selling. Develop an offer that speaks to what your audience wants, then learn how to explain its value and invite people to buy.</p>
            <p>Selling from Stage takes you from understanding your market and shaping a compelling offer to communicating it on stage or online and following through after the pitch.</p>
          </div>
          <Photo name="sfs-yes" width={454} height={780} className="stl-split-photo" />
        </section>
      </div>

      <section id="get" className="stl-close" aria-labelledby="sfs-close-h">
        <div className="stl-close-inner">
          <h2 id="sfs-close-h" className="stl-h2">Selling from Stage <span className="sfs-close-with">with Remi Pearson</span></h2>
          <div className="sfs-close-grid">
            <div>
              <h3 className="sfs-close-sub">Your program includes</h3>
              <ul className="sfs-includes">
                {PROGRAM_INCLUDES.map(p => <li key={p.text}><span className="sfs-inc-icon"><Icon name={p.icon} size={20} /></span>{p.text}</li>)}
              </ul>
            </div>
            <div className="sfs-buy">
              <div className="sfs-options">
                <div className="sfs-option">
                  <h3>Self-paced online program</h3>
                  <p className="sfs-option-kicker">One payment</p>
                  <p className="stl-price">{SFS_PRICE}<span>AUD + GST</span></p>
                  <p>{SFS_PRICE_INC_GST} including GST</p>
                </div>
                <div className="sfs-option">
                  <h3>Payment plan</h3>
                  <p className="sfs-option-big">5 payments of {SFS_INSTALMENT} + GST</p>
                  <p>{SFS_INSTALMENT_INC_GST} including GST per payment</p>
                  <p className="sfs-option-big sfs-option-rule">Total {SFS_PLAN_TOTAL} + GST</p>
                  <p>{SFS_PLAN_TOTAL_INC_GST} including GST</p>
                </div>
              </div>
              <div className="sfs-close-action">
                {SFS_BUY_HREF
                  ? <LandingBuyBtn href={SFS_BUY_HREF} light arrow>Choose your payment option and enrol</LandingBuyBtn>
                  : <><p className="stl-close-soon">Coming soon</p><NotifyForm product="Selling from Stage" segment={CATEGORIES.influence.segment} /></>}
              </div>
            </div>
          </div>
          <p className="sfs-tagline">Bring your offer. Strengthen the value. Learn how to sell it.</p>
        </div>
      </section>
    </main>
  );
}
