'use client';

// "Tell me when it's ready" — email capture for the Self-Esteem Triad guided introduction, until the product exists.
import { useId, useState } from 'react';
import { submitLead } from '@/lib/forms';

export default function TriadNotify() {
  const [sent, setSent] = useState(false);
  const id = useId();

  if (sent) return <p className="news-thanks triad-thanks">Thank you. I’ll let you know the moment it’s ready.</p>;

  return (
    <form className="keep-form triad-notify" onSubmit={e => { e.preventDefault(); submitLead('waitlist', e.currentTarget); setSent(true); }}>
      <input type="hidden" name="product" value="Self-Esteem Triad" />
      <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
      <input id={`${id}-email`} name="email" type="email" required placeholder="Your email address" autoComplete="email" />
      <button type="submit">Tell me when it’s ready <span aria-hidden="true">→</span></button>
    </form>
  );
}
