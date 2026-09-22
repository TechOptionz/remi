import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, NextLink, Panel, Part } from '@/components/ideas/ui';
import { RELATED, VAT_TRAINING_HREF } from '@/content/vat';

// GOALS EMERGE FROM A CLEARER RELATIONSHIP WITH OURSELVES + for practitioners + related ideas
export default function VatClose() {
  return (
    <Part n={5}>
      <H3 v={['left', 'rule']}>Goals emerge from a clearer relationship with ourselves</H3>
      <div className="triad-prose">
        <Body>Towards the end of this inquiry, we can return to the question of what the person wants. We now have a fuller understanding of what has been influencing their choices and what their earlier goals may have been doing for them.</Body>
        <Body>Some goals remain meaningful. Others change considerably. Someone may still want to build a successful business, while recognising that the income figure they borrowed from the coaching community has little to do with the life they want. Another person may discover that their desire for a relationship has been organised around finally proving they are lovable, and begin to consider what mutual care would actually require.</Body>
        <Body>The goal emerges with this understanding included. There is room to consider whether it expresses something they are coming to live, or whether it asks an external achievement to resolve a relationship with themselves that still needs attention.</Body>
        <Body>We continue to pay attention to lived evidence. How is the person responding when their needs arise? What happens when the old protection is activated? Their experience gives us information about where the inner work has taken hold and where more care is needed.</Body>
        <Body>The question I want someone to leave with is one they can keep returning to:</Body>
      </div>
      <p className="ideas-note triad-note">What is directing my life, and can I meet that honestly enough to have more choice?</p>
      <div className="triad-prose">
        <Hand>A meaningful goal becomes easier to form when we have allowed ourselves to explore the answer.</Hand>
      </div>

      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">For practitioners</H3>
        <p className="panel-body panel-body--center">Once a year, I run training for practitioners in the Values Alignment Technique. We explore how to distinguish lived values from desired experiences, recognise protection and secondary gain, and bring inner work into the inquiry before moving towards aligned goals.</p>
        <div className="panel-actions"><Btn href={VAT_TRAINING_HREF} v={['outline']}>Find out more</Btn></div>
      </Panel>

      <H3 v={['rules']}><span></span>Related ideas<span></span></H3>
      <div className="next-cards related-cards">
        {RELATED.map(r => (
          <Box as="article" className="ncard" key={r.title}>
            <img src={`/assets/ideas/${r.art}.webp`} alt="" aria-hidden="true" />
            <h4>{r.title}</h4><p>{r.text}</p>
            <Link href={r.href} className="ideas-btn ideas-btn--sm">{r.cta} <span aria-hidden="true">→</span></Link>
          </Box>
        ))}
      </div>

      <Btn href="/ideas-models#part-4">Back to Ideas &amp; Models</Btn>
      <NextLink href="/ideas-models#part-5" decorated>Continue to meaning &amp; alignment</NextLink>
    </Part>
  );
}
