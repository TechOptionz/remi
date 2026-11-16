// The Shift's waitlist confirmation (/programs/the-shift/thank-you), where the waitlist form sends a new sign-up. Follows
// the mockup "THE SHIFT WAITLIST CONFIRMATION" with the deck's copy word for word: the ringed tick, the two-line
// heading, Remi's thanks, the framed "What happens next?" and her sign-off with the gold signature (the Benchmarking
// page's, multiplied onto the paper). The mockup's own logo bar and web address are the site's header and footer.
// Styles: the end of styles/shift-landing.css (.shf-ty*).
export default function ShiftThanks() {
  return (
    <main className="shf shf-ty">
      <section className="shf-ty-inner" aria-labelledby="shf-ty-h">
        <p className="shf-eyebrow">The Shift</p>
        <span className="shf-ty-tick" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
        </span>
        <h1 id="shf-ty-h" className="shf-title">You’re on the waitlist. <em>I’m so glad you’re here.</em></h1>
        <p>Thank you for putting your hand up for The Shift. When you’re the woman everyone turns to, having somewhere to bring your own questions can feel like a very welcome change. That’s the kind of space I want us to create together.</p>
        <p>A place where we can speak honestly about our businesses, learn from one another and work towards growth that leaves room for us, too. I’m looking forward to getting to know the women who will be part of it.</p>
        <div className="shf-ty-next">
          <h2 className="shf-h2">What happens next?</h2>
          <p>You’ll hear from us by email when applications open, with the details you need to decide whether The Shift feels right for you. Joining the waitlist doesn’t commit you to anything, and there’s nothing more you need to do just now.</p>
        </div>
        <p>Thank you for considering inviting me into this next chapter of your business. I know that’s a meaningful decision.</p>
        <p className="shf-ty-love">With love,</p>
        <img className="shf-ty-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi" width={585} height={375} loading="lazy" decoding="async" />
      </section>
    </main>
  );
}
