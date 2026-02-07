/**
 * Lesson 9: pi — Complex Noun Phrases
 * The regrouping particle for multi-word modifiers
 */

const lesson9 = {
  id: 9,
  title: "pi — Complex Noun Phrases",
  desc: "Using pi to create multi-word modifiers and complex noun phrases",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "<b>pi</b> is the regrouping particle. Without it, modifiers stack one-by-one onto the head noun. With <b>pi</b>, you group multiple words together as a single modifier: <b>jan pi sona mute</b> = person of much-knowledge (expert).",
    
    concepts: [
      {
        title: "How modifier stacking works (without pi)",
        explanation: "In toki pona, each word after the head noun modifies the whole phrase so far. <b>tomo telo</b> = water-room (bathroom). <b>tomo telo suli</b> = big bathroom (big water-room). The 'suli' modifies 'tomo telo' as a unit.",
        examples: [
          { tp: "tomo telo", en: "bathroom (water room)", note: "'telo' modifies 'tomo'" },
          { tp: "tomo telo suli", en: "big bathroom", note: "'suli' modifies 'tomo telo'" },
          { tp: "jan pona", en: "friend (good person)", note: "'pona' modifies 'jan'" },
          { tp: "jan pona mute", en: "many friends", note: "'mute' modifies 'jan pona'" },
          { tp: "kili loje lili", en: "small red fruit", note: "loje → kili, lili → kili loje" }
        ],
        pitfall: "Without 'pi', modifiers apply one at a time. 'tomo telo suli' = BIG (bathroom), not room of (big water)."
      },
      {
        title: "What pi does: regrouping",
        explanation: "<b>pi</b> groups the words after it into a single modifier unit. <b>tomo pi telo suli</b> = room of big-water (room with a lot of water). Compare: <b>tomo telo suli</b> = big bathroom.",
        examples: [
          { tp: "tomo pi telo suli", en: "room of much water", note: "'telo suli' is grouped as one modifier" },
          { tp: "tomo telo suli", en: "big bathroom", note: "Without pi: 'suli' modifies 'tomo telo'" },
          { tp: "jan pi sona mute", en: "knowledgeable person, expert", note: "'sona mute' = much knowledge" },
          { tp: "jan sona mute", en: "many wise people", note: "Without pi: 'mute' modifies 'jan sona'" },
          { tp: "telo pi kasi kule", en: "flower water, herbal infusion", note: "'kasi kule' = colorful plant/flower" }
        ],
        pitfall: "'pi' doesn't mean 'of'! It regroups. 'jan pi sona' is wrong — you need at least 2 words after 'pi'."
      },
      {
        title: "The two-word rule",
        explanation: "You need <b>at least two words</b> after <b>pi</b> to form a valid group. <b>jan pi sona</b> is grammatically wrong because 'sona' alone could just be 'jan sona'. Use <b>pi</b> when you have a multi-word modifier.",
        examples: [
          { tp: "jan sona", en: "wise person (no pi needed)", note: "Single modifier: no pi" },
          { tp: "jan pi sona mute", en: "person of much knowledge", note: "Multi-word modifier: use pi" },
          { tp: "tomo pona", en: "good room", note: "Single modifier: no pi" },
          { tp: "tomo pi jan pona", en: "friend's room", note: "Multi-word modifier: jan pona" },
          { tp: "kulupu jan", en: "group of people", note: "Single modifier: no pi" },
          { tp: "kulupu pi jan pona", en: "group of friends", note: "Multi-word: 'jan pona' as unit" }
        ],
        pitfall: "WRONG: 'jan pi sona'. RIGHT: 'jan sona' (one modifier) or 'jan pi sona mute' (grouped modifier)."
      },
      {
        title: "Possession with pi",
        explanation: "One common use of <b>pi</b> is possession. <b>tomo pi jan Lisa</b> = Lisa's house (room of person-Lisa). The possessor phrase acts as a modifier.",
        examples: [
          { tp: "tomo pi jan Lisa", en: "Lisa's house", note: "'jan Lisa' modifies 'tomo'" },
          { tp: "ilo pi mi", en: "(incorrect — single word)", note: "Should just be 'ilo mi'" },
          { tp: "ilo pi jan ni", en: "this person's tool", note: "'jan ni' is multi-word" },
          { tp: "moku pi mama mi", en: "my parent's food", note: "'mama mi' = my parent" },
          { tp: "lipu pi kulupu ni", en: "this group's book/document", note: "'kulupu ni' = this group" }
        ],
        pitfall: "'ilo mi' = my tool. 'ilo pi mi' is wrong! Only use 'pi' with multi-word possessors."
      },
      {
        title: "pi for abstract qualities",
        explanation: "<b>pi</b> lets you describe things by their characteristics. <b>jan pi lawa pona</b> = person of good-leadership (good leader). <b>jan pi pilin pona</b> = person of good-feelings (happy person).",
        examples: [
          { tp: "jan pi lawa pona", en: "good leader", note: "'lawa pona' = good leadership/mind" },
          { tp: "jan pi pilin ike", en: "sad/upset person", note: "'pilin ike' = bad feelings" },
          { tp: "kulupu pi pali mute", en: "hardworking group", note: "'pali mute' = much work" },
          { tp: "jan pi kalama musi", en: "musician", note: "'kalama musi' = fun sounds (music)" },
          { tp: "ijo pi kule loje", en: "red thing", note: "'kule loje' = color red" }
        ],
        pitfall: "Think of what follows 'pi' as describing a key quality or association of the head noun."
      },
      {
        title: "Multiple pi phrases",
        explanation: "You can use multiple <b>pi</b> phrases to add multiple complex modifiers. Each <b>pi</b> starts a new modifier group: <b>jan pi sona mute pi pali pona</b> = expert who works well.",
        examples: [
          { tp: "jan pi sona mute pi pali pona", en: "knowledgeable person who works well", note: "Two pi groups" },
          { tp: "tomo pi moku pi jan mute", en: "eating room for many people", note: "Dining hall for many" },
          { tp: "lipu pi sona pi toki pona", en: "book about toki pona knowledge", note: "Document of tp knowledge" },
          { tp: "jan pi ma Mewika pi toki Inli", en: "American English speaker", note: "Person from USA who speaks English" }
        ],
        pitfall: "Multiple 'pi' phrases can get complex. Keep it simple when possible!"
      },
      {
        title: "pi with proper nouns (names)",
        explanation: "When a proper noun (name) is part of a multi-word modifier, you use <b>pi</b>: <b>tomo pi jan Sonja</b> = Sonja's house. <b>lipu pi toki pona</b> = book of toki pona.",
        examples: [
          { tp: "tomo pi jan Sonja", en: "Sonja's house", note: "'jan Sonja' needs pi" },
          { tp: "lipu pi toki pona", en: "the Toki Pona book", note: "'toki pona' = the language" },
          { tp: "nasin pi jan ni", en: "this person's way/method", note: "'jan ni' = this person" },
          { tp: "kulupu pi ma Mewika", en: "American group", note: "'ma Mewika' = America" },
          { tp: "sitelen pi toki pona", en: "toki pona writing/image", note: "Writing in/about toki pona" }
        ],
        pitfall: "Remember: 'jan Sonja' is already two words, so you need 'pi' for it to modify another noun."
      },
      {
        title: "When NOT to use pi",
        explanation: "Don't use <b>pi</b> with single-word modifiers. <b>jan pona</b> is correct — <b>jan pi pona</b> is wrong. Also don't use <b>pi</b> with <b>mi</b> or <b>sina</b> alone.",
        examples: [
          { tp: "ilo mi", en: "my tool (NOT 'ilo pi mi')", note: "'mi' is single word" },
          { tp: "jan pona", en: "friend (NOT 'jan pi pona')", note: "'pona' is single word" },
          { tp: "telo wawa", en: "strong drink (NOT 'telo pi wawa')", note: "'wawa' is single word" },
          { tp: "tomo suli", en: "big building (NOT 'tomo pi suli')", note: "'suli' is single word" }
        ],
        pitfall: "Single modifiers don't need 'pi'. Only use 'pi' to group 2+ words into a unit."
      },
      {
        title: "Common pi patterns",
        explanation: "Some <b>pi</b> patterns are very common and worth memorizing as units.",
        examples: [
          { tp: "jan pi pona mute", en: "very good person", note: "'pona mute' = very good" },
          { tp: "tomo pi telo nasa", en: "bar (room of strange-water)", note: "Where alcohol is served" },
          { tp: "jan pi pali sona", en: "professional, expert worker", note: "Skilled worker" },
          { tp: "ma pi waso mute", en: "place with many birds", note: "Bird sanctuary, etc." },
          { tp: "kulupu pi jan pona", en: "friend group", note: "Group of friends" }
        ],
        pitfall: "These are common phrases. Practice recognizing them as units!"
      },
      {
        title: "Contrasting with and without pi",
        explanation: "The best way to understand <b>pi</b> is to compare phrases with and without it.",
        examples: [
          { tp: "tomo telo suli vs tomo pi telo suli", en: "big bathroom vs room with much water", note: "Different meanings!" },
          { tp: "jan sona mute vs jan pi sona mute", en: "many wise people vs very knowledgeable person", note: "mute placement" },
          { tp: "moku kasi pona vs moku pi kasi pona", en: "good vegetable food vs food of good plants", note: "Subtle but different" },
          { tp: "ilo pali suli vs ilo pi pali suli", en: "big work-tool vs tool for big work", note: "What's big?" }
        ],
        pitfall: "Context usually clarifies meaning, but 'pi' gives you precise control over grouping."
      }
    ],
    
    keyInsight: "<b>pi</b> regroups words after it into a single modifier unit. Without <b>pi</b>: modifiers stack one by one. With <b>pi</b>: multiple words act as one modifier. Remember: <b>pi</b> needs at least TWO words after it. 'jan sona' (wise person) vs 'jan pi sona mute' (person of much knowledge)."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "pi",
      primaryMeaning: "(regrouping particle)",
      roles: {
        particle: "groups following words into a single modifier"
      },
      notes: "Not a word with meaning on its own! It's purely grammatical. Requires 2+ words after it. Does NOT mean 'of' — it regroups modifiers.",
      compounds: [
        { tp: "jan pi sona mute", en: "expert (person of much knowledge)" },
        { tp: "tomo pi jan pona", en: "friend's house" },
        { tp: "kulupu pi jan pona", en: "friend group" },
        { tp: "lipu pi toki pona", en: "toki pona book" },
        { tp: "telo pi kasi kule", en: "flower tea/infusion" }
      ]
    },
    {
      word: "kulupu",
      primaryMeaning: "group, community, organization",
      roles: {
        noun: "group, community, team, organization, society, company",
        adjective: "communal, collective, grouped",
        verbTransitive: "to gather, to assemble, to group together"
      },
      notes: "Any collection of things or people. 'kulupu jan' = group of people. 'kulupu mi' = my group/community.",
      compounds: [
        { tp: "kulupu jan", en: "group of people" },
        { tp: "kulupu pali", en: "work team, company" },
        { tp: "kulupu pi jan pona", en: "friend group" },
        { tp: "kulupu ma", en: "nation, country" },
        { tp: "kulupu toki", en: "language community" }
      ]
    },
    {
      word: "kalama",
      primaryMeaning: "sound, noise, voice",
      roles: {
        noun: "sound, noise, voice, audio",
        adjective: "noisy, loud, audible",
        verbIntransitive: "to make sound, to be loud",
        verbTransitive: "to sound out, to pronounce, to play (music)"
      },
      notes: "Any kind of sound. 'kalama musi' = music (fun sounds). 'kalama ike' = bad noise.",
      compounds: [
        { tp: "kalama musi", en: "music" },
        { tp: "kalama ike", en: "noise, bad sound" },
        { tp: "kalama toki", en: "speech, spoken words" },
        { tp: "ilo kalama", en: "musical instrument" },
        { tp: "jan pi kalama musi", en: "musician" }
      ]
    },
    {
      word: "kule",
      primaryMeaning: "color, colorful, painted",
      roles: {
        noun: "color, pigment, paint",
        adjective: "colorful, painted, of a color",
        verbTransitive: "to color, to paint"
      },
      notes: "Generic color word. Specific colors: 'kule loje' = red color. 'kule ala' = colorless, gray.",
      compounds: [
        { tp: "kule loje", en: "red (color)" },
        { tp: "kule jelo", en: "yellow (color)" },
        { tp: "kule laso", en: "blue/green (color)" },
        { tp: "kule walo", en: "white (color)" },
        { tp: "kule pimeja", en: "black (color)" },
        { tp: "kasi kule", en: "flower (colorful plant)" }
      ]
    },
    {
      word: "lawa",
      primaryMeaning: "head, mind, control, lead",
      roles: {
        noun: "head, mind, brain, leader, authority",
        adjective: "main, leading, controlling",
        verbTransitive: "to lead, to control, to rule, to direct"
      },
      notes: "Both physical head and metaphorical leadership/control. 'jan lawa' = leader. 'lawa pona' = good leadership.",
      compounds: [
        { tp: "jan lawa", en: "leader, boss" },
        { tp: "lawa pona", en: "good judgment, good leadership" },
        { tp: "tomo lawa", en: "headquarters, main building" },
        { tp: "ma lawa", en: "capital, main region" },
        { tp: "nasin lawa", en: "leading principle, main way" }
      ]
    },
    {
      word: "lipu",
      primaryMeaning: "paper, book, document, website",
      roles: {
        noun: "flat bendable thing, paper, card, book, document, record, website",
        adjective: "flat, documented, written"
      },
      notes: "Any flat bendable surface with information. Extended to mean websites and digital documents.",
      compounds: [
        { tp: "lipu sona", en: "educational book, wiki" },
        { tp: "lipu musi", en: "comic, fun book" },
        { tp: "lipu toki", en: "letter, message" },
        { tp: "lipu pi toki pona", en: "toki pona book" },
        { tp: "lipu kulupu", en: "community document, constitution" }
      ]
    },
    {
      word: "sitelen",
      primaryMeaning: "image, picture, write, draw",
      roles: {
        noun: "image, picture, drawing, writing, symbol",
        adjective: "pictured, written, visual",
        verbTransitive: "to draw, to write, to record visually"
      },
      notes: "Visual representations. 'sitelen tawa' = movie (moving image). 'sitelen pona' = the toki pona script.",
      compounds: [
        { tp: "sitelen tawa", en: "movie, video" },
        { tp: "sitelen pona", en: "toki pona script" },
        { tp: "ilo sitelen", en: "pen, pencil, camera" },
        { tp: "sitelen musi", en: "art, fun image" },
        { tp: "tomo sitelen", en: "art room, studio" }
      ]
    },
    {
      word: "pilin",
      primaryMeaning: "feel, emotion, heart, sense",
      roles: {
        noun: "feeling, emotion, heart (metaphorical), instinct",
        adjective: "emotional, feeling, sensitive",
        verbIntransitive: "to feel (emotionally)",
        verbTransitive: "to feel (touch), to sense, to think (emotionally)"
      },
      notes: "Covers emotions, physical feelings, and intuition. 'pilin pona' = good feelings, happy. 'pilin ike' = bad feelings, sad.",
      compounds: [
        { tp: "pilin pona", en: "happiness, good feelings" },
        { tp: "pilin ike", en: "sadness, bad feelings" },
        { tp: "pilin wawa", en: "strong emotion, passion" },
        { tp: "pilin seli", en: "anger, heated emotion" },
        { tp: "jan pi pilin pona", en: "happy person" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basicPi: [
      { tp: "jan pi sona mute", en: "knowledgeable person, expert", gloss: "person | of | knowledge | much", note: "'sona mute' modifies 'jan'" },
      { tp: "tomo pi telo suli", en: "room with much water", gloss: "room | of | water | much", note: "'telo suli' as one modifier" },
      { tp: "kulupu pi jan pona", en: "group of friends", gloss: "group | of | person | good", note: "'jan pona' = friends" },
      { tp: "moku pi kasi kule", en: "flower food, herbal food", gloss: "food | of | plant | colorful", note: "'kasi kule' = flowers" },
      { tp: "ilo pi pali suli", en: "tool for big work", gloss: "tool | of | work | big", note: "Heavy-duty tool" }
    ],
    
    withoutPiComparison: [
      { tp: "tomo telo suli", en: "big bathroom", gloss: "room | water | big", note: "'suli' modifies 'tomo telo'" },
      { tp: "jan sona mute", en: "many wise people", gloss: "person | wise | many", note: "'mute' modifies 'jan sona'" },
      { tp: "ilo pali suli", en: "big work tool", gloss: "tool | work | big", note: "'suli' modifies 'ilo pali'" },
      { tp: "moku kasi pona", en: "good plant food", gloss: "food | plant | good", note: "'pona' modifies 'moku kasi'" },
      { tp: "telo kasi loje", en: "red plant water", gloss: "water | plant | red", note: "'loje' modifies whole phrase" }
    ],
    
    possessionWithPi: [
      { tp: "tomo pi jan Sonja", en: "Sonja's house", gloss: "room | of | person | Sonja", note: "'jan Sonja' is the possessor" },
      { tp: "ilo pi mama mi", en: "my parent's tool", gloss: "tool | of | parent | my", note: "'mama mi' = my parent" },
      { tp: "lipu pi kulupu ni", en: "this group's book", gloss: "book | of | group | this", note: "'kulupu ni' = this group" },
      { tp: "moku pi jan lawa", en: "the leader's food", gloss: "food | of | person | leading", note: "'jan lawa' = leader" },
      { tp: "tomo pi jan pi sona mute", en: "the expert's house", gloss: "room | of | person | of | knowledge | much", note: "Nested pi" }
    ],
    
    abstractQualities: [
      { tp: "jan pi lawa pona", en: "good leader, person of good judgment", gloss: "person | of | head/lead | good", note: "'lawa pona' = good leadership" },
      { tp: "jan pi pilin ike", en: "sad person", gloss: "person | of | feeling | bad", note: "'pilin ike' = bad feelings" },
      { tp: "kulupu pi pali mute", en: "hardworking group", gloss: "group | of | work | much", note: "'pali mute' = much work" },
      { tp: "jan pi kalama musi", en: "musician", gloss: "person | of | sound | fun", note: "'kalama musi' = music" },
      { tp: "tomo pi musi mute", en: "entertainment center, fun place", gloss: "room | of | fun | much", note: "Place of much fun" }
    ],
    
    multiplePi: [
      { tp: "jan pi sona mute pi pali pona", en: "knowledgeable good worker", gloss: "person | of | knowledge | much | of | work | good", note: "Two pi groups" },
      { tp: "tomo pi moku pi jan mute", en: "dining room for many", gloss: "room | of | food | of | person | many", note: "Eating room, many people" },
      { tp: "lipu pi sona pi toki pona", en: "toki pona knowledge book", gloss: "document | of | knowledge | of | language | good", note: "tp learning resource" },
      { tp: "kulupu pi jan pona pi ma Mewika", en: "American friend group", gloss: "group | of | friend | of | land | America", note: "Friends from America" }
    ],
    
    commonPiPhrases: [
      { tp: "telo pi kasi kule", en: "herbal tea, flower water", gloss: "water | of | plant | colorful", note: "Infusion of flowers" },
      { tp: "tomo pi telo nasa", en: "bar (alcohol place)", gloss: "room | of | water | strange", note: "'telo nasa' = alcohol" },
      { tp: "jan pi toki pona", en: "toki pona speaker", gloss: "person | of | language | simple", note: "Someone who speaks tp" },
      { tp: "ma pi waso mute", en: "bird sanctuary", gloss: "land | of | bird | many", note: "Place with many birds" },
      { tp: "nasin pi jan pona", en: "friendly way, friend's method", gloss: "way | of | person | good", note: "How friends do things" }
    ],
    
    wrongVsRight: [
      { tp: "✓ jan sona (NOT jan pi sona)", en: "wise person", gloss: "person | wise", note: "Single modifier: no pi needed" },
      { tp: "✓ ilo mi (NOT ilo pi mi)", en: "my tool", gloss: "tool | my", note: "Single pronoun: no pi" },
      { tp: "✓ jan pi sona mute", en: "expert", gloss: "person | of | knowledge | much", note: "Multi-word: use pi" },
      { tp: "✓ tomo pi jan pona", en: "friend's room", gloss: "room | of | person | good", note: "Multi-word possessor: use pi" }
    ],
    
    newVocabUsage: [
      { tp: "kulupu li suli", en: "The group is big.", gloss: "group | (li) | big", note: "'kulupu' as subject" },
      { tp: "mi kute e kalama", en: "I hear a sound.", gloss: "I | hear | (e) | sound", note: "'kalama' as object" },
      { tp: "kasi ni li kule", en: "This plant is colorful.", gloss: "plant | this | (li) | colorful", note: "'kule' as predicate" },
      { tp: "lawa mi li pona", en: "My mind is good. / I feel clear-headed.", gloss: "head | my | (li) | good", note: "'lawa' = mind" },
      { tp: "mi lukin e lipu", en: "I read a book.", gloss: "I | look | (e) | book", note: "'lipu' as object" },
      { tp: "sitelen ni li pona", en: "This picture is good.", gloss: "image | this | (li) | good", note: "'sitelen' as subject" },
      { tp: "pilin sina li seme?", en: "How do you feel?", gloss: "feeling | your | (li) | what", note: "Asking about emotions" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "piNeeded",
      instruction: "Does this phrase need 'pi'? Choose the correct version.",
      questions: [
        {
          options: ["tomo pona", "tomo pi pona"],
          correct: 0,
          meaning: "good room",
          explanation: "Single modifier 'pona' — no pi needed."
        },
        {
          options: ["jan sona mute", "jan pi sona mute"],
          correct: 1,
          meaning: "very knowledgeable person",
          explanation: "'sona mute' is a multi-word modifier describing the type of person."
        },
        {
          options: ["ilo mi", "ilo pi mi"],
          correct: 0,
          meaning: "my tool",
          explanation: "Single pronoun 'mi' — no pi needed."
        },
        {
          options: ["tomo jan Sonja", "tomo pi jan Sonja"],
          correct: 1,
          meaning: "Sonja's house",
          explanation: "'jan Sonja' is multi-word — needs pi."
        },
        {
          options: ["kulupu jan", "kulupu pi jan"],
          correct: 0,
          meaning: "group of people",
          explanation: "Single modifier 'jan' — no pi needed."
        },
        {
          options: ["kulupu jan pona", "kulupu pi jan pona"],
          correct: 1,
          meaning: "group of friends",
          explanation: "'jan pona' = friends, multi-word modifier."
        }
      ]
    },
    
    {
      type: "meaningDifference",
      instruction: "What's the difference in meaning?",
      questions: [
        {
          pair: ["tomo telo suli", "tomo pi telo suli"],
          meanings: ["big bathroom", "room with much water"],
          explanation: "Without pi: 'suli' modifies 'tomo telo' (big bathroom). With pi: 'telo suli' is grouped (much-water room)."
        },
        {
          pair: ["jan sona mute", "jan pi sona mute"],
          meanings: ["many wise people", "very knowledgeable person"],
          explanation: "Without pi: 'mute' = many (wise people). With pi: 'sona mute' = much knowledge."
        },
        {
          pair: ["ilo pali suli", "ilo pi pali suli"],
          meanings: ["big work tool", "tool for big work"],
          explanation: "Without pi: big (tool for work). With pi: tool for (big work)."
        },
        {
          pair: ["telo kasi pona", "telo pi kasi pona"],
          meanings: ["good plant water", "water of good plants"],
          explanation: "Without pi: good (plant-water). With pi: water from (good plants)."
        }
      ]
    },
    
    {
      type: "translateToPi",
      instruction: "Translate using 'pi' where appropriate:",
      questions: [
        { en: "the leader's tool", answer: "ilo pi jan lawa", hint: "'jan lawa' = leader (multi-word)" },
        { en: "person of bad feelings (sad person)", answer: "jan pi pilin ike", hint: "'pilin ike' = bad feelings" },
        { en: "music room", answer: "tomo pi kalama musi", hint: "'kalama musi' = music (fun sounds)" },
        { en: "colorful book", answer: "lipu kule", hint: "Single modifier — no pi!" },
        { en: "book of many pictures", answer: "lipu pi sitelen mute", hint: "'sitelen mute' = many pictures" },
        { en: "the community's way", answer: "nasin pi kulupu", hint: "Wait — 'kulupu' alone is single-word!" }
      ],
      notes: "Trick question! 'nasin kulupu' is correct for 'community's way' since 'kulupu' is one word."
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence with 'pi' if needed:",
      questions: [
        { 
          partial: "tomo _____ telo suli", 
          context: "room with a lot of water", 
          answer: "pi", 
          explanation: "'telo suli' is grouped as one modifier" 
        },
        { 
          partial: "jan _____ pona", 
          context: "good person / friend", 
          answer: "(nothing)", 
          explanation: "Single modifier — no pi" 
        },
        { 
          partial: "kulupu _____ jan pona", 
          context: "friend group", 
          answer: "pi", 
          explanation: "'jan pona' is multi-word" 
        },
        { 
          partial: "ilo _____ mi", 
          context: "my tool", 
          answer: "(nothing)", 
          explanation: "Single pronoun — no pi" 
        },
        { 
          partial: "lipu _____ toki pona", 
          context: "toki pona book", 
          answer: "pi", 
          explanation: "'toki pona' is multi-word" 
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What role does 'pi' play in this sentence?",
      questions: [
        {
          tp: "jan **pi sona mute** li pona",
          target: "pi sona mute",
          options: ["Creates noun phrase 'much knowledge person'", "Means 'of knowledge'", "Separates subject from verb"],
          correct: 0,
          explanation: "'pi' groups 'sona mute' to modify 'jan'."
        },
        {
          tp: "tomo **pi jan Lisa** li suli",
          target: "pi jan Lisa",
          options: ["Shows location", "Shows possession (Lisa's house)", "Shows movement"],
          correct: 1,
          explanation: "'jan Lisa' modifies 'tomo' — Lisa's house."
        },
        {
          tp: "mi lukin e lipu **pi sitelen mute**",
          target: "pi sitelen mute",
          options: ["Book of many pictures", "Picture book that is many", "Many picture books"],
          correct: 0,
          explanation: "'sitelen mute' = many pictures, modifying 'lipu'."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Build a phrase using 'pi':",
      questions: [
        {
          words: ["jan", "pi", "pali", "mute"],
          validAnswers: ["jan pi pali mute"],
          translations: ["hardworking person"],
          hint: "Person of much work"
        },
        {
          words: ["tomo", "pi", "kalama", "musi"],
          validAnswers: ["tomo pi kalama musi"],
          translations: ["music room, concert hall"],
          hint: "Room of fun sounds"
        },
        {
          words: ["kulupu", "pi", "jan", "pona", "mi"],
          validAnswers: ["kulupu pi jan pona mi"],
          translations: ["my friend group"],
          hint: "Group of my good-people"
        },
        {
          words: ["lipu", "pi", "sona", "suli"],
          validAnswers: ["lipu pi sona suli"],
          translations: ["encyclopedia, book of great knowledge"],
          hint: "Document of big knowledge"
        }
      ]
    },
    
    {
      type: "errorCorrection",
      instruction: "Fix the error in this phrase:",
      questions: [
        {
          wrong: "jan pi pona",
          correct: "jan pona",
          explanation: "Single modifier doesn't need 'pi'. 'jan pona' = good person."
        },
        {
          wrong: "ilo pi mi",
          correct: "ilo mi",
          explanation: "Single pronoun doesn't need 'pi'. 'ilo mi' = my tool."
        },
        {
          wrong: "tomo jan Sonja",
          correct: "tomo pi jan Sonja",
          explanation: "Multi-word possessor needs 'pi'. 'jan Sonja' = Sonja."
        },
        {
          wrong: "kulupu pi jan",
          correct: "kulupu jan",
          explanation: "Single word after 'pi' is wrong. 'kulupu jan' = people group."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each phrase:",
      questions: [
        { tp: "jan pi pilin pona", expectedMeaning: "happy person", note: "'pilin pona' = good feelings" },
        { tp: "telo pi kasi kule", expectedMeaning: "flower tea / herbal water", note: "'kasi kule' = flower" },
        { tp: "sitelen pi toki pona", expectedMeaning: "toki pona writing", note: "The script/writing" },
        { tp: "kulupu pi pali suli", expectedMeaning: "big project team", note: "'pali suli' = big work" },
        { tp: "lawa pi jan ni", expectedMeaning: "this person's head/mind", note: "Possession" },
        { tp: "nasin pi kalama musi", expectedMeaning: "musical method/style", note: "Way of making music" }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'pi' means 'of' in toki pona.",
          answer: false,
          explanation: "False! 'pi' is a regrouping particle, not a word meaning 'of'. It groups modifiers."
        },
        {
          statement: "You need at least two words after 'pi'.",
          answer: true,
          explanation: "Correct! 'jan pi sona' is wrong. 'jan pi sona mute' is right."
        },
        {
          statement: "'jan pona' and 'jan pi pona' mean the same thing.",
          answer: false,
          explanation: "False! 'jan pi pona' is grammatically incorrect (single word after pi)."
        },
        {
          statement: "'jan sona mute' and 'jan pi sona mute' have different meanings.",
          answer: true,
          explanation: "Yes! 'jan sona mute' = many wise people. 'jan pi sona mute' = very knowledgeable person."
        },
        {
          statement: "'ilo mi' needs 'pi' to show possession.",
          answer: false,
          explanation: "False! Single-word possessors don't need 'pi'. 'ilo mi' is correct."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "kulupu pi jan pona — Friend Group",
    intro: "A story about a group of friends and their different qualities. Notice how 'pi' creates complex descriptions!",
    paragraphs: [
      { tp: "kulupu pi jan pona mi li suli.", en: "My friend group is big.", note: "'kulupu pi jan pona' = friend group" },
      { tp: "jan Lisa li jan pi sona mute. ona li sona e ijo mute.", en: "Lisa is a very knowledgeable person. She knows many things.", note: "'jan pi sona mute' = expert" },
      { tp: "jan Toma li jan pi kalama musi. ona li pali e kalama pona.", en: "Tom is a musician. He makes good sounds.", note: "'jan pi kalama musi' = musician" },
      { tp: "jan Sesi li jan pi pilin pona. ona li musi mute.", en: "Jesse is a happy person. They have lots of fun.", note: "'jan pi pilin pona' = happy person" },
      { tp: "mi? mi jan pi lipu mute. mi jo e lipu suli mute.", en: "Me? I'm a person of many books. I have many big books.", note: "'jan pi lipu mute' = book collector" },
      { tp: "tomo pi kulupu mi li pona. tomo ni li lon ma pi kasi mute.", en: "Our group's place is good. This place is in a land of many plants.", note: "Double 'pi' usage" },
      { tp: "mi mute li moku lon tomo pi moku pona.", en: "We eat at a good food place.", note: "'tomo pi moku pona' = good restaurant" },
      { tp: "jan pi sona mute li toki e ijo sin. mi mute li kute.", en: "The expert talks about new things. We listen.", note: "Lisa shares knowledge" },
      { tp: "jan pi kalama musi li open kalama. kulupu li pilin pona!", en: "The musician starts making sounds. The group feels good!", note: "Tom plays music" },
      { tp: "tenpo pini la kulupu mi li pona. tenpo ni la kulupu mi li pona kin.", en: "In the past, my group was good. Now, my group is still good.", note: "Lasting friendship" }
    ],
    comprehension: [
      { question: "Who is the expert (jan pi sona mute)?", answer: "Lisa (jan Lisa)", evidence: "jan Lisa li jan pi sona mute" },
      { question: "What does Tom do?", answer: "He's a musician (makes music)", evidence: "jan Toma li jan pi kalama musi" },
      { question: "Where is the group's place?", answer: "In a land with many plants", evidence: "tomo ni li lon ma pi kasi mute" },
      { question: "What does the narrator collect?", answer: "Books (lipu mute)", evidence: "mi jan pi lipu mute" }
    ],
    challenge: "Describe YOUR friend group using 'pi'. Who is the 'jan pi sona mute'? The 'jan pi kalama musi'? The 'jan pi pilin pona'?"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary with pi",
    intro: "Here are common compound phrases that use 'pi' to create precise meanings:",
    items: [
      { tp: "jan pi pona mute", en: "very good person", literal: "person of goodness-much", lesson: "Emphasis through 'pi'" },
      { tp: "tomo pi telo nasa", en: "bar, pub", literal: "room of water-strange", lesson: "'telo nasa' = alcohol" },
      { tp: "jan pi toki pona", en: "toki pona speaker", literal: "person of language-simple", lesson: "tp community member" },
      { tp: "telo pi kasi kule", en: "herbal tea, flower water", literal: "water of plant-colorful", lesson: "Infusions and teas" },
      { tp: "ma pi waso mute", en: "bird sanctuary", literal: "land of bird-many", lesson: "Place with many birds" },
      { tp: "jan pi lawa pona", en: "good leader", literal: "person of leadership-good", lesson: "Leadership quality" },
      { tp: "nasin pi pali pona", en: "good work method", literal: "way of work-good", lesson: "Best practices" },
      { tp: "kulupu pi jan sama", en: "family", literal: "group of person-same", lesson: "'jan sama' = sibling/family" },
      { tp: "tomo pi kalama musi", en: "concert hall, music venue", literal: "room of sound-fun", lesson: "Where music happens" },
      { tp: "lipu pi sitelen tawa", en: "movie script, video book", literal: "document of image-moving", lesson: "Film-related document" }
    ],
    teaser: "Next lesson: la — the context particle! Learn to set up conditions, time frames, and topics for your sentences."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "X pi Y Z", example: "jan pi sona mute", meaning: "X that is [Y Z]: person of much-knowledge" },
      { pattern: "tomo pi jan NAME", example: "tomo pi jan Lisa", meaning: "NAME's house: Lisa's house" },
      { pattern: "jan pi NOUN ADJ", example: "jan pi pilin pona", meaning: "person with [NOUN ADJ]: happy person" },
      { pattern: "kulupu pi X", example: "kulupu pi jan pona", meaning: "group of X: friend group" },
      { pattern: "X pi Y pi Z W", example: "jan pi sona pi pali", meaning: "X with [Y] and [Z W]" },
      { pattern: "NO PI: X Y (single)", example: "jan pona", meaning: "Just X that is Y: friend" },
      { pattern: "NO PI: X mi/sina", example: "tomo mi", meaning: "my/your X: my house" }
    ],
    remember: [
      "'pi' REGROUPS — it doesn't mean 'of'!",
      "Need 2+ words after 'pi': 'jan pi sona mute' ✓",
      "Single modifiers DON'T need 'pi': 'jan pona' ✓",
      "'mi' and 'sina' alone don't need 'pi': 'ilo mi' ✓",
      "Compare: 'jan sona mute' (many wise people) vs 'jan pi sona mute' (expert)",
      "'pi' is for multi-word modifiers that act as a unit",
      "Multiple 'pi' phrases = multiple complex modifiers",
      "Common pattern: possession with names uses 'pi' (tomo pi jan Lisa)"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson9;
}
