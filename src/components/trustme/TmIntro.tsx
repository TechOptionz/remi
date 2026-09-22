import Link from 'next/link';
import ZoomArt from '@/components/ideas/ZoomArt';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

const SPIRAL_ALT = 'The T.R.U.S.T.M.E. Model, seven levels of thinking, developed by Remi Pearson. A golden spiral rises through seven medallions. 01 Trust, survival and agency, I focused. 02 Relatability, belonging and safety, we focused. 03 Uniqueness, power and identity, I focused. 04 Systems, order and continuity, we focused. 05 Tenacity, achievement and enterprise, I focused. 06 Meaning, contribution and belonging, we focused. 07 Evolution, functional flow, I focused. Unresourceful: the level controls us through unresolved fear. Resourceful: the level becomes a capacity we can use consciously. Under pressure, we fall back to the level we have genuinely integrated. Development expands complexity. It does not make one person more worthy than another.';

// THE T.R.U.S.T.M.E. MODEL — breadcrumb, title, what pressure reveals, where the model comes from, the poster
export default function TmIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">The T.R.U.S.T.M.E. Model</span>
      </nav>
      <p className="ideas-eyebrow">Leadership &amp; evolution · Seven levels of thinking</p>
      <PartHead n={1} title="The T.R.U.S.T.M.E. Model" aside={<Art name="p6-star" className="tm-head-art" />}>
        <Hand v={['underline']}>How our values develop and why our best thinking can disappear under pressure.</Hand>
        <Body>You can learn more about the thinking of a leader when something goes wrong than you can from almost anything they say about themselves. Under ordinary conditions, most of us can present as thoughtful, collaborative and relatively sophisticated. Add threat, uncertainty, financial pressure or a challenge to identity, and a different organising logic can appear. The leader who speaks about empowerment begins controlling every decision. The team that values candour retreats into agreement. The person who believes they are purpose-led becomes preoccupied with winning.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>This does not make them fraudulent. It reveals the level of thinking they can genuinely sustain.</Body>
        <Body>I developed the T.R.U.S.T.M.E. model as a context-independent way of understanding these shifts. Its seven levels are Trust, Relatability, Uniqueness, Systems, Tenacity, Meaning and Evolution. The model is informed by Clare Graves’ developmental research and Spiral Dynamics, developed by Don Beck and Christopher Cowan, and it also draws on Ken Wilber’s integral understanding that development must transcend and include what came before. I have adapted those foundations into a practical model for leadership, organisations, teams, families, cultures and individual development.</Body>
        <Body>T.R.U.S.T.M.E. is not a personality test. It does not sort people into seven permanent kinds. It asks what level of thinking is organising a person or system now, what that level makes visible, what it cannot yet solve, and what appears when pressure removes the performance.</Body>
      </div>
      <ZoomArt name="trustme-spiral" alt={SPIRAL_ALT} label="the T.R.U.S.T.M.E. Model" className="triad-diagram tm-plate" />
      <p className="dsr-caption">The seven levels of the T.R.U.S.T.M.E. model developed by Remi Pearson</p>
    </Part>
  );
}
