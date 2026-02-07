/**
 * Lesson 11: seme — Questions
 * Asking who, what, where, why, and how
 */

const lesson11 = {
  id: 11,
  title: "seme — Questions",
  desc: "Asking who, what, where, why, and how using the question word seme",
  isExpanded: true,
  
  grammar: {
    summary: "<b>seme</b> is the question word. Put it where the unknown thing would go: 'sina moku e <b>seme</b>?' = What do you eat? '<b>seme</b> li pali e ni?' = What did this? 'sina tawa <b>seme</b>?' = Where are you going?",
    
    concepts: [
      {
        title: "Basic principle: seme replaces the unknown",
        explanation: "<b>seme</b> goes in the exact position where the answer would go. Word order stays the same! If you're asking 'what' as an object, put 'seme' in the object position.",
        examples: [
          { tp: "sina moku e seme?", en: "What do you eat?", note: "'seme' replaces the unknown object" },
          { tp: "seme li lon?", en: "What exists? / What's there?", note: "'seme' as subject" },
          { tp: "ni li seme?", en: "What is this?", note: "'seme' as predicate" },
          { tp: "sina pali e seme?", en: "What are you doing?", note: "'seme' = what (object)" },
          { tp: "seme li pona tawa sina?", en: "What's good to you? / What do you like?", note: "'seme' as subject" }
        ],
        pitfall: "Don't change word order! 'seme' just replaces the unknown word."
      },
      {
        title: "Subject questions: seme li...",
        explanation: "When asking WHO or WHAT did something, <b>seme</b> is the subject. It comes before <b>li</b>.",
        examples: [
          { tp: "seme li pali e ni?", en: "What made this? / Who did this?", note: "'seme' = unknown actor" },
          { tp: "seme li moku e kili mi?", en: "What is eating my fruit?", note: "Unknown thing eating" },
          { tp: "seme li lon tomo?", en: "What's in the house?", note: "Asking what exists" },
          { tp: "seme li kama?", en: "What's coming? / Who's coming?", note: "Unknown arrival" },
          { tp: "seme li pona?", en: "What's good?", note: "Asking about quality" }
        ],
        pitfall: "'seme li...' asks about the SUBJECT — who/what is doing the action."
      },
      {
        title: "Object questions: ...e seme?",
        explanation: "When asking WHAT someone is doing or what they have, <b>seme</b> is the direct object after <b>e</b>.",
        examples: [
          { tp: "sina pali e seme?", en: "What are you doing/making?", note: "'seme' = unknown action/object" },
          { tp: "ona li moku e seme?", en: "What are they eating?", note: "Unknown food" },
          { tp: "sina jo e seme?", en: "What do you have?", note: "Unknown possession" },
          { tp: "mi ken pana e seme tawa sina?", en: "What can I give you?", note: "Offering help" },
          { tp: "sina wile e seme?", en: "What do you want?", note: "Asking desires" }
        ],
        pitfall: "'...e seme?' asks about the OBJECT — what is being acted upon."
      },
      {
        title: "Location questions: tawa/lon seme?",
        explanation: "For WHERE questions, use <b>seme</b> after location prepositions: <b>tawa seme?</b> = where to? <b>lon seme?</b> = where at?",
        examples: [
          { tp: "sina tawa seme?", en: "Where are you going?", note: "'tawa seme' = to where?" },
          { tp: "ona li lon seme?", en: "Where is it/are they?", note: "'lon seme' = at where?" },
          { tp: "sina tan seme?", en: "Where are you from?", note: "'tan seme' = from where?" },
          { tp: "ni li lon seme?", en: "Where is this?", note: "Location question" },
          { tp: "sina wile tawa seme?", en: "Where do you want to go?", note: "Destination" }
        ],
        pitfall: "'tawa seme' = where TO. 'lon seme' = where AT. 'tan seme' = where FROM."
      },
      {
        title: "Reason questions: tan seme?",
        explanation: "<b>tan seme?</b> asks 'why?' or 'because of what?' It literally means 'from what cause?'",
        examples: [
          { tp: "sina pali e ni tan seme?", en: "Why did you do this?", note: "'tan seme' = because of what?" },
          { tp: "ona li tawa tan seme?", en: "Why did they go?", note: "Reason for leaving" },
          { tp: "ni li ike tan seme?", en: "Why is this bad?", note: "Asking for cause" },
          { tp: "sina pilin ike tan seme?", en: "Why do you feel bad?", note: "Emotional reason" },
          { tp: "tan seme?", en: "Why? (standalone)", note: "Short question" }
        ],
        pitfall: "'tan seme?' literally = 'from what?' but means 'why?' or 'what's the reason?'"
      },
      {
        title: "Method questions: kepeken seme? / nasin seme?",
        explanation: "For HOW questions, ask about the method or way: <b>kepeken seme?</b> = using what? <b>nasin seme?</b> = what way?",
        examples: [
          { tp: "sina pali e ni kepeken seme?", en: "How did you do this? (using what?)", note: "'kepeken seme' = by what means?" },
          { tp: "mi ken kama kepeken seme?", en: "How can I come? (by what method?)", note: "Transportation question" },
          { tp: "sina toki kepeken toki seme?", en: "What language do you speak?", note: "'toki seme' = what language?" },
          { tp: "nasin seme?", en: "How? What way?", note: "Asking about method" },
          { tp: "mi pali e ni lon nasin seme?", en: "How should I do this?", note: "'nasin seme' = what way?" }
        ],
        pitfall: "'kepeken seme' focuses on TOOLS/MEANS. 'nasin seme' focuses on METHOD/WAY."
      },
      {
        title: "Identity questions: jan/ijo seme?",
        explanation: "To ask WHO or WHICH, modify a noun with <b>seme</b>: <b>jan seme?</b> = which person? <b>ijo seme?</b> = which thing?",
        examples: [
          { tp: "jan seme li pali e ni?", en: "Which person did this? / Who did this?", note: "'jan seme' = which person?" },
          { tp: "sina toki tawa jan seme?", en: "Who are you talking to?", note: "Asking about recipient" },
          { tp: "ijo seme li lon?", en: "What things are here?", note: "'ijo seme' = what thing?" },
          { tp: "kili seme li pona tawa sina?", en: "Which fruit do you like?", note: "'kili seme' = which fruit?" },
          { tp: "tomo seme li tomo sina?", en: "Which house is yours?", note: "'tomo seme' = which house?" }
        ],
        pitfall: "'jan seme' = who/which person. 'seme' alone can work, but 'jan seme' is more specific."
      },
      {
        title: "nimi questions: What is your name?",
        explanation: "<b>nimi</b> means 'name' or 'word'. <b>nimi sina li seme?</b> = What is your name?",
        examples: [
          { tp: "nimi sina li seme?", en: "What is your name?", note: "Asking someone's name" },
          { tp: "nimi ona li seme?", en: "What is their name?", note: "Third person name" },
          { tp: "nimi pi ijo ni li seme?", en: "What is this thing called?", note: "Name of something" },
          { tp: "nimi mi li [Jan].", en: "My name is [Jan].", note: "Answering format" },
          { tp: "ni li seme lon toki pona?", en: "What is this in Toki Pona?", note: "Translation question" }
        ],
        pitfall: "'nimi sina li seme?' is the standard way to ask names."
      },
      {
        title: "Numbers and counting basics",
        explanation: "Toki Pona has a simple number system: <b>wan</b> (1), <b>tu</b> (2), <b>luka</b> (5, also 'hand'), <b>mute</b> (many), <b>ale</b> (all/100).",
        examples: [
          { tp: "wan", en: "one", note: "Also: united, single" },
          { tp: "tu", en: "two", note: "Also: to divide, split" },
          { tp: "luka", en: "five, hand", note: "Hand has 5 fingers!" },
          { tp: "mute", en: "many, 20+", note: "Vague large number" },
          { tp: "ale/ali", en: "all, everything, 100", note: "Both forms are valid" }
        ],
        pitfall: "Toki Pona doesn't need precise numbers! 'mute' (many) often suffices."
      },
      {
        title: "Ordinals with nanpa",
        explanation: "<b>nanpa</b> means 'number'. For ordinals: <b>jan nanpa wan</b> = first person. <b>nanpa seme?</b> = which number?",
        examples: [
          { tp: "tomo nanpa wan", en: "first room / room #1", note: "'nanpa wan' = number one" },
          { tp: "jan nanpa tu", en: "second person / person #2", note: "Ordinal with 'tu'" },
          { tp: "tenpo suno nanpa seme?", en: "What day? (which number day?)", note: "Date question" },
          { tp: "ni li nanpa seme?", en: "What number is this?", note: "Asking about numbers" },
          { tp: "sina nanpa seme?", en: "What's your number? / What place are you?", note: "Position in line, etc." }
        ],
        pitfall: "'nanpa' before a number = ordinal. 'tomo nanpa tu' = room #2, second room."
      },
      {
        title: "Building numbers",
        explanation: "Combine number words: <b>tu wan</b> = 3 (2+1), <b>tu tu</b> = 4, <b>luka tu</b> = 7 (5+2), <b>luka luka</b> = 10.",
        examples: [
          { tp: "tu wan", en: "three (2+1)", note: "Adding numbers" },
          { tp: "tu tu", en: "four (2+2)", note: "Two twos" },
          { tp: "luka", en: "five", note: "Base five" },
          { tp: "luka wan", en: "six (5+1)", note: "Adding to five" },
          { tp: "luka luka", en: "ten (5+5)", note: "Two hands" },
          { tp: "mute", en: "many (20+, vague)", note: "For large amounts" }
        ],
        pitfall: "Numbers beyond ~10 get awkward. Use 'mute' for large quantities!"
      }
    ],
    
    keyInsight: "<b>seme</b> is the universal question word. Put it WHERE THE ANSWER WOULD GO. Subject: 'seme li pali?' Object: 'sina pali e seme?' Location: 'tawa/lon seme?' Reason: 'tan seme?' Method: 'kepeken/nasin seme?' Identity: 'jan seme?' Name: 'nimi sina li seme?'"
  },

  vocab: [
    {
      word: "seme",
      primaryMeaning: "what? which? (question word)",
      roles: {
        pronoun: "what, which, who",
        adjective: "which, what kind of"
      },
      notes: "The universal question word. Goes in the position of the unknown. 'seme' can be modified: 'jan seme' = who/which person.",
      compounds: [
        { tp: "ni li seme?", en: "What is this?" },
        { tp: "tan seme?", en: "why? (from what?)" },
        { tp: "tawa seme?", en: "where to?" },
        { tp: "lon seme?", en: "where at?" },
        { tp: "jan seme?", en: "who? which person?" },
        { tp: "nasin seme?", en: "how? what way?" }
      ]
    },
    {
      word: "nimi",
      primaryMeaning: "name, word",
      roles: {
        noun: "name, word, term",
        verbTransitive: "to name, to call"
      },
      notes: "'nimi sina li seme?' = What's your name? 'nimi mi li X' = My name is X.",
      compounds: [
        { tp: "nimi sina", en: "your name" },
        { tp: "nimi pona", en: "good name, nice word" },
        { tp: "nimi ike", en: "insult, bad word" },
        { tp: "nimi pi toki pona", en: "toki pona word" }
      ]
    },
    {
      word: "nanpa",
      primaryMeaning: "number, ordinal marker",
      roles: {
        noun: "number, digit",
        adjective: "-th (ordinal marker)",
        verbTransitive: "to count, to number"
      },
      notes: "Before a number = ordinal: 'jan nanpa wan' = first person. 'nanpa seme?' = what number?",
      compounds: [
        { tp: "nanpa wan", en: "first, #1" },
        { tp: "nanpa tu", en: "second, #2" },
        { tp: "nanpa seme?", en: "what number?" },
        { tp: "nanpa pi tenpo suno", en: "date (day number)" }
      ]
    },
    {
      word: "wan",
      primaryMeaning: "one, single, united",
      roles: {
        number: "one, 1",
        adjective: "single, united, combined",
        verbTransitive: "to unite, to combine"
      },
      notes: "Both a number and a concept of unity. 'wan' can mean 'together' or 'united'.",
      compounds: [
        { tp: "jan wan", en: "one person" },
        { tp: "ijo wan", en: "one thing" },
        { tp: "mi mute li wan", en: "we are united" },
        { tp: "o wan!", en: "unite!" }
      ]
    },
    {
      word: "tu",
      primaryMeaning: "two, divide, split",
      roles: {
        number: "two, 2",
        adjective: "split, divided",
        verbTransitive: "to divide, to split"
      },
      notes: "'tu' as verb means to divide. 'mi tu e ni' = I split this in two.",
      compounds: [
        { tp: "jan tu", en: "two people" },
        { tp: "tu wan", en: "three (2+1)" },
        { tp: "tu tu", en: "four (2+2)" },
        { tp: "mi tu e moku", en: "I divide the food" }
      ]
    },
    {
      word: "luka",
      primaryMeaning: "hand, arm; five",
      roles: {
        noun: "hand, arm",
        number: "five, 5"
      },
      notes: "A body part (hand/arm) AND the number 5 (hands have 5 fingers!). 'luka luka' = 10.",
      compounds: [
        { tp: "luka pona", en: "helping hand, good arm" },
        { tp: "luka wan", en: "six (5+1)" },
        { tp: "luka tu", en: "seven (5+2)" },
        { tp: "luka luka", en: "ten (5+5)" },
        { tp: "pana e luka", en: "give a hand, help" }
      ]
    },
    {
      word: "ale/ali",
      primaryMeaning: "all, every, everything; 100",
      roles: {
        noun: "everything, all",
        adjective: "all, every, complete",
        number: "100 (or large number)"
      },
      notes: "Both 'ale' and 'ali' are valid (some prefer 'ali' to distinguish from 'ala'). As number = 100 or just 'many'.",
      compounds: [
        { tp: "jan ale", en: "everyone, all people" },
        { tp: "ijo ale", en: "everything" },
        { tp: "tenpo ale", en: "always, all time" },
        { tp: "ale li pona", en: "everything is good" }
      ]
    }
  ],

  sentences: {
    subjectQuestions: [
      { tp: "seme li pali e ni?", en: "What made this? / Who did this?", gloss: "what | (li) | do | (e) | this", note: "'seme' as subject" },
      { tp: "seme li moku e kili mi?", en: "What's eating my fruit?", gloss: "what | (li) | eat | (e) | fruit | my", note: "Unknown eater" },
      { tp: "seme li lon?", en: "What's there? / What exists?", gloss: "what | (li) | exist", note: "Existence question" },
      { tp: "seme li kama?", en: "What's coming? / Who's coming?", gloss: "what | (li) | come", note: "Arrival" },
      { tp: "seme li pona tawa sina?", en: "What do you like?", gloss: "what | (li) | good | to | you", note: "Preference" }
    ],
    
    objectQuestions: [
      { tp: "sina pali e seme?", en: "What are you doing?", gloss: "you | do | (e) | what", note: "'seme' as object" },
      { tp: "ona li moku e seme?", en: "What are they eating?", gloss: "they | (li) | eat | (e) | what", note: "Unknown food" },
      { tp: "sina jo e seme?", en: "What do you have?", gloss: "you | have | (e) | what", note: "Possessions" },
      { tp: "sina wile e seme?", en: "What do you want?", gloss: "you | want | (e) | what", note: "Desires" },
      { tp: "sina lukin e seme?", en: "What are you looking at?", gloss: "you | look | (e) | what", note: "Attention" }
    ],
    
    locationQuestions: [
      { tp: "sina tawa seme?", en: "Where are you going?", gloss: "you | go | where", note: "'tawa seme'" },
      { tp: "ona li lon seme?", en: "Where is it/are they?", gloss: "they | (li) | at | where", note: "'lon seme'" },
      { tp: "sina tan seme?", en: "Where are you from?", gloss: "you | from | where", note: "'tan seme'" },
      { tp: "tomo sina li lon seme?", en: "Where is your house?", gloss: "house | your | (li) | at | where", note: "Location" },
      { tp: "mi ken lukin e ni lon seme?", en: "Where can I see this?", gloss: "I | can | look | (e) | this | at | where", note: "Finding something" }
    ],
    
    reasonQuestions: [
      { tp: "sina pali e ni tan seme?", en: "Why did you do this?", gloss: "you | do | (e) | this | from | what", note: "'tan seme' = why" },
      { tp: "ona li tawa tan seme?", en: "Why did they go?", gloss: "they | (li) | go | from | what", note: "Reason for leaving" },
      { tp: "sina pilin ike tan seme?", en: "Why do you feel bad?", gloss: "you | feel | bad | from | what", note: "Emotional cause" },
      { tp: "tan seme?", en: "Why?", gloss: "from | what", note: "Standalone" },
      { tp: "ni li lon tan seme?", en: "Why does this exist?", gloss: "this | (li) | exist | from | what", note: "Philosophical!" }
    ],
    
    methodQuestions: [
      { tp: "sina pali e ni kepeken seme?", en: "How did you do this?", gloss: "you | do | (e) | this | using | what", note: "'kepeken seme'" },
      { tp: "mi ken kama kepeken seme?", en: "How can I come? (by what means?)", gloss: "I | can | come | using | what", note: "Transportation" },
      { tp: "mi pali e ni lon nasin seme?", en: "How should I do this?", gloss: "I | do | (e) | this | at | way | what", note: "'nasin seme'" },
      { tp: "sina toki kepeken toki seme?", en: "What language do you speak?", gloss: "you | speak | using | language | what", note: "Language question" }
    ],
    
    identityQuestions: [
      { tp: "jan seme li pali e ni?", en: "Who did this?", gloss: "person | which | (li) | do | (e) | this", note: "'jan seme'" },
      { tp: "sina toki tawa jan seme?", en: "Who are you talking to?", gloss: "you | speak | to | person | which", note: "Recipient" },
      { tp: "kili seme li pona tawa sina?", en: "Which fruit do you like?", gloss: "fruit | which | (li) | good | to | you", note: "Preference" },
      { tp: "tomo seme li tomo sina?", en: "Which house is yours?", gloss: "house | which | (li) | house | your", note: "Identification" }
    ],
    
    nameQuestions: [
      { tp: "nimi sina li seme?", en: "What is your name?", gloss: "name | your | (li) | what", note: "Standard name question" },
      { tp: "nimi ona li seme?", en: "What is their name?", gloss: "name | their | (li) | what", note: "Third person" },
      { tp: "nimi mi li Sonja.", en: "My name is Sonja.", gloss: "name | my | (li) | Sonja", note: "Answer format" },
      { tp: "ni li seme lon toki pona?", en: "What is this in Toki Pona?", gloss: "this | (li) | what | in | toki pona", note: "Translation" }
    ],
    
    numberQuestions: [
      { tp: "ni li nanpa seme?", en: "What number is this?", gloss: "this | (li) | number | what", note: "'nanpa seme'" },
      { tp: "jan nanpa wan li seme?", en: "Who is first?", gloss: "person | number | one | (li) | what", note: "Ordinal" },
      { tp: "sina jo e ijo pi mute seme?", en: "How many things do you have?", gloss: "you | have | (e) | thing | of | amount | what", note: "Quantity" },
      { tp: "tenpo suno nanpa seme?", en: "What day? (which date?)", gloss: "time | sun | number | what", note: "Date" }
    ],
    
    basicNumbers: [
      { tp: "mi jo e kili wan", en: "I have one fruit.", gloss: "I | have | (e) | fruit | one", note: "wan = 1" },
      { tp: "jan tu li lon", en: "Two people are here.", gloss: "person | two | (li) | exist", note: "tu = 2" },
      { tp: "mi jo e luka tu", en: "I have seven. (5+2)", gloss: "I | have | (e) | hand | two", note: "luka tu = 7" },
      { tp: "jan mute li kama", en: "Many people came.", gloss: "person | many | (li) | come", note: "mute = many" },
      { tp: "jan ale li pona", en: "Everyone is good.", gloss: "person | all | (li) | good", note: "ale = all" }
    ]
  },

  practice: [
    {
      type: "semePosition",
      instruction: "Where does 'seme' go to ask this question?",
      questions: [
        { question: "What are you eating?", answer: "sina moku e seme?", position: "object", explanation: "'seme' replaces the unknown object." },
        { question: "What made this?", answer: "seme li pali e ni?", position: "subject", explanation: "'seme' replaces the unknown subject." },
        { question: "Where are you going?", answer: "sina tawa seme?", position: "destination", explanation: "'seme' replaces the unknown destination." },
        { question: "Why did you do this?", answer: "sina pali e ni tan seme?", position: "reason", explanation: "'tan seme' asks for the reason." },
        { question: "Which person did this?", answer: "jan seme li pali e ni?", position: "subject (specific)", explanation: "'jan seme' = which person." }
      ]
    },
    
    {
      type: "translateQuestion",
      instruction: "Translate the question:",
      questions: [
        { en: "What is this?", answer: "ni li seme?", hint: "'seme' in predicate position" },
        { en: "What do you want?", answer: "sina wile e seme?", hint: "'seme' as object of 'wile'" },
        { en: "Where is the house?", answer: "tomo li lon seme?", hint: "'lon seme' = where at" },
        { en: "Why are you sad?", answer: "sina pilin ike tan seme?", hint: "'tan seme' = why" },
        { en: "What is your name?", answer: "nimi sina li seme?", hint: "Standard name question" },
        { en: "Who is coming?", answer: "jan seme li kama?", hint: "'jan seme' = who/which person" },
        { en: "What language do you speak?", answer: "sina toki kepeken toki seme?", hint: "'toki seme' = which language" }
      ]
    },
    
    {
      type: "answerQuestion",
      instruction: "How would you answer this question?",
      questions: [
        { question: "nimi sina li seme?", scenario: "Your name is Maria", answer: "nimi mi li Mawija.", explanation: "Use tokiponized name." },
        { question: "sina moku e seme?", scenario: "You're eating fruit", answer: "mi moku e kili.", explanation: "Replace 'seme' with 'kili'." },
        { question: "sina tawa seme?", scenario: "Going home", answer: "mi tawa tomo mi.", explanation: "'tomo mi' = my house." },
        { question: "ni li seme?", scenario: "It's a book", answer: "ni li lipu.", explanation: "'lipu' = book/document." },
        { question: "tan seme?", scenario: "Because you want to", answer: "tan ni: mi wile.", explanation: "'tan ni' = because of this." }
      ]
    },
    
    {
      type: "questionType",
      instruction: "What type of question is this?",
      questions: [
        { tp: "seme li pali e ni?", options: ["Who/What (subject)", "What (object)", "Where", "Why"], correct: 0 },
        { tp: "sina pali e seme?", options: ["Who (subject)", "What (object)", "Where", "Why"], correct: 1 },
        { tp: "sina tawa seme?", options: ["Who", "What", "Where (destination)", "Why"], correct: 2 },
        { tp: "sina pali tan seme?", options: ["Who", "What", "Where", "Why (reason)"], correct: 3 },
        { tp: "jan seme li lon?", options: ["Who (specific)", "What", "Where", "Why"], correct: 0 },
        { tp: "nimi sina li seme?", options: ["Who", "What is your name?", "Where", "Why"], correct: 1 }
      ]
    },
    
    {
      type: "numberPractice",
      instruction: "What number is this?",
      questions: [
        { tp: "wan", answer: 1, explanation: "wan = one" },
        { tp: "tu", answer: 2, explanation: "tu = two" },
        { tp: "tu wan", answer: 3, explanation: "2 + 1 = 3" },
        { tp: "tu tu", answer: 4, explanation: "2 + 2 = 4" },
        { tp: "luka", answer: 5, explanation: "luka = five (hand)" },
        { tp: "luka wan", answer: 6, explanation: "5 + 1 = 6" },
        { tp: "luka tu", answer: 7, explanation: "5 + 2 = 7" },
        { tp: "luka luka", answer: 10, explanation: "5 + 5 = 10" }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the blank:",
      questions: [
        { partial: "_____ li pali e ni?", context: "What did this?", answer: "seme", explanation: "'seme' as subject" },
        { partial: "sina moku e _____?", context: "What are you eating?", answer: "seme", explanation: "'seme' as object" },
        { partial: "sina tawa _____?", context: "Where are you going?", answer: "seme", explanation: "'tawa seme' = where to" },
        { partial: "sina pali tan _____?", context: "Why do you work?", answer: "seme", explanation: "'tan seme' = why" },
        { partial: "_____ sina li seme?", context: "What is your name?", answer: "nimi", explanation: "'nimi' = name" },
        { partial: "jan _____ wan li lon?", context: "Who is first?", answer: "nanpa", explanation: "'nanpa' makes ordinals" }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Build the question:",
      questions: [
        { words: ["sina", "wile", "e", "seme"], validAnswers: ["sina wile e seme?"], translations: ["What do you want?"] },
        { words: ["seme", "li", "lon", "tomo"], validAnswers: ["seme li lon tomo?"], translations: ["What's in the house?"] },
        { words: ["nimi", "sina", "li", "seme"], validAnswers: ["nimi sina li seme?"], translations: ["What's your name?"] },
        { words: ["ona", "li", "lon", "seme"], validAnswers: ["ona li lon seme?"], translations: ["Where are they?"] }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "True or false?",
      questions: [
        { statement: "'seme' always comes at the beginning of a question.", answer: false, explanation: "'seme' goes where the answer would go — that can be anywhere!" },
        { statement: "'tan seme?' means 'why?'", answer: true, explanation: "Literally 'from what?' but means 'why?'" },
        { statement: "'nimi sina li seme?' asks for someone's name.", answer: true, explanation: "Standard name question." },
        { statement: "'luka' only means 'hand'.", answer: false, explanation: "'luka' = hand AND five (5)." },
        { statement: "'jan seme' means 'who' or 'which person'.", answer: true, explanation: "'seme' can modify nouns for specificity." }
      ]
    }
  ],

  story: {
    title: "jan sin li kama — A New Person Arrives",
    intro: "A story full of questions! A new person arrives and everyone wants to know about them.",
    paragraphs: [
      { tp: "jan sin li kama tawa ma mi. jan ale li wile sona.", en: "A new person comes to my land. Everyone wants to know.", note: "'jan sin' = newcomer" },
      { tp: "jan wan li toki: 'nimi sina li seme?'", en: "One person says: 'What is your name?'", note: "Name question" },
      { tp: "jan sin li toki: 'nimi mi li Toki.'", en: "The new person says: 'My name is Toki.'", note: "Answer with name" },
      { tp: "jan ante li toki: 'sina tan seme?'", en: "Another person says: 'Where are you from?'", note: "'tan seme' = where from" },
      { tp: "jan Toki li toki: 'mi tan ma pi waso mute.'", en: "Toki says: 'I'm from a land of many birds.'", note: "Using 'pi'" },
      { tp: "mi toki: 'sina kama tan seme? sina wile e seme?'", en: "I say: 'Why did you come? What do you want?'", note: "Two questions" },
      { tp: "ona li toki: 'mi kama tan ni: mi wile sona e toki pona.'", en: "They say: 'I came because I want to learn Toki Pona.'", note: "'tan ni' = because of this" },
      { tp: "mi toki: 'pona a! mi ken pana e sona tawa sina.'", en: "I say: 'Great! I can give knowledge to you.'", note: "'pona a!' = great!" },
      { tp: "jan Toki li toki: 'pona! tenpo seme la mi mute li open?'", en: "Toki says: 'Good! When do we start?'", note: "'tenpo seme' = when" },
      { tp: "mi toki: 'tenpo ni la mi mute li open!'", en: "I say: 'Now we start!'", note: "'tenpo ni la' = now" }
    ],
    comprehension: [
      { question: "What is the new person's name?", answer: "Toki", evidence: "nimi mi li Toki" },
      { question: "Where is Toki from?", answer: "A land of many birds", evidence: "mi tan ma pi waso mute" },
      { question: "Why did Toki come?", answer: "To learn Toki Pona", evidence: "mi wile sona e toki pona" },
      { question: "When do they start learning?", answer: "Now", evidence: "tenpo ni la mi mute li open" }
    ],
    challenge: "Write a conversation where YOU are the newcomer. Use 'seme' to ask questions about your new environment!"
  },

  compoundsPreview: {
    title: "Question Patterns",
    intro: "Common question structures with 'seme':",
    items: [
      { tp: "ni li seme?", en: "What is this?", literal: "this | (li) | what", lesson: "Basic identification" },
      { tp: "tan seme?", en: "Why?", literal: "from | what", lesson: "Reason/cause" },
      { tp: "tawa seme?", en: "Where to?", literal: "to | what", lesson: "Destination" },
      { tp: "lon seme?", en: "Where at?", literal: "at | what", lesson: "Location" },
      { tp: "jan seme?", en: "Who?", literal: "person | what", lesson: "Identity" },
      { tp: "nimi sina li seme?", en: "What's your name?", literal: "name | your | (li) | what", lesson: "Name question" },
      { tp: "tenpo seme?", en: "When?", literal: "time | what", lesson: "Time question" },
      { tp: "nasin seme?", en: "How? What way?", literal: "way | what", lesson: "Method" },
      { tp: "nanpa seme?", en: "What number?", literal: "number | what", lesson: "Quantity/order" }
    ],
    teaser: "Next lesson: o — commands and addressing people! Learn to give orders, make requests, and call people by name."
  },

  quickReference: {
    patterns: [
      { pattern: "seme li [VERB]?", example: "seme li pali e ni?", meaning: "What/Who [VERBS]?" },
      { pattern: "[SUBJECT] li [VERB] e seme?", example: "sina moku e seme?", meaning: "What does [SUBJECT] [VERB]?" },
      { pattern: "[SUBJECT] li lon seme?", example: "ona li lon seme?", meaning: "Where is [SUBJECT]?" },
      { pattern: "[SUBJECT] li tawa seme?", example: "sina tawa seme?", meaning: "Where is [SUBJECT] going?" },
      { pattern: "[SUBJECT] li [VERB] tan seme?", example: "sina pali tan seme?", meaning: "Why does [SUBJECT] [VERB]?" },
      { pattern: "jan seme li...?", example: "jan seme li kama?", meaning: "Who...? Which person...?" },
      { pattern: "nimi sina li seme?", example: "nimi sina li seme?", meaning: "What is your name?" },
      { pattern: "ni li seme?", example: "ni li seme?", meaning: "What is this?" }
    ],
    remember: [
      "'seme' goes WHERE THE ANSWER WOULD GO",
      "Don't change word order — just replace the unknown with 'seme'",
      "'tan seme?' = why? (from what?)",
      "'tawa seme?' = where to? 'lon seme?' = where at?",
      "'jan seme' = who/which person (more specific than 'seme' alone)",
      "'nimi sina li seme?' = What's your name?",
      "Numbers: wan (1), tu (2), luka (5), mute (many), ale (all)",
      "'nanpa' + number = ordinal: 'nanpa wan' = first"
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson11;
}
