import { Brush, Head, PlayRing } from '@/components/rabbit-holes/ui';
import { CONVERSATIONS_WORTH } from '@/content/loving-someone';

// CONVERSATIONS WORTH HAVING — two episodes, drawing on the left, title / guest / watch on the right (design part three)
export default function LsConversations() {
  return (
    <section className="kb-section ls-convs" aria-labelledby="ls-convs-h">
      <Head id="ls-convs-h"><Brush>Conversations</Brush> worth having</Head>
      <div className="ls-convs-grid">
        {CONVERSATIONS_WORTH.map(c => (
          <a key={c.title} href={c.href} target="_blank" rel="noopener" className="ls-conv">
            <img src={c.image} alt="" loading="lazy" decoding="async" />
            <span className="ls-conv-body">
              <span className="ls-conv-title">{c.title}</span>
              <span className="ls-conv-guest">With {c.guest}</span>
              <span className="ls-conv-watch"><PlayRing /> Watch the conversation</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
