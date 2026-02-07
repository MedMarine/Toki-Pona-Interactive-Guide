/**
 * Lesson 18: Writing Systems
 * Introduction to sitelen pona (logographic script) and sitelen sitelen
 */

const lesson18 = {
  id: 18,
  title: "Writing Systems",
  desc: "Introduction to sitelen pona (logographic script) and other toki pona writing systems",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Toki pona can be written in multiple ways: Latin alphabet (what you've been learning), <b>sitelen pona</b> (logographic glyphs), and <b>sitelen sitelen</b> (artistic block script). This lesson introduces sitelen pona, the most common alternative script.",
    
    concepts: [
      {
        title: "What is sitelen pona?",
        explanation: "<b>sitelen pona</b> (good/simple writing) is a logographic script where each toki pona word has its own symbol. It was created by Sonja Lang alongside the language. Each glyph represents a complete word, not a sound.",
        examples: [
          { tp: "sitelen = glyph/symbol", en: "Each word has one picture", note: "Logographic" },
          { tp: "pona = ☺ shape", en: "Simple smiling face", note: "Represents 'good/simple'" },
          { tp: "toki = speech bubble", en: "Mouth with speech lines", note: "Represents 'language/speak'" },
          { tp: "jan = person shape", en: "Simple human figure", note: "Represents 'person'" },
          { tp: "tomo = house shape", en: "Simple house outline", note: "Represents 'building'" }
        ],
        pitfall: "Unlike alphabets, you need to learn each symbol separately — but there are only ~120 symbols for the whole language!"
      },
      {
        title: "Reading direction and spacing",
        explanation: "Sitelen pona is typically written left-to-right, top-to-bottom like Latin script. Words are written as separate glyphs with small spaces between them. Sentences flow naturally.",
        examples: [
          { tp: "mi pona = [mi][pona]", en: "Two glyphs side by side", note: "Left to right" },
          { tp: "ona li moku = [ona][li][moku]", en: "Three glyphs in sequence", note: "Including li" },
          { tp: "mi tawa tomo = [mi][tawa][tomo]", en: "Sentence as glyph sequence", note: "Natural reading" }
        ],
        pitfall: "Each word is one glyph — 'jan pona' is two glyphs [jan][pona], not one combined symbol."
      },
      {
        title: "Modifiers: stacking and combining",
        explanation: "When a word modifies another, the modifier glyph is often written <b>smaller</b> and placed <b>inside or below</b> the main word's glyph. This is called 'stacking' or 'combining'.",
        examples: [
          { tp: "tomo tawa (vehicle)", en: "[tomo with small tawa inside]", note: "Modifier inside" },
          { tp: "jan pona (friend)", en: "[jan with small pona inside/below]", note: "Stacked glyphs" },
          { tp: "telo suli (ocean)", en: "[telo with small suli]", note: "Size modifier inside" },
          { tp: "ma kasi (forest)", en: "[ma with small kasi]", note: "Type modifier" }
        ],
        pitfall: "Not all writers use stacking — some write modifiers as separate small glyphs. Both are valid!"
      },
      {
        title: "The cartouche: writing names",
        explanation: "Proper nouns (names) are written inside a <b>cartouche</b> — a rounded rectangular container. Inside, each syllable is represented by a glyph whose word STARTS with that sound.",
        examples: [
          { tp: "jan [Sonja]", en: "[jan] + cartouche[s-o-n-j-a]", note: "Name in cartouche" },
          { tp: "S = sewi, sina, seli...", en: "Any glyph starting with 's'", note: "Sound representation" },
          { tp: "O = open, ona, olin...", en: "Any glyph starting with 'o'", note: "Writer's choice" },
          { tp: "ma [Mewika]", en: "[ma] + cartouche[m-e-w-i-k-a]", note: "Place name" }
        ],
        pitfall: "Multiple glyphs can represent the same sound — choose one you like or find meaningful!"
      },
      {
        title: "Common sitelen pona glyphs",
        explanation: "Here are some of the most recognizable glyphs. The Unicode standard (UCSUR) assigns each glyph a code point, allowing digital display.",
        examples: [
          { tp: "mi = standing figure", en: "Pointing at self", note: "First person" },
          { tp: "sina = pointing finger", en: "Pointing outward", note: "Second person" },
          { tp: "ona = third figure", en: "Figure facing away", note: "Third person" },
          { tp: "li = vertical line", en: "Separator mark", note: "Predicate marker" },
          { tp: "e = bracket shape", en: "Object marker", note: "Direct object marker" },
          { tp: "la = curved line", en: "Context separator", note: "Context marker" }
        ],
        pitfall: "Glyphs are often simplified/stylized — different fonts show different styles!"
      },
      {
        title: "pi in sitelen pona",
        explanation: "The word <b>pi</b> has its own glyph. When used, the modifiers after pi are typically grouped together visually, often with a bracket or container.",
        examples: [
          { tp: "jan pi pona mute", en: "[jan] [pi] [pona mute together]", note: "Pi groups what follows" },
          { tp: "tomo pi telo suli", en: "[tomo] [pi] [telo+suli]", note: "Bathroom = room of much water" },
          { tp: "Some fonts show pi as bracket", en: "Visual grouping varies", note: "Style differences" }
        ],
        pitfall: "How pi grouping is shown varies by font and writer style."
      },
      {
        title: "Punctuation in sitelen pona",
        explanation: "Sitelen pona uses minimal punctuation. Sentences may end with a period-like mark. Questions sometimes end with a question-mark glyph. Many writers use no punctuation at all!",
        examples: [
          { tp: "Statement ending", en: "Small dot or nothing", note: "Minimal punctuation" },
          { tp: "Question ending", en: "Sometimes a special mark", note: "Optional" },
          { tp: "No punctuation", en: "Context shows sentence breaks", note: "Also valid" }
        ],
        pitfall: "Punctuation is not standardized — consistency within a text is what matters."
      },
      {
        title: "sitelen sitelen (block script)",
        explanation: "<b>sitelen sitelen</b> is an artistic, non-linear script inspired by Mayan glyphs. Words are arranged in blocks that can be read in multiple directions. It's beautiful but complex!",
        examples: [
          { tp: "Created by Jonathan Gabel", en: "Artistic alternative", note: "For art/decoration" },
          { tp: "Non-linear arrangement", en: "Blocks contain nested glyphs", note: "Complex reading" },
          { tp: "Often used for art", en: "Calligraphy, tattoos, art", note: "Aesthetic focus" }
        ],
        pitfall: "sitelen sitelen is beautiful but harder to read/write — sitelen pona is more practical for daily use."
      },
      {
        title: "Learning to read sitelen pona",
        explanation: "Start by recognizing common words: mi, sina, li, e, pona, toki, jan, tomo. Practice reading simple sentences. Use fonts that display sitelen pona clearly.",
        examples: [
          { tp: "Start with particles", en: "li, e, la, pi are common", note: "High frequency" },
          { tp: "Learn person words", en: "mi, sina, ona, jan", note: "Very common" },
          { tp: "Practice common nouns", en: "tomo, moku, telo, ma", note: "Daily vocabulary" },
          { tp: "Read simple sentences", en: "'mi pona' = two glyphs", note: "Build up slowly" }
        ],
        pitfall: "Don't try to memorize all glyphs at once — learn them gradually through use!"
      },
      {
        title: "Using sitelen pona digitally",
        explanation: "Sitelen pona can be typed using special fonts that map to the UCSUR (Under-ConScript Unicode Registry). Install a sitelen pona font, then type normally — the font converts letters to glyphs.",
        examples: [
          { tp: "UCSUR range", en: "U+F1900 to U+F19FF", note: "Private use area" },
          { tp: "Popular fonts", en: "nasin nanpa, linja pona, etc.", note: "Free downloads" },
          { tp: "Type 'pona', see glyph", en: "Font does conversion", note: "Easy to use" }
        ],
        pitfall: "You need a sitelen pona font installed — otherwise you'll see empty boxes or question marks!"
      }
    ],
    
    keyInsight: "Sitelen pona is a beautiful and practical way to write toki pona. With only ~120 symbols (one per word), it's much easier to learn than Chinese or Japanese characters. The visual nature helps reinforce word meanings — 'tomo' looks like a house, 'jan' looks like a person!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "sitelen",
      primaryMeaning: "image, picture, writing, symbol",
      roles: {
        adjective: "written, drawn, visual",
        noun: "image, picture, symbol, writing, representation",
        verbTransitive: "to write, to draw, to represent visually"
      },
      notes: "Covers all visual representation: pictures, writing, symbols, icons. 'sitelen pona' = good/simple writing (the script). 'sitelen tawa' = movie (moving pictures).",
      compounds: [
        { tp: "sitelen pona", en: "sitelen pona script, logographic writing" },
        { tp: "sitelen sitelen", en: "sitelen sitelen (artistic block script)" },
        { tp: "sitelen tawa", en: "movie, video, animation" },
        { tp: "sitelen toki", en: "written language" },
        { tp: "ilo sitelen", en: "writing tool, pen, pencil" }
      ]
    },
    {
      word: "lipu",
      primaryMeaning: "paper, document, book, website",
      roles: {
        adjective: "flat, paper-like, documented",
        noun: "paper, card, document, book, website, flat thing"
      },
      notes: "Any flat written/printed surface. 'lipu' for books, documents, cards, websites. 'lipu sona' = educational document, textbook.",
      compounds: [
        { tp: "lipu sona", en: "book, educational document" },
        { tp: "lipu musi", en: "comic, fun book, game manual" },
        { tp: "lipu lawa", en: "constitution, rulebook" },
        { tp: "lipu nanpa", en: "numbered document, page number" },
        { tp: "lipu pi toki pona", en: "toki pona book/document" }
      ]
    },
    {
      word: "nimi",
      primaryMeaning: "name, word",
      roles: {
        noun: "name, word, term",
        verbTransitive: "to name, to call"
      },
      notes: "Both 'name' (proper noun) and 'word' (vocabulary item). 'nimi sina' = your name. 'nimi ni' = this word. 'nimi ale' = all words (vocabulary).",
      compounds: [
        { tp: "nimi mi", en: "my name" },
        { tp: "nimi pi ijo ni", en: "the name of this thing" },
        { tp: "nimi sin", en: "new word, neologism" },
        { tp: "nimi pona", en: "good name, compliment" },
        { tp: "nimi ike", en: "insult, bad name" }
      ]
    },
    {
      word: "kalama",
      primaryMeaning: "sound, noise, voice",
      roles: {
        adjective: "sounding, audible, noisy",
        noun: "sound, noise, voice, audio",
        verbIntransitive: "to make sound, to speak aloud"
      },
      notes: "Any sound, including speech. 'kalama musi' = music. 'kalama uta' = spoken sound. 'o kalama ala' = be quiet!",
      compounds: [
        { tp: "kalama musi", en: "music" },
        { tp: "kalama uta", en: "speech, spoken voice" },
        { tp: "kalama suli", en: "loud sound" },
        { tp: "ilo kalama", en: "musical instrument" },
        { tp: "kalama ala", en: "silence" }
      ]
    },
    {
      word: "pu",
      primaryMeaning: "the official toki pona book",
      roles: {
        adjective: "according to the official book",
        noun: "the book 'Toki Pona: The Language of Good'",
        verbIntransitive: "to interact with the official book"
      },
      notes: "Specifically refers to 'Toki Pona: The Language of Good' by Sonja Lang. 'pu' as verb = to use/read the book. 'nasin pu' = according to the book.",
      compounds: [
        { tp: "lipu pu", en: "the official toki pona book" },
        { tp: "nasin pu", en: "way of the book, official method" },
        { tp: "jan pi pu", en: "book user, learner from the book" }
      ]
    },
    {
      word: "ku",
      primaryMeaning: "the toki pona dictionary",
      roles: {
        adjective: "according to the dictionary",
        noun: "the book 'Toki Pona Dictionary'",
        verbIntransitive: "to interact with the dictionary"
      },
      notes: "Refers to 'Toki Pona Dictionary' by Sonja Lang (2021). Contains extended word usage data from community surveys. Companion to 'pu'.",
      compounds: [
        { tp: "lipu ku", en: "the toki pona dictionary book" },
        { tp: "nimi ku", en: "words in the dictionary" },
        { tp: "nasin ku", en: "dictionary-based approach" }
      ]
    },
    {
      word: "linja",
      primaryMeaning: "line, cord, rope, hair, thread",
      roles: {
        adjective: "linear, long and thin, string-like",
        noun: "line, cord, string, rope, thread, hair"
      },
      notes: "Anything long and thin: lines in writing, strings, ropes, hair. 'linja pona' is a popular sitelen pona font name.",
      compounds: [
        { tp: "linja lawa", en: "hair (head strings)" },
        { tp: "linja sitelen", en: "written line, stroke" },
        { tp: "linja pona", en: "(a sitelen pona font name)" },
        { tp: "linja suli", en: "long line, rope" }
      ]
    },
    {
      word: "supa",
      primaryMeaning: "horizontal surface, table, floor",
      roles: {
        adjective: "flat, horizontal, surface-level",
        noun: "floor, table, bed, platform, horizontal surface"
      },
      notes: "Any flat horizontal surface: tables, floors, beds, platforms. Contrasts with 'sinpin' (vertical front surface).",
      compounds: [
        { tp: "supa lape", en: "bed" },
        { tp: "supa moku", en: "dining table" },
        { tp: "supa noka", en: "floor (foot surface)" },
        { tp: "supa pali", en: "desk, work table" },
        { tp: "supa sitelen", en: "writing surface, desk" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    writingSystems: [
      { tp: "sitelen pona li pona mute", en: "Sitelen pona is very good.", gloss: "writing + good | (li) | good + very", note: "Opinion on the script" },
      { tp: "mi sitelen kepeken sitelen pona", en: "I write using sitelen pona.", gloss: "I | write | using | writing + good", note: "Using the script" },
      { tp: "sina ken ala ken sitelen pona?", en: "Can you write in sitelen pona?", gloss: "you | can + not + can | write + good", note: "Asking ability" },
      { tp: "sitelen sitelen li pona lukin", en: "Sitelen sitelen is beautiful.", gloss: "writing + writing | (li) | good + look", note: "Aesthetic appreciation" },
      { tp: "mi kama sona e sitelen pona", en: "I'm learning sitelen pona.", gloss: "I | come + know | (e) | writing + good", note: "Learning the script" }
    ],
    
    booksAndDocuments: [
      { tp: "lipu pu li suli", en: "The official book is important.", gloss: "paper + (pu) | (li) | big/important", note: "The main book" },
      { tp: "mi jo e lipu pi toki pona", en: "I have a toki pona book.", gloss: "I | have | (e) | paper | (pi) | toki pona", note: "Having a book" },
      { tp: "lipu ni li pana e sona mute", en: "This document gives much knowledge.", gloss: "paper + this | (li) | give | (e) | knowledge + much", note: "Educational value" },
      { tp: "lipu ku li jo e nimi mute", en: "The dictionary has many words.", gloss: "paper + (ku) | (li) | have | (e) | word + many", note: "Dictionary content" },
      { tp: "mi lukin e lipu lon ilo sona", en: "I read the document on a computer.", gloss: "I | look | (e) | paper | at | tool + know", note: "Digital reading" }
    ],
    
    wordsAndNames: [
      { tp: "nimi ni li seme?", en: "What is this word?", gloss: "word + this | (li) | what", note: "Asking word meaning" },
      { tp: "nimi 'pona' li pona!", en: "The word 'pona' is good!", gloss: "word + pona | (li) | good", note: "Meta-comment" },
      { tp: "mi sona ala e nimi ale", en: "I don't know all the words.", gloss: "I | know + not | (e) | word + all", note: "Vocabulary limitation" },
      { tp: "nimi sin li kama lon tenpo ni", en: "New words come in this time.", gloss: "word + new | (li) | come | at | time + this", note: "Neologisms" },
      { tp: "nimi pi jan ni li seme?", en: "What is this person's name?", gloss: "name | (pi) | person + this | (li) | what", note: "Asking someone's name" }
    ],
    
    soundAndMusic: [
      { tp: "kalama musi li pona tawa mi", en: "I like music.", gloss: "sound + fun | (li) | good | to | me", note: "Enjoying music" },
      { tp: "o kalama ala!", en: "Be quiet! (Don't make sound!)", gloss: "(o) | sound + not", note: "Requesting silence" },
      { tp: "mi kute e kalama waso", en: "I hear bird sounds.", gloss: "I | hear | (e) | sound + bird", note: "Hearing birds" },
      { tp: "kalama ona li suli", en: "Their voice is loud.", gloss: "sound + their | (li) | big", note: "Loud voice" },
      { tp: "ilo kalama li pana e kalama pona", en: "The instrument makes good sound.", gloss: "tool + sound | (li) | give | (e) | sound + good", note: "Playing music" }
    ],
    
    learningToRead: [
      { tp: "mi lukin e sitelen pona", en: "I look at sitelen pona.", gloss: "I | look | (e) | writing + good", note: "Reading practice" },
      { tp: "mi ken lukin e sitelen ni", en: "I can read this writing.", gloss: "I | can | look | (e) | writing + this", note: "Reading ability" },
      { tp: "sitelen ni li seme?", en: "What is this symbol?", gloss: "writing + this | (li) | what", note: "Asking about glyph" },
      { tp: "mi sona e sitelen pi nimi 'pona'", en: "I know the symbol for 'pona'.", gloss: "I | know | (e) | writing | (pi) | word + pona", note: "Knowing a glyph" },
      { tp: "o sitelen e nimi sina!", en: "Write your name!", gloss: "(o) | write | (e) | name + your", note: "Writing practice" }
    ],
    
    digitalWriting: [
      { tp: "mi jo e ilo pi sitelen pona", en: "I have a sitelen pona tool (font).", gloss: "I | have | (e) | tool | (pi) | writing + good", note: "Having the font" },
      { tp: "ilo sona mi li ken sitelen pona", en: "My computer can display sitelen pona.", gloss: "tool + know + my | (li) | can | write + good", note: "Font installed" },
      { tp: "lipu lon ilo li pona", en: "Documents on computers are good.", gloss: "paper | at | tool | (li) | good", note: "Digital documents" },
      { tp: "mi sitelen lon lipu lili", en: "I write on a small document (note/message).", gloss: "I | write | at | paper + small", note: "Short writing" }
    ],
    
    ambiguous: [
      { tp: "sitelen ni", meanings: ["this picture", "this symbol", "this writing"], likely: "Context determines", note: "'sitelen' covers many visual representations" },
      { tp: "lipu", meanings: ["paper", "book", "document", "website", "card"], likely: "Any flat written surface", note: "Very broad meaning" },
      { tp: "kalama", meanings: ["sound", "noise", "voice", "music"], likely: "Any audible sound", note: "Context specifies type" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What does this term refer to?",
      questions: [
        {
          tp: "**sitelen pona**",
          target: "sitelen pona",
          en: "the logographic script",
          options: ["A type of music", "A writing system", "A book title", "A person's name"],
          correct: 1,
          explanation: "'sitelen pona' = 'good/simple writing' is the logographic script for toki pona."
        },
        {
          tp: "**lipu pu**",
          target: "lipu pu",
          en: "the official toki pona book",
          options: ["Any toki pona book", "The official book by Sonja Lang", "A dictionary", "A website"],
          correct: 1,
          explanation: "'pu' specifically refers to 'Toki Pona: The Language of Good' by Sonja Lang."
        },
        {
          tp: "**kalama musi**",
          target: "kalama musi",
          en: "music",
          options: ["Fun noise", "Music", "Singing voice", "Musical instrument"],
          correct: 1,
          explanation: "'kalama musi' = 'fun/entertaining sound' = music."
        },
        {
          tp: "**nimi pi toki pona**",
          target: "nimi",
          en: "words of toki pona",
          options: ["Names of people", "Toki pona vocabulary", "A book title", "Sound of toki pona"],
          correct: 1,
          explanation: "'nimi' means 'word' — 'nimi pi toki pona' = toki pona words/vocabulary."
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the correct word:",
      questions: [
        {
          tp: "mi _____ kepeken sitelen pona",
          en: "I write using sitelen pona.",
          answer: "sitelen",
          hint: "Verb for writing/drawing"
        },
        {
          tp: "_____ ni li seme?",
          en: "What is this word?",
          answer: "nimi",
          hint: "Word for 'word' or 'name'"
        },
        {
          tp: "mi jo e _____ pi toki pona",
          en: "I have a toki pona book.",
          answer: "lipu",
          hint: "Word for book/document"
        },
        {
          tp: "_____ musi li pona tawa mi",
          en: "I like music. (Music is good to me.)",
          answer: "kalama",
          hint: "Word for sound"
        },
        {
          tp: "mi kama sona e sitelen _____",
          en: "I'm learning sitelen pona.",
          answer: "pona",
          hint: "The 'good/simple' script"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "sitelen pona li pona lukin", expectedType: "opinion", hint: "Beautiful script" },
        { tp: "mi sona e nimi mute", expectedType: "knowledge", hint: "Knowing many words" },
        { tp: "lipu ni li pana e sona", expectedType: "books", hint: "Book gives knowledge" },
        { tp: "o kalama ala!", expectedType: "command", hint: "Be quiet!" },
        { tp: "nimi sina li seme?", expectedType: "question", hint: "Asking name" },
        { tp: "mi lukin e sitelen lon lipu", expectedType: "reading", hint: "Looking at writing" }
      ],
      answers: [
        "Sitelen pona is beautiful / looks good.",
        "I know many words.",
        "This book/document gives knowledge.",
        "Be quiet! / Don't make noise!",
        "What is your name?",
        "I read (look at writing) on a book/document."
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "Sitelen pona uses one symbol per word.",
          answer: true,
          explanation: "Correct! Each toki pona word has its own glyph — it's logographic."
        },
        {
          statement: "'pu' can refer to any toki pona book.",
          answer: false,
          explanation: "'pu' specifically refers to 'Toki Pona: The Language of Good' by Sonja Lang."
        },
        {
          statement: "Names in sitelen pona are written inside a cartouche.",
          answer: true,
          explanation: "Correct! Proper nouns go in a rounded container called a cartouche."
        },
        {
          statement: "'lipu' only means 'book'.",
          answer: false,
          explanation: "'lipu' means any flat written surface: book, paper, document, card, website, etc."
        },
        {
          statement: "Sitelen sitelen is easier to learn than sitelen pona.",
          answer: false,
          explanation: "Sitelen sitelen is more complex and artistic. Sitelen pona is simpler and more practical."
        },
        {
          statement: "'kalama' can mean both 'sound' and 'voice'.",
          answer: true,
          explanation: "Correct! 'kalama' covers all sounds including speech/voice."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["mi", "sitelen", "kepeken", "sitelen", "pona"],
          validAnswers: ["mi sitelen kepeken sitelen pona"],
          translations: ["I write using sitelen pona."],
          hint: "'sitelen' as verb, 'sitelen pona' as the script name"
        },
        {
          words: ["nimi", "ni", "li", "seme"],
          validAnswers: ["nimi ni li seme"],
          translations: ["What is this word?"],
          hint: "Question about a word"
        },
        {
          words: ["lipu", "pu", "li", "pona", "mute"],
          validAnswers: ["lipu pu li pona mute"],
          translations: ["The official book is very good."],
          hint: "'pu' as the official book"
        },
        {
          words: ["o", "kalama", "ala"],
          validAnswers: ["o kalama ala"],
          translations: ["Be quiet!"],
          hint: "Command to not make sound"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What type of 'sitelen' is this referring to?",
      questions: [
        {
          tp: "mi lukin e **sitelen tawa**",
          target: "sitelen tawa",
          en: "I watch a movie",
          options: ["Writing", "Picture", "Movie/video", "Symbol"],
          correct: 2,
          explanation: "'sitelen tawa' = 'moving picture' = movie/video."
        },
        {
          tp: "**sitelen** ni li pona lukin",
          target: "sitelen",
          en: "this picture is beautiful",
          options: ["Writing", "Picture/image", "Movie", "Word"],
          correct: 1,
          explanation: "'sitelen' alone often means picture or image."
        },
        {
          tp: "mi sona e **sitelen** pi nimi 'toki'",
          target: "sitelen",
          en: "I know the symbol for 'toki'",
          options: ["The word 'toki'", "The glyph for 'toki'", "A picture of talking", "A movie about language"],
          correct: 1,
          explanation: "'sitelen pi nimi' = the symbol/glyph for a word."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "What could this phrase mean?",
      questions: [
        {
          tp: "sitelen pona",
          meanings: 3,
          answers: ["the sitelen pona script", "good picture", "simple writing"],
          followUp: "How do you know which meaning?",
          likelyAnswer: "Usually refers to the script. As 'good picture', would typically need more context."
        },
        {
          tp: "lipu sona",
          meanings: 2,
          answers: ["educational book/textbook", "knowledge document"],
          followUp: "What's the difference?",
          likelyAnswer: "Both are valid — a document that contains or teaches knowledge."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "lipu pi sitelen pona — A Sitelen Pona Book",
    intro: "A story about discovering and learning sitelen pona. Notice the vocabulary about writing and reading!",
    paragraphs: [
      { tp: "mi kama sona e toki pona.", en: "I am learning toki pona.", note: "Background" },
      { tp: "mi sona e nimi mute.", en: "I know many words.", note: "Vocabulary knowledge" },
      { tp: "tenpo ni la mi wile sona e sitelen pona.", en: "Now I want to know sitelen pona.", note: "New goal" },
      { tp: "mi lukin e lipu pi sitelen pona.", en: "I look at a sitelen pona book.", note: "Finding resource" },
      { tp: "sitelen ni li pona lukin!", en: "These symbols are beautiful!", note: "First impression" },
      { tp: "sitelen pi nimi 'pona' li sike.", en: "The symbol for 'pona' is round.", note: "Noticing shapes" },
      { tp: "sitelen pi nimi 'jan' li sama jan.", en: "The symbol for 'jan' looks like a person.", note: "Pictographic nature" },
      { tp: "mi sitelen e nimi mi lon sitelen pona.", en: "I write my name in sitelen pona.", note: "Practice writing" },
      { tp: "mi kepeken ilo sitelen.", en: "I use a writing tool.", note: "Using pen/pencil" },
      { tp: "sitelen mi li pona ala... taso mi kama sona!", en: "My writing is not good... but I'm learning!", note: "Progress mindset" },
      { tp: "tenpo kama la mi sitelen pona!", en: "In the future, I will write well!", note: "Future goal" }
    ],
    comprehension: [
      { question: "What does the speaker want to learn now?", answer: "Sitelen pona (the script)", evidence: "mi wile sona e sitelen pona" },
      { question: "What does the 'pona' symbol look like?", answer: "Round (sike)", evidence: "sitelen pi nimi 'pona' li sike" },
      { question: "What does the 'jan' symbol look like?", answer: "A person (sama jan)", evidence: "sitelen pi nimi 'jan' li sama jan" },
      { question: "How is the speaker's writing right now?", answer: "Not good yet, but improving", evidence: "sitelen mi li pona ala... taso mi kama sona" }
    ],
    challenge: "Try to draw the sitelen pona symbols for: pona, ike, mi, sina, jan, tomo. Hint: they often look like what they mean!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Writing-related vocabulary creates many useful expressions:",
    items: [
      { tp: "sitelen pona", en: "sitelen pona script", literal: "writing + good", lesson: "The logographic script" },
      { tp: "sitelen sitelen", en: "sitelen sitelen (block script)", literal: "writing + writing", lesson: "Artistic script" },
      { tp: "sitelen tawa", en: "movie, video", literal: "picture + moving", lesson: "Moving pictures" },
      { tp: "lipu sona", en: "textbook, educational document", literal: "paper + knowledge", lesson: "Learning material" },
      { tp: "kalama musi", en: "music", literal: "sound + fun", lesson: "Entertainment sound" },
      { tp: "ilo sitelen", en: "pen, pencil, writing tool", literal: "tool + writing", lesson: "Writing implement" },
      { tp: "ilo kalama", en: "musical instrument", literal: "tool + sound", lesson: "Sound-making tool" },
      { tp: "lipu pu", en: "the official toki pona book", literal: "paper + (pu)", lesson: "The first book" },
      { tp: "lipu ku", en: "the toki pona dictionary", literal: "paper + (ku)", lesson: "The dictionary" },
      { tp: "linja sitelen", en: "written line, text line", literal: "line + writing", lesson: "Line of text" }
    ],
    teaser: "Congratulations! You've completed all 18 lessons! You now know the full vocabulary and grammar of toki pona. Keep practicing with reading, writing, and conversation!"
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "sitelen pona", example: "mi sitelen kepeken sitelen pona", meaning: "I write using sitelen pona" },
      { pattern: "lipu + modifier", example: "lipu sona", meaning: "educational book" },
      { pattern: "kalama + type", example: "kalama musi", meaning: "music" },
      { pattern: "nimi + seme", example: "nimi ni li seme?", meaning: "What is this word?" },
      { pattern: "sitelen pi nimi X", example: "sitelen pi nimi 'jan'", meaning: "the symbol for 'jan'" },
      { pattern: "ilo sitelen", example: "mi kepeken ilo sitelen", meaning: "I use a writing tool" }
    ],
    remember: [
      "sitelen pona = logographic script (one glyph per word)",
      "sitelen sitelen = artistic block script (more complex)",
      "Names go in cartouches in sitelen pona",
      "Modifiers can stack inside/below main glyphs",
      "lipu = any flat written surface (book, document, website)",
      "nimi = word or name",
      "kalama = any sound (including voice, music)",
      "pu = the official book | ku = the dictionary",
      "UCSUR fonts display sitelen pona digitally",
      "~120 symbols total — much easier than other logographic scripts!"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson18;
}
