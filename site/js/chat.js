// "Talk to Remi" chat widget, shared by every page.
// Replies are scripted and matched on keywords; swap the reply step in sendChat for a real backend later.
(function () {
  const REPLIES = {
    Speaking: { text: "Remi speaks at conferences and leadership events on truth, leadership and decision-making. Share your date, location and audience size and the team will come back to you.", cta: 'Send a speaking enquiry', interest: 'Speaking' },
    Facilitation: { text: "Remi facilitates strategy days, offsites and board sessions. Tell us a little about the team and what's on the table, and we'll be in touch.", cta: 'Send a facilitation enquiry', interest: 'Facilitation' },
    Media: { text: 'Thanks for thinking of Remi. Send the show or publication, the topic and your timing, and the team will reply.', cta: 'Send a media request', interest: 'Media' },
    Products: { text: "Remi's books and self-paced programs are built on her frames. Leave your details and we'll point you to what fits.", cta: 'Ask about books & programs', interest: 'Products' },
    Coaching: { text: "Remi doesn't take on individual coaching, but her books and programs work through the same frames. Would one of those help?", cta: 'See books & programs', interest: 'Products' },
    Other: { text: "Good question. I can help with keynotes, strategy days, media and Remi's books and programs. For anything else, send the details through the enquiry form and Remi's team will pick it up.", cta: 'Open the enquiry form', interest: 'Other' },
  };
  const QUICK = ['Keynote speaking', 'Strategy day', 'Podcast / media', 'Books & programs'];

  // A page's own form (marked data-chat-form="<field name>") takes the enquiry when it offers that topic;
  // otherwise people go to the homepage enquiry form with the topic preset
  const localForm = document.querySelector('form[data-chat-form]');
  const localField = localForm && localForm.elements[localForm.dataset.chatForm];
  const handlesLocally = interest => !!localField && (!interest || [...localField.options].some(o => o.value === interest));
  const enquiryHref = interest => handlesLocally(interest)
    ? `#${localForm.closest('section[id]').id}`
    : `index.html${interest ? `?interest=${encodeURIComponent(interest)}` : ''}#contact`;

  const chat = document.createElement('div');
  chat.className = 'chat';
  chat.innerHTML = `
    <div class="chat-panel" role="dialog" aria-label="Talk to Remi" hidden>
      <div class="chat-head">
        <div class="chat-id">
          <img src="assets/photos/story.webp" alt="" width="42" height="42">
          <strong>Talk to Remi</strong>
        </div>
        <button type="button" class="chat-close js-chat-toggle" aria-label="Close chat">×</button>
      </div>
      <div class="chat-log" role="log" aria-live="polite">
        <span class="chat-day">Today</span>
        <div class="msg msg--them"><div class="bubble">Hi, thanks for stopping by. Ask about keynotes, strategy days, media or Remi's books and programs. Pick a topic or type a question.</div></div>
        <div class="chips"></div>
      </div>
      <form class="chat-input">
        <input name="message" placeholder="Ask about keynotes, strategy days…" aria-label="Message" autocomplete="off">
        <button type="submit" aria-label="Send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
      </form>
      <a href="${enquiryHref()}" class="chat-form-link js-chat-toggle">Prefer a form? Send a full enquiry</a>
    </div>
    <button type="button" class="chat-teaser js-chat-toggle"><img src="assets/photos/story.webp" alt="" width="30" height="30">Have a question? Talk to Remi</button>
    <button type="button" class="chat-launcher js-chat-toggle" aria-label="Talk to Remi" aria-expanded="false">
      <svg class="icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke-width="3"/></svg>
      <svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      <span class="chat-badge" aria-hidden="true"></span>
    </button>`;
  document.body.append(chat);

  const $ = s => chat.querySelector(s);
  const panel = $('.chat-panel');
  const log = $('.chat-log');
  const form = $('.chat-input');
  const launcher = $('.chat-launcher');
  let busy = false;
  const scrollLog = () => { log.scrollTop = log.scrollHeight; };

  function setChat(open) {
    panel.hidden = !open;
    chat.classList.toggle('is-open', open);
    if (open) { chat.classList.add('is-seen'); scrollLog(); }
    launcher.setAttribute('aria-expanded', String(open));
    launcher.setAttribute('aria-label', open ? 'Close chat' : 'Talk to Remi');
  }
  chat.querySelectorAll('.js-chat-toggle').forEach(el => el.addEventListener('click', () => setChat(panel.hidden)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) setChat(false); });

  function addMsg(who, text, reply) {
    const msg = document.createElement('div');
    msg.className = `msg msg--${who}`;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    msg.append(bubble);
    if (reply) {
      const cta = document.createElement('a');
      cta.href = enquiryHref(reply.interest);
      cta.className = 'chat-cta';
      cta.textContent = `${reply.cta} →`;
      cta.addEventListener('click', () => {
        if (handlesLocally(reply.interest)) localField.value = reply.interest;
        setChat(false);
      });
      msg.append(cta);
    }
    log.append(msg);
    scrollLog();
  }

  function sendChat(raw) {
    const text = raw.trim();
    if (!text || busy) return;
    log.querySelector('.chips')?.remove();
    addMsg('me', text);
    busy = true;
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.setAttribute('aria-label', 'Typing');
    typing.innerHTML = '<span></span><span></span><span></span>';
    log.append(typing);
    scrollLog();
    const t = text.toLowerCase();
    const topic = /coach/.test(t) ? 'Coaching'
      : /keynote|speak|stage|conference|event/.test(t) ? 'Speaking'
      : /strateg|facilitat|offsite|board|workshop/.test(t) ? 'Facilitation'
      : /podcast|media|interview|press/.test(t) ? 'Media'
      : /book|program|course|product|audit/.test(t) ? 'Products' : 'Other';
    setTimeout(() => {
      typing.remove();
      addMsg('them', REPLIES[topic].text, REPLIES[topic]);
      busy = false;
    }, 1100);
  }

  QUICK.forEach(label => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = label;
    chip.addEventListener('click', () => sendChat(label));
    $('.chips').append(chip);
  });
  form.addEventListener('submit', e => { e.preventDefault(); sendChat(form.elements.message.value); form.reset(); });
})();
