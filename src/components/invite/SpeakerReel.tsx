'use client';

// SPEAKER REEL — the reel (SITE.speakerReelVimeoId) beside the booking buttons, which preset the invitation form.
// The player only loads once the poster is clicked. Linked from About Remi as /invite-remi#speaker-reel.
import { useState } from 'react';
import { SITE } from '@/content/site';
import { VimeoFrame } from '@/components/home/hero/parts';

export default function SpeakerReel() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="speaker-reel" className="section section--tight" aria-labelledby="reel-h">
      <div className="reel">
        <div className="reel-video">
          {playing
            ? <VimeoFrame videoId={SITE.speakerReelVimeoId} params="autoplay=1&dnt=1&title=0&byline=0&portrait=0" title="Remi Pearson — speaker reel" />
            : (
              <button type="button" className="reel-poster" onClick={() => setPlaying(true)} aria-label="Play the speaker reel">
                <img src="/assets/photos/about-audience.webp" alt="" loading="lazy" decoding="async" />
                <span className="reel-play" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg></span>
                <span className="reel-label" aria-hidden="true">Watch the speaker reel</span>
              </button>
            )}
        </div>
        <div className="reel-copy">
          <p className="eyebrow">Speaker reel</p>
          <h2 id="reel-h" className="part-title part-title--sm"><span className="underline">See me in the room</span></h2>
          <p className="part-lede">A few minutes on stage, in the studio and in conversation, so you can see how I work with an audience before you invite me into yours.</p>
          <div className="reel-actions">
            <a href="#invite-form" className="btn btn--primary btn--caps" data-invite="Speaking">Invite me to speak</a>
            <a href="#invite-form" className="btn btn--outline btn--caps" data-invite="Broadcast">Book a TV or radio interview</a>
          </div>
        </div>
      </div>
    </section>
  );
}
