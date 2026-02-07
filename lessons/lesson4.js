/**
 * Lesson 4: e — the object marker
 * Adding objects to sentences and clarifying transitive actions
 */

const lesson4 = {
  id: 4,
  title: "e — the object marker",
  desc: "Adding objects to sentences and clarifying transitive actions",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "<b>e</b> marks the direct object — the thing that receives the action. It clarifies ambiguous sentences and enables transitive verbs.",
    
    concepts: [
      {
        title: "Why 'e' matters — resolving ambiguity",
        explanation: "Remember how <b>mi moku</b> could mean 'I eat' OR 'I am food'? The particle <b>e</b> clarifies by showing what receives the action.",
        examples: [
          { tp: "mi moku", en: "I eat. / I am food.", note: "Ambiguous without object" },
          { tp: "mi moku e kili", en: "I eat fruit.", note: "CLEAR! 'moku' must be a verb" },
          { tp: "mi pona", en: "I am good. / I fix/improve.", note: "Ambiguous" },
          { tp: "mi pona e ilo", en: "I fix the tool.", note: "CLEAR! 'pona' is a transitive verb" }
        ],
        pitfall: "Adding 'e' turns any potentially ambiguous word into a definite transitive verb."
      },
      {
        title: "Transitive vs. intransitive verbs",
        explanation: "Transitive verbs do something TO an object (need <b>e</b>). Intransitive verbs don't take an object. Many toki pona words can be both!",
        examples: [
          { tp: "mi moku", en: "I eat.", note: "moku as INTRANSITIVE (no object)" },
          { tp: "mi moku e pan", en: "I eat bread.", note: "moku as TRANSITIVE (has object)" },
          { tp: "ona li lape", en: "They sleep.", note: "lape as INTRANSITIVE" },
          { tp: "ona li lape e jan", en: "They put the person to sleep.", note: "lape as TRANSITIVE (causative!)" }
        ],
        pitfall: "Ask yourself: is there a receiver of the action? If yes, use 'e'."
      },
      {
        title: "The 'e' position in sentences",
        explanation: "<b>e</b> comes after the verb (predicate) and before the direct object. The object can be a noun, pronoun, or noun phrase.",
        examples: [
          { tp: "mi lukin e ni", en: "I see this.", note: "VERB + e + PRONOUN" },
          { tp: "jan li moku e kili", en: "The person eats fruit.", note: "VERB + e + NOUN" },
          { tp: "ona li jo e tomo suli", en: "They have a big house.", note: "VERB + e + NOUN PHRASE" },
          { tp: "mi pona e ilo moku", en: "I fix the eating utensil.", note: "Object can be a compound" }
        ],
        pitfall: "Never put 'e' before the verb! It always comes AFTER the verb."
      },
      {
        title: "Multiple objects with multiple 'e'",
        explanation: "To say the verb applies to multiple objects, use <b>e</b> before each object. Think: 'I eat (1) bread AND (2) fruit.'",
        examples: [
          { tp: "mi moku e pan e kili", en: "I eat bread and fruit.", note: "Two objects, two 'e'" },
          { tp: "ona li lukin e ma e suno", en: "They see the land and the sun.", note: "Looking at two things" },
          { tp: "mi jo e telo e moku", en: "I have water and food.", note: "Possessing two things" }
        ],
        pitfall: "Each object needs its own 'e'. Don't try to list objects without repeating 'e'."
      },
      {
        title: "Reflexive pronouns",
        explanation: "When the subject acts on itself, repeat the pronoun after <b>e</b>. This creates reflexive constructions like 'I wash myself.'",
        examples: [
          { tp: "mi telo e mi", en: "I wash myself.", note: "First 'mi' = subject, second 'mi' = object" },
          { tp: "sina lukin e sina", en: "You look at yourself.", note: "Reflexive with 'sina'" },
          { tp: "ona li pona e ona", en: "They improve themselves.", note: "Reflexive with 'ona'" },
          { tp: "jan li telo e ona", en: "The person washes themselves.", note: "'ona' refers back to 'jan'" }
        ],
        pitfall: "The second pronoun is a REFLEXIVE pronoun, not a different person!"
      },
      {
        title: "Combining 'li' and 'e'",
        explanation: "Complex sentences can have multiple predicates (with <b>li</b>) AND multiple objects (with <b>e</b>). Build step by step!",
        examples: [
          { tp: "ona li moku e pan li moku e telo", en: "They eat bread and drink water.", note: "Could simplify: 'li moku e pan e telo'" },
          { tp: "mi moku li lukin e ma", en: "I eat and look at the land.", note: "Two predicates, object on second" },
          { tp: "jan li jo e ilo li pali", en: "The person has a tool and works.", note: "Object on first predicate only" }
        ],
        pitfall: "Keep it simple! Multiple 'li' with multiple 'e' can get confusing."
      }
    ],
    
    keyInsight: "'e' unlocks transitive verbs and removes ambiguity. When you add an object, you clarify exactly what the action affects. This is how toki pona stays simple yet precise!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "e",
      primaryMeaning: "(direct object marker)",
      roles: {
        particle: "Introduces the direct object of a transitive verb"
      },
      notes: "Always comes after the verb and before the object. Never used before or after other separators (li, la, pi). Only transitive verbs use 'e'.",
      examples: {
        basic: "mi moku e kili — I eat fruit",
        multiple: "mi moku e pan e telo — I eat bread and drink water",
        reflexive: "mi telo e mi — I wash myself"
      }
    },
    {
      word: "telo",
      primaryMeaning: "water, liquid",
      roles: {
        adjective: "wet, moist, damp, humid, liquid",
        adverb: "wetly, moistly",
        noun: "water, liquid, juice, sauce, beverage",
        verbTransitive: "to water, to wash, to clean with liquid"
      },
      notes: "Covers ALL liquids: water, juice, soup, alcohol, etc. As a verb, it means to wash or apply liquid. 'telo e X' = wash X.",
      compounds: [
        { tp: "telo moku", en: "drinking water, beverage" },
        { tp: "telo nasa", en: "alcohol, strange water" },
        { tp: "telo suli", en: "ocean, sea, large body of water" },
        { tp: "telo kili", en: "juice, fruit water" },
        { tp: "telo seli", en: "hot drink (coffee, tea)" },
        { tp: "telo wawa", en: "energy drink, strong drink" }
      ]
    },
    {
      word: "pan",
      primaryMeaning: "bread, grain, cereal",
      roles: {
        adjective: "grain-based, bready, starchy",
        noun: "bread, grain, cereal, rice, pasta, wheat",
        verbTransitive: "to sow, to plant grain"
      },
      notes: "Covers all grain-based foods: bread, rice, pasta, oats, corn, etc. The base carbohydrate of a meal.",
      compounds: [
        { tp: "pan moku", en: "edible grain, bread for eating" },
        { tp: "pan suli", en: "loaf of bread, large bread" },
        { tp: "pan lili", en: "cracker, small bread" },
        { tp: "pan seli", en: "toast, cooked bread" }
      ]
    },
    {
      word: "kili",
      primaryMeaning: "fruit, vegetable",
      roles: {
        adjective: "fruity, vegetable-like",
        adverb: "fruitily (rare)",
        noun: "fruit, vegetable, mushroom"
      },
      notes: "Includes all plant-based foods that aren't grains: fruits, vegetables, and mushrooms. The 'produce' category.",
      compounds: [
        { tp: "kili suwi", en: "sweet fruit" },
        { tp: "kili loje", en: "red fruit/vegetable (tomato, apple)" },
        { tp: "kili ma", en: "earth vegetable (potato, carrot)" },
        { tp: "kili palisa", en: "long fruit/vegetable (banana, cucumber)" },
        { tp: "kili lili", en: "small fruit (berry)" }
      ]
    },
    {
      word: "musi",
      primaryMeaning: "fun, play, entertainment",
      roles: {
        adjective: "fun, entertaining, artistic, recreational",
        adverb: "playfully, entertainingly",
        noun: "fun, game, play, art, entertainment",
        verbIntransitive: "to play, to have fun",
        verbTransitive: "to amuse, to entertain"
      },
      notes: "Covers anything done for enjoyment: games, art, music, humor. 'mi musi' = I play/have fun. 'mi musi e ona' = I entertain them.",
      compounds: [
        { tp: "ilo musi", en: "toy, game, entertainment device" },
        { tp: "toki musi", en: "joke, funny speech" },
        { tp: "jan musi", en: "entertainer, artist, fun person" },
        { tp: "musi mute", en: "very fun, lots of fun" }
      ]
    },
    {
      word: "ijo",
      primaryMeaning: "thing, something, object",
      roles: {
        noun: "thing, object, matter, something, stuff",
        verbTransitive: "to objectify (rare)"
      },
      notes: "The most generic noun. Use when you don't know or don't want to specify what something is. Very useful for vague references.",
      compounds: [
        { tp: "ijo ni", en: "this thing" },
        { tp: "ijo suli", en: "big thing, important matter" },
        { tp: "ijo moku", en: "food, edible thing" },
        { tp: "ijo pona", en: "good thing" },
        { tp: "ijo ike", en: "bad thing, problem" }
      ]
    },
    {
      word: "ilo",
      primaryMeaning: "tool, device, machine",
      roles: {
        adjective: "useful, tool-like",
        noun: "tool, device, machine, instrument"
      },
      notes: "Any object used for a specific purpose. Modern devices (phone, computer) are 'ilo' too.",
      compounds: [
        { tp: "ilo moku", en: "eating utensil, fork, spoon" },
        { tp: "ilo toki", en: "communication device, phone" },
        { tp: "ilo sona", en: "computer, smart device" },
        { tp: "ilo musi", en: "toy, game, entertainment device" },
        { tp: "ilo lukin", en: "glasses, telescope, viewing device" }
      ]
    },
    {
      word: "lukin",
      primaryMeaning: "see, look, eye",
      roles: {
        adjective: "visual, eye-related",
        adverb: "visually",
        noun: "view, look, sight, vision, eye",
        verbIntransitive: "to look, to watch, to pay attention",
        verbTransitive: "to see, to look at, to watch, to read"
      },
      notes: "Covers all aspects of seeing. As intransitive: 'mi lukin' = I look. As transitive: 'mi lukin e ni' = I see this. Can mean 'read' for text!",
      compounds: [
        { tp: "pona lukin", en: "pretty, good-looking" },
        { tp: "ike lukin", en: "ugly, bad-looking" },
        { tp: "lukin pona", en: "good vision, seeing well" },
        { tp: "ilo lukin", en: "glasses, telescope" }
      ]
    },
    {
      word: "jo",
      primaryMeaning: "have, possess",
      roles: {
        adjective: "having, possessing",
        noun: "possession, property, content",
        verbTransitive: "to have, to own, to possess, to contain"
      },
      notes: "One of the most common transitive verbs. Always used with 'e': 'mi jo e X' = I have X. Cannot be used intransitively.",
      compounds: [
        { tp: "jo ala", en: "to not have, to lack" },
        { tp: "jo mute", en: "to have a lot, wealthy" },
        { tp: "jo lili", en: "to have a little" }
      ]
    },
    {
      word: "wile",
      primaryMeaning: "want, need, desire",
      roles: {
        noun: "desire, need, will, intention",
        verbTransitive: "to want, to need, to wish for",
        auxiliaryVerb: "want to, need to, must, should"
      },
      notes: "Extremely common! As main verb: 'mi wile e ni' = I want this. As auxiliary: 'mi wile moku' = I want to eat. Both uses are essential.",
      compounds: [
        { tp: "wile moku", en: "hungry, wanting to eat" },
        { tp: "wile lape", en: "tired, wanting to sleep" },
        { tp: "wile mute", en: "to crave, really want" },
        { tp: "wile pona", en: "good intentions" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basic: [
      { tp: "mi moku e kili", en: "I eat fruit.", gloss: "I | eat | (e) | fruit", note: "Basic transitive sentence" },
      { tp: "sina moku e pan", en: "You eat bread.", gloss: "you | eat | (e) | bread", note: "'sina' + verb + object" },
      { tp: "ona li moku e telo", en: "They drink water.", gloss: "they | (li) | eat/drink | (e) | water", note: "'moku' covers drinking too" },
      { tp: "jan li lukin e ni", en: "The person sees this.", gloss: "person | (li) | see | (e) | this", note: "'lukin e' = to see (transitive)" },
      { tp: "mi jo e ilo", en: "I have a tool.", gloss: "I | have | (e) | tool", note: "'jo' is always transitive" }
    ],
    
    clarifyingAmbiguity: [
      { tp: "mi moku", en: "I eat. / I am food.", gloss: "I | eat/food", note: "AMBIGUOUS (lesson 1)" },
      { tp: "mi moku e kili", en: "I eat fruit.", gloss: "I | eat | (e) | fruit", note: "CLEAR! 'moku' = verb" },
      { tp: "mi pona", en: "I am good. / I fix.", gloss: "I | good/fix", note: "AMBIGUOUS" },
      { tp: "mi pona e tomo", en: "I fix the house.", gloss: "I | fix | (e) | house", note: "CLEAR! 'pona' = verb" },
      { tp: "sina suli", en: "You are big. / You enlarge.", gloss: "you | big/enlarge", note: "AMBIGUOUS" },
      { tp: "sina suli e ni", en: "You enlarge this.", gloss: "you | enlarge | (e) | this", note: "CLEAR! 'suli' = verb" }
    ],
    
    multipleObjects: [
      { tp: "mi moku e pan e kili", en: "I eat bread and fruit.", gloss: "I | eat | (e) | bread | (e) | fruit", note: "Two objects" },
      { tp: "ona li lukin e ma e suno", en: "They see the land and the sun.", gloss: "they | (li) | see | (e) | land | (e) | sun", note: "Looking at two things" },
      { tp: "mi jo e telo e moku", en: "I have water and food.", gloss: "I | have | (e) | water | (e) | food", note: "Possessing two things" },
      { tp: "sina wile e ilo e pan", en: "You want a tool and bread.", gloss: "you | want | (e) | tool | (e) | bread", note: "Wanting two things" }
    ],
    
    reflexive: [
      { tp: "mi telo e mi", en: "I wash myself.", gloss: "I | wash | (e) | myself", note: "Subject = object" },
      { tp: "sina lukin e sina", en: "You look at yourself.", gloss: "you | look-at | (e) | yourself", note: "Reflexive 'sina'" },
      { tp: "ona li pona e ona", en: "They improve themselves.", gloss: "they | (li) | improve | (e) | themselves", note: "Reflexive 'ona'" },
      { tp: "jan li telo e ona", en: "The person washes themselves.", gloss: "person | (li) | wash | (e) | themselves", note: "'ona' refers back to 'jan'" }
    ],
    
    withWile: [
      { tp: "mi wile e telo", en: "I want water.", gloss: "I | want | (e) | water", note: "'wile' as main transitive verb" },
      { tp: "mi wile moku", en: "I want to eat.", gloss: "I | want | eat", note: "'wile' as auxiliary (no 'e')" },
      { tp: "mi wile moku e kili", en: "I want to eat fruit.", gloss: "I | want | eat | (e) | fruit", note: "'wile' auxiliary + 'moku e'" },
      { tp: "ona li wile lukin e ma", en: "They want to see the land.", gloss: "they | (li) | want | see | (e) | land", note: "Auxiliary + transitive" },
      { tp: "sina wile e seme", en: "What do you want?", gloss: "you | want | (e) | what?", note: "Question with 'wile' (preview)" }
    ],
    
    withCompoundObjects: [
      { tp: "mi moku e telo seli", en: "I drink hot water / coffee.", gloss: "I | drink | (e) | water + hot", note: "Object is a compound" },
      { tp: "ona li jo e tomo suli", en: "They have a big house.", gloss: "they | (li) | have | (e) | house + big", note: "Adjective on object" },
      { tp: "mi lukin e jan pona", en: "I see my friend.", gloss: "I | see | (e) | person + good", note: "'jan pona' = friend" },
      { tp: "sina pona e ilo moku", en: "You fix the eating utensil.", gloss: "you | fix | (e) | tool + eating", note: "Compound object" }
    ],
    
    combinedLiAndE: [
      { tp: "mi moku e pan li moku e telo", en: "I eat bread and drink water.", gloss: "I | eat | (e) | bread | (li) | drink | (e) | water", note: "Two full clauses" },
      { tp: "jan li moku li musi", en: "The person eats and plays.", gloss: "person | (li) | eat | (li) | play", note: "Two predicates, no objects" },
      { tp: "ona li jo e ilo li pali", en: "They have a tool and work.", gloss: "they | (li) | have | (e) | tool | (li) | work", note: "First pred has object" },
      { tp: "mi lukin e ni li sona", en: "I see this and understand.", gloss: "I | see | (e) | this | (li) | know", note: "Intransitive second pred" }
    ],
    
    ambiguous: [
      { tp: "mi pona e sina", meanings: ["I fix you.", "I make you good."], likely: "I fix/improve you.", note: "'pona e' = to improve" },
      { tp: "mi musi e ona", meanings: ["I entertain them.", "I amuse them.", "I play with them."], likely: "I entertain them.", note: "All valid!" },
      { tp: "ona li telo e jan", meanings: ["They wash the person.", "They water the person."], likely: "They wash the person.", note: "Context decides" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "Does this sentence need 'e'? Identify if there's a direct object.",
      questions: [
        {
          tp: "mi moku ___ kili",
          en: "I eat fruit.",
          target: "e",
          options: ["Needs 'e' — 'kili' is the object being eaten", "No 'e' needed — 'moku kili' is a compound", "Either works", "Needs 'li' instead"],
          correct: 0,
          explanation: "'kili' receives the action of eating, so it's a direct object marked by 'e': mi moku E kili."
        },
        {
          tp: "mi moku",
          en: "I eat.",
          target: "e",
          options: ["Needs 'e' — sentence is incomplete", "No 'e' needed — no object is stated", "Either works", "Needs 'li' instead"],
          correct: 1,
          explanation: "Without an object, 'moku' is intransitive. 'mi moku' is a complete sentence meaning 'I eat.'"
        },
        {
          tp: "ona li jo ___ tomo",
          en: "They have a house.",
          target: "e",
          options: ["Needs 'e' — 'tomo' is what they have", "No 'e' needed — 'jo tomo' is a compound", "Either works", "'jo' can't take objects"],
          correct: 0,
          explanation: "'jo' (to have) is always transitive and needs 'e' before its object: ona li jo E tomo."
        },
        {
          tp: "jan li lukin",
          en: "The person looks/watches.",
          target: "e",
          options: ["Needs 'e' — sentence incomplete", "No 'e' needed — intransitive use of 'lukin'", "Needs 'li' instead", "'lukin' always needs 'e'"],
          correct: 1,
          explanation: "'lukin' can be intransitive (to look, to watch). This sentence is complete as is."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence. Notice how 'e' changes meaning:",
      questions: [
        { tp: "mi moku", expectedType: "ambiguous", hint: "No object — ambiguous" },
        { tp: "mi moku e pan", expectedType: "transitive", hint: "'e' clarifies 'moku' as verb" },
        { tp: "mi pona", expectedType: "ambiguous", hint: "Could be adjective or verb" },
        { tp: "mi pona e ilo", expectedType: "transitive", hint: "'e' shows 'pona' is a verb" }
      ],
      answers: ["I eat. / I am food.", "I eat bread.", "I am good. / I fix/improve.", "I fix the tool."]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["mi", "e", "moku", "kili"],
          validAnswers: ["mi moku e kili"],
          translations: ["I eat fruit."],
          hint: "'e' comes between verb and object"
        },
        {
          words: ["ona", "li", "e", "jo", "tomo", "suli"],
          validAnswers: ["ona li jo e tomo suli"],
          translations: ["They have a big house."],
          hint: "Subject + li + verb + e + object phrase"
        },
        {
          words: ["mi", "e", "moku", "pan", "e", "telo"],
          validAnswers: ["mi moku e pan e telo"],
          translations: ["I eat bread and drink water."],
          hint: "Two objects, two 'e'"
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "Without 'e', this sentence is ambiguous. Add 'e' and an object to make it clear.",
      questions: [
        {
          tp: "mi moku",
          ambiguous: ["I eat.", "I am food."],
          prompt: "Make it clearly mean 'I eat':",
          answer: "mi moku e [any food word: kili, pan, moku, ijo]",
          explanation: "Adding 'e + object' forces 'moku' to be a verb."
        },
        {
          tp: "sina pona",
          ambiguous: ["You are good.", "You fix/improve."],
          prompt: "Make it clearly mean 'You fix/improve':",
          answer: "sina pona e [any noun: ilo, tomo, ijo]",
          explanation: "Adding 'e + object' forces 'pona' to be a transitive verb."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence to match the English meaning:",
      questions: [
        { tp: "mi lukin ___ jan pona", en: "I see my friend.", answer: "e", hint: "'jan pona' is the object" },
        { tp: "ona li moku ___ telo ___ kili", en: "They eat/drink water and fruit.", answer: "e, e", hint: "Each object needs 'e'" },
        { tp: "mi wile ___ tomo", en: "I want a house.", answer: "e", hint: "'wile' as transitive = want X" },
        { tp: "sina ___ e sina", en: "You wash yourself.", answer: "telo", hint: "What verb means 'to wash'?" },
        { tp: "mi jo e ___ moku", en: "I have an eating utensil.", answer: "ilo", hint: "'ilo moku' = utensil" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'e' marks the direct object — the thing receiving the action.",
          answer: true,
          explanation: "Correct! 'e' introduces what the verb acts upon."
        },
        {
          statement: "'mi moku e' is a complete sentence.",
          answer: false,
          explanation: "No! 'e' must be followed by an object. 'mi moku e...' is incomplete."
        },
        {
          statement: "Adding 'e' can clarify whether a word is being used as a verb or adjective.",
          answer: true,
          explanation: "Yes! 'mi pona' (ambiguous) vs 'mi pona e ijo' (definitely verb)."
        },
        {
          statement: "You can have multiple objects by using 'e' before each one.",
          answer: true,
          explanation: "Exactly! 'mi moku e pan e kili' = I eat bread and fruit."
        },
        {
          statement: "'jo' can be used without 'e' like 'mi jo' meaning 'I have'.",
          answer: false,
          explanation: "'jo' is always transitive — you must have SOMETHING. 'mi jo e ijo' = I have something."
        }
      ]
    },
    
    {
      type: "transformSentence",
      instruction: "Transform the intransitive sentence into a transitive one by adding 'e' and an appropriate object:",
      questions: [
        { intransitive: "mi moku", transitive: "mi moku e kili", note: "Add what you're eating" },
        { intransitive: "ona li lukin", transitive: "ona li lukin e ma", note: "Add what they're looking at" },
        { intransitive: "sina pona", transitive: "sina pona e ilo", note: "Add what you're fixing" },
        { intransitive: "jan li telo", transitive: "jan li telo e ona", note: "Add who they're washing (themselves!)" }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tenpo moku — Mealtime",
    intro: "A story about eating. Notice every use of 'e' — what receives the action?",
    paragraphs: [
      { tp: "tenpo moku li kama.", en: "Mealtime arrives.", note: "No 'e' — 'kama' is intransitive" },
      { tp: "mi wile moku.", en: "I want to eat.", note: "'wile' as auxiliary, no object yet" },
      { tp: "mi jo e kili e pan.", en: "I have fruit and bread.", note: "Two objects with 'jo'" },
      { tp: "mi moku e kili.", en: "I eat the fruit.", note: "'e kili' = object" },
      { tp: "kili ni li pona mute!", en: "This fruit is very good!", note: "No 'e' — describing the fruit" },
      { tp: "mi moku e pan.", en: "I eat the bread.", note: "'e pan' = object" },
      { tp: "mi wile e telo.", en: "I want water.", note: "'wile' as main verb with object" },
      { tp: "mi moku e telo.", en: "I drink the water.", note: "'moku e telo' = drink water" },
      { tp: "pona! mi moku pona.", en: "Good! I eat well.", note: "No 'e' — 'pona' is adverb here" }
    ],
    comprehension: [
      { question: "How many times does 'e' appear in this story?", answer: "6 times", evidence: "Count: jo e kili e pan, moku e kili, moku e pan, wile e telo, moku e telo" },
      { question: "What two things does the speaker have?", answer: "Fruit (kili) and bread (pan)", evidence: "mi jo e kili e pan" },
      { question: "In 'mi moku pona', is 'pona' an object?", answer: "No — it's an adverb describing HOW they eat.", evidence: "No 'e' before 'pona'" }
    ],
    challenge: "The speaker never uses 'mi telo e mi' — but maybe they should wash their hands before eating! Add a sentence at the beginning using reflexive 'e'."
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "With 'e', you can now express what you DO to things. Here are useful compounds:",
    items: [
      { tp: "ilo moku", en: "eating utensil (fork, spoon, chopsticks)", literal: "tool-eating", lesson: "mi pona e ilo moku = I fix the utensil" },
      { tp: "telo moku", en: "drinking water, beverage", literal: "water-eating", lesson: "mi moku e telo moku = I drink a beverage" },
      { tp: "telo seli", en: "hot drink (coffee, tea)", literal: "water-hot", lesson: "ona li wile e telo seli = They want coffee" },
      { tp: "kili suwi", en: "sweet fruit", literal: "fruit-sweet", lesson: "'suwi' = sweet (preview)" },
      { tp: "ijo moku", en: "food, edible thing", literal: "thing-eating", lesson: "Very generic word for food" }
    ],
    teaser: "Next lesson: Modifiers! Learn how 'tomo suli' = big house (adjectives come AFTER nouns)."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "VERB + e + OBJECT", example: "mi moku e kili", meaning: "I eat fruit." },
      { pattern: "VERB + e + OBJ1 + e + OBJ2", example: "mi moku e pan e telo", meaning: "I eat bread and (drink) water." },
      { pattern: "mi/sina + VERB + e + mi/sina", example: "mi telo e mi", meaning: "I wash myself." },
      { pattern: "wile + e + OBJECT", example: "mi wile e telo", meaning: "I want water." },
      { pattern: "wile + VERB + e + OBJ", example: "mi wile moku e kili", meaning: "I want to eat fruit." }
    ],
    remember: [
      "'e' marks the direct object (receiver of action)",
      "Use multiple 'e' for multiple objects",
      "'e' clarifies ambiguous verbs: 'mi pona e ilo' = I FIX",
      "Reflexive: 'mi telo e mi' = I wash myself",
      "'jo' always needs 'e' — you must have SOMETHING"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson4;
}
