import Link from 'next/link';

// Article text with its three bits of markup (content/articles.ts): **bold**, *italic* and [label](href). Bold may hold a
// link. Internal links use next/link; outside links open in a new tab.
export default function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.length > 4 && p.startsWith('**') && p.endsWith('**')) return <strong key={i}><Inline text={p.slice(2, -2)} /></strong>;
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith('/assets/')) return <a key={i} href={href} target="_blank" rel="noopener">{label}</a>;
          return href.startsWith('/')
            ? <Link key={i} href={href}>{label}</Link>
            : <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
        }
        if (p.length > 2 && p.startsWith('*') && p.endsWith('*')) return <em key={i}>{p.slice(1, -1)}</em>;
        return p;
      })}
    </>
  );
}
