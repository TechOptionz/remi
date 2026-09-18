// Shared by every page: palette, sticky header, mobile menu and newsletter signup.
window.RP = (function () {
  const PALETTES = ['parchment-rust', 'oxblood-parchment', 'midnight-gold'];

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };
  const qs = new URLSearchParams(location.search);

  // ---------- Palette ----------
  let palette = PALETTES.includes(qs.get('palette')) ? qs.get('palette') : (PALETTES.includes(store.get('rp-palette')) ? store.get('rp-palette') : 'parchment-rust');
  function applyPalette(next) {
    if (next) { palette = next; store.set('rp-palette', palette); }
    document.documentElement.dataset.palette = palette;
    $$('[data-set-palette]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.setPalette === palette)));
  }

  // ---------- Header ----------
  const header = $('.site-header');
  function onScroll() {
    const scrolled = window.scrollY > 24;
    header.dataset.scrolled = String(scrolled);
    // Only homepage hero D puts the header over full-screen video
    header.dataset.onVideo = String(document.documentElement.dataset.activeHero === 'D' && !scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu ----------
  const burger = $('.burger');
  const mobileNav = $('#mobile-nav');
  function setMenu(open) { mobileNav.hidden = !open; burger.setAttribute('aria-expanded', String(open)); }
  burger.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('a', mobileNav).forEach(a => a.addEventListener('click', () => setMenu(false)));

  // ---------- Variants menu (every page) ----------
  const variantsBtn = $('.variants-btn');
  const variantsPanel = $('.variants-panel');
  const setVariants = open => { if (!variantsPanel) return; variantsPanel.hidden = !open; variantsBtn.setAttribute('aria-expanded', String(open)); };
  if (variantsBtn) {
    variantsBtn.addEventListener('click', e => { e.stopPropagation(); setVariants(variantsPanel.hidden); });
    $('.variants-close').addEventListener('click', () => setVariants(false));
    document.addEventListener('click', e => { if (!variantsPanel.hidden && !e.target.closest('.variants')) setVariants(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setVariants(false); });
  }
  $$('[data-set-palette]').forEach(b => b.addEventListener('click', () => { applyPalette(b.dataset.setPalette); setVariants(false); setMenu(false); }));
  // Pages without a hero remember the pick and open the homepage on it; the homepage handles it in main.js
  if (!$('[data-hero]')) {
    const stored = store.get('rp-hero') || 'A';
    $$('[data-set-hero]').forEach(b => {
      b.setAttribute('aria-checked', String(b.dataset.setHero === stored));
      b.addEventListener('click', () => { store.set('rp-hero', b.dataset.setHero); location.href = `index.html?hero=${b.dataset.setHero}`; });
    });
  }

  // ---------- Newsletter ----------
  $$('.news-form').forEach(newsForm => {
    newsForm.addEventListener('submit', e => {
      e.preventDefault();
      // TODO: connect to the mailing list provider
      console.log('newsletter signup', Object.fromEntries(new FormData(newsForm)));
      newsForm.hidden = true;
      const thanks = newsForm.parentElement.querySelector('.news-thanks');
      if (thanks) thanks.hidden = false;
    });
  });

  applyPalette();
  onScroll();
  return { $, $$, store, qs, applyPalette, onScroll, setMenu, setVariants };
})();
