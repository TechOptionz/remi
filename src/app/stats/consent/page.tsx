// Private: the weekly teaching consent records (lib/consent.ts), for the team. Open /stats/consent?key=<STATS_KEY>;
// without the right key the page 404s. Not in the sitemap, not indexed, rendered on request.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WEEKLY_CONSENT_VERSIONS, WEEKLY_UNSUBSCRIBE_PATH } from '@/content/consent';
import { SITE_URL } from '@/content/site';
import { consentLog, consentStoreEnabled, currentChoices, type ConsentEvent } from '@/lib/consent';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Weekly teaching consent — Remi Pearson', robots: { index: false, follow: false } };

const when = (iso: string) => new Date(iso).toLocaleString('en-AU', { timeZone: 'Australia/Sydney', dateStyle: 'medium', timeStyle: 'short' });

export default async function ConsentPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  if (!process.env.STATS_KEY || key !== process.env.STATS_KEY) notFound();
  const log = await consentLog();
  const current = currentChoices(log);
  // For each person, the yes that their current choice rests on (the newest opt-in)
  const lastYes = new Map<string, ConsentEvent>();
  for (const e of log) if (e.action === 'opt_in' && !lastYes.has(e.email)) lastYes.set(e.email, e);
  const inNow = current.filter(e => e.action === 'opt_in');
  const outNow = current.filter(e => e.action === 'opt_out');
  const csv = `/api/consent?key=${encodeURIComponent(key)}`;

  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero rf-stats weekly-consent">
        <p className="pr-eyebrow">Private · for the team</p>
        <h1 className="pr-title">Weekly teaching consent</h1>
        <p className="pr-lede">{inNow.length} people currently receive the weekly teaching emails; {outNow.length} have unsubscribed. Only the people under “Opted in” may be sent them. Times are Sydney time.</p>
        {!consentStoreEnabled() && <p className="form-error">Records are off: the Upstash settings are missing on this server.</p>}
        <p><a className="pr-btn" href={csv}>Download every record (CSV)</a></p>
        <p>Unsubscribe link for the footer of every weekly email: <code>{`${SITE_URL}${WEEKLY_UNSUBSCRIBE_PATH}?email={{{EMAIL}}}`}</code></p>

        <h2>Current choices</h2>
        <div className="pr-table">
          <table>
            <thead><tr><th scope="col">Email</th><th scope="col">Choice</th><th scope="col">Since</th><th scope="col">Agreed on form</th><th scope="col">Wording</th></tr></thead>
            <tbody>
              {current.map(e => {
                const yes = lastYes.get(e.email);
                return (
                  <tr key={e.email}>
                    <th scope="row">{e.email}{yes?.name ? ` (${yes.name})` : ''}</th>
                    <td data-label="Choice">{e.action === 'opt_in' ? 'Opted in' : 'Unsubscribed'}</td>
                    <td data-label="Since">{when(e.at)}</td>
                    <td data-label="Agreed on form">{yes ? <>{yes.form}{yes.url ? <> · {yes.url}</> : null}<br />{when(yes.at)}</> : '—'}</td>
                    <td data-label="Wording">{yes?.version ?? '—'}</td>
                  </tr>
                );
              })}
              {!current.length && <tr><td colSpan={5}>No records yet.</td></tr>}
            </tbody>
          </table>
        </div>

        <h2>Wording versions</h2>
        <ul>{Object.entries(WEEKLY_CONSENT_VERSIONS).map(([v, t]) => <li key={v}><strong>{v}</strong>: “{t}”</li>)}</ul>

        <h2>Full history</h2>
        <div className="pr-table">
          <table>
            <thead><tr><th scope="col">When</th><th scope="col">Email</th><th scope="col">What</th><th scope="col">Where</th></tr></thead>
            <tbody>
              {log.map((e, i) => (
                <tr key={i}>
                  <th scope="row">{when(e.at)}</th>
                  <td data-label="Email">{e.email}</td>
                  <td data-label="What">{e.action === 'opt_in' ? `Said yes (wording ${e.version})` : 'Unsubscribed'}</td>
                  <td data-label="Where">{e.action === 'opt_in' ? e.form : e.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
