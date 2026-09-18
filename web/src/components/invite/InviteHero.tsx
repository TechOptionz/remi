import Link from 'next/link';

// INVITE ME INTO AN INTERESTING ROOM
export default function InviteHero() {
  return (
    <section className="page-hero invite-hero" aria-labelledby="page-h">
      <div className="invite-copy">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Invite Remi</span>
        </nav>
        <h1 id="page-h" className="invite-title">Invite me<br />into an<br />interesting<br /><span className="underline">room</span></h1>
        <p className="body-xl">I love intelligent conversations, thoughtful people and rooms where something real might happen.</p>
        <p className="body-xl">Invite me to your podcast, panel, stage, senior team, roundtable, salon, documentary, festival or something wonderfully difficult to categorise.</p>
        <div className="quote-row">
          <p className="quote-note">“The best conversations are rarely the ones where everybody already agrees.”</p>
          <svg className="quote-arrow" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 10c22-4 40 6 44 30"/><path d="M40 33l10 8 6-11"/></svg>
        </div>
      </div>
      <div className="collage">
        <img className="photo-print collage-main" src="/assets/photos/invite-stage.webp" alt="Remi taking a selfie with a theatre full of people cheering" />
        <img className="photo-print collage-small" src="/assets/photos/invite-portrait.webp" alt="Remi smiling" />
      </div>
    </section>
  );
}
