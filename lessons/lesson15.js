/**
 * Lesson 15: Society & Relationships
 * Talking about people, groups, and choices: mama, meli, mije, anu, esun, mani, utala, alasa
 */

const lesson15 = {
  id: 15,
  title: "Society & Relationships",
  desc: "Talking about people, groups, and choices with mama, meli, mije, anu, esun, mani, utala, alasa",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "This lesson covers social vocabulary for family, gender, commerce, and choices. The particle <b>anu</b> ('or') lets you offer alternatives and ask either/or questions.",
    
    concepts: [
      {
        title: "Family vocabulary: mama and jan sama",
        explanation: "<b>mama</b> means parent, ancestor, creator, or caregiver. Combined with other words, it covers family relationships. Remember <b>jan sama</b> (same-person = sibling) from earlier!",
        examples: [
          { tp: "mama mi", en: "my parent", note: "Either parent" },
          { tp: "mama meli", en: "mother (female parent)", note: "Specifying gender" },
          { tp: "mama mije", en: "father (male parent)", note: "Specifying gender" },
          { tp: "mama mama", en: "grandparent (parent's parent)", note: "Doubling for generation" },
          { tp: "jan sama mi", en: "my sibling", note: "Same-person = brother/sister" }
        ],
        pitfall: "Toki pona doesn't require gender specification. 'mama mi' can mean mom, dad, or any parent/guardian."
      },
      {
        title: "Gender words: meli and mije",
        explanation: "<b>meli</b> means woman, female, or feminine. <b>mije</b> means man, male, or masculine. These are descriptive, not required.",
        examples: [
          { tp: "meli", en: "woman, female person", note: "Basic meaning" },
          { tp: "mije", en: "man, male person", note: "Basic meaning" },
          { tp: "jan meli", en: "woman (female person)", note: "Explicit female" },
          { tp: "jan mije", en: "man (male person)", note: "Explicit male" },
          { tp: "soweli meli", en: "female animal", note: "Animal gender" },
          { tp: "jan ni li meli ala mije ala", en: "This person is neither female nor male.", note: "Non-binary option" }
        ],
        pitfall: "Gender is often unnecessary in toki pona. 'jan pona mi' doesn't specify gender — just 'my friend'."
      },
      {
        title: "The choice particle: anu",
        explanation: "<b>anu</b> means 'or'. It connects alternatives. In questions, it creates either/or choices: <b>A anu B?</b>",
        examples: [
          { tp: "kili anu pan?", en: "Fruit or bread?", note: "Offering choice" },
          { tp: "sina wile moku anu lape?", en: "Do you want to eat or sleep?", note: "Action choice" },
          { tp: "ni li pona anu ike?", en: "Is this good or bad?", note: "Quality question" },
          { tp: "sina jan meli anu jan mije?", en: "Are you a woman or a man?", note: "Identity question" },
          { tp: "mi moku e kili anu pan", en: "I eat fruit or bread.", note: "Statement with 'or'" }
        ],
        pitfall: "'anu' connects alternatives at the same grammatical level. 'mi anu sina' = me or you. 'moku anu lape' = eat or sleep."
      },
      {
        title: "Commerce: esun and mani",
        explanation: "<b>esun</b> means shop, store, market, trade, or transaction. <b>mani</b> means money, wealth, or large domesticated animal (historically linked).",
        examples: [
          { tp: "mi tawa esun", en: "I go to the store.", note: "'esun' as noun" },
          { tp: "mi esun e kili", en: "I buy/trade for fruit.", note: "'esun' as verb" },
          { tp: "ona li esun e tomo", en: "They sell the house.", note: "Selling" },
          { tp: "mi jo e mani lili", en: "I have little money.", note: "Describing wealth" },
          { tp: "mani li ike tawa mi", en: "I don't like money. (Money is bad to me.)", note: "Opinion" }
        ],
        pitfall: "'esun' as a verb can mean buy OR sell — context clarifies. 'mi esun e ni' = I trade this (buy or sell it)."
      },
      {
        title: "Conflict and effort: utala and alasa",
        explanation: "<b>utala</b> means fight, battle, conflict, or to challenge. <b>alasa</b> means hunt, search, forage, or (as auxiliary verb) to try.",
        examples: [
          { tp: "jan li utala", en: "The people fight.", note: "'utala' as verb" },
          { tp: "utala li ike", en: "Fighting/conflict is bad.", note: "'utala' as noun" },
          { tp: "mi utala e ike", en: "I fight against badness.", note: "Fighting something" },
          { tp: "mi alasa e soweli", en: "I hunt animals.", note: "Hunting" },
          { tp: "mi alasa pali e ni", en: "I try to do this.", note: "'alasa' as auxiliary = try" },
          { tp: "mi alasa sona e toki pona", en: "I try to learn toki pona.", note: "Trying to learn" }
        ],
        pitfall: "'alasa' as main verb = hunt/search. 'alasa' as auxiliary before another verb = try to."
      },
      {
        title: "Building relationship vocabulary",
        explanation: "Combine words to describe various relationships and social roles.",
        examples: [
          { tp: "jan pona", en: "friend (good person)", note: "Basic relationship" },
          { tp: "jan olin", en: "loved one, romantic partner", note: "'olin' = love" },
          { tp: "jan sama", en: "sibling (same-person)", note: "Family relation" },
          { tp: "jan poka", en: "neighbor (side-person)", note: "From Lesson 7" },
          { tp: "jan lawa", en: "leader, boss, chief", note: "'lawa' = head, lead" },
          { tp: "jan pali", en: "worker, employee", note: "'pali' = work" },
          { tp: "jan esun", en: "merchant, trader", note: "'esun' = trade" }
        ],
        pitfall: "These compound descriptions are flexible. 'jan pona' could be friend, ally, or just 'good person' depending on context."
      },
      {
        title: "Asking choice questions with anu",
        explanation: "To ask 'which one?' or 'A or B?', use <b>anu</b> between the options. The structure mirrors English 'or' questions.",
        examples: [
          { tp: "sina wile e seme? kili anu pan?", en: "What do you want? Fruit or bread?", note: "Two-part question" },
          { tp: "ni li pona anu ike tawa sina?", en: "Is this good or bad to you?", note: "Opinion choice" },
          { tp: "sina tawa ma seme? ma ni anu ma ante?", en: "Where are you going? This land or another?", note: "Location choice" },
          { tp: "tenpo seme la sina kama? tenpo ni anu tenpo kama?", en: "When will you come? Now or later?", note: "Time choice" }
        ],
        pitfall: "You can also use 'seme' alone for open questions, then 'anu' to narrow down: 'seme? ni anu ni?'"
      }
    ],
    
    keyInsight: "Toki pona's social vocabulary is minimal but flexible. Gender is optional, relationships are described by compound words, and 'anu' creates choices. This reflects toki pona's philosophy: describe what matters, don't over-categorize."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "mama",
      primaryMeaning: "parent, ancestor, creator",
      roles: {
        adjective: "parental, ancestral, original",
        noun: "parent, mother, father, ancestor, creator, caregiver, origin",
        verbTransitive: "to create, to give birth to, to nurture"
      },
      notes: "Any parental or ancestral figure. Gender-neutral by default. 'mama meli' = mother, 'mama mije' = father. Can also mean creator or origin of something.",
      compounds: [
        { tp: "mama meli", en: "mother (female parent)" },
        { tp: "mama mije", en: "father (male parent)" },
        { tp: "mama mama", en: "grandparent" },
        { tp: "mama pi mama", en: "grandparent (alt)" },
        { tp: "tomo mama", en: "family home, parent's house" }
      ]
    },
    {
      word: "meli",
      primaryMeaning: "woman, female, feminine",
      roles: {
        adjective: "female, feminine, womanly",
        noun: "woman, female, wife, girlfriend"
      },
      notes: "Describes female gender. Often optional — toki pona doesn't require gender marking. Can modify any noun: 'soweli meli' = female animal.",
      compounds: [
        { tp: "jan meli", en: "woman (female person)" },
        { tp: "mama meli", en: "mother" },
        { tp: "soweli meli", en: "female animal" },
        { tp: "meli olin", en: "wife, girlfriend, female partner" },
        { tp: "jan lili meli", en: "girl (small female person)" }
      ]
    },
    {
      word: "mije",
      primaryMeaning: "man, male, masculine",
      roles: {
        adjective: "male, masculine, manly",
        noun: "man, male, husband, boyfriend"
      },
      notes: "Describes male gender. Often optional. Can modify any noun: 'waso mije' = male bird. Counterpart to 'meli'.",
      compounds: [
        { tp: "jan mije", en: "man (male person)" },
        { tp: "mama mije", en: "father" },
        { tp: "soweli mije", en: "male animal" },
        { tp: "mije olin", en: "husband, boyfriend, male partner" },
        { tp: "jan lili mije", en: "boy (small male person)" }
      ]
    },
    {
      word: "anu",
      primaryMeaning: "or (choice between options)",
      roles: {
        conjunction: "or (connecting alternatives)",
        particle: "or (in questions)"
      },
      notes: "Connects alternatives at the same grammatical level. In questions, creates either/or choices: 'A anu B?' Unlike 'en' (and), 'anu' presents options.",
      compounds: [
        { tp: "ni anu ni", en: "this or that" },
        { tp: "pona anu ike", en: "good or bad" },
        { tp: "lon anu lon ala", en: "true or false" },
        { tp: "mi anu sina", en: "me or you" },
        { tp: "tenpo ni anu tenpo kama", en: "now or later" }
      ]
    },
    {
      word: "esun",
      primaryMeaning: "shop, trade, market, buy/sell",
      roles: {
        adjective: "commercial, trade-related",
        noun: "shop, store, market, marketplace, trade, transaction",
        verbTransitive: "to buy, to sell, to trade"
      },
      notes: "Covers all commercial activity. 'mi esun e X' = I buy/sell X (context determines direction). 'tawa esun' = go shopping.",
      compounds: [
        { tp: "tomo esun", en: "shop, store building" },
        { tp: "jan esun", en: "merchant, trader, shopkeeper" },
        { tp: "tenpo esun", en: "market day, shopping time" },
        { tp: "nasin esun", en: "commercial practice, business method" },
        { tp: "esun suli", en: "big store, major trade" }
      ]
    },
    {
      word: "mani",
      primaryMeaning: "money, wealth, currency",
      roles: {
        adjective: "monetary, wealthy, valuable",
        noun: "money, currency, wealth, large domesticated animal (historical)"
      },
      notes: "Primarily means money/wealth. Historical meaning includes cattle (as early form of wealth). 'jan mani' = wealthy person.",
      compounds: [
        { tp: "jan mani", en: "wealthy person, rich person" },
        { tp: "mani lili", en: "little money, small amount" },
        { tp: "mani suli", en: "lots of money, wealth" },
        { tp: "poki mani", en: "wallet, money container" },
        { tp: "wile mani", en: "greed (wanting money)" }
      ]
    },
    {
      word: "utala",
      primaryMeaning: "fight, battle, conflict, challenge",
      roles: {
        adjective: "fighting, combative, aggressive",
        noun: "fight, battle, war, conflict, competition",
        verbIntransitive: "to fight, to struggle",
        verbTransitive: "to fight against, to attack, to challenge"
      },
      notes: "Any form of conflict or combat. Can be physical ('utala e ona' = fight them) or abstract ('utala e ike' = fight against badness).",
      compounds: [
        { tp: "jan utala", en: "warrior, fighter, soldier" },
        { tp: "ilo utala", en: "weapon" },
        { tp: "utala suli", en: "war, major conflict" },
        { tp: "utala musi", en: "sport, competition, game-fight" },
        { tp: "tenpo utala", en: "wartime, time of conflict" }
      ]
    },
    {
      word: "alasa",
      primaryMeaning: "hunt, search, forage, try",
      roles: {
        noun: "hunting, search, foraging",
        verbIntransitive: "to hunt, to search, to forage",
        verbTransitive: "to hunt (something), to search for",
        auxiliaryVerb: "to try to, to attempt to"
      },
      notes: "As main verb: hunt/search. As auxiliary (before another verb): try to. 'mi alasa moku' = I hunt/forage for food. 'mi alasa pali' = I try to work.",
      compounds: [
        { tp: "jan alasa", en: "hunter, searcher" },
        { tp: "alasa moku", en: "foraging, food hunting" },
        { tp: "alasa sona", en: "research, seeking knowledge" },
        { tp: "tenpo alasa", en: "hunting season, search time" },
        { tp: "alasa pona", en: "good luck hunting, try well" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    familyRelationships: [
      { tp: "mama mi li pona", en: "My parent is good.", gloss: "parent + my | (li) | good", note: "Either parent" },
      { tp: "mama meli mi li jan pona", en: "My mother is a good person.", gloss: "parent + female + my | (li) | person + good", note: "Specifying mother" },
      { tp: "mama mije ona li wawa", en: "Their father is strong.", gloss: "parent + male + their | (li) | strong", note: "Specifying father" },
      { tp: "jan sama mi li mute", en: "I have many siblings.", gloss: "person + same + my | (li) | many", note: "'jan sama' = sibling" },
      { tp: "mama mama mi li moli", en: "My grandparent died.", gloss: "parent + parent + my | (li) | dead", note: "Grandparent" }
    ],
    
    genderExamples: [
      { tp: "jan meli li pali", en: "The woman works.", gloss: "person + female | (li) | work", note: "Specifying female" },
      { tp: "jan mije li moku", en: "The man eats.", gloss: "person + male | (li) | eat", note: "Specifying male" },
      { tp: "soweli meli li mama", en: "The female animal is a mother.", gloss: "animal + female | (li) | parent", note: "Animal gender" },
      { tp: "ona li meli ala li mije ala", en: "They are neither female nor male.", gloss: "they | (li) | female + not | (li) | male + not", note: "Non-binary" },
      { tp: "jan pona mi li meli", en: "My friend is a woman.", gloss: "person + good + my | (li) | female", note: "Describing friend" }
    ],
    
    anuChoices: [
      { tp: "sina wile e kili anu pan?", en: "Do you want fruit or bread?", gloss: "you | want | (e) | fruit | or | bread", note: "Food choice question" },
      { tp: "ni li pona anu ike?", en: "Is this good or bad?", gloss: "this | (li) | good | or | bad", note: "Quality question" },
      { tp: "sina kama anu tawa?", en: "Are you coming or going?", gloss: "you | come | or | go", note: "Direction question" },
      { tp: "mi moku e kili anu pan", en: "I eat fruit or bread.", gloss: "I | eat | (e) | fruit | or | bread", note: "Statement with choice" },
      { tp: "seme li pona? ni anu ni?", en: "What is good? This or that?", gloss: "what | (li) | good | this | or | this", note: "Narrowing down" }
    ],
    
    commerceExamples: [
      { tp: "mi tawa esun", en: "I go to the store.", gloss: "I | go | shop", note: "'esun' as destination" },
      { tp: "mi esun e kili", en: "I buy/sell fruit.", gloss: "I | trade | (e) | fruit", note: "'esun' as verb" },
      { tp: "jan esun li jo e ijo mute", en: "The merchant has many things.", gloss: "person + trade | (li) | have | (e) | thing + many", note: "Describing merchant" },
      { tp: "mi jo ala e mani", en: "I don't have money.", gloss: "I | have + not | (e) | money", note: "No money" },
      { tp: "tomo esun li suli", en: "The store is big.", gloss: "building + trade | (li) | big", note: "Describing store" }
    ],
    
    conflictExamples: [
      { tp: "jan li utala", en: "People fight.", gloss: "person | (li) | fight", note: "General fighting" },
      { tp: "utala li ike", en: "Fighting/war is bad.", gloss: "fight | (li) | bad", note: "Opinion on conflict" },
      { tp: "mi utala e jan ike", en: "I fight the bad person.", gloss: "I | fight | (e) | person + bad", note: "Fighting someone" },
      { tp: "jan utala li wawa", en: "The warrior is strong.", gloss: "person + fight | (li) | strong", note: "Warrior description" },
      { tp: "mi wile ala utala", en: "I don't want to fight.", gloss: "I | want + not | fight", note: "Avoiding conflict" }
    ],
    
    alasaExamples: [
      { tp: "mi alasa e soweli", en: "I hunt animals.", gloss: "I | hunt | (e) | animal", note: "Hunting" },
      { tp: "jan alasa li tawa ma", en: "The hunter goes to the land.", gloss: "person + hunt | (li) | go | land", note: "Hunter traveling" },
      { tp: "mi alasa pali e ni", en: "I try to do this.", gloss: "I | try | do | (e) | this", note: "'alasa' as auxiliary" },
      { tp: "ona li alasa sona e toki pona", en: "They try to learn toki pona.", gloss: "they | (li) | try | know | (e) | language + simple", note: "Trying to learn" },
      { tp: "mi alasa moku", en: "I forage / hunt for food.", gloss: "I | hunt | food", note: "Food searching" }
    ],
    
    relationshipWords: [
      { tp: "jan olin mi li pona", en: "My loved one is good.", gloss: "person + love + my | (li) | good", note: "Romantic partner" },
      { tp: "jan pona mi li mute", en: "I have many friends.", gloss: "person + good + my | (li) | many", note: "Friends" },
      { tp: "jan lawa li toki", en: "The leader speaks.", gloss: "person + head | (li) | speak", note: "Boss/chief" },
      { tp: "jan pali li wile lape", en: "The worker wants to sleep.", gloss: "person + work | (li) | want | sleep", note: "Employee" },
      { tp: "jan poka mi li suli", en: "My neighbor is big.", gloss: "person + side + my | (li) | big", note: "Neighbor" }
    ],
    
    ambiguous: [
      { tp: "mi esun e tomo", meanings: ["I buy a house", "I sell a house"], likely: "Context determines direction", note: "'esun' = trade (either way)" },
      { tp: "mama mi", meanings: ["my mother", "my father", "my parent", "my guardian"], likely: "Any parental figure", note: "Gender-neutral by default" },
      { tp: "mi alasa moku", meanings: ["I hunt food", "I forage for food", "I try to eat"], likely: "Usually hunting/foraging", note: "'alasa' + noun = hunt/search for it" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What does this word mean in context?",
      questions: [
        {
          tp: "**mama** mi li pona",
          target: "mama",
          en: "my parent is good",
          options: ["child", "parent", "sibling", "friend"],
          correct: 1,
          explanation: "'mama' means parent, ancestor, or creator."
        },
        {
          tp: "jan **meli** li pali",
          target: "meli",
          en: "the woman works",
          options: ["man", "woman", "child", "elder"],
          correct: 1,
          explanation: "'meli' means woman, female, or feminine."
        },
        {
          tp: "sina wile e kili **anu** pan?",
          target: "anu",
          en: "do you want fruit or bread?",
          options: ["and", "or", "but", "with"],
          correct: 1,
          explanation: "'anu' means 'or' — it presents alternatives."
        },
        {
          tp: "mi tawa **esun**",
          target: "esun",
          en: "I go to the store",
          options: ["home", "store/market", "work", "school"],
          correct: 1,
          explanation: "'esun' means shop, store, market, or trade."
        },
        {
          tp: "mi **alasa** pali e ni",
          target: "alasa",
          en: "I try to do this",
          options: ["want to", "try to", "need to", "have to"],
          correct: 1,
          explanation: "'alasa' as auxiliary verb means 'try to'."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct word:",
      questions: [
        {
          tp: "_____ mi li pona",
          en: "My parent is good.",
          answer: "mama",
          hint: "Word for parent"
        },
        {
          tp: "sina wile e kili _____ pan?",
          en: "Do you want fruit OR bread?",
          answer: "anu",
          hint: "Word for 'or'"
        },
        {
          tp: "mi tawa _____",
          en: "I go to the store.",
          answer: "esun",
          hint: "Word for store/market"
        },
        {
          tp: "mi jo ala e _____",
          en: "I don't have money.",
          answer: "mani",
          hint: "Word for money"
        },
        {
          tp: "jan li _____",
          en: "People fight.",
          answer: "utala",
          hint: "Word for fight"
        },
        {
          tp: "mi _____ sona e toki pona",
          en: "I try to learn toki pona.",
          answer: "alasa",
          hint: "Word for 'try'"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "mama meli mi li wawa", expectedType: "family", hint: "Female parent" },
        { tp: "sina wile tawa anu awen?", expectedType: "choice", hint: "Go or stay?" },
        { tp: "mi esun e moku", expectedType: "commerce", hint: "Trading food" },
        { tp: "jan utala li kama", expectedType: "conflict", hint: "Warrior" },
        { tp: "mi alasa e sona", expectedType: "searching", hint: "Seeking knowledge" },
        { tp: "jan lawa li toki tawa mi", expectedType: "relationship", hint: "Leader/boss" }
      ],
      answers: [
        "My mother is strong.",
        "Do you want to go or stay?",
        "I buy/sell food.",
        "The warrior/fighter is coming.",
        "I search for knowledge. / I research.",
        "The leader/boss speaks to me."
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'mama' always means 'mother' specifically.",
          answer: false,
          explanation: "'mama' is gender-neutral — it can mean mother, father, or any parent/guardian."
        },
        {
          statement: "'anu' means 'or' and connects alternatives.",
          answer: true,
          explanation: "Correct! 'kili anu pan' = fruit or bread."
        },
        {
          statement: "'esun' only means 'to buy', never 'to sell'.",
          answer: false,
          explanation: "'esun' means trade — it can be buying OR selling depending on context."
        },
        {
          statement: "'alasa' before another verb means 'try to'.",
          answer: true,
          explanation: "Yes! 'mi alasa pali' = I try to work."
        },
        {
          statement: "You MUST specify gender with 'meli' or 'mije' when talking about people.",
          answer: false,
          explanation: "Gender is optional in toki pona. 'jan pona mi' doesn't require gender specification."
        },
        {
          statement: "'utala' can be used for both physical fights and abstract conflicts.",
          answer: true,
          explanation: "Correct! 'utala e jan' = fight someone. 'utala e ike' = fight against badness."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["sina", "wile", "e", "kili", "anu", "pan"],
          validAnswers: ["sina wile e kili anu pan"],
          translations: ["Do you want fruit or bread?"],
          hint: "Question offering choice"
        },
        {
          words: ["mama", "meli", "mi", "li", "pona"],
          validAnswers: ["mama meli mi li pona"],
          translations: ["My mother is good."],
          hint: "Subject with modifiers + li + predicate"
        },
        {
          words: ["mi", "alasa", "sona", "e", "toki", "pona"],
          validAnswers: ["mi alasa sona e toki pona"],
          translations: ["I try to learn toki pona."],
          hint: "'alasa' as auxiliary before 'sona'"
        },
        {
          words: ["jan", "utala", "li", "jo", "e", "ilo", "utala"],
          validAnswers: ["jan utala li jo e ilo utala"],
          translations: ["The warrior has a weapon."],
          hint: "Compound noun subjects"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Is 'alasa' being used as a MAIN VERB or an AUXILIARY VERB?",
      questions: [
        {
          tp: "mi **alasa** e soweli",
          target: "alasa",
          en: "I hunt animals",
          options: ["Main verb (to hunt)", "Auxiliary verb (to try)"],
          correct: 0,
          explanation: "'alasa' + 'e' + object = hunting something. Main verb."
        },
        {
          tp: "mi **alasa** pali e ni",
          target: "alasa",
          en: "I try to do this",
          options: ["Main verb (to hunt)", "Auxiliary verb (to try)"],
          correct: 1,
          explanation: "'alasa' + another verb = try to. Auxiliary verb."
        },
        {
          tp: "ona li **alasa** moku",
          target: "alasa",
          en: "they forage for food / they try to eat",
          options: ["Main verb (forage/hunt)", "Auxiliary verb (try to)", "Could be either"],
          correct: 2,
          explanation: "Ambiguous! Could mean 'forage for food' or 'try to eat' — context decides."
        },
        {
          tp: "mi **alasa** sona e ni",
          target: "alasa",
          en: "I try to learn this",
          options: ["Main verb (to hunt)", "Auxiliary verb (to try)"],
          correct: 1,
          explanation: "'alasa' + 'sona' = try to know/learn. Auxiliary verb."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This sentence has multiple possible meanings:",
      questions: [
        {
          tp: "mi esun e tomo",
          meanings: 2,
          answers: ["I buy a house", "I sell a house"],
          followUp: "How would you know which meaning?",
          likelyAnswer: "Context! Are you looking for a house (buying) or do you own one you want to sell?"
        },
        {
          tp: "mama mi li kama",
          meanings: 3,
          answers: ["My mother is coming", "My father is coming", "My parent is coming"],
          followUp: "Is there a default meaning?",
          likelyAnswer: "Default is any parent — gender unspecified unless you add 'meli' or 'mije'."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "esun pi tenpo suno — Market Day",
    intro: "A story about going shopping and meeting people. Notice the social vocabulary!",
    paragraphs: [
      { tp: "tenpo suno ni la mi tawa esun.", en: "Today I go to the market.", note: "Setting the scene" },
      { tp: "mama meli mi li kama poka mi.", en: "My mother comes with me.", note: "Companion" },
      { tp: "esun li jo e ijo mute.", en: "The market has many things.", note: "Describing market" },
      { tp: "jan esun li toki: 'sina wile e seme?'", en: "The merchant says: 'What do you want?'", note: "Merchant interaction" },
      { tp: "mi toki: 'mi wile e kili anu pan.'", en: "I say: 'I want fruit or bread.'", note: "Using 'anu'" },
      { tp: "ona li pana e kili. mi pana e mani.", en: "They give fruit. I give money.", note: "Transaction" },
      { tp: "jan meli li kama. ona li jan pona mi!", en: "A woman comes. She's my friend!", note: "Meeting friend" },
      { tp: "mi toki tawa ona: 'kama pona!'", en: "I say to her: 'Welcome!'", note: "Greeting" },
      { tp: "mi mute li moku e kili lon esun.", en: "We eat fruit at the market.", note: "Enjoying together" },
      { tp: "tenpo pona a!", en: "Good times!", note: "Closing sentiment" }
    ],
    comprehension: [
      { question: "Who goes to the market with the speaker?", answer: "Their mother (mama meli)", evidence: "mama meli mi li kama poka mi" },
      { question: "What does the speaker want to buy?", answer: "Fruit or bread (kili anu pan)", evidence: "mi wile e kili anu pan" },
      { question: "Who does the speaker meet at the market?", answer: "A friend (jan pona)", evidence: "ona li jan pona mi" },
      { question: "What do they do together?", answer: "Eat fruit (moku e kili)", evidence: "mi mute li moku e kili lon esun" }
    ],
    challenge: "Write a conversation at a store using 'anu' to offer choices and 'esun' for buying/selling!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Social vocabulary creates many useful compound descriptions:",
    items: [
      { tp: "mama meli", en: "mother (female parent)", literal: "parent + female", lesson: "Specifying gender" },
      { tp: "mama mije", en: "father (male parent)", literal: "parent + male", lesson: "Specifying gender" },
      { tp: "mama mama", en: "grandparent", literal: "parent + parent", lesson: "Generation back" },
      { tp: "jan sama", en: "sibling (same-person)", literal: "person + same", lesson: "Family relation" },
      { tp: "jan olin", en: "loved one, partner", literal: "person + love", lesson: "Romantic relation" },
      { tp: "jan esun", en: "merchant, trader", literal: "person + trade", lesson: "Occupation" },
      { tp: "jan utala", en: "warrior, fighter", literal: "person + fight", lesson: "Combat role" },
      { tp: "jan alasa", en: "hunter, searcher", literal: "person + hunt", lesson: "Hunter role" },
      { tp: "tomo esun", en: "shop, store", literal: "building + trade", lesson: "Commercial building" },
      { tp: "ilo utala", en: "weapon", literal: "tool + fight", lesson: "Fighting tool" }
    ],
    teaser: "Next lesson: Unofficial Words (Names)! Learn how to create and use proper nouns for people, places, and languages."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "mama + meli/mije", example: "mama meli mi", meaning: "my mother" },
      { pattern: "jan + meli/mije", example: "jan meli li pali", meaning: "the woman works" },
      { pattern: "A anu B?", example: "kili anu pan?", meaning: "fruit or bread?" },
      { pattern: "mi esun e X", example: "mi esun e kili", meaning: "I buy/sell fruit" },
      { pattern: "jan utala", example: "jan utala li wawa", meaning: "the warrior is strong" },
      { pattern: "alasa + VERB", example: "mi alasa sona", meaning: "I try to learn" },
      { pattern: "alasa + e + NOUN", example: "mi alasa e soweli", meaning: "I hunt animals" }
    ],
    remember: [
      "mama = parent (gender-neutral) | mama meli = mother | mama mije = father",
      "meli = woman, female | mije = man, male",
      "anu = or (connects alternatives)",
      "esun = shop, trade, buy/sell",
      "mani = money, wealth",
      "utala = fight, battle, conflict",
      "alasa = hunt, search | alasa + verb = try to",
      "Gender is OPTIONAL in toki pona",
      "jan sama = sibling | jan olin = loved one | jan pona = friend"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson15;
}
