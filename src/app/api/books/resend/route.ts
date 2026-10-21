// For the team: sends a buyer a fresh download link (valid another 7 days) when theirs has run out.
// Open /api/books/resend?key=<STATS_KEY>&order=<Stripe Checkout session id, cs_…> (shown in the sale notification).
import { deliver, paidOrder } from '@/lib/book-sales';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = process.env.STATS_KEY;
  if (!key || url.searchParams.get('key') !== key) return new Response('Not found', { status: 404 });
  const id = url.searchParams.get('order') ?? '';
  const order = id.startsWith('cs_') ? await paidOrder(id).catch(() => null) : null;
  if (!order) return new Response('No paid order with that id.', { status: 404 });
  try {
    await deliver(url.origin, order.session, order.book, true);
  } catch (e) {
    console.error('Book resend failed', e);
    return new Response('The email could not be sent. Please try again.', { status: 502 });
  }
  return new Response(`A new download link for ${order.book.title} has been sent to ${order.session.customer_details?.email}.`);
}
