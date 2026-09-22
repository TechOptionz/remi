import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { PRESENCE_QUESTIONS, RESOURCE_QUESTIONS } from '@/content/vat';

const REVEALS_ALT = 'What I say matters, what my life reveals. Four rows: what I say, what I repeatedly do, what might I be protecting? I value adventure; choose predictability when uncertainty appears; could certainty be helping me feel safe? I value connection; hide my needs when closeness feels exposing; could I be protecting myself from rejection? I value self-respect; override my limits to preserve approval; what does advocating for myself feel likely to cost? I value sharing my work; keep preparing rather than risk being seen; could preparation be protecting me from judgement? Examples for compassionate inquiry, not conclusions about a person.';

// WHAT I MEAN BY A VALUE + CIRCUMSTANCES NEED CAREFUL INTERPRETATION
export default function VatValue() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>What I mean by a value</H3>
      <div className="triad-prose">
        <Body>Within this technique, I use values to describe what is operating in someone’s life: the priorities being expressed and reinforced through their choices, their responses and the emotional experiences they repeatedly organise themselves around. That includes priorities they may never consciously have chosen.</Body>
        <Body>This is a particular use of the word, and it matters that we understand it before going further. If I ask someone what they value, they might tell me adventure, intimacy or self-respect. Those words tell us something about how they see themselves, or how they would like to live. I then want to explore where those values have a presence in their actual experience.</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{PRESENCE_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>These questions open a conversation about the relationship between what we name and what we live.</Body>
        <Body>Someone may discover that certainty has considerably more influence over their decisions than adventure does. Another person may sincerely desire intimacy while arranging their relationships around keeping difficult feelings private. There is nothing useful about shaming either person for that discovery. We have begun to see what the inquiry needs to include.</Body>
        <Body>A desired experience is something we want to move towards. A lived value has evidence in how we relate to ourselves and participate in our lives.</Body>
        <Hand v={['sm']}>The distinction can be confronting because most of us would prefer to describe ourselves through our intentions.</Hand>
      </div>
      <ZoomArt name="vat-reveals" alt={REVEALS_ALT} label="What I say matters, what my life reveals" className="triad-diagram vat-plate" />
      <p className="dsr-caption">Examples to explore, not conclusions to impose.</p>

      <H3 v={['left', 'rule']}>Circumstances need careful interpretation</H3>
      <div className="triad-prose">
        <Body>We cannot look at someone’s circumstances and assume we know what they value. Someone experiencing illness may be profoundly committed to their health. Someone living in a house they dislike may be there because of a separation or a flood, while doing everything available to establish a different home.</Body>
        <Body>There can be a considerable lag between a change in how we relate to ourselves and a change in our circumstances. A person may begin expressing self-respect while their partner continues to dismiss them. We would need to understand their response to that dismissal, the options available to them and the support they need. The partner’s behaviour alone cannot tell us what the person values.</Body>
        <Body>This is why the technique involves a conversation rather than a quick interpretation. We explore what has happened alongside what the person is doing with what has happened. We consider capacity and willingness separately, because someone may want change intensely while having very little capacity available at that moment.</Body>
        <Body>We also become curious about resourcefulness.</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{RESOURCE_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>Those questions require care. Another person’s success does not establish what should be possible for this person under different conditions. Equally, accepting every account of impossibility without exploring it can leave someone trapped inside a belief they have never had the opportunity to examine.</Body>
      </div>
    </Part>
  );
}
