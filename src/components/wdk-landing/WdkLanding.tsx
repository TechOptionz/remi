// Why Do I Keep Doing This?'s registration page, shown at /products/why-do-i-keep-doing-this in place of the generic
// product page (see app/products/[slug]/page.tsx). Laid out like the Self-Esteem Triad's page with fewer sections and a
// single goal: full forms in the hero and the closing band (#get), every other button scrolls to the closing one.
// Copy and lists in content/wdk-landing.ts.
import Link from 'next/link';
import { Head, Photo as LandingPhoto } from '@/components/landing/ui';
import { CONVERSATIONS, FAQ, LESSONS, TESTIMONIALS } from '@/content/wdk-landing';
import RegisterForm from './RegisterForm';
import MobileAccess from './MobileAccess';

const Photo = (props: Omit<Parameters<typeof LandingPhoto>[0], 'dir'>) => <LandingPhoto dir="photos" {...props} />;
const AccessBtn = () => <a href="#get" className="hm-btn stl-btn">Get the free video series</a>;
const num = (i: number) => String(i + 1).padStart(2, '0');

/** One person, two concerns: a single figure with a thought bubble on either side (no split faces or opposing figures). */
function TwoConcerns() {
  return (
    <figure className="wdk-concerns">
      <div className="wdk-concerns-art">
        <p className="wdk-bubble wdk-bubble--l">I want to speak honestly</p>
        <svg className="wdk-person" viewBox="0 0 120 140" aria-hidden="true">
          <circle cx="60" cy="44" r="26" />
          <path d="M14 136c0-30 20-50 46-50s46 20 46 50" />
        </svg>
        <p className="wdk-bubble wdk-bubble--r">I’m afraid of what might happen</p>
      </div>
      <figcaption>Two concerns can exist within the same person.</figcaption>
    </figure>
  );
}

export default function WdkLanding() {
  return (
    <main className="kb stl wdk">
      <div className="kb-page">
        <nav className="crumbs stl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">Why Do I Keep Doing This?</span>
        </nav>

        {/* Hero: the headline and the first form beside Remi's portrait (on phones the form comes before the photo) */}
        <section className="wdk-hero" aria-labelledby="wdk-title">
          <div className="wdk-hero-copy">
            <p className="stl-eyebrow">Free five-part video series <span>With Remi Pearson</span></p>
            <Head id="wdk-title" as="h1">Why Do I Keep Doing This?</Head>
            <p className="wdk-sub">Part of you wants things to change. Another part has reasons to resist.</p>
            <p>You mean it when you say you’ll do things differently. Then the moment comes and you find yourself doing the very thing you promised you wouldn’t. What happens between the decision and the behaviour?</p>
            <p>Join me for five free videos exploring the inner conflicts that can keep you repeating familiar patterns, even when you understand what they’re costing you.</p>
          </div>
          <div className="wdk-hero-form"><RegisterForm /></div>
          <Photo name="about-remi" alt="Remi Pearson, smiling, in a cream jumper" width={394} height={900} className="wdk-hero-photo" />
        </section>

        {/* Which of these conversations have you had with yourself? */}
        <section className="stl-section" aria-labelledby="wdk-conv-h">
          <Head id="wdk-conv-h" star>Which of these conversations have you had with yourself?</Head>
          <ul className="wdk-convos">
            {CONVERSATIONS.map(c => <li key={c.said}><p className="wdk-said">{c.said}</p><p>{c.then}</p></li>)}
          </ul>
          <p className="stl-intro stl-indent">Afterwards, you can usually explain why your response didn’t help. You may even give yourself a fairly impressive lecture about it. But that lecture doesn’t tell you much about the part of you that felt it had to respond that way.</p>
          <TwoConcerns />
        </section>

        <section className="stl-section" aria-labelledby="wdk-protect-h">
          <Head id="wdk-protect-h">What if the behaviour you regret is trying to protect you from something?</Head>
          <div className="wdk-prose">
            <p>A part of you may want to speak honestly while another fears what honesty could cost. You might want to be seen, while also wanting to avoid the exposure that comes with it. Both can feel completely true.</p>
            <p>In this series, we’ll use “parts” as a way of understanding these competing responses within you. We’ll explore how a response that offers relief in the moment can also keep you caught in a pattern you want to change. That protective intention can be worth understanding, even when the behaviour has consequences you need to take seriously.</p>
          </div>
        </section>

        {/* The five videos: a still with the play symbol, then the numbered lessons */}
        <section className="stl-section" aria-labelledby="wdk-videos-h">
          <Head id="wdk-videos-h" star>Five videos to help you make sense of the conflict</Head>
          <p className="stl-intro stl-indent">A short introduction you can work through at your own pace. Each video explores a different piece of the question.</p>
          <div className="wdk-preview">
            <div className="wdk-still">
              <img src="/assets/photos/cta-remi.webp" alt="Remi Pearson teaching, hands raised as she makes a point" width={1920} height={1059} loading="lazy" decoding="async" />
              <span className="wdk-still-play" aria-hidden="true"></span>
              <p className="wdk-still-label" aria-hidden="true">Five free videos</p>
            </div>
            <ol className="stl-video-list wdk-lessons">
              {LESSONS.map((l, i) => (
                <li key={l.name}><span className="stl-num stl-num--gold" aria-hidden="true">{num(i)}</span><h3>{l.name}</h3><p>{l.text}</p></li>
              ))}
            </ol>
          </div>
          <p className="wdk-purpose">The purpose is understanding. Five introductory videos won’t resolve longstanding patterns, but they can give you a more useful starting point for exploring them.</p>
          <div className="stl-center"><AccessBtn /></div>
        </section>

        {TESTIMONIALS.length > 0 && (
          <section className="stl-section" aria-labelledby="wdk-say-h">
            <Head id="wdk-say-h" star>What people say about learning with Remi</Head>
            <ul className="stl-quotes">
              {TESTIMONIALS.map(t => (
                <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} <span aria-hidden="true">•</span> {t.program}</p></li>
              ))}
            </ul>
          </section>
        )}

        <section className="stl-section stl-split stl-remi wdk-note" aria-labelledby="wdk-remi-h">
          <div className="stl-split-copy">
            <Head id="wdk-remi-h" star>A note from Remi</Head>
            <p>I’m Remi Pearson, author and founder of The Coaching Institute. For more than two decades, my work has explored how we think, relate and change. One question keeps drawing my attention: how can we understand ourselves so well and still find it difficult to respond differently when it matters?</p>
            <p>I created this free introduction to give you a way into that question. We’ll look at the conflict itself, including the responses you might be quickest to judge. You don’t need to know anything about parts work to begin. Bring a pattern you recognise and some curiosity about what happens inside you.</p>
            <p className="stl-signature" aria-hidden="true">Remi</p>
          </div>
          <Photo name="remi-pink-jacket" alt="Remi Pearson smiling, in a patterned pink jacket" width={1600} height={1067} className="stl-split-photo wdk-note-photo" />
        </section>

        <section className="stl-section" aria-labelledby="wdk-faq-h">
          <Head id="wdk-faq-h" star>A few things you might be wondering</Head>
          <dl className="stl-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      {/* The closing band and the second full form */}
      <section id="get" className="stl-close wdk-close" aria-labelledby="wdk-close-h">
        <div className="stl-close-inner wdk-close-grid">
          <div>
            <h2 id="wdk-close-h" className="stl-h2">Begin with the pattern that brought you here</h2>
            <p className="stl-close-lede">Perhaps there’s something you keep avoiding, or a conversation you keep having with yourself afterwards. Bring that with you. We’ll start by looking at why it makes sense in the moment, even when you wish you’d done something else.</p>
          </div>
          <div className="wdk-close-form">
            <p className="stl-close-name">Why Do I Keep Doing This?</p>
            <p className="wdk-close-sub">Five free videos with Remi Pearson. Watch at your own pace.</p>
            <RegisterForm />
          </div>
        </div>
      </section>
      <MobileAccess />
    </main>
  );
}
