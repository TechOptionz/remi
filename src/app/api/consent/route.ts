// Private: the weekly teaching consent log as CSV, for the team (or for anyone who asks what they agreed to).
// GET /api/consent?key=<STATS_KEY>[&email=<address>] — without the right key it 404s.
import { consentLog, normalEmail, toCsv } from '@/lib/consent';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  if (!process.env.STATS_KEY || params.get('key') !== process.env.STATS_KEY) return new Response('Not found', { status: 404 });
  const only = params.get('email');
  const log = (await consentLog()).filter(e => !only || e.email === normalEmail(only));
  return new Response('﻿' + toCsv(log), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="weekly-teaching-consent-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
