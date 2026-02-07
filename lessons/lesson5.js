/**
 * Lesson 5: Modifiers
 * Describing things — adjectives always come AFTER the noun
 */

const lesson5 = {
  id: 5,
  title: "Modifiers",
  desc: "Describing things — adjectives always come AFTER the noun",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Modifiers (adjectives) always come <b>AFTER</b> the word they describe. <b>tomo suli</b> = house + big = 'big house'. This is the opposite of English word order!",
    
    concepts: [
      {
        title: "Head-first word order",
        explanation: "In Toki Pona, the MAIN word (the 'head') comes first, and modifiers follow. Think of it as 'noun + description' instead of 'description + noun'.",
        examples: [
          { tp: "tomo suli", en: "big house", note: "house + big (not 'big house')" },
          { tp: "soweli lili", en: "small animal", note: "animal + small" },
          { tp: "kasi pona", en: "good plant", note: "plant + good" },
          { tp: "jan pona", en: "good person / friend", note: "person + good" }
        ],
        pitfall: "NEVER put the adjective first! 'suli tomo' is ungrammatical."
      },
      {
        title: "Stacking multiple modifiers",
        explanation: "You can use multiple modifiers in sequence. Each modifier applies to the entire phrase before it, building meaning step by step.",
        examples: [
          { tp: "tomo suli pona", en: "good big house", note: "(tomo suli) + pona = (big house) + good" },
          { tp: "jan pona mi", en: "my friend", note: "(jan pona) + mi = (friend) + my" },
          { tp: "soweli lili mute", en: "many small animals", note: "(soweli lili) + mute = (small animals) + many" },
          { tp: "kasi suli pona ni", en: "this good big plant", note: "Each word modifies what comes before" }
        ],
        pitfall: "Keep it simple — 2-3 modifiers max. More becomes confusing!"
      },
      {
        title: "Modifier order matters!",
        explanation: "The ORDER of modifiers changes meaning. Each adjective modifies the entire phrase before it, so swapping order changes what's being described.",
        examples: [
          { tp: "jan utala nasa", en: "crazy soldier", note: "jan utala (soldier) + nasa (crazy)" },
          { tp: "jan nasa utala", en: "fighting fool", note: "jan nasa (fool/crazy person) + utala (fighting)" },
          { tp: "tomo moku suli", en: "big restaurant", note: "tomo moku (restaurant) + suli (big)" },
          { tp: "tomo suli moku", en: "food warehouse / edible big building", note: "tomo suli (big building) + moku (eating/food)" }
        ],
        pitfall: "Think about what you're building step by step. (A + B) + C ≠ (A + C) + B"
      },
      {
        title: "Possessive pronouns as modifiers",
        explanation: "Possessive pronouns (<b>mi</b> = my, <b>sina</b> = your, <b>ona</b> = their) work just like adjectives — they come AFTER the noun phrase they modify.",
        examples: [
          { tp: "tomo mi", en: "my house", note: "house + my" },
          { tp: "soweli sina", en: "your animal/pet", note: "animal + your" },
          { tp: "ma ona", en: "their land/country", note: "land + their" },
          { tp: "tomo pona mi", en: "my good house", note: "(tomo pona) + mi = (good house) + my" }
        ],
        pitfall: "Possessive pronouns typically come LAST after other adjectives."
      },
      {
        title: "Predicate adjectives vs. attributive adjectives",
        explanation: "Adjectives can describe nouns in two positions: 1) Directly after a noun (<b>attributive</b>: 'the big house'), or 2) After <b>li</b> in the predicate (<b>predicate</b>: 'the house is big').",
        examples: [
          { tp: "tomo suli li pona", en: "The big house is good.", note: "'suli' = attributive, 'pona' = predicate" },
          { tp: "tomo li suli", en: "The house is big.", note: "'suli' as predicate adjective" },
          { tp: "tomo ni li suli", en: "This house is big.", note: "'ni' = attributive, 'suli' = predicate" },
          { tp: "soweli lili li pona lukin", en: "The small animal is pretty.", note: "Multiple adjectives can be predicates too" }
        ],
        pitfall: "Remember: with 'mi' and 'sina', no 'li' is needed: 'sina pona' = 'you are good'."
      },
      {
        title: "'ni' as a demonstrative modifier",
        explanation: "<b>ni</b> (this/that) works like an adjective when placed after a noun. It points to a specific thing.",
        examples: [
          { tp: "tomo ni", en: "this house / that house", note: "house + this" },
          { tp: "soweli ni li suli", en: "This animal is big.", note: "'ni' specifies which animal" },
          { tp: "jan ni li jan pona mi", en: "This person is my friend.", note: "'ni' picks out a specific person" },
          { tp: "kasi ni li moli", en: "This plant is dead.", note: "'moli' = dead (preview)" }
        ],
        pitfall: "Context determines if 'ni' means 'this' or 'that' — Toki Pona doesn't distinguish!"
      }
    ],
    
    keyInsight: "Toki Pona builds meaning from left to right. The first word is WHAT it is (the head noun), and everything after DESCRIBES it. Think: 'house big good my' = 'my good big house'."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "tomo",
      primaryMeaning: "house, room, building",
      roles: {
        adjective: "urban, domestic, household, indoor",
        adverb: "indoors, domestically",
        noun: "house, home, room, building, indoor space, structure",
        verbTransitive: "to build, to construct, to engineer"
      },
      notes: "Covers ANY enclosed constructed space: house, room, building, car (tomo tawa = moving house), tent, etc. Very productive in compounds.",
      compounds: [
        { tp: "tomo tawa", en: "car, vehicle (moving house)" },
        { tp: "tomo moku", en: "restaurant, dining room (eating house)" },
        { tp: "tomo lape", en: "bedroom (sleeping house)" },
        { tp: "tomo telo", en: "bathroom, restroom (water house)" },
        { tp: "tomo sona", en: "school (knowledge house)" },
        { tp: "tomo pali", en: "workplace, office (work house)" },
        { tp: "ma tomo", en: "city, town (land of buildings)" }
      ]
    },
    {
      word: "ma",
      primaryMeaning: "land, place, country",
      roles: {
        adjective: "countrified, outdoor, earthy, open-air",
        noun: "land, earth, country, area, ground, territory, place, world"
      },
      notes: "Covers land, territory, countries, and outdoor places. Combined with other words to specify different types of areas.",
      compounds: [
        { tp: "ma tomo", en: "city, town (building-land)" },
        { tp: "ma kasi", en: "forest, jungle (plant-land)" },
        { tp: "ma telo", en: "mud, swamp, wetland (water-land)" },
        { tp: "ma suli", en: "continent, large country" },
        { tp: "ma mama", en: "homeland, motherland" },
        { tp: "ma seli", en: "desert, hot land" }
      ]
    },
    {
      word: "kasi",
      primaryMeaning: "plant, tree, vegetation",
      roles: {
        adjective: "vegetable, vegetal, plant-based, leafy, green",
        noun: "plant, vegetation, herb, leaf, tree, flower, grass",
        verbIntransitive: "to grow",
        verbTransitive: "to plant, to grow"
      },
      notes: "Covers ALL plant life: trees, flowers, grass, herbs, vegetables (the plant, not the food). As a verb, can mean both 'to grow' and 'to plant'.",
      compounds: [
        { tp: "kasi suli", en: "tree (big plant)" },
        { tp: "kasi kule", en: "flower (colorful plant)" },
        { tp: "kasi anpa", en: "grass (low plant)" },
        { tp: "kasi nasa", en: "hemp, marijuana (strange plant)" },
        { tp: "ma kasi", en: "forest, jungle (plant-land)" },
        { tp: "telo kasi", en: "plant juice, herbal tea" }
      ]
    },
    {
      word: "soweli",
      primaryMeaning: "animal, mammal",
      roles: {
        adjective: "animal, mammalian, furry, cuddly",
        noun: "animal, especially land mammal, lovable animal, beast, pet"
      },
      notes: "Primarily for mammals and 'cute' animals. Also used for meat in food contexts. Think: animals with fur that you might pet.",
      compounds: [
        { tp: "soweli lili", en: "small animal (cat, dog, rabbit)" },
        { tp: "soweli suli", en: "large animal (cow, horse, elephant)" },
        { tp: "soweli wawa", en: "strong animal (lion, bear)" },
        { tp: "soweli moku", en: "livestock, food animal" },
        { tp: "moku soweli", en: "meat (animal food)" },
        { tp: "telo mama soweli", en: "milk (mother-water of animal)" }
      ]
    },
    {
      word: "waso",
      primaryMeaning: "bird, flying creature",
      roles: {
        adjective: "bird-like, flying, avian, winged",
        noun: "bird, bat, flying creature, winged animal"
      },
      notes: "Covers birds AND any flying creature (bats too!). Can also refer to poultry/chicken as food.",
      compounds: [
        { tp: "waso suli", en: "large bird (eagle, ostrich)" },
        { tp: "waso lili", en: "small bird (sparrow)" },
        { tp: "waso wawa", en: "powerful bird (eagle, hawk)" },
        { tp: "sike mama waso", en: "egg (round mother-thing of bird)" },
        { tp: "moku waso", en: "poultry, chicken meat" }
      ]
    },
    {
      word: "lukin",
      primaryMeaning: "see, look, eye",
      roles: {
        adjective: "visual, eye-related, visible",
        adverb: "visually",
        noun: "view, look, sight, vision, eye, gaze",
        verbIntransitive: "to look, to watch, to pay attention",
        verbTransitive: "to see, to look at, to watch, to read",
        auxiliaryVerb: "to try to, to seek to (lukin + verb)"
      },
      notes: "One of the most versatile words! Covers all aspects of seeing and looking. As auxiliary: 'mi lukin pali' = I try to work. 'pona lukin' = good to look at = pretty!",
      compounds: [
        { tp: "pona lukin", en: "pretty, attractive (good-looking)" },
        { tp: "ike lukin", en: "ugly (bad-looking)" },
        { tp: "ilo lukin", en: "glasses, telescope, microscope (seeing tool)" },
        { tp: "lukin pona", en: "good vision, seeing well" },
        { tp: "lukin suli", en: "careful observation, close look" }
      ]
    },
    {
      word: "tenpo",
      primaryMeaning: "time, period, moment",
      roles: {
        noun: "time, period, moment, duration, occasion, situation",
        adjective: "temporal, time-related"
      },
      notes: "Essential for talking about when things happen. Combined with other modifiers to specify different times. 'tenpo ni' = now, 'tenpo pini' = past, 'tenpo kama' = future.",
      compounds: [
        { tp: "tenpo ni", en: "now, this time, the present" },
        { tp: "tenpo pini", en: "past, before, ago" },
        { tp: "tenpo kama", en: "future, later, upcoming" },
        { tp: "tenpo suno", en: "day, daytime" },
        { tp: "tenpo pimeja", en: "night, nighttime" },
        { tp: "tenpo moku", en: "mealtime" },
        { tp: "tenpo lape", en: "bedtime, sleep time" },
        { tp: "tenpo suli", en: "long time" },
        { tp: "tenpo lili", en: "short time, moment" }
      ],
      examples: {
        asSubject: "tenpo li tawa — time passes (goes)",
        withNi: "tenpo ni la mi pona — now, I am good (preview of 'la')",
        withModifier: "tenpo pini la ona li lon — in the past, they were here"
      }
    },
    {
      word: "suno",
      primaryMeaning: "sun, light, brightness",
      roles: {
        noun: "sun, light, brightness, glow, radiance, light source",
        adjective: "solar, bright, lit, shining",
        verbIntransitive: "to shine, to glow"
      },
      notes: "Covers the sun specifically and light/brightness generally. 'tenpo suno' = day/daytime. 'suno li pona' = the sun is good / sunshine is nice.",
      compounds: [
        { tp: "tenpo suno", en: "day, daytime (sun-time)" },
        { tp: "suno suli", en: "bright sun, midday sun" },
        { tp: "suno lili", en: "dim light, lamplight" },
        { tp: "kama suno", en: "sunrise, dawn" },
        { tp: "tawa suno", en: "sunset (sun going)" },
        { tp: "ilo suno", en: "lamp, light source, flashlight" }
      ]
    },
    {
      word: "mun",
      primaryMeaning: "moon, star, night sky object",
      roles: {
        noun: "moon, star, celestial body, night sky object",
        adjective: "lunar, celestial, night-related"
      },
      notes: "Covers the moon AND stars — any glowing object in the night sky. 'tenpo mun' can mean night or month. 'suno en mun' = sun and moon = day and night.",
      compounds: [
        { tp: "mun suli", en: "full moon, large celestial body" },
        { tp: "mun lili", en: "star, small moon" },
        { tp: "tenpo mun", en: "night, month (moon-time)" },
        { tp: "suno mun", en: "starlight, moonlight" },
        { tp: "mun mute", en: "many stars, starry sky" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basicModifiers: [
      { tp: "tomo suli", en: "big house", gloss: "house + big", note: "Basic modifier pattern" },
      { tp: "soweli lili", en: "small animal", gloss: "animal + small", note: "Adjective after noun" },
      { tp: "kasi pona", en: "good plant", gloss: "plant + good", note: "Word order: noun first!" },
      { tp: "ma suli", en: "big land / large country", gloss: "land + big", note: "Can be place or country" },
      { tp: "waso suli", en: "big bird", gloss: "bird + big", note: "Eagle, ostrich, etc." }
    ],
    
    withLi: [
      { tp: "tomo ni li suli", en: "This house is big.", gloss: "house + this | (li) | big", note: "'ni' modifies tomo, 'suli' is predicate" },
      { tp: "soweli ni li lili", en: "This animal is small.", gloss: "animal + this | (li) | small", note: "Describing a specific animal" },
      { tp: "kasi ni li pona", en: "This plant is good.", gloss: "plant + this | (li) | good", note: "Could be healthy, pretty, etc." },
      { tp: "ma ni li pona", en: "This place is good.", gloss: "land/place + this | (li) | good", note: "Nice area or location" },
      { tp: "waso ni li pona lukin", en: "This bird is pretty.", gloss: "bird + this | (li) | good + looking", note: "'pona lukin' = pretty (compound predicate)" }
    ],
    
    withObjects: [
      { tp: "mi lukin e waso suli", en: "I see a big bird.", gloss: "I | see | (e) | bird + big", note: "Object noun phrase has modifier" },
      { tp: "ona li jo e tomo suli", en: "They have a big house.", gloss: "they | (li) | have | (e) | house + big", note: "'suli' modifies 'tomo'" },
      { tp: "mi moku e kasi lili", en: "I eat a small plant.", gloss: "I | eat | (e) | plant + small", note: "Herb or vegetable" },
      { tp: "jan li lukin e soweli pona", en: "The person sees a good animal.", gloss: "person | (li) | see | (e) | animal + good", note: "Nice pet or friendly animal" },
      { tp: "sina jo e ma suli", en: "You have a large territory.", gloss: "you | have | (e) | land + big", note: "Big land or country" }
    ],
    
    stackedModifiers: [
      { tp: "tomo suli pona", en: "good big house", gloss: "house + big + good", note: "(big house) + good" },
      { tp: "soweli lili mute", en: "many small animals", gloss: "animal + small + many", note: "(small animal) + many" },
      { tp: "kasi suli pona mi", en: "my good big plant", gloss: "plant + big + good + my", note: "Possessive comes last" },
      { tp: "tomo pona mi", en: "my good house", gloss: "house + good + my", note: "(good house) + my" },
      { tp: "waso suli ni li pona", en: "This big bird is good.", gloss: "bird + big + this | (li) | good", note: "Three modifiers!" }
    ],
    
    modifierOrderMatters: [
      { tp: "tomo moku suli", en: "big restaurant", gloss: "(house + eating) + big", note: "tomo moku = restaurant → big one" },
      { tp: "tomo suli moku", en: "edible big building / food warehouse", gloss: "(house + big) + eating", note: "tomo suli = big building → related to eating" },
      { tp: "jan pona suli", en: "great friend", gloss: "(person + good) + big/great", note: "jan pona = friend → great one" },
      { tp: "jan suli pona", en: "good adult / good big person", gloss: "(person + big) + good", note: "jan suli = adult → good one" },
      { tp: "ma kasi suli", en: "big forest", gloss: "(land + plant) + big", note: "ma kasi = forest → big one" }
    ],
    
    possessiveModifiers: [
      { tp: "tomo mi", en: "my house", gloss: "house + my", note: "Basic possessive" },
      { tp: "soweli sina", en: "your pet/animal", gloss: "animal + your", note: "Your animal" },
      { tp: "ma ona", en: "their land/country", gloss: "land + their", note: "Their territory" },
      { tp: "jan pona mi", en: "my friend", gloss: "person + good + my", note: "(friend) + my" },
      { tp: "tomo suli sina", en: "your big house", gloss: "house + big + your", note: "(big house) + your" }
    ],
    
    demonstrativeNi: [
      { tp: "tomo ni", en: "this house / that house", gloss: "house + this/that", note: "'ni' doesn't distinguish this/that" },
      { tp: "soweli ni li suli", en: "This animal is big.", gloss: "animal + this | (li) | big", note: "Pointing to specific animal" },
      { tp: "kasi ni li moku pona", en: "This plant is good food.", gloss: "plant + this | (li) | food + good", note: "Edible plant" },
      { tp: "ma ni li pona, tawa mi", en: "This place is good for me.", gloss: "land + this | (li) | good | for | me", note: "Preview of 'tawa' as preposition" },
      { tp: "jan ni li jo e waso", en: "This person has a bird.", gloss: "person + this | (li) | have | (e) | bird", note: "'ni' picks out who" }
    ],
    
    lukinCompounds: [
      { tp: "tomo ni li pona lukin", en: "This house is pretty.", gloss: "house + this | (li) | good + looking", note: "'pona lukin' = good-looking" },
      { tp: "soweli mi li ike lukin", en: "My pet is ugly.", gloss: "animal + my | (li) | bad + looking", note: "'ike lukin' = ugly" },
      { tp: "jan ni li pona lukin", en: "This person is attractive.", gloss: "person + this | (li) | good + looking", note: "Can describe people too" },
      { tp: "mi lukin e ilo lukin", en: "I see the glasses.", gloss: "I | see | (e) | tool + seeing", note: "'ilo lukin' = seeing tool" },
      { tp: "lukin pona!", en: "Nice to see! / Good view!", gloss: "looking + good", note: "As exclamation" }
    ],
    
    ambiguous: [
      { tp: "soweli moku", meanings: ["food animal / livestock", "eating animal / hungry animal"], likely: "Context decides!", note: "Is 'moku' 'food' (adjective) or 'eating' (adjective)?" },
      { tp: "tomo moku", meanings: ["restaurant (eating-house)", "food building / edible house"], likely: "Restaurant — common compound", note: "Most likely = restaurant" },
      { tp: "jan suli", meanings: ["big person", "adult", "important person"], likely: "All valid — context matters", note: "'suli' = big, tall, adult, important" }
    ],
    
    timeExpressions: [
      { tp: "tenpo ni", en: "now, this time", gloss: "time + this", note: "The present moment" },
      { tp: "tenpo pini", en: "the past, before", gloss: "time + finished", note: "'pini' = finished, past" },
      { tp: "tenpo kama", en: "the future", gloss: "time + coming", note: "'kama' = coming" },
      { tp: "tenpo suno", en: "day, daytime", gloss: "time + sun", note: "When the sun is out" },
      { tp: "tenpo mun", en: "night, month", gloss: "time + moon", note: "When the moon is out / moon cycle" },
      { tp: "tenpo suli", en: "long time", gloss: "time + big", note: "Extended duration" },
      { tp: "tenpo lili", en: "short time, moment", gloss: "time + small", note: "Brief duration" }
    ],
    
    celestialBodies: [
      { tp: "suno li suli", en: "The sun is big/bright.", gloss: "sun | (li) | big", note: "Describing the sun" },
      { tp: "mun li pona lukin", en: "The moon is pretty.", gloss: "moon | (li) | good + looking", note: "Describing the moon" },
      { tp: "mun mute li lon sewi", en: "Many stars are in the sky.", gloss: "moon + many | (li) | at | above", note: "'mun' = stars too!" },
      { tp: "mi lukin e suno", en: "I see the sun.", gloss: "I | see | (e) | sun", note: "Direct object" },
      { tp: "tenpo suno la mi pali", en: "During the day, I work.", gloss: "time+sun | (la) | I | work", note: "Preview of 'la' for context" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "wordOrderCorrection",
      instruction: "Fix the word order! In Toki Pona, modifiers come AFTER the noun.",
      questions: [
        {
          wrong: "suli tomo",
          prompt: "big house",
          correct: "tomo suli",
          explanation: "The noun (tomo) comes first, then the modifier (suli)."
        },
        {
          wrong: "lili soweli",
          prompt: "small animal",
          correct: "soweli lili",
          explanation: "Animal (soweli) first, then small (lili)."
        },
        {
          wrong: "pona kasi suli",
          prompt: "good big plant",
          correct: "kasi suli pona",
          explanation: "Plant first, then big, then good. Build from left to right!"
        },
        {
          wrong: "mi tomo",
          prompt: "my house",
          correct: "tomo mi",
          explanation: "Possessives are modifiers too — they come AFTER the noun."
        },
        {
          wrong: "suno tenpo",
          prompt: "daytime (sun-time)",
          correct: "tenpo suno",
          explanation: "'tenpo' is the head noun (time), 'suno' modifies it."
        },
        {
          wrong: "lili mun",
          prompt: "star (small moon)",
          correct: "mun lili",
          explanation: "'mun' first (celestial object), then 'lili' (small)."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each phrase. Pay attention to modifier position!",
      questions: [
        { tp: "ma suli", expectedType: "noun phrase", hint: "land + big" },
        { tp: "waso pona", expectedType: "noun phrase", hint: "bird + good" },
        { tp: "tomo lili mi", expectedType: "noun phrase", hint: "house + small + my" },
        { tp: "kasi ni li suli", expectedType: "full sentence", hint: "plant + this | is | big" },
        { tp: "tenpo suno", expectedType: "noun phrase", hint: "time + sun" },
        { tp: "mun li pona lukin", expectedType: "full sentence", hint: "moon | is | pretty" },
        { tp: "suno suli", expectedType: "noun phrase", hint: "sun + big" }
      ],
      answers: ["big land / large country", "good bird", "my small house", "This plant is big.", "day / daytime", "The moon is pretty.", "bright sun / midday sun"]
    },
    
    {
      type: "modifierOrderMeaning",
      instruction: "What does each phrase mean? Notice how order changes meaning!",
      questions: [
        {
          pair: ["tomo moku", "moku tomo"],
          meanings: ["restaurant (eating-house)", "house food / domestic food"],
          explanation: "'tomo moku' = eating-house (where you eat), 'moku tomo' = house-food (food at home?)"
        },
        {
          pair: ["jan pona mi", "jan mi pona"],
          meanings: ["my friend (my good-person)", "my good person / my person is good"],
          explanation: "The first is a noun phrase; the second could be a sentence (my person is good)."
        },
        {
          pair: ["soweli moku suli", "soweli suli moku"],
          meanings: ["big livestock / big food-animal", "eating large animal / hungry large animal"],
          explanation: "'soweli moku' = food animal → big one. 'soweli suli' = big animal → eating/hungry one."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona phrase or sentence:",
      questions: [
        {
          words: ["suli", "tomo", "ni"],
          validAnswers: ["tomo suli ni", "tomo ni suli"],
          translations: ["this big house", "this big house (slightly different emphasis)"],
          hint: "Main noun first, modifiers after"
        },
        {
          words: ["li", "soweli", "lili", "pona"],
          validAnswers: ["soweli lili li pona", "soweli li lili pona"],
          translations: ["The small animal is good.", "The animal is small and good."],
          hint: "Subject + li + predicate"
        },
        {
          words: ["mi", "lukin", "e", "waso", "suli", "pona"],
          validAnswers: ["mi lukin e waso suli pona", "mi lukin e waso pona suli"],
          translations: ["I see a good big bird.", "I see a big good bird."],
          hint: "Object phrase needs modifiers in order"
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the phrase to match the English meaning:",
      questions: [
        { tp: "tomo ___", en: "big house", answer: "suli", hint: "What modifier means 'big'?" },
        { tp: "soweli ___ mi", en: "my small animal (pet)", answer: "lili", hint: "'lili' = small" },
        { tp: "kasi ni li ___", en: "This plant is good.", answer: "pona", hint: "Predicate adjective" },
        { tp: "___ lukin", en: "pretty (good-looking)", answer: "pona", hint: "A common compound with 'lukin'" },
        { tp: "jan pona ___", en: "my friend", answer: "mi", hint: "Possessive comes last" },
        { tp: "tenpo ___", en: "now, this time", answer: "ni", hint: "'ni' = this" },
        { tp: "tenpo ___", en: "daytime", answer: "suno", hint: "When the sun is out" },
        { tp: "___ lili", en: "star", answer: "mun", hint: "Small celestial object" },
        { tp: "___ li suli", en: "The sun is big.", answer: "suno", hint: "The bright thing in the sky" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "In 'tomo suli', the word 'suli' comes before 'tomo'.",
          answer: false,
          explanation: "False! 'tomo' (the noun) comes first. 'tomo suli' = house + big."
        },
        {
          statement: "'kasi suli pona' means 'good big plant' (reading left to right).",
          answer: true,
          explanation: "Yes! kasi (plant) + suli (big) + pona (good) = good big plant."
        },
        {
          statement: "'tomo moku' and 'moku tomo' mean exactly the same thing.",
          answer: false,
          explanation: "False! 'tomo moku' = restaurant (eating-house). 'moku tomo' = house-food (domestic food)."
        },
        {
          statement: "Possessive pronouns (mi, sina, ona) come AFTER the noun phrase they modify.",
          answer: true,
          explanation: "Correct! 'tomo mi' = my house, 'jan pona mi' = my friend."
        },
        {
          statement: "'pona lukin' means 'seeing well' (good vision).",
          answer: false,
          explanation: "False! 'pona lukin' = good-looking = pretty. 'lukin pona' = seeing well."
        },
        {
          statement: "'tenpo suno' means 'sunny time' or 'daytime'.",
          answer: true,
          explanation: "Correct! 'tenpo' (time) + 'suno' (sun) = daytime, when the sun is out."
        },
        {
          statement: "'mun' only means 'moon' and cannot refer to stars.",
          answer: false,
          explanation: "False! 'mun' covers all night sky objects — moon AND stars. 'mun lili' = star."
        },
        {
          statement: "'tenpo mun' can mean both 'night' and 'month'.",
          answer: true,
          explanation: "Correct! 'tenpo mun' = moon-time, which can be nighttime or a lunar cycle (month)."
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What role does the highlighted word play?",
      questions: [
        {
          tp: "tomo **suli** li pona",
          target: "suli",
          options: ["Attributive adjective (modifying tomo)", "Predicate adjective (after li)", "Noun (the main subject)", "Verb (action)"],
          correct: 0,
          explanation: "'suli' comes directly after 'tomo', so it's an attributive adjective modifying 'tomo'."
        },
        {
          tp: "tomo ni li **suli**",
          target: "suli",
          options: ["Attributive adjective", "Predicate adjective (describing the subject)", "Noun", "Adverb"],
          correct: 1,
          explanation: "'suli' comes after 'li' in the predicate, so it's a predicate adjective describing 'tomo ni'."
        },
        {
          tp: "mi lukin e **waso**",
          target: "waso",
          options: ["Subject of the sentence", "Direct object (what is seen)", "Modifier of 'lukin'", "Verb"],
          correct: 1,
          explanation: "'waso' comes after 'e', making it the direct object — what the speaker sees."
        },
        {
          tp: "jan pona **mi** li moku",
          target: "mi",
          options: ["Subject pronoun (I)", "Possessive pronoun (my)", "Object pronoun (me)", "Reflexive pronoun"],
          correct: 1,
          explanation: "'mi' comes after 'jan pona', making it a possessive modifier: 'my friend'."
        }
      ]
    },
    
    {
      type: "compoundCreation",
      instruction: "Create the compound phrase for each concept:",
      questions: [
        {
          concept: "big bird",
          answer: "waso suli",
          hint: "Bird first, then big"
        },
        {
          concept: "good house",
          answer: "tomo pona",
          hint: "House first, then good"
        },
        {
          concept: "my small land",
          answer: "ma lili mi",
          hint: "Land + small + my (possessive last)"
        },
        {
          concept: "this plant",
          answer: "kasi ni",
          hint: "Plant + this/that"
        },
        {
          concept: "pretty (good-looking)",
          answer: "pona lukin",
          hint: "Good + looking"
        },
        {
          concept: "daytime",
          answer: "tenpo suno",
          hint: "Time + sun"
        },
        {
          concept: "star (small moon)",
          answer: "mun lili",
          hint: "Moon + small"
        },
        {
          concept: "the future",
          answer: "tenpo kama",
          hint: "Time + coming"
        },
        {
          concept: "bright sun",
          answer: "suno suli",
          hint: "Sun + big"
        }
      ]
    },
    
    {
      type: "timeMatching",
      instruction: "Match the time expression to its meaning:",
      questions: [
        { tp: "tenpo ni", en: "now, the present", hint: "time + this" },
        { tp: "tenpo pini", en: "the past, before", hint: "time + finished" },
        { tp: "tenpo kama", en: "the future", hint: "time + coming" },
        { tp: "tenpo suno", en: "day, daytime", hint: "time + sun" },
        { tp: "tenpo mun", en: "night, month", hint: "time + moon" },
        { tp: "tenpo suli", en: "long time", hint: "time + big" },
        { tp: "tenpo lili", en: "short time, moment", hint: "time + small" }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tenpo suno lon ma kasi — A Day in the Forest",
    intro: "A story about exploring a forest from sunrise to nightfall. Notice how modifiers and time words build meaning!",
    paragraphs: [
      { tp: "tenpo suno li kama.", en: "Daytime arrives. / The day begins.", note: "'tenpo suno' = daytime; 'kama' = come/arrive" },
      { tp: "suno li lon sewi.", en: "The sun is in the sky.", note: "'suno' = sun; 'sewi' = above/sky" },
      { tp: "mi tawa ma kasi.", en: "I go to the forest.", note: "'ma kasi' = plant-land = forest" },
      { tp: "ma kasi ni li suli.", en: "This forest is big.", note: "'ma kasi ni' = this forest (three words!)" },
      { tp: "mi lukin e kasi suli mute.", en: "I see many big plants.", note: "'kasi suli mute' = (big plants) + many" },
      { tp: "suno suli li pona.", en: "The bright sun is good.", note: "'suno suli' = bright/big sun" },
      { tp: "soweli lili li lon ma kasi.", en: "Small animals are in the forest.", note: "'soweli lili' = small animals" },
      { tp: "waso pona li tawa, lon kon.", en: "Good birds move through the air.", note: "'waso pona' = good birds; 'lon kon' = in the air" },
      { tp: "tenpo suli la mi lon ma kasi.", en: "For a long time, I am in the forest.", note: "'tenpo suli' = long time (preview of 'la')" },
      { tp: "tenpo mun li kama.", en: "Nighttime arrives.", note: "'tenpo mun' = night/moon-time" },
      { tp: "mun li lon sewi.", en: "The moon is in the sky.", note: "'mun' = moon" },
      { tp: "mun mute li pona lukin.", en: "Many stars are pretty.", note: "'mun mute' = many moons = stars" },
      { tp: "mi jo e tomo lili.", en: "I have a small house.", note: "'tomo lili' = small house (tent?)" },
      { tp: "mi lape. tenpo suno kama li pona.", en: "I sleep. Tomorrow will be good.", note: "'tenpo suno kama' = coming daytime = tomorrow" }
    ],
    comprehension: [
      { question: "What is 'ma kasi' in English?", answer: "Forest (plant-land)", evidence: "'ma' = land, 'kasi' = plant → plant-land = forest" },
      { question: "What does 'tenpo suno' mean?", answer: "Daytime / day", evidence: "'tenpo' = time, 'suno' = sun → sun-time = daytime" },
      { question: "What does 'mun mute' refer to?", answer: "Stars (many moons)", evidence: "'mun' covers all night sky objects; 'mun mute' = many = stars" },
      { question: "How do you say 'tomorrow'?", answer: "tenpo suno kama (coming daytime)", evidence: "'tenpo suno' = day + 'kama' = coming" },
      { question: "Where are the small animals?", answer: "In the forest (lon ma kasi)", evidence: "soweli lili li lon ma kasi" }
    ],
    challenge: "Can you write a sentence about the sunset? Hint: 'tawa suno' = sunset (sun going). Try: 'mi lukin e tawa suno' (I watch the sunset)."
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Modifiers let you build complex concepts from simple words. Here are common compound patterns including time expressions:",
    items: [
      { tp: "tomo moku", en: "restaurant (eating-house)", literal: "house + eating", lesson: "Where you go to eat" },
      { tp: "tomo lape", en: "bedroom (sleeping-house)", literal: "house + sleeping", lesson: "Where you sleep" },
      { tp: "ma kasi", en: "forest (plant-land)", literal: "land + plant", lesson: "Land of plants" },
      { tp: "ma tomo", en: "city (building-land)", literal: "land + building", lesson: "Land of buildings" },
      { tp: "pona lukin", en: "pretty (good-looking)", literal: "good + looking", lesson: "Attractive appearance" },
      { tp: "tenpo ni", en: "now (this-time)", literal: "time + this", lesson: "The present" },
      { tp: "tenpo suno", en: "day, daytime (sun-time)", literal: "time + sun", lesson: "When the sun is out" },
      { tp: "tenpo mun", en: "night, month (moon-time)", literal: "time + moon", lesson: "When the moon is out" },
      { tp: "mun lili", en: "star (small moon)", literal: "moon + small", lesson: "Night sky objects" }
    ],
    teaser: "Next lesson: Prepositions! Learn how 'tawa', 'lon', 'kepeken', and 'tan' express location, motion, and cause."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "NOUN + ADJECTIVE", example: "tomo suli", meaning: "big house" },
      { pattern: "NOUN + ADJ + ADJ", example: "tomo suli pona", meaning: "good big house" },
      { pattern: "NOUN + ADJ + POSSESSIVE", example: "tomo suli mi", meaning: "my big house" },
      { pattern: "NOUN + ni", example: "tomo ni", meaning: "this house / that house" },
      { pattern: "COMPOUND + MODIFIER", example: "jan pona suli", meaning: "great friend" },
      { pattern: "pona/ike + lukin", example: "pona lukin / ike lukin", meaning: "pretty / ugly" }
    ],
    remember: [
      "Adjectives come AFTER the noun: tomo suli (not suli tomo)",
      "Build meaning left to right: (tomo suli) + pona = good big house",
      "Possessives come last: tomo pona mi = my good house",
      "Modifier order changes meaning: 'jan pona suli' ≠ 'jan suli pona'",
      "'ni' is also a modifier: 'tomo ni' = this/that house",
      "'pona lukin' = pretty, 'ike lukin' = ugly",
      "'tenpo' + modifier = time expressions: tenpo ni (now), tenpo suno (day)",
      "'suno' = sun/light, 'mun' = moon/stars"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson5;
}
