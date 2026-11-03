// Where Stripe returns a program buyer after paying (/products/thank-you?session_id=…): confirms the order and gives the
// access link straight away (or says it is on its way); the same arrives by email from the webhook. Private: noindex,
// out of the sitemap. See lib/product-sales.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { productBySlug, productHref } from '@/content/products';
import { imageOf } from '@/content/checkout';
import { accessUrl, paidProductOrder } from '@/lib/product-sales';

export const metadata: Metadata = { title: 'Thank you — Remi Pearson', robots: { index: false, follow: false } };

export default async function ProductThankYouPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const q = await searchParams;
  const id = typeof q.session_id === 'string' ? q.session_id : '';
  const order = id.startsWith('cs_') ? await paidProductOrder(id).catch(() => null) : null;
  const failed = typeof q.failed === 'string' ? productBySlug(q.failed) : undefined;

  if (!order) {
    return (
      <main className="pr-page pr-page--burgundy pr-page--thankyou">
        <section className="pr-hero" aria-labelledby="ty-h">
          <p className="pr-eyebrow">Programs</p>
          <h1 id="ty-h" className="pr-title">{failed ? 'Checkout didn’t open' : 'We couldn’t find that order'}</h1>
          <p className="pr-lede">{failed
            ? <>Nothing has been charged. Please try again from <Link href={productHref(failed.slug)}>{failed.title}</Link>.</>
            : <>If you have paid, your access details are on their way to your inbox. If they haven’t arrived within a few minutes, <Link href="/#contact">get in touch</Link> and we’ll sort it out.</>}</p>
        </section>
      </main>
    );
  }

  const { session, product } = order;
  const image = imageOf(product.slug);
  const access = accessUrl();
  const email = session.customer_details?.email;
  return (
    <main className="pr-page pr-page--burgundy pr-page--thankyou">
      <section className="pr-hero" aria-labelledby="ty-h">
        <p className="pr-eyebrow">Thank you</p>
        <h1 id="ty-h" className="pr-title">Welcome to <em>{product.title}</em>.</h1>
        <p className="pr-lede">{access ? 'Your program is ready. Start whenever you like and go at your own pace.' : 'Your payment went through and your place is confirmed.'}</p>
      </section>
      <section className="pr-notify-band pr-thankyou" aria-label="Access">
        <div className="pr-thankyou-row">
          {image && <img src={image} alt="" />}
          <div>
            {access
              ? <>
                <p className="pr-thankyou-btns"><a href={access} className="hm-btn">Sign in and start</a></p>
                <p>If this is your first program with Remi, look for an email from Remi’s online school to set your password, then sign in. {email ? <>We’ve also emailed this link to <strong>{email}</strong>, so you can come back to it.</> : 'We’ve also emailed you this link, so you can come back to it.'}</p>
              </>
              : <p>Your access details are on their way{email ? <> to <strong>{email}</strong></> : null} (within one business day). If they haven’t arrived, <Link href="/#contact">get in touch</Link>.</p>}
            <p className="pr-fine">Your receipt comes from Stripe.</p>
          </div>
        </div>
      </section>
      <p className="pr-more"><Link href={productHref(product.slug)}>Back to {product.title}</Link></p>
    </main>
  );
}
