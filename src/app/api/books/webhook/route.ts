// Stripe's payment listener (Stripe → Developers → Webhooks, event checkout.session.completed and
// checkout.session.async_payment_succeeded). Emails the buyer their download link and the team a sale notification,
// once per order. Answers 500 when delivery fails so Stripe tries again. See lib/book-sales.ts.
import type Stripe from 'stripe';
import { deliver, firstDelivery, forgetDelivery, paidOrder, stripe } from '@/lib/book-sales';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get('stripe-signature');
  if (!secret || !signature) return new Response('Not configured', { status: 400 });

  let event: Stripe.Event;
  try {
    event = await stripe().webhooks.constructEventAsync(await request.text(), signature, secret);
  } catch (e) {
    console.error('Stripe webhook signature check failed', e);
    return new Response('Bad signature', { status: 400 });
  }
  if (event.type !== 'checkout.session.completed' && event.type !== 'checkout.session.async_payment_succeeded') {
    return Response.json({ received: true });
  }

  // Read the order back from Stripe rather than trusting the event body, and only deliver once it is paid
  const order = await paidOrder(event.data.object.id);
  if (!order) return Response.json({ received: true, delivered: false });
  if (!(await firstDelivery(order.session.id))) return Response.json({ received: true, delivered: 'already' });

  try {
    await deliver(new URL(request.url).origin, order.session, order.book);
  } catch (e) {
    console.error('Book delivery failed', order.session.id, e);
    await forgetDelivery(order.session.id);
    return new Response('Delivery failed', { status: 500 });
  }
  return Response.json({ received: true, delivered: true });
}
