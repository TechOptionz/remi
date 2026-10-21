// The private download link from the delivery email and the thank-you page: /api/books/download?t=<signed token>&f=pdf
// (&dl=1 saves the file instead of showing it in the browser).
// Checks the link is genuine and unexpired, then sends the browser to a 10-minute signed URL for the file in private
// Vercel Blob storage, so the file (up to ~70 MB) downloads straight from Blob, not through this function (4.5 MB cap).
import { issueSignedToken, presignUrl } from '@vercel/blob';
import { blobPath, bookBySlug, readToken, type Format } from '@/lib/book-sales';

export const runtime = 'nodejs';

const page = (status: number, message: string) => new Response(
  `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Download — Remi Pearson</title><body style="font-family:sans-serif;max-width:36em;margin:15vh auto;padding:0 20px;line-height:1.6;color:#221b17;background:#f4ede3"><h1 style="font-weight:400">${message}</h1><p>Reply to your order email, or write to us through <a href="/#contact">the contact form</a>, and we will send you a new link.</p><p><a href="/books">Back to the books</a></p>`,
  { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } },
);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const order = readToken(url.searchParams.get('t') ?? '');
  if (!order) return page(410, 'This download link has expired or is not valid.');
  const b = bookBySlug(order.slug);
  const f = url.searchParams.get('f') as Format | null;
  if (!b || !f || !b.files?.includes(f)) return page(404, 'We could not find that file.');

  try {
    const pathname = blobPath(b, f), validUntil = Date.now() + 10 * 60 * 1000;
    const token = await issueSignedToken({ pathname, operations: ['get'], validUntil });
    const { presignedUrl } = await presignUrl(token, { operation: 'get', pathname, validUntil, access: 'private' });
    const location = new URL(presignedUrl);
    if (url.searchParams.get('dl') === '1') location.searchParams.set('download', '1');
    return new Response(null, { status: 302, headers: { Location: location.toString(), 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' } });
  } catch (e) {
    console.error('Blob signed URL failed', e);
    return page(404, 'We could not find that file.');
  }
}
