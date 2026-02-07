/**
 * Lesson 14: Body & Health
 * Describing physical states and body parts: sijelo, selo, lupa, nena, palisa, sike, ko, moli
 */

const lesson14 = {
  id: 14,
  title: "Body & Health",
  desc: "Describing physical states and body parts with sijelo, selo, lupa, nena, palisa, sike, ko, moli",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Body vocabulary lets you describe physical states, health, and sensations. Combined with earlier body words (lawa, luka, noka, sinpin, monsi, insa), you can discuss the complete human form.",
    
    concepts: [
      {
        title: "Core body vocabulary review",
        explanation: "You've already learned several body-related words. Let's review them before adding new ones.",
        examples: [
          { tp: "lawa", en: "head, mind, to lead", note: "From Lesson 9" },
          { tp: "luka", en: "hand, arm, five", note: "From Lesson 11" },
          { tp: "noka", en: "foot, leg, lower part", note: "From Lesson 7" },
          { tp: "sinpin", en: "front, face, chest, wall", note: "From Lesson 7" },
          { tp: "monsi", en: "back, behind, rear", note: "From Lesson 7" },
          { tp: "insa", en: "inside, middle, stomach", note: "From Lesson 7" }
        ],
        pitfall: "Remember: these words can be body parts OR spatial terms depending on context."
      },
      {
        title: "sijelo — the whole body",
        explanation: "<b>sijelo</b> means body, torso, or physical form. It refers to the entire physical being or specifically the main trunk of the body.",
        examples: [
          { tp: "sijelo mi li pona", en: "My body is good. / I'm healthy.", note: "General health" },
          { tp: "sijelo mi li ike", en: "My body is bad. / I'm sick.", note: "Illness" },
          { tp: "sijelo ona li wawa", en: "Their body is strong.", note: "Physical strength" },
          { tp: "mi pilin e sijelo mi", en: "I feel my body.", note: "Body awareness" },
          { tp: "sijelo li wile lape", en: "The body needs sleep.", note: "Physical needs" }
        ],
        pitfall: "'sijelo mi li ike' is the standard way to say 'I'm sick' — your body is in a bad state."
      },
      {
        title: "selo — skin, surface, boundary",
        explanation: "<b>selo</b> means skin, outer surface, shell, peel, or boundary. It's the outer layer of anything — body, fruit, building.",
        examples: [
          { tp: "selo mi li seli", en: "My skin is hot. / I have a fever.", note: "Skin as health indicator" },
          { tp: "selo kili li loje", en: "The fruit's skin is red.", note: "Peel, outer layer" },
          { tp: "selo tomo", en: "wall, outer surface of building", note: "Building's 'skin'" },
          { tp: "selo li pakala", en: "The skin/surface is damaged.", note: "Wound, damage" },
          { tp: "soweli li jo e selo wawa", en: "The animal has tough skin/hide.", note: "Animal hide" }
        ],
        pitfall: "'selo' is the boundary/surface, not depth. For inside, use 'insa'."
      },
      {
        title: "lupa — hole, opening, door, window",
        explanation: "<b>lupa</b> means hole, opening, door, window, orifice. Any gap or passageway through something.",
        examples: [
          { tp: "o open e lupa", en: "Open the door/window.", note: "Common command" },
          { tp: "kon li kama tan lupa", en: "Air comes from the hole/window.", note: "Ventilation" },
          { tp: "lupa li lon selo", en: "There's a hole in the surface.", note: "Wound, tear" },
          { tp: "tomo li jo e lupa mute", en: "The building has many openings.", note: "Windows, doors" },
          { tp: "mi lukin lon lupa", en: "I look through the opening.", note: "Looking through" }
        ],
        pitfall: "Body orifices (mouth, eyes, ears, nose) can be described with 'lupa' but usually have more specific terms."
      },
      {
        title: "nena — bump, hill, nose, button",
        explanation: "<b>nena</b> means bump, protrusion, hill, mountain, nose, button. Anything that sticks out from a surface.",
        examples: [
          { tp: "nena mi li suli", en: "My nose is big.", note: "Nose as face protrusion" },
          { tp: "nena li lon selo mi", en: "There's a bump on my skin.", note: "Bump, pimple, etc." },
          { tp: "nena ma li sewi", en: "The mountain is high.", note: "Hill, mountain" },
          { tp: "o pilin e nena ni", en: "Feel this bump/button.", note: "Touch protrusion" },
          { tp: "nena meli li suli", en: "The woman's breasts are large.", note: "Body protrusions" }
        ],
        pitfall: "'nena' is any protrusion — context determines if it's nose, hill, bump, or button."
      },
      {
        title: "Shapes: palisa and sike",
        explanation: "<b>palisa</b> means long thin thing — stick, rod, finger, bone. <b>sike</b> means round thing — circle, ball, wheel, cycle.",
        examples: [
          { tp: "palisa luka", en: "finger (hand-stick)", note: "Fingers are hand-sticks" },
          { tp: "palisa noka", en: "toe (foot-stick)", note: "Toes are foot-sticks" },
          { tp: "palisa sijelo", en: "bone (body-stick)", note: "Bones are body-sticks" },
          { tp: "sike lawa", en: "head (round head-thing)", note: "Head is roundish" },
          { tp: "sike oko", en: "eyeball (round eye-thing)", note: "Eyes are round" },
          { tp: "ni li sike", en: "This is round/circular.", note: "Shape description" }
        ],
        pitfall: "'palisa' = long and thin. 'sike' = round. These describe shapes, not just specific objects."
      },
      {
        title: "ko — soft substance, paste, powder",
        explanation: "<b>ko</b> means semi-solid substance — clay, paste, powder, dough, goo. Things that aren't liquid but aren't solid either.",
        examples: [
          { tp: "ko jaki", en: "poop, waste, gross substance", note: "Bodily waste" },
          { tp: "ko walo", en: "flour, white powder", note: "Kitchen substance" },
          { tp: "ko seli", en: "lava, hot paste", note: "Molten material" },
          { tp: "mi pali e ko", en: "I make dough/paste.", note: "Creating mixture" },
          { tp: "ko li lon insa mi", en: "Paste/substance is inside me.", note: "Digestion context" }
        ],
        pitfall: "'ko' covers a wide range: toothpite, mud, dough, powder, clay, bodily substances..."
      },
      {
        title: "moli — death, dying, killing",
        explanation: "<b>moli</b> means dead, dying, or to kill. A serious word used carefully.",
        examples: [
          { tp: "soweli li moli", en: "The animal is dead / The animal died.", note: "State or event" },
          { tp: "jan li moli e pipi", en: "The person killed the bug.", note: "Transitive: to kill" },
          { tp: "kasi li moli", en: "The plant is dead/dying.", note: "Plant death" },
          { tp: "mi wile ala moli", en: "I don't want to die.", note: "Expressing fear" },
          { tp: "moli li kama tawa ale", en: "Death comes to everyone.", note: "Philosophical" }
        ],
        pitfall: "'moli' is about death/killing — use it appropriately. For 'almost dead' or 'very tired', add context."
      },
      {
        title: "Health expressions",
        explanation: "Combine body vocabulary to express health states, illness, and physical sensations.",
        examples: [
          { tp: "sijelo mi li ike", en: "I'm sick.", note: "Standard illness expression" },
          { tp: "lawa mi li pakala", en: "My head hurts. / I have a headache.", note: "Headache" },
          { tp: "insa mi li ike", en: "My stomach hurts. / I feel sick inside.", note: "Stomachache or nausea" },
          { tp: "mi pilin lete", en: "I feel cold.", note: "Temperature sensation" },
          { tp: "selo mi li seli", en: "My skin is hot. (fever)", note: "Fever indicator" },
          { tp: "mi ken ala tawa", en: "I can't walk/move.", note: "Mobility issue" }
        ],
        pitfall: "Toki pona describes symptoms literally rather than using disease names. Describe what's wrong!"
      }
    ],
    
    keyInsight: "Body vocabulary in toki pona focuses on basic parts and sensations rather than precise anatomy. You describe what you feel and see: 'my head hurts', 'my body is sick', 'the surface is damaged'. This makes health discussions accessible without medical terminology."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "sijelo",
      primaryMeaning: "body, torso, physical state",
      roles: {
        adjective: "physical, bodily, corporeal",
        noun: "body, torso, main part, physical form"
      },
      notes: "The whole physical being. 'sijelo mi li pona/ike' is how you say you're healthy/sick. Can also mean the main trunk of something.",
      compounds: [
        { tp: "sijelo pona", en: "healthy body, good health" },
        { tp: "sijelo ike", en: "sick body, illness" },
        { tp: "sijelo wawa", en: "strong body" },
        { tp: "sijelo mute", en: "many bodies, crowd of people" },
        { tp: "pali sijelo", en: "exercise, physical work" }
      ]
    },
    {
      word: "selo",
      primaryMeaning: "skin, surface, boundary, shell",
      roles: {
        adjective: "outer, surface-level",
        noun: "skin, outer surface, shell, peel, boundary, form"
      },
      notes: "The outer layer of anything. Human skin, fruit peel, building exterior, shell. Opposite concept from 'insa' (inside).",
      compounds: [
        { tp: "selo sijelo", en: "body skin" },
        { tp: "selo kili", en: "fruit peel, skin" },
        { tp: "selo kiwen", en: "shell, hard surface" },
        { tp: "selo tomo", en: "wall, building exterior" },
        { tp: "selo seli", en: "hot skin, fever" }
      ]
    },
    {
      word: "lupa",
      primaryMeaning: "hole, opening, door, window",
      roles: {
        adjective: "hollow, open",
        noun: "hole, pit, opening, door, window, orifice"
      },
      notes: "Any opening or gap. Doors, windows, holes in surfaces, body orifices, caves. 'o open e lupa' = open the door.",
      compounds: [
        { tp: "lupa tomo", en: "door, doorway" },
        { tp: "lupa lukin", en: "window (looking-hole)" },
        { tp: "lupa nena", en: "nostril (nose-hole)" },
        { tp: "lupa kute", en: "ear hole" },
        { tp: "lupa suli", en: "cave, large opening" }
      ]
    },
    {
      word: "nena",
      primaryMeaning: "bump, hill, nose, protrusion",
      roles: {
        adjective: "bumpy, hilly, protruding",
        noun: "bump, hill, mountain, nose, button, protrusion"
      },
      notes: "Anything that sticks out from a surface. Nose is the face's bump. Hills are land bumps. Buttons are surface bumps.",
      compounds: [
        { tp: "nena sinpin", en: "nose (face bump)" },
        { tp: "nena ma", en: "hill, mountain" },
        { tp: "nena ma sewi", en: "tall mountain" },
        { tp: "nena lili", en: "small bump, pimple" },
        { tp: "nena meli", en: "breast" }
      ]
    },
    {
      word: "palisa",
      primaryMeaning: "long thin thing, stick, rod",
      roles: {
        adjective: "long and thin, rod-like",
        noun: "stick, rod, staff, bone, finger, long thing"
      },
      notes: "Any long thin object: sticks, poles, bones, fingers, pencils. 'palisa luka' = fingers. 'palisa sijelo' = bones.",
      compounds: [
        { tp: "palisa luka", en: "finger" },
        { tp: "palisa noka", en: "toe" },
        { tp: "palisa sijelo", en: "bone" },
        { tp: "palisa moku", en: "chopstick" },
        { tp: "palisa sitelen", en: "pen, pencil" }
      ]
    },
    {
      word: "sike",
      primaryMeaning: "round, circle, ball, cycle",
      roles: {
        adjective: "round, circular, cyclical, repeating",
        noun: "circle, ball, wheel, cycle, round thing"
      },
      notes: "Round shapes and cyclical concepts. Balls, wheels, circles, cycles. 'sike suno' = year (sun cycle). 'sike mun' = month.",
      compounds: [
        { tp: "sike lawa", en: "head (round head)" },
        { tp: "sike oko", en: "eyeball" },
        { tp: "sike suno", en: "year (sun cycle)" },
        { tp: "sike mun", en: "month (moon cycle)" },
        { tp: "sike tawa", en: "wheel" }
      ]
    },
    {
      word: "ko",
      primaryMeaning: "semi-solid, paste, powder, clay",
      roles: {
        adjective: "semi-solid, powdery, paste-like",
        noun: "clay, dough, paste, powder, semi-solid substance"
      },
      notes: "Substances between liquid and solid: mud, dough, toothpaste, powder, goo. 'ko jaki' is a common euphemism for bodily waste.",
      compounds: [
        { tp: "ko jaki", en: "poop, waste matter" },
        { tp: "ko walo", en: "flour, white powder" },
        { tp: "ko seli", en: "lava, hot goo" },
        { tp: "ko moku", en: "dough, edible paste" },
        { tp: "ko telo", en: "mud, wet earth" }
      ]
    },
    {
      word: "moli",
      primaryMeaning: "death, dead, dying, to kill",
      roles: {
        adjective: "dead, dying, lethal, mortal",
        noun: "death, the dead",
        verbIntransitive: "to die, to be dying",
        verbTransitive: "to kill"
      },
      notes: "A serious word covering death, dying, and killing. 'ona li moli' = they died/are dead. 'mi moli e ona' = I killed them. Use thoughtfully.",
      compounds: [
        { tp: "jan moli", en: "dead person, corpse" },
        { tp: "tenpo moli", en: "time of death" },
        { tp: "ilo moli", en: "weapon, deadly tool" },
        { tp: "moli ala moli", en: "alive (not dead)" },
        { tp: "kama moli", en: "dying, becoming dead" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    bodyParts: [
      { tp: "sijelo mi li wawa", en: "My body is strong.", gloss: "body + my | (li) | strong", note: "Physical strength" },
      { tp: "selo mi li seli", en: "My skin is hot.", gloss: "skin + my | (li) | hot", note: "Fever symptom" },
      { tp: "lawa mi li suli", en: "My head is big.", gloss: "head + my | (li) | big", note: "Head size" },
      { tp: "nena mi li lili", en: "My nose is small.", gloss: "nose + my | (li) | small", note: "Nose size" },
      { tp: "mi jo e palisa luka luka", en: "I have ten fingers.", gloss: "I | have | (e) | stick + hand | five + five", note: "Counting fingers" }
    ],
    
    healthExpressions: [
      { tp: "sijelo mi li ike", en: "I'm sick. / My body is bad.", gloss: "body + my | (li) | bad", note: "Standard illness" },
      { tp: "lawa mi li pakala", en: "My head hurts.", gloss: "head + my | (li) | damaged", note: "Headache" },
      { tp: "insa mi li ike", en: "My stomach hurts. / I feel sick.", gloss: "inside + my | (li) | bad", note: "Stomachache" },
      { tp: "mi pilin ike", en: "I feel bad/sick.", gloss: "I | feel | bad", note: "General malaise" },
      { tp: "mi wile lape", en: "I need to sleep.", gloss: "I | want | sleep", note: "Tiredness" },
      { tp: "mi ken ala tawa", en: "I can't walk/move.", gloss: "I | can + not | go", note: "Mobility issue" }
    ],
    
    lupaExamples: [
      { tp: "o open e lupa", en: "Open the door/window.", gloss: "(o) | open | (e) | hole/door", note: "Common command" },
      { tp: "lupa li suli", en: "The hole/opening is big.", gloss: "hole | (li) | big", note: "Describing opening" },
      { tp: "kon li kama tan lupa", en: "Air comes from the window.", gloss: "air | (li) | come | from | hole", note: "Ventilation" },
      { tp: "mi tawa lon lupa", en: "I go through the door.", gloss: "I | go | at | hole", note: "Passing through" },
      { tp: "lupa li lon selo tomo", en: "There are holes in the wall.", gloss: "hole | (li) | at | skin + house", note: "Windows in wall" }
    ],
    
    shapeDescriptions: [
      { tp: "ni li sike", en: "This is round/circular.", gloss: "this | (li) | round", note: "Shape description" },
      { tp: "ni li palisa", en: "This is long and thin.", gloss: "this | (li) | stick-like", note: "Shape description" },
      { tp: "lawa li sike", en: "The head is round.", gloss: "head | (li) | round", note: "Head shape" },
      { tp: "palisa luka li lili", en: "The fingers are small.", gloss: "stick + hand | (li) | small", note: "Finger size" },
      { tp: "mi lukin e sike suli", en: "I see a big ball/circle.", gloss: "I | see | (e) | round + big", note: "Seeing round thing" }
    ],
    
    koExamples: [
      { tp: "ko li lon ma", en: "Mud/clay is on the ground.", gloss: "paste | (li) | at | land", note: "Substance location" },
      { tp: "mi pali e ko moku", en: "I make dough.", gloss: "I | make | (e) | paste + food", note: "Making dough" },
      { tp: "ko walo li lon poki", en: "White powder (flour) is in the container.", gloss: "paste + white | (li) | at | container", note: "Flour storage" },
      { tp: "ko jaki li ike", en: "Poop is gross.", gloss: "paste + dirty | (li) | bad", note: "Stating the obvious" },
      { tp: "mi wile ala pilin e ko", en: "I don't want to touch the goo.", gloss: "I | want + not | touch | (e) | paste", note: "Aversion" }
    ],
    
    moliExamples: [
      { tp: "soweli li moli", en: "The animal died / is dead.", gloss: "animal | (li) | dead", note: "Death state" },
      { tp: "kasi li moli tan telo ala", en: "The plant died from no water.", gloss: "plant | (li) | die | from | water + not", note: "Cause of death" },
      { tp: "jan li moli e pipi", en: "The person killed the bug.", gloss: "person | (li) | kill | (e) | bug", note: "Killing (transitive)" },
      { tp: "mi wile ala moli", en: "I don't want to die.", gloss: "I | want + not | die", note: "Fear of death" },
      { tp: "ona li moli ala. ona li lape", en: "They're not dead. They're sleeping.", gloss: "they | (li) | dead + not | they | (li) | sleep", note: "Clarification" }
    ],
    
    compoundBodyParts: [
      { tp: "palisa luka mi li pakala", en: "My finger is damaged/broken.", gloss: "stick + hand + my | (li) | damaged", note: "Finger injury" },
      { tp: "sike oko ona li pona lukin", en: "Their eyes (eyeballs) look good.", gloss: "round + eye + their | (li) | good + look", note: "Eye description" },
      { tp: "nena sinpin li suli", en: "The nose is big.", gloss: "bump + face | (li) | big", note: "Alternative for nose" },
      { tp: "selo sijelo li seli", en: "The body skin is hot.", gloss: "skin + body | (li) | hot", note: "Feverish skin" },
      { tp: "lupa kute mi li ike", en: "My ear (ear-hole) is bad.", gloss: "hole + hear + my | (li) | bad", note: "Ear problem" }
    ],
    
    ambiguous: [
      { tp: "selo li pakala", meanings: ["The skin is damaged (wound)", "The surface is broken", "The shell is cracked"], likely: "Context determines", note: "Many surfaces have 'selo'" },
      { tp: "nena li suli", meanings: ["The nose is big", "The mountain is big", "The bump is big"], likely: "Body/geography context helps", note: "'nena' = any protrusion" },
      { tp: "ko li lon", meanings: ["There is paste/mud", "There is powder", "There is dough"], likely: "Kitchen vs outdoor context", note: "'ko' = many substances" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What body part or concept does this word describe?",
      questions: [
        {
          tp: "**sijelo** mi li ike",
          target: "sijelo",
          en: "I'm sick",
          options: ["head", "whole body", "skin", "stomach"],
          correct: 1,
          explanation: "'sijelo' means the whole body or physical state."
        },
        {
          tp: "**selo** mi li seli",
          target: "selo",
          en: "my skin is hot",
          options: ["body", "skin/surface", "inside", "face"],
          correct: 1,
          explanation: "'selo' means skin or outer surface."
        },
        {
          tp: "o open e **lupa**",
          target: "lupa",
          en: "open the door",
          options: ["window", "hole/opening", "wall", "room"],
          correct: 1,
          explanation: "'lupa' means hole, opening, door, or window."
        },
        {
          tp: "**nena** mi li suli",
          target: "nena",
          en: "my nose is big",
          options: ["nose/bump", "head", "mouth", "ear"],
          correct: 0,
          explanation: "'nena' means bump, protrusion, nose, or hill."
        },
        {
          tp: "**palisa** luka",
          target: "palisa",
          en: "finger",
          options: ["round thing", "long thin thing", "soft thing", "hole"],
          correct: 1,
          explanation: "'palisa' means long thin thing — finger is 'hand-stick'."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct body/health word:",
      questions: [
        {
          tp: "_____ mi li ike",
          en: "I'm sick. (My body is bad.)",
          answer: "sijelo",
          hint: "Word for whole body"
        },
        {
          tp: "_____ mi li seli",
          en: "My skin is hot. (Fever)",
          answer: "selo",
          hint: "Word for skin/surface"
        },
        {
          tp: "o open e _____",
          en: "Open the door.",
          answer: "lupa",
          hint: "Word for opening/door"
        },
        {
          tp: "_____ mi li suli",
          en: "My nose is big.",
          answer: "nena",
          hint: "Word for nose/bump"
        },
        {
          tp: "kasi li _____",
          en: "The plant is dead.",
          answer: "moli",
          hint: "Word for death/dead"
        },
        {
          tp: "mi pali e _____ moku",
          en: "I make dough.",
          answer: "ko",
          hint: "Word for paste/dough"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each health/body expression:",
      questions: [
        { tp: "sijelo mi li pona", expectedType: "health", hint: "Body state" },
        { tp: "lawa mi li pakala", expectedType: "pain", hint: "Head problem" },
        { tp: "mi pilin lete", expectedType: "sensation", hint: "Temperature feeling" },
        { tp: "palisa luka mi li lili", expectedType: "body part", hint: "Finger description" },
        { tp: "soweli li moli", expectedType: "death", hint: "Animal state" },
        { tp: "ko jaki li lon", expectedType: "substance", hint: "Gross paste exists" }
      ],
      answers: [
        "I'm healthy. / My body is good.",
        "My head hurts. / I have a headache.",
        "I feel cold.",
        "My fingers are small.",
        "The animal is dead / died.",
        "There is poop/waste."
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'sijelo mi li ike' means 'I'm sick'.",
          answer: true,
          explanation: "Correct! 'My body is bad' = I'm sick."
        },
        {
          statement: "'selo' and 'sijelo' mean the same thing.",
          answer: false,
          explanation: "'sijelo' = body (whole). 'selo' = skin/surface (outer layer)."
        },
        {
          statement: "'lupa' can mean door, window, or any opening.",
          answer: true,
          explanation: "Yes! 'lupa' is any hole or opening."
        },
        {
          statement: "'palisa luka' means 'finger'.",
          answer: true,
          explanation: "Correct! 'Hand-stick' = finger."
        },
        {
          statement: "'nena' only means 'nose'.",
          answer: false,
          explanation: "'nena' means any bump or protrusion — nose, hill, button, etc."
        },
        {
          statement: "'moli' can only be used as an adjective (dead).",
          answer: false,
          explanation: "'moli' can be adjective (dead), verb intransitive (to die), or verb transitive (to kill)."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["sijelo", "mi", "li", "wawa"],
          validAnswers: ["sijelo mi li wawa"],
          translations: ["My body is strong."],
          hint: "Subject + li + predicate"
        },
        {
          words: ["o", "open", "e", "lupa"],
          validAnswers: ["o open e lupa"],
          translations: ["Open the door!"],
          hint: "Command structure"
        },
        {
          words: ["kasi", "li", "moli", "tan", "telo", "ala"],
          validAnswers: ["kasi li moli tan telo ala"],
          translations: ["The plant died from lack of water."],
          hint: "Subject + li + verb + tan + cause"
        },
        {
          words: ["palisa", "luka", "mi", "li", "pakala"],
          validAnswers: ["palisa luka mi li pakala"],
          translations: ["My finger is broken/hurt."],
          hint: "Compound body part as subject"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Is this describing a BODY PART, a SHAPE, or a HEALTH STATE?",
      questions: [
        {
          tp: "**sijelo** mi li ike",
          target: "sijelo",
          en: "I'm sick",
          options: ["Body part", "Shape", "Health state"],
          correct: 2,
          explanation: "'sijelo mi li ike' describes overall health — 'my body is bad' = I'm sick."
        },
        {
          tp: "ni li **sike**",
          target: "sike",
          en: "this is round",
          options: ["Body part", "Shape", "Health state"],
          correct: 1,
          explanation: "'sike' here describes the shape — round/circular."
        },
        {
          tp: "**nena** mi li suli",
          target: "nena",
          en: "my nose is big",
          options: ["Body part", "Shape", "Health state"],
          correct: 0,
          explanation: "'nena' here is a body part — the nose."
        },
        {
          tp: "**selo** mi li seli",
          target: "selo",
          en: "my skin is hot (fever)",
          options: ["Body part", "Shape", "Health state"],
          correct: 2,
          explanation: "While 'selo' is a body part, this sentence describes a health symptom (fever)."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This word has multiple meanings. What could it refer to here?",
      questions: [
        {
          tp: "nena li suli",
          meanings: 3,
          answers: ["The nose is big", "The mountain is big", "The bump is big"],
          followUp: "How do you know which meaning?",
          likelyAnswer: "Context! Talking about face → nose. Geography → mountain. Skin problem → bump."
        },
        {
          tp: "ko li lon poki",
          meanings: 3,
          answers: ["Paste is in the container", "Powder is in the container", "Dough is in the container"],
          followUp: "What context would clarify?",
          likelyAnswer: "Kitchen → dough or flour. Bathroom → toothpaste. Outside → mud."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tenpo ike — A Sick Day",
    intro: "A story about feeling unwell and recovering. Notice how body vocabulary describes symptoms!",
    paragraphs: [
      { tp: "tenpo suno ni la sijelo mi li ike.", en: "Today my body is bad. (I'm sick.)", note: "'sijelo li ike' = being sick" },
      { tp: "lawa mi li pakala.", en: "My head hurts.", note: "Headache" },
      { tp: "insa mi li ike.", en: "My stomach feels bad.", note: "Stomachache" },
      { tp: "selo mi li seli.", en: "My skin is hot.", note: "Fever" },
      { tp: "mi ken ala pali.", en: "I can't work.", note: "Too sick to function" },
      { tp: "mi lape lon supa lape.", en: "I sleep in the bed.", note: "Resting" },
      { tp: "jan pona mi li pana e telo seli.", en: "My friend gives me hot water.", note: "Tea for the sick" },
      { tp: "mi moku e telo seli. ni li pona.", en: "I drink the hot water. This is good.", note: "Tea helps" },
      { tp: "mi lape mute.", en: "I sleep a lot.", note: "Rest is medicine" },
      { tp: "tenpo suno sin la sijelo mi li pona!", en: "The next day, my body is good!", note: "Recovery!" },
      { tp: "mi pilin wawa. mi ken tawa.", en: "I feel strong. I can move/walk.", note: "Back to normal" }
    ],
    comprehension: [
      { question: "What was wrong with the speaker?", answer: "Headache, stomachache, and fever (lawa pakala, insa ike, selo seli)", evidence: "lawa mi li pakala. insa mi li ike. selo mi li seli." },
      { question: "What did the friend give?", answer: "Hot water / tea (telo seli)", evidence: "jan pona mi li pana e telo seli" },
      { question: "How did the speaker recover?", answer: "By sleeping a lot (lape mute)", evidence: "mi lape mute" },
      { question: "How did the speaker feel after recovery?", answer: "Strong and able to move (pilin wawa, ken tawa)", evidence: "mi pilin wawa. mi ken tawa." }
    ],
    challenge: "Describe a time you were sick using at least 3 body vocabulary words from this lesson!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Body words combine to describe specific parts and conditions:",
    items: [
      { tp: "palisa luka", en: "finger (hand-stick)", literal: "stick + hand", lesson: "Fingers are the sticks of the hand" },
      { tp: "palisa noka", en: "toe (foot-stick)", literal: "stick + foot", lesson: "Toes are the sticks of the foot" },
      { tp: "palisa sijelo", en: "bone (body-stick)", literal: "stick + body", lesson: "Bones are the body's sticks" },
      { tp: "sike lawa", en: "head, skull (round head)", literal: "round + head", lesson: "The head is round" },
      { tp: "sike oko", en: "eyeball (round eye)", literal: "round + eye", lesson: "Eyes are round" },
      { tp: "nena sinpin", en: "nose (face-bump)", literal: "bump + face", lesson: "Nose is the face's bump" },
      { tp: "lupa kute", en: "ear (hearing-hole)", literal: "hole + hear", lesson: "Ears are hearing holes" },
      { tp: "ko jaki", en: "poop, waste (gross-paste)", literal: "paste + dirty", lesson: "A common euphemism" },
      { tp: "sike suno", en: "year (sun-cycle)", literal: "cycle + sun", lesson: "A year is one sun cycle" },
      { tp: "ilo moli", en: "weapon (death-tool)", literal: "tool + death", lesson: "A tool for killing" }
    ],
    teaser: "Next lesson: Society & Relationships! Learn mama (parent), meli (woman), mije (man), and more to talk about people and choices."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "sijelo mi li ike", example: "sijelo mi li ike", meaning: "I'm sick" },
      { pattern: "BODY li pakala", example: "lawa mi li pakala", meaning: "My head hurts" },
      { pattern: "selo li seli", example: "selo mi li seli", meaning: "I have a fever" },
      { pattern: "palisa luka", example: "palisa luka mi li lili", meaning: "My fingers are small" },
      { pattern: "o open e lupa", example: "o open e lupa", meaning: "Open the door" },
      { pattern: "X li moli", example: "kasi li moli", meaning: "The plant died" },
      { pattern: "X li moli e Y", example: "ona li moli e pipi", meaning: "They killed the bug" }
    ],
    remember: [
      "sijelo = whole body, physical state | selo = skin, surface",
      "lupa = hole, opening, door, window",
      "nena = bump, hill, nose, protrusion",
      "palisa = long thin thing | sike = round thing",
      "ko = paste, powder, dough, semi-solid",
      "moli = dead, die, kill — use carefully!",
      "'sijelo mi li ike' = I'm sick",
      "'lawa mi li pakala' = I have a headache",
      "'selo mi li seli' = I have a fever",
      "palisa luka = finger | palisa noka = toe"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson14;
}
