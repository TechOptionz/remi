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
import { scrollToY } from '@/lib/smooth-scroll';

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

/** A nav link: a Next <Link>, or a plain new-tab <a> for an `external` address (Ultimate Self Club). */
function NavLink({ item, ...rest }: { item: NavItem } & Omit<React.ComponentProps<'a'>, 'href'>) {
  if (item.external) return <a href={item.href} target="_blank" rel="noopener noreferrer" {...rest}>{item.label} <span aria-hidden="true">↗</span></a>;
  return <Link href={item.href} {...rest}>{item.label}</Link>;
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
    scrollToY(0, { immediate: true });
  };
  // The name always goes home and to the very top: on the homepage Next would otherwise do nothing (same URL), and a
  // leftover #section in the address would keep the page where it is
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    setMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      if (window.location.search || window.location.hash) window.history.replaceState(null, '', '/');
      scrollToY(0);
    }
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
        <Link href="/" className="logo" aria-label={`${SITE.name} — home`} onClick={goHome}>
          {/* Bright gold on the dark palettes; a deeper gold on the light one so it keeps its contrast */}
          <img className="logo-gold" src="/assets/remi-logo.webp" alt={SITE.logoAlt} />
          <img className="logo-rust" src="/assets/remi-logo-deepgold.webp" alt="" aria-hidden="true" />
        </Link>
        <nav aria-label="Primary" className="nav">
          {NAV.map(item => item.children ? (
            <div className="nav-item" key={item.label}>
              <Link href={item.href} className={`nav-link${isCurrent(item) || hasCurrentChild(item) ? ' is-current' : ''}`} {...current(item)}>{item.label}</Link>
              <span className="nav-caret" aria-hidden="true"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4 4-4" /></svg></span>
              <div className={`nav-sub${item.children.some(c => c.group) ? ' nav-sub--groups' : ''}`}>
                {groupLinks(item.children).map(run => {
                  const links = run.items.map(child => <NavLink item={child} key={child.label} {...current(child)} />);
                  return run.group
                    ? <div className="nav-sub-group" key={run.group}><span className="nav-sub-label">{run.group}</span>{links}</div>
                    : links;
                })}
              </div>
            </div>
          ) : (
            <NavLink item={item} key={item.label} className={isCurrent(item) ? 'is-current' : undefined} {...current(item)} />
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
          return <NavLink item={item} key={`${'sub' in item ? 'sub:' : ''}${item.label}`} className={className} onClick={() => setMenuOpen(false)} {...current(item)} />;
        })}
      </nav>
    </>
  );
}
