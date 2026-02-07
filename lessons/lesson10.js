/**
 * Lesson 10: la — Context & Conditionals
 * The context particle for time, conditions, and topics
 */

const lesson10 = {
  id: 10,
  title: "la — Context & Conditionals",
  desc: "Using la to express time, conditions, topics, and perspectives",
  isExpanded: true,
  
  grammar: {
    summary: "<b>la</b> is the context particle. It separates context from the main sentence: <b>[context] la [sentence]</b>. Use it for time ('tenpo ni la' = now), conditions ('sina wile la' = if you want), and topics ('ni la' = as for this).",
    
    concepts: [
      {
        title: "Basic structure: context la sentence",
        explanation: "The <b>la</b> particle marks everything before it as context for what follows. Think of it as 'in the context of X, Y happens' or 'given X, then Y'.",
        examples: [
          { tp: "tenpo ni la mi moku", en: "Now I eat. / At this time, I'm eating.", note: "'tenpo ni' = now" },
          { tp: "tenpo pini la mi lape", en: "Before, I slept.", note: "'tenpo pini' = past time" },
          { tp: "sina pona la mi pona", en: "If you're good, I'm good.", note: "Conditional" },
          { tp: "ni la mi sona ala", en: "About this, I don't know.", note: "Topic marker" },
          { tp: "tomo mi la mi pilin pona", en: "At my house, I feel good.", note: "Location as context" }
        ],
        pitfall: "The context comes BEFORE 'la', the main statement comes AFTER."
      },
      {
        title: "Time expressions with la",
        explanation: "One of the most common uses of <b>la</b> is setting time context. <b>tenpo</b> + modifier + <b>la</b> tells WHEN something happens.",
        examples: [
          { tp: "tenpo suno la mi pali", en: "During the day, I work.", note: "'tenpo suno' = daytime" },
          { tp: "tenpo pimeja la mi lape", en: "At night, I sleep.", note: "'tenpo pimeja' = nighttime" },
          { tp: "tenpo kama la mi tawa ma ante", en: "In the future, I'll go somewhere else.", note: "'tenpo kama' = future" },
          { tp: "tenpo pini la ona li lon ni", en: "Before, they were here.", note: "'tenpo pini' = past" },
          { tp: "tenpo mute la mi pali e ni", en: "Many times, I've done this.", note: "'tenpo mute' = often" }
        ],
        pitfall: "'tenpo suno la' = during the day. 'tenpo suno ni la' = today specifically."
      },
      {
        title: "Conditionals: if... then...",
        explanation: "<b>la</b> naturally expresses conditionals. The context before <b>la</b> is the 'if' clause; the sentence after is the 'then' clause.",
        examples: [
          { tp: "sina wile la mi pana", en: "If you want, I'll give (it).", note: "'sina wile' = if you want" },
          { tp: "ona li kama la mi toki tawa ona", en: "If they come, I'll talk to them.", note: "Future conditional" },
          { tp: "ni li pona la mi musi", en: "If this is good, I'll have fun.", note: "Conditional on quality" },
          { tp: "sina toki ala la mi sona ala", en: "If you don't speak, I don't know.", note: "Negative conditional" }
        ],
        pitfall: "Toki Pona doesn't distinguish 'if' from 'when' — context makes it clear."
      },
      {
        title: "Topic marking with la",
        explanation: "Use <b>la</b> to introduce a topic — 'as for X' or 'regarding X'.",
        examples: [
          { tp: "jan ni la mi sona ala", en: "About this person, I don't know.", note: "Introducing a topic" },
          { tp: "toki pona la ona li pona", en: "As for Toki Pona, it's good.", note: "Topic: toki pona" },
          { tp: "moku la mi wile e kili", en: "Regarding food, I want fruit.", note: "Topic: food" },
          { tp: "pali la mi ken", en: "As for work, I can (do it).", note: "Topic: work" }
        ],
        pitfall: "Topic 'la' is like saying 'speaking of X...' or 'on the topic of X...'"
      },
      {
        title: "Perspective with la",
        explanation: "<b>la</b> can express whose perspective or opinion is being given: <b>mi la</b> = 'in my view'.",
        examples: [
          { tp: "mi la ni li pona", en: "In my view, this is good.", note: "'mi la' = from my perspective" },
          { tp: "ona la sina li ike", en: "From their view, you're bad.", note: "'ona la' = their perspective" },
          { tp: "jan mute la toki pona li pona", en: "To many people, Toki Pona is good.", note: "General opinion" },
          { tp: "sina la seme li pona?", en: "In your view, what's good?", note: "Asking opinion" }
        ],
        pitfall: "'mi la' vs 'tawa mi': both express perspective, 'mi la' is more topic-like."
      },
      {
        title: "ken la — maybe, possibly",
        explanation: "<b>ken la</b> is a common phrase meaning 'maybe' or 'possibly'.",
        examples: [
          { tp: "ken la ona li kama", en: "Maybe they'll come.", note: "Possibility" },
          { tp: "ken la mi pali e ni", en: "Maybe I'll do this.", note: "Uncertain future" },
          { tp: "ken la ni li pona", en: "Maybe this is good.", note: "Uncertain quality" },
          { tp: "ken la ala", en: "Maybe not.", note: "Negated possibility" }
        ],
        pitfall: "'ken la' is essentially 'in the context of possibility' = maybe."
      },
      {
        title: "taso: but vs. only",
        explanation: "<b>taso</b> means 'only' as a modifier, but 'but/however' at the start of a sentence.",
        examples: [
          { tp: "mi wile. taso mi ken ala", en: "I want to. But I can't.", note: "'taso' at start = but" },
          { tp: "jan taso li lon", en: "Only a person is here.", note: "'taso' as modifier = only" },
          { tp: "mi taso li sona", en: "Only I know.", note: "'taso' after pronoun = only" },
          { tp: "ni li pona. taso mi wile e ante", en: "This is good. But I want something different.", note: "Contrasting" }
        ],
        pitfall: "Position matters! 'jan taso' = only person. 'taso, jan li...' = but, a person..."
      },
      {
        title: "a — emotion and emphasis",
        explanation: "<b>a</b> is an emotion/emphasis particle. It can stand alone or attach to words.",
        examples: [
          { tp: "pona a!", en: "Great! So good!", note: "'a' adds emphasis" },
          { tp: "ike a!", en: "So bad! Oh no!", note: "Negative emphasis" },
          { tp: "a a a!", en: "Hahaha! (laughter)", note: "Repeated for laughter" },
          { tp: "mi sona a", en: "I really know!", note: "Certainty" },
          { tp: "a!", en: "Ah! Oh! Wow!", note: "Pure exclamation" }
        ],
        pitfall: "'a' is flexible — it intensifies whatever it's near."
      },
      {
        title: "sin — new, another, additional",
        explanation: "<b>sin</b> means 'new', 'fresh', or 'another'. <b>tenpo sin la</b> = 'next time'.",
        examples: [
          { tp: "tenpo sin la mi kama", en: "Next time, I'll come.", note: "'tenpo sin' = new time" },
          { tp: "ijo sin li lon", en: "Something new is here.", note: "'ijo sin' = new thing" },
          { tp: "mi wile e moku sin", en: "I want more food.", note: "'moku sin' = more food" },
          { tp: "jan sin li kama", en: "A new person came.", note: "Newcomer" }
        ],
        pitfall: "'sin' can mean both 'new' and 'another/more'."
      },
      {
        title: "kin — also, too, still",
        explanation: "<b>kin</b> adds emphasis meaning 'also', 'too', or 'still'.",
        examples: [
          { tp: "mi kin!", en: "Me too!", note: "'kin' = also" },
          { tp: "ona li pona. sina li pona kin", en: "They're good. You're good too.", note: "Also good" },
          { tp: "ni li lon kin", en: "This still exists.", note: "Still" },
          { tp: "kin la mi toki e ni", en: "Also, I say this.", note: "'kin la' = moreover" }
        ],
        pitfall: "'kin' is an emphatic particle, not a main word."
      }
    ],
    
    keyInsight: "<b>la</b> separates CONTEXT from the main sentence. It works for time ('tenpo pini la' = before), conditions ('sina wile la' = if you want), topics ('ni la' = about this), and viewpoints ('mi la' = in my view). 'ken la' = maybe. 'taso' at start = but. 'a' adds emotion!"
  },

  vocab: [
    {
      word: "la",
      primaryMeaning: "(context separator)",
      roles: { particle: "separates context/condition from main clause" },
      notes: "Not a word with independent meaning. Marks everything before it as context.",
      compounds: [
        { tp: "tenpo ni la", en: "now" },
        { tp: "tenpo pini la", en: "before, in the past" },
        { tp: "tenpo kama la", en: "later, in the future" },
        { tp: "ken la", en: "maybe" },
        { tp: "mi la", en: "in my view" }
      ]
    },
    {
      word: "a",
      primaryMeaning: "(emotion/emphasis particle)",
      roles: { particle: "adds emphasis or emotion", interjection: "ah!, oh!" },
      notes: "Intensifies emotions. 'a a a' = laughter.",
      compounds: [
        { tp: "pona a!", en: "great!" },
        { tp: "ike a!", en: "oh no!" },
        { tp: "a a a!", en: "hahaha" }
      ]
    },
    {
      word: "taso",
      primaryMeaning: "but, only, however",
      roles: {
        conjunction: "but, however (at sentence start)",
        adjective: "only, alone"
      },
      notes: "At sentence start = 'but'. After a noun = 'only'.",
      compounds: [
        { tp: "mi taso", en: "only me" },
        { tp: "jan taso", en: "only a person" },
        { tp: "taso la", en: "however (emphatic)" }
      ]
    },
    {
      word: "ante",
      primaryMeaning: "different, other, change",
      roles: {
        adjective: "different, other",
        noun: "difference, change",
        verbTransitive: "to change"
      },
      notes: "'ante la' = otherwise.",
      compounds: [
        { tp: "ante la", en: "otherwise" },
        { tp: "ma ante", en: "foreign land" },
        { tp: "nasin ante", en: "different way" }
      ]
    },
    {
      word: "sin",
      primaryMeaning: "new, fresh, another",
      roles: {
        adjective: "new, fresh, another",
        noun: "newness",
        verbTransitive: "to renew"
      },
      notes: "'tenpo sin la' = next time.",
      compounds: [
        { tp: "ijo sin", en: "new thing" },
        { tp: "tenpo sin", en: "next time" },
        { tp: "jan sin", en: "newcomer" }
      ]
    },
    {
      word: "kin",
      primaryMeaning: "also, too, still",
      roles: { particle: "emphasis: also, too, still" },
      notes: "'mi kin!' = me too!",
      compounds: [
        { tp: "mi kin", en: "me too" },
        { tp: "pona kin", en: "also good, still good" },
        { tp: "kin la", en: "also, moreover" }
      ]
    },
    {
      word: "tenpo",
      primaryMeaning: "time, moment, period",
      roles: {
        noun: "time, moment, period, occasion",
        adjective: "temporal"
      },
      notes: "Essential for time expressions with 'la'.",
      compounds: [
        { tp: "tenpo ni", en: "now" },
        { tp: "tenpo pini", en: "past" },
        { tp: "tenpo kama", en: "future" },
        { tp: "tenpo suno", en: "day" },
        { tp: "tenpo pimeja", en: "night" },
        { tp: "tenpo mute", en: "often" }
      ]
    }
  ],

  sentences: {
    timeExpressions: [
      { tp: "tenpo ni la mi pali", en: "Now I'm working.", gloss: "time | this | la | I | work", note: "'tenpo ni' = now" },
      { tp: "tenpo pini la mi lon ma ante", en: "Before, I was somewhere else.", gloss: "time | past | la | I | at | land | different", note: "Past" },
      { tp: "tenpo kama la mi tawa tomo sina", en: "Later, I'll go to your house.", gloss: "time | coming | la | I | go | house | your", note: "Future" },
      { tp: "tenpo suno la mi pali. tenpo pimeja la mi lape", en: "By day I work. At night I sleep.", gloss: "...", note: "Day vs night" },
      { tp: "tenpo mute la mi pali e ni", en: "I often do this.", gloss: "time | many | la | I | do | (e) | this", note: "Frequency" }
    ],
    
    conditionals: [
      { tp: "sina wile la mi pana e ni", en: "If you want, I'll give this.", gloss: "you | want | la | I | give | (e) | this", note: "Conditional offer" },
      { tp: "mi jo e tenpo la mi kama", en: "If I have time, I'll come.", gloss: "I | have | (e) | time | la | I | come", note: "Time-dependent" },
      { tp: "ni li pona ala la mi pali e ante", en: "If this isn't good, I'll do something different.", gloss: "...", note: "Negative condition" },
      { tp: "sina pali la mi pali kin", en: "If you work, I'll work too.", gloss: "you | work | la | I | work | also", note: "'kin' = also" }
    ],
    
    topicAndPerspective: [
      { tp: "jan ni la mi sona ala", en: "About this person, I don't know.", gloss: "person | this | la | I | know | not", note: "Topic" },
      { tp: "mi la ni li pona", en: "In my view, this is good.", gloss: "I | la | this | (li) | good", note: "Perspective" },
      { tp: "ona la sina li ike", en: "From their view, you're bad.", gloss: "they | la | you | (li) | bad", note: "Their opinion" },
      { tp: "toki pona la mi pilin pona", en: "As for Toki Pona, I feel good.", gloss: "...", note: "Topic" }
    ],
    
    kenLa: [
      { tp: "ken la ona li kama", en: "Maybe they'll come.", gloss: "possible | la | they | (li) | come", note: "'ken la' = maybe" },
      { tp: "ken la ni li pona", en: "Maybe this is good.", gloss: "possible | la | this | (li) | good", note: "Uncertainty" },
      { tp: "ken la ala", en: "Maybe not.", gloss: "possible | la | not", note: "Negated" }
    ],
    
    tasoUsage: [
      { tp: "mi wile. taso mi ken ala", en: "I want to. But I can't.", gloss: "I | want | but | I | can | not", note: "'taso' = but" },
      { tp: "jan taso li lon", en: "Only one person is here.", gloss: "person | only | (li) | exist", note: "'taso' = only" },
      { tp: "mi taso li sona", en: "Only I know.", gloss: "I | only | (li) | know", note: "Only me" }
    ],
    
    aAndEmphasis: [
      { tp: "pona a!", en: "Great!", gloss: "good | (emphasis)", note: "Emphatic" },
      { tp: "a a a! ni li musi", en: "Hahaha! This is fun.", gloss: "(laughter) | ...", note: "Laughter" },
      { tp: "mi sona a!", en: "I definitely know!", gloss: "I | know | (emphasis)", note: "Certainty" }
    ],
    
    sinAndKin: [
      { tp: "tenpo sin la mi kama", en: "Next time, I'll come.", gloss: "time | new | la | I | come", note: "'tenpo sin'" },
      { tp: "mi kin!", en: "Me too!", gloss: "I | also", note: "'kin' = also" },
      { tp: "jan sin li kama", en: "A new person came.", gloss: "person | new | (li) | come", note: "Newcomer" },
      { tp: "ona li pona. sina li pona kin", en: "They're good. You're good too.", gloss: "...", note: "Also" }
    ]
  },

  practice: [
    {
      type: "laUsage",
      instruction: "What does 'la' do in this sentence?",
      questions: [
        { tp: "tenpo ni la mi moku", options: ["Time context", "Conditional", "Topic"], correct: 0, explanation: "'tenpo ni' sets WHEN." },
        { tp: "sina wile la mi pana", options: ["Time", "Conditional (if)", "Topic"], correct: 1, explanation: "'sina wile' = if you want." },
        { tp: "jan ni la mi sona ala", options: ["Time", "Conditional", "Topic (about)"], correct: 2, explanation: "'jan ni la' = about this person." },
        { tp: "mi la ni li pona", options: ["Time", "Conditional", "Perspective"], correct: 2, explanation: "'mi la' = in my view." },
        { tp: "ken la ona li kama", options: ["Certainty", "Maybe", "Never"], correct: 1, explanation: "'ken la' = maybe." }
      ]
    },
    
    {
      type: "translateLa",
      instruction: "Translate using 'la':",
      questions: [
        { en: "Now I'm sleeping.", answer: "tenpo ni la mi lape", hint: "'tenpo ni' = now" },
        { en: "If you come, I'm happy.", answer: "sina kama la mi pilin pona", hint: "Condition + result" },
        { en: "Maybe it's good.", answer: "ken la ni li pona", hint: "'ken la' = maybe" },
        { en: "In my view, this is bad.", answer: "mi la ni li ike", hint: "'mi la'" },
        { en: "In the future, I'll work.", answer: "tenpo kama la mi pali", hint: "'tenpo kama'" }
      ]
    },
    
    {
      type: "tasoPosition",
      instruction: "What does 'taso' mean here?",
      questions: [
        { tp: "mi wile. taso mi ken ala", options: ["only", "but"], correct: 1, explanation: "'taso' at start = but." },
        { tp: "jan taso li lon", options: ["only person", "but person"], correct: 0, explanation: "'taso' after noun = only." },
        { tp: "mi taso li sona", options: ["I but know", "Only I know"], correct: 1, explanation: "'mi taso' = only me." }
      ]
    },
    
    {
      type: "timePhrases",
      instruction: "Match the time phrase:",
      questions: [
        { tp: "tenpo ni la", options: ["now", "before", "later"], correct: 0 },
        { tp: "tenpo pini la", options: ["now", "before", "later"], correct: 1 },
        { tp: "tenpo kama la", options: ["now", "before", "later"], correct: 2 },
        { tp: "tenpo suno la", options: ["at night", "during the day"], correct: 1 },
        { tp: "tenpo pimeja la", options: ["at night", "during the day"], correct: 0 }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the blank:",
      questions: [
        { partial: "_____ la mi pilin pona", context: "Now I feel good.", answer: "tenpo ni" },
        { partial: "sina pali _____ mi pali kin", context: "If you work, I'll work too.", answer: "la" },
        { partial: "_____ la ona li kama", context: "Maybe they'll come.", answer: "ken" },
        { partial: "mi wile. _____ mi ken ala", context: "I want to. But I can't.", answer: "taso" },
        { partial: "pona _____!", context: "So good! Great!", answer: "a" }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Build a sentence using 'la':",
      questions: [
        { words: ["tenpo", "suno", "la", "mi", "pali"], validAnswers: ["tenpo suno la mi pali"], translations: ["During the day, I work."] },
        { words: ["sina", "wile", "la", "mi", "pana"], validAnswers: ["sina wile la mi pana"], translations: ["If you want, I'll give."] },
        { words: ["ken", "la", "ni", "li", "pona"], validAnswers: ["ken la ni li pona"], translations: ["Maybe this is good."] }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "True or false?",
      questions: [
        { statement: "'la' means 'if' in toki pona.", answer: false, explanation: "'la' is a context separator with no fixed meaning." },
        { statement: "'ken la' means 'maybe'.", answer: true, explanation: "Correct!" },
        { statement: "'taso' always means 'but'.", answer: false, explanation: "Position matters! It can also mean 'only'." },
        { statement: "'a' is used for emphasis.", answer: true, explanation: "Yes!" }
      ]
    }
  ],

  story: {
    title: "tenpo kama la — In the Future",
    intro: "A story about plans and possibilities. Watch for different uses of 'la'!",
    paragraphs: [
      { tp: "tenpo ni la mi lon tomo mi. mi pilin pona.", en: "Now I'm at my house. I feel good.", note: "'tenpo ni la'" },
      { tp: "taso tenpo pini la mi lon ma ante. mi pilin ike.", en: "But before, I was elsewhere. I felt bad.", note: "'taso' + 'tenpo pini la'" },
      { tp: "tenpo kama la mi wile tawa ma sin.", en: "In the future, I want to go to a new place.", note: "'tenpo kama la' + 'ma sin'" },
      { tp: "mi la ni li pona. sina la seme li pona?", en: "In my view, this is good. In your view, what's good?", note: "Two perspectives" },
      { tp: "ken la mi tawa. ken la mi awen.", en: "Maybe I'll go. Maybe I'll stay.", note: "'ken la' twice" },
      { tp: "sina wile kama la o toki tawa mi!", en: "If you want to come, tell me!", note: "Conditional + command" },
      { tp: "sina kama la mi pilin pona a!", en: "If you come, I'll be so happy!", note: "Conditional + 'a'" },
      { tp: "jan pona mi la ona li pona kin.", en: "My friend — they're good too.", note: "Topic + 'kin'" },
      { tp: "a a a! pona a! tenpo sin la mi mute li tawa!", en: "Hahaha! Great! Next time, we'll all go!", note: "Laughter, emphasis, future" }
    ],
    comprehension: [
      { question: "Where is the narrator now?", answer: "At their house", evidence: "tenpo ni la mi lon tomo mi" },
      { question: "How did they feel before?", answer: "Bad", evidence: "mi pilin ike" },
      { question: "What are they uncertain about?", answer: "Whether to go or stay", evidence: "ken la mi tawa. ken la mi awen" }
    ],
    challenge: "Write about YOUR plans using 'la'!"
  },

  compoundsPreview: {
    title: "Build Your Vocabulary with la",
    intro: "Common phrases using 'la':",
    items: [
      { tp: "tenpo ni la", en: "now", literal: "time-this | la", lesson: "Present" },
      { tp: "tenpo pini la", en: "before", literal: "time-finished | la", lesson: "Past" },
      { tp: "tenpo kama la", en: "later", literal: "time-coming | la", lesson: "Future" },
      { tp: "ken la", en: "maybe", literal: "possible | la", lesson: "Uncertainty" },
      { tp: "mi la", en: "in my view", literal: "I | la", lesson: "Perspective" },
      { tp: "ante la", en: "otherwise", literal: "different | la", lesson: "Alternative" },
      { tp: "pona a!", en: "great!", literal: "good | (emphasis)", lesson: "Emphasis" }
    ],
    teaser: "Next lesson: seme — the question word! Learn to ask who, what, where, why, and how."
  },

  quickReference: {
    patterns: [
      { pattern: "[TIME] la [SENTENCE]", example: "tenpo ni la mi pali", meaning: "Now I work." },
      { pattern: "[CONDITION] la [RESULT]", example: "sina wile la mi pana", meaning: "If you want, I give." },
      { pattern: "[TOPIC] la [SENTENCE]", example: "jan ni la mi sona ala", meaning: "About this person, I don't know." },
      { pattern: "[PERSPECTIVE] la [SENTENCE]", example: "mi la ni li pona", meaning: "In my view, this is good." },
      { pattern: "ken la [SENTENCE]", example: "ken la ona li kama", meaning: "Maybe they'll come." },
      { pattern: "taso [SENTENCE]", example: "taso mi ken ala", meaning: "But I can't." },
      { pattern: "X taso", example: "jan taso li lon", meaning: "Only a person is here." },
      { pattern: "X a!", example: "pona a!", meaning: "So good! Great!" }
    ],
    remember: [
      "Context comes BEFORE 'la', main sentence AFTER",
      "'tenpo X la' = time context (when)",
      "'[condition] la' = if... then...",
      "'ken la' = maybe, possibly",
      "'mi la' = in my view, from my perspective",
      "'taso' at start = but. After noun = only.",
      "'a' adds emotion and emphasis",
      "'sin' = new, another. 'kin' = also, too"
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson10;
}
