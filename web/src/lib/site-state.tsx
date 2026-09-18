'use client';

// Site-wide client state: colour palette and home hero variant (both picked from the Variants menu).
// Choices persist in localStorage and can be forced with ?palette=… / ?hero=… in the URL.
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { DEFAULT_HERO, DEFAULT_PALETTE, HEROES, PALETTES, type HeroId, type PaletteId } from '@/content/site';

const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} },
};

// Runs in <head> before first paint so a stored palette never flashes the default one (see app/layout.tsx)
export const PALETTE_BOOT_SCRIPT = `(function(){try{var ok=${JSON.stringify(PALETTES.map(p => p.id))},q=new URLSearchParams(location.search).get('palette'),s=localStorage.getItem('rp-palette'),p=ok.indexOf(q)>-1?q:ok.indexOf(s)>-1?s:null;if(p)document.documentElement.dataset.palette=p}catch(e){}})()`;

type SiteState = {
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
  hero: HeroId;
  setHero: (h: HeroId) => void;
};

const Ctx = createContext<SiteState | null>(null);

export function SiteStateProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [palette, setPaletteState] = useState<PaletteId>(DEFAULT_PALETTE);
  const [hero, setHeroState] = useState<HeroId>(DEFAULT_HERO);

  // Restore choices: URL first, then localStorage, then the defaults
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const pick = <T extends string>(ids: readonly T[], ...candidates: (string | null)[]) =>
      candidates.find((c): c is T => ids.includes(c as T));
    const p = pick(PALETTES.map(x => x.id), qs.get('palette'), store.get('rp-palette'));
    const h = pick(HEROES.map(x => x.id), qs.get('hero'), store.get('rp-hero'));
    if (p) setPaletteState(p);
    if (h) setHeroState(h);
  }, []);

  useEffect(() => { document.documentElement.dataset.palette = palette; }, [palette]);

  // CSS keys off html[data-active-hero] (e.g. C3 runs the whole page edge to edge); only the homepage has a hero
  useEffect(() => {
    if (pathname === '/') document.documentElement.dataset.activeHero = hero;
    else delete document.documentElement.dataset.activeHero;
  }, [pathname, hero]);

  const setPalette = useCallback((p: PaletteId) => { store.set('rp-palette', p); setPaletteState(p); }, []);
  const setHero = useCallback((h: HeroId) => { store.set('rp-hero', h); setHeroState(h); }, []);

  return <Ctx.Provider value={{ palette, setPalette, hero, setHero }}>{children}</Ctx.Provider>;
}

export function useSiteState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSiteState must be used inside <SiteStateProvider>');
  return ctx;
}
