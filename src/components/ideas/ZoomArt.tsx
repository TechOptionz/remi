'use client';
// A lettered diagram that opens full-size when tapped. On phones the hand-drawn diagrams shrink until their
// lettering is unreadable, so the enlarged view keeps a readable width and pans sideways. Styles: .zoom-* in ideas-models.css.
import { useRef } from 'react';
import { Art } from './ui';

export default function ZoomArt({ name, alt, label, className, artClassName }: {
  name: string; alt: string;
  /** Short name of the diagram, for the button and dialog labels. */
  label: string;
  /** Layout classes for the in-page figure. */
  className?: string;
  /** Classes for the image itself (both in the page and enlarged), e.g. a crop. */
  artClassName?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const scroller = useRef<HTMLDivElement>(null);

  const open = () => {
    dialog.current?.showModal();
    // Start in the middle of the diagram rather than at its left edge
    const s = scroller.current;
    if (s) s.scrollLeft = (s.scrollWidth - s.clientWidth) / 2;
  };

  return (
    <div className={['zoom-art', className].filter(Boolean).join(' ')}>
      <Art name={name} alt={alt} className={artClassName} />
      <button type="button" className="zoom-btn" onClick={open} aria-label={`Enlarge ${label}`}>
        <span className="zoom-hint" aria-hidden="true">Tap to enlarge</span>
      </button>
      <dialog ref={dialog} className="zoom-dialog" aria-label={label}>
        <div className="zoom-scroll" ref={scroller} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
          <Art name={name} alt={alt} className={['zoom-full', artClassName].filter(Boolean).join(' ')} />
        </div>
        <form method="dialog"><button className="zoom-close" aria-label="Close">×</button></form>
      </dialog>
    </div>
  );
}
