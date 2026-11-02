// Stripe's payment listener for every sale (Stripe → Developers → Webhooks, event checkout.session.completed and
// checkout.session.async_payment_succeeded): ebooks (metadata `book`, lib/book-sales.ts) and programs (metadata
// `product`, lib/product-sales.ts). Emails the buyer their download / access link and the team a sale notification,
// once per order. Answers 500 when delivery fails so Stripe tries again.
import type Stripe from 'stripe';
import { deliver, firstDelivery, forgetDelivery, paidOrder, stripe } from '@/lib/book-sales';
import { deliverProduct, paidProductOrder } from '@/lib/product-sales';

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

  // A program sale (metadata `product`)
  if (event.data.object.metadata?.product) {
    const sale = await paidProductOrder(event.data.object.id);
    if (!sale) return Response.json({ received: true, delivered: false });
    if (!(await firstDelivery(sale.session.id))) return Response.json({ received: true, delivered: 'already' });
    try {
      await deliverProduct(sale.session, sale.product);
    } catch (e) {
      console.error('Program delivery failed', sale.session.id, e);
      await forgetDelivery(sale.session.id);
      return new Response('Delivery failed', { status: 500 });
    }
    return Response.json({ received: true, delivered: true });
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
