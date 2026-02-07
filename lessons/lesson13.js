/**
 * Lesson 13: Colors & Descriptions
 * Describing appearance, physical qualities: loje, jelo, laso, walo, pimeja, seli, lete, suwi, jaki, nasa
 */

const lesson13 = {
  id: 13,
  title: "Colors & Descriptions",
  desc: "Describing appearance and physical qualities with loje, jelo, laso, walo, pimeja, seli, lete, suwi, jaki, nasa",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Colors and descriptive words work like any other modifier in toki pona — they come AFTER the noun they describe. Temperature, taste, and subjective qualities follow the same pattern.",
    
    concepts: [
      {
        title: "Colors as modifiers",
        explanation: "Color words follow the noun they describe: <b>kili loje</b> = red fruit. Multiple colors can stack: <b>kili loje jelo</b> = red-yellow fruit (orange-ish).",
        examples: [
          { tp: "kili loje", en: "red fruit", note: "Color after noun" },
          { tp: "kasi laso", en: "blue/green plant", note: "'laso' covers blue AND green" },
          { tp: "soweli walo", en: "white animal", note: "Color as modifier" },
          { tp: "telo pimeja", en: "black water / dark liquid", note: "Coffee, ink, etc." },
          { tp: "lipu jelo", en: "yellow paper / document", note: "Describing objects" }
        ],
        pitfall: "Colors come AFTER the noun, not before like in English. 'loje kili' would mean 'red's fruit' (fruit of redness)."
      },
      {
        title: "Colors as predicates",
        explanation: "To say something IS a color, use <b>li</b>: <b>kili li loje</b> = the fruit is red. This is a complete sentence.",
        examples: [
          { tp: "kili li loje", en: "The fruit is red.", note: "Color as predicate" },
          { tp: "telo li laso", en: "The water is blue.", note: "Describing state" },
          { tp: "ma li jelo", en: "The land is yellow.", note: "Desert, autumn, etc." },
          { tp: "sewi li walo", en: "The sky is white.", note: "Cloudy day" },
          { tp: "tomo li pimeja", en: "The house is dark.", note: "No lights" }
        ],
        pitfall: "Remember: 'kili loje' (red fruit) vs 'kili li loje' (the fruit is red) — these are different!"
      },
      {
        title: "laso — blue AND green",
        explanation: "Toki pona uses ONE word for the blue-green spectrum. <b>laso</b> covers sky blue, ocean blue, leaf green, grass green — the 'cool' colors. Context clarifies.",
        examples: [
          { tp: "sewi li laso", en: "The sky is blue.", note: "Sky context = blue" },
          { tp: "kasi li laso", en: "The plant is green.", note: "Plant context = green" },
          { tp: "telo li laso", en: "The water is blue/green.", note: "Could be either" },
          { tp: "len laso", en: "blue/green clothes", note: "Context needed" },
          { tp: "kasi laso suli", en: "big green plant", note: "Stacked modifiers" }
        ],
        pitfall: "Don't try to distinguish blue from green — toki pona treats them as one color family. If you must specify, use compounds like 'laso sewi' (sky-blue) or 'laso kasi' (plant-green)."
      },
      {
        title: "Temperature: seli and lete",
        explanation: "<b>seli</b> means hot, warm, fire, cooked. <b>lete</b> means cold, cool, raw, frozen. These are opposites that describe temperature.",
        examples: [
          { tp: "telo seli", en: "hot water", note: "For tea, bathing" },
          { tp: "telo lete", en: "cold water", note: "Refreshing drink" },
          { tp: "moku seli", en: "hot food / cooked food", note: "'seli' can mean cooked" },
          { tp: "moku lete", en: "cold food / raw food", note: "'lete' can mean raw/uncooked" },
          { tp: "tenpo lete", en: "cold time / winter", note: "Season" },
          { tp: "seli li lon", en: "There is fire. / It's hot.", note: "'seli' as noun = fire" }
        ],
        pitfall: "'seli' as a noun means 'fire' or 'heat source'. 'ilo seli' = heating device, stove."
      },
      {
        title: "Taste and texture: suwi and jaki",
        explanation: "<b>suwi</b> means sweet, cute, adorable, fragrant. <b>jaki</b> means dirty, gross, disgusting, toxic. These describe sensory and emotional reactions.",
        examples: [
          { tp: "moku suwi", en: "sweet food / dessert", note: "Taste" },
          { tp: "soweli suwi", en: "cute animal", note: "Appearance/feeling" },
          { tp: "kon suwi", en: "sweet smell / fragrance", note: "Pleasant scent" },
          { tp: "telo jaki", en: "dirty water / sewage", note: "Unclean" },
          { tp: "ma jaki", en: "polluted land / dump", note: "Toxic area" },
          { tp: "ni li jaki", en: "This is gross.", note: "Expression of disgust" }
        ],
        pitfall: "'suwi' is always positive (sweet, cute, nice). 'jaki' is always negative (dirty, gross, bad). They're opposites in a sense."
      },
      {
        title: "Subjective quality: nasa",
        explanation: "<b>nasa</b> means strange, unusual, weird, silly, drunk, crazy. It describes deviation from normal — which can be good, bad, or neutral.",
        examples: [
          { tp: "jan nasa", en: "strange person / weird person / drunk person", note: "Context matters!" },
          { tp: "toki nasa", en: "strange speech / nonsense / silly talk", note: "Unusual language" },
          { tp: "musi nasa", en: "weird game / strange entertainment", note: "Unusual fun" },
          { tp: "ona li nasa", en: "They are weird / drunk / acting strange.", note: "Various meanings" },
          { tp: "mi pilin nasa", en: "I feel strange / weird / dizzy.", note: "Unusual feeling" }
        ],
        pitfall: "'nasa' is neutral — it can be fun-weird, scary-weird, or just unusual. The specific flavor comes from context."
      },
      {
        title: "Combining descriptors",
        explanation: "Multiple descriptive words stack after the noun. Order generally goes from most essential to least essential characteristic.",
        examples: [
          { tp: "telo seli loje", en: "hot red water", note: "Temperature + color" },
          { tp: "soweli suwi lili walo", en: "small cute white animal", note: "Multiple qualities" },
          { tp: "moku seli suwi", en: "hot sweet food", note: "Temp + taste" },
          { tp: "tomo pimeja lete", en: "dark cold house", note: "Color + temp" },
          { tp: "jan nasa suli", en: "big strange person", note: "Quality + size" }
        ],
        pitfall: "Too many modifiers can get confusing. If you need precision, use 'pi' to regroup (covered in Lesson 9)."
      },
      {
        title: "Colors as nouns",
        explanation: "Color words can be nouns meaning 'the color X' or things associated with that color.",
        examples: [
          { tp: "loje li pona tawa mi", en: "I like red. (Red is good to me.)", note: "Color as subject" },
          { tp: "mi wile e laso", en: "I want blue/green.", note: "Color as object" },
          { tp: "pimeja li kama", en: "Darkness is coming.", note: "'pimeja' = darkness" },
          { tp: "walo li lon sewi", en: "White/light is in the sky.", note: "Clouds, bright sky" },
          { tp: "seli li wawa", en: "Fire is powerful.", note: "'seli' as noun" }
        ],
        pitfall: "When colors are nouns, they often refer to the abstract concept or dominant feature of that color."
      }
    ],
    
    keyInsight: "Toki pona's descriptive vocabulary is intentionally minimal — five colors cover the full spectrum, and subjective words like 'nasa' and 'jaki' depend heavily on context. This forces speakers to focus on what REALLY matters about something rather than precise categorization."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "loje",
      primaryMeaning: "red, reddish",
      roles: {
        adjective: "red, reddish, orange-red, pink-red",
        noun: "the color red, something red"
      },
      notes: "Covers the warm red spectrum: blood red, fire red, orange-ish, some pinks. Often associated with heat, passion, warning.",
      compounds: [
        { tp: "telo loje", en: "blood, red liquid" },
        { tp: "kili loje", en: "red fruit (tomato, apple, etc.)" },
        { tp: "seli loje", en: "red fire, flames" },
        { tp: "loje jelo", en: "orange (red-yellow)" },
        { tp: "len loje", en: "red clothes" }
      ]
    },
    {
      word: "jelo",
      primaryMeaning: "yellow, yellowish",
      roles: {
        adjective: "yellow, golden, light orange",
        noun: "the color yellow, something yellow"
      },
      notes: "Covers yellow spectrum: sunshine yellow, gold, light orange, amber. Associated with sun, warmth, brightness.",
      compounds: [
        { tp: "suno jelo", en: "yellow sun, golden sunlight" },
        { tp: "kili jelo", en: "yellow fruit (banana, lemon)" },
        { tp: "mani jelo", en: "gold (yellow money)" },
        { tp: "kasi jelo", en: "yellow plant, autumn leaves" },
        { tp: "jelo loje", en: "orange (yellow-red)" }
      ]
    },
    {
      word: "laso",
      primaryMeaning: "blue, green, blue-green",
      roles: {
        adjective: "blue, green, teal, cyan",
        noun: "the color blue/green, something blue/green"
      },
      notes: "Toki pona does NOT distinguish blue from green — both are 'laso'. Sky blue, ocean blue, leaf green, grass green all use this word. Context clarifies.",
      compounds: [
        { tp: "telo laso", en: "blue water, green water" },
        { tp: "sewi laso", en: "blue sky" },
        { tp: "kasi laso", en: "green plant" },
        { tp: "laso sewi", en: "sky blue (blue like sky)" },
        { tp: "laso kasi", en: "plant green (green like plants)" }
      ]
    },
    {
      word: "walo",
      primaryMeaning: "white, whitish, pale, light-colored",
      roles: {
        adjective: "white, pale, light, blank",
        noun: "the color white, whiteness, light"
      },
      notes: "Covers white and pale colors: snow white, cream, pale skin tones, bleached, blank. Associated with light, purity, emptiness.",
      compounds: [
        { tp: "telo walo", en: "milk, white liquid" },
        { tp: "ko walo", en: "white powder/paste (flour, snow)" },
        { tp: "lipu walo", en: "blank paper" },
        { tp: "sewi walo", en: "white sky, cloudy sky" },
        { tp: "len walo", en: "white clothes" }
      ]
    },
    {
      word: "pimeja",
      primaryMeaning: "black, dark, unlit",
      roles: {
        adjective: "black, dark, dim, unlit",
        noun: "darkness, shadow, the color black"
      },
      notes: "Covers black and darkness: ink black, shadow, unlit areas, dark colors. Opposite of 'walo'. Also means 'dark' as in no light.",
      compounds: [
        { tp: "tenpo pimeja", en: "night, dark time" },
        { tp: "telo pimeja", en: "coffee, ink, black liquid" },
        { tp: "tomo pimeja", en: "dark room, unlit house" },
        { tp: "ma pimeja", en: "dark land, shadowy place" },
        { tp: "soweli pimeja", en: "black animal" }
      ]
    },
    {
      word: "seli",
      primaryMeaning: "fire, heat, hot, warm",
      roles: {
        adjective: "hot, warm, cooked, burning",
        noun: "fire, heat source, warmth",
        verbTransitive: "to heat, to cook, to warm up"
      },
      notes: "Covers heat in all forms: fire, cooking heat, warm temperature, spicy food. 'seli e moku' = to cook food. Opposite of 'lete'.",
      compounds: [
        { tp: "telo seli", en: "hot water, tea, soup" },
        { tp: "ilo seli", en: "stove, heater, fire-making tool" },
        { tp: "moku seli", en: "hot food, cooked food" },
        { tp: "tenpo seli", en: "summer, hot time" },
        { tp: "ma seli", en: "hot land, desert, tropics" }
      ]
    },
    {
      word: "lete",
      primaryMeaning: "cold, cool, frozen, raw",
      roles: {
        adjective: "cold, cool, frozen, raw, uncooked",
        noun: "cold, coldness, ice",
        verbTransitive: "to cool, to freeze"
      },
      notes: "Covers cold and coolness: ice, refrigerated, raw/uncooked food, cold weather. 'moku lete' can mean 'cold food' or 'raw food'. Opposite of 'seli'.",
      compounds: [
        { tp: "telo lete", en: "cold water, ice water" },
        { tp: "moku lete", en: "cold food, raw food, salad" },
        { tp: "tenpo lete", en: "winter, cold season" },
        { tp: "ma lete", en: "cold land, arctic, tundra" },
        { tp: "ko lete", en: "ice, snow (cold substance)" }
      ]
    },
    {
      word: "suwi",
      primaryMeaning: "sweet, cute, adorable, fragrant",
      roles: {
        adjective: "sweet, cute, adorable, fragrant, innocent",
        noun: "sweetness, candy, cute thing",
        verbTransitive: "to sweeten"
      },
      notes: "Always positive connotation. Used for sweet taste (candy), cute appearance (babies, puppies), pleasant smells (flowers), and endearing behavior.",
      compounds: [
        { tp: "moku suwi", en: "dessert, candy, sweet food" },
        { tp: "telo suwi", en: "sweet drink, juice, soda" },
        { tp: "soweli suwi", en: "cute animal, pet" },
        { tp: "jan suwi", en: "cutie, sweetheart, dear" },
        { tp: "kon suwi", en: "fragrance, sweet smell" }
      ]
    },
    {
      word: "jaki",
      primaryMeaning: "dirty, gross, disgusting, toxic",
      roles: {
        adjective: "dirty, filthy, gross, disgusting, toxic, obscene",
        noun: "dirt, filth, garbage, pollution",
        verbTransitive: "to pollute, to contaminate, to make dirty"
      },
      notes: "Always negative connotation. Physical dirtiness, moral disgust, pollution, toxic substances, obscene content. 'jaki' can also be an exclamation: 'Gross!'",
      compounds: [
        { tp: "telo jaki", en: "sewage, polluted water" },
        { tp: "kon jaki", en: "bad smell, pollution, stink" },
        { tp: "ma jaki", en: "polluted area, dump, wasteland" },
        { tp: "moku jaki", en: "spoiled food, garbage" },
        { tp: "toki jaki", en: "profanity, obscene speech" }
      ]
    },
    {
      word: "nasa",
      primaryMeaning: "strange, unusual, weird, silly, drunk",
      roles: {
        adjective: "strange, unusual, weird, silly, crazy, drunk, intoxicated",
        noun: "strangeness, weirdness, silliness",
        verbTransitive: "to make weird, to intoxicate"
      },
      notes: "Neutral word — can be positive (fun-weird), negative (scary-weird), or neutral (just unusual). Also specifically means 'drunk' or 'intoxicated'. Context determines meaning.",
      compounds: [
        { tp: "jan nasa", en: "weird person, drunk person" },
        { tp: "toki nasa", en: "nonsense, weird speech, silly talk" },
        { tp: "telo nasa", en: "alcohol, intoxicating drink" },
        { tp: "musi nasa", en: "weird game, strange fun" },
        { tp: "pilin nasa", en: "strange feeling, dizzy, high" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    colorModifiers: [
      { tp: "kili loje li pona", en: "Red fruit is good.", gloss: "fruit + red | (li) | good", note: "Color modifying noun" },
      { tp: "mi wile e kasi laso", en: "I want a green plant.", gloss: "I | want | (e) | plant + blue/green", note: "Plant context = green" },
      { tp: "tomo jelo li suli", en: "The yellow house is big.", gloss: "house + yellow | (li) | big", note: "Color + predicate" },
      { tp: "mi lukin e waso pimeja", en: "I see a black bird.", gloss: "I | see | (e) | bird + black", note: "Color describing animal" },
      { tp: "lipu walo li lon", en: "There is blank/white paper.", gloss: "paper + white | (li) | exist", note: "'walo' = blank/white" }
    ],
    
    colorPredicates: [
      { tp: "sewi li laso", en: "The sky is blue.", gloss: "sky | (li) | blue", note: "Color as predicate" },
      { tp: "kasi li laso ala", en: "The plant is not green.", gloss: "plant | (li) | blue/green + not", note: "Negated color" },
      { tp: "telo li pimeja", en: "The water is dark/black.", gloss: "water | (li) | dark", note: "Could be ink, coffee" },
      { tp: "ni li loje anu jelo?", en: "Is this red or yellow?", gloss: "this | (li) | red | or | yellow", note: "Color question with anu" },
      { tp: "suno li jelo wawa", en: "The sun is intensely yellow.", gloss: "sun | (li) | yellow + intense", note: "'wawa' intensifies" }
    ],
    
    temperatureExamples: [
      { tp: "telo seli li pona", en: "Hot water is good.", gloss: "water + hot | (li) | good", note: "Temperature modifier" },
      { tp: "mi moku e moku lete", en: "I eat cold/raw food.", gloss: "I | eat | (e) | food + cold", note: "'lete' can mean raw" },
      { tp: "tenpo seli la mi lape mute", en: "In summer, I sleep a lot.", gloss: "time + hot | (la) | I | sleep | much", note: "Seasonal reference" },
      { tp: "ma ni li lete mute", en: "This land is very cold.", gloss: "land + this | (li) | cold + very", note: "Arctic region" },
      { tp: "o seli e moku!", en: "Heat up the food! / Cook the food!", gloss: "(o) | heat | (e) | food", note: "'seli' as verb" }
    ],
    
    tasteAndTexture: [
      { tp: "moku suwi li pona tawa mi", en: "I like sweet food.", gloss: "food + sweet | (li) | good | to | me", note: "Opinion + suwi" },
      { tp: "soweli ni li suwi a!", en: "This animal is so cute!", gloss: "animal + this | (li) | cute | (a)!", note: "'a' for emphasis" },
      { tp: "telo ni li jaki", en: "This water is dirty/gross.", gloss: "water + this | (li) | dirty", note: "Describing contamination" },
      { tp: "o tawa weka tan ma jaki", en: "Go away from the polluted area.", gloss: "(o) | go | away | from | land + dirty", note: "Warning about pollution" },
      { tp: "kon li jaki. o open e lupa", en: "The air is bad. Open the window.", gloss: "air | (li) | gross | (o) | open | (e) | hole", note: "Bad smell situation" }
    ],
    
    nasaExamples: [
      { tp: "jan ni li nasa", en: "This person is strange/drunk.", gloss: "person + this | (li) | strange", note: "Context determines meaning" },
      { tp: "mi pilin nasa", en: "I feel weird/dizzy.", gloss: "I | feel | strange", note: "Unusual internal state" },
      { tp: "toki ona li nasa", en: "Their speech is weird/silly.", gloss: "speech + their | (li) | strange", note: "Unusual language" },
      { tp: "musi nasa li pona tawa mi", en: "I like weird games.", gloss: "game + strange | (li) | good | to | me", note: "Positive 'nasa'" },
      { tp: "o moku ala e telo nasa", en: "Don't drink alcohol.", gloss: "(o) | eat + not | (e) | water + strange", note: "'telo nasa' = alcohol" }
    ],
    
    combinedDescriptions: [
      { tp: "mi jo e soweli suwi lili walo", en: "I have a small cute white animal.", gloss: "I | have | (e) | animal + cute + small + white", note: "Multiple modifiers" },
      { tp: "moku seli suwi li pona", en: "Hot sweet food is good.", gloss: "food + hot + sweet | (li) | good", note: "Temp + taste" },
      { tp: "tomo pimeja lete li ike", en: "A dark cold house is bad.", gloss: "house + dark + cold | (li) | bad", note: "Color + temp" },
      { tp: "kasi laso suli li lon ma ni", en: "Big green plants are in this land.", gloss: "plant + green + big | (li) | at | land + this", note: "Color + size" },
      { tp: "telo loje seli", en: "hot red liquid (blood? tomato soup?)", gloss: "water + red + hot", note: "Color + temp compound" }
    ],
    
    colorsAsNouns: [
      { tp: "loje li pona tawa mi", en: "I like red. (Red is good to me.)", gloss: "red | (li) | good | to | me", note: "Color as noun/subject" },
      { tp: "mi wile e laso", en: "I want blue/green.", gloss: "I | want | (e) | blue/green", note: "Color as object" },
      { tp: "pimeja li kama", en: "Darkness is coming.", gloss: "darkness | (li) | come", note: "'pimeja' = darkness" },
      { tp: "walo li weka", en: "The white/light is gone.", gloss: "white | (li) | away", note: "Lights out" },
      { tp: "seli li wawa", en: "Fire is powerful.", gloss: "fire | (li) | powerful", note: "'seli' = fire (noun)" }
    ],
    
    ambiguous: [
      { tp: "telo laso", meanings: ["blue water (ocean)", "green water (pond/algae)"], likely: "Context decides", note: "'laso' covers both" },
      { tp: "moku lete", meanings: ["cold food", "raw food", "chilled food"], likely: "Usually cold or raw", note: "Both meanings common" },
      { tp: "jan nasa", meanings: ["strange person", "drunk person", "silly person"], likely: "Context needed", note: "Check for alcohol context" },
      { tp: "seli li lon", meanings: ["Fire exists / There's fire", "It's hot"], likely: "Usually 'there's fire'", note: "Fire vs temperature" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What color or quality does the modifier describe?",
      questions: [
        {
          tp: "kili **loje**",
          target: "loje",
          en: "red fruit",
          options: ["blue/green", "red", "yellow", "white"],
          correct: 1,
          explanation: "'loje' means red."
        },
        {
          tp: "kasi **laso**",
          target: "laso",
          en: "green plant",
          options: ["red", "blue/green", "black", "white"],
          correct: 1,
          explanation: "'laso' means blue OR green — with plants, it's green."
        },
        {
          tp: "telo **pimeja**",
          target: "pimeja",
          en: "dark liquid",
          options: ["white", "yellow", "black/dark", "red"],
          correct: 2,
          explanation: "'pimeja' means black or dark."
        },
        {
          tp: "moku **seli**",
          target: "seli",
          en: "hot food",
          options: ["cold", "hot/cooked", "sweet", "strange"],
          correct: 1,
          explanation: "'seli' means hot or cooked."
        },
        {
          tp: "soweli **suwi**",
          target: "suwi",
          en: "cute animal",
          options: ["dirty", "strange", "sweet/cute", "cold"],
          correct: 2,
          explanation: "'suwi' means sweet or cute."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct color or descriptive word:",
      questions: [
        {
          tp: "sewi li _____",
          en: "The sky is blue.",
          answer: "laso",
          hint: "Blue and green use the same word"
        },
        {
          tp: "telo _____ li pona",
          en: "Hot water is good.",
          answer: "seli",
          hint: "Temperature word for 'hot'"
        },
        {
          tp: "soweli _____ li lili",
          en: "The white animal is small.",
          answer: "walo",
          hint: "Color for white/pale"
        },
        {
          tp: "jan ni li _____",
          en: "This person is strange/drunk.",
          answer: "nasa",
          hint: "Word for weird/unusual/intoxicated"
        },
        {
          tp: "ma ni li _____",
          en: "This land is dirty/polluted.",
          answer: "jaki",
          hint: "Word for dirty/gross"
        },
        {
          tp: "moku _____ li pona tawa mi",
          en: "I like sweet food.",
          answer: "suwi",
          hint: "Word for sweet/cute"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "kili li loje", expectedType: "color predicate", hint: "Color as predicate" },
        { tp: "mi wile e telo lete", expectedType: "temperature", hint: "Cold drink" },
        { tp: "tomo pimeja li ike", expectedType: "color + judgment", hint: "Dark house" },
        { tp: "ona li moku e moku suwi", expectedType: "taste", hint: "Sweet food" },
        { tp: "jan nasa li toki", expectedType: "quality", hint: "Strange person" },
        { tp: "tenpo seli la mi tawa telo", expectedType: "season + activity", hint: "Hot season = summer" }
      ],
      answers: [
        "The fruit is red.",
        "I want cold water.",
        "The dark house is bad.",
        "They eat sweet food / dessert.",
        "The strange/drunk person speaks.",
        "In summer, I go to the water. (swimming)"
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'laso' means only blue, not green.",
          answer: false,
          explanation: "'laso' covers BOTH blue and green — toki pona doesn't distinguish them."
        },
        {
          statement: "'seli' can be used as a verb meaning 'to cook'.",
          answer: true,
          explanation: "Yes! 'mi seli e moku' = I cook food / I heat up food."
        },
        {
          statement: "'jaki' has a positive meaning like 'earthy' or 'natural'.",
          answer: false,
          explanation: "'jaki' is always negative — dirty, gross, toxic, disgusting."
        },
        {
          statement: "'nasa' can mean both 'strange' and 'drunk'.",
          answer: true,
          explanation: "Correct! 'nasa' covers unusual, weird, silly, AND intoxicated."
        },
        {
          statement: "'moku lete' can mean either 'cold food' or 'raw food'.",
          answer: true,
          explanation: "Yes! 'lete' = cold/raw, so 'moku lete' can mean either."
        },
        {
          statement: "'pimeja' only means the color black, not darkness.",
          answer: false,
          explanation: "'pimeja' means black, dark, AND darkness (noun). 'tomo pimeja' = dark room."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["kili", "jelo", "li", "suwi"],
          validAnswers: ["kili jelo li suwi"],
          translations: ["Yellow fruit is sweet."],
          hint: "Subject (noun + modifier) + li + predicate"
        },
        {
          words: ["mi", "lukin", "e", "soweli", "walo", "suwi"],
          validAnswers: ["mi lukin e soweli walo suwi", "mi lukin e soweli suwi walo"],
          translations: ["I see a cute white animal."],
          hint: "Multiple modifiers can go in different orders"
        },
        {
          words: ["telo", "pimeja", "seli", "li", "pona"],
          validAnswers: ["telo pimeja seli li pona", "telo seli pimeja li pona"],
          translations: ["Hot black liquid (coffee) is good."],
          hint: "Multiple modifiers on the subject"
        },
        {
          words: ["o", "seli", "e", "moku"],
          validAnswers: ["o seli e moku"],
          translations: ["Cook the food! / Heat the food!"],
          hint: "'seli' as a verb with command"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Is the color/descriptor used as a MODIFIER (after noun) or PREDICATE (after li)?",
      questions: [
        {
          tp: "kili **loje**",
          target: "loje",
          en: "red fruit",
          options: ["Modifier (describing kili)", "Predicate (stating kili is loje)"],
          correct: 0,
          explanation: "'loje' directly follows 'kili' without 'li' — it's a modifier."
        },
        {
          tp: "kili li **loje**",
          target: "loje",
          en: "the fruit is red",
          options: ["Modifier (describing kili)", "Predicate (stating kili is loje)"],
          correct: 1,
          explanation: "'loje' comes after 'li' — it's the predicate saying what kili is."
        },
        {
          tp: "tomo **pimeja** li lete",
          target: "pimeja",
          en: "the dark house is cold",
          options: ["Modifier (describing tomo)", "Predicate (stating tomo is pimeja)"],
          correct: 0,
          explanation: "'pimeja' directly follows 'tomo' before 'li' — it modifies 'tomo'."
        },
        {
          tp: "moku li **seli**",
          target: "seli",
          en: "the food is hot",
          options: ["Modifier (describing moku)", "Predicate (stating moku is seli)"],
          correct: 1,
          explanation: "'seli' comes after 'li' — it's the predicate."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This phrase has multiple possible meanings. What are they?",
      questions: [
        {
          tp: "telo laso",
          meanings: 2,
          answers: ["blue water (ocean, pool)", "green water (algae, pond)"],
          followUp: "How would context help?",
          likelyAnswer: "If talking about ocean/sky → blue. If talking about plants/ponds → green."
        },
        {
          tp: "jan nasa",
          meanings: 3,
          answers: ["strange/weird person", "drunk/intoxicated person", "silly/crazy person"],
          followUp: "How would you know which meaning?",
          likelyAnswer: "Look for alcohol context (telo nasa, musi) → drunk. Otherwise → strange/silly."
        },
        {
          tp: "moku lete",
          meanings: 2,
          answers: ["cold food (refrigerated, chilled)", "raw food (uncooked, like salad)"],
          followUp: "Which is more common?",
          likelyAnswer: "Both are common — 'cold' for temperature, 'raw' for cooking state."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "moku pi tenpo suno — Lunch",
    intro: "A story about preparing and eating a colorful meal. Notice how colors and descriptions add detail!",
    paragraphs: [
      { tp: "tenpo moku li kama.", en: "Meal time is coming.", note: "Setting the scene" },
      { tp: "mi wile moku e moku pona.", en: "I want to eat good food.", note: "Desire stated" },
      { tp: "mi jo e kili loje.", en: "I have red fruit.", note: "Tomato or apple?" },
      { tp: "mi jo e kasi laso.", en: "I have green plants.", note: "Vegetables, lettuce" },
      { tp: "mi jo e pan jelo.", en: "I have yellow bread.", note: "Describing food color" },
      { tp: "mi seli e telo.", en: "I heat water.", note: "'seli' as verb" },
      { tp: "telo seli li pona tawa moku.", en: "Hot water is good for eating.", note: "Tea or soup" },
      { tp: "moku mi li loje li laso li jelo!", en: "My food is red and green and yellow!", note: "Multiple predicates" },
      { tp: "ni li pona lukin.", en: "This is good-looking.", note: "Visual appeal" },
      { tp: "mi moku. moku li suwi.", en: "I eat. The food is sweet.", note: "Taste description" },
      { tp: "insa mi li pona. mi pilin pona.", en: "My stomach is good. I feel good.", note: "Satisfaction after eating" }
    ],
    comprehension: [
      { question: "What colors are in the meal?", answer: "Red (loje), green (laso), and yellow (jelo)", evidence: "moku mi li loje li laso li jelo" },
      { question: "What does the speaker do with water?", answer: "Heats it (seli e telo)", evidence: "mi seli e telo" },
      { question: "How does the food taste?", answer: "Sweet (suwi)", evidence: "moku li suwi" },
      { question: "How does the speaker feel after eating?", answer: "Good (pilin pona)", evidence: "mi pilin pona" }
    ],
    challenge: "Describe your favorite meal using at least 3 color or descriptive words from this lesson!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Colors and descriptors create many useful compounds:",
    items: [
      { tp: "telo pimeja", en: "coffee, ink (black water)", literal: "water + black", lesson: "Any dark liquid" },
      { tp: "telo loje", en: "blood (red water)", literal: "water + red", lesson: "Or tomato juice, wine" },
      { tp: "telo seli", en: "tea, hot water, soup", literal: "water + hot", lesson: "Any hot liquid" },
      { tp: "telo nasa", en: "alcohol (strange water)", literal: "water + strange", lesson: "Intoxicating drink" },
      { tp: "moku suwi", en: "dessert, candy", literal: "food + sweet", lesson: "Sweet treats" },
      { tp: "ko walo", en: "snow, flour (white substance)", literal: "substance + white", lesson: "White powder/paste" },
      { tp: "tenpo seli", en: "summer (hot time)", literal: "time + hot", lesson: "Warm season" },
      { tp: "tenpo lete", en: "winter (cold time)", literal: "time + cold", lesson: "Cold season" },
      { tp: "ma jaki", en: "dump, polluted area", literal: "land + dirty", lesson: "Contaminated place" },
      { tp: "soweli suwi", en: "pet, cute animal", literal: "animal + cute", lesson: "Beloved animal" }
    ],
    teaser: "Next lesson: Body & Health! Learn sijelo (body), selo (skin), lupa (hole/door), and more to describe physical states."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "NOUN + COLOR", example: "kili loje", meaning: "red fruit" },
      { pattern: "NOUN li COLOR", example: "kili li loje", meaning: "the fruit is red" },
      { pattern: "NOUN + seli/lete", example: "telo seli", meaning: "hot water" },
      { pattern: "seli e NOUN", example: "mi seli e moku", meaning: "I cook/heat the food" },
      { pattern: "NOUN + suwi", example: "soweli suwi", meaning: "cute animal" },
      { pattern: "NOUN + jaki", example: "telo jaki", meaning: "dirty water" },
      { pattern: "NOUN + nasa", example: "jan nasa", meaning: "strange/drunk person" }
    ],
    remember: [
      "loje = red | jelo = yellow | laso = blue/green | walo = white | pimeja = black/dark",
      "'laso' covers BOTH blue AND green — context clarifies",
      "seli = hot, fire, cook | lete = cold, raw, freeze",
      "suwi = sweet, cute (always positive)",
      "jaki = dirty, gross (always negative)",
      "nasa = strange, weird, drunk (neutral — context determines)",
      "Colors can be modifiers (kili loje) OR predicates (kili li loje)",
      "Colors as nouns: 'loje li pona tawa mi' = I like red"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson13;
}
