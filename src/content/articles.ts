// The free library (the Articles tab, /articles): free articles now, videos to follow. Add one here and it appears on
// /articles with its own page at /articles/<slug>, ending with "Return to free resources" and a link to its product.
// Copy is carried over word for word from Remi's documents. In body text and references, *text* is italic and
// [label](href) is a link (see components/articles/Inline.tsx). A body entry is a paragraph, { h2 } a question heading,
// or { figure } an image. A video is optional: `video: { provider: 'vimeo' | 'youtube', id: '…', title: '…' }` shows it above the text.
import type { VideoRef } from '@/components/shared/VideoEmbed';

export type ArticleBlock = string | { h2: string } | { figure: { src: string; alt: string; width: number; height: number } };

export type Article = {
  slug: string; title: string; date: string;        // date as 'YYYY-MM-DD'
  summary: string;                                  // the standfirst under the title, and the line on the library card
  image?: string;                                   // the library card's illustration
  product?: string;                                 // slug in content/products.ts: the product the article leads on to
  body: ArticleBlock[]; references?: string[];
  video?: VideoRef;
};

/** Where an article sends readers back to. */
export const LIBRARY_HREF = '/articles';

export const ARTICLES: Article[] = [
  {
    slug: "why-insight-isnt-enough",
    title: "Why Do I Keep Repeating the Same Patterns Even When I Understand Myself?",
    summary: "Why insight isn’t enough, and what inner work makes possible.",
    date: '2026-09-30', image: "/assets/rabbit-holes/kb-read-insight.webp", product: "why-do-i-keep-doing-this",
    body: [
      "You can know exactly why you people-please and still say yes when everything in you wants to say no. You can recognise your fear of abandonment while watching yourself chase someone who keeps withdrawing. You can explain the family dynamics that taught you to become responsible for everyone and still find yourself carrying the emotional weight of a room before anyone has asked you to.",
      "This is one of the most frustrating experiences in personal development. We have the insight. Sometimes we can see the pattern while we are doing it, which adds a particularly unpleasant layer of self-criticism … surely, if I know this much about myself, I should be able to do something different?",
      "I have spent more than twenty years working with that gap. Understanding can be enormously helpful, but there comes a point when another explanation leaves us standing in much the same place. We need to become curious about what becomes possible when we bring our attention to the inner experience we have been explaining.",
      { figure: { src: "/assets/articles/why-insight-isnt-enough.webp", width: 1379, height: 920,
        alt: "Why Insight Isn’t Enough. Understanding the pattern, then doing the inner work: “I know why I people-please.” becomes “I practise saying no and staying with the guilt.” “I know I’m afraid of rejection.” becomes “I meet that fear with compassion.” “I know I need support.” becomes “I allow myself to ask and receive.” “I know why I over-function.” becomes “I let others carry their responsibilities.” Insight recognises the pattern. Inner work develops the capacity to respond differently." } },
      { h2: "Why doesn’t self-awareness always lead to change?" },
      "Knowing that you learned to keep the peace tells you something about your history. It does not necessarily make conflict feel manageable today. You might understand that another person’s disappointment is theirs to experience, yet feel such intense guilt when it appears that you immediately surrender your boundary.",
      "The understanding and the emotional capacity are different achievements. One allows you to recognise what is happening. The other develops as you become able to remain with feelings that previously required you to appease, withdraw, defend yourself or take control.",
      "Courses can help us do this work. So can good books and thoughtful conversations. But we can also complete an extraordinary amount of learning without changing how we treat ourselves when we are frightened, ashamed or hurt. Our vocabulary develops while our inner world remains organised around the same old protections.",
      { h2: "Can seeking insight become a form of avoidance?" },
      "Sometimes the search for understanding becomes a comfortable place to stay. We analyse our attachment style, investigate another framework and discover a more sophisticated explanation for our behaviour. Meanwhile, the grief we have never allowed ourselves to feel remains untouched.",
      "I see intellectualising as a protective strategy when thinking about an experience keeps us at a distance from experiencing it. Someone can speak brilliantly about loneliness while barely allowing themselves to acknowledge how lonely they feel. They can describe their childhood with remarkable clarity and hurry past the sadness of what they needed and did not receive.",
      "There is intelligence in that protection. At some point, understanding may have been safer than feeling. Inner work begins by respecting that history and becoming curious about whether we can now approach what has been kept at a distance, with enough support and gentleness for something different to happen.",
      { h2: "What does doing the inner work actually mean?" },
      "My Self-Esteem Triad brings this work into focus through our relationship with emotions, emotional needs and boundaries. At its centre are the experiences of being worthy, lovable and enough. Each side asks us to consider how those experiences are expressed in the way we live.",
      "Our relationship with emotions includes whether we can acknowledge hurt without calling ourselves weak, experience anger without immediately condemning it, or allow grief without imposing a deadline. Emotional integration involves becoming increasingly capable of being with what we feel, at a pace we can manage, while retaining a relationship with ourselves.",
      "Research by Ford and colleagues (2018) found that habitually accepting thoughts and emotions without judging them was associated with better psychological health. Across laboratory, diary and longitudinal studies, acceptance was also linked with lower negative emotional responses to stress. The finding concerned accepting internal experiences; it did not require accepting the situations causing them.",
      "Our emotional needs deserve that same attention. We may know we need connection, consideration or support and still behave as though asking would be unreasonable. The work includes discovering what happens inside us when our needs become visible. Do we feel embarrassed? Burdensome? Afraid that needing something will cost us the relationship?",
      { h2: "Why are boundaries difficult even when we know what to say?" },
      "Many people know the boundary they need. They have rehearsed the words. What they struggle with is the feeling that arrives after they say them.",
      "Someone becomes disappointed, and guilt appears. Someone challenges the boundary, and self-doubt takes over. We begin explaining, softening and negotiating until the boundary has quietly disappeared. Afterwards, we search for a better script, although the words may have been perfectly adequate.",
      "Within the Triad, boundaries connect directly with emotions and emotional needs. Holding a boundary may require us to acknowledge our need for rest while allowing the discomfort of someone wishing we were available. We learn to consider that discomfort without automatically treating it as evidence that we have done something wrong.",
      { h2: "How does over-functioning keep us disconnected from ourselves?" },
      "Over-functioning can be difficult to recognise because it is so often rewarded. We are capable, reliable and excellent in a crisis. People appreciate how much we carry, and we may have built a considerable part of our identity around being the person who copes.",
      "Yet sometimes all that doing protects us from an uncomfortable inner experience. Being indispensable may feel safer than wondering whether we would still matter if we stopped helping. Managing someone else’s distress may spare us the helplessness of allowing them to struggle. Their needs become urgent while ours remain indefinitely postponable.",
      "Fritz and Helgeson (1998) studied “unmitigated communion”, a focus on others to the exclusion of oneself. Across four studies, they distinguished this pattern from a caring orientation towards others and linked it with psychological distress, reliance on others for self-esteem and self-neglect. Their work gives us a useful way to examine the cost of caring when we repeatedly disappear from the equation.",
      { h2: "Can self-improvement reinforce the feeling that I’m not enough?" },
      "I love learning. I also think we need to examine the promise we attach to it. If every course carries the hope that the next version of us will finally deserve acceptance, learning can become a way of repeatedly postponing our own worthiness.",
      "Compassion offers another starting point. Breines and Chen (2012) found across four experiments that responding to mistakes or weaknesses with self-compassion increased several forms of motivation to improve, including effort after failure and motivation to make amends. We can take responsibility and develop without making contempt for ourselves the engine of change.",
      "What becomes available through inner work is often very ordinary. We ask for support and allow ourselves to receive it. We acknowledge hurt without immediately explaining it away. We let someone be disappointed while remaining thoughtful about our boundary. We begin experiencing ourselves as someone whose feelings and needs belong in the conversation.",
      "The pattern may still appear. This time, perhaps, we can stay with ourselves long enough to make a different choice.",
    ],
    references: [
      "Breines, J.G. and Chen, S. (2012) ‘Self-compassion increases self-improvement motivation’, *Personality and Social Psychology Bulletin*, 38(9), pp. 1133–1143. doi: 10.1177/0146167212445599. [Read the free full text](https://self-compassion.org/wp-content/uploads/publications/selfimp.motivation.pdf).",
      "Ford, B.Q., Lam, P., John, O.P. and Mauss, I.B. (2018) ‘The psychological health benefits of accepting negative emotions and thoughts: Laboratory, diary, and longitudinal evidence’, *Journal of Personality and Social Psychology*, 115(6), pp. 1075–1092. doi: 10.1037/pspp0000157. [Read the free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC5767148/).",
      "Fritz, H.L. and Helgeson, V.S. (1998) ‘Distinctions of unmitigated communion from communion: Self-neglect and overinvolvement with others’, *Journal of Personality and Social Psychology*, 75(1), pp. 121–140. doi: 10.1037/0022-3514.75.1.121. [Read the free abstract](https://pubmed.ncbi.nlm.nih.gov/9686454/).",
    ],
  },
  {
    slug: "the-moment-you-leave-yourself",
    title: "Why Do I Lose Myself in Relationships?",
    summary: "The moment you leave yourself, and how compassionate inner work helps you return.",
    date: '2026-09-30', image: "/assets/rabbit-holes/kb-read-leave.webp", product: "love-without-losing-yourself",
    body: [
      "Someone says something that hurts you, and before you have had time to acknowledge the hurt, you are explaining why they probably didn’t mean it. You are tired, but they need something, so you agree. You want to raise a concern, then notice their mood and decide that now is probably not the time. Somehow, it rarely becomes the time.",
      "These moments can seem too ordinary to deserve attention. We call them being considerate, keeping the peace or choosing our battles. Sometimes that is exactly what they are. But when we repeatedly move away from our own feelings and needs to preserve a relationship, something happens inside us. We remain available to the other person while becoming increasingly unavailable to ourselves.",
      "I think this is where self-abandonment deserves our attention. We often notice it afterwards, when we feel resentful, exhausted or strangely absent from our own life. The more useful place to become curious is the moment our experience stopped counting.",
      { figure: { src: "/assets/articles/the-moment-you-leave-yourself.webp", width: 1379, height: 920,
        alt: "The Moment You Leave Yourself. Leaving myself, then staying with myself: I feel hurt: “It’s probably nothing.” or “My feelings matter.” I need support: “I shouldn’t burden anyone.” or “I can ask for help.” I want to say no: “I’ll say yes to keep the peace.” or “I can honour my limit.” Someone is disappointed: “I have to fix how they feel.” or “I can care and hold my boundary.”" } },
      { h2: "What does self-abandonment look like?" },
      "Self-abandonment can happen while we appear remarkably functional. We organise everything, respond thoughtfully and make life easier for the people around us. Meanwhile, our own discomfort is being edited out of the conversation.",
      "Perhaps we tell ourselves we are too sensitive. Perhaps we decide that needing reassurance would be embarrassing, or that asking for support would add to someone else’s burden. We might even recognise what we need and immediately explain why we should manage without it. Knowing ourselves does not prevent us from dismissing ourselves.",
      "Compromise leaves room for both people to matter. When self-abandonment becomes familiar, our own experience can start to feel like an inconvenience we must resolve before we are allowed to participate.",
      { h2: "Why do I put other people’s feelings before my own?" },
      "For some of us, paying close attention to other people became an early route to connection or safety. We learned when to be quiet, when to help and which feelings were unlikely to be welcomed. Being easy to love may have seemed to require becoming very undemanding.",
      "Internal Family Systems offers a compassionate way to explore these patterns. Within the IFS model, parts that please, control, withdraw or take excessive responsibility can be understood as protectors. Their strategies may be costly, but their intention is to prevent something the person experiences as threatening. The model emphasises respecting those protectors and developing a relationship with them before approaching the vulnerability they guard (IFS Institute, n.d.).",
      "This changes the quality of our attention. We can become curious about what the accommodating part fears would happen if we spoke honestly. Would someone leave? Become angry? Decide we were selfish? A part of us may still experience those possibilities as far more dangerous than the gradual loss of ourselves.",
      { h2: "How can compassionate self-inquiry help?" },
      "Compassionate self-inquiry begins with a willingness to notice what is actually happening. We might recognise tightness, hurt, numbness or an immediate urge to reassure the other person. We do not have to produce a sophisticated explanation before our experience deserves attention.",
      "Useful questions include, *What happened inside me just then? What am I trying to prevent? What do I need that I have already begun dismissing?* We can also notice how we feel towards the part that stepped in. Are we curious about it, or furious that it has done this again?",
      "That distinction matters. Inquiry can become another form of self-surveillance if we use it to catch ourselves being wrong. The possibility of change opens when we can listen without immediately requiring the answer to justify our feelings or make them disappear.",
      { h2: "What if I cannot feel compassion for myself?" },
      "Being told to offer ourselves compassion can feel surprisingly difficult. Someone may understand the idea and still feel irritated by their vulnerability, ashamed of their needs or frightened of what might emerge if they stopped controlling everything.",
      "Gilbert and Procter’s (2006) work on compassionate mind training specifically addressed people with high shame and self-criticism who found self-warmth difficult or frightening. Their small, uncontrolled pilot reported improvements in self-criticism, shame and self-soothing. It also recognised that compassion may need to become an accessible experience, rather than another instruction someone is expected to follow.",
      "I developed Emotion Integration Technique for people whose protection makes that access difficult. The starting point may be frustration, blankness, dissociation or simply not knowing. In EIT, we work outward through the layers of protection until genuine compassion becomes available, then bring that compassion inward towards the original experience. We approach what is underneath at a pace the person can manage (Pearson, 2026).",
      "This is facilitated work. Its purpose is to respect the protection while helping someone develop a different relationship with the feelings they have needed to keep at a distance.",
      { h2: "How do I stay connected to myself when someone is disappointed?" },
      "My Self-Esteem Triad connects our relationship with emotions, emotional needs and boundaries, with *worthy, lovable, enough* at the centre. It gives us a practical way to consider what returning to ourselves might involve.",
      "We acknowledge the emotion we have pushed aside. We allow the need we have discounted to matter. Then we consider what boundary or response would honour that experience. Perhaps we need time before answering, want to express hurt or need to revisit a commitment we made too quickly.",
      "The difficult part may be allowing the other person to have feelings about our response. We can care about their disappointment while continuing to assess what is right for us. Guilt may appear, and we can listen to it without automatically assuming it proves we have done something wrong.",
      "Self-compassion is something we can develop through practice. Neff and Germer’s (2013) randomised trial found that participants in a Mindful Self-Compassion programme reported greater increases in self-compassion and wellbeing than a waitlist group. This supports practising a more supportive inner relationship, including during the ordinary moments when our old responses appear.",
      { h2: "What does returning to myself look like?" },
      "Returning may begin after we have already agreed, minimised the hurt or taken responsibility for something that belongs to someone else. We can notice what happened and reconsider our response. We can acknowledge the part that tried to protect the relationship while making room for the experience it pushed aside.",
      "The relationship itself also deserves an honest assessment. Some people can make room for our needs; others repeatedly punish their expression. Inner work should help us recognise those conditions and decide how to respond, including when distance or leaving becomes necessary.",
      "We may still feel uncertain. The other person may still be disappointed. But we begin to have a place in the conversation, and the relationship no longer gets our participation at the automatic expense of our own experience.",
    ],
    references: [
      "Gilbert, P. and Procter, S. (2006) ‘Compassionate mind training for people with high shame and self-criticism: Overview and pilot study of a group therapy approach’, *Clinical Psychology & Psychotherapy*, 13(6), pp. 353–379. doi: 10.1002/cpp.507. [Available as free full text](https://self-compassion.org/wp-content/uploads/publications/Gilbert.Procter.pdf).",
      "IFS Institute (n.d.) ‘The Internal Family Systems model outline’. Available at: [IFS Institute](https://ifs-institute.com/resources/articles/internal-family-systems-model-outline) (Accessed: 30 September 2026).",
      "Neff, K.D. and Germer, C.K. (2013) ‘A pilot study and randomized controlled trial of the Mindful Self-Compassion program’, *Journal of Clinical Psychology*, 69(1), pp. 28–44. doi: 10.1002/jclp.21923. [Available as free full text](https://self-compassion.org/wp-content/uploads/publications/Neff-Germer-MSC-RCT-2012.pdf).",
      "Pearson, R. (2026) ‘Emotion Integration Technique’. *Remi Pearson*. Available at: [Remi Pearson](/ideas-models/emotion-integration-technique)",
    ],
  },
];
