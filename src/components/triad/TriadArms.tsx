import { Body, Box, Hand, Img, Part, Star } from '@/components/ideas/ui';
import { EMOTION_VOICES, NEEDS_QUESTIONS } from '@/content/triad';

function ArmHead({ id, n, name, question, tone }: { id: string; n: number; name: string; question: string; tone: string }) {
  return (
    <header className="arm-head" id={id}>
      <span className={`arm-num arm-num--${tone}`} aria-hidden="true">{n}</span>
      <div>
        <h3 className={`arm-name arm-name--${tone}`}>{name}</h3>
        <p className="arm-q">{question}</p>
      </div>
    </header>
  );
}

// THE THREE ARMS — Needs, Boundaries, Emotions
export default function TriadArms() {
  return (
    <Part n={3} className="triad-arms">
      <article className="arm">
        <ArmHead id="needs" n={1} name="Needs" question="Can I recognise and respond to what I need?" tone="rust" />
        <div className="triad-prose">
          <Body>Every human being has needs. Having them does not make us weak, demanding or “too needy”. It makes us human.</Body>
          <Body>Our needs influence how we attach, protect ourselves, make decisions, form relationships and interpret what happens around us. When we do not know what our needs are, we cannot take meaningful responsibility for meeting them. We might expect other people to work them out for us, suppress them until they become impossible to ignore or try to meet a deeper need through something that can never satisfy it.</Body>
          <Body>A person who needs reassurance may criticise their partner instead of asking for closeness. Someone who needs safety may try to control everything around them. Someone longing to matter may overfunction, achieve or make themselves indispensable. Someone who needs rest may continue performing until their body forces them to stop.</Body>
          <Hand v={['sm']}>The need has not disappeared. It has simply found an indirect route.</Hand>
          <Body>Knowing our needs allows us to ask better questions:</Body>
        </div>
        <Box className="arm-box">
          <ul className="arm-list">{NEEDS_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
        </Box>
        <div className="triad-prose">
          <Body>Every time we recognise a genuine need and respond to it responsibly, we strengthen self-trust. We demonstrate to ourselves that our inner experience matters and that we will not automatically abandon ourselves when caring for ourselves becomes inconvenient.</Body>
          <p className="arm-close"><Star /> That is an act of self-esteem.</p>
        </div>
      </article>

      <article className="arm">
        <ArmHead id="boundaries" n={2} name="Boundaries" question="Can I remain myself while being connected to you?" tone="gold" />
        <div className="triad-prose">
          <Body>Boundaries are often reduced to saying no. That is part of them, but it is nowhere near the whole story.</Body>
          <Body>A boundary is a lived understanding of where I begin and end, and where you begin and end. It allows me to know which feelings, choices, responsibilities and consequences belong to me, and which belong to you.</Body>
          <Hand v={['sm']}>This is differentiation.</Hand>
          <Body>Differentiation allows two people to be close without becoming psychologically fused. I can care about your feelings without making them my identity. I can listen to your perspective without automatically surrendering my own. I can disappoint you and remain a loving person. I can love you without disappearing into what you need me to be.</Body>
          <Body>When this capacity is underdeveloped, connection can become enmeshment. We may experience another person’s disappointment as evidence that we have done something wrong. We may accommodate their preferences before we have even noticed our own. We may confuse empathy with responsibility, agreement with safety, or self-sacrifice with love.</Body>
          <Body>Over time, this produces self-abandonment. We lose access to self-advocacy because we are no longer clear about the self we are advocating for.</Body>
          <Body>Healthy boundaries are not instruments for controlling other people. They tell us what we will participate in, how we will care for ourselves and what we will do when something is no longer healthy for us. They also reveal which relationships have room for our differentiated self.</Body>
          <Body>When I can remain connected to you without leaving myself, my sense of who I am becomes more stable.</Body>
          <p className="arm-close"><Star /> That is also self-esteem.</p>
        </div>
      </article>

      <article className="arm">
        <ArmHead id="emotions" n={3} name="Emotions" question="Can all of me be welcome?" tone="olive" />
        <div className="triad-prose">
          <Body>Our emotions are part of how we know ourselves.</Body>
          <Body>They give us information about what matters, what hurts, what feels threatened, what we long for and what may need our attention. They are not always literal instructions, and they do not need to control our behaviour. They do need a relationship with us.</Body>
          <Body>If I have no relationship with my sadness, I will try to shut it down, outrun it or explain it away. I may also struggle to remain present when sadness appears in somebody else. Their emotion activates everything I have learned to avoid in myself.</Body>
          <Body>The same applies to anger, fear, grief, shame, joy, tenderness and vulnerability. Whatever we exile internally becomes difficult to meet compassionately in another person.</Body>
          <Body>Some people become flooded by emotion. Others disconnect, intellectualise, minimise or withdraw. A dismissive-avoidant protective pattern, for example, may involve shutting down when emotional closeness intensifies. This does not necessarily mean the person feels nothing. Often, the system has learned that emotional experience is unsafe, overwhelming or unlikely to be met well.</Body>
          <Body>A healthier relationship with emotion allows us to notice what we feel, experience it in the body, name it and stay present without immediately turning it into a verdict about ourselves or somebody else.</Body>
          <Hand v={['sm']}>We learn to speak for our emotions without speaking entirely from them.</Hand>
        </div>
        <Box className="arm-box arm-box--voices">
          <Img name="p3-heart" className="arm-box-art" />
          <ul className="arm-voices">{EMOTION_VOICES.map(q => <li key={q}>“{q}”</li>)}</ul>
        </Box>
        <div className="triad-prose">
          <Body>Emotional maturity does not require permanent calm. It means we can remain in relationship with ourselves when calm is absent.</Body>
          <Body>When every emotion is allowed to belong, we no longer have to divide ourselves into acceptable and unacceptable parts.</Body>
          <p className="arm-close"><Star /> That, too, is self-esteem.</p>
        </div>
      </article>
    </Part>
  );
}
