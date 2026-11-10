// Private: link each course in Remi's Thinkific school to its program page on the site, and put it on sale.
// Open /admin/programs?key=<ADMIN_KEY> (or STATS_KEY when ADMIN_KEY is not set); without the right key the page 404s.
// Not in the sitemap, not indexed, rendered on request. Saving writes to Redis (lib/program-links.ts) and refreshes the
// program's page, so its sign-up turns into a Buy button (Stripe Checkout → enrolment in the linked course) or back.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath, updateTag } from 'next/cache';
import { PRODUCTS, FREE, productBySlug, productHref } from '@/content/products';
import { amountOf } from '@/content/checkout';
import { LINKS_TAG, linkOf, linksReady, liveOnSale, recentChanges, saveLink } from '@/lib/program-links';
import { listCourses, thinkificReady, type SchoolCourse } from '@/lib/thinkific';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Program links — Remi Pearson', robots: { index: false, follow: false } };

const adminKey = () => process.env.ADMIN_KEY || process.env.STATS_KEY;
const STATUS: Record<string, string> = { published: 'Published', presell: 'Pre-order', draft: 'Draft' };
const squash = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const when = (iso: string) => new Date(iso).toLocaleString('en-AU', { timeZone: 'Australia/Sydney', dateStyle: 'medium', timeStyle: 'short' });

async function save(form: FormData) {
  'use server';
  const key = String(form.get('key') ?? '');
  if (!adminKey() || key !== adminKey()) notFound();
  const courseId = Number(form.get('courseId'));
  const course = String(form.get('course') ?? '');
  const slug = String(form.get('slug') ?? '');
  const onSale = form.get('onSale') === 'on';
  if (!courseId || (slug && !productBySlug(slug))) notFound();

  // One page per course: unlink any other page that sold this course.
  const touched = new Set<string>();
  for (const p of PRODUCTS) {
    if (p.slug !== slug && (await linkOf(p.slug)).courseId === courseId) {
      await saveLink(p.slug, { courseId: null, onSale: false }, course);
      touched.add(p.slug);
    }
  }
  if (slug) {
    await saveLink(slug, { courseId, onSale }, course);
    touched.add(slug);
  }
  updateTag(LINKS_TAG);
  for (const s of touched) revalidatePath(productHref(s));
  redirect(`/admin/programs?key=${encodeURIComponent(key)}&saved=${courseId}`);
}

export default async function ProgramLinksPage({ searchParams }: { searchParams: Promise<{ key?: string; saved?: string }> }) {
  const { key, saved } = await searchParams;
  if (!adminKey() || key !== adminKey()) notFound();

  let courses: SchoolCourse[] = [];
  let thinkificError: string | null = null;
  if (thinkificReady()) {
    try { courses = await listCourses(); } catch (e) { thinkificError = e instanceof Error ? e.message : String(e); }
  }
  // Which page each course is linked to now (saved on this screen, or the code default).
  const links = await Promise.all(PRODUCTS.map(async p => ({ p, link: await linkOf(p.slug), live: await liveOnSale(p.slug) })));
  const pageOf = (courseId: number) => links.find(l => l.link.courseId === courseId);
  const changes = await recentChanges();
  const stripeOn = !!process.env.STRIPE_SECRET_KEY;
  const options = [...PRODUCTS].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="pr-page pr-page--cream">
      <section className="pr-hero adm">
        <p className="pr-eyebrow">Private · for the team</p>
        <h1 className="pr-title">Program links</h1>
        <p className="pr-lede">Every course in Remi’s Thinkific school. Link a course to its page on the website and tick <strong>On sale</strong>: the page’s sign-up becomes a Buy button, buyers pay through Stripe on the website at the page’s price, and they are enrolled in the linked course automatically. Untick it and the page goes back to its waitlist.</p>

        <ul className="adm-checks">
          <li className={stripeOn ? 'ok' : 'bad'}>Stripe: {stripeOn ? `connected (${process.env.STRIPE_SECRET_KEY!.startsWith('sk_live') ? 'live' : 'test'} mode)` : 'not set up on this server, so nothing can be bought'}</li>
          <li className={thinkificReady() && !thinkificError ? 'ok' : 'bad'}>Thinkific: {thinkificError ? `could not load the courses (${thinkificError})` : thinkificReady() ? `${courses.length} courses found` : 'not set up on this server'}</li>
          <li className={linksReady() ? 'ok' : 'bad'}>Saving: {linksReady() ? 'ready' : 'Redis is not set up on this server, so links cannot be saved'}</li>
        </ul>

        <div className="adm-list">
          {courses.map(c => {
            const current = pageOf(c.id);
            const suggested = current ? undefined : options.find(p => p.slug === c.slug || squash(p.title) === squash(c.name));
            const open = !c.hidden && !c.private && c.status !== 'draft';
            return (
              <form key={c.id} action={save} className={`adm-row${String(c.id) === saved ? ' adm-row--saved' : ''}`}>
                <input type="hidden" name="key" value={key} />
                <input type="hidden" name="courseId" value={c.id} />
                <input type="hidden" name="course" value={c.name} />
                <div className="adm-course">
                  {c.image ? <img src={c.image} alt="" width={96} height={54} /> : <span className="adm-noimg" aria-hidden="true" />}
                  <div>
                    <h2>{c.name}</h2>
                    <p className="adm-meta">
                      <span className={`adm-tag adm-tag--${c.status}`}>{STATUS[c.status] ?? c.status}</span>
                      Course {c.id}
                    </p>
                    {open && <p className="adm-warn">Visible in the Thinkific catalog{c.price === 0 ? ': it is free there, so anyone can enrol without paying. Hide it in Thinkific.' : ', with its own Thinkific price.'}</p>}
                    {c.status === 'draft' && <p className="adm-warn">Draft in Thinkific: set it to Pre-order or Published before selling it.</p>}
                  </div>
                </div>

                <label className="adm-field">
                  <span>Page on the website</span>
                  <select name="slug" defaultValue={current?.p.slug ?? ''}>
                    <option value="">— Not linked —</option>
                    {options.map(p => {
                      const free = amountOf(p) === 0;
                      return <option key={p.slug} value={p.slug} disabled={free}>{p.title} · {p.price === FREE ? 'Free' : p.price}{free ? ' (free: cannot be sold)' : ''}</option>;
                    })}
                  </select>
                  {suggested && <small>Suggested: {suggested.title}</small>}
                </label>

                <label className="adm-check">
                  <input type="checkbox" name="onSale" defaultChecked={current?.link.onSale ?? false} />
                  <span>On sale</span>
                </label>

                <div className="adm-actions">
                  <button type="submit" className="pr-btn">Save</button>
                  <p className="adm-state">
                    {!current ? 'Not linked.'
                      : current.live ? <>Selling on <Link href={productHref(current.p.slug)}>{productHref(current.p.slug)}</Link></>
                      : current.link.onSale ? <>Linked to <Link href={productHref(current.p.slug)}>{current.p.title}</Link>, but not selling{stripeOn ? '' : ': Stripe is not set up'}.</>
                      : <>Linked to <Link href={productHref(current.p.slug)}>{current.p.title}</Link>. Page shows its waitlist.</>}
                  </p>
                </div>
              </form>
            );
          })}
          {!courses.length && !thinkificError && <p>No courses to show.</p>}
        </div>

        {changes.length > 0 && (
          <>
            <h2 className="pr-h2 adm-h2">Recent changes</h2>
            <ul className="adm-log">
              {changes.map((ch, i) => (
                <li key={i}>{when(ch.at)} · {ch.course ? `${ch.course} → ` : ''}{productBySlug(ch.slug)?.title ?? ch.slug}: {ch.courseId ? (ch.onSale ? 'linked, on sale' : 'linked, not on sale') : 'unlinked'}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
