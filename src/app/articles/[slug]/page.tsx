// One article: optional video, then the text. Articles live in content/articles.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoEmbed from '@/components/shared/VideoEmbed';
import { ARTICLES } from '@/content/articles';

export const dynamicParams = false;
// An empty list has no pages to prerender; Next needs at least one entry, so this placeholder 404s until articles exist
export const generateStaticParams = () => (ARTICLES.length ? ARTICLES : [{ slug: '_' }]).map(a => ({ slug: a.slug }));

const find = async (params: Promise<{ slug: string }>) => { const { slug } = await params; return ARTICLES.find(a => a.slug === slug); };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = await find(params);
  return a ? { title: `${a.title} — Remi Pearson`, description: a.summary } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = await find(params);
  if (!a) notFound();
  return (
    <main className="pr-page pr-page--cream">
      <article className="pr-article">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/articles">Articles</Link><span aria-hidden="true">/</span><span aria-current="page">{a.title}</span>
        </nav>
        <h1 className="pr-title">{a.title}</h1>
        {a.video && <VideoEmbed {...a.video} />}
        <div className="pr-body">{a.body.map(t => <p key={t}>{t}</p>)}</div>
      </article>
    </main>
  );
}
