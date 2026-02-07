/**
 * Lesson 12: o — Commands & Address
 * Imperatives and vocatives
 */

const lesson12 = {
  id: 12,
  title: "o — Commands & Address",
  desc: "Giving commands, making requests, and addressing people",
  isExpanded: true,
  
  grammar: {
    summary: "<b>o</b> is the imperative/vocative particle. For commands: <b>o moku!</b> = Eat! For addressing: <b>jan Sonja o, toki!</b> = Sonja, hello! With <b>sina</b>: <b>sina o lape</b> = You should sleep.",
    
    concepts: [
      {
        title: "Basic commands: o + verb",
        explanation: "<b>o</b> before a verb creates a command. <b>o moku!</b> = Eat!",
        examples: [
          { tp: "o moku!", en: "Eat!", note: "Simple command" },
          { tp: "o tawa!", en: "Go!", note: "Motion command" },
          { tp: "o lape!", en: "Sleep!", note: "Rest command" },
          { tp: "o kute!", en: "Listen!", note: "Attention" },
          { tp: "o kama!", en: "Come!", note: "Arrival" }
        ],
        pitfall: "'o' replaces 'sina li' for commands."
      },
      {
        title: "Commands with objects",
        explanation: "Commands can include direct objects: <b>o moku e kili!</b> = Eat the fruit!",
        examples: [
          { tp: "o moku e kili!", en: "Eat the fruit!", note: "With object" },
          { tp: "o pana e ni tawa mi!", en: "Give this to me!", note: "Object + recipient" },
          { tp: "o lukin e lipu!", en: "Read the book!", note: "'lukin e' = read" },
          { tp: "o open e lupa!", en: "Open the door!", note: "Action + object" }
        ],
        pitfall: "Object structure is normal: 'o VERB e OBJECT'."
      },
      {
        title: "Addressing people: NAME o, ...",
        explanation: "Put <b>o</b> after a name to address someone: <b>jan Sonja o, toki!</b>",
        examples: [
          { tp: "jan Sonja o, toki!", en: "Sonja, hello!", note: "Address + greeting" },
          { tp: "mama o, mi wile toki.", en: "Mom/Dad, I want to talk.", note: "Addressing parent" },
          { tp: "jan pona o, kama!", en: "Friend, come!", note: "Address + command" },
          { tp: "jan ale o, o kute!", en: "Everyone, listen!", note: "Addressing group" }
        ],
        pitfall: "Comma after 'o' when addressing."
      },
      {
        title: "Combined address + command",
        explanation: "One <b>o</b> can do both: <b>jan Mako o moku!</b> = Mako, eat!",
        examples: [
          { tp: "jan Mako o moku!", en: "Mako, eat!", note: "One 'o'" },
          { tp: "jan pona o kama!", en: "Friend, come!", note: "Combined" },
          { tp: "mama o lukin!", en: "Mom/Dad, look!", note: "Efficient" }
        ],
        pitfall: "'jan Lisa o moku!' = one 'o'. 'jan Lisa o, o moku!' = two 'o's (emphatic)."
      },
      {
        title: "Softened commands: sina o",
        explanation: "<b>sina o</b> = you should: <b>sina o lape</b> = You should sleep.",
        examples: [
          { tp: "sina o lape.", en: "You should sleep.", note: "Gentle suggestion" },
          { tp: "sina o moku pona.", en: "You should eat well.", note: "Advice" },
          { tp: "sina o pilin pona.", en: "You should feel good.", note: "Encouragement" }
        ],
        pitfall: "'o moku!' = Eat! (command). 'sina o moku' = You should eat (suggestion)."
      },
      {
        title: "First person: mi o / mi mute o",
        explanation: "<b>mi o</b> = may I. <b>mi mute o</b> = let's.",
        examples: [
          { tp: "mi o pona.", en: "May I be good.", note: "Self-wish" },
          { tp: "mi mute o tawa!", en: "Let's go!", note: "'mi mute' = we" },
          { tp: "mi mute o moku!", en: "Let's eat!", note: "Group action" }
        ],
        pitfall: "'mi mute o' = let's."
      },
      {
        title: "Negative commands",
        explanation: "<b>o ... ala</b> = don't: <b>o tawa ala!</b> = Don't go!",
        examples: [
          { tp: "o tawa ala!", en: "Don't go!", note: "'ala' negates" },
          { tp: "o moku ala e ni!", en: "Don't eat this!", note: "Negative + object" },
          { tp: "o pakala ala!", en: "Don't break (it)!", note: "Warning" }
        ],
        pitfall: "'ala' after verb, same as regular negation."
      },
      {
        title: "en — and (subjects only)",
        explanation: "<b>en</b> connects subjects: <b>mi en sina</b> = me and you.",
        examples: [
          { tp: "mi en sina li pona.", en: "You and I are good.", note: "'en' connects subjects" },
          { tp: "jan Lisa en jan Mako o kama!", en: "Lisa and Mako, come!", note: "Multiple people" },
          { tp: "mama en jan lili li moku.", en: "Parent and child eat.", note: "Family" }
        ],
        pitfall: "'en' ONLY for subjects! Objects: 'mi moku e kili e pan.'"
      },
      {
        title: "Common polite expressions",
        explanation: "Standard polite phrases with <b>o</b>:",
        examples: [
          { tp: "o kama pona!", en: "Welcome!", note: "Greeting arrivals" },
          { tp: "o tawa pona!", en: "Goodbye! (to one leaving)", note: "Go well" },
          { tp: "o awen pona!", en: "Take care! (to one staying)", note: "Stay well" },
          { tp: "o moku pona!", en: "Enjoy your meal!", note: "Before eating" },
          { tp: "o lape pona!", en: "Sleep well!", note: "Bedtime" }
        ],
        pitfall: "Memorize these as units!"
      }
    ],
    
    keyInsight: "<b>o</b> = commands (<b>o moku!</b>), address (<b>jan Lisa o, ...</b>), suggestions (<b>sina o lape</b>), wishes (<b>mi o pona</b>), let's (<b>mi mute o tawa!</b>). Use <b>en</b> only for subjects!"
  },

  vocab: [
    {
      word: "o",
      primaryMeaning: "(imperative/vocative marker)",
      roles: { particle: "command marker, address marker" },
      notes: "Before verbs = command. After names = address.",
      compounds: [
        { tp: "o moku!", en: "Eat!" },
        { tp: "jan X o, ...", en: "X, ..." },
        { tp: "sina o lape", en: "You should sleep" }
      ]
    },
    {
      word: "olin",
      primaryMeaning: "love, compassion",
      roles: { noun: "love", verbTransitive: "to love" },
      notes: "'mi olin e sina' = I love you.",
      compounds: [
        { tp: "mi olin e sina", en: "I love you" },
        { tp: "jan olin", en: "loved one" }
      ]
    },
    {
      word: "pakala",
      primaryMeaning: "break, damage, mistake",
      roles: { noun: "mistake", verbTransitive: "to break", interjection: "darn!" },
      notes: "'pakala!' = darn!",
      compounds: [
        { tp: "pakala!", en: "darn!" },
        { tp: "o pakala ala!", en: "don't break it!" }
      ]
    },
    {
      word: "mu",
      primaryMeaning: "animal sound",
      roles: { noun: "animal sound", interjection: "(any animal noise)" },
      notes: "Generic animal sound.",
      compounds: [
        { tp: "soweli li mu", en: "the animal makes a sound" }
      ]
    },
    {
      word: "uta",
      primaryMeaning: "mouth, lips",
      roles: { noun: "mouth", verbTransitive: "to kiss" },
      notes: "'uta' as verb = kiss.",
      compounds: [
        { tp: "mi uta e sina", en: "I kiss you" }
      ]
    },
    {
      word: "kute",
      primaryMeaning: "hear, listen, ear",
      roles: { noun: "ear", verbTransitive: "to hear, to listen to" },
      notes: "'o kute!' = Listen!",
      compounds: [
        { tp: "o kute!", en: "listen!" },
        { tp: "mi kute e kalama", en: "I hear a sound" }
      ]
    },
    {
      word: "en",
      primaryMeaning: "and (for subjects)",
      roles: { particle: "and (subjects only)" },
      notes: "ONLY for subjects!",
      compounds: [
        { tp: "mi en sina", en: "me and you" }
      ]
    }
  ],

  sentences: {
    basicCommands: [
      { tp: "o moku!", en: "Eat!", gloss: "o | eat", note: "Simple" },
      { tp: "o tawa!", en: "Go!", gloss: "o | go", note: "Motion" },
      { tp: "o lape!", en: "Sleep!", gloss: "o | sleep", note: "Rest" },
      { tp: "o kute!", en: "Listen!", gloss: "o | listen", note: "Attention" },
      { tp: "o pali!", en: "Work!", gloss: "o | work", note: "Action" }
    ],
    
    commandsWithObjects: [
      { tp: "o moku e kili!", en: "Eat the fruit!", gloss: "o | eat | (e) | fruit", note: "With object" },
      { tp: "o pana e ni tawa mi!", en: "Give this to me!", gloss: "o | give | (e) | this | to | me", note: "Object + recipient" },
      { tp: "o lukin e lipu!", en: "Read the book!", gloss: "o | look | (e) | book", note: "Read" },
      { tp: "o open e lupa!", en: "Open the door!", gloss: "o | open | (e) | door", note: "Open" }
    ],
    
    addressingPeople: [
      { tp: "jan Sonja o, toki!", en: "Sonja, hello!", gloss: "person | Sonja | o | hello", note: "Address" },
      { tp: "mama o, mi wile toki.", en: "Mom/Dad, I want to talk.", gloss: "parent | o | ...", note: "To parent" },
      { tp: "jan pona o, kama pona!", en: "Friend, welcome!", gloss: "friend | o | welcome", note: "Welcoming" }
    ],
    
    combinedAddressCommand: [
      { tp: "jan Mako o moku!", en: "Mako, eat!", gloss: "person | Mako | o | eat", note: "One 'o'" },
      { tp: "jan pona o kama!", en: "Friend, come!", gloss: "friend | o | come", note: "Efficient" }
    ],
    
    softenedCommands: [
      { tp: "sina o lape.", en: "You should sleep.", gloss: "you | o | sleep", note: "Suggestion" },
      { tp: "sina o moku pona.", en: "You should eat well.", gloss: "you | o | eat | good", note: "Advice" }
    ],
    
    wishesAndLets: [
      { tp: "mi o pona.", en: "May I be good.", gloss: "I | o | good", note: "Wish" },
      { tp: "mi mute o tawa!", en: "Let's go!", gloss: "we | o | go", note: "Let's" },
      { tp: "mi mute o moku!", en: "Let's eat!", gloss: "we | o | eat", note: "Group" }
    ],
    
    negativeCommands: [
      { tp: "o tawa ala!", en: "Don't go!", gloss: "o | go | not", note: "Negative" },
      { tp: "o moku ala e ni!", en: "Don't eat this!", gloss: "o | eat | not | (e) | this", note: "With object" },
      { tp: "o pakala ala!", en: "Don't break it!", gloss: "o | break | not", note: "Warning" }
    ],
    
    enUsage: [
      { tp: "mi en sina li pona.", en: "You and I are good.", gloss: "I | and | you | (li) | good", note: "'en' for subjects" },
      { tp: "jan Lisa en jan Mako o kama!", en: "Lisa and Mako, come!", gloss: "...", note: "Multiple" },
      { tp: "kili en pan li lon.", en: "Fruit and bread are here.", gloss: "fruit | and | bread | (li) | exist", note: "Things" }
    ],
    
    politeExpressions: [
      { tp: "o kama pona!", en: "Welcome!", gloss: "o | come | good", note: "Greeting" },
      { tp: "o tawa pona!", en: "Goodbye!", gloss: "o | go | good", note: "Farewell" },
      { tp: "o lape pona!", en: "Sleep well!", gloss: "o | sleep | good", note: "Bedtime" },
      { tp: "mi olin e sina.", en: "I love you.", gloss: "I | love | (e) | you", note: "Affection" }
    ]
  },

  practice: [
    {
      type: "commandFormation",
      instruction: "Form the command:",
      questions: [
        { en: "Eat!", answer: "o moku!", hint: "o + verb" },
        { en: "Go!", answer: "o tawa!", hint: "o + verb" },
        { en: "Listen!", answer: "o kute!", hint: "o + verb" },
        { en: "Don't go!", answer: "o tawa ala!", hint: "o + verb + ala" },
        { en: "Let's eat!", answer: "mi mute o moku!", hint: "mi mute o + verb" }
      ]
    },
    
    {
      type: "addressFormation",
      instruction: "Address this person:",
      questions: [
        { person: "Sonja", greeting: "hello", answer: "jan Sonja o, toki!", hint: "name + o, greeting" },
        { person: "friend", command: "come", answer: "jan pona o kama!", hint: "Can use one 'o'" },
        { person: "everyone", command: "listen", answer: "jan ale o kute!", hint: "jan ale = everyone" }
      ]
    },
    
    {
      type: "oType",
      instruction: "What type of 'o' usage is this?",
      questions: [
        { tp: "o moku!", options: ["Command", "Address", "Suggestion", "Let's"], correct: 0 },
        { tp: "jan Lisa o, toki!", options: ["Command", "Address", "Suggestion", "Let's"], correct: 1 },
        { tp: "sina o lape.", options: ["Command", "Address", "Suggestion", "Let's"], correct: 2 },
        { tp: "mi mute o tawa!", options: ["Command", "Address", "Suggestion", "Let's"], correct: 3 }
      ]
    },
    
    {
      type: "enUsage",
      instruction: "Is 'en' used correctly here?",
      questions: [
        { tp: "mi en sina li tawa.", correct: true, explanation: "'en' connects subjects — correct!" },
        { tp: "mi moku e kili en pan.", correct: false, explanation: "'en' is ONLY for subjects. Should be: 'mi moku e kili e pan.'" },
        { tp: "jan Lisa en jan Mako li pona.", correct: true, explanation: "'en' connects two subject names — correct!" }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the blank:",
      questions: [
        { partial: "_____ moku!", context: "Eat! (command)", answer: "o" },
        { partial: "jan Sonja _____, toki!", context: "Sonja, hello!", answer: "o" },
        { partial: "sina _____ lape.", context: "You should sleep.", answer: "o" },
        { partial: "mi mute _____ tawa!", context: "Let's go!", answer: "o" },
        { partial: "mi _____ sina li pona.", context: "You and I are good.", answer: "en" }
      ]
    },
    
    {
      type: "translate",
      instruction: "Translate:",
      questions: [
        { en: "I love you.", answer: "mi olin e sina." },
        { en: "Don't break this!", answer: "o pakala ala e ni!" },
        { en: "Welcome!", answer: "o kama pona!" },
        { en: "Lisa and Tom, come!", answer: "jan Lisa en jan Toma o kama!" },
        { en: "Let's have fun!", answer: "mi mute o musi!" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "True or false?",
      questions: [
        { statement: "'o' before a verb makes a command.", answer: true, explanation: "Correct!" },
        { statement: "'en' can connect objects.", answer: false, explanation: "'en' is ONLY for subjects!" },
        { statement: "'sina o' is softer than just 'o'.", answer: true, explanation: "'sina o lape' = you should sleep (suggestion)." },
        { statement: "'mi mute o' means 'let's'.", answer: true, explanation: "'mi mute o tawa!' = Let's go!" }
      ]
    }
  ],

  story: {
    title: "jan sin li kama — A Visitor Arrives",
    intro: "A story with commands, addresses, and love!",
    paragraphs: [
      { tp: "jan sin li kama tawa tomo mi. mi toki: 'jan pona o, o kama pona!'", en: "A new person comes to my house. I say: 'Friend, welcome!'", note: "Address + welcome" },
      { tp: "ona li toki: 'pona! mi wile moku. mi o ken ala ken?'", en: "They say: 'Good! I want to eat. May I?'", note: "'mi o ken?' = may I?" },
      { tp: "mi toki: 'o moku! moku li lon lon tomo moku.'", en: "I say: 'Eat! Food is in the dining room.'", note: "Command + info" },
      { tp: "jan sin li moku. mi toki: 'o moku pona!'", en: "The visitor eats. I say: 'Enjoy your meal!'", note: "'o moku pona'" },
      { tp: "tenpo moku li pini. mi en ona li toki mute.", en: "Eating time ends. They and I talk a lot.", note: "'mi en ona' = they and I" },
      { tp: "tenpo pimeja li kama. mi toki: 'sina o lape. tenpo suno kama la mi mute o tawa!'", en: "Night comes. I say: 'You should sleep. Tomorrow let's go (somewhere)!'", note: "Suggestion + let's" },
      { tp: "ona li toki: 'pona! o lape pona!'", en: "They say: 'Good! Sleep well!'", note: "Polite expression" },
      { tp: "mi toki: 'mi olin e sina, jan pona.'", en: "I say: 'I love you, friend.'", note: "'mi olin e sina'" },
      { tp: "tenpo suno kama la mi mute li pilin pona a!", en: "The next day, we feel so good!", note: "Happy ending" }
    ],
    comprehension: [
      { question: "What does the visitor want?", answer: "To eat", evidence: "mi wile moku" },
      { question: "What does the narrator tell them before sleep?", answer: "Sleep well (o lape pona)", evidence: "o lape pona" },
      { question: "What will they do tomorrow?", answer: "Go somewhere together", evidence: "mi mute o tawa" }
    ],
    challenge: "Write a conversation where you welcome someone and give them instructions using 'o'!"
  },

  compoundsPreview: {
    title: "Common 'o' Expressions",
    intro: "Polite and useful phrases with 'o':",
    items: [
      { tp: "o kama pona!", en: "Welcome!", literal: "o | come | good", lesson: "Greeting arrivals" },
      { tp: "o tawa pona!", en: "Goodbye! (safe travels)", literal: "o | go | good", lesson: "To someone leaving" },
      { tp: "o awen pona!", en: "Take care!", literal: "o | stay | good", lesson: "To someone staying" },
      { tp: "o moku pona!", en: "Enjoy your meal!", literal: "o | eat | good", lesson: "Before eating" },
      { tp: "o lape pona!", en: "Sleep well!", literal: "o | sleep | good", lesson: "Bedtime" },
      { tp: "o pali pona!", en: "Good luck! Work well!", literal: "o | work | good", lesson: "Encouragement" },
      { tp: "mi olin e sina", en: "I love you", literal: "I | love | (e) | you", lesson: "Affection" }
    ],
    teaser: "Next lesson: Colors & Descriptions! Learn to describe the world in vivid detail."
  },

  quickReference: {
    patterns: [
      { pattern: "o [VERB]!", example: "o moku!", meaning: "[VERB]! (command)" },
      { pattern: "o [VERB] e [OBJECT]!", example: "o pana e ni!", meaning: "[VERB] the [OBJECT]!" },
      { pattern: "[NAME] o, ...", example: "jan Lisa o, toki!", meaning: "[NAME], ..." },
      { pattern: "[NAME] o [VERB]!", example: "jan Lisa o kama!", meaning: "[NAME], [VERB]!" },
      { pattern: "sina o [VERB]", example: "sina o lape", meaning: "You should [VERB]" },
      { pattern: "mi o [VERB]", example: "mi o pona", meaning: "May I [VERB]" },
      { pattern: "mi mute o [VERB]!", example: "mi mute o tawa!", meaning: "Let's [VERB]!" },
      { pattern: "o [VERB] ala!", example: "o tawa ala!", meaning: "Don't [VERB]!" },
      { pattern: "X en Y li...", example: "mi en sina li pona", meaning: "X and Y are..." }
    ],
    remember: [
      "'o' + verb = command: 'o moku!' = Eat!",
      "Name + 'o' = address: 'jan Lisa o, toki!'",
      "Combined: 'jan Lisa o moku!' = Lisa, eat!",
      "'sina o' = suggestion: 'sina o lape' = You should sleep",
      "'mi mute o' = let's: 'mi mute o tawa!' = Let's go!",
      "'o ... ala' = don't: 'o tawa ala!' = Don't go!",
      "'en' ONLY connects subjects, not objects!",
      "Common: 'o kama pona!' (welcome), 'o tawa pona!' (goodbye)"
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson12;
}
