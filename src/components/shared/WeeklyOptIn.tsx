'use client';

// The optional, unticked "weekly teaching while you wait" choice on every program waitlist form. Sends weekly = Yes / No
// and the wording's version; /api/lead records the choice (lib/consent.ts). Joining the waitlist never depends on it.
import { useId } from 'react';
import { WEEKLY_CONSENT } from '@/content/consent';

export default function WeeklyOptIn({ className }: { className?: string }) {
  const id = useId();
  return (
    <div className={['weekly-optin', className].filter(Boolean).join(' ')}>
      {/* Unticked sends "No" (the hidden field); ticked, the checkbox's "Yes" comes later and wins */}
      <input type="hidden" name="weekly" value="No" />
      <input type="hidden" name="weeklyVersion" value={WEEKLY_CONSENT.version} />
      <input id={`${id}-w`} name="weekly" type="checkbox" value="Yes" />
      <label htmlFor={`${id}-w`}>{WEEKLY_CONSENT.text}</label>
    </div>
  );
}
