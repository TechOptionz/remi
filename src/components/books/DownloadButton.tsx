'use client';
// A download button on /books/thank-you. A PDF opens in a new tab (the link itself) and is saved in the same click,
// through a hidden frame so this page stays put; an EPUB, which browsers can't show, is only saved.
export default function DownloadButton({ format, label, href, download }: { format: string; label: string; href: string; download: string }) {
  if (format !== 'pdf') return <a href={download} className="pr-btn">Download {label}</a>;
  const save = () => {
    const frame = document.createElement('iframe');
    frame.hidden = true;
    frame.src = download;
    document.body.appendChild(frame);
    setTimeout(() => frame.remove(), 60_000);
  };
  return <a href={href} target="_blank" rel="noopener" className="pr-btn" onClick={save}>Download {label}</a>;
}
