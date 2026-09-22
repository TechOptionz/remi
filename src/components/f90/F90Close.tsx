import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, NextLink, Panel, Part } from '@/components/ideas/ui';
import { CONTINUE, RELATED } from '@/content/f90';

// WHAT THE FIRST 90 DAYS SHOULD LEAVE BEHIND + CONTINUE THE WORK + INTELLECTUAL FOUNDATIONS + related ideas
export default function F90Close() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>What the first 90 days should leave behind</H3>
      <div className="triad-prose">
        <Body>At the end of 90 days, the most meaningful evidence of leadership is not how many changes carry your name. It is whether the team understands its purpose more clearly, whether the written and unwritten ground rules are closer to alignment, whether the structure helps people succeed, whether implementation reflects intention, and whether accountability has become more credible. People should know what matters, how their work contributes, what excellence looks like and where they have genuine room to lead.</Body>
        <Body>They should also have a clearer experience of you. They should know that you are curious without being indecisive, transparent without making every thought the team’s burden, respectful without lowering standards, and uncompromising about what genuinely matters. They should have seen you change your mind when better information arrived and hold your position when discomfort was the only argument against it.</Body>
        <Body>You are not there to become the team’s friend, and you are not there to prove that the title gives you power. You are there to understand the system, improve its capacity to produce the right result, uplift the people within it and develop leaders who can do the same. That is a much more demanding use of the first 90 days. It is also how leadership begins to become useful.</Body>
        <Hand>Greater impact, stronger systems, happier people.</Hand>
      </div>

      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Continue the work</H3>
        <div className="cam-work-grid f90-continue">
          {CONTINUE.map(c => (
            <div key={c.cta} className="cam-work-item">
              <p className="panel-body">{c.lead}</p>
              <Btn href={c.href} v={['outline']}>{c.cta}</Btn>
            </div>
          ))}
        </div>
      </Panel>

      <H3 v={['left', 'rule']}>Intellectual foundations</H3>
      <div className="triad-prose">
        <Body sm>This article draws on the leadership models developed by Remi Pearson through building and leading The Coaching Institute, including the Critical Alignment Model, T.R.U.S.T.M.E., Core, Improve, Innovate and Disruptive Leadership. Related influences include Jim Collins’ work on disciplined leadership and getting the right people into the right roles, Susan Scott’s work on fierce conversations, and the long tradition of treating culture as something leaders create through what they model, reward, tolerate and repeatedly do.</Body>
      </div>

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

      <Btn href="/ideas-models#part-7">Back to Ideas &amp; Models</Btn>
      <NextLink href="/ideas-models#part-8" decorated>Continue to influence &amp; building beyond you</NextLink>
    </Part>
  );
}
