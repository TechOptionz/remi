import Link from 'next/link';

// HI, I'M REMI
export default function AboutHero() {
  return (
    <section className="page-hero about-hero" aria-labelledby="page-h">
      <div className="about-copy">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About Remi</span>
        </nav>
        <h1 id="page-h" className="invite-title"><span className="underline">Hi, I'm Remi</span></h1>
        <p className="body-xl">In 2003, I wasn't searching for a new career.</p>
        <p className="body-xl">I was depressed, unwell and thinking about suicide. At that point, my greatest ambition was not to build a business, write books or teach thousands of people. It was to experience one whole day without anxiety.</p>
        <p className="eyebrow about-eyebrow">I needed to answer one burning question:</p>
        <p className="burning">Why is it that some people, even though they experience heartbreak, triumph?</p>
        <p className="body-xl">Why are some people defined by what happened to them, while others somehow find a way to become more fully themselves?</p>
        <p className="body-xl">I began training as a coach because I needed to understand.</p>
        <p className="support-note">If you are struggling right now, please reach out. In Australia, Lifeline is available 24 hours a day on <a href="tel:131114">13 11 14</a>.</p>
      </div>
      <img className="about-photo" src="/assets/photos/about-hero.webp" alt="Remi Pearson smiling, arm raised, in a pink jacket" />
    </section>
  );
}
