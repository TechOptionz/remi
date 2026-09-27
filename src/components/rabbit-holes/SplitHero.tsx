import Link from 'next/link';
import { Art, kbArt } from './ui';

type Props = {
  id: string; title: React.ReactNode; lede: string;
  primary: { label: string; href: string }; secondary: { label: string; href: string };
  photo: { name: string; alt: string; width: number; height: number; position?: string };
};

/** Rabbit-hole hero: title, lede, a rust button and a text link on the left; the photograph runs to the window edge on the
 *  right and fades into the paper (tell me the truth, leadership). */
export default function SplitHero({ id, title, lede, primary, secondary, photo }: Props) {
  return (
    <section className="kb-split-hero" aria-labelledby={id}>
      <div className="kb-split-hero-copy">
        <h1 id={id} className="kb-title">{title}</h1>
        <p>{lede}</p>
        <div className="kb-split-hero-btns">
          <a href={primary.href} className="hm-btn">{primary.label}</a>
          <Link href={secondary.href} className="kb-textlink">{secondary.label} <span aria-hidden="true">⟶</span></Link>
        </div>
        <Art name="kb-flourish" className="kb-split-hero-flourish" />
      </div>
      <div className="kb-split-hero-photo">
        <img src={kbArt(photo.name)} alt={photo.alt} width={photo.width} height={photo.height} style={photo.position ? { objectPosition: photo.position } : undefined} />
      </div>
    </section>
  );
}
