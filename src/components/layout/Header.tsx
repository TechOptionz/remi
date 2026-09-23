'use client';

// Sticky site header: logo, primary nav (from content/site.ts), Variants menu, CTA and the mobile menu.
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HEADER_CTA, NAV, SITE, type HeroId, type NavItem, type PaletteId } from '@/content/site';
import { useSiteState } from '@/lib/site-state';
// Variants menu (design review tool) is hidden for now; restore this import and the <VariantsMenu /> line in the nav to bring it back
// import VariantsMenu from './VariantsMenu';
import SiteSearch from './SiteSearch';

/** Splits drop-down links into runs that share a `group` (ungrouped links form their own run). */
function groupLinks(items: NavItem[]) {
  const runs: { group?: string; items: NavItem[] }[] = [];
  for (const item of items) {
    const last = runs[runs.length - 1];
    if (last && last.group === item.group) last.items.push(item);
    else runs.push({ group: item.group, items: [item] });
  }
  return runs;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { hero, setHero, palette, setPalette } = useSiteState();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  // Picking a hero always lands on the top of the homepage, where the hero lives
  const pickHero = (id: HeroId) => {
    setHero(id);
    setMenuOpen(false);
    if (pathname !== '/') router.push('/');
    window.scrollTo({ top: 0 });
  };
  const pickPalette = (id: PaletteId) => { setPalette(id); setMenuOpen(false); };
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isCurrent = (item: NavItem) => item.href === pathname;
  const hasCurrentChild = (item: NavItem) => !!item.children?.some(isCurrent);
  const current = (item: NavItem) => (isCurrent(item) ? ({ 'aria-current': 'page' } as const) : {});

  // Only homepage hero D puts the header over full-screen video
  const onVideo = pathname === '/' && hero === 'D' && !scrolled;

  return (
    <>
      <header className="site-header" data-scrolled={scrolled} data-on-video={onVideo}>
        <Link href="/" className="logo" aria-label={`${SITE.name} — home`}>
          <img className="logo-gold" src="/assets/remi-logo.webp" alt={SITE.logoAlt} />
          <img className="logo-rust" src="/assets/remi-logo-rust.webp" alt={SITE.logoAlt} />
          <img className="logo-ink" src="/assets/remi-logo-ink.webp" alt={SITE.logoAlt} />
        </Link>
        <nav aria-label="Primary" className="nav">
          {NAV.map(item => item.children ? (
            <div className="nav-item" key={item.label}>
              <Link href={item.href} className={`nav-link${isCurrent(item) || hasCurrentChild(item) ? ' is-current' : ''}`} {...current(item)}>{item.label}</Link>
              <span className="nav-caret" aria-hidden="true">▾</span>
              <div className={`nav-sub${item.children.some(c => c.group) ? ' nav-sub--groups' : ''}`}>
                {groupLinks(item.children).map(run => {
                  const links = run.items.map(child => <Link href={child.href} key={child.label} {...current(child)}>{child.label}</Link>);
                  return run.group
                    ? <div className="nav-sub-group" key={run.group}><span className="nav-sub-label">{run.group}</span>{links}</div>
                    : links;
                })}
              </div>
            </div>
          ) : (
            <Link href={item.href} key={item.label} className={isCurrent(item) ? 'is-current' : undefined} {...current(item)}>{item.label}</Link>
          ))}
          {/* <VariantsMenu hero={hero} palette={palette} onHero={pickHero} onPalette={pickPalette} /> */}
        </nav>
        <div className="header-actions">
          <SiteSearch onOpen={closeMenu} />
          <Link href={HEADER_CTA.href} className="btn btn--ink btn--sm">{HEADER_CTA.label}</Link>
          <button type="button" className="burger" aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(o => !o)}>
            <span></span><span></span>
          </button>
        </div>
      </header>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!menuOpen}>
        {NAV.flatMap(item => [item, ...(item.children ?? []).map(child => ({ ...child, sub: true }))]).map(item => {
          const className = ['sub' in item ? 'mobile-sub' : '', item.href === '/invite-remi' ? 'accent' : ''].join(' ').trim() || undefined;
          return <Link href={item.href} key={item.label} className={className} onClick={() => setMenuOpen(false)} {...current(item)}>{item.label}</Link>;
        })}
      </nav>
    </>
  );
}
