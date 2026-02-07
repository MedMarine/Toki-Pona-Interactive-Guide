/**
 * Lesson 16: Unofficial Words (Names)
 * Names for people, places, and languages: proper nouns, tokiponization, cartouches
 */

const lesson16 = {
  id: 16,
  title: "Unofficial Words (Names)",
  desc: "Names for people, places, and languages using proper nouns and tokiponization",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Toki pona has only ~130 official words, but you can talk about specific people, places, and languages using <b>unofficial words</b> (proper nouns). These are always capitalized and MUST follow a head noun like <b>jan</b>, <b>ma</b>, or <b>toki</b>.",
    
    concepts: [
      {
        title: "The head noun rule",
        explanation: "Proper nouns (names) CANNOT stand alone. They MUST follow a 'head noun' that categorizes them: <b>jan</b> (person), <b>ma</b> (place), <b>toki</b> (language), etc.",
        examples: [
          { tp: "jan Sonja", en: "Sonja (the person)", note: "'jan' = person category" },
          { tp: "ma Mewika", en: "America (the land)", note: "'ma' = land/country category" },
          { tp: "toki Inli", en: "English (the language)", note: "'toki' = language category" },
          { tp: "ma tomo Tokijo", en: "Tokyo (the city)", note: "'ma tomo' = city category" },
          { tp: "jan pona Mawi", en: "Mary, my friend", note: "Head noun can have modifiers" }
        ],
        pitfall: "NEVER write just 'Sonja' or 'Mewika' alone! Always: 'jan Sonja', 'ma Mewika'."
      },
      {
        title: "Capitalization rules",
        explanation: "Unofficial words (proper nouns) are ALWAYS capitalized. This distinguishes them from regular toki pona words. Official words are never capitalized (except at sentence start).",
        examples: [
          { tp: "jan Lisi li pona", en: "Lisa is good.", note: "'Lisi' capitalized = name" },
          { tp: "ma Kanata li lete", en: "Canada is cold.", note: "'Kanata' capitalized = place name" },
          { tp: "mi toki kepeken toki Epelanto", en: "I speak using Esperanto.", note: "'Epelanto' = language name" },
          { tp: "soweli Milo li suwi", en: "Milo (the pet) is cute.", note: "Even animal names" },
          { tp: "kulupu Sata li suli", en: "The Sata group/company is big.", note: "Organization names" }
        ],
        pitfall: "Lowercase 'jan' + Uppercase 'Sonja' = jan Sonja. Both parts are essential!"
      },
      {
        title: "Tokiponization: adapting names",
        explanation: "Names must be adapted to toki pona's sound system. Toki pona only allows: <b>consonants</b> (j, k, l, m, n, p, s, t, w) and <b>vowels</b> (a, e, i, o, u), with specific syllable rules.",
        examples: [
          { tp: "Lisa → Lisi", en: "Lisa becomes Lisi", note: "Final 'a' often becomes 'i'" },
          { tp: "John → San", en: "John becomes San", note: "'j' sound → 's', no 'hn' cluster" },
          { tp: "Mary → Mewi / Mali", en: "Mary has multiple options", note: "'r' → 'w' or 'l'" },
          { tp: "Robert → Lope", en: "Robert becomes Lope", note: "'r' → 'l', 'b' → 'p', 't' dropped" },
          { tp: "China → Sonko", en: "China becomes Sonko", note: "From Mandarin 'Zhōngguó'" }
        ],
        pitfall: "There's no single 'correct' tokiponization — as long as it follows the sound rules, it works!"
      },
      {
        title: "Toki pona phonology rules",
        explanation: "Every syllable must be (C)V(n): optional consonant + vowel + optional 'n'. No consonant clusters. No 'ti' (use 'si'), no 'wo' (use 'o'), no 'wu' (use 'u').",
        examples: [
          { tp: "valid: ka, san, te, pu, lon", en: "Good syllables", note: "(C)V(n) pattern" },
          { tp: "invalid: str, kl, tion", en: "Bad: consonant clusters", note: "Break up or simplify" },
          { tp: "ti → si", en: "'ti' forbidden, use 'si'", note: "Sound rule" },
          { tp: "wo → o, wu → u", en: "'wo'/'wu' forbidden", note: "Sound rule" },
          { tp: "nn → n", en: "No double consonants", note: "Simplify" }
        ],
        pitfall: "When adapting names, you may need to add vowels to break up consonant clusters: 'Smith' → 'Simi' or 'Simise'."
      },
      {
        title: "Common head nouns for names",
        explanation: "Different categories of things use different head nouns. Here are the most common ones:",
        examples: [
          { tp: "jan [Name]", en: "person named [Name]", note: "People" },
          { tp: "ma [Name]", en: "land/country named [Name]", note: "Countries, regions" },
          { tp: "ma tomo [Name]", en: "city named [Name]", note: "Cities" },
          { tp: "toki [Name]", en: "language named [Name]", note: "Languages" },
          { tp: "kulupu [Name]", en: "group/organization named [Name]", note: "Companies, groups" },
          { tp: "soweli [Name]", en: "animal named [Name]", note: "Pets, named animals" },
          { tp: "nasin [Name]", en: "religion/way named [Name]", note: "Religions, philosophies" }
        ],
        pitfall: "Choose the head noun that best categorizes what you're naming."
      },
      {
        title: "Common country names",
        explanation: "Country names are adapted from how the country calls itself (endonym) or common international usage. Here are some examples:",
        examples: [
          { tp: "ma Mewika", en: "USA (from 'America')", note: "Common adaptation" },
          { tp: "ma Kanata", en: "Canada", note: "Similar to original" },
          { tp: "ma Inli / ma Inlan", en: "England", note: "From 'England'" },
          { tp: "ma Nijon", en: "Japan (from 'Nihon')", note: "From Japanese name" },
          { tp: "ma Sonko", en: "China (from 'Zhōngguó')", note: "From Mandarin" },
          { tp: "ma Tosi", en: "Germany (from 'Deutsch')", note: "From German name" },
          { tp: "ma Kanse / ma Palansa", en: "France", note: "Multiple options" }
        ],
        pitfall: "There's no official list — different speakers may use different adaptations!"
      },
      {
        title: "Common language names",
        explanation: "Languages follow the same pattern: <b>toki [Name]</b>. Often the language name relates to the country name.",
        examples: [
          { tp: "toki Inli", en: "English", note: "From 'English'" },
          { tp: "toki Epanja", en: "Spanish (from 'Español')", note: "From Spanish name" },
          { tp: "toki Nijon", en: "Japanese", note: "Same as country" },
          { tp: "toki Sonko", en: "Chinese/Mandarin", note: "Same as country" },
          { tp: "toki Alapi", en: "Arabic", note: "From 'Arabic'" },
          { tp: "toki Potuke", en: "Portuguese", note: "From 'Português'" },
          { tp: "toki pona", en: "Toki Pona itself", note: "Not capitalized — it's official!" }
        ],
        pitfall: "'toki pona' is NOT capitalized because it's made of official toki pona words, not a borrowed name."
      },
      {
        title: "Asking about names",
        explanation: "Use <b>nimi</b> (name, word) to ask about or state names. The pattern is: <b>nimi X li seme?</b> = What is X's name?",
        examples: [
          { tp: "nimi sina li seme?", en: "What is your name?", note: "Asking someone's name" },
          { tp: "nimi mi li [Name]", en: "My name is [Name].", note: "Stating your name" },
          { tp: "nimi ona li Sonja", en: "Their name is Sonja.", note: "Third person" },
          { tp: "nimi pi ma ni li seme?", en: "What is the name of this place?", note: "Asking place name" },
          { tp: "mi sona ala e nimi ona", en: "I don't know their name.", note: "Not knowing a name" }
        ],
        pitfall: "You can also just say 'mi jan [Name]' to introduce yourself."
      },
      {
        title: "sitelen pona and names",
        explanation: "In sitelen pona (the logographic script), names are written inside a <b>cartouche</b> — a rounded container. Each letter of the name is represented by a glyph whose word starts with that sound.",
        examples: [
          { tp: "[cartouche: s-o-n-j-a]", en: "Sonja in sitelen pona", note: "Each sound = one glyph" },
          { tp: "s = selo, o = open, n = nena...", en: "Glyphs chosen by first letter", note: "Many options per sound" },
          { tp: "jan [cartouche]", en: "Person + name in cartouche", note: "Head noun outside cartouche" }
        ],
        pitfall: "Cartouches are for writing only — when speaking, just say the name normally."
      }
    ],
    
    keyInsight: "Names in toki pona are treated as adjectives that modify a head noun. 'jan Sonja' literally means 'Sonja-type person'. This keeps the grammar consistent while allowing infinite flexibility for naming anything!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "nimi",
      primaryMeaning: "name, word",
      roles: {
        noun: "name, word, term",
        verbTransitive: "to name, to call"
      },
      notes: "Essential for discussing names. 'nimi sina li seme?' = What's your name? 'nimi' also means 'word' in general — 'nimi pi toki pona' = words of toki pona.",
      compounds: [
        { tp: "nimi sina", en: "your name" },
        { tp: "nimi mi", en: "my name" },
        { tp: "nimi pona", en: "good name, compliment" },
        { tp: "nimi ike", en: "insult, bad name" },
        { tp: "nimi pi ijo ni", en: "the name of this thing" }
      ]
    },
    {
      word: "jan [Nimi]",
      primaryMeaning: "person named [Name]",
      roles: {
        pattern: "head noun + proper noun for people"
      },
      notes: "The standard pattern for naming people. The name follows 'jan' and is capitalized. Can add modifiers: 'jan pona mi Lisi' = my friend Lisa.",
      compounds: [
        { tp: "jan Sonja", en: "Sonja (creator of toki pona)" },
        { tp: "jan Mawijo", en: "Mario" },
        { tp: "jan Lusi", en: "Lucy" },
        { tp: "jan lawa Sano", en: "leader/president Zhang" },
        { tp: "jan pona mi Timi", en: "my friend Timmy" }
      ]
    },
    {
      word: "ma [Nimi]",
      primaryMeaning: "land/country named [Name]",
      roles: {
        pattern: "head noun + proper noun for places"
      },
      notes: "For countries, regions, continents. 'ma tomo [Nimi]' for cities specifically.",
      compounds: [
        { tp: "ma Mewika", en: "America/USA" },
        { tp: "ma Kanata", en: "Canada" },
        { tp: "ma Nijon", en: "Japan" },
        { tp: "ma Sonko", en: "China" },
        { tp: "ma Elopa", en: "Europe" }
      ]
    },
    {
      word: "ma tomo [Nimi]",
      primaryMeaning: "city named [Name]",
      roles: {
        pattern: "compound head noun + proper noun for cities"
      },
      notes: "'ma tomo' (land + building = city) is the head noun for city names.",
      compounds: [
        { tp: "ma tomo Tokijo", en: "Tokyo" },
        { tp: "ma tomo Nujoka", en: "New York" },
        { tp: "ma tomo Pelin", en: "Berlin" },
        { tp: "ma tomo Loma", en: "Rome" },
        { tp: "ma tomo Lantan", en: "London" }
      ]
    },
    {
      word: "toki [Nimi]",
      primaryMeaning: "language named [Name]",
      roles: {
        pattern: "head noun + proper noun for languages"
      },
      notes: "For all languages except toki pona itself (which uses lowercase). 'mi toki kepeken toki [Nimi]' = I speak [language].",
      compounds: [
        { tp: "toki Inli", en: "English" },
        { tp: "toki Epanja", en: "Spanish" },
        { tp: "toki Kanse", en: "French" },
        { tp: "toki Alapi", en: "Arabic" },
        { tp: "toki Nijon", en: "Japanese" }
      ]
    },
    {
      word: "kulupu [Nimi]",
      primaryMeaning: "group/organization named [Name]",
      roles: {
        pattern: "head noun + proper noun for organizations"
      },
      notes: "For companies, teams, organizations, bands. 'kulupu' means group/community.",
      compounds: [
        { tp: "kulupu Kuko", en: "Google (company)" },
        { tp: "kulupu Apu", en: "Apple (company)" },
        { tp: "kulupu Jutu", en: "YouTube" },
        { tp: "kulupu Wikiwitija", en: "Wikipedia" }
      ]
    },
    {
      word: "nasin [Nimi]",
      primaryMeaning: "religion/philosophy named [Name]",
      roles: {
        pattern: "head noun + proper noun for belief systems"
      },
      notes: "'nasin' (way/path) is used for religions, philosophies, and doctrines.",
      compounds: [
        { tp: "nasin Kolisu", en: "Christianity" },
        { tp: "nasin Silam", en: "Islam" },
        { tp: "nasin Puta", en: "Buddhism" },
        { tp: "nasin Sintu", en: "Shinto" },
        { tp: "nasin sewi", en: "religion (generic)" }
      ]
    },
    {
      word: "soweli [Nimi]",
      primaryMeaning: "animal named [Name]",
      roles: {
        pattern: "head noun + proper noun for named animals"
      },
      notes: "For pets and named animals. Can use other animal words: 'waso Tewi' = a bird named Tweety.",
      compounds: [
        { tp: "soweli Milo", en: "Milo (pet name)" },
        { tp: "soweli Pelu", en: "Bella (pet name)" },
        { tp: "waso Piki", en: "Big Bird (literally)" },
        { tp: "kala Nimo", en: "Nemo (fish)" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    introductions: [
      { tp: "nimi mi li Sonja", en: "My name is Sonja.", gloss: "name + my | (li) | Sonja", note: "Self-introduction" },
      { tp: "mi jan Luki", en: "I am Luke.", gloss: "I | person + Luke", note: "Alternative introduction" },
      { tp: "nimi sina li seme?", en: "What is your name?", gloss: "name + your | (li) | what", note: "Asking for name" },
      { tp: "ona li jan Ana", en: "They are Anna.", gloss: "they | (li) | person + Anna", note: "Third person introduction" },
      { tp: "jan ni li jan pona mi. nimi ona li Timi", en: "This person is my friend. Their name is Timmy.", gloss: "person + this | (li) | person + good + my | name + their | (li) | Timmy", note: "Introducing someone" }
    ],
    
    countries: [
      { tp: "mi tan ma Mewika", en: "I am from America.", gloss: "I | from | land + America", note: "Origin" },
      { tp: "ma Kanata li lete", en: "Canada is cold.", gloss: "land + Canada | (li) | cold", note: "Describing country" },
      { tp: "mi wile tawa ma Nijon", en: "I want to go to Japan.", gloss: "I | want | go | land + Japan", note: "Travel desire" },
      { tp: "ma Sonko li suli mute", en: "China is very big.", gloss: "land + China | (li) | big + very", note: "Size description" },
      { tp: "ma Tosi en ma Kanse li lon ma Elopa", en: "Germany and France are in Europe.", gloss: "land + Germany | and | land + France | (li) | at | land + Europe", note: "Geography" }
    ],
    
    cities: [
      { tp: "mi lon ma tomo Tokijo", en: "I am in Tokyo.", gloss: "I | at | land + building + Tokyo", note: "Location" },
      { tp: "ma tomo Nujoka li suli", en: "New York is big.", gloss: "land + building + New-York | (li) | big", note: "City description" },
      { tp: "ona li tan ma tomo Lantan", en: "They are from London.", gloss: "they | (li) | from | land + building + London", note: "Origin city" },
      { tp: "mi wile lukin e ma tomo Pali", en: "I want to see Paris.", gloss: "I | want | see | (e) | land + building + Paris", note: "Travel goal" },
      { tp: "ma tomo Pelin li pona tawa mi", en: "I like Berlin.", gloss: "land + building + Berlin | (li) | good | to | me", note: "Opinion" }
    ],
    
    languages: [
      { tp: "mi toki e toki Inli", en: "I speak English.", gloss: "I | speak | (e) | language + English", note: "Speaking a language" },
      { tp: "mi kama sona e toki pona", en: "I am learning toki pona.", gloss: "I | become + know | (e) | language + simple", note: "Note: lowercase 'toki pona'" },
      { tp: "ona li toki kepeken toki Epanja", en: "They speak using Spanish.", gloss: "they | (li) | speak | using | language + Spanish", note: "Using a language" },
      { tp: "toki Nijon li nasa tawa mi", en: "Japanese is strange to me.", gloss: "language + Japanese | (li) | strange | to | me", note: "Opinion on language" },
      { tp: "mi sona e toki Inli e toki Kanse", en: "I know English and French.", gloss: "I | know | (e) | language + English | (e) | language + French", note: "Multiple languages" }
    ],
    
    organizations: [
      { tp: "mi pali lon kulupu Kuko", en: "I work at Google.", gloss: "I | work | at | group + Google", note: "Workplace" },
      { tp: "kulupu Wikiwitija li pana e sona", en: "Wikipedia gives knowledge.", gloss: "group + Wikipedia | (li) | give | (e) | knowledge", note: "Organization action" },
      { tp: "mi kepeken ilo pi kulupu Apu", en: "I use Apple devices.", gloss: "I | use | tool | (pi) | group + Apple", note: "Brand reference" },
      { tp: "kulupu musi Seli li pona", en: "The band Seli is good.", gloss: "group + entertainment + Seli | (li) | good", note: "Band name" }
    ],
    
    religions: [
      { tp: "ona li jan pi nasin Kolisu", en: "They are Christian.", gloss: "they | (li) | person | (pi) | way + Christ", note: "Religious identity" },
      { tp: "nasin Puta li tan ma Intonesija", en: "Buddhism is from India.", gloss: "way + Buddha | (li) | from | land + India", note: "Religion origin" },
      { tp: "mi sona lili e nasin Silam", en: "I know a little about Islam.", gloss: "I | know + little | (e) | way + Islam", note: "Limited knowledge" },
      { tp: "nasin sewi mute li lon ma ni", en: "Many religions exist in this land.", gloss: "way + divine + many | (li) | at | land + this", note: "Religious diversity" }
    ],
    
    pets: [
      { tp: "soweli mi li soweli Milo", en: "My pet is (named) Milo.", gloss: "animal + my | (li) | animal + Milo", note: "Pet name" },
      { tp: "soweli Pelu li suwi mute", en: "Bella (the pet) is very cute.", gloss: "animal + Bella | (li) | cute + very", note: "Describing pet" },
      { tp: "waso ona li waso Koko", en: "Their bird is (named) Coco.", gloss: "bird + their | (li) | bird + Coco", note: "Bird name" },
      { tp: "kala mi li kala Nimo", en: "My fish is (named) Nemo.", gloss: "fish + my | (li) | fish + Nemo", note: "Fish name" }
    ],
    
    tokiponization: [
      { tp: "nimi 'John' li kama 'San' lon toki pona", en: "'John' becomes 'San' in toki pona.", gloss: "name + John | (li) | become | San | at | toki pona", note: "Name adaptation example" },
      { tp: "mi jan Mako. nimi mi lon toki ante li 'Marco'", en: "I am Mako. My name in other languages is 'Marco'.", gloss: "I | person + Mako | name + my | at | language + different | (li) | Marco", note: "Explaining adaptation" },
      { tp: "ma 'Deutschland' li ma Tosi lon toki pona", en: "'Deutschland' is 'ma Tosi' in toki pona.", gloss: "land + Deutschland | (li) | land + Tosi | at | toki pona", note: "Country adaptation" }
    ],
    
    ambiguous: [
      { tp: "jan Kan li toki", meanings: ["Khan speaks", "John speaks", "Ken speaks"], likely: "Context needed for which name", note: "Similar-sounding names" },
      { tp: "mi tawa ma Kanse", meanings: ["I go to France", "I go to Kansas"], likely: "Usually France, but context matters", note: "Similar adaptations" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What type of name is being used?",
      questions: [
        {
          tp: "**jan** Sonja li pona",
          target: "jan",
          en: "Sonja is good",
          options: ["Country name", "Person name", "Language name", "City name"],
          correct: 1,
          explanation: "'jan' + Name = person's name."
        },
        {
          tp: "mi tan **ma** Mewika",
          target: "ma",
          en: "I am from America",
          options: ["Country name", "Person name", "Language name", "City name"],
          correct: 0,
          explanation: "'ma' + Name = country/land name."
        },
        {
          tp: "mi toki e **toki** Inli",
          target: "toki",
          en: "I speak English",
          options: ["Country name", "Person name", "Language name", "City name"],
          correct: 2,
          explanation: "'toki' + Name = language name."
        },
        {
          tp: "mi lon **ma tomo** Tokijo",
          target: "ma tomo",
          en: "I am in Tokyo",
          options: ["Country name", "Person name", "Language name", "City name"],
          correct: 3,
          explanation: "'ma tomo' + Name = city name."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct head noun for the name:",
      questions: [
        {
          tp: "mi _____ Lisi",
          en: "I am Lisa.",
          answer: "jan",
          hint: "Head noun for people"
        },
        {
          tp: "mi tan _____ Kanata",
          en: "I am from Canada.",
          answer: "ma",
          hint: "Head noun for countries"
        },
        {
          tp: "ona li toki e _____ Epanja",
          en: "They speak Spanish.",
          answer: "toki",
          hint: "Head noun for languages"
        },
        {
          tp: "mi wile tawa _____ _____ Pali",
          en: "I want to go to Paris.",
          answer: "ma tomo",
          hint: "Head noun for cities (two words)"
        },
        {
          tp: "soweli mi li _____ Milo",
          en: "My pet is named Milo.",
          answer: "soweli",
          hint: "Head noun for animal names"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "nimi mi li Ale", expectedType: "introduction", hint: "My name is..." },
        { tp: "mi tan ma Nijon", expectedType: "origin", hint: "From a country" },
        { tp: "ma tomo Lantan li suli", expectedType: "city description", hint: "City is big" },
        { tp: "mi sona e toki Inli", expectedType: "language", hint: "Knowing a language" },
        { tp: "jan Sonja li mama pi toki pona", expectedType: "creator", hint: "Creator of toki pona" },
        { tp: "nimi sina li seme?", expectedType: "question", hint: "Asking for name" }
      ],
      answers: [
        "My name is Alex/Ale.",
        "I am from Japan.",
        "London is big.",
        "I know English.",
        "Sonja is the creator of toki pona.",
        "What is your name?"
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "Proper nouns (names) can stand alone without a head noun.",
          answer: false,
          explanation: "Names MUST follow a head noun: 'jan Sonja', not just 'Sonja'."
        },
        {
          statement: "Unofficial words (names) are always capitalized.",
          answer: true,
          explanation: "Correct! 'jan Sonja' — 'jan' lowercase, 'Sonja' uppercase."
        },
        {
          statement: "'toki pona' should be written as 'toki Pona' (capitalized).",
          answer: false,
          explanation: "'toki pona' uses official toki pona words, so it's NOT capitalized."
        },
        {
          statement: "There is only one correct way to tokiponize each name.",
          answer: false,
          explanation: "Multiple valid tokiponizations often exist — just follow the sound rules."
        },
        {
          statement: "'ma tomo' is used as the head noun for city names.",
          answer: true,
          explanation: "Correct! 'ma tomo Tokijo' = Tokyo (the city)."
        },
        {
          statement: "The syllable 'ti' is valid in toki pona names.",
          answer: false,
          explanation: "'ti' is not allowed — use 'si' instead."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["mi", "jan", "Mawi"],
          validAnswers: ["mi jan Mawi"],
          translations: ["I am Mary."],
          hint: "Introduction pattern"
        },
        {
          words: ["nimi", "sina", "li", "seme"],
          validAnswers: ["nimi sina li seme"],
          translations: ["What is your name?"],
          hint: "Question about name"
        },
        {
          words: ["ona", "li", "tan", "ma", "Sonko"],
          validAnswers: ["ona li tan ma Sonko"],
          translations: ["They are from China."],
          hint: "Origin statement"
        },
        {
          words: ["mi", "toki", "e", "toki", "Kanse", "kepeken"],
          validAnswers: ["mi toki kepeken toki Kanse"],
          translations: ["I speak using French."],
          hint: "Language use with kepeken"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "Which tokiponization follows the rules?",
      questions: [
        {
          tp: "How would you write 'Christine'?",
          target: "name",
          en: "Christine",
          options: ["Kiristin", "Kristin", "Kilisine", "Klistin"],
          correct: 2,
          explanation: "No consonant clusters allowed. 'Kilisine' breaks up 'Chr' and 'st'."
        },
        {
          tp: "How would you write 'Tim'?",
          target: "name",
          en: "Tim",
          options: ["Tim", "Timi", "Simi", "Sim"],
          correct: 2,
          explanation: "'ti' is forbidden — use 'si'. And typically add final vowel: 'Simi'."
        },
        {
          tp: "How would you write 'World'?",
          target: "name",
          en: "World",
          options: ["Wold", "Wole", "Wolu", "Ole"],
          correct: 3,
          explanation: "'wo' is forbidden (use 'o'), and 'rld' cluster needs simplification. 'Ole' works."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This name could represent different things:",
      questions: [
        {
          tp: "ma Kanse",
          meanings: 2,
          answers: ["France (from 'France')", "Kansas, USA (from 'Kansas')"],
          followUp: "How do you distinguish?",
          likelyAnswer: "Context! Talking about Europe → France. Talking about US states → Kansas."
        },
        {
          tp: "jan San",
          meanings: 3,
          answers: ["John", "Jean", "Jan"],
          followUp: "How do you know which?",
          likelyAnswer: "The original name's origin — ask or infer from context."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "jan sin — A New Person",
    intro: "A story about meeting someone new and learning about where they're from. Notice the name patterns!",
    paragraphs: [
      { tp: "tenpo suno ni la jan sin li kama.", en: "Today a new person comes.", note: "Introduction" },
      { tp: "mi toki tawa ona: 'toki! nimi mi li Susi. sina seme?'", en: "I say to them: 'Hello! My name is Susie. And you?'", note: "Self-introduction" },
      { tp: "ona li toki: 'toki! mi jan Tomo. mi tan ma Nijon.'", en: "They say: 'Hello! I am Tomo. I am from Japan.'", note: "Their introduction" },
      { tp: "mi toki: 'pona! ma Nijon li pona tawa mi.'", en: "I say: 'Nice! I like Japan.'", note: "Compliment" },
      { tp: "jan Tomo li toki: 'sina tan ma seme?'", en: "Tomo says: 'What country are you from?'", note: "Return question" },
      { tp: "mi toki: 'mi tan ma Mewika. mi tan ma tomo Siko.'", en: "I say: 'I'm from America. I'm from Chicago.'", note: "Full origin" },
      { tp: "jan Tomo li toki: 'pona! mi sona lili e toki Inli.'", en: "Tomo says: 'Nice! I know a little English.'", note: "Language ability" },
      { tp: "mi toki: 'mi kama sona e toki Nijon!'", en: "I say: 'I'm learning Japanese!'", note: "Learning language" },
      { tp: "mi mute li toki mute. mi mute li kama jan pona.", en: "We talk a lot. We become friends.", note: "Happy ending" }
    ],
    comprehension: [
      { question: "What is the new person's name?", answer: "Tomo (jan Tomo)", evidence: "mi jan Tomo" },
      { question: "Where is Tomo from?", answer: "Japan (ma Nijon)", evidence: "mi tan ma Nijon" },
      { question: "Where is the speaker from?", answer: "Chicago, America (ma tomo Siko, ma Mewika)", evidence: "mi tan ma Mewika. mi tan ma tomo Siko" },
      { question: "What language is the speaker learning?", answer: "Japanese (toki Nijon)", evidence: "mi kama sona e toki Nijon" }
    ],
    challenge: "Write an introduction of yourself using your tokiponized name, your country, your city, and a language you speak!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Common patterns for using names:",
    items: [
      { tp: "jan [Nimi]", en: "person named [Name]", literal: "person + name", lesson: "For all people" },
      { tp: "ma [Nimi]", en: "country named [Name]", literal: "land + name", lesson: "For countries" },
      { tp: "ma tomo [Nimi]", en: "city named [Name]", literal: "city + name", lesson: "For cities" },
      { tp: "toki [Nimi]", en: "language named [Name]", literal: "language + name", lesson: "For languages" },
      { tp: "kulupu [Nimi]", en: "group named [Name]", literal: "group + name", lesson: "For organizations" },
      { tp: "nasin [Nimi]", en: "religion named [Name]", literal: "way + name", lesson: "For religions" },
      { tp: "nimi sina li seme?", en: "What is your name?", literal: "name + your | what?", lesson: "Asking names" },
      { tp: "mi tan ma [Nimi]", en: "I am from [Country]", literal: "I | from | land + name", lesson: "Stating origin" },
      { tp: "mi toki e toki [Nimi]", en: "I speak [Language]", literal: "I | speak | language + name", lesson: "Language ability" },
      { tp: "jan pona mi [Nimi]", en: "my friend [Name]", literal: "friend + my + name", lesson: "Named relationships" }
    ],
    teaser: "Next lesson: Extended Numbers & Time! Learn to count beyond basics and express complex time concepts."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "jan [Name]", example: "jan Sonja", meaning: "person Sonja" },
      { pattern: "ma [Name]", example: "ma Mewika", meaning: "America (country)" },
      { pattern: "ma tomo [Name]", example: "ma tomo Tokijo", meaning: "Tokyo (city)" },
      { pattern: "toki [Name]", example: "toki Inli", meaning: "English (language)" },
      { pattern: "kulupu [Name]", example: "kulupu Kuko", meaning: "Google (company)" },
      { pattern: "nimi X li seme?", example: "nimi sina li seme?", meaning: "What is your name?" },
      { pattern: "mi tan ma [Name]", example: "mi tan ma Kanata", meaning: "I am from Canada" }
    ],
    remember: [
      "Names MUST follow a head noun: 'jan Sonja', 'ma Mewika'",
      "Names are ALWAYS capitalized: 'jan Sonja' not 'jan sonja'",
      "Official words stay lowercase: 'toki pona' not 'toki Pona'",
      "Toki pona syllables: (C)V(n) — no consonant clusters",
      "Forbidden: 'ti' (use 'si'), 'wo' (use 'o'), 'wu' (use 'u')",
      "Multiple tokiponizations can be valid",
      "Common head nouns: jan, ma, ma tomo, toki, kulupu, nasin, soweli",
      "'nimi sina li seme?' = What's your name?"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson16;
}
