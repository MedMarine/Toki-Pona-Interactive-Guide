/**
 * Lesson 7: Spatial Nouns
 * Describing relative positions: sewi, anpa, insa, monsi, sinpin, poka, noka
 */

const lesson7 = {
  id: 7,
  title: "Spatial Nouns",
  desc: "Describing relative positions with sewi, anpa, insa, monsi, sinpin, poka, noka",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Spatial nouns describe WHERE things are <b>relative</b> to something else. They combine with <b>lon</b> to form location phrases: 'lon sewi tomo' = above the house.",
    
    concepts: [
      {
        title: "Spatial nouns as locations",
        explanation: "Spatial nouns like <b>sewi</b> (above), <b>anpa</b> (below), <b>insa</b> (inside) describe relative position. They work WITH other nouns to specify location. The pattern is: <b>lon [SPATIAL] [NOUN]</b>.",
        examples: [
          { tp: "mi lon sewi tomo", en: "I am above the house.", note: "'sewi tomo' = the above-area of the house" },
          { tp: "kili li lon anpa mi", en: "Fruit is under me.", note: "'anpa mi' = my below-area = under me" },
          { tp: "moku li lon insa poki", en: "Food is inside the container.", note: "'insa poki' = the inside of the container" },
          { tp: "jan li lon monsi mi", en: "A person is behind me.", note: "'monsi mi' = my back-area" }
        ],
        pitfall: "The spatial noun describes the AREA, not the object. 'sewi tomo' = the area above the house, not 'high house'."
      },
      {
        title: "Spatial nouns as standalone nouns",
        explanation: "Spatial nouns can also be used independently to mean the body part or area they describe. <b>monsi</b> = back (body), <b>sinpin</b> = face/chest, <b>noka</b> = foot/leg.",
        examples: [
          { tp: "monsi mi li pakala", en: "My back hurts / is damaged.", note: "'monsi' = back (body part)" },
          { tp: "sinpin ona li pona lukin", en: "Their face is good-looking.", note: "'sinpin' = face" },
          { tp: "mi tawa kepeken noka", en: "I go using feet. (I walk)", note: "'noka' = feet/legs" },
          { tp: "luka mi li lon poka mi", en: "My hands are at my sides.", note: "'poka' = side, hip area" }
        ],
        pitfall: "Context determines whether the spatial noun refers to a body part or a relative position!"
      },
      {
        title: "sewi and anpa — vertical axis",
        explanation: "<b>sewi</b> means above, up, sky, high, divine, sacred. <b>anpa</b> means below, down, bottom, lowly, humble. They describe the vertical dimension.",
        examples: [
          { tp: "suno li lon sewi", en: "The sun is in the sky.", note: "'sewi' alone = sky, heaven" },
          { tp: "waso li tawa lon sewi", en: "Birds move in the sky.", note: "Birds fly above" },
          { tp: "kiwen li lon anpa telo", en: "Rocks are under the water.", note: "At the bottom of water" },
          { tp: "mi lape lon anpa kasi", en: "I sleep under a tree.", note: "Below the plant" },
          { tp: "sewi li pona", en: "The sky/heaven is good.", note: "'sewi' as subject" }
        ],
        pitfall: "'sewi' can mean physically above OR spiritually high (divine, sacred). Context matters!"
      },
      {
        title: "sinpin and monsi — front and back",
        explanation: "<b>sinpin</b> means front, face, chest, wall. <b>monsi</b> means back, behind, rear. They describe the front-back axis relative to a reference point.",
        examples: [
          { tp: "tomo li lon sinpin mi", en: "A house is in front of me.", note: "'sinpin mi' = my front" },
          { tp: "jan li lon monsi mi", en: "A person is behind me.", note: "'monsi mi' = my back-area" },
          { tp: "o lukin e sinpin mi", en: "Look at my face!", note: "'sinpin' = face (body part)" },
          { tp: "monsi mi li wawa", en: "My back is strong.", note: "'monsi' = back (body part)" },
          { tp: "mi pana e sitelen lon sinpin tomo", en: "I put a picture on the wall.", note: "'sinpin tomo' = front of house = wall" }
        ],
        pitfall: "'sinpin tomo' can mean 'front of house' or 'wall' (the facing surface of a building)."
      },
      {
        title: "poka and insa — beside and inside",
        explanation: "<b>poka</b> means side, beside, nearby, hip. <b>insa</b> means inside, middle, center, stomach. They describe lateral position and containment.",
        examples: [
          { tp: "jan pona mi li lon poka mi", en: "My friend is beside me.", note: "'poka mi' = my side" },
          { tp: "telo li lon poka tomo", en: "Water is beside the house.", note: "Lateral position" },
          { tp: "moku li lon insa mi", en: "Food is inside me. (I'm full)", note: "'insa mi' = my inside = stomach" },
          { tp: "jan li lon insa tomo", en: "A person is inside the house.", note: "'insa tomo' = the inside of the house" },
          { tp: "poka mi li pakala", en: "My hip hurts.", note: "'poka' = hip/side (body part)" }
        ],
        pitfall: "'insa mi' usually means 'my stomach/inside' (emotions, hunger). 'mi lon insa X' = I'm inside X."
      },
      {
        title: "noka — below and feet",
        explanation: "<b>noka</b> means foot, leg, lower part, bottom. It overlaps with <b>anpa</b> for 'below' but specifically references the foot/leg area or the base of something.",
        examples: [
          { tp: "kiwen li lon noka mi", en: "A rock is under my foot.", note: "'noka mi' = my foot area" },
          { tp: "mi tawa kepeken noka mi", en: "I travel using my legs. (I walk)", note: "'noka' = legs/feet" },
          { tp: "kasi li lon noka tomo", en: "Plants are at the base of the house.", note: "'noka tomo' = foot of house = base" },
          { tp: "noka mi li wawa", en: "My legs are strong.", note: "Body part meaning" },
          { tp: "mi lape lon noka kasi suli", en: "I sleep at the foot of a big tree.", note: "Base of the tree" }
        ],
        pitfall: "'anpa' = generally below/under. 'noka' = specifically at the foot/base level or the legs/feet."
      },
      {
        title: "Combining spatial nouns with adjectives",
        explanation: "Spatial nouns can take adjectives to specify which area: <b>poka suno</b> = sunny side, <b>sewi suli</b> = high up, <b>anpa telo</b> = underwater.",
        examples: [
          { tp: "tomo li lon poka suno", en: "The house is on the sunny side.", note: "Describing which side" },
          { tp: "waso li lon sewi suli", en: "Birds are high up.", note: "'sewi suli' = the high above" },
          { tp: "kala li lon anpa telo", en: "Fish are underwater.", note: "'anpa telo' = water's below = underwater" },
          { tp: "mi lon insa suli", en: "I'm deep inside.", note: "'insa suli' = far inside" },
          { tp: "moku li lon monsi lili", en: "Food is slightly behind.", note: "'monsi lili' = a little behind" }
        ],
        pitfall: "The adjective modifies the spatial noun to specify the degree or type of position."
      },
      {
        title: "Spatial nouns as adjectives/modifiers",
        explanation: "Spatial nouns can modify other nouns: <b>jan sewi</b> = high person, divine person, god. <b>jan anpa</b> = low person, humble person, servant.",
        examples: [
          { tp: "jan sewi li lukin e mi", en: "A god watches me.", note: "'jan sewi' = divine person = god" },
          { tp: "jan anpa li pali", en: "The servant works.", note: "'jan anpa' = lowly person = servant" },
          { tp: "ma anpa li lete", en: "The low land is cold.", note: "Valley or lowland" },
          { tp: "tomo sewi li lon ma ni", en: "A tall building is in this place.", note: "'tomo sewi' = high building" },
          { tp: "nasin poka li lili", en: "The side path is small.", note: "'nasin poka' = side road" }
        ],
        pitfall: "'jan sewi' = god/divine being. 'jan lon sewi' = person who is above (physically)."
      },
      {
        title: "Expressing motion with spatial nouns",
        explanation: "Use <b>tawa</b> with spatial nouns to express motion TO a relative position: 'mi tawa sewi' = I go up.",
        examples: [
          { tp: "mi tawa sewi", en: "I go up.", note: "Motion upward" },
          { tp: "mi tawa anpa", en: "I go down.", note: "Motion downward" },
          { tp: "ona li tawa insa tomo", en: "They go inside the house.", note: "Entering" },
          { tp: "waso li tawa sewi, tan ma", en: "The bird goes up, from the ground.", note: "Taking off" },
          { tp: "mi tawa poka ona", en: "I go beside them.", note: "Moving to someone's side" }
        ],
        pitfall: "'tawa sewi' = go up (motion). 'lon sewi' = be above (location)."
      }
    ],
    
    keyInsight: "Spatial nouns describe WHERE things are relative to a reference point. The pattern <b>lon [SPATIAL] [REFERENCE]</b> is incredibly powerful: 'lon sewi tomo' (above the house), 'lon anpa kasi' (under the plant), 'lon insa mi' (inside me). These same words can also mean body parts (monsi = back, sinpin = face) or modify nouns (jan sewi = god)!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "sewi",
      primaryMeaning: "above, high, sky, divine",
      roles: {
        adjective: "high, upper, elevated, divine, sacred, formal",
        adverb: "above, upward",
        noun: "area above, sky, heaven, top, something elevated, divinity",
        verbTransitive: "to lift, to raise up"
      },
      notes: "Covers both physical height and spiritual/sacred meanings. 'jan sewi' = god, divine being. 'sewi' alone often means 'sky' or 'heaven'.",
      compounds: [
        { tp: "jan sewi", en: "god, angel, divine being" },
        { tp: "tomo sewi", en: "upper floor, upstairs, tall building" },
        { tp: "ma sewi", en: "highland, heaven, sacred land" },
        { tp: "nasin sewi", en: "religion (sacred way)" },
        { tp: "suno li lon sewi", en: "the sun is in the sky" }
      ]
    },
    {
      word: "anpa",
      primaryMeaning: "below, down, bottom, humble",
      roles: {
        adjective: "low, lower, bottom, down, humble, dependent",
        adverb: "below, downward",
        noun: "area below, bottom, lower part, floor, ground",
        verbTransitive: "to lower, to defeat, to conquer"
      },
      notes: "Opposite of 'sewi'. Can mean physically below or socially humble/lowly. 'anpa e X' = to defeat X, put X down.",
      compounds: [
        { tp: "jan anpa", en: "servant, humble person, defeated one" },
        { tp: "tomo anpa", en: "basement, ground floor" },
        { tp: "ma anpa", en: "lowland, valley, humble land" },
        { tp: "lon anpa telo", en: "underwater" },
        { tp: "mi anpa e ona", en: "I defeated them" }
      ]
    },
    {
      word: "insa",
      primaryMeaning: "inside, middle, stomach",
      roles: {
        adjective: "internal, inner, central, middle",
        noun: "inside, interior, center, contents, stomach, heart"
      },
      notes: "Refers to the interior of things. 'insa mi' often means stomach or inner feelings. 'lon insa X' = inside X.",
      compounds: [
        { tp: "lon insa", en: "inside, within" },
        { tp: "insa mi", en: "my stomach, my insides, my feelings" },
        { tp: "insa tomo", en: "inside of a house, indoors" },
        { tp: "moku li lon insa mi", en: "food is inside me (I ate)" },
        { tp: "jan insa", en: "insider, inner person" }
      ]
    },
    {
      word: "monsi",
      primaryMeaning: "back, behind, rear",
      roles: {
        adjective: "back, rear, posterior",
        noun: "back (body part), rear area, behind"
      },
      notes: "Refers to the back of things or people. 'monsi mi' = behind me OR my back (body part). Context clarifies.",
      compounds: [
        { tp: "lon monsi", en: "behind, in back of" },
        { tp: "monsi mi", en: "my back, behind me" },
        { tp: "monsi tomo", en: "back of the house, backyard" },
        { tp: "tawa monsi", en: "to go backward, to retreat" },
        { tp: "monsi li pakala", en: "my back hurts" }
      ]
    },
    {
      word: "sinpin",
      primaryMeaning: "front, face, wall, chest",
      roles: {
        adjective: "front, facial, forward",
        noun: "front, face (body), chest, wall"
      },
      notes: "The front-facing part. 'sinpin' as face (body part) or front of a building. 'sinpin tomo' = front of house = wall.",
      compounds: [
        { tp: "lon sinpin", en: "in front of, ahead" },
        { tp: "sinpin mi", en: "my face, in front of me" },
        { tp: "sinpin tomo", en: "wall, front of building" },
        { tp: "tawa sinpin", en: "to go forward" },
        { tp: "sinpin li pona lukin", en: "the face is good-looking" }
      ]
    },
    {
      word: "poka",
      primaryMeaning: "side, beside, hip",
      roles: {
        adjective: "nearby, lateral, side",
        noun: "side, hip, vicinity, area beside",
        preposition: "near, beside, along with (some speakers)"
      },
      notes: "The area beside something. 'poka mi' = beside me OR my hip/side. Some use 'poka' as a preposition meaning 'with/beside'.",
      compounds: [
        { tp: "lon poka", en: "beside, next to, along" },
        { tp: "poka mi", en: "my side/hip, beside me" },
        { tp: "jan poka", en: "neighbor, companion, someone nearby" },
        { tp: "nasin poka", en: "side path, alternate route" },
        { tp: "mi moku lon poka sina", en: "I eat beside you" }
      ]
    },
    {
      word: "noka",
      primaryMeaning: "foot, leg, bottom, lower part",
      roles: {
        adjective: "lower, foot-level, bottom",
        noun: "foot, leg, base, lower part, organ of locomotion"
      },
      notes: "Refers to feet/legs or the base/bottom of things. 'noka kasi' = base of a tree. 'tawa kepeken noka' = to walk.",
      compounds: [
        { tp: "lon noka", en: "at the foot of, at the base of" },
        { tp: "noka mi", en: "my foot/leg" },
        { tp: "noka tomo", en: "foundation, base of building" },
        { tp: "tawa kepeken noka", en: "to walk (go using feet)" },
        { tp: "noka li wawa", en: "the legs are strong" }
      ]
    },
    {
      word: "weka",
      primaryMeaning: "away, absent, removed",
      roles: {
        adjective: "absent, away, ignored, removed",
        noun: "absence, removal",
        verbTransitive: "to remove, to get rid of, to throw away"
      },
      notes: "Describes absence or distance. 'weka e X' = remove X. 'mi weka' = I'm away/gone. Useful contrast to the 'nearness' spatial nouns.",
      compounds: [
        { tp: "mi weka", en: "I'm away, I'm absent" },
        { tp: "weka e ni", en: "remove this, get rid of this" },
        { tp: "lon weka", en: "far away, at a distance" },
        { tp: "ma weka", en: "distant land, faraway place" },
        { tp: "tenpo weka", en: "distant time, long ago/far future" }
      ]
    },
    {
      word: "nasin",
      primaryMeaning: "way, path, method, road",
      roles: {
        adjective: "customary, methodical, doctrinal",
        noun: "way, manner, path, road, method, custom, doctrine",
        verbTransitive: "to follow a path, to guide"
      },
      notes: "Both physical paths and abstract 'ways' of doing things. 'nasin pona' = good way/method. 'nasin tawa' = road.",
      compounds: [
        { tp: "nasin tawa", en: "road, path for travel" },
        { tp: "nasin pona", en: "good way, right method" },
        { tp: "nasin sewi", en: "religion (sacred way)" },
        { tp: "nasin pi toki pona", en: "the way of Toki Pona" },
        { tp: "nasin seme", en: "how? which way?" }
      ]
    },
    {
      word: "linja",
      primaryMeaning: "long flexible thing, line, rope, hair",
      roles: {
        adjective: "linear, long and thin",
        noun: "line, rope, string, thread, cord, hair, long flexible thing"
      },
      notes: "Any long, thin, flexible object: rope, string, wire, hair, etc. 'linja lawa' = hair (head-line).",
      compounds: [
        { tp: "linja lawa", en: "hair (head-lines)" },
        { tp: "linja suli", en: "long rope, cable" },
        { tp: "linja mute", en: "many lines, hair (plural)" },
        { tp: "linja telo", en: "river, stream (water-line)" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    sewiExamples: [
      { tp: "suno li lon sewi", en: "The sun is in the sky.", gloss: "sun | (li) | at | above", note: "'sewi' alone = sky" },
      { tp: "waso li tawa lon sewi", en: "Birds fly in the sky.", gloss: "bird | (li) | move | at | above", note: "Motion in the sky" },
      { tp: "mi lukin sewi", en: "I look up.", gloss: "I | look | upward", note: "'sewi' as adverb" },
      { tp: "jan sewi li pona", en: "God is good.", gloss: "person + divine | (li) | good", note: "'jan sewi' = divine being" },
      { tp: "mi lon sewi tomo", en: "I am above the house.", gloss: "I | at | above | house", note: "On the roof or higher" }
    ],
    
    anpaExamples: [
      { tp: "pipi li lon anpa mi", en: "A bug is under me.", gloss: "bug | (li) | at | below | me", note: "'anpa mi' = under me" },
      { tp: "mi lape lon anpa kasi", en: "I sleep under a tree.", gloss: "I | sleep | at | below | plant", note: "Shaded rest" },
      { tp: "kiwen li lon anpa telo", en: "Rocks are under the water.", gloss: "rock | (li) | at | below | water", note: "Underwater" },
      { tp: "tomo anpa li lete", en: "The basement is cold.", gloss: "house + low | (li) | cold", note: "'tomo anpa' = basement" },
      { tp: "mi anpa e ona", en: "I defeated them.", gloss: "I | lower | (e) | them", note: "'anpa' as transitive verb" }
    ],
    
    insaExamples: [
      { tp: "moku li lon insa mi", en: "Food is inside me. (I'm full.)", gloss: "food | (li) | at | inside | me", note: "'insa mi' = my stomach" },
      { tp: "jan li lon insa tomo", en: "A person is inside the house.", gloss: "person | (li) | at | inside | house", note: "Indoors" },
      { tp: "insa mi li ike", en: "My stomach hurts. / I feel bad inside.", gloss: "inside + my | (li) | bad", note: "Physical or emotional" },
      { tp: "kili li lon insa poki", en: "Fruit is inside the container.", gloss: "fruit | (li) | at | inside | container", note: "Contained" },
      { tp: "mi tawa insa", en: "I go inside.", gloss: "I | go | inside", note: "Entering" }
    ],
    
    monsiExamples: [
      { tp: "jan li lon monsi mi", en: "A person is behind me.", gloss: "person | (li) | at | back | me", note: "'monsi mi' = behind me" },
      { tp: "telo suli li lon monsi mi", en: "The ocean is behind me.", gloss: "water + big | (li) | at | back | me", note: "Large body of water" },
      { tp: "monsi mi li pakala", en: "My back hurts.", gloss: "back + my | (li) | damaged", note: "'monsi' = back (body)" },
      { tp: "kasi li lon monsi tomo", en: "Plants are behind the house.", gloss: "plant | (li) | at | back | house", note: "Backyard area" },
      { tp: "mi tawa monsi", en: "I go backward.", gloss: "I | go | back", note: "Retreat or reverse" }
    ],
    
    sinpinExamples: [
      { tp: "tomo li lon sinpin mi", en: "A house is in front of me.", gloss: "house | (li) | at | front | me", note: "'sinpin mi' = in front of me" },
      { tp: "sinpin ona li pona lukin", en: "Their face is pretty.", gloss: "face + their | (li) | good + looking", note: "'sinpin' = face" },
      { tp: "mi pana e sitelen lon sinpin tomo", en: "I put a picture on the wall.", gloss: "I | put | (e) | image | at | front + house", note: "'sinpin tomo' = wall" },
      { tp: "o lukin e sinpin mi", en: "Look at my face!", gloss: "(o) | look | (e) | face + my", note: "Command" },
      { tp: "mi tawa sinpin", en: "I go forward.", gloss: "I | go | front", note: "Advancing" }
    ],
    
    pokaExamples: [
      { tp: "jan pona mi li lon poka mi", en: "My friend is beside me.", gloss: "friend + my | (li) | at | side | me", note: "'poka mi' = beside me" },
      { tp: "mi moku lon poka sina", en: "I eat beside you.", gloss: "I | eat | at | side | you", note: "Eating together" },
      { tp: "poka mi li pakala", en: "My hip hurts.", gloss: "side + my | (li) | damaged", note: "'poka' = hip/side (body)" },
      { tp: "telo li lon poka tomo", en: "Water is beside the house.", gloss: "water | (li) | at | side | house", note: "Lateral to the house" },
      { tp: "jan poka li toki tawa mi", en: "My neighbor speaks to me.", gloss: "person + beside | (li) | speak | to | me", note: "'jan poka' = neighbor" }
    ],
    
    nokaExamples: [
      { tp: "kiwen li lon noka mi", en: "A rock is under my foot.", gloss: "rock | (li) | at | foot | me", note: "'noka mi' = under my foot" },
      { tp: "mi tawa kepeken noka mi", en: "I walk. (I go using my legs.)", gloss: "I | go | using | foot + my", note: "Walking" },
      { tp: "noka mi li wawa", en: "My legs are strong.", gloss: "leg + my | (li) | strong", note: "'noka' = legs (body)" },
      { tp: "kasi li lon noka tomo", en: "Plants are at the base of the house.", gloss: "plant | (li) | at | foot | house", note: "'noka tomo' = foundation area" },
      { tp: "pipi li tawa lon noka mi", en: "A bug walks under my foot.", gloss: "bug | (li) | move | at | foot | me", note: "At foot level" }
    ],
    
    combiningPatterns: [
      { tp: "waso li tawa tan anpa tawa sewi", en: "The bird goes from below to above. (takes off)", gloss: "bird | (li) | go | from | below | to | above", note: "tan + tawa combo" },
      { tp: "mi lon insa tomo, lon poka jan pona mi", en: "I'm inside the house, beside my friend.", gloss: "I | at | inside | house | at | side | friend + my", note: "Double 'lon' phrase" },
      { tp: "suno li kama tan sewi", en: "The sun comes from above.", gloss: "sun | (li) | come | from | above", note: "Source: the sky" },
      { tp: "mi tawa, tan monsi tomo, tawa sinpin tomo", en: "I go from behind the house to the front.", gloss: "I | go | from | back | house | to | front | house", note: "Full spatial journey" },
      { tp: "moku li lon insa poki lon anpa tomo", en: "Food is inside a container under the house.", gloss: "food | (li) | at | inside | container | at | below | house", note: "Nested locations" }
    ],
    
    spatialAsAdjectives: [
      { tp: "jan sewi li lukin e ma", en: "The god watches the land.", gloss: "person + divine | (li) | see | (e) | land", note: "'jan sewi' = god" },
      { tp: "jan anpa li pali e tomo", en: "The servant builds the house.", gloss: "person + low | (li) | make | (e) | house", note: "'jan anpa' = servant" },
      { tp: "nasin poka li lon", en: "A side path exists.", gloss: "path + side | (li) | exist", note: "'nasin poka' = side road" },
      { tp: "tomo sewi li suli mute", en: "The tall building is very big.", gloss: "house + high | (li) | big + very", note: "'tomo sewi' = tall building" },
      { tp: "ma anpa li pona tawa soweli", en: "The lowland is good for animals.", gloss: "land + low | (li) | good | to | animal", note: "Valley/lowland" }
    ],
    
    ambiguous: [
      { tp: "sinpin mi", meanings: ["my face (body part)", "in front of me (location)"], likely: "Context decides", note: "'mi lukin e sinpin mi' = I see my face. 'jan li lon sinpin mi' = person is in front of me." },
      { tp: "insa mi", meanings: ["my stomach/insides", "inside me (location)"], likely: "Usually stomach/feelings", note: "'insa mi li ike' = my stomach hurts. 'kili li lon insa mi' = fruit is inside me (I ate)." },
      { tp: "jan sewi", meanings: ["divine person, god", "person who is above (physically)"], likely: "Usually 'god'", note: "'jan lon sewi' clarifies 'person who is physically above'." }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "Match each spatial noun to its meaning:",
      questions: [
        { tp: "**sewi**", target: "sewi", en: "above, high, sky, divine", options: ["front", "above", "inside", "beside"], correct: 1, explanation: "'sewi' means above, high, sky, or divine." },
        { tp: "**anpa**", target: "anpa", en: "below, down, bottom, humble", options: ["below", "back", "side", "foot"], correct: 0, explanation: "'anpa' means below, down, or humble." },
        { tp: "**insa**", target: "insa", en: "inside, middle, stomach", options: ["front", "above", "inside", "below"], correct: 2, explanation: "'insa' means inside, middle, or stomach." },
        { tp: "**monsi**", target: "monsi", en: "back, behind, rear", options: ["behind/back", "front/face", "side", "above"], correct: 0, explanation: "'monsi' means back or behind." },
        { tp: "**sinpin**", target: "sinpin", en: "front, face, wall, chest", options: ["behind", "front/face", "inside", "foot"], correct: 1, explanation: "'sinpin' means front, face, or wall." },
        { tp: "**poka**", target: "poka", en: "side, beside, hip", options: ["below", "inside", "beside", "above"], correct: 2, explanation: "'poka' means side or beside." },
        { tp: "**noka**", target: "noka", en: "foot, leg, bottom, lower part", options: ["hand", "foot/leg", "head", "stomach"], correct: 1, explanation: "'noka' means foot, leg, or lower part." }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct spatial noun to complete the location phrase:",
      questions: [
        { 
          tp: "waso li lon _____",
          en: "A bird is in the sky",
          answer: "sewi",
          hint: "Above/sky"
        },
        { 
          tp: "pipi li lon _____ mi",
          en: "A bug is under me",
          answer: "anpa",
          hint: "Below"
        },
        { 
          tp: "moku li lon _____ poki",
          en: "Food is inside the container",
          answer: "insa",
          hint: "Inside"
        },
        { 
          tp: "jan li lon _____ mi",
          en: "A person is behind me",
          answer: "monsi",
          hint: "Back/behind"
        },
        { 
          tp: "tomo li lon _____ mi",
          en: "A house is in front of me",
          answer: "sinpin",
          hint: "Front"
        },
        { 
          tp: "jan pona mi li lon _____ mi",
          en: "My friend is beside me",
          answer: "poka",
          hint: "Side"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence, paying attention to the spatial noun:",
      questions: [
        { tp: "suno li lon sewi", expectedType: "location-above", hint: "Where is the sun?" },
        { tp: "pipi li lon anpa kasi", expectedType: "location-below", hint: "Under the plant" },
        { tp: "moku li lon insa mi", expectedType: "location-inside", hint: "Inside = stomach" },
        { tp: "jan li lon monsi tomo", expectedType: "location-behind", hint: "Behind the house" },
        { tp: "sinpin ona li pona lukin", expectedType: "body-part", hint: "Face (body part)" },
        { tp: "mi tawa kepeken noka mi", expectedType: "body-part", hint: "Using legs = walking" }
      ],
      answers: [
        "The sun is in the sky.",
        "A bug is under the plant.",
        "Food is inside me. / I'm full.",
        "A person is behind the house.",
        "Their face is pretty/good-looking.",
        "I walk. (I go using my legs.)"
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Does the spatial noun refer to a BODY PART or a LOCATION?",
      questions: [
        {
          tp: "**monsi** mi li pakala",
          target: "monsi",
          en: "my back hurts",
          options: ["Body part (my back hurts)", "Location (behind me is damaged)"],
          correct: 0,
          explanation: "'monsi mi li pakala' means 'my back hurts' — it's a body part."
        },
        {
          tp: "jan li lon **monsi** mi",
          target: "monsi",
          en: "a person is behind me",
          options: ["Body part (a person is my back)", "Location (a person is behind me)"],
          correct: 1,
          explanation: "'lon monsi mi' = at my back = behind me — it's a location."
        },
        {
          tp: "**insa** mi li ike",
          target: "insa",
          en: "I feel bad inside / my stomach hurts",
          options: ["Body part (my stomach/insides feel bad)", "Location (inside me is bad)"],
          correct: 0,
          explanation: "'insa mi li ike' usually means 'I feel bad inside' or 'my stomach hurts'."
        },
        {
          tp: "kili li lon **insa** poki",
          target: "insa",
          en: "fruit is inside the container",
          options: ["Body part", "Location (fruit is inside the container)"],
          correct: 1,
          explanation: "'lon insa poki' = inside the container — it's a location."
        },
        {
          tp: "**noka** mi li wawa",
          target: "noka",
          en: "my legs are strong",
          options: ["Body part (my legs are strong)", "Location (under my foot is strong)"],
          correct: 0,
          explanation: "'noka mi li wawa' means 'my legs are strong' — it's a body part."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid Toki Pona sentence:",
      questions: [
        {
          words: ["mi", "lon", "sewi", "tomo"],
          validAnswers: ["mi lon sewi tomo"],
          translations: ["I am above the house."],
          hint: "Subject + lon + spatial + reference"
        },
        {
          words: ["pipi", "li", "lon", "anpa", "mi"],
          validAnswers: ["pipi li lon anpa mi"],
          translations: ["A bug is under me."],
          hint: "Subject + li + lon + spatial + reference"
        },
        {
          words: ["jan", "pona", "mi", "li", "lon", "poka", "mi"],
          validAnswers: ["jan pona mi li lon poka mi"],
          translations: ["My friend is beside me."],
          hint: "Compound subject with 'jan pona mi'"
        },
        {
          words: ["waso", "li", "tawa", "tan", "anpa", "tawa", "sewi"],
          validAnswers: ["waso li tawa tan anpa tawa sewi"],
          translations: ["The bird goes from below to above. (takes off)"],
          hint: "tan = from, tawa = to"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What does the spatial word mean when used as an adjective/modifier?",
      questions: [
        {
          tp: "jan **sewi**",
          target: "sewi",
          en: "divine person, god",
          options: ["A person who is above", "A divine person / god", "A tall person"],
          correct: 1,
          explanation: "'jan sewi' typically means 'divine person' or 'god' — spiritual height, not physical."
        },
        {
          tp: "jan **anpa**",
          target: "anpa",
          en: "humble person, servant",
          options: ["A person who is below", "A humble person / servant", "A short person"],
          correct: 1,
          explanation: "'jan anpa' means 'humble person' or 'servant' — low social position."
        },
        {
          tp: "tomo **sewi**",
          target: "sewi",
          en: "tall building, upper floor",
          options: ["A house in the sky", "An upper floor / tall building", "A divine house"],
          correct: 1,
          explanation: "'tomo sewi' = tall building or upper floor (high house)."
        },
        {
          tp: "tomo **anpa**",
          target: "anpa",
          en: "basement, ground floor",
          options: ["A defeated house", "A basement / ground floor", "A humble house"],
          correct: 1,
          explanation: "'tomo anpa' = basement or lower floor (low house)."
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Does the sentence express MOTION (going TO) or LOCATION (being AT)?",
      questions: [
        {
          tp: "mi **lon** sewi tomo",
          target: "lon",
          en: "I am above the house",
          options: ["Motion (I go above the house)", "Location (I am above the house)"],
          correct: 1,
          explanation: "'lon' = at/in — this is location."
        },
        {
          tp: "mi **tawa** sewi",
          target: "tawa",
          en: "I go up",
          options: ["Motion (I go up)", "Location (I am above)"],
          correct: 0,
          explanation: "'tawa' = go — this is motion upward."
        },
        {
          tp: "ona li **tawa** insa tomo",
          target: "tawa",
          en: "they go inside the house",
          options: ["Motion (they go inside the house)", "Location (they are inside the house)"],
          correct: 0,
          explanation: "'tawa' = go — they're entering the house."
        },
        {
          tp: "kili li **lon** insa poki",
          target: "lon",
          en: "fruit is in the container",
          options: ["Motion (fruit goes into container)", "Location (fruit is in container)"],
          correct: 1,
          explanation: "'lon' = at/in — the fruit is inside."
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What role does the highlighted spatial word play?",
      questions: [
        {
          tp: "mi lon **sewi** tomo",
          target: "sewi",
          options: ["Noun (sky)", "Adjective (high)", "Location reference (above the house)", "Verb (to rise)"],
          correct: 2,
          explanation: "'sewi tomo' = the above-area of the house. It's part of the location phrase."
        },
        {
          tp: "**jan sewi** li lukin e mi",
          target: "sewi",
          options: ["Noun (sky)", "Adjective (divine)", "Location reference", "Verb"],
          correct: 1,
          explanation: "'sewi' modifies 'jan' — a divine person = god."
        },
        {
          tp: "**monsi** mi li pakala",
          target: "monsi",
          options: ["Body part noun (back)", "Location (behind)", "Adjective (rear)", "Verb"],
          correct: 0,
          explanation: "'monsi mi' as subject means 'my back' — a body part."
        },
        {
          tp: "jan li lon **monsi** mi",
          target: "monsi",
          options: ["Body part noun", "Location reference (behind me)", "Adjective", "Verb"],
          correct: 1,
          explanation: "'lon monsi mi' = behind me — it's a location phrase."
        }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'sewi' can mean both 'sky' (noun) and 'divine' (adjective).",
          answer: true,
          explanation: "Correct! 'suno li lon sewi' (sky). 'jan sewi' (divine person)."
        },
        {
          statement: "'monsi mi' always means 'my back' (body part).",
          answer: false,
          explanation: "'monsi mi' can mean 'my back' (body) OR 'behind me' (location) depending on context."
        },
        {
          statement: "'lon insa X' means 'inside X'.",
          answer: true,
          explanation: "Yes! 'lon insa poki' = inside the container."
        },
        {
          statement: "'tawa sewi' means 'to be above'.",
          answer: false,
          explanation: "'tawa sewi' = to go up (motion). 'lon sewi' = to be above (location)."
        },
        {
          statement: "'jan anpa' means 'servant' or 'humble person'.",
          answer: true,
          explanation: "Correct! 'anpa' = low, humble, so 'jan anpa' = lowly person = servant."
        },
        {
          statement: "'noka' and 'anpa' mean exactly the same thing.",
          answer: false,
          explanation: "'anpa' = general below/under. 'noka' = specifically foot/leg level or base."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "tomo mi — My House",
    intro: "A description of a house using spatial nouns. Notice how each part is located relative to others!",
    paragraphs: [
      { tp: "tomo mi li lon ma pona.", en: "My house is in a nice place.", note: "'lon ma pona' = at a good place" },
      { tp: "kasi mute li lon poka tomo.", en: "Many plants are beside the house.", note: "'lon poka' = beside" },
      { tp: "waso li lon sewi. waso li pona tawa mi.", en: "Birds are in the sky. I like birds.", note: "'sewi' = sky; opinion pattern" },
      { tp: "mi lon insa tomo.", en: "I am inside the house.", note: "'lon insa' = inside" },
      { tp: "sinpin tomo li suli.", en: "The front wall is big.", note: "'sinpin tomo' = front/wall" },
      { tp: "jan pona mi li kama. ona li lon sinpin tomo.", en: "My friend comes. They are at the front of the house.", note: "At the front door" },
      { tp: "mi open e lupa. mi lukin e sinpin ona.", en: "I open the door. I see their face.", note: "'sinpin ona' = their face" },
      { tp: "mi toki: 'kama pona! o kama insa!'", en: "I say: 'Welcome! Come inside!'", note: "'kama insa' = come inside = enter" },
      { tp: "mi mute li moku lon poka.", en: "We eat side by side.", note: "'lon poka' = beside each other" },
      { tp: "moku li lon insa mi. mi pilin pona.", en: "Food is inside me. I feel good.", note: "'insa mi' = my stomach (I'm full)" }
    ],
    comprehension: [
      { question: "Where is the house?", answer: "In a nice place (lon ma pona)", evidence: "tomo mi li lon ma pona" },
      { question: "What is beside the house?", answer: "Many plants (kasi mute)", evidence: "kasi mute li lon poka tomo" },
      { question: "Where is the friend at first?", answer: "At the front of the house (lon sinpin tomo)", evidence: "ona li lon sinpin tomo" },
      { question: "How does the speaker feel at the end?", answer: "Good/full (pilin pona, moku li lon insa)", evidence: "moku li lon insa mi. mi pilin pona." }
    ],
    challenge: "Describe YOUR room using at least three spatial nouns. Where is your bed? Your window? Your door?"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Spatial nouns combine with other words to create useful compounds. Here are some common ones:",
    items: [
      { tp: "jan sewi", en: "god, divine being, angel", literal: "divine + person", lesson: "'sewi' as adjective = divine" },
      { tp: "jan anpa", en: "servant, humble person", literal: "low + person", lesson: "'anpa' as adjective = humble/low" },
      { tp: "tomo sewi", en: "upper floor, tall building", literal: "high + house", lesson: "Upper levels of buildings" },
      { tp: "tomo anpa", en: "basement, ground floor", literal: "low + house", lesson: "Lower levels" },
      { tp: "ma sewi", en: "heaven, highland, sacred land", literal: "high/divine + land", lesson: "Spiritual or physical highlands" },
      { tp: "jan poka", en: "neighbor, companion", literal: "side + person", lesson: "Someone nearby" },
      { tp: "nasin sewi", en: "religion (sacred way)", literal: "divine + way", lesson: "Spiritual path" },
      { tp: "linja lawa", en: "hair", literal: "line + head", lesson: "Head-lines = hair" },
      { tp: "lon poka", en: "beside, next to", literal: "at + side", lesson: "Prepositional phrase for 'beside'" },
      { tp: "lon insa", en: "inside, within", literal: "at + inside", lesson: "The standard 'inside' phrase" }
    ],
    teaser: "Next lesson: Negation and questions! Learn how 'ala' (no/not) negates verbs and creates yes/no questions."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "lon sewi X", example: "mi lon sewi tomo", meaning: "I am above the house." },
      { pattern: "lon anpa X", example: "pipi li lon anpa mi", meaning: "A bug is under me." },
      { pattern: "lon insa X", example: "moku li lon insa poki", meaning: "Food is inside the container." },
      { pattern: "lon monsi X", example: "jan li lon monsi mi", meaning: "A person is behind me." },
      { pattern: "lon sinpin X", example: "tomo li lon sinpin mi", meaning: "A house is in front of me." },
      { pattern: "lon poka X", example: "jan pona li lon poka mi", meaning: "A friend is beside me." },
      { pattern: "lon noka X", example: "kiwen li lon noka kasi", meaning: "Rocks are at the base of the tree." },
      { pattern: "tawa + spatial", example: "mi tawa sewi", meaning: "I go up. (motion)" },
      { pattern: "SPATIAL + noun (modifier)", example: "jan sewi li pona", meaning: "The god is good." }
    ],
    remember: [
      "sewi = above, sky, divine | anpa = below, humble",
      "insa = inside, stomach | weka = away, absent",
      "sinpin = front, face, wall | monsi = back, behind",
      "poka = side, beside, hip | noka = foot, leg, base",
      "'lon + spatial + noun' = location phrase",
      "'tawa + spatial' = motion in that direction",
      "Spatial nouns can be body parts OR location references — context decides!",
      "As adjectives: 'jan sewi' = god, 'jan anpa' = servant"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson7;
}
