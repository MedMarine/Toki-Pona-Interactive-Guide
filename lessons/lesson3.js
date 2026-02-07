/**
 * Lesson 3: li — the verb marker
 * Unlocking sentences about anyone and anything
 */

const lesson3 = {
  id: 3,
  title: "li — the verb marker",
  desc: "Unlocking sentences about anyone and anything",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "<b>li</b> separates the subject from the predicate when the subject is NOT <b>mi</b> or <b>sina</b> alone. This is the key to talking about the world!",
    
    concepts: [
      {
        title: "Why 'li' exists",
        explanation: "Without <b>li</b>, toki pona would be incredibly ambiguous. The particle creates a clear boundary between subject and predicate.",
        examples: [
          { tp: "jan moku", en: "eating person / food-person", note: "Compound word — no verb!" },
          { tp: "jan li moku", en: "The person eats.", note: "'li' creates a sentence with a verb" },
          { tp: "ona pona", en: "good they?? (unclear)", note: "Sounds like a compound" },
          { tp: "ona li pona", en: "They are good.", note: "Clear sentence structure" }
        ],
        pitfall: "Never forget 'li' with subjects other than 'mi' or 'sina' alone!"
      },
      {
        title: "The 'mi/sina' exception",
        explanation: "<b>mi</b> and <b>sina</b> alone NEVER use <b>li</b>. But if they're modified or combined, <b>li</b> returns!",
        examples: [
          { tp: "mi pona", en: "I am good.", note: "No 'li' — 'mi' alone" },
          { tp: "sina pona", en: "You are good.", note: "No 'li' — 'sina' alone" },
          { tp: "mi mute li pona", en: "We are good.", note: "'li' needed! 'mi mute' ≠ 'mi' alone" },
          { tp: "sina en jan li pona", en: "You and the person are good.", note: "'li' needed! Compound subject" }
        ],
        pitfall: "'mi mute' and 'sina mute' ARE different from 'mi' and 'sina' — they need 'li'!"
      },
      {
        title: "ona — the universal pronoun",
        explanation: "<b>ona</b> covers he, she, it, they (singular and plural). Toki pona doesn't distinguish gender or number in pronouns.",
        examples: [
          { tp: "ona li moku", en: "He/She/It/They eat(s).", note: "All meanings possible!" },
          { tp: "ona li jan pona", en: "He/She/They is/are a friend.", note: "Context determines who" },
          { tp: "ona mute li pona", en: "They (explicitly plural) are good.", note: "'mute' clarifies plurality" }
        ],
        pitfall: "Don't try to specify gender — toki pona considers it unnecessary in most contexts."
      },
      {
        title: "ni — this/that pointer",
        explanation: "<b>ni</b> points to something — 'this' or 'that'. It doesn't distinguish distance like English does.",
        examples: [
          { tp: "ni li pona", en: "This is good. / That is good.", note: "Context determines which" },
          { tp: "ni li ijo suli", en: "This is a big thing.", note: "'ni' as subject" },
          { tp: "mi lukin e ni", en: "I see this/that.", note: "'ni' as object (preview of 'e')" }
        ],
        pitfall: "'ni' can also introduce clauses: 'mi sona e ni: ona li pona' = 'I know that: they are good'"
      },
      {
        title: "Multiple predicates with 'li'",
        explanation: "To say multiple things about the same subject, repeat <b>li</b> for each predicate.",
        examples: [
          { tp: "ona li pona li suli", en: "They are good and (they are) big.", note: "Two 'li' for two predicates" },
          { tp: "jan li moku li toki", en: "The person eats and talks.", note: "Two actions, same subject" },
          { tp: "ni li lili li pona", en: "This is small and good.", note: "Two adjectives" }
        ],
        pitfall: "You can chain as many 'li' phrases as you want, but keep it readable!"
      }
    ],
    
    keyInsight: "'li' is the verb marker that makes toki pona work. Without it, everything would blur into compound words. Master 'li' and you can talk about anything!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "li",
      primaryMeaning: "(separates subject from predicate)",
      roles: {
        particle: "Marks the boundary between subject and predicate"
      },
      notes: "Not used after 'mi' or 'sina' alone. IS used after modified subjects (mi mute, sina en ona, etc.).",
      examples: {
        basic: "jan li moku — The person eats",
        multiple: "ona li pona li suli — They are good and big",
        withMiMute: "mi mute li toki — We speak"
      }
    },
    {
      word: "ona",
      primaryMeaning: "he, she, it, they",
      roles: {
        personalPronoun: "he, she, it, they (as subject)",
        possessivePronoun: "his, her, its, their (after a noun)",
        reflexivePronoun: "himself, herself, itself, themselves"
      },
      notes: "Gender-neutral and number-neutral. Use 'ona mute' to emphasize plurality. Always needs 'li' when used as subject.",
      compounds: [
        { tp: "tomo ona", en: "his/her/their house" },
        { tp: "moku ona", en: "his/her/their food" },
        { tp: "ona mute", en: "they (emphasized plural)" },
        { tp: "jan pona ona", en: "his/her/their friend" }
      ]
    },
    {
      word: "ni",
      primaryMeaning: "this, that",
      roles: {
        demonstrative: "this, that (pointing to something)",
        adjective: "this, that (modifying a noun)",
        clauseMarker: "that (introducing a clause)"
      },
      notes: "Doesn't distinguish 'this' (near) from 'that' (far). Can introduce explanatory clauses with a colon.",
      compounds: [
        { tp: "jan ni", en: "this person, that person" },
        { tp: "ijo ni", en: "this thing, that thing" },
        { tp: "tomo ni", en: "this building, that building" },
        { tp: "tenpo ni", en: "now, this time" }
      ]
    },
    {
      word: "ijo",
      primaryMeaning: "thing, something, anything",
      roles: {
        noun: "thing, object, matter, something",
        adjective: "thing-like, concrete (rare)"
      },
      notes: "The most generic noun. Use when you don't know or don't want to specify what something is. 'ijo' can refer to physical objects or abstract concepts.",
      compounds: [
        { tp: "ijo ni", en: "this thing" },
        { tp: "ijo suli", en: "big thing, important matter" },
        { tp: "ijo pona", en: "good thing" },
        { tp: "ijo moku", en: "food, edible thing" }
      ]
    },
    {
      word: "jan",
      primaryMeaning: "person, people, human",
      roles: {
        noun: "person, people, human being, somebody",
        adjective: "human, personal, somebody's"
      },
      notes: "One of the most common words. Forms countless compounds: jan pona (friend), jan ike (enemy), jan suli (adult), jan lili (child).",
      compounds: [
        { tp: "jan pona", en: "friend, good person" },
        { tp: "jan ike", en: "enemy, bad person" },
        { tp: "jan suli", en: "adult, important person" },
        { tp: "jan lili", en: "child, small person" },
        { tp: "jan sona", en: "expert, wise person" },
        { tp: "jan mute", en: "people, crowd" }
      ]
    },
    {
      word: "mute",
      primaryMeaning: "many, much, several, very",
      roles: {
        adjective: "many, much, several, a lot, numerous, more",
        adverb: "very, much, greatly",
        noun: "amount, quantity, multitude",
        verbTransitive: "to multiply, to increase"
      },
      notes: "Essential for pluralization and intensification. 'jan mute' = many people. 'pona mute' = very good. 'mute' also plays a key role in returning 'li' to sentences with 'mi mute' or 'sina mute'.",
      compounds: [
        { tp: "jan mute", en: "many people, crowd" },
        { tp: "ijo mute", en: "many things" },
        { tp: "pona mute", en: "very good, excellent" },
        { tp: "suli mute", en: "very big, huge" },
        { tp: "mi mute", en: "we (explicit plural)" },
        { tp: "sina mute", en: "you all (explicit plural)" },
        { tp: "ona mute", en: "they (explicit plural)" }
      ],
      examples: {
        asAdjective: "jan mute li kama — many people come",
        asAdverb: "ni li pona mute — this is very good",
        asNoun: "mute li pona — many/quantity is good",
        withLiReturn: "mi mute li pali — we work (note: 'li' returns!)"
      }
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basic: [
      { tp: "ona li pona", en: "He/She/They is/are good.", gloss: "they | (li) | good", note: "Basic 'li' sentence" },
      { tp: "jan li moku", en: "The person eats.", gloss: "person | (li) | eat", note: "'jan' needs 'li'" },
      { tp: "ni li suli", en: "This is big.", gloss: "this | (li) | big", note: "'ni' needs 'li'" },
      { tp: "ijo li lili", en: "The thing is small.", gloss: "thing | (li) | small", note: "'ijo' needs 'li'" },
      { tp: "jan li wawa", en: "People are strong.", gloss: "people | (li) | strong", note: "Generic 'jan' = people" }
    ],
    
    withModifiedSubjects: [
      { tp: "jan pona li moku", en: "The friend eats.", gloss: "friend | (li) | eat", note: "Modified subject still uses 'li'" },
      { tp: "ijo suli li pona", en: "The big thing is good.", gloss: "thing+big | (li) | good", note: "Adjective + subject + 'li'" },
      { tp: "jan lili li lape", en: "The child sleeps.", gloss: "child | (li) | sleep", note: "'jan lili' = child" },
      { tp: "tomo suli li pona", en: "The big house is good.", gloss: "house+big | (li) | good", note: "Buildings can be subjects too" },
      { tp: "ona mute li toki", en: "They (plural) speak.", gloss: "they+many | (li) | speak", note: "'mute' emphasizes plurality" },
      { tp: "jan mute li moku", en: "Many people eat.", gloss: "person+many | (li) | eat", note: "'mute' for quantity" },
      { tp: "mi mute li pona", en: "We are good.", gloss: "I+many | (li) | good", note: "'li' returns with 'mi mute'!" }
    ],
    
    muteAsIntensifier: [
      { tp: "ni li pona mute", en: "This is very good.", gloss: "this | (li) | good + very", note: "'mute' as adverb = very" },
      { tp: "tomo li suli mute", en: "The house is very big.", gloss: "house | (li) | big + very", note: "Intensifying adjectives" },
      { tp: "ona li sona mute", en: "They know a lot. / They are very knowledgeable.", gloss: "they | (li) | know + much", note: "Can intensify verbs or adjectives" },
      { tp: "mi wile mute", en: "I want (it) very much.", gloss: "I | want + much", note: "Strong desire" }
    ],
    
    muteLiPattern: [
      { tp: "mi mute li tawa", en: "We go.", gloss: "we | (li) | go", note: "'mi mute' is NOT 'mi' alone!" },
      { tp: "sina mute li pali", en: "You all work.", gloss: "you-all | (li) | work", note: "'sina mute' needs 'li'" },
      { tp: "ona mute li pona li wawa", en: "They are good and strong.", gloss: "they | (li) | good | (li) | strong", note: "Multiple predicates" }
    ],
    
    multiplePredicates: [
      { tp: "ona li pona li suli", en: "They are good and big.", gloss: "they | (li) | good | (li) | big", note: "Two predicates, two 'li'" },
      { tp: "jan li moku li toki", en: "The person eats and talks.", gloss: "person | (li) | eat | (li) | talk", note: "Two verbs" },
      { tp: "ni li lili li pona li wawa", en: "This is small, good, and strong.", gloss: "this | (li) | small | (li) | good | (li) | strong", note: "Three predicates" },
      { tp: "tomo li suli li pona", en: "The house is big and good.", gloss: "house | (li) | big | (li) | good", note: "Describing a building" }
    ],
    
    withPossession: [
      { tp: "tomo ona li suli", en: "His/Her/Their house is big.", gloss: "house+their | (li) | big", note: "Possession + 'li'" },
      { tp: "jan pona mi li pona", en: "My friend is good.", gloss: "friend+my | (li) | good", note: "'mi' as possessive, still need 'li'" },
      { tp: "moku sina li pona", en: "Your food is good.", gloss: "food+your | (li) | good", note: "Possession doesn't remove 'li'" },
      { tp: "ijo ona li lili", en: "Their thing is small.", gloss: "thing+their | (li) | small", note: "Abstract possession" }
    ],
    
    contrasts: [
      { tp: "mi pona. ona li pona.", en: "I am good. They are good.", gloss: "Compare: no 'li' vs 'li'", note: "'mi' vs 'ona'" },
      { tp: "sina wawa. jan li wawa.", en: "You are strong. The person is strong.", gloss: "Compare: no 'li' vs 'li'", note: "'sina' vs 'jan'" },
      { tp: "jan moku", en: "eating person / food-person", gloss: "person + eating", note: "Compound — NO verb!" },
      { tp: "jan li moku", en: "The person eats.", gloss: "person | (li) | eat", note: "Sentence — HAS verb!" }
    ],
    
    niExamples: [
      { tp: "ni li pona", en: "This is good. / That is good.", gloss: "this | (li) | good", note: "'ni' as subject" },
      { tp: "jan ni li suli", en: "This person is big.", gloss: "person+this | (li) | big", note: "'ni' as modifier" },
      { tp: "ijo ni li moku", en: "This thing is food.", gloss: "thing+this | (li) | food", note: "Identifying something" },
      { tp: "ni li ijo suli", en: "This is a big deal.", gloss: "this | (li) | thing+big", note: "Idiomatic use" }
    ],
    
    ambiguous: [
      { tp: "jan moku", meanings: ["eating person", "food-person (cannibal?)", "cook"], likely: "eating person", note: "No 'li' = compound, not sentence" },
      { tp: "ona li moku", meanings: ["They eat.", "They are food."], likely: "They eat.", note: "With 'li' = sentence" },
      { tp: "jan li jan pona", meanings: ["The person is a good person.", "The person is a friend."], likely: "Both valid!", note: "'jan pona' = friend" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "Does this sentence need 'li'? Why or why not?",
      questions: [
        {
          tp: "mi moku",
          en: "I eat.",
          target: "li",
          options: ["Needs 'li' — subject is not mi/sina", "No 'li' needed — subject is 'mi' alone", "No 'li' needed — this is a compound", "Needs 'li' — modified subject"],
          correct: 1,
          explanation: "'mi' alone never takes 'li'. The sentence is correct as 'mi moku'."
        },
        {
          tp: "jan ___ pona",
          en: "The person is good.",
          target: "li",
          options: ["Needs 'li' — subject is not mi/sina", "No 'li' needed — subject is 'jan' alone", "No 'li' needed — this is a compound", "Either works"],
          correct: 0,
          explanation: "'jan' is not 'mi' or 'sina', so it needs 'li': 'jan li pona'."
        },
        {
          tp: "mi mute ___ toki",
          en: "We speak.",
          target: "li",
          options: ["Needs 'li' — 'mi mute' is modified", "No 'li' needed — starts with 'mi'", "No 'li' needed — this is a command", "Either works"],
          correct: 0,
          explanation: "'mi mute' is not 'mi' ALONE — it's modified, so it needs 'li': 'mi mute li toki'."
        },
        {
          tp: "ona ___ suli",
          en: "They are big.",
          target: "li",
          options: ["Needs 'li' — 'ona' is not mi/sina", "No 'li' needed — 'ona' is a pronoun", "No 'li' needed — this is a compound", "Either works"],
          correct: 0,
          explanation: "'ona' needs 'li' because it's not 'mi' or 'sina': 'ona li suli'."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence. Pay attention to 'li':",
      questions: [
        { tp: "jan li moku", expectedType: "with li", hint: "'jan' needs 'li'" },
        { tp: "jan moku", expectedType: "compound", hint: "No 'li' = compound" },
        { tp: "ona li pona li wawa", expectedType: "multiple predicates", hint: "Two things about 'ona'" },
        { tp: "ni li ijo suli", expectedType: "with ni", hint: "'ni' points to something" }
      ],
      answers: ["The person eats.", "eating person / food-person", "They are good and strong.", "This is a big thing / big deal."]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["jan", "li", "pona", "suli", "li"],
          validAnswers: ["jan li pona li suli", "jan li suli li pona"],
          translations: ["The person is good and big.", "The person is big and good."],
          hint: "Use 'li' twice for two predicates"
        },
        {
          words: ["ona", "li", "jan", "pona"],
          validAnswers: ["ona li jan pona"],
          translations: ["They are a good person / friend."],
          hint: "What does 'jan pona' mean?"
        }
      ]
    },
    
    {
      type: "compoundVsSentence",
      instruction: "Is this a compound (no verb) or a sentence (has verb)?",
      questions: [
        { tp: "jan pona", answer: "compound", meaning: "friend / good person", explanation: "No 'li' = no verb = compound" },
        { tp: "jan li pona", answer: "sentence", meaning: "The person is good.", explanation: "'li' creates a verb = sentence" },
        { tp: "ijo suli", answer: "compound", meaning: "big thing", explanation: "No 'li' = modifier relationship" },
        { tp: "ijo li suli", answer: "sentence", meaning: "The thing is big.", explanation: "'li' makes 'suli' a predicate" },
        { tp: "tomo moku", answer: "compound", meaning: "restaurant / eating-building", explanation: "'moku' modifies 'tomo'" },
        { tp: "tomo li moku", answer: "sentence", meaning: "The building eats (??)", explanation: "Grammatical but strange!" }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Add 'li' where needed (or write 'X' if not needed):",
      questions: [
        { tp: "mi _____ moku", en: "I eat.", answer: "X", hint: "'mi' alone never takes 'li'" },
        { tp: "ona _____ moku", en: "They eat.", answer: "li", hint: "'ona' is not 'mi' or 'sina'" },
        { tp: "jan pona _____ toki", en: "The friend speaks.", answer: "li", hint: "'jan pona' is not 'mi' or 'sina'" },
        { tp: "mi mute _____ pona", en: "We are good.", answer: "li", hint: "'mi mute' ≠ 'mi' alone" },
        { tp: "sina _____ wawa", en: "You are strong.", answer: "X", hint: "'sina' alone never takes 'li'" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'ona' needs 'li' because it's not 'mi' or 'sina'.",
          answer: true,
          explanation: "Correct! Only 'mi' and 'sina' ALONE skip 'li'."
        },
        {
          statement: "'jan pona' means 'The person is good.'",
          answer: false,
          explanation: "No! 'jan pona' (no 'li') is a compound meaning 'friend'. 'jan LI pona' means 'The person is good.'"
        },
        {
          statement: "'mi mute li pona' is correct because 'mi mute' is a modified subject.",
          answer: true,
          explanation: "Exactly! 'mi mute' isn't 'mi' alone, so it needs 'li'."
        },
        {
          statement: "'ni' can mean both 'this' and 'that'.",
          answer: true,
          explanation: "Correct! Toki pona doesn't distinguish distance in demonstratives."
        },
        {
          statement: "You can use multiple 'li' to say multiple things about one subject.",
          answer: true,
          explanation: "Yes! 'ona li pona li wawa' = 'They are good and strong.'"
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "jan ni — This Person",
    intro: "A story about observing someone. Notice every use of 'li'!",
    paragraphs: [
      { tp: "jan ni li suli.", en: "This person is big.", note: "'jan ni' needs 'li'" },
      { tp: "ona li wawa.", en: "They are strong.", note: "'ona' needs 'li'" },
      { tp: "ona li moku li toki.", en: "They eat and talk.", note: "Two actions, two 'li'" },
      { tp: "moku ona li pona.", en: "Their food is good.", note: "Possession still needs 'li'" },
      { tp: "mi lukin. ona li lukin.", en: "I look. They look.", note: "Compare: no 'li' vs 'li'" },
      { tp: "ni li pona!", en: "This is good!", note: "'ni' as subject" },
      { tp: "jan ni li jan pona mi.", en: "This person is my friend.", note: "Full sentence with compound predicate" }
    ],
    comprehension: [
      { question: "How many times does 'li' appear in this story?", answer: "7 times", evidence: "Count each 'li' in the sentences" },
      { question: "Why doesn't 'mi lukin' have 'li'?", answer: "Because 'mi' alone never takes 'li'.", evidence: "Compare to 'ona li lukin' right after" },
      { question: "What does 'jan pona mi' mean at the end?", answer: "My friend", evidence: "jan pona (friend) + mi (my)" }
    ],
    challenge: "Rewrite sentence 3 with THREE actions instead of two. (Hint: add another 'li'!)"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Now you can describe ANYONE! Here are essential 'jan' compounds:",
    items: [
      { tp: "jan pona", en: "friend, good person", literal: "person-good", lesson: "The most important compound!" },
      { tp: "jan ike", en: "enemy, bad person", literal: "person-bad", lesson: "'ike' = bad (opposite of 'pona')" },
      { tp: "jan suli", en: "adult, important person", literal: "person-big", lesson: "From Lesson 2" },
      { tp: "jan lili", en: "child, young person", literal: "person-small", lesson: "From Lesson 2" },
      { tp: "jan ni", en: "this person", literal: "person-this", lesson: "'ni' as modifier" },
      { tp: "jan mute", en: "people, crowd", literal: "person-many", lesson: "'mute' = many" }
    ],
    teaser: "Next lesson: 'e' lets you add OBJECTS to your sentences. 'mi moku e kili' = I eat fruit!"
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "SUBJECT + li + PREDICATE", example: "jan li moku", meaning: "The person eats." },
      { pattern: "SUBJECT + li + PRED1 + li + PRED2", example: "ona li pona li suli", meaning: "They are good and big." },
      { pattern: "mi/sina + PREDICATE", example: "mi moku", meaning: "I eat. (no 'li')" },
      { pattern: "mi/sina MUTE + li + PRED", example: "mi mute li moku", meaning: "We eat. ('li' returns!)" },
      { pattern: "ni li + PREDICATE", example: "ni li pona", meaning: "This is good." }
    ],
    remember: [
      "'li' = verb marker for subjects other than 'mi'/'sina' alone",
      "No 'li': 'jan moku' = compound (eating person)",
      "With 'li': 'jan li moku' = sentence (person eats)",
      "Multiple predicates? Multiple 'li'!",
      "'mute' = many/very — intensifies or pluralizes",
      "'mi/sina mute' brings back 'li': 'mi mute li pali'"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson3;
}
