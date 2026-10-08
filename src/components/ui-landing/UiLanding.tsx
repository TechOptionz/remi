// Ultimate Influence's sales page, shown at /products/ultimate-influence-consultative-sales-introduction in place of the
// generic product page (see app/products/[slug]/page.tsx). Six parts from the design; copy and lists in
// content/ui-landing.ts. Kept in one file: each part is a short run of copy around the shared kit.
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { CATEGORIES } from '@/content/products';
import { BuyBtn, Head, Photo, Price } from './ui';
import { AUDIENCE, CLOSE_INCLUDES, FAQ, INCLUDES, LEARN, STEPS, TESTIMONIALS, UIL_BUY_HREF, VIDEOS } from '@/content/ui-landing';

export default function UiLanding() {
  return (
    <main className="kb stl cml uil">
      <div className="kb-page">
        <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">Ultimate Influence</span>
        </nav>

        {/* PART 01 — hero */}
        <section className="stl-hero cml-hero" aria-labelledby="uil-title">
          <div className="stl-hero-copy">
            <p className="stl-eyebrow">Ultimate Influence <span>With Remi Pearson</span></p>
            <p className="uil-sub uil-sub--hero">The complete eight-step consultative sales methodology</p>
            <Head id="uil-title" as="h1">You believe in your work. <span className="uil-rust">Learn how to ask someone to buy it.</span></Head>
            <div className="cml-hero-body">
              <p>You can care deeply about someone, understand what they’re struggling with and know you have something that could help … then find yourself hesitating when the conversation turns towards working together.</p>
              <p>Perhaps you explain too much. Perhaps you soften the invitation until it barely sounds like one. Perhaps they say, “Can I think about it?” and you’re left wondering what you missed.</p>
              <p>Ultimate Influence gives you a complete structure for the conversation, so you know how to understand the person in front of you, connect your recommendation to their needs and ask for a decision without becoming pushy.</p>
            </div>
          </div>
          <Photo name="uil-hero" width={495} height={880} className="stl-hero-photo" />
          <Photo name="uil-book" alt="Ultimate Influence, the complete eight-step consultative sales methodology, by Remi Pearson" width={410} height={475} className="stl-hero-book" />
          <div className="stl-buy">
            <p className="stl-includes">{INCLUDES.join(' • ')}</p>
            <Price note="One payment. Self-paced. Immediate access." />
            <BuyBtn />
          </div>
        </section>

        {/* PART 02 — the eight steps */}
        <section className="stl-section" aria-labelledby="uil-steps-h">
          <Head id="uil-steps-h">The eight steps of Ultimate Influence</Head>
          <p className="stl-intro">A complete structure for a consultative sales conversation.</p>
          <ol className="uil-steps">
            {STEPS.map((s, i) => (
              <li key={s} style={{ '--i': i } as React.CSSProperties}>
                <span className="uil-step-num" aria-hidden="true">{i + 1}</span>
                <span className="uil-step-name">{s}</span>
              </li>
            ))}
          </ol>
          <p className="uil-begin">Begin with connection</p>
        </section>

        <div className="stl-band">
          <p className="stl-band-title">A clear structure gives you more room to be present.</p>
          <p>Learn each step in its own dedicated video.</p>
        </div>

        {/* PART 03 — inviting someone in, and what you'll learn to do */}
        <section className="stl-section stl-split" aria-labelledby="uil-good-h">
          <div className="stl-split-copy">
            <Head id="uil-good-h">Being good at your work doesn’t automatically make you good at inviting someone into it.</Head>
            <p>The work itself can feel natural. You know how to listen, recognise a pattern and help someone see a possibility.</p>
            <p>Then you need to discuss your offer and its price. You don’t want them to feel pressured, so you keep helping, explain another feature or offer another insight. You’ve had a meaningful conversation, but neither of you is clear about what happens next.</p>
            <p>There is a skill involved in moving from understanding someone to making an appropriate invitation. You can learn it while retaining the warmth and integrity you bring to your work.</p>
            <div className="cml-real">
              <Head id="uil-enough-h">Understand enough to make a recommendation that makes sense.</Head>
              <p>If you recommend too early, you can present an offer against a problem you only partially understand. Learn to explore what they want, what is happening now and the needs your recommendation must address.</p>
              <p>You’ll also be better placed to recognise when your offer is a poor fit.</p>
            </div>
          </div>
          <Photo name="uil-invite" width={355} height={840} className="stl-split-photo" />
        </section>

        <section className="stl-section" aria-labelledby="uil-learn-h">
          <Head id="uil-learn-h" star>What you’ll learn to do</Head>
          <ul className="uil-learn">
            {LEARN.map(l => (
              <li key={l.text}><span className="uil-learn-icon"><Icon name={l.icon} size={26} /></span>{l.text}</li>
            ))}
          </ul>
          <div className="cml-cta-row"><BuyBtn>Learn the complete methodology</BuyBtn></div>
        </section>

        {/* PART 04 — "Can I think about it?", eleven videos */}
        <section className="stl-section stl-split" aria-labelledby="uil-think-h">
          <div className="stl-split-copy">
            <Head id="uil-think-h">“Can I think about it?” <span className="uil-rust">Deserves a conversation.</span></Head>
            <p>You’ve explored their situation. They seem interested. You explain how you can help, and then they say, “Can I think about it?”</p>
            <p>It can be tempting to accept the answer and send more information, or to argue for the sale. Neither response necessarily helps you understand what they’re thinking about.</p>
            <p>They may have an unanswered question, uncertainty about the fit, a practical constraint or a reason they haven’t expressed. They may simply need time.</p>
            <p>Learn to explore the hesitation, check your understanding and establish what the person needs to decide.</p>
          </div>
          <Photo name="uil-wave" width={455} height={515} className="stl-split-photo" />
        </section>

        <section className="stl-section stl-split uil-videos" aria-labelledby="uil-videos-h">
          <Photo name="uil-kit" alt="The Ultimate Influence book with its workbook and example conversations" width={505} height={715} className="uil-kit-photo" />
          <div>
            <Head id="uil-videos-h">Eleven videos. <span className="uil-rust">The complete methodology.</span></Head>
            <ol className="uil-video-list">
              {VIDEOS.map(v => (
                <li key={v.num}>
                  <span className="uil-video-num" aria-hidden="true">{v.num}</span>
                  <div>
                    <h3>{v.name}</h3>
                    {v.steps && <p>{STEPS.join(' • ')}</p>}
                    <p>{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="uil-also">
              <h3>Also included</h3>
              <p>Workbook • Example conversations • Downloadable video transcripts</p>
            </div>
            <Price />
            <div className="uil-btn-gap"><BuyBtn>Get immediate access</BuyBtn></div>
          </div>
        </section>

        {/* PART 05 — Remi, who it's for, what people say, questions */}
        <section className="stl-section stl-split stl-remi" aria-labelledby="uil-remi-h">
          <div className="stl-split-copy">
            <Head id="uil-remi-h">Learn with <span className="uil-rust">Remi Pearson.</span></Head>
            <p>I started my business cold-calling from my bedroom and built The Coaching Institute into a company that turned over more than $200 million across twenty-three years, before I exited in 2024.</p>
            <p>I had to learn how to invite people into work I believed in, and teach others to have those conversations as the business grew.</p>
            <p>I also worked with online marketers in America, consulting with their sales teams and teaching them to use Ultimate Influence.</p>
            <p>I’m sharing the complete methodology so you have a structure you can understand, practise and bring into your own work.</p>
            <p className="stl-signature" aria-hidden="true">Remi</p>
          </div>
          <Photo name="uil-remi" width={560} height={705} className="stl-split-photo" />
        </section>

        <section className="stl-section uil-for" aria-labelledby="uil-for-h">
          <h2 id="uil-for-h" className="stl-h2">For people who sell through a conversation.</h2>
          <p className="uil-audience">{AUDIENCE.join(' • ')}</p>
          <p>Apply what you learn in your own business and paid professional work.</p>
        </section>

        {TESTIMONIALS.length > 0 && (
          <section className="stl-section" aria-labelledby="uil-say-h">
            <Head id="uil-say-h" star>What people say</Head>
            <ul className="stl-quotes">
              {TESTIMONIALS.map(t => (
                <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} <span aria-hidden="true">•</span> {t.context}</p></li>
              ))}
            </ul>
          </section>
        )}

        <section className="stl-section" aria-labelledby="uil-faq-h">
          <Head id="uil-faq-h" star>Questions before you begin</Head>
          <dl className="uil-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>

        {/* PART 06 — ambassador, bring your offer */}
        <section className="stl-section stl-split cml-share" aria-labelledby="uil-share-h">
          <div className="stl-split-copy">
            <Head id="uil-share-h">Share the work as an ambassador.</Head>
            <p className="cml-stat"><strong>100%</strong> of the proceeds from your sales</p>
            <p>After purchasing, you can become an ambassador for Ultimate Influence, sell the product to others and keep 100% of the proceeds from your sales. I receive no share of those sales.</p>
            <p>Payment processing fees, taxes and other costs remain yours to account for. Participation is optional. The ambassador terms explain how it works.</p>
            <p>If the methodology helps you, you have an opportunity to introduce it to others and earn from the sales you make.</p>
            <div className="cml-real">
              <h2 id="uil-offer-h" className="uil-offer-h">Bring your offer. <br />Learn how to have the conversation.</h2>
              <p>Think of someone who enquires about your work. They want to understand whether you can help, and you want to understand whether your offer is right for them.</p>
              <p>Learn to navigate that conversation, make a thoughtful recommendation and ask for a decision with clarity.</p>
            </div>
          </div>
          <Photo name="uil-share" width={495} height={750} className="stl-split-photo" />
        </section>
      </div>

      <section id="get" className="stl-close" aria-labelledby="uil-close-h">
        <div className="stl-close-inner stl-close-offer">
          <Photo name="uil-close" alt="Ultimate Influence by Remi Pearson" width={360} height={470} className="stl-close-photo uil-close-photo" />
          <div className="stl-close-buy">
            <h2 id="uil-close-h" className="stl-h2">Ultimate Influence</h2>
            <p className="uil-sub uil-sub--light">The complete eight-step consultative sales methodology</p>
            <p className="cml-with cml-with--light">With Remi Pearson</p>
            <p className="stl-close-includes">{CLOSE_INCLUDES.join(' • ')}</p>
            <Price note="One payment. Self-paced. Immediate access." />
            {UIL_BUY_HREF
              ? <BuyBtn light />
              : <><p className="stl-close-soon">Coming soon</p><NotifyForm product="Ultimate Influence" segment={CATEGORIES.influence.segment} /></>}
          </div>
        </div>
      </section>
    </main>
  );
}
