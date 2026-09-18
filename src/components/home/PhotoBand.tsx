'use client';

// IN THE ROOM — four-photo band under the hero (hidden for hero D, which is already full-screen video)
import { useSiteState } from '@/lib/site-state';

const PHOTOS = [
  { src: '/assets/photos/band-1.webp', alt: 'Remi in the room' },
  { src: '/assets/photos/band-2.webp', alt: 'Remi on stage' },
  { src: '/assets/photos/band-3.webp', alt: 'Remi in the studio' },
  { src: '/assets/photos/band-4.webp', alt: 'Remi with online audiences' },
];

export default function PhotoBand() {
  const { hero } = useSiteState();
  if (hero === 'D') return null;
  return (
    <section className="band" aria-label="Remi at work">
      {PHOTOS.map(p => <img loading="lazy" decoding="async" src={p.src} alt={p.alt} key={p.src} />)}
    </section>
  );
}
