import Link from 'next/link';
import { MAP_HOTSPOTS } from '@/content/ideas';
import { Body, Btn, Hand, Img, NextLink, Part } from './ui';

const MAP_ALT = 'A hand-drawn map. Let Truth Lead sits at the centre, with paths out to Human Needs & Self, Emotional Change, Meaning & Alignment, Leadership & Human Systems, and Influence & Building Beyond You.';

/** The hand-drawn map; each region is an invisible link to its part (positions in MAP_HOTSPOTS). */
function IdeasMap() {
  return (
    <figure className="ideas-map">
      <img src="/assets/ideas/im-map.webp" alt={MAP_ALT} />
      {MAP_HOTSPOTS.map(s => (
        <a className="ideas-hotspot" href={s.href} key={s.label} aria-label={s.label}
          style={{ '--x': s.x, '--y': s.y, '--w': s.w, '--h': s.h } as React.CSSProperties}></a>
      ))}
    </figure>
  );
}

// PART ONE · THINGS I'VE SPENT YEARS TRYING TO FIGURE OUT
export default function Part1Intro() {
  return (
    <Part n={1} className="ideas-intro">
      <Img name="im-compass" className="ideas-compass" />
      <div className="ideas-intro-copy">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Ideas &amp; Models</span></nav>
        <h1 id="p1-h" className="ideas-title">Things I've spent years trying to figure out</h1>
        <Hand v={['underline']}>I cannot leave a good question alone.</Hand>
        <Body>Most of what I've created began with something I could not explain, something I had lived, witnessed or watched people struggle with long after the obvious answers had failed.</Body>
        <Body>So I kept following the question.</Body>
      </div>
      <IdeasMap />
      <div className="ideas-note-row">
        <Img name="im-arrow" className="ideas-note-arrow" />
        <p className="ideas-note">This is not one model.<br />It is a body of work.</p>
      </div>
      <Body inset>Some of it helps us understand what shaped us. Some helps us change what happens in the moment. Some helps leaders and organisations see where alignment is breaking. And some helps people sell, lead and build without manipulation, rescuing or becoming the entire asset.</Body>
      <Btn href="#part-2">See the body of work</Btn>
      <NextLink href="#part-2" decorated>Continue to the complete map</NextLink>
    </Part>
  );
}
