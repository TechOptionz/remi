import Icon from '@/components/shared/Icon';

// AND SOMETIMES, WE DO THE WORK LIVE — dark band between two armchairs; opens the archive on "Live human change"
export default function LiveWork() {
  return (
    <section className="band-dark band-dark--tight live-work" aria-labelledby="live-h">
      <span className="live-work-chair" aria-hidden="true"><Icon name="armchair" size={88} strokeWidth={0.8} /></span>
      <div>
        <h2 id="live-h" className="part-title part-title--sm part-title--accent">And sometimes, we do the work live</h2>
        <p className="part-lede part-lede--center">Real coaching conversations, difficult questions and the moment when an explanation finally becomes an experience.</p>
        <a href="#archive" className="btn btn--primary btn--caps" data-topic="Live human change">Watch live human change</a>
      </div>
      <span className="live-work-chair live-work-chair--accent" aria-hidden="true"><Icon name="armchair" size={88} strokeWidth={0.8} /></span>
    </section>
  );
}
