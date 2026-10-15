'use client';

// Share this page as a row of round icon buttons: the phone's own share sheet where there is one, copy link, email,
// LinkedIn, Facebook and WhatsApp — plain links, no third-party scripts or tracking. Each icon has a label for
// screen readers and a tooltip. `path` is the page's address on the site. ShareMenu (the drop-down beside an
// article's breadcrumbs) reuses the icons, targets and copy/share logic from here.
import { useEffect, useState } from 'react';
import { SITE_URL } from '@/content/site';

const ICONS = {
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" /></>,
  link: <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5l8.5 6.5 8.5-6.5" /></>,
  linkedin: <path fill="currentColor" stroke="none" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3s-2.1 1.43-2.1 2.9V21H9z" />,
  facebook: <path fill="currentColor" stroke="none" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8z" />,
  whatsapp: <><path d="M4 20l1.2-4.1A8 8 0 1 1 8.3 19z" /><path fill="currentColor" stroke="none" d="M9.3 7.8c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.5 2.4.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.4 0 .5-.1 1.1-.6 1.5-.5.4-1.2.6-1.9.4-1.2-.3-2.4-1-3.5-2.1s-1.9-2.4-2.2-3.6c-.2-.8 0-1.5.5-2 .2-.3.5-.4.7-.4z" /></>,
};
export type ShareIcon = keyof typeof ICONS;

export function Svg({ name, size = 18 }: { name: ShareIcon; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>;
}

/** Where a page can be shared. */
export function shareTargets(url: string, title: string) {
  const u = encodeURIComponent(url), t = encodeURIComponent(title);
  return [
    { icon: 'email', name: 'Email', label: 'Share by email', href: `mailto:?subject=${t}&body=${encodeURIComponent(`${title}\n\n${url}`)}` },
    { icon: 'linkedin', name: 'LinkedIn', label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { icon: 'facebook', name: 'Facebook', label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { icon: 'whatsapp', name: 'WhatsApp', label: 'Share on WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
  ] as const;
}

/** Copy-to-clipboard and the device's share sheet, with the "copied" state. */
export function useShare(path: string, title: string) {
  const url = `${SITE_URL}${path}`;
  const [native, setNative] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { setNative(typeof navigator !== 'undefined' && 'share' in navigator); }, []);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2400); } catch {}
  };
  const share = () => { navigator.share({ title, url }).catch(() => {}); };
  return { url, native, copied, copy, share, targets: shareTargets(url, title) };
}

export const external = (href: string) => href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};

export default function ShareLinks({ path, title }: { path: string; title: string }) {
  const { native, copied, copy, share, targets } = useShare(path, title);
  return (
    <div className="rf-share" role="group" aria-label="Share">
      <p className="rf-share-label">Share this</p>
      <div className="rf-share-btns">
        {native && <button type="button" aria-label="Share…" title="Share…" onClick={share}><Svg name="share" /></button>}
        <button type="button" aria-label={copied ? 'Link copied' : 'Copy link'} title={copied ? 'Link copied' : 'Copy link'} className={copied ? 'is-done' : undefined} onClick={copy}>
          <Svg name={copied ? 'check' : 'link'} />
        </button>
        {targets.map(l => <a key={l.icon} href={l.href} aria-label={l.label} title={l.label} {...external(l.href)}><Svg name={l.icon} /></a>)}
      </div>
      <span className="sr-only" role="status">{copied ? 'Link copied' : ''}</span>
    </div>
  );
}
