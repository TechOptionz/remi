// Subscribe — the Let Truth Lead newsletter page (the homepage spotlight's "Stay in touch" links here). From Remi's copy
// deck "SUBSCRIBE TO THE NEWSLETTER" and the three-part mockup "SUBSCRIBE TO THE NEWSLETTER MOCKUP ONE–THREE" (Oct
// 2026), copy word for word: the hero beside Remi in her pink jacket with the sign-up form, "For people who enjoy
// thinking for themselves", the three parts of each edition, the espresso Ask Remi band, the community photo above
// "A little about who's writing to you" with the signature, and the close with the form again. Both forms go through
// submitLead('newsletter') (components/newsletter/LtlForm.tsx), the same list as the footer's sign-up. Styles
// styles/newsletter.css (.ltl-*, fixed colours). The hero and the community photo are the HD originals
// (Remi-Pearson-Photos 23 and 14) the mockup draws.
import type { Metadata } from 'next';
import Link from 'next/link';
import LtlForm from '@/components/newsletter/LtlForm';

export const metadata: Metadata = {
  title: 'Let Truth Lead: Free Fortnightly Newsletter — Remi Pearson',
  description: 'A free five-minute read from Remi Pearson, every second Sunday evening: a truth, a tension and a question worth keeping, drawing on psychology, research, culture and building a business. Subscribe and send Remi your questions.',
};

const EDITION = [
  { name: 'A truth …', text: 'an observation that helps you recognise something you may have felt but couldn’t quite put into words.', icon: 'book' },
  { name: 'A tension …', text: 'the complexity beneath it, helping you question an easy answer, notice an assumption or consider what else might be happening.', icon: 'rings' },
  { name: 'A question worth keeping …', text: 'something useful to return to in a decision, a conversation or a moment with yourself.', icon: 'cloud' },
] as const;

function EditionIcon({ name }: { name: (typeof EDITION)[number]['icon'] }) {
  return (
    <svg className="ltl-edition-icon" viewBox="0 0 64 48" aria-hidden="true">
      {name === 'book' && <><path d="M32 12C24 6 12 6 4 9v32c8-3 20-3 28 3 8-6 20-6 28-3V9c-8-3-20-3-28 3z" /><path d="M32 12v32" /></>}
      {name === 'rings' && <><circle cx="24" cy="24" r="16" /><circle cx="40" cy="24" r="16" /></>}
      {name === 'cloud' && <><path d="M22 32c-7 0-11-5-9-10 1-4 6-6 9-4 1-6 9-9 14-5 4-3 11 0 11 6 5 0 8 4 6 8-1 3-4 5-7 5z" /><circle cx="14" cy="38" r="3" /><circle cx="8" cy="44" r="2" /></>}
    </svg>
  );
}

/** The hand-drawn gold swash under two of the headings. */
function Swash() {
  return <svg className="ltl-swash" viewBox="0 0 320 40" aria-hidden="true"><path d="M4 30C60 10 120 6 128 12c6 5-40 20-50 24 40-14 140-24 236-26" /></svg>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function SubscribePage() {
  return (
    <main className="ltl">
      <section className="ltl-hero" aria-labelledby="ltl-title">
        <div className="ltl-hero-copy">
          <nav className="crumbs ltl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Subscribe</span>
          </nav>
          <p className="ltl-eyebrow">Let Truth Lead … with Remi Pearson</p>
          <h1 id="ltl-title" className="ltl-title">A <em>fresh way</em> to think about what’s on your mind.</h1>
          <p className="ltl-lede">Start your week with a clearer mind and a question worth asking.</p>
          <p>A free five-minute read, delivered every second Sunday evening. Explore the ideas shaping our world, understand more of your own experience, and find something useful to take into the week ahead.</p>
          <LtlForm />
          <p className="ltl-small ltl-center">Free to subscribe. Unsubscribe whenever you like.</p>
        </div>
        <img className="ltl-hero-photo" src="/assets/ltl/ltl-hero.webp" alt="Remi Pearson in a pink jacket, smiling with one arm raised on stage" width={900} height={1092} fetchPriority="high" decoding="async" />
      </section>

      <div className="ltl-wrap">
        <section className="ltl-section" aria-labelledby="ltl-think-h">
          <h2 id="ltl-think-h" className="ltl-h2 ltl-h2--big">For people who enjoy <em>thinking for themselves.</em></h2>
          <Swash />
          <div className="ltl-indent">
            <p>Perhaps you’ve read something everyone seems to agree with and thought, “Hang on.” Or recognised a pattern in your own life and wondered why understanding it hasn’t stopped you repeating it. Sometimes a conversation stays with you because you can’t quite name what bothered you about it.</p>
            <p>Let Truth Lead makes room for those moments. Each fortnight, I’ll explore a subject that deserves a closer look, drawing on psychology, research, culture and my experience of building a business and working with people. You’ll find ideas you can test against your own experience, with room to disagree and reach your own conclusions.</p>
          </div>
        </section>

        <section className="ltl-section ltl-rule" aria-labelledby="ltl-five-h">
          <h2 id="ltl-five-h" className="ltl-h2 ltl-h2--big">Five minutes to read. <em className="ltl-rust">Something to think about</em> all week.</h2>
          <p>Each edition brings you:</p>
          <ol className="ltl-edition">
            {EDITION.map((e, i) => (
              <li key={e.name}>
                <EditionIcon name={e.icon} />
                <p className="ltl-edition-n">{pad(i + 1)}</p>
                <h3>{e.name}</h3>
                <p>{e.text.charAt(0).toUpperCase() + e.text.slice(1)}</p>
              </li>
            ))}
          </ol>
          <p className="ltl-topics">We might explore why being needed becomes a trap, what makes honesty difficult in a relationship, or how certainty wins applause while curiosity gets crowded out. The subject will change. The invitation is to look a little closer and see what that opens up for you.</p>
          <div className="ltl-center ltl-buy"><a href="#ltl-get" className="ltl-btn ltl-btn--link">Send me Let Truth Lead <span aria-hidden="true">→</span></a></div>
        </section>
      </div>

      <section className="ltl-dark" aria-labelledby="ltl-ask-h">
        <div className="ltl-wrap ltl-ask">
          <svg className="ltl-quote" viewBox="0 0 200 160" aria-hidden="true">
            <path d="M48 8c26 0 42 20 42 48 0 40-28 76-70 96l-6-9c26-14 42-34 46-56-4 2-9 3-14 3-22 0-38-16-38-40S24 8 48 8z" />
            <path d="M150 8c26 0 42 20 42 48 0 40-28 76-70 96l-6-9c26-14 42-34 46-56-4 2-9 3-14 3-22 0-38-16-38-40s16-42 40-42z" />
          </svg>
          <p className="ltl-eyebrow ltl-eyebrow--light">Ask Remi</p>
          <h2 id="ltl-ask-h" className="ltl-h2 ltl-h2--big">What are you trying to make sense of? <em className="ltl-gold">Ask Remi.</em></h2>
          <Swash />
          <div className="ltl-indent">
            <p>A conversation you keep replaying. An idea you’re questioning. Something happening in your world that you’d love another perspective on.</p>
            <p>As a subscriber, you’ll have a place to submit your questions and help shape what we explore. You’ll receive the submission link when you join and in every edition, so you can return whenever something comes up.</p>
            <p>I’ll explore selected questions in future editions, with permission and identifying details removed. Individual replies aren’t guaranteed.</p>
          </div>
        </div>
      </section>

      <img className="ltl-community" src="/assets/ltl/ltl-community.webp" alt="Remi Pearson with a large group of coaches and graduates at a celebration evening, cameras set up in front of them" width={1600} height={552} loading="lazy" decoding="async" />
      <div className="ltl-wrap">
        <section className="ltl-section ltl-about" aria-labelledby="ltl-about-h">
          <h2 id="ltl-about-h" className="ltl-h2 ltl-h2--big">A little about <em className="ltl-rust">who’s writing</em> to you.</h2>
          <div>
            <p>I’m Remi Pearson, founder of The Coaching Institute, which I built into a business that generated approximately $200 million over 23 years. My work explores human behaviour, relationships and leadership, and I’m particularly interested in the gap between what we understand intellectually and how we actually live.</p>
            <p>Let Truth Lead is a place to keep exploring those questions together. I’ll bring my experience, the research I’m reading and a willingness to question my own thinking too.</p>
            <img className="ltl-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi" width={585} height={375} loading="lazy" decoding="async" />
          </div>
        </section>
      </div>

      <section id="ltl-get" className="ltl-close" aria-labelledby="ltl-close-h">
        <div className="ltl-wrap">
          <h2 id="ltl-close-h" className="ltl-h2 ltl-h2--big">Bring your curiosity. <em className="ltl-rust">I’ll bring something worth considering.</em></h2>
          <p>Give yourself five minutes before the week begins. You might find words for something you’ve been feeling, a different way into a difficult conversation, or a question that changes your next decision.</p>
          <p className="ltl-close-line">Your Sunday-evening read. Every fortnight. Free.</p>
          <LtlForm inline />
          <p className="ltl-small ltl-center">By subscribing, you’ll receive Let Truth Lead by email. Unsubscribe whenever you like. See our <Link href="/privacy-policy">Privacy Policy</Link> for how your information is handled.</p>
        </div>
      </section>
    </main>
  );
}
