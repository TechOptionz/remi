// One article from the free library: title and standfirst, optional video, the text (with its figure and question
// headings), references, then "Was this helpful?" and sharing, a private question to Remi (in place of public comments),
// the product it leads on to, a sign-up to the article's list and "Return to free resources". Articles live in content/articles.ts.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoEmbed from '@/components/shared/VideoEmbed';
import Inline from '@/components/articles/Inline';
import Helpful, { HelpfulCount } from '@/components/shared/Helpful';
import ShareLinks from '@/components/shared/ShareLinks';
import ShareMenu from '@/components/shared/ShareMenu';
import AskRemi from '@/components/shared/AskRemi';
import SegmentCta from '@/components/shared/SegmentCta';
import { ARTICLES, LIBRARY_HREF, clusterOf } from '@/content/articles';
import { levelLine, priceLine, productBySlug, productHref, type SegmentId } from '@/content/products';
import type { Topic } from '@/content/perspectives';

// The list a reader of each topic is offered
const SEGMENT_OF: Record<Topic, SegmentId> = {
  'Human change': 'personal-development', 'Live human change': 'personal-development', 'Ideas & meaning': 'personal-development',
  Relationships: 'relationships', 'Founders & business': 'business', 'Remi as guest': 'personal-development',
};

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
        <div className="rf-top">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={LIBRARY_HREF}>Free resources</Link><span aria-hidden="true">/</span><Link href={back}>{clusterOf(a.topic)?.title}</Link><span aria-hidden="true">/</span><span aria-current="page">{a.title}</span>
        </nav>
        <div className="rf-top-side">
          <ShareMenu path={`/articles/${a.slug}`} title={a.title} />
          <HelpfulCount id={a.slug} className="rf-helpful-count--top" />
        </div>
        </div>
        <h1 className="pr-title pr-title--article">{a.title}</h1>
        <p className="pr-standfirst">{a.summary}</p>
        {a.video && <VideoEmbed {...a.video} />}
        <div className="pr-body">
          {a.body.map((b, i) => typeof b === 'string'
            ? <p key={i}><Inline text={b} /></p>
            : 'h2' in b
              ? <h2 key={i}>{b.h2}</h2>
              : 'list' in b
                ? <ul key={i}>{b.list.map(t => <li key={t}><Inline text={t} /></li>)}</ul>
                : 'table' in b
                  ? <div key={i} className="pr-table"><table>
                      <thead><tr>{b.table[0].map(t => <th key={t} scope="col"><Inline text={t} /></th>)}</tr></thead>
                      <tbody>{b.table.slice(1).map(r => <tr key={r[0]}>{r.map((t, j) => j === 0 ? <th key={j} scope="row"><Inline text={t} /></th> : <td key={j} data-label={b.table[0][j]}><Inline text={t} /></td>)}</tr>)}</tbody>
                    </table></div>
                  : <figure key={i} className={b.figure.height > b.figure.width ? "pr-figure pr-figure--tall" : "pr-figure"}>
                      <img src={b.figure.src} alt={b.figure.alt} width={b.figure.width} height={b.figure.height} loading="lazy" decoding="async" />
                      {b.figure.download && <figcaption><a href={b.figure.download} download>{b.figure.downloadLabel ?? 'Download the infographic'}</a></figcaption>}
                    </figure>)}
        </div>
        {a.further && a.further.length > 0 && (
          <section className="pr-further" aria-labelledby="further-h">
            <h2 id="further-h">Further resources</h2>
            <ul>
              {a.further.map(f => {
                if ('product' in f) {
                  const p = productBySlug(f.product);
                  return p && <li key={f.product}><Link href={productHref(p.slug)}>{p.title}</Link><span>{[priceLine(p), levelLine(p)].filter(Boolean).join(' · ')}</span></li>;
                }
                if ('article' in f) {
                  const x = ARTICLES.find(y => y.slug === f.article);
                  return x && <li key={f.article}><Link href={`/articles/${x.slug}`}>{x.title}</Link><span>Article</span></li>;
                }
                return <li key={f.label}><em>{f.label}</em><span>{f.note ?? 'Coming soon'}</span></li>;
              })}
            </ul>
          </section>
        )}
        {a.references && a.references.length > 0 && (
          <section className="pr-refs" aria-labelledby="refs-h">
            <h2 id="refs-h">References</h2>
            <ul>{a.references.map(r => <li key={r}><Inline text={r} /></li>)}</ul>
          </section>
        )}
        <div className="rf-row">
          <Helpful id={a.slug} />
          <ShareLinks path={`/articles/${a.slug}`} title={a.title} />
        </div>
        <AskRemi about={a.title} />
        {product && (
          <aside className="pr-article-offer" aria-label="Take this further">
            <p className="pr-kicker">Take this further</p>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
            {priceLine(product) && <p className="pr-price">{priceLine(product)}</p>}
            <Link href={productHref(product.slug)} className="pr-btn">{product.cta ?? 'See what’s inside'}</Link>
          </aside>
        )}
        <SegmentCta segment={SEGMENT_OF[a.topic]} className="rf-seg" />
        <p className="pr-back"><Link href={back}><span aria-hidden="true">⟵ </span>Return to free resources</Link></p>
      </article>
    </main>
  );
}
