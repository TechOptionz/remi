import Link from 'next/link';

// PART ONE · THINGS I'VE SPENT YEARS TRYING TO FIGURE OUT
export default function Part1Intro() {
  return (
    <section id="part-1" className="ideas-part ideas-intro" aria-labelledby="p1-h">
      <img className="ideas-compass" src="/assets/ideas/im-compass.webp" alt="" aria-hidden="true" />
      <div className="ideas-intro-copy">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Ideas &amp; Models</span></nav>
        <p className="ideas-eyebrow">Ideas &amp; Models · Part One</p>
        <h1 id="p1-h" className="ideas-title">Things I've spent years trying to figure out</h1>
        <p className="ideas-hand ideas-hand--underline">I cannot leave a good question alone.</p>
        <p className="ideas-body">Most of what I've created began with something I could not explain, something I had lived, witnessed or watched people struggle with long after the obvious answers had failed.</p>
        <p className="ideas-body">So I kept following the question.</p>
      </div>
      <figure className="ideas-map">
        <img src="/assets/ideas/im-map.webp" alt="A hand-drawn map. Let Truth Lead sits at the centre, with paths out to Human Needs &amp; Self, Emotional Change, Meaning &amp; Alignment, Leadership &amp; Human Systems, and Influence &amp; Building Beyond You." />
        <a className="ideas-hotspot" href="#part-3" style={{ '--x': '36.5%', '--y': '2%', '--w': '26%', '--h': '23%' } as React.CSSProperties} aria-label="Human needs &amp; self — Part Three"></a>
        <a className="ideas-hotspot" href="#part-4" style={{ '--x': '3%', '--y': '31%', '--w': '29%', '--h': '31%' } as React.CSSProperties} aria-label="Emotional change — Part Four"></a>
        <a className="ideas-hotspot" href="#part-5" style={{ '--x': '68%', '--y': '28%', '--w': '31%', '--h': '32%' } as React.CSSProperties} aria-label="Meaning &amp; alignment — Part Five"></a>
        <a className="ideas-hotspot" href="#part-6" style={{ '--x': '11%', '--y': '69%', '--w': '29%', '--h': '29%' } as React.CSSProperties} aria-label="Leadership &amp; human systems — Part Six"></a>
        <a className="ideas-hotspot" href="#part-8" style={{ '--x': '56%', '--y': '69%', '--w': '32%', '--h': '29%' } as React.CSSProperties} aria-label="Influence &amp; building beyond you — Part Eight"></a>
        <a className="ideas-hotspot" href="#part-2" style={{ '--x': '40%', '--y': '38%', '--w': '20%', '--h': '30%' } as React.CSSProperties} aria-label="Let truth lead — the body of work at a glance"></a>
      </figure>
      <div className="ideas-note-row">
        <img className="ideas-note-arrow" src="/assets/ideas/im-arrow.webp" alt="" aria-hidden="true" />
        <p className="ideas-note">This is not one model.<br />It is a body of work.</p>
      </div>
      <p className="ideas-body ideas-body--inset">Some of it helps us understand what shaped us. Some helps us change what happens in the moment. Some helps leaders and organisations see where alignment is breaking. And some helps people sell, lead and build without manipulation, rescuing or becoming the entire asset.</p>
      <a href="#part-2" className="ideas-btn">See the body of work <span aria-hidden="true">→</span></a>
      <a href="#part-2" className="ideas-next"><span className="star" aria-hidden="true">✳</span> Continue to Part Two · The complete map <span aria-hidden="true">⟶</span></a>
    </section>
  );
}
