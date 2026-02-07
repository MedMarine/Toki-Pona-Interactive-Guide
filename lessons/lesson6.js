/**
 * Lesson 6: Indirect Objects & Prepositions
 * Expressing location, motion, and instruments with tawa, lon, kepeken, tan
 */

const lesson6 = {
  id: 6,
  title: "Indirect Objects & Prepositions",
  desc: "Expressing location, motion, purpose, and instruments with tawa, lon, kepeken, tan",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Prepositions like <b>tawa</b> (to/for), <b>lon</b> (at/in), <b>kepeken</b> (using), and <b>tan</b> (from/because) introduce indirect objects — information about WHERE, HOW, or WHY an action happens.",
    
    concepts: [
      {
        title: "Direct vs. indirect objects",
        explanation: "Direct objects (with <b>e</b>) receive the action directly. Indirect objects give additional context: WHERE, TO WHOM, WITH WHAT, or WHY something happens. They're introduced by prepositions.",
        examples: [
          { tp: "mi pana e kili", en: "I give fruit.", note: "Direct object only — WHAT is given" },
          { tp: "mi pana e kili tawa sina", en: "I give fruit TO YOU.", note: "Direct + indirect — WHAT and TO WHOM" },
          { tp: "mi moku", en: "I eat.", note: "No objects" },
          { tp: "mi moku lon tomo", en: "I eat IN THE HOUSE.", note: "Indirect object — WHERE" }
        ],
        pitfall: "Direct objects need 'e'. Indirect objects use prepositions (tawa, lon, kepeken, tan)."
      },
      {
        title: "tawa — motion, direction, purpose",
        explanation: "<b>tawa</b> expresses motion toward, direction, purpose ('for'), or the recipient of an action. Think: 'to', 'toward', 'for', 'in order to'.",
        examples: [
          { tp: "mi tawa tomo", en: "I go to the house.", note: "'tawa' as verb = go; 'tomo' is destination" },
          { tp: "mi tawa, tawa tomo", en: "I go to the house.", note: "Verb 'tawa' + preposition 'tawa'" },
          { tp: "mi pana e ni tawa sina", en: "I give this to you.", note: "'tawa sina' = to you (recipient)" },
          { tp: "ni li pona tawa mi", en: "This is good to me. / I like this.", note: "'tawa mi' = to me (opinion pattern)" },
          { tp: "mi pali tawa jan lili", en: "I work for the child.", note: "'tawa' = for (purpose/beneficiary)" }
        ],
        pitfall: "When 'tawa' is both verb AND preposition, use a comma: 'mi tawa, tawa tomo'."
      },
      {
        title: "lon — location, existence, presence",
        explanation: "<b>lon</b> expresses location ('at', 'in', 'on') or confirms existence/presence. As a verb, it means 'to exist' or 'to be at'.",
        examples: [
          { tp: "mi lon tomo", en: "I am at the house.", note: "'lon' as verb = to be located" },
          { tp: "mi moku lon tomo", en: "I eat at the house.", note: "'lon tomo' = prepositional phrase (where)" },
          { tp: "kili li lon poki", en: "The fruit is in the container.", note: "'lon' as verb + location" },
          { tp: "ona li pali lon ma ni", en: "They work in this place.", note: "'lon ma ni' = in this place" },
          { tp: "suno li lon sewi", en: "The sun is in the sky.", note: "'sewi' = above, sky" }
        ],
        pitfall: "'mi lon tomo' can mean 'I am at home' (verb) or 'I exist at home' (verb). Context clarifies."
      },
      {
        title: "kepeken — using, with (instrument)",
        explanation: "<b>kepeken</b> means 'using' or 'with' (an instrument or tool). It answers HOW or WITH WHAT something is done.",
        examples: [
          { tp: "mi moku kepeken ilo", en: "I eat using a utensil.", note: "'kepeken ilo' = with a tool" },
          { tp: "mi pali kepeken luka mi", en: "I work using my hands.", note: "'luka' = hand, arm" },
          { tp: "ona li toki kepeken toki pona", en: "They speak using Toki Pona.", note: "Speaking with a language" },
          { tp: "mi lukin kepeken ilo lukin", en: "I look using glasses.", note: "'ilo lukin' = viewing tool" },
          { tp: "jan li pona e tomo kepeken ilo", en: "The person fixes the house using a tool.", note: "Direct obj + instrument" }
        ],
        pitfall: "'kepeken' can also be an intransitive verb: 'mi kepeken ilo' = I use a tool."
      },
      {
        title: "tan — from, because, origin",
        explanation: "<b>tan</b> expresses origin ('from'), cause ('because of'), or reason ('since'). It answers WHERE FROM or WHY.",
        examples: [
          { tp: "mi tan ma suli", en: "I am from a big country.", note: "'tan' = from (origin)" },
          { tp: "ona li kama tan tomo ona", en: "They come from their house.", note: "'kama tan' = come from" },
          { tp: "mi moku tan ni: mi wile moku", en: "I eat because of this: I want to eat.", note: "'tan ni:' = because" },
          { tp: "mi pilin pona tan sina", en: "I feel good because of you.", note: "'tan sina' = because of you" }
        ],
        pitfall: "For complex reasons, use 'tan ni:' followed by a full sentence."
      },
      {
        title: "Preposition placement in sentences",
        explanation: "Prepositional phrases usually come at the END of a sentence, after any direct objects. Optional commas can clarify.",
        examples: [
          { tp: "mi pana e moku tawa sina", en: "I give food to you.", note: "Direct obj + prepositional phrase" },
          { tp: "mi pana e moku, tawa sina", en: "I give food, to you.", note: "Comma adds clarity" },
          { tp: "ona li pali e ilo lon tomo", en: "They make a tool at the house.", note: "Direct obj + location" },
          { tp: "jan li moku e kili kepeken ilo", en: "The person eats fruit with a utensil.", note: "Obj + instrument" }
        ],
        pitfall: "Don't put prepositional phrases before the direct object!"
      },
      {
        title: "The opinion pattern: li pona/ike tawa",
        explanation: "To express likes and dislikes, Toki Pona uses 'X li pona/ike tawa mi' — literally 'X is good/bad to me'.",
        examples: [
          { tp: "ni li pona tawa mi", en: "This is good to me. / I like this.", note: "The standard 'like' pattern" },
          { tp: "moku ni li pona tawa mi", en: "This food is good to me. / I like this food.", note: "Specific subject" },
          { tp: "toki pona li pona tawa mi", en: "Toki Pona is good to me. / I like Toki Pona.", note: "Expressing preference" },
          { tp: "pipi li ike tawa mi", en: "Bugs are bad to me. / I don't like bugs.", note: "'ike tawa' = dislike" },
          { tp: "ni li pona ala tawa ona", en: "This isn't good to them. / They don't like this.", note: "Negated preference" }
        ],
        pitfall: "This is NOT 'I am good to this' — the thing comes FIRST, then 'li pona tawa mi'."
      },
      {
        title: "Intransitive verbs with indirect objects",
        explanation: "Some verbs are INTRANSITIVE (no <b>e</b>) but still take indirect objects. These verbs don't act ON something, but relate TO something.",
        examples: [
          { tp: "mi tawa tomo", en: "I go to the house.", note: "'tawa' = intransitive verb + destination" },
          { tp: "mi lon tomo", en: "I am at the house.", note: "'lon' = intransitive verb + location" },
          { tp: "mi kepeken ilo", en: "I use a tool.", note: "'kepeken' = intransitive verb + instrument" },
          { tp: "ona li kama tawa ma mi", en: "They come to my land.", note: "'kama' + destination" },
          { tp: "jan li toki tawa mi", en: "The person speaks to me.", note: "'toki' + recipient" }
        ],
        pitfall: "No 'e' before the indirect object! 'mi tawa tomo' NOT 'mi tawa e tomo'."
      }
    ],
    
    keyInsight: "Prepositions add context to actions: WHERE (lon), TO/FOR (tawa), WITH/USING (kepeken), FROM/BECAUSE (tan). They create indirect objects that don't use 'e'. Master these four and you can describe almost any situation!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "tawa",
      primaryMeaning: "to, toward, for, movement",
      roles: {
        adjective: "moving, mobile",
        adverb: "movingly",
        noun: "movement, transportation",
        preposition: "to, toward, for, in order to, from the perspective of",
        verbIntransitive: "to go, to walk, to travel, to move, to leave",
        verbTransitive: "to move (something), to displace"
      },
      notes: "One of the most important and versatile words! As a preposition, it indicates direction, recipient, or beneficiary. The phrase 'li pona tawa mi' means 'I like it'.",
      compounds: [
        { tp: "tomo tawa", en: "vehicle, car (moving house)" },
        { tp: "tawa pona", en: "good journey, bon voyage" },
        { tp: "tawa musi", en: "dance (move entertainingly)" },
        { tp: "nasin tawa", en: "road, path, way to go" },
        { tp: "pona tawa mi", en: "good to me, I like it" }
      ]
    },
    {
      word: "lon",
      primaryMeaning: "at, in, on; to exist",
      roles: {
        adjective: "true, existing, real, present",
        noun: "existence, being, presence, reality",
        preposition: "at, in, on, located in",
        verbIntransitive: "to exist, to be present, to be real, to be there",
        verbTransitive: "to create, to give birth to"
      },
      notes: "Covers existence and location. 'mi lon' = I exist. 'mi lon tomo' = I am at the house. 'lon ni' = here, at this place.",
      compounds: [
        { tp: "lon ni", en: "here, at this place" },
        { tp: "lon sewi", en: "in the sky, above" },
        { tp: "lon anpa", en: "below, underneath" },
        { tp: "lon poka", en: "beside, next to" },
        { tp: "lon insa", en: "inside, within" }
      ]
    },
    {
      word: "kepeken",
      primaryMeaning: "to use, using, with (instrument)",
      roles: {
        noun: "use, usage, tool (rare)",
        preposition: "using, with, by means of",
        verbIntransitive: "to use"
      },
      notes: "Introduces the instrument or means of an action. 'kepeken ilo' = using a tool. Can also be an intransitive verb meaning 'to use'.",
      compounds: [
        { tp: "kepeken ilo", en: "using a tool" },
        { tp: "kepeken luka", en: "by hand, manually" },
        { tp: "kepeken toki pona", en: "in Toki Pona, using Toki Pona" },
        { tp: "kepeken wawa", en: "using strength, forcefully" }
      ]
    },
    {
      word: "tan",
      primaryMeaning: "from, because of, origin",
      roles: {
        adjective: "causal (rare)",
        noun: "origin, cause, reason",
        preposition: "from, by, because of, since",
        verbIntransitive: "to come from, to originate"
      },
      notes: "Expresses source, origin, or reason. 'tan ni:' introduces a reason clause. 'mi tan ma Mewika' = I'm from America.",
      compounds: [
        { tp: "tan ni", en: "because of this, therefore" },
        { tp: "tan seme", en: "why? from what?" },
        { tp: "tan ma X", en: "from country X" },
        { tp: "tan tenpo pini", en: "from the past, since before" }
      ]
    },
    {
      word: "pana",
      primaryMeaning: "give, send, emit",
      roles: {
        adjective: "giving, generous",
        noun: "gift, giving, transfer, exchange",
        verbTransitive: "to give, to send, to put, to place, to release, to emit, to cause"
      },
      notes: "The core 'giving' verb. Usually takes both a direct object (what's given) and 'tawa' (to whom). 'pana e X tawa Y' = give X to Y.",
      compounds: [
        { tp: "pana e sona", en: "to teach (give knowledge)" },
        { tp: "pana e toki", en: "to say, to tell (give speech)" },
        { tp: "pana e moku", en: "to feed, to serve food" },
        { tp: "pana suli", en: "generous gift, big contribution" }
      ]
    },
    {
      word: "kama",
      primaryMeaning: "come, arrive, become",
      roles: {
        adjective: "coming, arriving, future",
        noun: "arrival, coming, event",
        verbIntransitive: "to come, to arrive",
        auxiliaryVerb: "to become, to start to, to manage to"
      },
      notes: "Expresses arrival and becoming. 'kama tawa X' = come to X. As auxiliary: 'kama sona' = come to know = learn.",
      compounds: [
        { tp: "kama pona", en: "welcome! (come well)" },
        { tp: "kama sona", en: "to learn (come to know)" },
        { tp: "kama jo", en: "to get, to obtain (come to have)" },
        { tp: "tenpo kama", en: "future (coming time)" }
      ]
    },
    {
      word: "poki",
      primaryMeaning: "container, box, bowl",
      roles: {
        noun: "container, box, bowl, cup, glass, bag, vessel",
        verbTransitive: "to box up, to contain, to bottle"
      },
      notes: "Any container: boxes, bags, bowls, cups, bottles, etc. The thing that holds other things.",
      compounds: [
        { tp: "poki moku", en: "bowl, plate, food container" },
        { tp: "poki telo", en: "cup, glass, bottle" },
        { tp: "poki suli", en: "large container, box" },
        { tp: "poki lili", en: "small container" }
      ]
    },
    {
      word: "kiwen",
      primaryMeaning: "hard, rock, metal",
      roles: {
        adjective: "hard, solid, stone-like, metal",
        noun: "rock, stone, metal, hard thing, mineral"
      },
      notes: "Covers all hard materials: rocks, metals, gems, concrete. Opposite of 'ko' (soft substance).",
      compounds: [
        { tp: "kiwen suli", en: "boulder, large rock" },
        { tp: "kiwen lili", en: "pebble, small stone" },
        { tp: "ilo kiwen", en: "metal tool, hard tool" },
        { tp: "tomo kiwen", en: "stone building" }
      ]
    },
    {
      word: "kon",
      primaryMeaning: "air, breath, spirit, essence",
      roles: {
        adjective: "air-like, ethereal, gaseous",
        noun: "air, wind, breath, spirit, soul, essence, ghost",
        verbIntransitive: "to breathe",
        verbTransitive: "to blow away"
      },
      notes: "Covers physical air/wind AND abstract concepts like spirit, soul, or essence of something.",
      compounds: [
        { tp: "kon tawa", en: "wind (moving air)" },
        { tp: "tomo tawa kon", en: "airplane (air-vehicle)" },
        { tp: "kon pona", en: "fresh air, good spirit" },
        { tp: "kon ike", en: "bad smell, bad spirit" }
      ]
    },
    {
      word: "pipi",
      primaryMeaning: "bug, insect",
      roles: {
        noun: "bug, insect, spider, small crawling creature"
      },
      notes: "All bugs: insects, spiders, ants, etc. Small crawling/flying creatures that aren't birds (waso) or mammals (soweli).",
      compounds: [
        { tp: "pipi lili", en: "small bug, ant" },
        { tp: "pipi suli", en: "large bug, beetle" },
        { tp: "pipi tawa", en: "crawling/flying bug" }
      ]
    },
    {
      word: "sama",
      primaryMeaning: "same, similar, like, as",
      roles: {
        adjective: "same, similar, equal, sibling",
        preposition: "like, as, same as, similar to",
        noun: "similarity, sameness, sibling",
        verbTransitive: "to make similar, to equalize"
      },
      notes: "Works both as an adjective ('ona li sama' = they are the same) AND as a preposition ('ona li lukin sama mi' = they look like me). Very useful for comparisons.",
      compounds: [
        { tp: "jan sama", en: "sibling (same-person)" },
        { tp: "sama ni", en: "like this, similarly" },
        { tp: "mi sama sina", en: "I am like you" },
        { tp: "ona li pali sama mi", en: "they work like me" }
      ],
      examples: {
        asAdjective: "tomo tu li sama — the two houses are the same",
        asPreposition: "ona li moku sama soweli — they eat like an animal",
        asNoun: "jan sama mi — my sibling (my same-person)",
        inComparison: "ni li pona sama ni — this is as good as that"
      }
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    tawaAsPreposition: [
      { tp: "mi pana e kili tawa sina", en: "I give fruit to you.", gloss: "I | give | (e) | fruit | to | you", note: "'tawa sina' = to you (recipient)" },
      { tp: "ona li toki tawa mi", en: "They speak to me.", gloss: "they | (li) | speak | to | me", note: "'toki tawa' = speak to" },
      { tp: "mi pali tawa jan lili", en: "I work for the child.", gloss: "I | work | for | person + small", note: "'tawa' = for (beneficiary)" },
      { tp: "ni li pona tawa mi", en: "I like this. (This is good to me.)", gloss: "this | (li) | good | to | me", note: "Opinion pattern" },
      { tp: "moku li ike tawa ona", en: "They don't like the food. (Food is bad to them.)", gloss: "food | (li) | bad | to | them", note: "Dislike pattern" }
    ],
    
    tawaAsVerb: [
      { tp: "mi tawa tomo", en: "I go to the house.", gloss: "I | go | house", note: "'tawa' as intransitive verb" },
      { tp: "ona li tawa ma suli", en: "They go to the big land.", gloss: "they | (li) | go | land + big", note: "Motion toward" },
      { tp: "mi tawa, tawa tomo", en: "I go, to the house.", gloss: "I | go | to | house", note: "Verb + preposition (comma helps)" },
      { tp: "jan li tawa e kiwen", en: "The person moves the rock.", gloss: "person | (li) | move | (e) | rock", note: "'tawa' as transitive = to move something" },
      { tp: "mi tawa e mi, tawa tomo", en: "I move myself to the house.", gloss: "I | move | (e) | myself | to | house", note: "Reflexive + destination" }
    ],
    
    lonAsPreposition: [
      { tp: "mi moku lon tomo", en: "I eat at the house.", gloss: "I | eat | at | house", note: "'lon tomo' = at the house" },
      { tp: "ona li pali lon ma ni", en: "They work in this place.", gloss: "they | (li) | work | in | land + this", note: "Location of work" },
      { tp: "kasi li lon ma", en: "Plants are on the land.", gloss: "plant | (li) | at | land", note: "'lon' as verb" },
      { tp: "mi lukin e waso lon sewi", en: "I see birds in the sky.", gloss: "I | see | (e) | bird | in | above", note: "Direct obj + location" },
      { tp: "suno li lon sewi", en: "The sun is in the sky.", gloss: "sun | (li) | at | above", note: "'lon' as verb + spatial noun" }
    ],
    
    lonAsVerb: [
      { tp: "mi lon", en: "I exist. / I am here.", gloss: "I | exist", note: "'lon' as intransitive verb" },
      { tp: "ona li lon ala", en: "They don't exist. / They're not here.", gloss: "they | (li) | exist + not", note: "Negated existence" },
      { tp: "jan li lon tomo", en: "A person is at the house.", gloss: "person | (li) | at | house", note: "Being somewhere" },
      { tp: "kili li lon poki", en: "Fruit is in the container.", gloss: "fruit | (li) | in | container", note: "Location" },
      { tp: "pipi li lon anpa mi", en: "A bug is under me.", gloss: "bug | (li) | at | below + me", note: "Spatial relationship" }
    ],
    
    kepekenExamples: [
      { tp: "mi moku kepeken ilo moku", en: "I eat using a utensil.", gloss: "I | eat | using | tool + eating", note: "Instrument phrase" },
      { tp: "mi pali kepeken luka mi", en: "I work with my hands.", gloss: "I | work | using | hand + my", note: "By hand" },
      { tp: "ona li toki kepeken toki pona", en: "They speak using Toki Pona.", gloss: "they | (li) | speak | using | language + simple", note: "Language as tool" },
      { tp: "mi lukin kepeken ilo lukin", en: "I look using glasses.", gloss: "I | see | using | tool + seeing", note: "'ilo lukin' = glasses" },
      { tp: "jan li pona e tomo kepeken ilo", en: "The person fixes the house with a tool.", gloss: "person | (li) | fix | (e) | house | using | tool", note: "Direct obj + instrument" }
    ],
    
    kepekenAsVerb: [
      { tp: "mi kepeken ilo", en: "I use a tool.", gloss: "I | use | tool", note: "'kepeken' as intransitive verb" },
      { tp: "ona li kepeken tomo tawa", en: "They use a car.", gloss: "they | (li) | use | house + moving", note: "Using a vehicle" },
      { tp: "jan li wile kepeken ni", en: "The person wants to use this.", gloss: "person | (li) | want | use | this", note: "Auxiliary + kepeken" },
      { tp: "sina kepeken ala kepeken ilo?", en: "Do you use a tool?", gloss: "you | use | not | use | tool", note: "Yes/no question" }
    ],
    
    tanExamples: [
      { tp: "mi tan ma suli", en: "I am from a big country.", gloss: "I | from | land + big", note: "Origin" },
      { tp: "ona li kama tan tomo ona", en: "They come from their house.", gloss: "they | (li) | come | from | house + their", note: "'kama tan' = come from" },
      { tp: "mi pilin pona tan sina", en: "I feel good because of you.", gloss: "I | feel | good | because-of | you", note: "Cause/reason" },
      { tp: "mi moku tan ni: mi wile moku", en: "I eat because I want to eat.", gloss: "I | eat | because | this: | I | want | eat", note: "'tan ni:' pattern" },
      { tp: "telo li kama tan sewi", en: "Water comes from above. (Rain)", gloss: "water | (li) | come | from | above", note: "Source of rain" }
    ],
    
    opinionPattern: [
      { tp: "ni li pona tawa mi", en: "I like this.", gloss: "this | (li) | good | to | me", note: "Standard 'like' pattern" },
      { tp: "toki pona li pona tawa mi", en: "I like Toki Pona.", gloss: "language + simple | (li) | good | to | me", note: "Liking something specific" },
      { tp: "kili li pona tawa ona", en: "They like fruit.", gloss: "fruit | (li) | good | to | them", note: "Third person" },
      { tp: "pipi li ike tawa mi", en: "I don't like bugs.", gloss: "bug | (li) | bad | to | me", note: "'ike tawa' = dislike" },
      { tp: "tomo ni li pona ala tawa sina", en: "You don't like this house.", gloss: "house + this | (li) | good + not | to | you", note: "Negated preference" },
      { tp: "ma li pona lukin tawa mi", en: "The land looks good to me.", gloss: "land | (li) | good + looking | to | me", note: "I think it looks pretty" }
    ],
    
    multiplePrepositions: [
      { tp: "mi pana e moku tawa sina lon tomo", en: "I give food to you at the house.", gloss: "I | give | (e) | food | to | you | at | house", note: "Recipient + location" },
      { tp: "ona li toki e ni tawa mi kepeken toki pona", en: "They say this to me in Toki Pona.", gloss: "they | (li) | say | (e) | this | to | me | using | toki pona", note: "Recipient + means" },
      { tp: "mi kama tan ma suli tawa ma lili", en: "I come from a big land to a small land.", gloss: "I | come | from | land + big | to | land + small", note: "Origin + destination" }
    ],
    
    ambiguous: [
      { tp: "mi tawa tomo", meanings: ["I go to the house.", "I am a moving house (weird)."], likely: "I go to the house.", note: "'tawa' is almost always verb + destination here" },
      { tp: "mi wile lon tomo", meanings: ["I want to be at home.", "I want (something) at home."], likely: "Both valid — comma clarifies", note: "Add comma: 'mi wile, lon tomo'" },
      { tp: "mi pana e tomo tawa sina", meanings: ["I give a house to you.", "I give your car."], likely: "Context decides!", note: "'tomo tawa' can be 'car' or 'house to'" }
    ],
    
    samaExamples: [
      { tp: "ona li sama mi", en: "They are like me. / They are the same as me.", gloss: "they | (li) | same | me", note: "'sama' as preposition" },
      { tp: "ni tu li sama", en: "These two are the same.", gloss: "this + two | (li) | same", note: "'sama' as adjective" },
      { tp: "ona li moku sama soweli", en: "They eat like an animal.", gloss: "they | (li) | eat | like | animal", note: "Comparison with 'sama'" },
      { tp: "jan sama mi li suli", en: "My sibling is big.", gloss: "person + same + my | (li) | big", note: "'jan sama' = sibling" },
      { tp: "mi pali sama sina", en: "I work like you. / I work the same way as you.", gloss: "I | work | like | you", note: "Manner comparison" },
      { tp: "tomo ni li pona sama tomo mi", en: "This house is as good as my house.", gloss: "house + this | (li) | good | same | house + my", note: "Quality comparison" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "prepositionChoice",
      instruction: "Choose the correct preposition for each sentence:",
      questions: [
        {
          prompt: "I give food ___ you.",
          options: ["tawa", "lon", "kepeken", "tan"],
          correct: 0,
          answer: "mi pana e moku tawa sina",
          explanation: "'tawa' indicates the recipient of the giving action."
        },
        {
          prompt: "I eat ___ the house.",
          options: ["tawa", "lon", "kepeken", "tan"],
          correct: 1,
          answer: "mi moku lon tomo",
          explanation: "'lon' indicates the location where the action happens."
        },
        {
          prompt: "I eat ___ a utensil.",
          options: ["tawa", "lon", "kepeken", "tan"],
          correct: 2,
          answer: "mi moku kepeken ilo moku",
          explanation: "'kepeken' indicates the instrument used for the action."
        },
        {
          prompt: "I come ___ the big land.",
          options: ["tawa", "lon", "kepeken", "tan"],
          correct: 3,
          answer: "mi kama tan ma suli",
          explanation: "'tan' indicates origin or source."
        },
        {
          prompt: "They eat ___ an animal. (like an animal)",
          options: ["tawa", "lon", "kepeken", "sama"],
          correct: 3,
          answer: "ona li moku sama soweli",
          explanation: "'sama' indicates similarity or comparison — 'like' or 'as'."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence, paying attention to the preposition:",
      questions: [
        { tp: "mi tawa tomo", expectedType: "motion", hint: "'tawa' = go" },
        { tp: "mi lon tomo", expectedType: "location", hint: "'lon' = at/in" },
        { tp: "mi pana e ni tawa sina", expectedType: "recipient", hint: "'tawa' = to (person)" },
        { tp: "ona li moku kepeken luka", expectedType: "instrument", hint: "'kepeken' = using" },
        { tp: "telo li kama tan sewi", expectedType: "origin", hint: "'tan' = from" },
        { tp: "mi pali sama sina", expectedType: "comparison", hint: "'sama' = like" },
        { tp: "jan sama mi", expectedType: "noun phrase", hint: "'jan sama' = sibling" }
      ],
      answers: ["I go to the house.", "I am at the house.", "I give this to you.", "They eat with hands.", "Water comes from above. (Rain)", "I work like you.", "my sibling"]
    },
    
    {
      type: "opinionPattern",
      instruction: "Express these opinions using the 'li pona/ike tawa' pattern:",
      questions: [
        {
          english: "I like fruit.",
          answer: "kili li pona tawa mi",
          note: "Fruit is good to me."
        },
        {
          english: "They don't like bugs.",
          answer: "pipi li ike tawa ona",
          note: "Bugs are bad to them."
        },
        {
          english: "Do you like Toki Pona?",
          answer: "toki pona li pona ala pona tawa sina?",
          note: "Yes/no question about preference"
        },
        {
          english: "The house is good to us. (We like the house.)",
          answer: "tomo li pona tawa mi",
          note: "'mi' can mean 'we'"
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["mi", "pana", "e", "moku", "tawa", "jan", "lili"],
          validAnswers: ["mi pana e moku tawa jan lili"],
          translations: ["I give food to the child."],
          hint: "Subject + verb + e + object + tawa + recipient"
        },
        {
          words: ["ona", "li", "pali", "lon", "tomo", "kepeken", "ilo"],
          validAnswers: ["ona li pali lon tomo kepeken ilo", "ona li pali kepeken ilo lon tomo"],
          translations: ["They work at the house using a tool."],
          hint: "Multiple prepositional phrases"
        },
        {
          words: ["mi", "kama", "tan", "ma", "suli"],
          validAnswers: ["mi kama tan ma suli", "mi tan ma suli"],
          translations: ["I come from a big country.", "I am from a big country."],
          hint: "'kama tan' = come from, or just 'tan' for origin"
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence to match the English meaning:",
      questions: [
        { tp: "mi toki ___ sina", en: "I speak to you.", answer: "tawa", hint: "'tawa' = to (recipient)" },
        { tp: "kili li ___ poki", en: "Fruit is in the container.", answer: "lon", hint: "Location verb" },
        { tp: "mi moku ___ ilo moku", en: "I eat with a utensil.", answer: "kepeken", hint: "Using an instrument" },
        { tp: "ona li kama ___ tomo ona", en: "They come from their house.", answer: "tan", hint: "Origin/source" },
        { tp: "pipi li ike ___ mi", en: "I don't like bugs.", answer: "tawa", hint: "Opinion pattern: 'bad to me'" },
        { tp: "ona li lukin ___ mi", en: "They look like me.", answer: "sama", hint: "Comparison/similarity" },
        { tp: "jan ___ mi li suli", en: "My sibling is big.", answer: "sama", hint: "'jan sama' = same-person = sibling" }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This sentence has two meanings. Use punctuation or rephrasing to clarify:",
      questions: [
        {
          tp: "mi wile lon tomo",
          meanings: ["I want to be at home.", "I want (something), at home."],
          clarifications: {
            meaning1: "mi wile e ni: mi lon tomo",
            meaning2: "mi wile, lon tomo"
          },
          explanation: "Adding 'e ni:' or a comma clarifies the intended meaning."
        },
        {
          tp: "mi pana e tomo tawa sina",
          meanings: ["I give a house to you.", "I give your car."],
          clarifications: {
            meaning1: "mi pana e tomo, tawa sina",
            meaning2: "mi pana e tomo tawa sina (context: discussing cars)"
          },
          explanation: "Comma before 'tawa' forces it to be a preposition."
        }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'tawa' can be both a verb (to go) and a preposition (to, toward).",
          answer: true,
          explanation: "Correct! 'mi tawa' = I go. 'mi pana tawa sina' = I give to you."
        },
        {
          statement: "'lon' always needs 'e' before its object.",
          answer: false,
          explanation: "No! 'lon' is a preposition or intransitive verb, never uses 'e'."
        },
        {
          statement: "To say 'I like X', you say 'X li pona tawa mi'.",
          answer: true,
          explanation: "Exactly! Literally 'X is good to me' = I like X."
        },
        {
          statement: "'kepeken' can only be a preposition, not a verb.",
          answer: false,
          explanation: "'kepeken' can be an intransitive verb: 'mi kepeken ilo' = I use a tool."
        },
        {
          statement: "'tan ni:' introduces a reason or cause.",
          answer: true,
          explanation: "Yes! 'mi moku tan ni: mi wile moku' = I eat because I want to eat."
        },
        {
          statement: "'sama' can be both an adjective ('they are the same') and a preposition ('like me').",
          answer: true,
          explanation: "Correct! 'ni tu li sama' = these two are the same. 'ona li sama mi' = they are like me."
        },
        {
          statement: "'jan sama' means 'similar person' (someone who looks like you).",
          answer: false,
          explanation: "'jan sama' specifically means 'sibling' — a same-person in your family context."
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What role does the highlighted word play?",
      questions: [
        {
          tp: "mi **tawa** tomo",
          target: "tawa",
          options: ["Preposition (to)", "Intransitive verb (go)", "Adjective (moving)", "Noun (movement)"],
          correct: 1,
          explanation: "'tawa' is the main verb meaning 'to go'. 'tomo' is the destination."
        },
        {
          tp: "mi pana e moku **tawa** sina",
          target: "tawa",
          options: ["Preposition (to)", "Intransitive verb (go)", "Adjective (moving)", "Noun (movement)"],
          correct: 0,
          explanation: "'tawa' is a preposition introducing the recipient 'sina'."
        },
        {
          tp: "mi moku **lon** tomo",
          target: "lon",
          options: ["Preposition (at/in)", "Verb (to exist)", "Adjective (existing)", "Noun (existence)"],
          correct: 0,
          explanation: "'lon' is a preposition indicating where the eating happens."
        },
        {
          tp: "kili li **lon** poki",
          target: "lon",
          options: ["Preposition (at/in)", "Intransitive verb (to be at)", "Adjective (existing)", "Noun (existence)"],
          correct: 1,
          explanation: "'lon' is an intransitive verb meaning 'to be (located) in'."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tawa ma sin — Going to a New Land",
    intro: "A story about a journey. Pay attention to how prepositions show movement, location, and reasons!",
    paragraphs: [
      { tp: "mi tan ma lili.", en: "I am from a small land.", note: "'tan' = from (origin)" },
      { tp: "mi wile tawa ma suli.", en: "I want to go to a big land.", note: "'wile tawa' = want to go" },
      { tp: "mi tawa, kepeken tomo tawa.", en: "I go, using a car.", note: "'kepeken tomo tawa' = using a car" },
      { tp: "mi kama tawa ma suli.", en: "I arrive at the big land.", note: "'kama tawa' = come to" },
      { tp: "mi lon ma sin.", en: "I am in a new land.", note: "'lon' = at/in (location)" },
      { tp: "mi lukin e kasi suli lon ma ni.", en: "I see big plants in this land.", note: "Direct obj + location" },
      { tp: "ma ni li pona tawa mi!", en: "I like this land!", note: "Opinion pattern" },
      { tp: "mi pana e toki tawa jan.", en: "I speak to people.", note: "'pana e toki' = give speech = speak" },
      { tp: "jan li pona tawa mi.", en: "The people are good to me.", note: "They're nice to me" },
      { tp: "mi pilin pona tan ni: ma li pona.", en: "I feel good because the land is good.", note: "'tan ni:' = because" }
    ],
    comprehension: [
      { question: "Where does the speaker come from?", answer: "A small land (ma lili)", evidence: "mi tan ma lili" },
      { question: "How does the speaker travel?", answer: "Using a car (kepeken tomo tawa)", evidence: "mi tawa, kepeken tomo tawa" },
      { question: "Does the speaker like the new land?", answer: "Yes! (ma ni li pona tawa mi)", evidence: "'li pona tawa mi' = I like it" },
      { question: "Why does the speaker feel good?", answer: "Because the land is good (tan ni: ma li pona)", evidence: "mi pilin pona tan ni: ma li pona" }
    ],
    challenge: "The speaker says 'mi pana e toki tawa jan'. Can you rewrite this using the intransitive verb 'toki' instead of 'pana e toki'?"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Prepositions unlock new ways to describe situations. Here are useful patterns:",
    items: [
      { tp: "tomo tawa", en: "car, vehicle (moving house)", literal: "house + moving", lesson: "mi kepeken tomo tawa = I use a car" },
      { tp: "tomo tawa telo", en: "boat, ship (water vehicle)", literal: "moving-house + water", lesson: "mi tawa, kepeken tomo tawa telo = I go by boat" },
      { tp: "tomo tawa kon", en: "airplane (air vehicle)", literal: "moving-house + air", lesson: "ona li kama tan ma suli, kepeken tomo tawa kon" },
      { tp: "pona tawa mi", en: "I like it, good to me", literal: "good + to + me", lesson: "The opinion pattern!" },
      { tp: "kama pona", en: "welcome! (come well)", literal: "come + good", lesson: "Greeting when someone arrives" },
      { tp: "tawa pona", en: "goodbye, bon voyage", literal: "go + good", lesson: "Said to someone leaving" },
      { tp: "tan ni:", en: "because of this, therefore", literal: "because + this:", lesson: "Introduces a reason clause" },
      { tp: "lon ni", en: "here, at this place", literal: "at + this", lesson: "mi lon ni = I am here" }
    ],
    teaser: "Next lesson: Spatial nouns! Learn how 'sewi', 'anpa', 'insa', 'monsi', 'sinpin', and 'poka' describe WHERE things are relative to each other."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "VERB + tawa + RECIPIENT", example: "mi pana e moku tawa sina", meaning: "I give food to you." },
      { pattern: "VERB + lon + LOCATION", example: "mi moku lon tomo", meaning: "I eat at the house." },
      { pattern: "VERB + kepeken + INSTRUMENT", example: "mi moku kepeken ilo", meaning: "I eat using a tool." },
      { pattern: "VERB + tan + ORIGIN", example: "mi kama tan ma suli", meaning: "I come from a big land." },
      { pattern: "X li pona tawa mi", example: "kili li pona tawa mi", meaning: "I like fruit." },
      { pattern: "X li ike tawa mi", example: "pipi li ike tawa mi", meaning: "I don't like bugs." },
      { pattern: "tan ni: + SENTENCE", example: "mi moku tan ni: mi wile moku", meaning: "I eat because I want to eat." }
    ],
    remember: [
      "tawa = to, toward, for (direction/recipient/beneficiary)",
      "lon = at, in, on (location)",
      "kepeken = using, with (instrument)",
      "tan = from, because of (origin/reason)",
      "sama = like, as, same as (comparison)",
      "Opinion pattern: 'X li pona tawa mi' = I like X",
      "No 'e' before prepositional objects!",
      "Comma before preposition helps clarify: 'mi tawa, tawa tomo'",
      "'jan sama' = sibling (same-person)"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson6;
}
