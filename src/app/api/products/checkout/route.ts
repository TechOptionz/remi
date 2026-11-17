// Every program's buy button links here (/api/products/checkout?product=<slug>; a form post works too): opens Stripe
// Checkout at the price its page shows, with GST added for a "+ GST" price and shown as included for the others, then
// Stripe returns the buyer to /products/thank-you. Which programs are on sale: content/checkout.ts.
// See lib/product-sales.ts.
import { productBySlug, productHref } from '@/content/products';
import { amountOf, imageOf, PLUS_GST } from '@/content/checkout';
import { liveOnSale } from '@/lib/program-links';
import { stripe } from '@/lib/book-sales';
import { gstRateId } from '@/lib/product-sales';

export const runtime = 'nodejs';

async function checkout(request: Request, slug: string) {
  const origin = new URL(request.url).origin;
  const product = productBySlug(slug);
  if (!product || !(await liveOnSale(slug))) return Response.redirect(`${origin}${product ? productHref(slug) : '/products'}`, 303);

  try {
    const taxRate = await gstRateId(PLUS_GST.has(slug) ? 'exclusive' : 'inclusive');
    const image = imageOf(slug);
    const session = await stripe().checkout.sessions.create({
      mode: 'payment',
      submit_type: 'pay',
      line_items: [{
        quantity: 1,
        tax_rates: [taxRate],
        price_data: {
          currency: 'aud',
          unit_amount: amountOf(product),
          product_data: {
            name: product.title,
            description: product.text,
            // Stripe shows the image when it can fetch it (not from localhost)
            ...(image && origin.startsWith('https://') ? { images: [origin + image] } : {}),
          },
        },
      }],
      metadata: { product: slug },
      payment_intent_data: { metadata: { product: slug }, description: product.title },
      success_url: `${origin}/products/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${productHref(slug)}`,
    });
    return Response.redirect(session.url!, 303);
  } catch (e) {
    console.error('Stripe checkout failed', e);
    return Response.redirect(`${origin}/products/thank-you?failed=${encodeURIComponent(slug)}`, 303);
  }
}

export async function GET(request: Request) {
  return checkout(request, new URL(request.url).searchParams.get('product') ?? '');
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  return checkout(request, String(form?.get('product') ?? ''));
}
