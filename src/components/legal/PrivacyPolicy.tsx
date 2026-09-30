// Privacy policy: what the site's forms, newsletter, analytics and embeds collect, and how to reach us about it.
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <section className="section legal" aria-labelledby="privacy-h">
      <div className="legal-inner">
        <h1 id="privacy-h" className="part-title part-title--sm">Privacy Policy</h1>
        <p className="legal-updated">Last updated: 30 September 2026</p>

        <p>This policy explains how Remi Pearson (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal information collected through remipearson.com. We handle personal information in line with the Australian Privacy Principles in the <em>Privacy Act 1988</em> (Cth).</p>

        <h2 id="what-we-collect">What we collect</h2>
        <p>We only collect what you choose to send us:</p>
        <ul>
          <li><strong>Enquiries and invitations</strong> — your name, email address and anything else you include in the form, such as your organisation, the kind of work you are interested in, dates and your message.</li>
          <li><strong>Newsletter and waitlists</strong> — your email address (and name, where asked) when you subscribe, ask to be told when something is ready, or join a waitlist.</li>
        </ul>
        <p>We do not ask for payment details on this site and we do not buy or sell personal information.</p>

        <h2 id="how-we-use-it">How we use it</h2>
        <ul>
          <li>To reply to your enquiry or invitation, and to send you an acknowledgement that we received it.</li>
          <li>To send you the newsletter or updates you signed up for. Every email includes a way to unsubscribe.</li>
          <li>To understand, in aggregate, how the site is used so we can improve it.</li>
        </ul>

        <h2 id="who-we-share-it-with">Who we share it with</h2>
        <p>We use a small number of service providers to run the site, and they only process information on our behalf:</p>
        <ul>
          <li><strong>Vercel</strong> hosts the site and provides privacy-friendly visitor analytics that do not use cookies or identify you personally.</li>
          <li><strong>Resend</strong> delivers form notifications and emails, and stores newsletter subscriber details.</li>
          <li><strong>Vimeo</strong> and <strong>YouTube</strong> host the videos and conversations linked or embedded on the site. When you play or open one, that service may set its own cookies under its own privacy policy.</li>
        </ul>
        <p>Some of these providers store data outside Australia, including in the United States. We will otherwise only disclose personal information where the law requires it.</p>

        <h2 id="cookies">Cookies and local storage</h2>
        <p>This site does not use advertising or tracking cookies. It remembers a couple of display preferences (such as the colour palette) in your browser&rsquo;s local storage; these stay on your device and are never sent to us.</p>

        <h2 id="keeping-it-safe">Keeping it safe</h2>
        <p>The site is served over an encrypted connection and we limit access to your information to the people who need it to respond to you. We keep enquiries only for as long as we need them, and you can unsubscribe from email at any time.</p>

        <h2 id="your-choices">Access, correction and complaints</h2>
        <p>You can ask to see, correct or delete the personal information we hold about you, or raise a privacy concern, by <Link href="/?interest=Other#contact" data-interest="Other">sending us a message</Link>. We will respond within a reasonable time. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.</p>

        <h2 id="changes">Changes to this policy</h2>
        <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
      </div>
    </section>
  );
}
