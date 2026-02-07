/**
 * Lesson 2: sina — you
 * Talking to others and exploring opposites
 */

const lesson2 = {
  id: 2,
  title: "sina — you",
  desc: "Talking to others and exploring opposites",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "<b>sina</b> works exactly like <b>mi</b> — no <b>li</b> needed. This lesson also introduces your first antonym pairs.",
    
    concepts: [
      {
        title: "sina = mi (grammatically)",
        explanation: "Just like <b>mi</b>, sentences with <b>sina</b> as the sole subject don't use <b>li</b>. The predicate follows directly.",
        examples: [
          { tp: "sina pona", en: "You are good / You fix", note: "Same structure as 'mi pona'" },
          { tp: "sina moku", en: "You eat / You are food", note: "Same ambiguity as 'mi moku'" },
          { tp: "sina sona", en: "You know / You are knowledge", note: "Usually means 'You know'" }
        ],
        pitfall: "Never say 'sina li pona' — the 'li' is wrong here!"
      },
      {
        title: "Singular AND plural",
        explanation: "<b>sina</b> means both 'you' (one person) AND 'you all' (multiple people). Context determines which.",
        examples: [
          { tp: "sina pona", en: "You (one) are good / You (all) are good", note: "Works for both!" },
          { tp: "sina mute li pona", en: "You all are good", note: "'sina mute' explicitly means plural — and NOW needs 'li'!" }
        ],
        pitfall: "Adding 'mute' to 'sina' means you need 'li' again: 'sina mute LI pona'"
      },
      {
        title: "Antonym pairs",
        explanation: "Toki Pona loves opposites. Learning words in pairs helps you think in contrasts, which is very toki pona!",
        examples: [
          { tp: "suli ↔ lili", en: "big ↔ small", note: "Size/importance opposites" },
          { tp: "pona ↔ ike", en: "good ↔ bad", note: "Quality opposites — both taught here!" },
          { tp: "wawa ↔ wawa ala", en: "strong ↔ not strong", note: "Use 'ala' to negate (Lesson 9)" }
        ],
        pitfall: "Not every word has a perfect antonym. 'sona' (knowledge) doesn't have a direct opposite."
      },
      {
        title: "Combining sentences",
        explanation: "In toki pona, you can often drop periods between short sentences, especially with contrasting subjects.",
        examples: [
          { tp: "mi lili. sina suli.", en: "I am small. You are big.", note: "Two separate sentences" },
          { tp: "mi lili sina suli", en: "I am small, you are big", note: "Combined — works because 'mi' and 'sina' are clear markers" }
        ],
        pitfall: "This only works when the subject change is obvious. Don't overuse it!"
      }
    ],
    
    keyInsight: "'mi' and 'sina' are the two special pronouns that never need 'li'. Master these before moving to Lesson 3!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "sina",
      primaryMeaning: "you (singular or plural)",
      roles: {
        personalPronoun: "you (as subject)",
        possessivePronoun: "your (after a noun)",
        reflexivePronoun: "yourself (after 'e')"
      },
      notes: "Works identically to 'mi' grammatically. No 'li' after 'sina' alone. Covers both 'you' and 'you all'.",
      examples: {
        asSubject: "sina moku — you eat",
        asPossessive: "tomo sina — your house",
        asReflexive: "sina lukin e sina — you look at yourself"
      }
    },
    {
      word: "suli",
      primaryMeaning: "big, large, important",
      roles: {
        adjective: "big, large, tall, long, important, adult",
        adverb: "greatly, importantly",
        noun: "size, importance, largeness",
        verbTransitive: "to enlarge, to make important"
      },
      notes: "Covers physical size AND abstract importance. A 'jan suli' could be a tall person OR an important person.",
      compounds: [
        { tp: "jan suli", en: "adult, important person" },
        { tp: "ijo suli", en: "important thing, big deal" },
        { tp: "suli mute", en: "very big/important" },
        { tp: "tomo suli", en: "big building, mansion" }
      ]
    },
    {
      word: "lili",
      primaryMeaning: "small, little, few, young",
      roles: {
        adjective: "small, little, young, short, few, a bit",
        adverb: "slightly, a little bit",
        noun: "smallness, youth, minority",
        verbTransitive: "to shrink, to make smaller"
      },
      notes: "The opposite of 'suli'. Also implies youth (jan lili = child) and can mean 'a little bit' as an adverb.",
      compounds: [
        { tp: "jan lili", en: "child, young person" },
        { tp: "tomo lili", en: "small room, hut" },
        { tp: "moku lili", en: "snack, small meal" },
        { tp: "lili mute", en: "very small, tiny" }
      ]
    },
    {
      word: "wawa",
      primaryMeaning: "strong, powerful, intense",
      roles: {
        adjective: "strong, powerful, energetic, intense",
        adverb: "strongly, powerfully, intensely",
        noun: "strength, power, energy",
        verbTransitive: "to strengthen, to empower, to energize"
      },
      notes: "Covers physical strength, electrical power, and metaphorical intensity. 'telo wawa' could be strong coffee or alcohol!",
      compounds: [
        { tp: "jan wawa", en: "strong person, powerful person" },
        { tp: "telo wawa", en: "strong drink, energy drink, coffee" },
        { tp: "wawa mute", en: "very strong, super powerful" },
        { tp: "ilo wawa", en: "power tool, powerful device" }
      ]
    },
    {
      word: "sona",
      primaryMeaning: "know, knowledge, wisdom",
      roles: {
        adjective: "knowledgeable, known, wise",
        adverb: "knowingly, wisely",
        noun: "knowledge, wisdom, information",
        verbTransitive: "to know, to know how to, to be skilled at",
        verbIntransitive: "to know, to be aware"
      },
      notes: "A crucial word! 'mi sona' = I know. 'mi sona e ni' = I know this. 'kama sona' = learn (become knowing).",
      compounds: [
        { tp: "jan sona", en: "expert, wise person, sage" },
        { tp: "sona mute", en: "much knowledge, expertise" },
        { tp: "kama sona", en: "learn (come to know)" },
        { tp: "sona pona", en: "good knowledge, wisdom" }
      ]
    },
    {
      word: "ike",
      primaryMeaning: "bad, negative, wrong, evil",
      roles: {
        adjective: "bad, negative, wrong, evil, complex, harmful",
        adverb: "badly, poorly, wrongly",
        noun: "badness, evil, negativity, complexity",
        verbTransitive: "to make bad, to worsen, to harm",
        verbIntransitive: "to be bad, to suck",
        interjection: "oh no! alas! darn!"
      },
      notes: "The opposite of 'pona'. Use 'ike' to express anything negative, wrong, complex, or harmful. 'ike tawa mi' = bad to me = I dislike it.",
      compounds: [
        { tp: "jan ike", en: "bad person, enemy" },
        { tp: "ijo ike", en: "bad thing, problem" },
        { tp: "ike lukin", en: "ugly (bad-looking)" },
        { tp: "pilin ike", en: "feel bad, sadness" },
        { tp: "toki ike", en: "insult, bad speech" }
      ],
      examples: {
        asAdjective: "jan ike — bad person, enemy",
        asPredicate: "ni li ike — this is bad",
        asAdverb: "ona li pali ike — they work badly",
        asNoun: "ike li kama — badness comes",
        opinionPattern: "ni li ike tawa mi — I dislike this"
      }
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basic: [
      { tp: "sina pona", en: "You are good.", gloss: "you | good", note: "Same pattern as 'mi pona'" },
      { tp: "sina suli", en: "You are big. / You are important.", gloss: "you | big/important", note: "Both meanings possible" },
      { tp: "sina lili", en: "You are small. / You are young.", gloss: "you | small/young", note: "Could mean either" },
      { tp: "sina wawa", en: "You are strong.", gloss: "you | strong", note: "Physical or metaphorical" },
      { tp: "sina sona", en: "You know.", gloss: "you | know", note: "Intransitive use" },
      { tp: "sina ike", en: "You are bad.", gloss: "you | bad", note: "Opposite of 'sina pona'" }
    ],
    
    asAdjective: [
      { tp: "jan suli", en: "big person / important person / adult", gloss: "person + big/important", note: "suli modifies jan" },
      { tp: "jan lili", en: "small person / child", gloss: "person + small/young", note: "lili modifies jan" },
      { tp: "jan wawa", en: "strong person", gloss: "person + strong", note: "wawa modifies jan" },
      { tp: "jan sona", en: "knowledgeable person / expert", gloss: "person + knowing", note: "sona as adjective" },
      { tp: "jan ike", en: "bad person / enemy", gloss: "person + bad", note: "Opposite of 'jan pona'" },
      { tp: "ijo ike", en: "bad thing / problem", gloss: "thing + bad", note: "Opposite of 'ijo pona'" },
      { tp: "ijo suli", en: "big thing / important thing", gloss: "thing + big/important", note: "From Lesson 3 vocab" }
    ],
    
    asAdverb: [
      { tp: "mi moku suli", en: "I eat a lot.", gloss: "I | eat | big/much", note: "suli describes the amount" },
      { tp: "sina moku lili", en: "You eat a little.", gloss: "you | eat | small/little", note: "lili as 'a bit'" },
      { tp: "mi toki wawa", en: "I speak strongly/loudly.", gloss: "I | speak | strong", note: "wawa intensifies the verb" },
      { tp: "sina pali sona", en: "You work skillfully.", gloss: "you | work | knowing", note: "sona = with knowledge" },
      { tp: "mi pali ike", en: "I work badly.", gloss: "I | work | bad", note: "ike as adverb = poorly" }
    ],
    
    asNoun: [
      { tp: "suli li pona", en: "Bigness is good. / Importance is good.", gloss: "bigness | (li) | good", note: "suli as abstract noun" },
      { tp: "lili li pona", en: "Smallness is good.", gloss: "smallness | (li) | good", note: "lili as abstract noun" },
      { tp: "wawa li kama", en: "Strength comes.", gloss: "strength | (li) | comes", note: "wawa as noun" },
      { tp: "sona li pona", en: "Knowledge is good.", gloss: "knowledge | (li) | good", note: "sona as noun" },
      { tp: "ike li kama", en: "Badness comes. / Bad things happen.", gloss: "badness | (li) | comes", note: "ike as abstract noun" }
    ],
    
    withPossession: [
      { tp: "tomo sina", en: "your house", gloss: "house + your", note: "sina as possessive" },
      { tp: "moku sina", en: "your food", gloss: "food + your", note: "Parallel to 'moku mi'" },
      { tp: "sona sina", en: "your knowledge", gloss: "knowledge + your", note: "Abstract nouns can be possessed" },
      { tp: "wawa sina li suli", en: "Your strength is great.", gloss: "strength + your | (li) | big", note: "Full sentence" },
      { tp: "tomo sina li suli", en: "Your house is big.", gloss: "house + your | (li) | big", note: "Owned subject" }
    ],
    
    contrasts: [
      { tp: "mi lili sina suli", en: "I am small, you are big.", gloss: "I | small | you | big", note: "Combined sentences" },
      { tp: "sina wawa mi wawa", en: "You are strong, I am strong.", gloss: "you | strong | I | strong", note: "Both are strong!" },
      { tp: "mi sona sina sona ala", en: "I know, you don't know.", gloss: "I | know | you | know | not", note: "Preview of 'ala'" },
      { tp: "tomo mi li lili tomo sina li suli", en: "My house is small, your house is big.", gloss: "house+my | (li) | small | house+your | (li) | big", note: "Comparing possessions" },
      { tp: "mi pona sina ike", en: "I am good, you are bad.", gloss: "I | good | you | bad", note: "pona/ike contrast" },
      { tp: "jan pona li pona jan ike li ike", en: "A friend is good, an enemy is bad.", gloss: "friend | (li) | good | enemy | (li) | bad", note: "Using compounds" }
    ],
    
    ambiguous: [
      { tp: "sina suli", meanings: ["You are big.", "You are important.", "You grow/enlarge."], likely: "You are big/important.", note: "Adjective vs verb" },
      { tp: "sina sona", meanings: ["You know.", "You are knowledge/wisdom."], likely: "You know.", note: "Verb interpretation more common" },
      { tp: "jan suli", meanings: ["big person", "important person", "adult"], likely: "All are valid!", note: "Context determines" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What role does the highlighted word play?",
      questions: [
        {
          tp: "jan **suli**",
          en: "big/important person",
          target: "suli",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 0,
          explanation: "'suli' comes after the noun 'jan', so it describes what kind of person = adjective"
        },
        {
          tp: "**suli** li pona",
          en: "Bigness/Importance is good.",
          target: "suli",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 3,
          explanation: "'suli' is the subject of the sentence (before 'li'), so it's a noun meaning 'bigness' or 'importance'"
        },
        {
          tp: "mi moku **lili**",
          en: "I eat a little.",
          target: "lili",
          options: ["adjective (describing a noun)", "adverb (describing how/how much)", "verb (an action)", "noun (a thing)"],
          correct: 1,
          explanation: "'lili' comes after the verb 'moku', describing how much I eat = adverb"
        },
        {
          tp: "sina **wawa**",
          en: "You are strong.",
          target: "wawa",
          options: ["adjective (predicate adjective)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 0,
          explanation: "'wawa' is the predicate after 'sina', describing what you are = predicate adjective"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence. Notice how 'suli' works differently:",
      questions: [
        { tp: "sina suli", expectedType: "predicate adjective", hint: "suli describes 'sina'" },
        { tp: "jan suli", expectedType: "adjective", hint: "suli describes 'jan'" },
        { tp: "mi moku suli", expectedType: "adverb", hint: "suli describes how much" },
        { tp: "suli li pona", expectedType: "noun", hint: "suli is the subject" }
      ],
      answers: ["You are big/important.", "big/important person, adult", "I eat a lot.", "Bigness/Importance is good."]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["sina", "wawa", "mi", "lili"],
          validAnswers: ["sina wawa mi lili", "mi lili sina wawa"],
          translations: ["You are strong, I am small.", "I am small, you are strong."],
          hint: "Create a contrast between 'sina' and 'mi'"
        },
        {
          words: ["sona", "sina", "pona", "li"],
          validAnswers: ["sona sina li pona", "sina sona pona"],
          translations: ["Your knowledge is good.", "You know well."],
          hint: "Two different structures are possible!"
        }
      ]
    },
    
    {
      type: "opposites",
      instruction: "Give the opposite meaning:",
      questions: [
        { given: "sina suli", en: "You are big.", opposite: "sina lili", oppositeEn: "You are small." },
        { given: "jan suli", en: "adult / big person", opposite: "jan lili", oppositeEn: "child / small person" },
        { given: "mi moku suli", en: "I eat a lot.", opposite: "mi moku lili", oppositeEn: "I eat a little." },
        { given: "tomo suli", en: "big house", opposite: "tomo lili", oppositeEn: "small house" },
        { given: "sina pona", en: "You are good.", opposite: "sina ike", oppositeEn: "You are bad." },
        { given: "jan pona", en: "friend / good person", opposite: "jan ike", oppositeEn: "enemy / bad person" },
        { given: "mi pali pona", en: "I work well.", opposite: "mi pali ike", oppositeEn: "I work badly." }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This sentence is ambiguous. Give BOTH possible meanings:",
      questions: [
        {
          tp: "sina suli",
          meanings: 2,
          answers: ["You are big (physically).", "You are important."],
          followUp: "How would context help decide?",
          likelyAnswer: "If discussing bodies, probably physical size. If discussing status, probably importance."
        },
        {
          tp: "jan sona",
          meanings: 2,
          answers: ["knowledgeable person / expert", "known person / famous person"],
          followUp: "Which is more common?",
          likelyAnswer: "'Knowledgeable person' is the standard meaning."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence to match the English meaning:",
      questions: [
        { tp: "sina _____ mute", en: "You are very strong.", answer: "wawa", hint: "What means 'strong'?" },
        { tp: "_____ sina li pona", en: "Your knowledge is good.", answer: "sona", hint: "What means 'knowledge'?" },
        { tp: "mi _____ sina suli", en: "I am small, you are big.", answer: "lili", hint: "What's the opposite of 'suli'?" },
        { tp: "jan _____ li sona", en: "The child knows.", answer: "lili", hint: "How do you say 'child'?" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'sina' needs 'li' before the predicate, just like 'ona'.",
          answer: false,
          explanation: "No! 'sina' (like 'mi') NEVER takes 'li'. Only other subjects do."
        },
        {
          statement: "'sina' can mean both 'you' (one person) and 'you all' (many people).",
          answer: true,
          explanation: "Correct! Context determines singular vs plural."
        },
        {
          statement: "'jan suli' can only mean 'big person'—it cannot mean 'important person'.",
          answer: false,
          explanation: "'suli' covers both physical size AND importance. 'jan suli' could mean either!"
        },
        {
          statement: "'sona' can be a noun (knowledge) or a verb (to know).",
          answer: true,
          explanation: "Exactly! Like most toki pona words, 'sona' can play multiple roles."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "jan tu — Two People",
    intro: "A dialogue between two people comparing themselves. Notice the contrasts!",
    paragraphs: [
      { tp: "mi lili.", en: "I am small.", note: "Speaker 1 describes themselves" },
      { tp: "sina lili ala! sina suli!", en: "You're not small! You're big!", note: "Speaker 2 disagrees (preview of 'ala')" },
      { tp: "mi sona lili.", en: "I know a little.", note: "'lili' as adverb = 'a little'" },
      { tp: "sina sona mute! sina jan sona!", en: "You know a lot! You're a knowledgeable person!", note: "'mute' = many/much" },
      { tp: "mi wawa ala.", en: "I am not strong.", note: "Negation with 'ala'" },
      { tp: "sina wawa! wawa sina li suli!", en: "You are strong! Your strength is great!", note: "'wawa' as both adjective and noun" },
      { tp: "pona! mi pona sina pona.", en: "Good! I am good, you are good.", note: "Combined sentences, positive ending" }
    ],
    comprehension: [
      { question: "Does Speaker 1 think highly of themselves?", answer: "No, they keep saying they're small, unknowledgeable, and weak.", evidence: "mi lili, mi sona lili, mi wawa ala" },
      { question: "How does Speaker 2 respond to each self-criticism?", answer: "By disagreeing and affirming the opposite.", evidence: "'sina suli!', 'sina sona mute!', 'sina wawa!'" },
      { question: "What word appears as both a noun and an adjective in this story?", answer: "'wawa' — 'sina wawa' (adj) and 'wawa sina' (noun)", evidence: "Lines 5-6" }
    ],
    challenge: "Rewrite this dialogue with the roles reversed—Speaker 1 compliments, Speaker 2 is humble!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Now you can describe people with more nuance! Here are common compounds — including opposites:",
    items: [
      { tp: "jan suli", en: "adult, important person, big person", literal: "person-big", lesson: "Context determines meaning" },
      { tp: "jan lili", en: "child, kid, young person", literal: "person-small/young", lesson: "Very common compound" },
      { tp: "jan wawa", en: "strong person, powerful person", literal: "person-strong", lesson: "Physical or political power" },
      { tp: "jan sona", en: "expert, sage, knowledgeable person", literal: "person-knowing", lesson: "A wise person" },
      { tp: "jan pona", en: "friend, good person", literal: "person-good", lesson: "One of the most common compounds!" },
      { tp: "jan ike", en: "enemy, bad person", literal: "person-bad", lesson: "Opposite of jan pona" },
      { tp: "tomo sina", en: "your house/room", literal: "building-your", lesson: "Possession with 'sina'" }
    ],
    teaser: "Next lesson: 'li' unlocks sentences about ANYONE, not just 'mi' and 'sina'!"
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "sina + VERB", example: "sina moku", meaning: "You do [verb]" },
      { pattern: "sina + ADJ", example: "sina pona", meaning: "You are [adjective]" },
      { pattern: "sina + VERB + ADV", example: "sina moku suli", meaning: "You do [verb] [adverb]-ly" },
      { pattern: "NOUN + sina", example: "tomo sina", meaning: "your [noun]" },
      { pattern: "mi X sina Y", example: "mi lili sina suli", meaning: "I am X, you are Y" }
    ],
    remember: [
      "No 'li' after 'sina' (or 'mi')",
      "'sina' = singular AND plural 'you'",
      "'suli' ↔ 'lili' are size opposites",
      "'pona' ↔ 'ike' are quality opposites",
      "Most words work as noun/adj/adv/verb"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson2;
}
