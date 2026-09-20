'use client';

// JOIN THE PRIVATE WAITLIST — black band: what joining means left, the form right. Delivery options live in DELIVERY (content/programs.ts).
import { useEffect, useRef, useState } from 'react';
import { DELIVERY } from '@/content/programs';
import { submitLead } from '@/lib/forms';

export default function WaitlistForm() {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sentBox = useRef<HTMLDivElement>(null);

  useEffect(() => { if (sent) sentBox.current?.focus(); }, [sent]);

  return (
    <section id="waitlist" className="ry-band ry-band--black" aria-labelledby="waitlist-h">
      <div className="ry-waitlist">
        <div className="ry-prose ry-waitlist-copy">
          <h2 id="waitlist-h" className="ry-title">Join the private <em>waitlist</em></h2>
          <p>Rebel Yell will be offered to a small number of organisations because the work depends on my direct involvement.</p>
          <p>Joining the waitlist gives you early access when conversations open. It does not commit you to an engagement. I will ask enough to understand what is happening and whether Rebel Yell is appropriate for the problem you are facing.</p>
          <p>If it is, we will begin with a confidential conversation.</p>
          <p className="ry-callout">If it isn’t, I will tell you.</p>
        </div>
        <div className="ry-form-panel">
          <p className="ry-hand ry-form-hand" hidden={sent}>Tell me what has stopped moving.</p>
          <form ref={form} className="ry-form" data-crm="gohighlevel" hidden={sent}
            onSubmit={e => { e.preventDefault(); submitLead('waitlist', e.currentTarget); setSent(true); }}>
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Role<input name="role" required autoComplete="organization-title" /></label>
            <label>Organisation<input name="organisation" required autoComplete="organization" /></label>
            <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
            <label className="ry-form-wide">Website<input name="website" inputMode="url" autoComplete="url" placeholder="yourcompany.com" /></label>
            <label className="ry-form-wide">Where is the organisation currently stuck?<textarea name="stuck" rows={4} required></textarea></label>
            <label className="ry-form-wide">What has already been attempted?<textarea name="attempted" rows={3}></textarea></label>
            <label className="ry-form-wide">Why does this matter now?<textarea name="why_now" rows={3}></textarea></label>
            <label className="ry-form-wide">Who would need to be involved in changing it?<textarea name="who" rows={3}></textarea></label>
            <fieldset className="ry-form-wide ry-choices">
              <legend>Preferred delivery</legend>
              {DELIVERY.map(o => (
                <label key={o}><input type="radio" name="delivery" value={o} /><span>{o}</span></label>
              ))}
            </fieldset>
            <div className="ry-form-wide ry-form-actions">
              <button type="submit" className="btn btn--primary btn--caps">Join the private waitlist</button>
              <p className="fine">Your information will be treated confidentially. Joining the waitlist does not subscribe you to unrelated marketing or commit you to working together.</p>
            </div>
          </form>
          <div className="ry-sent" tabIndex={-1} hidden={!sent} ref={sentBox}>
            <p className="card-eyebrow">Received</p>
            <h3>Thank you.</h3>
            <p>You’re on the private waitlist. Your information will be treated confidentially, and I’ll be in touch when conversations open.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
