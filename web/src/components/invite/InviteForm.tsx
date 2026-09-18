'use client';

// TELL ME WHAT YOU'RE IMAGINING — invitation form. Options live in INVITATIONS (content/site.ts).
// data-chat-form tells the chat widget this page can take enquiries itself (value = the select's name).
import { useCallback, useEffect, useRef, useState } from 'react';
import { INVITATIONS } from '@/content/site';
import { submitLead, usePresetSelect } from '@/lib/forms';

export default function InviteForm() {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const invitation = useRef<HTMLSelectElement>(null);
  const sentBox = useRef<HTMLDivElement>(null);

  // Room buttons (<a data-invite="Speaking">) and /invite-remi?invite=Speaking#invite-form preset the select.
  // Let the anchor scroll first, then put the cursor in the first field without jumping
  const focusName = useCallback(() => {
    setTimeout(() => (form.current?.elements.namedItem('name') as HTMLInputElement | null)?.focus({ preventScroll: true }), 450);
  }, []);
  usePresetSelect(invitation, 'invite', focusName);

  useEffect(() => { if (sent) sentBox.current?.focus(); }, [sent]);

  return (
    <section id="invite-form" className="band-dark" aria-labelledby="form-h">
      <div className="invite-panel">
        <p className="eyebrow">Send the invitation</p>
        <h2 id="form-h" className="h2">Tell me what you're imagining</h2>
        <p className="section-sub">Have something else in mind? Wonderful. The most interesting invitations do not always arrive with a familiar label.</p>
        <form ref={form} className="invite-form" data-crm="gohighlevel" data-chat-form="invitation" hidden={sent}
          onSubmit={e => { e.preventDefault(); submitLead('invitation', e.currentTarget); setSent(true); }}>
          <div className="invite-col">
            <label>Your name<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Organisation<input name="organisation" autoComplete="organization" /></label>
            <label>What are you inviting me to?
              <select name="invitation" required ref={invitation}>
                {INVITATIONS.map(o => <option value={o.value} key={o.value}>{o.label}</option>)}
              </select>
            </label>
            <label>Date, location or online<input name="when" /></label>
          </div>
          <div className="invite-col">
            <label>Who will be in the room?<textarea name="audience" rows={3}></textarea></label>
            <label>What would you love us to explore?<textarea name="explore" rows={3}></textarea></label>
            <label>Why does this feel like the right fit?<textarea name="fit" rows={3}></textarea></label>
          </div>
          <div className="invite-actions">
            <button type="submit" className="btn btn--primary">Send the invitation</button>
            <span className="fine">My team will read your invitation and come back to you with the next sensible step.</span>
          </div>
        </form>
        <div className="invite-sent" tabIndex={-1} hidden={!sent} ref={sentBox}>
          <p className="card-eyebrow">Received</p>
          <h3>Thank you.</h3>
          <p>My team will read your invitation and come back to you with the next sensible step.</p>
          <button type="button" className="btn btn--outline btn--sm" onClick={() => { form.current?.reset(); setSent(false); }}>Send another</button>
        </div>
      </div>
    </section>
  );
}
