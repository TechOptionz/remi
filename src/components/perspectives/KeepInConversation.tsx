import Icon from '@/components/shared/Icon';
import NewsletterForm from '@/components/shared/NewsletterForm';
import { LISTEN_LINKS } from '@/content/perspectives';

// KEEP ME IN THE CONVERSATION — dark newsletter band, then where to watch and listen (LISTEN_LINKS)
export default function KeepInConversation() {
  return (
    <>
      <section className="band-dark band-dark--tight" aria-labelledby="keep-h">
        <div className="keep-conv">
          <h2 id="keep-h" className="part-title part-title--sm"><span className="underline">Keep me in the conversation</span></h2>
          <p className="part-lede">New Perspectives conversations, thoughtful ideas and the occasional invitation. I will write when I have something worth saying.</p>
          <div className="keep-conv-form"><NewsletterForm className="news-form news-form--band" /></div>
          <p className="keep-conv-note">No daily motivation. No relentless promotion. Just the next conversation worth having.</p>
        </div>
      </section>
      <ul className="listen-links" aria-label="Where to watch and listen">
        {LISTEN_LINKS.map(l => (
          <li key={l.label}><a href={l.href} target="_blank" rel="noopener"><span className="icon-ring"><Icon name={l.icon} size={24} /></span>{l.label}</a></li>
        ))}
      </ul>
    </>
  );
}
