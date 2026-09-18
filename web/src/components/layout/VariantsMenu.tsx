'use client';

// "Variants" drop-down in the header: a design review tool for switching the home hero layout and the palette.
import { useEffect, useRef, useState } from 'react';
import { HEROES, PALETTES, type HeroId, type PaletteId } from '@/content/site';

type Props = { hero: HeroId; palette: PaletteId; onHero: (id: HeroId) => void; onPalette: (id: PaletteId) => void };

export default function VariantsMenu({ hero, palette, onHero, onPalette }: Props) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // Close on outside click and Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <div className="variants" ref={root}>
      <button type="button" className="variants-btn" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(o => !o)}>Variants <span aria-hidden="true">▾</span></button>
      <div className="variants-panel" hidden={!open}>
        <div className="variants-head"><span className="variants-label">Home hero</span><button type="button" className="variants-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button></div>
        {HEROES.map(h => (
          <button type="button" role="menuitemradio" key={h.id} aria-checked={h.id === hero} onClick={() => { onHero(h.id); setOpen(false); }}>{h.label}</button>
        ))}
        <span className="variants-label variants-label--sep">Palette</span>
        {PALETTES.map(p => (
          <button type="button" role="menuitemradio" key={p.id} aria-checked={p.id === palette} onClick={() => { onPalette(p.id); setOpen(false); }}>{p.label}</button>
        ))}
      </div>
    </div>
  );
}
