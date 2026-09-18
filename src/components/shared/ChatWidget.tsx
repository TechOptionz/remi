'use client';

// "Talk to Remi" chat widget, shown on every page. Copy, scripted replies and keyword matching live in content/chat.ts.
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAT, CHAT_REPLIES, CHAT_TOPICS, type ChatReply } from '@/content/chat';
import { presetSelect } from '@/lib/forms';

type Message = { who: 'me' | 'them'; text: string; reply?: ChatReply; href?: string };

// A page's own form (marked data-chat-form="<select name>") takes the enquiry when it offers that topic;
// otherwise people go to the homepage enquiry form with the topic preset
function findLocalForm(interest?: string) {
  const form = document.querySelector<HTMLFormElement>('form[data-chat-form]');
  const field = form?.elements.namedItem(form.dataset.chatForm!) as HTMLSelectElement | null | undefined;
  if (!form || !field) return null;
  return !interest || [...field.options].some(o => o.value === interest) ? form : null;
}
function enquiryHref(interest?: string) {
  const local = findLocalForm(interest);
  if (local) return `#${local.closest('section[id]')!.id}`;
  return `/${interest ? `?interest=${encodeURIComponent(interest)}` : ''}#contact`;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [formHref, setFormHref] = useState('/#contact');
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => setFormHref(enquiryHref()), [pathname]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, typing, open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggle = () => { setOpen(o => !o); setSeen(true); };

  function send(raw: string) {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages(m => [...m, { who: 'me', text }]);
    setTyping(true);
    const t = text.toLowerCase();
    const topic = CHAT_TOPICS.find(([pattern]) => pattern.test(t))?.[1] ?? 'Other';
    // Swap this timeout for a real backend call later
    setTimeout(() => {
      const reply = CHAT_REPLIES[topic];
      setMessages(m => [...m, { who: 'them', text: reply.text, reply, href: enquiryHref(reply.interest) }]);
      setTyping(false);
    }, CHAT.replyDelayMs);
  }

  const onCta = (reply: ChatReply) => {
    if (findLocalForm(reply.interest)) presetSelect(reply.interest);
    setOpen(false);
  };

  return (
    <div className={['chat', open ? 'is-open' : '', seen ? 'is-seen' : ''].filter(Boolean).join(' ')}>
      <div className="chat-panel" role="dialog" aria-label={CHAT.title} hidden={!open}>
        <div className="chat-head">
          <div className="chat-id">
            <img src={CHAT.avatar} alt="" width="42" height="42" />
            <strong>{CHAT.title}</strong>
          </div>
          <button type="button" className="chat-close" aria-label="Close chat" onClick={toggle}>×</button>
        </div>
        <div className="chat-log" role="log" aria-live="polite" ref={log}>
          <span className="chat-day">Today</span>
          <div className="msg msg--them"><div className="bubble">{CHAT.greeting}</div></div>
          {messages.length === 0 && (
            <div className="chips">
              {CHAT.quickReplies.map(label => <button type="button" className="chip" key={label} onClick={() => send(label)}>{label}</button>)}
            </div>
          )}
          {messages.map((m, i) => (
            <div className={`msg msg--${m.who}`} key={i}>
              <div className="bubble">{m.text}</div>
              {m.reply && <Link href={m.href!} className="chat-cta" onClick={() => onCta(m.reply!)}>{m.reply.cta} →</Link>}
            </div>
          ))}
          {typing && <div className="typing" aria-label="Typing"><span></span><span></span><span></span></div>}
        </div>
        <form className="chat-input" onSubmit={e => { e.preventDefault(); const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement; send(input.value); e.currentTarget.reset(); }}>
          <input name="message" placeholder={CHAT.placeholder} aria-label="Message" autoComplete="off" />
          <button type="submit" aria-label="Send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
        </form>
        <Link href={formHref} className="chat-form-link" onClick={toggle}>{CHAT.formLink}</Link>
      </div>
      <button type="button" className="chat-teaser" onClick={toggle}><img src={CHAT.avatar} alt="" width="30" height="30" />{CHAT.teaser}</button>
      <button type="button" className="chat-launcher" aria-label={open ? 'Close chat' : CHAT.title} aria-expanded={open} onClick={toggle}>
        <svg className="icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.6A8 8 0 1 1 21 12z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" /></svg>
        <svg className="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        <span className="chat-badge" aria-hidden="true"></span>
      </button>
    </div>
  );
}
