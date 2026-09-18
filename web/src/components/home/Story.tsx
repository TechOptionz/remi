import Link from 'next/link';

// STORY
export default function Story() {
  return (
    <section id="story" className="section split story" aria-labelledby="story-h">
      <img loading="lazy" decoding="async" className="story-photo" src="/assets/photos/story.webp" alt="Photo of Remi Pearson" />
      <div>
        <p className="eyebrow">About Remi</p>
        <h2 id="story-h" className="h2 h2--story">Twenty-three years following one question.</h2>
        <p className="body-xl">In 2003 I wasn't searching for a new career. I needed to understand why some people are defined by what happened to them, while others somehow find a way to become more fully themselves.</p>
        <p className="body-xl">That question led me into coaching, psychology, attachment, trauma and the emotional architecture beneath the patterns we repeat. The business, the books, the models and the stages all came later.</p>
        <Link href="/about-remi" className="text-link">Read Remi's full story →</Link>
      </div>
    </section>
  );
}
