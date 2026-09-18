// Remi Pearson homepage — hero variants, video and enquiry form.
// Palette, header, mobile menu and newsletter are shared in site.js; the chat lives in chat.js.
(function () {
  const { $, $$, store, qs, onScroll, setMenu, setVariants } = window.RP;
  const VIDEO_ID = '1221386697';
  const HEROES = ['A', 'B', 'C', 'C1', 'C2', 'C3', 'D'];

  const vimeoSrc = params => `https://player.vimeo.com/video/${VIDEO_ID}?${params}`;
  // The Vimeo video is domain-restricted; sending no referrer lets it play the same way it does from file://
  const loadFrame = f => { if (!f.src) { f.referrerPolicy = 'no-referrer'; f.src = vimeoSrc(f.dataset.vimeo); } };
  const unloadFrame = f => { f.removeAttribute('src'); };

  let hero = HEROES.includes(qs.get('hero')) ? qs.get('hero') : (HEROES.includes(store.get('rp-hero')) ? store.get('rp-hero') : 'A');

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
    $('.cta-photo').src = ['C1', 'C2', 'C3'].includes(hero) ? 'assets/photos/story.webp' : 'assets/photos/cta-remi.webp';
    $$('[data-set-hero]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.setHero === hero)));
    onScroll();
  }

  $$('[data-set-hero]').forEach(b => b.addEventListener('click', () => {
    hero = b.dataset.setHero; store.set('rp-hero', hero);
    applyHero(); setVariants(false); setMenu(false); window.scrollTo({ top: 0 });
  }));

  // ---------- Video: mute toggle (D) ----------
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

  // ---------- Video: modal ----------
  const modal = $('.video-modal');
  const modalFrame = $('iframe', modal);
  const setModal = open => { modal.hidden = !open; open ? loadFrame(modalFrame) : unloadFrame(modalFrame); };
  $$('.js-open-video').forEach(b => b.addEventListener('click', () => setModal(true)));
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.js-close-video')) setModal(false); });

  // ---------- Video: picture-in-picture (C2, C3) ----------
  const pipSmall = $('.pip-small');
  const pipBig = $('.pip-big');
  const pipBigFrame = $('iframe', pipBig);
  function openPip() { pipSmall.hidden = true; pipBig.hidden = false; loadFrame(pipBigFrame); }
  function closePip() { pipSmall.hidden = false; pipBig.hidden = true; unloadFrame(pipBigFrame); }
  $$('.js-pip-open').forEach(b => b.addEventListener('click', openPip));
  $('.js-pip-close').addEventListener('click', closePip);

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    setModal(false);
    if (!pipBig.hidden) closePip();
  });

  // ---------- Enquiry form ----------
  const form = $('.enquiry-form');
  const sent = $('.form-sent');
  const setInterest = value => { if ([...form.elements.interest.options].some(o => o.value === value)) form.elements.interest.value = value; };
  // Other pages link here as index.html?interest=Speaking#contact
  setInterest(qs.get('interest'));
  $$('[data-interest]').forEach(el => el.addEventListener('click', () => setInterest(el.dataset.interest)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: replace with the GoHighLevel webhook / form endpoint
    console.log('lead → GoHighLevel', Object.fromEntries(new FormData(form)));
    form.hidden = true;
    sent.hidden = false;
  });
  $('.js-reset').addEventListener('click', () => { form.reset(); sent.hidden = true; form.hidden = false; });

  applyHero();
})();
