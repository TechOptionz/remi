// One article from the free library: title and standfirst, optional video, the text (with its figure and question
// headings), references, then the product it leads on to and "Return to free resources". Articles live in content/articles.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoEmbed from '@/components/shared/VideoEmbed';
import Inline from '@/components/articles/Inline';
import { ARTICLES, LIBRARY_HREF, clusterOf } from '@/content/articles';
import { priceLine, productBySlug, productHref } from '@/content/products';

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
  const product = a.product ? productBySlug(a.product) : undefined;
  const back = `${LIBRARY_HREF}#${clusterOf(a.topic)?.id ?? ''}`;
  return (
    <main className="pr-page pr-page--cream">
      <article className="pr-article">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={LIBRARY_HREF}>Free resources</Link><span aria-hidden="true">/</span><Link href={back}>{clusterOf(a.topic)?.title}</Link><span aria-hidden="true">/</span><span aria-current="page">{a.title}</span>
        </nav>
        <h1 className="pr-title pr-title--article">{a.title}</h1>
        <p className="pr-standfirst">{a.summary}</p>
        {a.video && <VideoEmbed {...a.video} />}
        <div className="pr-body">
          {a.body.map((b, i) => typeof b === 'string'
            ? <p key={i}><Inline text={b} /></p>
            : 'h2' in b
              ? <h2 key={i}>{b.h2}</h2>
              : <figure key={i} className={b.figure.height > b.figure.width ? "pr-figure pr-figure--tall" : "pr-figure"}><img src={b.figure.src} alt={b.figure.alt} width={b.figure.width} height={b.figure.height} loading="lazy" decoding="async" /></figure>)}
        </div>
        {a.references && a.references.length > 0 && (
          <section className="pr-refs" aria-labelledby="refs-h">
            <h2 id="refs-h">References</h2>
            <ul>{a.references.map(r => <li key={r}><Inline text={r} /></li>)}</ul>
          </section>
        )}
        {product && (
          <aside className="pr-article-offer" aria-label="Take this further">
            <p className="pr-kicker">Take this further</p>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
            {priceLine(product) && <p className="pr-price">{priceLine(product)}</p>}
            <Link href={productHref(product.slug)} className="pr-btn">{product.cta ?? 'See what’s inside'}</Link>
          </aside>
        )}
        <p className="pr-back"><Link href={back}><span aria-hidden="true">⟵ </span>Return to free resources</Link></p>
      </article>
    </main>
  );
}
