import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

// VALUES ALIGNMENT TECHNIQUE — breadcrumb, title, the business owner who cannot be seen, why goals come last
export default function VatIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Values Alignment Technique</span>
      </nav>
      <p className="ideas-eyebrow">Meaning &amp; alignment · A coaching inquiry</p>
      <PartHead n={1} title="Values Alignment Technique" aside={<Art name="p4-compass" className="dsr-head-art" />}>
        <Hand v={['underline']}>Understanding what is driving your life before deciding where to take it.</Hand>
      </PartHead>
      <div className="triad-prose">
        <Body>Someone tells me they want to build a successful business. They have a clear income goal and can describe what achieving it would mean for their family. They have been thinking about it for years. But when we explore what is happening in their life, they are barely allowing themselves to be seen. They avoid conversations in which someone might reject them, keep postponing opportunities to share their work, and spend considerable time preparing for a future they never quite begin.</Body>
        <Body>The ambition may be sincere. So is the need to remain protected. Until we understand the relationship between those two things, another goal-setting exercise may simply give them a more detailed description of something they feel unable to pursue.</Body>
        <Body>I developed the Values Alignment Technique because I kept encountering this gap in coaching. People were being encouraged to decide what they wanted before they had explored what was already directing their choices. Sometimes their goals reflected something deeply meaningful. Sometimes they reflected expectations they had absorbed from other people, or an attempt to finally feel worthy. A goal could itself be protective, giving someone enough hope about the future to avoid examining how they were living in the present.</Body>
        <Hand v={['sm']}>For me, goal setting belongs towards the end of a substantial inquiry.</Hand>
        <Body>I want to understand what the person is experiencing, what their familiar patterns provide for them, and what happens emotionally when they consider living differently. That takes curiosity and sometimes a willingness to question an account of ourselves that we have become quite attached to.</Body>
      </div>
    </Part>
  );
}
