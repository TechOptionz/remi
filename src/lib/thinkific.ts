// Enrols a buyer in their course on Thinkific (the course platform) once Stripe says they have paid. Server only.
// Uses Thinkific's Admin API (https://api.thinkific.com/api/public/v1) with either an API access token (sent as
// `Authorization: Bearer`; THINKIFIC_ACCESS_TOKEN) or the older API key (THINKIFIC_API_KEY, sent with the subdomain).
// The token wins when both are set. Both come from Thinkific → Settings → Code & analytics → API.
// Env: THINKIFIC_ACCESS_TOKEN or THINKIFIC_API_KEY, THINKIFIC_SUBDOMAIN (remi-s-site-9bea), optional
// THINKIFIC_SCHOOL_URL. Each program's course id is in THINKIFIC_COURSES (content/checkout.ts).
// Everything here is safe to repeat: an existing student is reused and an existing enrolment is left as it is, so a
// Stripe retry never enrols anyone twice.
const BASE = 'https://api.thinkific.com/api/public/v1';

export const thinkificReady = () =>
  !!process.env.THINKIFIC_SUBDOMAIN && (!!process.env.THINKIFIC_ACCESS_TOKEN || !!process.env.THINKIFIC_API_KEY);

/** Auth headers: the access token as a Bearer token, else the API key with the school's subdomain. */
const authHeaders = (): Record<string, string> => process.env.THINKIFIC_ACCESS_TOKEN
  ? { Authorization: `Bearer ${process.env.THINKIFIC_ACCESS_TOKEN}` }
  : { 'X-Auth-API-Key': process.env.THINKIFIC_API_KEY!, 'X-Auth-Subdomain': process.env.THINKIFIC_SUBDOMAIN! };
/** The school's sign-in page, where a student opens their courses. */
export const schoolSignIn = () => process.env.THINKIFIC_SCHOOL_URL
  ? `${process.env.THINKIFIC_SCHOOL_URL.replace(/\/$/, '')}/users/sign_in`
  : `https://${process.env.THINKIFIC_SUBDOMAIN}.thinkific.com/users/sign_in`;

async function api<T>(path: string, init?: { method?: string; body?: unknown }): Promise<T> {
  const res = await fetch(BASE + path, {
    method: init?.method ?? 'GET',
    headers: {
      ...authHeaders(),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: init?.body ? JSON.stringify(init.body) : undefined,
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Thinkific ${init?.method ?? 'GET'} ${path} → ${res.status} ${await res.text().catch(() => '')}`);
  return res.json() as Promise<T>;
}

type User = { id: number; email: string };
type Enrollment = { id: number; course_id: number; user_id: number };

/** The student with this email, created (and sent Thinkific's welcome email, to set a password) when new. */
async function studentFor(email: string, fullName: string | null | undefined) {
  const found = await api<{ items: User[] }>(`/users?query[email]=${encodeURIComponent(email)}`);
  const existing = found.items.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) return { user: existing, isNew: false };
  const [first, ...rest] = (fullName ?? '').trim().split(/\s+/);
  const user = await api<User>('/users', {
    method: 'POST',
    body: { email, first_name: first || email.split('@')[0], last_name: rest.join(' ') || '-', send_welcome_email: true },
  });
  return { user, isNew: true };
}

/** Enrols the buyer in each course (once; a bundle has several). Returns whether the student account is new (they set
 *  a password from Thinkific's welcome email) or existing (they sign in as usual). Throws when Thinkific refuses. */
export async function enrol(courseIds: number[], email: string, fullName?: string | null) {
  const { user, isNew } = await studentFor(email, fullName);
  for (const courseId of courseIds) {
    const enrolled = await api<{ items: Enrollment[] }>(`/enrollments?query[user_id]=${user.id}&query[course_id]=${courseId}`);
    if (!enrolled.items.some(e => e.course_id === courseId)) {
      await api<Enrollment>('/enrollments', { method: 'POST', body: { course_id: courseId, user_id: user.id, activated_at: new Date().toISOString() } });
    }
  }
  return { isNew };
}

export type SchoolCourse = {
  id: number; name: string; slug: string;
  /** Thinkific's product status: published, presell (pre-order), draft… */
  status: string;
  /** Hidden from the school's catalog / only by invitation. */
  hidden: boolean; private: boolean;
  /** The price set in Thinkific (0 = free there). The website charges its own price. */
  price: number;
  image: string | null;
};

/** Every course in the school with its product settings (the admin screen's list). */
export async function listCourses(): Promise<SchoolCourse[]> {
  type Course = { id: number; name: string; slug: string; product_id: number; course_card_image_url: string | null };
  type Product = { id: number; status: string; hidden: boolean; private: boolean; price: string; card_image_url: string | null };
  const [courses, products] = await Promise.all([
    api<{ items: Course[] }>('/courses?limit=250'),
    api<{ items: Product[] }>('/products?limit=250'),
  ]);
  const byId = new Map(products.items.map(p => [p.id, p]));
  return courses.items.map(c => {
    const p = byId.get(c.product_id);
    return {
      id: c.id, name: c.name, slug: c.slug,
      status: p?.status ?? 'unknown', hidden: !!p?.hidden, private: !!p?.private,
      price: Number(p?.price ?? 0), image: c.course_card_image_url ?? p?.card_image_url ?? null,
    };
  });
}
