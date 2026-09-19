'use client';

// CONTACT — homepage enquiry section and form. Options live in INTERESTS (content/site.ts).
// data-chat-form tells the chat widget this page can take enquiries itself (value = the select's name).
import { useRef, useState } from 'react';
import { INTERESTS } from '@/content/site';
import { submitLead, usePresetSelect } from '@/lib/forms';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const interest = useRef<HTMLSelectElement>(null);
  // Links anywhere on the site preset the topic: <a data-interest="Speaking"> or /?interest=Speaking#contact
  usePresetSelect(interest, 'interest');

  return (
    <section id="contact" className="section split" aria-labelledby="contact-h">
      <div>
        <p className="eyebrow">Enquiries</p>
        <h2 id="contact-h" className="h2">Bring Remi to your stage, your strategy day or your organisation.</h2>
        <p className="body-lg">Remi's team responds to speaking, facilitation, media and product enquiries within two business days. Individual coaching requests cannot be accommodated.</p>
      </div>
      <div>
        <form ref={form} className="enquiry-form" data-crm="gohighlevel" data-chat-form="interest" hidden={sent}
          onSubmit={e => { e.preventDefault(); submitLead('enquiry', e.currentTarget); setSent(true); }}>
          <label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></label>
          <label>I'm interested in
            <select name="interest" ref={interest}>
              {INTERESTS.map(o => <option value={o.value} key={o.value}>{o.label}</option>)}
            </select>
          </label>
          <button type="submit" className="btn btn--primary btn--block">Send my enquiry</button>
          <span className="fine">Your details are never shared.</span>
        </form>
        <div className="form-sent" hidden={!sent}>
          <p className="card-eyebrow">Received</p>
          <h3>Thank you.</h3>
          <p>Remi's team will reply within two business days.</p>
          <button type="button" className="btn btn--outline btn--sm" onClick={() => { form.current?.reset(); setSent(false); }}>Send another</button>
        </div>
      </div>
    </section>
  );
}
