import Link from 'next/link';

// Article text with its two bits of markup (content/articles.ts): *italic* and [label](href). Internal links use
// next/link; outside links open in a new tab.
export default function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
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
