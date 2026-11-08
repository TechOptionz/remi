// Stop the weekly teaching emails (content/consent.ts). Linked from every weekly email as ?email=<address>.
// Noindex and held out of the sitemap; rendered on request so the address can be prefilled.
import type { Metadata } from 'next';
import UnsubscribeForm from './UnsubscribeForm';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Weekly teaching emails — Remi Pearson', robots: { index: false, follow: false } };

export default async function UnsubscribePage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email } = await searchParams;
  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero weekly-unsub">
        <p className="pr-eyebrow">Weekly teaching emails</p>
        <h1 className="pr-title">Stop the weekly emails</h1>
        <p className="pr-lede">This stops only the short weekly teaching emails. You keep your place on any waitlist you’ve joined, and you’ll still hear about the program you chose.</p>
        <UnsubscribeForm email={typeof email === 'string' ? email.slice(0, 254) : ''} />
      </section>
    </main>
  );
}
