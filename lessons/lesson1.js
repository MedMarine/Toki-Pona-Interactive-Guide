/**
 * Lesson 1: mi — I, me
 * Learn to talk about yourself and discover how words can play many roles
 */

const lesson1 = {
  id: 1,
  title: "mi — I, me",
  desc: "Learn to talk about yourself and discover how words can play many roles",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "With <b>mi</b> or <b>sina</b> as subject, no separator is needed before the predicate. Toki Pona has no verb 'to be'—words directly describe or act.",
    
    concepts: [
      {
        title: "No verb 'to be'",
        explanation: "Toki Pona doesn't have 'is/am/are'. After <b>mi</b> or <b>sina</b>, you can use a verb, noun, OR adjective directly as the predicate.",
        examples: [
          { tp: "mi moku", en: "I eat", note: "moku as VERB" },
          { tp: "mi moku", en: "I am food", note: "moku as NOUN (same sentence!)" },
          { tp: "mi pona", en: "I am good", note: "pona as ADJECTIVE" },
          { tp: "mi pona", en: "I fix/improve", note: "pona as VERB (same sentence!)" }
        ],
        pitfall: "Context determines meaning! 'mi moku' usually means 'I eat' because saying 'I am food' is rare."
      },
      {
        title: "One word, many roles",
        explanation: "Most Toki Pona words can be nouns, adjectives, adverbs, AND verbs. The position in the sentence determines the role.",
        examples: [
          { tp: "pona", en: "goodness (noun)", note: "Standing alone or as subject" },
          { tp: "jan pona", en: "good person (adj)", note: "After a noun = adjective" },
          { tp: "mi moku pona", en: "I eat well (adv)", note: "After a verb = adverb" },
          { tp: "mi pona e ijo", en: "I fix the thing (verb)", note: "With 'e' = transitive verb" }
        ],
        pitfall: "Don't memorize words as 'nouns' or 'verbs'—learn ALL their roles!"
      },
      {
        title: "No tenses, no conjugation",
        explanation: "Verbs never change form. <b>mi moku</b> can mean 'I eat', 'I ate', 'I will eat', or 'I am eating'—context decides.",
        examples: [
          { tp: "mi moku", en: "I eat / I ate / I will eat / I'm eating", note: "All the same!" },
          { tp: "mi lape", en: "I sleep / I slept / I will sleep", note: "No changes needed" }
        ],
        pitfall: "Later lessons teach time words (tenpo) to clarify when needed."
      }
    ],
    
    keyInsight: "In Toki Pona, a word's role comes from its POSITION, not its form. Master this and you've mastered half the language!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "mi",
      primaryMeaning: "I, me, we, us",
      roles: {
        personalPronoun: "I, we (as subject)",
        possessivePronoun: "my, our (after a noun)",
        reflexivePronoun: "myself, ourselves (after 'e')"
      },
      notes: "Covers both singular 'I' and plural 'we'. Context determines which. Can't be modified directly.",
      examples: {
        asSubject: "mi moku — I eat",
        asPossessive: "tomo mi — my house",
        asReflexive: "mi lukin e mi — I look at myself"
      }
    },
    {
      word: "pona",
      primaryMeaning: "good, simple, positive",
      roles: {
        adjective: "good, simple, positive, nice, correct, right",
        adverb: "well, simply, positively, nicely, correctly",
        noun: "goodness, simplicity, positivity",
        verbTransitive: "to improve, to fix, to repair, to make good",
        interjection: "great! good! thanks! OK! cool! yay!"
      },
      notes: "One of the most important and versatile words. The language itself is named 'toki pona' (good/simple language).",
      compounds: [
        { tp: "jan pona", en: "friend (good person)" },
        { tp: "toki pona", en: "Toki Pona / good speech" },
        { tp: "pona lukin", en: "pretty, good-looking" },
        { tp: "pona mute", en: "very good" }
      ]
    },
    {
      word: "moku",
      primaryMeaning: "eat, food",
      roles: {
        adjective: "eating, food-related, edible",
        adverb: "eatingly (rare)",
        noun: "food, meal",
        verbTransitive: "to eat, to drink, to swallow, to ingest, to consume"
      },
      notes: "Covers both eating AND drinking—Toki Pona doesn't distinguish. 'moku e telo' = drink water.",
      compounds: [
        { tp: "ilo moku", en: "eating utensil (fork, spoon, chopsticks)" },
        { tp: "tomo moku", en: "restaurant, dining room" },
        { tp: "tenpo moku", en: "mealtime" }
      ]
    },
    {
      word: "toki",
      primaryMeaning: "speak, language",
      roles: {
        adjective: "speaking, eloquent, linguistic, verbal",
        adverb: "verbally, in words",
        noun: "language, speech, words, conversation",
        verbIntransitive: "to talk, to chat, to communicate",
        verbTransitive: "to speak, to say, to pronounce",
        interjection: "hello! hi!"
      },
      notes: "As an interjection, 'toki!' is the standard greeting. The language name 'toki pona' literally means 'good/simple language'.",
      compounds: [
        { tp: "toki pona", en: "Toki Pona, simple speech" },
        { tp: "toki ike", en: "insult, bad speech" },
        { tp: "toki musi", en: "joke, funny speech" }
      ]
    },
    {
      word: "lape",
      primaryMeaning: "sleep, rest",
      roles: {
        adjective: "sleeping, restful, dormant, at rest",
        adverb: "sleepily, restfully",
        noun: "sleep, rest, relaxation",
        verbIntransitive: "to sleep, to rest",
        verbTransitive: "to knock out, to put to sleep"
      },
      notes: "As a transitive verb (with 'e'), it means to CAUSE sleep—'mi lape e ona' = I put them to sleep / I knock them out.",
      compounds: [
        { tp: "tomo lape", en: "bedroom" },
        { tp: "tenpo lape", en: "bedtime, sleep time" },
        { tp: "lape pona", en: "good sleep, restful sleep" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basic: [
      { tp: "mi pona", en: "I am good.", gloss: "I | good", note: "pona as predicate adjective (most common interpretation)" },
      { tp: "mi moku", en: "I eat. / I'm eating.", gloss: "I | eat", note: "moku as verb (most common interpretation)" },
      { tp: "mi toki", en: "I speak. / I'm talking.", gloss: "I | speak", note: "toki as intransitive verb" },
      { tp: "mi lape", en: "I sleep. / I'm sleeping.", gloss: "I | sleep", note: "lape as intransitive verb" }
    ],
    
    asAdjective: [
      { tp: "jan pona", en: "good person / friend", gloss: "person + good", note: "pona modifies jan" },
      { tp: "telo moku", en: "drinking water / beverage", gloss: "water + eating/drinkable", note: "moku describes telo" },
      { tp: "jan toki", en: "speaking person / speaker", gloss: "person + speaking", note: "toki as adjective" },
      { tp: "jan lape", en: "sleeping person", gloss: "person + sleeping", note: "lape as adjective" }
    ],
    
    asAdverb: [
      { tp: "mi moku pona", en: "I eat well.", gloss: "I | eat | well", note: "pona describes HOW I eat" },
      { tp: "mi toki pona", en: "I speak well. / I speak Toki Pona.", gloss: "I | speak | well/simply", note: "Ambiguous! Could mean the language OR 'speak well'" },
      { tp: "mi lape pona", en: "I sleep well.", gloss: "I | sleep | well", note: "pona describes the quality of sleep" }
    ],
    
    asNoun: [
      { tp: "moku li pona", en: "Food is good. / The meal is good.", gloss: "food | (li) | good", note: "moku as subject noun (needs 'li')" },
      { tp: "lape li pona", en: "Sleep is good.", gloss: "sleep | (li) | good", note: "lape as subject noun" },
      { tp: "toki li pona", en: "Speech is good. / The language is good.", gloss: "speech | (li) | good", note: "toki as subject noun" },
      { tp: "pona li kama", en: "Goodness comes. / Good things come.", gloss: "goodness | (li) | comes", note: "pona as abstract noun (preview of 'kama')" }
    ],
    
    withPossession: [
      { tp: "moku mi", en: "my food", gloss: "food + my", note: "mi as possessive pronoun" },
      { tp: "toki mi", en: "my speech / my words / my language", gloss: "speech + my", note: "mi shows ownership" },
      { tp: "lape mi", en: "my sleep / my rest", gloss: "sleep + my", note: "Abstract nouns can be possessed too" },
      { tp: "moku mi li pona", en: "My food is good.", gloss: "food + my | (li) | good", note: "Full sentence with possessed subject" }
    ],
    
    ambiguous: [
      { tp: "mi moku", meanings: ["I eat.", "I am food."], likely: "I eat.", note: "Context usually makes 'I eat' the obvious meaning" },
      { tp: "mi pona", meanings: ["I am good.", "I fix/improve."], likely: "I am good.", note: "Without an object, adjective meaning is more common" },
      { tp: "mi toki pona", meanings: ["I speak well.", "I speak simply.", "I speak Toki Pona."], likely: "I speak Toki Pona.", note: "In context of learning the language, this usually means Toki Pona" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What role does the highlighted word play?",
      questions: [
        {
          tp: "mi moku **pona**",
          en: "I eat well.",
          target: "pona",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 1,
          explanation: "'pona' comes after the verb 'moku', so it describes HOW I eat = adverb"
        },
        {
          tp: "jan **pona**",
          en: "good person / friend",
          target: "pona",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 0,
          explanation: "'pona' comes after the noun 'jan', so it describes the person = adjective"
        },
        {
          tp: "**moku** li pona",
          en: "Food is good.",
          target: "moku",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 3,
          explanation: "'moku' is the subject of the sentence, so it's a noun meaning 'food'"
        },
        {
          tp: "mi **lape**",
          en: "I sleep.",
          target: "lape",
          options: ["adjective (describing a noun)", "adverb (describing how)", "verb (an action)", "noun (a thing)"],
          correct: 2,
          explanation: "'lape' comes right after 'mi' as the predicate, functioning as a verb"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence. Notice how 'pona' works differently in each:",
      questions: [
        { tp: "mi pona", expectedType: "adjective use", hint: "pona describes 'mi'" },
        { tp: "jan pona", expectedType: "adjective use", hint: "pona describes 'jan'" },
        { tp: "mi moku pona", expectedType: "adverb use", hint: "pona describes how you eat" },
        { tp: "pona!", expectedType: "interjection", hint: "Standalone exclamation" }
      ],
      answers: ["I am good.", "good person / friend", "I eat well.", "Good! / Great! / Thanks!"]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["mi", "pona", "moku"],
          validAnswers: ["mi moku pona", "moku mi li pona"],
          translations: ["I eat well.", "My food is good."],
          hint: "There are multiple valid arrangements!"
        },
        {
          words: ["lape", "mi", "pona"],
          validAnswers: ["mi lape pona", "lape mi li pona"],
          translations: ["I sleep well.", "My sleep is good."],
          hint: "Think about what you want to say"
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This sentence is ambiguous. Give BOTH possible meanings:",
      questions: [
        {
          tp: "mi moku",
          meanings: 2,
          answers: ["I eat.", "I am food."],
          followUp: "Which meaning is more likely in everyday conversation?",
          likelyAnswer: "I eat."
        },
        {
          tp: "mi toki",
          meanings: 2,
          answers: ["I speak/talk.", "I am language/speech."],
          followUp: "Which meaning is more likely?",
          likelyAnswer: "I speak/talk."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence to match the English meaning:",
      questions: [
        { tp: "mi _____ pona", en: "I eat well.", answer: "moku", hint: "What verb means 'to eat'?" },
        { tp: "_____ mi li pona", en: "My sleep is good.", answer: "lape", hint: "What noun means 'sleep'?" },
        { tp: "mi lape _____", en: "I sleep well.", answer: "pona", hint: "What adverb means 'well'?" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'mi moku' can only mean 'I eat'—it can never mean 'I am food'.",
          answer: false,
          explanation: "It CAN mean 'I am food', though that interpretation is rare in context."
        },
        {
          statement: "In 'mi moku pona', the word 'pona' is an adverb describing how I eat.",
          answer: true,
          explanation: "Correct! 'pona' follows the verb 'moku' and describes the manner of eating."
        },
        {
          statement: "The word 'mi' can only be used as a subject, never after a noun.",
          answer: false,
          explanation: "'mi' can be a possessive pronoun: 'tomo mi' = my house"
        },
        {
          statement: "'toki pona' can mean both 'good speech' and 'the Toki Pona language'.",
          answer: true,
          explanation: "Exactly! This ambiguity is intentional—the language IS 'good/simple speech'."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tenpo suno — The Day",
    intro: "A simple story using only Lesson 1 vocabulary. Read it, then answer the questions.",
    paragraphs: [
      { tp: "mi lape.", en: "I sleep.", note: "Simple statement" },
      { tp: "mi lape pona.", en: "I sleep well.", note: "'pona' as adverb" },
      { tp: "mi moku.", en: "I eat.", note: "Simple statement" },
      { tp: "moku mi li pona!", en: "My food is good!", note: "'moku' as noun, 'mi' as possessive, 'pona' as adjective" },
      { tp: "mi toki.", en: "I speak.", note: "Simple statement" },
      { tp: "mi toki pona.", en: "I speak Toki Pona. / I speak well.", note: "Intentionally ambiguous—both meanings work!" },
      { tp: "pona!", en: "Good! / Great!", note: "'pona' as interjection" }
    ],
    comprehension: [
      { question: "How does the speaker sleep?", answer: "Well (pona)", evidence: "mi lape pona" },
      { question: "What word is used as BOTH an adjective and an adverb in this story?", answer: "pona", evidence: "'moku li pona' (adjective) and 'mi lape pona' (adverb)" },
      { question: "What does 'moku mi' mean?", answer: "my food", evidence: "Possessive: noun + mi" }
    ],
    challenge: "Can you add one more sentence to this story using only these 5 words? Share what 'pona' means in your sentence!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "With just these 5 words, you can already make useful compound phrases:",
    items: [
      { tp: "jan pona", en: "friend", literal: "good-person", lesson: "You'll learn 'jan' in Lesson 3" },
      { tp: "toki pona", en: "Toki Pona / good speech", literal: "language-good", lesson: "The name of the language itself!" },
      { tp: "moku pona", en: "good food / bon appétit", literal: "food-good", lesson: "A common phrase" },
      { tp: "lape pona", en: "good sleep / sleep well", literal: "sleep-good", lesson: "A nice way to say goodnight" }
    ],
    teaser: "As you learn more words, your compound-building power will grow exponentially!"
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "mi + VERB", example: "mi moku", meaning: "I do [verb]" },
      { pattern: "mi + ADJ", example: "mi pona", meaning: "I am [adjective]" },
      { pattern: "mi + VERB + ADV", example: "mi moku pona", meaning: "I do [verb] [adverb]-ly" },
      { pattern: "NOUN + mi", example: "moku mi", meaning: "my [noun]" },
      { pattern: "NOUN + mi + li + ADJ", example: "moku mi li pona", meaning: "My [noun] is [adj]" }
    ],
    remember: [
      "No 'li' after 'mi' (or 'sina')",
      "Position determines word role",
      "No tenses—context provides time",
      "Most words can be noun/adj/adv/verb"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson1;
}
