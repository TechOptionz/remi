// Row of social icon links. Links live in content/site.ts; pass `only` to choose which to show and in what order.
import { SOCIAL, type SocialId } from '@/content/site';

const ICONS: Record<SocialId, React.ReactNode> = {
  linkedin: <path fill="currentColor" stroke="none" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3s-2.1 1.43-2.1 2.9V21H9z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
  youtube: <path fill="currentColor" stroke="none" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM9.8 15.1V8.9L15.6 12z" />,
  facebook: <path fill="currentColor" stroke="none" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8z" />,
  x: <path fill="currentColor" stroke="none" d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4zm-1.2 18h1.9L7.1 3.9H5.1z" />,
  podcast: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
};

export default function SocialLinks({ only, size = 17 }: { only: SocialId[]; size?: number }) {
  return (
    <>
      {only.map(id => {
        const link = SOCIAL.find(s => s.id === id)!;
        const external = link.href.startsWith('http');
        return (
          <a href={link.href} key={id} aria-label={link.label} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{ICONS[id]}</svg>
          </a>
        );
      })}
    </>
  );
}
