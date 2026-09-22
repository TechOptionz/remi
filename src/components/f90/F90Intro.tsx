import Link from 'next/link';
import ZoomArt from '@/components/ideas/ZoomArt';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

export const TIMELINE_ALT = 'Your First 90 Days as a Leader, by Remi Pearson, built on the Critical Alignment Model. Observe before you intervene. Understand before you decide. A rising line passes through three stages. 01, days 1 to 30, observe and map reality: listen, question, notice, trace the work, find the unwritten ground rules. Understand the system first. 02, days 31 to 60, interrogate and synthesise: compare, test assumptions, analyse trust, identify the real gaps. 03, days 61 to 90, improve and develop: align, establish rhythms, strengthen the system, develop leadership capacity. Greater impact, stronger systems, happier people. Beneath them, the CAM lens: Purpose, Environment, Structure, Implementation, People. Do not confuse arriving with authority with arriving in possession of the truth.';

// YOUR FIRST 90 DAYS AS A LEADER — breadcrumb, title, the pressure of a new role, the central discipline, the poster
export default function F90Intro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Your First 90 Days as a Leader</span>
      </nav>
      <p className="ideas-eyebrow">Leadership &amp; evolution · The practice of leadership</p>
      <PartHead n={1} title="Your First 90 Days as a Leader" aside={<Art name="p2-compass" className="f90-head-art ideas-art--figure" />}>
        <Hand v={['underline']}>Observe before you intervene. Understand before you decide.</Hand>
        <Body>A new leadership role creates a peculiar kind of pressure. You have been given responsibility, people are watching, and it can feel as though you should immediately have something impressive to say. You want to establish credibility. You want the team to know you can make decisions. You may have inherited problems that everyone expects you to fix, and sometimes the person who appointed you has already given you a version of what those problems are. The temptation is to arrive with answers.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>That temptation is understandable and it is where many leaders begin to get themselves into trouble. A team is not a clean sheet of paper. It has a history, loyalties, frustrations, workarounds, private agreements, formal systems, informal power, areas of genuine excellence and things people stopped talking about because nothing changed when they did. If you intervene before you understand that ecosystem, you may solve the wrong problem, dismantle something that was quietly working, or decide you have a people problem when the people have been compensating for a leadership problem for years.</Body>
        <Body>The first 90 days should be treated as a disciplined inquiry. Your work is to observe, collate, synthesise, understand and assess before you begin making substantial changes. This does not mean disappearing into passive observation or refusing to make an urgent decision. It means respecting the complexity of what you have entered. Leadership begins with seeing what is actually there, including what nobody thought to tell you.</Body>
      </div>
      <p className="f90-rule-label">The central discipline</p>
      <p className="ideas-note triad-note">Do not confuse arriving with authority with arriving in possession of the truth.</p>
      <ZoomArt name="f90-timeline" alt={TIMELINE_ALT} label="Your First 90 Days as a Leader" className="triad-diagram f90-plate ideas-bleed" />
      <p className="dsr-caption">Understand the system first.</p>
    </Part>
  );
}
