// Remi Pearson homepage — variants, header state, mobile menu, video, chat, enquiry form.
(function () {
  const VIDEO_ID = '1221386697';
  const HEROES = ['A', 'B', 'B3', 'C', 'C1', 'C1T', 'C2', 'D'];
  const PALETTES = ['white-gold', 'espresso-rust', 'oxblood-parchment', 'parchment-rust', 'midnight-gold'];

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };
  const vimeoSrc = params => `https://player.vimeo.com/video/${VIDEO_ID}?${params}`;
  // The Vimeo video is domain-restricted; sending no referrer lets it play the same way it does from file://
  const loadFrame = f => { if (!f.src) { f.referrerPolicy = 'no-referrer'; f.src = vimeoSrc(f.dataset.vimeo); } };
  const unloadFrame = f => { f.removeAttribute('src'); };

  const header = $('.site-header');
  const qs = new URLSearchParams(location.search);
  let hero = HEROES.includes(qs.get('hero')) ? qs.get('hero') : (HEROES.includes(store.get('rp-hero')) ? store.get('rp-hero') : 'A');
  let palette = PALETTES.includes(qs.get('palette')) ? qs.get('palette') : (PALETTES.includes(store.get('rp-palette')) ? store.get('rp-palette') : 'white-gold');

  // ---------- Variants ----------
  function applyHero() {
    document.documentElement.dataset.activeHero = hero;
    $$('[data-hero]').forEach(el => {
      const on = el.dataset.hero.split(' ').includes(hero);
      el.hidden = !on;
      $$('iframe[data-vimeo]:not(.js-lazy)', el).forEach(on ? loadFrame : unloadFrame);
    });
    closePip();
    setMuted(true);
    $('.cta-photo').src = ['C1', 'C1T', 'C2'].includes(hero) ? 'assets/photos/story.webp' : 'assets/photos/cta-remi.webp';
    $$('[data-set-hero]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.setHero === hero)));
    onScroll();
  }
  function applyPalette() {
    document.documentElement.dataset.palette = palette;
    $$('[data-set-palette]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.setPalette === palette)));
  }

  const variantsBtn = $('.variants-btn');
  const variantsPanel = $('.variants-panel');
  const setVariants = open => { variantsPanel.hidden = !open; variantsBtn.setAttribute('aria-expanded', String(open)); };
  variantsBtn.addEventListener('click', e => { e.stopPropagation(); setVariants(variantsPanel.hidden); });
  $('.variants-close').addEventListener('click', () => setVariants(false));
  document.addEventListener('click', e => { if (!variantsPanel.hidden && !e.target.closest('.variants')) setVariants(false); });

  $$('[data-set-hero]').forEach(b => b.addEventListener('click', () => {
    hero = b.dataset.setHero; store.set('rp-hero', hero);
    applyHero(); setVariants(false); setMenu(false); window.scrollTo({ top: 0 });
  }));
  $$('[data-set-palette]').forEach(b => b.addEventListener('click', () => {
    palette = b.dataset.setPalette; store.set('rp-palette', palette);
    applyPalette(); setVariants(false); setMenu(false);
  }));

  // ---------- Header ----------
  function onScroll() {
    const scrolled = window.scrollY > 24;
    header.dataset.scrolled = String(scrolled);
    header.dataset.onVideo = String(hero === 'D' && !scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu ----------
  const burger = $('.burger');
  const mobileNav = $('#mobile-nav');
  function setMenu(open) { mobileNav.hidden = !open; burger.setAttribute('aria-expanded', String(open)); }
  burger.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('a', mobileNav).forEach(a => a.addEventListener('click', () => setMenu(false)));

  // ---------- Video: mute toggle (B3, D) ----------
  let muted = true;
  function setMuted(m) {
    muted = m;
    $$('.js-mute').forEach(b => { b.classList.toggle('is-on', !m); $('.mute-label', b).textContent = m ? 'Sound off' : 'Sound on'; });
    const frame = $(`[data-hero~="${hero}"] .js-hero-video`);
    const post = (method, value) => frame && frame.contentWindow && frame.contentWindow.postMessage(JSON.stringify({ method, value }), '*');
    post('setMuted', m);
    if (!m) post('setVolume', 1);
  }
  $$('.js-mute').forEach(b => b.addEventListener('click', () => setMuted(!muted)));

  // ---------- Video: modal (C1, C1T) ----------
  const modal = $('.video-modal');
  const modalFrame = $('iframe', modal);
  const setModal = open => { modal.hidden = !open; open ? loadFrame(modalFrame) : unloadFrame(modalFrame); };
  $$('.js-open-video').forEach(b => b.addEventListener('click', () => setModal(true)));
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.js-close-video')) setModal(false); });

  // ---------- Video: picture-in-picture (C2) ----------
  const pipSmall = $('.pip-small');
  const pipBig = $('.pip-big');
  const pipBigFrame = $('iframe', pipBig);
  function openPip() { pipSmall.hidden = true; pipBig.hidden = false; loadFrame(pipBigFrame); }
  function closePip() { pipSmall.hidden = false; pipBig.hidden = true; unloadFrame(pipBigFrame); }
  $$('.js-pip-open').forEach(b => b.addEventListener('click', openPip));
  $('.js-pip-close').addEventListener('click', closePip);

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    setModal(false); setVariants(false);
    if (!pipBig.hidden) closePip();
  });

  // ---------- Chat launcher ----------
  const chatPanel = $('.chat-panel');
  const launcher = $('.chat-launcher');
  $$('.js-chat-toggle').forEach(el => el.addEventListener('click', () => {
    chatPanel.hidden = !chatPanel.hidden;
    launcher.setAttribute('aria-expanded', String(!chatPanel.hidden));
  }));

  // ---------- Enquiry form ----------
  const form = $('.enquiry-form');
  const sent = $('.form-sent');
  $$('[data-interest]').forEach(el => el.addEventListener('click', () => { form.elements.interest.value = el.dataset.interest; }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: replace with the GoHighLevel webhook / form endpoint
    console.log('lead → GoHighLevel', Object.fromEntries(new FormData(form)));
    form.hidden = true;
    sent.hidden = false;
  });
  $('.js-reset').addEventListener('click', () => { form.reset(); sent.hidden = true; form.hidden = false; });

  applyPalette();
  applyHero();
})();
