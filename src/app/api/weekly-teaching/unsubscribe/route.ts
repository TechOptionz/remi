// Stops the weekly teaching emails for one address (lib/consent.ts). The waitlist place and every other list stay.
// POST JSON { email } from the unsubscribe page, or a one-click POST to ?email=<address> (List-Unsubscribe-Post).
import { recordOptOut } from '@/lib/consent';

export const runtime = 'nodejs';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = new URL(request.url).searchParams.get('email') ?? '';
  if (!email && request.headers.get('content-type')?.includes('application/json')) {
    const body = (await request.json().catch(() => null)) as { email?: unknown; fax?: unknown } | null;
    if (body?.fax) return Response.json({ ok: true }); // bot honeypot
    if (typeof body?.email === 'string') email = body.email;
  }
  email = email.trim();
  if (!EMAIL.test(email) || email.length > 254) return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  try {
    await recordOptOut(email);
  } catch {
    return Response.json({ error: 'We could not save that just now. Please try again, or reply to any weekly email and we’ll stop them for you.' }, { status: 503 });
  }
  return Response.json({ ok: true });
}
