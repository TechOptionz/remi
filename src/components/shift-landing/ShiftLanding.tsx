// The Shift's waitlist page (/programs/the-shift). Follows the three-part mockup: the hero beside Remi at the lectern,
// the strip of four facts, "You've built something that works" and its rust panel (part one); the four framed cards of
// what you'll learn, the rust "Your needs belong in the conversation too" band and the three numbered inclusions (part
// two); who it is for beside who it won't suit, Remi's note with the 2014–2024 line, and the dark close with the
// waitlist form (part three). The deck's paragraphs that the mockups leave out sit where the deck places them. Copy and
// lists in content/shift-landing.ts; styles styles/shift-landing.css (.shf-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { FOR_WOMEN_WHO, INCLUDED, LEARN, MILESTONES, SHIFT_PRODUCT, SHIFT_THANKS_HREF, STRIP } from '@/content/shift-landing';

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="shf-btn">Join the waitlist</a>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function ShiftLanding() {
  return (
    <main className="shf">
      {/* PART ONE — the hero, the strip, what you've built */}
      <section className="shf-hero" aria-labelledby="shf-title">
        <div className="shf-hero-copy">
          <nav className="crumbs shf-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">The Shift</span>
          </nav>
          <p className="shf-eyebrow">The Shift <span aria-hidden="true">·</span> Women in business mentoring</p>
          <h1 id="shf-title" className="shf-title">Your business is ready to grow. <em>You’re ready for it to depend less on you.</em></h1>
          <p className="shf-lede">A mentoring group for 20 women with businesses generating $500,000+ in annual revenue who want to grow, develop confident leaders around them, and have room for themselves in the life they’re building.</p>
          <p>Monthly group mentoring with Remi Pearson, clear guidance you can apply in your business, and a community of women who understand the responsibility of being the person everyone turns to.</p>
          <div className="shf-buy"><Btn /></div>
          <p className="shf-meta">Beginning early 2027. Membership by application.</p>
        </div>
        <img className="shf-hero-photo" src="/assets/shift-landing/shift-hero.webp" alt="Remi Pearson speaking at a lectern in a black jacket and long pearl necklaces, one hand raised mid-thought" width={1400} height={1370} fetchPriority="high" decoding="async" />
      </section>

      <div className="shf-wrap">
        <ul className="shf-strip" aria-label="The Shift at a glance">
          {STRIP.map(s => <li key={s}>{s}</li>)}
        </ul>

        <section className="shf-section" aria-labelledby="shf-built-h">
          <h2 id="shf-built-h" className="shf-h2 shf-h2--big shf-h2--stack">You’ve built something that works. <em>And a lot of it works because of you.</em></h2>
          <div className="shf-cols">
            <div>
              <p>Your team comes to you for decisions they could be making. Clients want your attention. You delegate something, then find yourself checking it, fixing it or taking it back. There are opportunities you want to pursue, but the day fills up with keeping everything else moving.</p>
            </div>
            <div>
              <p>You can see the potential in your business. You can also see what more growth will ask of you if the way you lead and operate stays the same.</p>
              <p>Perhaps you’ve already tried stepping back, only to discover that things slipped when you did. Giving people responsibility is difficult when you’re still unsure whether they can carry it.</p>
            </div>
          </div>
          <p className="shf-panel">The Shift is a place to work through that properly, with experienced guidance and women who are navigating similar questions in their own businesses.</p>
        </section>

        {/* PART TWO — what you'll learn, your needs, what's included */}
        <section className="shf-section shf-rule" aria-labelledby="shf-capacity-h">
          <h2 id="shf-capacity-h" className="shf-h2 shf-h2--big">Build the capacity for growth <em>beyond your own</em></h2>
          <span className="shf-short-rule" aria-hidden="true" />
          <p className="shf-lede">Our work together will help you recognise where the business relies too heavily on you and understand what needs to change so other people can take meaningful ownership.</p>
          <p>That means learning how to:</p>
          <ul className="shf-cards">
            {LEARN.map(l => (
              <li key={l.lead}>
                <Icon name={l.icon} size={40} strokeWidth={1.1} />
                <h3>{l.lead}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ul>
          <p>You’ll bring the real situations you’re facing into the mentoring. We’ll examine what’s happening, work out where your attention belongs and identify practical changes you can make.</p>
        </section>
      </div>

      <section className="shf-band" aria-labelledby="shf-needs-h">
        <div className="shf-wrap">
          <h2 id="shf-needs-h" className="shf-h2 shf-h2--big">Your needs belong in the conversation too</h2>
          <span className="shf-short-rule" aria-hidden="true" />
          <div className="shf-band-cols">
            <p>Being capable can become a habit of carrying too much. You notice what needs doing, anticipate what others need and make yourself available, sometimes before you’ve even considered the cost to you.</p>
            <p>In The Shift, we’ll make room to examine those patterns and the effect they have on your leadership. You’ll practise trusting your judgment, setting boundaries you can uphold and making decisions that include your own needs.</p>
            <p>This is personal empowerment with a practical expression in your business … how you use your time, what you agree to, how you respond to pressure and what you expect from the people around you.</p>
          </div>
        </div>
      </section>

      <div className="shf-wrap">
        <section className="shf-section" aria-labelledby="shf-included-h">
          <h2 id="shf-included-h" className="shf-h2 shf-h2--big">What’s included</h2>
          <span className="shf-short-rule" aria-hidden="true" />
          <ol className="shf-included">
            {INCLUDED.map((item, i) => (
              <li key={item.name}>
                <span className="shf-num" aria-hidden="true">{pad(i + 1)}</span>
                <h3>{item.name}</h3>
                <div>{item.text.map(t => <p key={t}>{t}</p>)}</div>
              </li>
            ))}
          </ol>
          <div className="shf-buy"><Btn /></div>
        </section>

        {/* PART THREE — who it is for, Remi, the close */}
        <section className="shf-section shf-rule" aria-label="Who The Shift is for, and who it won’t suit">
          <div className="shf-fit">
            <div>
              <h2 className="shf-h2 shf-h2--big">Who The Shift <em>is for</em></h2>
              <p>The Shift is for women who:</p>
              <ul className="shf-dots">{FOR_WOMEN_WHO.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="shf-fit-not">
              <h2 className="shf-h2 shf-h2--big">Who it <em>won’t suit</em></h2>
              <p>This group won’t suit you if you’re still developing your first offer or looking for help getting a business started.</p>
              <p>It also won’t suit you if you want someone to run the business for you, a guaranteed revenue formula or somewhere to collect ideas without applying them. The work asks for participation, openness to feedback and a willingness to follow through.</p>
            </div>
          </div>
        </section>

        <section className="shf-section shf-rule shf-remi" aria-labelledby="shf-remi-h">
          <img className="shf-remi-photo" src="/assets/shift-landing/shift-remi.webp" alt="Remi Pearson mid-sentence, one hand raised, in a black jacket and long pearl necklaces" width={900} height={1010} loading="lazy" decoding="async" />
          <div>
            <h2 id="shf-remi-h" className="shf-h2 shf-h2--big">Guided by someone who has made <em>the shift</em></h2>
            <p>I’m Remi Pearson. I founded The Coaching Institute and built an eight-figure business, generating just under $200 million in revenue over 23 years.</p>
            <p>Along the way, I learned how to build an award-winning culture and develop the leadership that allowed me to place the business under management in 2014. I sold it in 2024.</p>
            <p>Those milestones involved learning how to stop being essential to everything. They required changes in how I led, what I expected of others and what I was willing to let go of.</p>
            <p>That experience informs the guidance I’ll bring to The Shift, alongside a deep interest in who we become as we build our businesses.</p>
            <ul className="shf-line" aria-label="Milestones">
              {MILESTONES.map(m => <li key={m.year}>{m.year} <span aria-hidden="true">·</span> {m.label}</li>)}
            </ul>
          </div>
        </section>
      </div>

      <section id="get" className="shf-close" aria-labelledby="shf-close-h">
        <div className="shf-wrap shf-close-inner">
          <h2 id="shf-close-h" className="shf-h2 shf-h2--big">What could become possible if fewer things depended <em>on you?</em></h2>
          <p>More room to think about where the business is going. A team that takes greater ownership. Time away that feels like time away. Growth you have the capacity to enjoy.</p>
          <p>If that’s the direction you want to move in, I’d love you to consider joining us.</p>
          <p>The Shift begins in early 2027, with places for 20 women. Join the waitlist to receive application details when they open.</p>
          <WaitlistForm product={SHIFT_PRODUCT} prefix="shf" namePlaceholder="First name" thanksHref={SHIFT_THANKS_HREF} thanks="You’re on the waitlist. I’m so glad you’re here." />
          <p className="shf-small"><em>Joining the waitlist doesn’t commit you to joining the group.</em></p>
        </div>
      </section>
    </main>
  );
}
