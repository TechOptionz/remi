'use client';

// Home hero: renders the variant picked in the Variants menu, plus the shared video modal.
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSiteState } from '@/lib/site-state';
import { HeroA, HeroB, HeroC, HeroC1, HeroC2, HeroD, HeroE } from './variants';
import { VIMEO, VimeoFrame } from './parts';

export default function Hero() {
  const { hero } = useSiteState();
  const [modalOpen, setModalOpen] = useState(false);
  const onWatch = () => setModalOpen(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {hero === 'E' && <HeroE onWatch={onWatch} />}
      {hero === 'A' && <HeroA onWatch={onWatch} />}
      {hero === 'B' && <HeroB onWatch={onWatch} />}
      {hero === 'C' && <HeroC onWatch={onWatch} />}
      {hero === 'C1' && <HeroC1 onWatch={onWatch} />}
      {(hero === 'C2' || hero === 'C3') && <HeroC2 />}
      {hero === 'D' && <HeroD onWatch={onWatch} />}

      {/* Clicking the backdrop or × closes the modal; the player only loads while open */}
      <div className="video-modal" role="dialog" aria-modal="true" aria-label="Featured video" hidden={!modalOpen}
        onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}>
        <div className="video-modal-frame">
          {modalOpen && <VimeoFrame params={VIMEO.modal} title="Remi Pearson — featured talk" />}
        </div>
        {/* Cross-link to booking: the invite form preset to Speaking, with the speaker reel on the same page */}
        <p className="video-modal-cta">
          Want this in your room?{' '}
          <Link href="/invite-remi?invite=Speaking#invite-form" onClick={() => setModalOpen(false)}>Invite Remi to speak <span aria-hidden="true">→</span></Link>
        </p>
        <button type="button" className="video-modal-close" aria-label="Close" onClick={() => setModalOpen(false)}>×</button>
      </div>
    </>
  );
}
