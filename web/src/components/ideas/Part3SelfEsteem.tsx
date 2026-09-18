// PART THREE · SELF-ESTEEM
export default function Part3SelfEsteem() {
  return (
    <section id="part-3" className="ideas-part" aria-labelledby="p3-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · Part Three</p>
          <h2 id="p3-h" className="ideas-title">Self-esteem is something we live.</h2>
          <p className="ideas-body">It is shaped by whether we know what we need, honour where we end and another person begins, and remain in relationship with our emotional truth.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p3-scene.webp" alt="" aria-hidden="true" />
      </div>
      <h3 className="ideas-h3">The Self-Esteem Triad</h3>
      <p className="ideas-hand ideas-hand--center ideas-hand--tight">Needs. Boundaries. Emotions.</p>
      <img className="ideas-art ideas-art--center triad-art" src="/assets/ideas/p3-triad.webp" alt="The Self-Esteem Triad. Needs: know what matters to you; recognise, express and take responsibility for what you need. Boundaries: the line at which you can love someone and still love and take care of yourself; boundaries clarify what is yours, what is not and what behaviour you will accept. Emotions: vital information about what needs attention, protection, expression or completion; speak for your emotions, not from them. At the centre: worthy, lovable, enough." />
      <div className="hd-box needs">
        <img className="needs-trees needs-trees--a" src="/assets/ideas/p3-trees-a.webp" alt="" aria-hidden="true" />
        <h3 className="ideas-h3 ideas-h3--tight">The Fifteen Emotional Needs</h3>
        <p className="ideas-hand ideas-hand--center ideas-hand--sm">The emotional-needs map created by Remi Pearson.</p>
        <div className="needs-cols">
          <div><h4 className="needs-h needs-h--rust">Safety &amp; connection</h4><ol className="needs-list"><li>Safety &amp; Security</li><li>Stability &amp; Predictability</li><li>Attachment &amp; Belonging</li><li>Love &amp; Acceptance</li><li>To Matter, Be Seen &amp; Truly Known</li></ol></div>
          <div><h4 className="needs-h needs-h--gold">Selfhood &amp; agency</h4><ol className="needs-list" start={6}><li>Authenticity &amp; Truth</li><li>Emotional Expression</li><li>Autonomy &amp; Agency</li><li>Freedom &amp; Sovereignty</li><li>Competence &amp; Capability</li></ol></div>
          <div><h4 className="needs-h needs-h--olive">Wholeness &amp; expansion</h4><ol className="needs-list" start={11}><li>Self-Worth &amp; Identity</li><li>Playfulness, Joy &amp; Aliveness</li><li>Meaning &amp; Purpose</li><li>Growth &amp; Expansion</li><li>Transcendence &amp; Existential Peace</li></ol></div>
        </div>
        <p className="ideas-hand ideas-hand--center ideas-hand--sm needs-foot"><span className="star" aria-hidden="true">✳</span> Emotions help reveal which need is asking for our attention.</p>
        <img className="needs-trees needs-trees--b" src="/assets/ideas/p3-trees-b.webp" alt="" aria-hidden="true" />
      </div>
      <h3 className="ideas-h3 ideas-h3--stars"><span className="star" aria-hidden="true">✳</span> Safe versus Risky Problems <span className="star" aria-hidden="true">✳</span></h3>
      <div className="safe-grid">
        <div className="hd-box safe-box">
          <div className="safe-item"><img src="/assets/ideas/p3-wrench.webp" alt="" aria-hidden="true" /><div><h4 className="safe-h safe-h--olive">Safe problem</h4><p>Fix it out there.</p></div></div>
          <div className="safe-item"><img src="/assets/ideas/p3-heart.webp" alt="" aria-hidden="true" /><div><h4 className="safe-h safe-h--rust">Risky truth</h4><p>Turn toward what is here.</p><p className="safe-qs">What is coming up for me?<br />What is this asking me to notice?<br />What needs my attention?</p></div></div>
          <img className="safe-mtn" src="/assets/ideas/p3-mtn.webp" alt="" aria-hidden="true" />
        </div>
        <p className="ideas-hand safe-note"><span className="star" aria-hidden="true">✳</span> The risk is not danger. It is the vulnerability of staying with ourselves.</p>
      </div>
      <a href="#part-4" className="ideas-btn">Continue to human change &amp; meaning <span aria-hidden="true">→</span></a>
      <a href="#part-4" className="ideas-next"><span className="star" aria-hidden="true">✳</span> Continue to Part Four · Past, present &amp; future <span aria-hidden="true">⟶</span></a>
    </section>
  );
}
