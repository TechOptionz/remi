import Icon, { type IconName } from '@/components/shared/Icon';

const FORMATS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'mic', title: 'Long-form conversations', text: 'Podcasts, video interviews, fireside chats and conversations where neither person is simply waiting for the next question.' },
  { icon: 'tv', title: 'TV & radio interviews', text: 'Live and pre-recorded television and radio, from news and current affairs commentary to in-depth studio conversations on psychology, relationships and leadership.' },
  { icon: 'chat', title: 'Panels & public dialogue', text: 'Expert panels, debates and moderated conversations exploring more than one honest perspective.' },
  { icon: 'roundtable', title: 'Roundtables, salons & private gatherings', text: 'Small, exceptional rooms where founders, thinkers and practitioners can speak candidly and go somewhere unexpected.' },
  { icon: 'institution', title: 'Festivals, universities & ideas events', text: "Writers' festivals, book events, public lectures and intelligent gatherings across psychology, relationships, leadership and human behaviour." },
  { icon: 'book', title: 'Books & editorial projects', text: 'Forewords, expert commentary, substantive interviews, collaborative chapters and contributions to books worth helping into the world.' },
  { icon: 'camera', title: 'Documentary & media', text: 'Documentaries, thoughtful media appearances and projects exploring the human questions beneath the obvious story.' },
  { icon: 'star', title: 'One-off masterclasses & guest experiences', text: 'A substantial contribution inside an established program, retreat or community when the audience and question are genuinely interesting.' },
];

// INVITATIONS THAT LIGHT ME UP — intro with photo collage, then the eight formats (4 + 4)
export default function Formats() {
  return (
    <section className="section section--tight" aria-labelledby="light-h">
      <div className="part-head">
        <div>
          <h2 id="light-h" className="part-title">Here are the invitations that light me up</h2>
          <p className="part-lede">I am interested in ideas, intelligent people and experiences with enough room for discovery. The format matters far less than the quality of the question and the people gathered around it.</p>
        </div>
        <div className="duo-photos">
          <img className="photo-print duo-photos-a" loading="lazy" decoding="async" src="/assets/photos/remi-pink-jacket.webp" alt="Remi smiling, seated, in a pink patterned jacket" />
          <img className="photo-print duo-photos-b" loading="lazy" decoding="async" src="/assets/photos/about-community.webp" alt="Remi with a room full of people cheering" />
        </div>
      </div>
      <div className="format-cards">
        {FORMATS.map(f => (
          <article className="format-card" key={f.title}>
            <span className="format-icon"><Icon name={f.icon} size={44} strokeWidth={1.2} /></span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
