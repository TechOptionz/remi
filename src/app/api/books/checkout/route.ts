// A book's Buy button posts here (a plain form, so it works without JavaScript): opens Stripe Checkout for that book at
// the price its page shows, then Stripe returns the buyer to /books/thank-you. See lib/book-sales.ts.
import { amountOf, bookBySlug, onSale, stripe } from '@/lib/book-sales';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const form = await request.formData().catch(() => null);
  const b = bookBySlug(String(form?.get('book') ?? ''));
  if (!b || !onSale(b)) return Response.redirect(`${origin}/books`, 303);

  try {
    const session = await stripe().checkout.sessions.create({
      mode: 'payment',
      submit_type: 'pay',
      line_items: [{
        quantity: 1,
        price_data: {
          currency: 'aud',
          unit_amount: amountOf(b),
          product_data: {
            name: `${b.title} (${b.format.toLowerCase()})`,
            description: b.note,
            // Stripe shows the cover when it can fetch it (not from localhost)
            ...(origin.startsWith('https://') ? { images: [origin + b.cover.src] } : {}),
          },
        },
      }],
      metadata: { book: b.slug },
      payment_intent_data: { metadata: { book: b.slug }, description: `${b.title} ebook` },
      success_url: `${origin}/books/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/books/${b.slug}`,
    });
    return Response.redirect(session.url!, 303);
  } catch (e) {
    console.error('Stripe checkout failed', e);
    return Response.redirect(`${origin}/books/thank-you?failed=${b.slug}`, 303);
  }
}
