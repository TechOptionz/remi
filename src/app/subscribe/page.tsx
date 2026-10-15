// Subscribe — "Stay in touch with Remi" (the homepage spotlight links here). The same newsletter sign-up as the footer.
import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/shared/NewsletterForm';
import { FOOTER } from '@/content/site';

export const metadata: Metadata = {
  title: 'Subscribe — Remi Pearson',
  description: 'Stay in touch with Remi Pearson: thoughtful ideas, new conversations and the occasional invitation, by email.',
};

export default function SubscribePage() {
  return (
    <main className="pr-page pr-page--burgundy">
      <section className="pr-hero" aria-labelledby="subscribe-h">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Subscribe</span>
        </nav>
        <p className="pr-eyebrow">Stay in touch</p>
        <h1 id="subscribe-h" className="pr-title">Stay in touch with Remi</h1>
        <p className="pr-lede">{FOOTER.newsCopy}</p>
      </section>
      <section className="pr-notify-band pr-subscribe" aria-labelledby="subscribe-w">
        <h2 id="subscribe-w" className="pr-h2">{FOOTER.newsHead}</h2>
        <NewsletterForm className="pr-notify" />
      </section>
    </main>
  );
}
