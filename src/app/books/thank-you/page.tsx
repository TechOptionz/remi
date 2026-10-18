// Where Stripe returns a buyer after paying (/books/thank-you?session_id=…): confirms the order and shows the download
// buttons straight away; the same link arrives by email from the webhook. Private: noindex, out of the sitemap.
import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/books/DownloadButton';
import { bookBySlug, downloadLinks, LINK_DAYS, paidOrder } from '@/lib/book-sales';

export const metadata: Metadata = { title: 'Thank you — Remi Pearson', robots: { index: false, follow: false } };

const dateOf = (ms: number) => new Date(ms).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Sydney' });

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const q = await searchParams;
  const id = typeof q.session_id === 'string' ? q.session_id : '';
  const order = id.startsWith('cs_') ? await paidOrder(id).catch(() => null) : null;
  const failed = typeof q.failed === 'string' ? bookBySlug(q.failed) : undefined;

  if (!order) {
    return (
      <main className="pr-page pr-page--burgundy pr-page--thankyou">
        <section className="pr-hero" aria-labelledby="ty-h">
          <p className="pr-eyebrow">Books</p>
          <h1 id="ty-h" className="pr-title">{failed ? 'Checkout didn’t open' : 'We couldn’t find that order'}</h1>
          <p className="pr-lede">{failed
            ? <>Nothing has been charged. Please try again from <Link href={`/books/${failed.slug}`}>{failed.title}</Link>.</>
            : <>If you have paid, your download link is on its way to your inbox. If it hasn’t arrived within a few minutes, <Link href="/#contact">get in touch</Link> and we’ll sort it out.</>}</p>
        </section>
      </main>
    );
  }

  const { session, book: b } = order;
  // Same-site links on the page. Should signing fail (BOOKS_DOWNLOAD_SECRET missing), the buyer is still paid up and
  // the email carries the link once fixed: say so rather than show an error.
  let dl: ReturnType<typeof downloadLinks> | null = null;
  try { dl = downloadLinks('', session, b); } catch (e) { console.error('Thank-you page could not sign download links', e); }
  const email = session.customer_details?.email;
  return (
    <main className="pr-page pr-page--burgundy pr-page--thankyou">
      <section className="pr-hero" aria-labelledby="ty-h">
        <p className="pr-eyebrow">Thank you</p>
        <h1 id="ty-h" className="pr-title">Your copy of <em>{b.title}</em> is ready.</h1>
        <p className="pr-lede">Download it now and save it somewhere you can find it again.</p>
      </section>
      <section className="pr-notify-band pr-thankyou" aria-label="Download">
        <div className="pr-thankyou-row">
          <img src={b.cover.src} alt="" width={b.cover.width} height={b.cover.height} />
          <div>
            {dl
              ? <>
                <p className="pr-thankyou-btns">{dl.links.map(l => <DownloadButton key={l.format} {...l} />)}</p>
                <p>{email ? <>We’ve also emailed the link to <strong>{email}</strong>. </> : null}It works for {LINK_DAYS} days, until {dateOf(dl.expires)}.</p>
              </>
              : <p>Your payment went through. Your download link is on its way{email ? <> to <strong>{email}</strong></> : null}; if it hasn’t arrived within a few minutes, <Link href="/#contact">get in touch</Link>.</p>}
            <p className="pr-fine">{b.note} Your receipt comes from Stripe.</p>
          </div>
        </div>
      </section>
      <p className="pr-more"><Link href="/books">Back to the books</Link></p>
    </main>
  );
}
