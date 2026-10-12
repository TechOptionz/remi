// One page per book in content/books.ts, each drawn from its own mock-up (components/books/). /books links to them.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DlBook from '@/components/books/DlBook';
import UyBook from '@/components/books/UyBook';
import UyqBook from '@/components/books/UyqBook';
import { BOOKS, bookBySlug, type Book } from '@/content/books';

const PAGES: Record<string, (props: { b: Book }) => React.ReactNode> = {
  'disruptive-leadership': DlBook,
  'ultimate-you': UyBook,
  'ultimate-you-quest': UyqBook,
};

export const dynamicParams = false;
export const generateStaticParams = () => BOOKS.filter(b => PAGES[b.slug]).map(b => ({ slug: b.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = bookBySlug(slug);
  if (!b) return {};
  const title = `${b.title} by Remi Pearson — Ebook`;
  return { title, description: b.description, openGraph: { title, description: b.description, images: [b.cover.src], type: 'book' } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = bookBySlug(slug);
  const BookPage = PAGES[slug];
  if (!b || !BookPage) notFound();
  return <BookPage b={b} />;
}
