// The Shift — coming soon (copy to come). Waitlist sign-ups go through submitLead('waitlist') with the product name.
import type { Metadata } from 'next';
import Link from 'next/link';
import NotifyForm from '@/components/products/NotifyForm';

export const metadata: Metadata = {
  title: 'The Shift — Remi Pearson',
  description: 'The Shift, a program by Remi Pearson. Coming soon: join the waitlist.',
};

export default function TheShiftPage() {
  return (
    <main className="pr-page pr-page--navy">
      <section className="pr-hero" aria-labelledby="shift-h">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">The Shift</span>
        </nav>
        <p className="pr-eyebrow">Program</p>
        <h1 id="shift-h" className="pr-title">The Shift</h1>
        <p className="pr-soon"><span>Coming soon</span></p>
      </section>
      <section className="pr-notify-band" aria-labelledby="shift-w">
        <h2 id="shift-w" className="pr-h2">Join the waitlist</h2>
        <p>Leave your email and I’ll tell you when The Shift opens.</p>
        <NotifyForm product="The Shift" />
      </section>
    </main>
  );
}
