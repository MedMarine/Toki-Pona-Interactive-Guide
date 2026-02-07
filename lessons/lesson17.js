/**
 * Lesson 17: Extended Numbers & Time
 * Complex counting, dates, duration: nanpa, wan, tu, luka, mute, ale, tenpo expressions
 */

const lesson17 = {
  id: 17,
  title: "Extended Numbers & Time",
  desc: "Complex counting, dates, and duration with nanpa, wan, tu, luka, mute, ale, and tenpo expressions",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "Toki pona uses a simple number system based on <b>wan</b> (1), <b>tu</b> (2), and <b>luka</b> (5). For larger quantities, use <b>mute</b> (many) or <b>ale</b> (all/100). The word <b>nanpa</b> creates ordinals and specific numbers.",
    
    concepts: [
      {
        title: "The basic number words",
        explanation: "Toki pona has very few number words. The core ones are: <b>wan</b> (1), <b>tu</b> (2), <b>luka</b> (5, also 'hand'). For quantities, <b>mute</b> (many/20) and <b>ale</b> (all/100) are used.",
        examples: [
          { tp: "wan", en: "one, single, united", note: "The number 1" },
          { tp: "tu", en: "two, divide, pair", note: "The number 2" },
          { tp: "luka", en: "five, hand", note: "The number 5 (fingers on hand)" },
          { tp: "mute", en: "many, much, 20", note: "Large quantity or 20" },
          { tp: "ale / ali", en: "all, everything, 100", note: "Total or 100" }
        ],
        pitfall: "Toki pona philosophy discourages precise counting. 'mute' (many) is often better than exact numbers!"
      },
      {
        title: "Counting by addition",
        explanation: "To count beyond 5, ADD number words together. <b>luka wan</b> = 5+1 = 6. <b>luka luka</b> = 5+5 = 10. <b>luka luka tu</b> = 12.",
        examples: [
          { tp: "tu wan", en: "three (2+1)", note: "3" },
          { tp: "tu tu", en: "four (2+2)", note: "4" },
          { tp: "luka", en: "five", note: "5" },
          { tp: "luka wan", en: "six (5+1)", note: "6" },
          { tp: "luka tu", en: "seven (5+2)", note: "7" },
          { tp: "luka luka", en: "ten (5+5)", note: "10" },
          { tp: "luka luka luka", en: "fifteen (5+5+5)", note: "15" },
          { tp: "mute", en: "twenty / many", note: "20 or just 'many'" }
        ],
        pitfall: "This system is intentionally cumbersome for large numbers — toki pona discourages obsessing over exact quantities!"
      },
      {
        title: "Numbers as modifiers",
        explanation: "Numbers follow the noun they modify, like any other modifier. <b>jan tu</b> = two people. <b>kili luka</b> = five fruits.",
        examples: [
          { tp: "jan wan", en: "one person", note: "Number after noun" },
          { tp: "kili tu", en: "two fruits", note: "Quantity" },
          { tp: "tomo luka", en: "five houses", note: "Counting buildings" },
          { tp: "soweli luka luka", en: "ten animals", note: "Larger count" },
          { tp: "jan mute", en: "many people / 20 people", note: "'mute' as quantity" }
        ],
        pitfall: "Numbers come AFTER the noun: 'jan tu' not 'tu jan'."
      },
      {
        title: "Ordinal numbers with nanpa",
        explanation: "<b>nanpa</b> before a number makes it ordinal (first, second, third...). <b>nanpa wan</b> = first. <b>nanpa tu</b> = second.",
        examples: [
          { tp: "jan nanpa wan", en: "first person / person #1", note: "Ordinal" },
          { tp: "tomo nanpa tu", en: "second house / house #2", note: "Ordinal" },
          { tp: "tenpo suno nanpa luka", en: "day five / the fifth day", note: "Date" },
          { tp: "lipu nanpa luka luka", en: "page ten / the tenth page", note: "Page number" },
          { tp: "mi nanpa wan!", en: "I'm number one!", note: "Ranking" }
        ],
        pitfall: "'nanpa' goes between the noun and the number: 'jan nanpa wan' not 'nanpa wan jan'."
      },
      {
        title: "Time vocabulary review",
        explanation: "You already know <b>tenpo</b> (time). Combined with modifiers, it creates specific time references.",
        examples: [
          { tp: "tenpo ni", en: "now, this time, present", note: "Current moment" },
          { tp: "tenpo pini", en: "past, before, ago", note: "Past time" },
          { tp: "tenpo kama", en: "future, later, upcoming", note: "Future time" },
          { tp: "tenpo suno", en: "day, daytime", note: "Sun-time" },
          { tp: "tenpo pimeja", en: "night, nighttime", note: "Dark-time" },
          { tp: "tenpo mun", en: "month", note: "Moon-time" }
        ],
        pitfall: "Remember: 'tenpo' + modifier describes WHEN, not duration."
      },
      {
        title: "Days and dates",
        explanation: "Days of the week aren't traditional in toki pona, but you can express dates with <b>tenpo suno nanpa X</b> (day number X).",
        examples: [
          { tp: "tenpo suno nanpa wan", en: "day one / first day", note: "e.g., Monday" },
          { tp: "tenpo suno nanpa luka tu", en: "day seven / seventh day", note: "e.g., Sunday" },
          { tp: "tenpo suno ni", en: "today", note: "This day" },
          { tp: "tenpo suno pini", en: "yesterday", note: "Past day" },
          { tp: "tenpo suno kama", en: "tomorrow", note: "Coming day" }
        ],
        pitfall: "There's no standard for which day is 'nanpa wan' — establish context!"
      },
      {
        title: "Months and years",
        explanation: "<b>tenpo mun</b> = month (moon-time). <b>sike suno</b> = year (sun-cycle). Use <b>nanpa</b> for specific months/years.",
        examples: [
          { tp: "tenpo mun nanpa wan", en: "month one / January", note: "First month" },
          { tp: "tenpo mun nanpa luka tu", en: "month seven / July", note: "Seventh month" },
          { tp: "sike suno ni", en: "this year", note: "Current year" },
          { tp: "sike suno pini", en: "last year", note: "Previous year" },
          { tp: "sike suno kama", en: "next year", note: "Coming year" }
        ],
        pitfall: "For specific years like '2024', you'd need many number words — most speakers just say 'sike suno ni' (this year)."
      },
      {
        title: "Duration and frequency",
        explanation: "Duration uses <b>tenpo</b> + size words. Frequency uses patterns like <b>tenpo mute</b> (many times) or <b>tenpo ale</b> (always).",
        examples: [
          { tp: "tenpo lili", en: "short time, briefly", note: "Brief duration" },
          { tp: "tenpo suli", en: "long time", note: "Extended duration" },
          { tp: "tenpo mute", en: "many times, often", note: "Frequency" },
          { tp: "tenpo ale", en: "always, all the time", note: "Constant" },
          { tp: "tenpo wan", en: "once, one time", note: "Single occurrence" },
          { tp: "tenpo ala", en: "never", note: "Zero times" }
        ],
        pitfall: "'tenpo suli' = long time. 'tenpo mute' = many times (frequency). Different concepts!"
      },
      {
        title: "Age expressions",
        explanation: "To express age, describe how many years/cycles someone has lived. Common pattern: <b>ona li jo e sike suno X</b> (they have X years).",
        examples: [
          { tp: "mi jo e sike suno mute", en: "I have many years. (I'm old.)", note: "Approximate age" },
          { tp: "ona li jo e sike suno luka luka", en: "They have 10 years. (They're 10.)", note: "Specific age" },
          { tp: "jan lili li jo e sike suno tu wan", en: "The child has 3 years.", note: "Child's age" },
          { tp: "mi suli. mi jo e sike suno mute mute", en: "I'm old. I have many many years.", note: "Elderly" },
          { tp: "sina jo e sike suno pi mute seme?", en: "How many years do you have? (How old are you?)", note: "Asking age" }
        ],
        pitfall: "Precise ages require long number strings — often 'mute' (many) or 'lili' (few) is clearer."
      },
      {
        title: "Time with la (context)",
        explanation: "Use <b>la</b> to set temporal context: <b>tenpo X la</b> = at time X / when X / during X.",
        examples: [
          { tp: "tenpo ni la mi pali", en: "Now I work.", note: "Present context" },
          { tp: "tenpo pini la mi lon ma ante", en: "In the past, I was in another place.", note: "Past context" },
          { tp: "tenpo kama la mi tawa", en: "In the future, I will go.", note: "Future context" },
          { tp: "tenpo suno la mi pali. tenpo pimeja la mi lape", en: "During day, I work. During night, I sleep.", note: "Contrasting times" },
          { tp: "tenpo moku la o kama", en: "At meal time, come!", note: "Scheduled time" }
        ],
        pitfall: "'tenpo X la' sets the scene for what follows — it's not the main content."
      }
    ],
    
    keyInsight: "Toki pona's number system is intentionally minimal. The philosophy is: exact numbers often don't matter! 'mute' (many), 'lili' (few), and 'ale' (all) usually communicate what's important. Save precise counting for when it truly matters."
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "nanpa",
      primaryMeaning: "number, ordinal marker, -th",
      roles: {
        adjective: "numerical, ordinal",
        noun: "number, numeral",
        particle: "ordinal marker (first, second, etc.)"
      },
      notes: "Makes ordinals: 'nanpa wan' = first. Also means 'number' as a noun. 'nanpa pi ijo ni li seme?' = What is this thing's number?",
      compounds: [
        { tp: "nanpa wan", en: "first, number one" },
        { tp: "nanpa tu", en: "second, number two" },
        { tp: "nanpa suli", en: "large number" },
        { tp: "nanpa lili", en: "small number" },
        { tp: "ilo nanpa", en: "calculator (number tool)" }
      ]
    },
    {
      word: "wan",
      primaryMeaning: "one, single, united",
      roles: {
        adjective: "one, single, united, unified",
        noun: "unit, element, singularity",
        number: "1",
        verbTransitive: "to unite, to make one, to combine"
      },
      notes: "The number one. Also means 'united' or 'single'. 'wan e X' = to unite X. 'mi mute li wan' = we are united/one.",
      compounds: [
        { tp: "jan wan", en: "one person, individual" },
        { tp: "ijo wan", en: "one thing, single item" },
        { tp: "tenpo wan", en: "once, one time" },
        { tp: "toki wan", en: "one language, united speech" },
        { tp: "mi wan", en: "I alone, just me" }
      ]
    },
    {
      word: "tu",
      primaryMeaning: "two, pair, divide",
      roles: {
        adjective: "two, divided, split",
        noun: "pair, duo, division",
        number: "2",
        verbTransitive: "to divide, to split, to cut in two"
      },
      notes: "The number two. Also means 'to divide'. 'tu e X' = to split X. 'ona li tu e moku' = they divide the food.",
      compounds: [
        { tp: "jan tu", en: "two people, pair" },
        { tp: "luka tu", en: "seven (5+2)" },
        { tp: "tu tu", en: "four (2+2)" },
        { tp: "tenpo tu", en: "twice, two times" },
        { tp: "tu e ni", en: "divide this" }
      ]
    },
    {
      word: "luka",
      primaryMeaning: "hand, arm, five",
      roles: {
        adjective: "manual, hand-related",
        noun: "hand, arm, tactile organ",
        number: "5"
      },
      notes: "Means both 'hand/arm' and the number 5 (five fingers). Context usually makes it clear. 'luka luka' = 10.",
      compounds: [
        { tp: "luka wan", en: "six (5+1)" },
        { tp: "luka tu", en: "seven (5+2)" },
        { tp: "luka luka", en: "ten (5+5)" },
        { tp: "palisa luka", en: "finger (hand-stick)" },
        { tp: "pali luka", en: "handwork, manual labor" }
      ]
    },
    {
      word: "mute",
      primaryMeaning: "many, much, several, 20",
      roles: {
        adjective: "many, much, more, very, several",
        adverb: "very, much",
        noun: "quantity, amount",
        number: "20 (in counting systems)"
      },
      notes: "General word for 'many/much'. In number systems, sometimes used as 20. 'mute' after an adjective = 'very': 'pona mute' = very good.",
      compounds: [
        { tp: "jan mute", en: "many people, crowd" },
        { tp: "tenpo mute", en: "many times, often" },
        { tp: "mute mute", en: "very many, lots" },
        { tp: "pona mute", en: "very good" },
        { tp: "mute pi X", en: "amount of X, quantity of X" }
      ]
    },
    {
      word: "ale",
      primaryMeaning: "all, every, everything, 100",
      roles: {
        adjective: "all, every, complete, whole",
        noun: "everything, all things, universe, life",
        number: "100 (in counting systems)"
      },
      notes: "Also spelled 'ali'. Means 'all/everything'. In numbers, can represent 100. 'ale li pona' = everything is good.",
      compounds: [
        { tp: "jan ale", en: "everyone, all people" },
        { tp: "tenpo ale", en: "always, all time" },
        { tp: "ijo ale", en: "everything, all things" },
        { tp: "ma ale", en: "the whole world" },
        { tp: "ale li pona", en: "everything is fine" }
      ]
    },
    {
      word: "tenpo",
      primaryMeaning: "time, moment, period, occasion",
      roles: {
        noun: "time, duration, moment, period, situation, occasion"
      },
      notes: "The core time word. Combined with modifiers for specific times: 'tenpo ni' (now), 'tenpo pini' (past), 'tenpo kama' (future).",
      compounds: [
        { tp: "tenpo ni", en: "now, present" },
        { tp: "tenpo pini", en: "past, before" },
        { tp: "tenpo kama", en: "future, later" },
        { tp: "tenpo suno", en: "day, daytime" },
        { tp: "tenpo pimeja", en: "night" },
        { tp: "tenpo mun", en: "month" },
        { tp: "tenpo seli", en: "summer" },
        { tp: "tenpo lete", en: "winter" }
      ]
    },
    {
      word: "sike",
      primaryMeaning: "circle, cycle, round, ball, year",
      roles: {
        adjective: "round, circular, cyclical, repeating",
        noun: "circle, wheel, ball, cycle, year (with suno)"
      },
      notes: "Used for 'year' as 'sike suno' (sun-cycle). Also any round thing or cycle. 'sike mun' = month (moon-cycle).",
      compounds: [
        { tp: "sike suno", en: "year (sun cycle)" },
        { tp: "sike mun", en: "month (moon cycle)" },
        { tp: "sike tawa", en: "wheel" },
        { tp: "sike suno ni", en: "this year" },
        { tp: "sike suno kama", en: "next year" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basicCounting: [
      { tp: "mi jo e kili wan", en: "I have one fruit.", gloss: "I | have | (e) | fruit + one", note: "Counting to 1" },
      { tp: "ona li jo e soweli tu", en: "They have two animals.", gloss: "they | (li) | have | (e) | animal + two", note: "Counting to 2" },
      { tp: "jan tu wan li kama", en: "Three people come.", gloss: "person + two + one | (li) | come", note: "2+1=3" },
      { tp: "mi lukin e waso luka", en: "I see five birds.", gloss: "I | see | (e) | bird + five", note: "Counting to 5" },
      { tp: "tomo luka luka li lon", en: "Ten houses exist.", gloss: "house + five + five | (li) | exist", note: "5+5=10" }
    ],
    
    ordinalNumbers: [
      { tp: "jan nanpa wan li toki", en: "The first person speaks.", gloss: "person + number + one | (li) | speak", note: "First (ordinal)" },
      { tp: "tomo nanpa tu li suli", en: "The second house is big.", gloss: "house + number + two | (li) | big", note: "Second" },
      { tp: "mi nanpa wan!", en: "I'm number one!", gloss: "I | number + one", note: "Ranking" },
      { tp: "lipu nanpa luka luka", en: "Page ten.", gloss: "paper + number + five + five", note: "Page number" },
      { tp: "tenpo suno nanpa luka tu", en: "Day seven / The seventh day.", gloss: "time + sun + number + five + two", note: "Date" }
    ],
    
    timeExpressions: [
      { tp: "tenpo ni la mi moku", en: "Now I eat.", gloss: "time + this | (la) | I | eat", note: "Present" },
      { tp: "tenpo pini la mi lon ma ante", en: "In the past, I was in another place.", gloss: "time + finished | (la) | I | at | land + different", note: "Past" },
      { tp: "tenpo kama la mi tawa ma Nijon", en: "In the future, I will go to Japan.", gloss: "time + coming | (la) | I | go | land + Japan", note: "Future" },
      { tp: "tenpo suno ni la mi pali", en: "Today I work.", gloss: "time + sun + this | (la) | I | work", note: "Today" },
      { tp: "tenpo suno pini la mi lape", en: "Yesterday I slept.", gloss: "time + sun + past | (la) | I | sleep", note: "Yesterday" }
    ],
    
    daysAndDates: [
      { tp: "tenpo suno kama la o kama", en: "Tomorrow, come!", gloss: "time + sun + coming | (la) | (o) | come", note: "Tomorrow" },
      { tp: "tenpo suno nanpa wan li pona", en: "The first day is good.", gloss: "time + sun + number + one | (li) | good", note: "Day 1" },
      { tp: "tenpo suno nanpa luka tu la mi pali ala", en: "On day seven, I don't work.", gloss: "time + sun + number + 7 | (la) | I | work + not", note: "Weekend" },
      { tp: "tenpo suno mute la mi pali", en: "For many days, I work.", gloss: "time + sun + many | (la) | I | work", note: "Duration in days" }
    ],
    
    monthsAndYears: [
      { tp: "tenpo mun nanpa wan li lete", en: "Month one (January) is cold.", gloss: "time + moon + number + one | (li) | cold", note: "January" },
      { tp: "sike suno ni la mi kama sona e toki pona", en: "This year, I learn toki pona.", gloss: "cycle + sun + this | (la) | I | come + know | (e) | toki pona", note: "This year" },
      { tp: "sike suno pini la mi lon ma Mewika", en: "Last year, I was in America.", gloss: "cycle + sun + past | (la) | I | at | land + America", note: "Last year" },
      { tp: "sike suno kama la mi wile tawa", en: "Next year, I want to travel.", gloss: "cycle + sun + coming | (la) | I | want | go", note: "Next year" }
    ],
    
    duration: [
      { tp: "mi lape lon tenpo lili", en: "I sleep for a short time.", gloss: "I | sleep | at | time + small", note: "Brief duration" },
      { tp: "ona li pali lon tenpo suli", en: "They work for a long time.", gloss: "they | (li) | work | at | time + big", note: "Long duration" },
      { tp: "mi awen lon tenpo mute", en: "I wait for a long time / many times.", gloss: "I | stay | at | time + many", note: "Extended waiting" },
      { tp: "tenpo ale la mi olin e sina", en: "Always, I love you.", gloss: "time + all | (la) | I | love | (e) | you", note: "Always" }
    ],
    
    frequency: [
      { tp: "mi moku lon tenpo wan", en: "I eat once.", gloss: "I | eat | at | time + one", note: "Once" },
      { tp: "mi tawa tomo esun lon tenpo mute", en: "I go to the store often.", gloss: "I | go | house + trade | at | time + many", note: "Often" },
      { tp: "ona li kama lon tenpo ale", en: "They always come.", gloss: "they | (li) | come | at | time + all", note: "Always" },
      { tp: "mi moku e kili lon tenpo ala", en: "I never eat fruit.", gloss: "I | eat | (e) | fruit | at | time + none", note: "Never" }
    ],
    
    ageExpressions: [
      { tp: "mi jo e sike suno mute", en: "I have many years. (I'm old.)", gloss: "I | have | (e) | cycle + sun + many", note: "Being old" },
      { tp: "jan lili li jo e sike suno luka", en: "The child has five years.", gloss: "person + small | (li) | have | (e) | cycle + sun + five", note: "Age 5" },
      { tp: "sina jo e sike suno pi mute seme?", en: "How old are you? (How many years do you have?)", gloss: "you | have | (e) | cycle + sun | (pi) | many + what", note: "Asking age" },
      { tp: "ona li jo e sike suno luka luka luka luka", en: "They have 20 years. (They're 20.)", gloss: "they | (li) | have | (e) | cycle + sun + 5+5+5+5", note: "Age 20" }
    ],
    
    ambiguous: [
      { tp: "luka mi li wawa", meanings: ["My hand is strong", "My five are strong (unclear)"], likely: "My hand is strong", note: "Context: body vs number" },
      { tp: "jan mute li kama", meanings: ["Many people come", "20 people come"], likely: "Many people come", note: "'mute' usually means 'many'" },
      { tp: "mi jo e ijo ale", meanings: ["I have everything", "I have 100 things"], likely: "I have everything", note: "'ale' usually means 'all'" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "roleIdentification",
      instruction: "What number does this represent?",
      questions: [
        {
          tp: "jan **tu wan** li kama",
          target: "tu wan",
          en: "three people come",
          options: ["2", "3", "4", "5"],
          correct: 1,
          explanation: "'tu wan' = 2 + 1 = 3"
        },
        {
          tp: "mi jo e kili **luka tu**",
          target: "luka tu",
          en: "I have seven fruits",
          options: ["5", "6", "7", "8"],
          correct: 2,
          explanation: "'luka tu' = 5 + 2 = 7"
        },
        {
          tp: "tomo **luka luka** li lon",
          target: "luka luka",
          en: "ten houses exist",
          options: ["5", "10", "15", "25"],
          correct: 1,
          explanation: "'luka luka' = 5 + 5 = 10"
        },
        {
          tp: "soweli **tu tu** li moku",
          target: "tu tu",
          en: "four animals eat",
          options: ["2", "3", "4", "6"],
          correct: 2,
          explanation: "'tu tu' = 2 + 2 = 4"
        }
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Fill in the number words:",
      questions: [
        {
          tp: "jan _____ li kama",
          en: "Three people come.",
          answer: "tu wan",
          hint: "2 + 1 = 3"
        },
        {
          tp: "mi jo e kili _____",
          en: "I have six fruits.",
          answer: "luka wan",
          hint: "5 + 1 = 6"
        },
        {
          tp: "tomo nanpa _____ li suli",
          en: "The first house is big.",
          answer: "wan",
          hint: "First = number one"
        },
        {
          tp: "tenpo suno _____ la mi pali",
          en: "Today I work.",
          answer: "ni",
          hint: "'this' day"
        },
        {
          tp: "sike suno _____ la mi tawa ma ante",
          en: "Next year, I'll go to another land.",
          answer: "kama",
          hint: "'coming' year"
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "mi jo e soweli tu", expectedType: "counting", hint: "Having two of something" },
        { tp: "jan nanpa wan li pona", expectedType: "ordinal", hint: "First person" },
        { tp: "tenpo suno pini la mi lape", expectedType: "past time", hint: "Yesterday" },
        { tp: "sike suno ni la mi kama sona", expectedType: "this year", hint: "Current year" },
        { tp: "mi pali lon tenpo suli", expectedType: "duration", hint: "Long time" },
        { tp: "ona li kama lon tenpo mute", expectedType: "frequency", hint: "Often/many times" }
      ],
      answers: [
        "I have two animals.",
        "The first person is good.",
        "Yesterday I slept.",
        "This year I learn.",
        "I work for a long time.",
        "They come often / many times."
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'luka' means both 'hand' and the number 5.",
          answer: true,
          explanation: "Correct! 'luka' = hand (body part) and 5 (number of fingers)."
        },
        {
          statement: "'nanpa wan' means 'one' as a quantity.",
          answer: false,
          explanation: "'nanpa wan' means 'first' (ordinal). Just 'wan' means 'one' (quantity)."
        },
        {
          statement: "To say 'eight', you would say 'luka tu wan'.",
          answer: true,
          explanation: "Correct! 5 + 2 + 1 = 8. Numbers are added together."
        },
        {
          statement: "'tenpo suno pini' means 'tomorrow'.",
          answer: false,
          explanation: "'tenpo suno pini' = yesterday (past day). 'tenpo suno kama' = tomorrow."
        },
        {
          statement: "'sike suno' means 'year'.",
          answer: true,
          explanation: "Correct! 'sike suno' = sun-cycle = year."
        },
        {
          statement: "Toki pona encourages using precise numbers for everything.",
          answer: false,
          explanation: "Toki pona philosophy discourages precise counting — 'mute' (many) is often preferred!"
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["mi", "jo", "e", "kili", "luka"],
          validAnswers: ["mi jo e kili luka"],
          translations: ["I have five fruits."],
          hint: "Number after noun"
        },
        {
          words: ["jan", "nanpa", "wan", "li", "toki"],
          validAnswers: ["jan nanpa wan li toki"],
          translations: ["The first person speaks."],
          hint: "Ordinal with 'nanpa'"
        },
        {
          words: ["tenpo", "suno", "ni", "la", "mi", "pali"],
          validAnswers: ["tenpo suno ni la mi pali"],
          translations: ["Today I work."],
          hint: "Time context with 'la'"
        },
        {
          words: ["sike", "suno", "kama", "la", "mi", "tawa"],
          validAnswers: ["sike suno kama la mi tawa"],
          translations: ["Next year I will go."],
          hint: "Future year context"
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What time reference is being used?",
      questions: [
        {
          tp: "**tenpo ni** la mi moku",
          target: "tenpo ni",
          en: "now I eat",
          options: ["Past", "Present", "Future", "Duration"],
          correct: 1,
          explanation: "'tenpo ni' = this time = now (present)."
        },
        {
          tp: "**tenpo pini** la mi lon ma ante",
          target: "tenpo pini",
          en: "in the past, I was elsewhere",
          options: ["Past", "Present", "Future", "Duration"],
          correct: 0,
          explanation: "'tenpo pini' = finished time = past."
        },
        {
          tp: "**tenpo kama** la mi kama sona",
          target: "tenpo kama",
          en: "in the future, I will learn",
          options: ["Past", "Present", "Future", "Duration"],
          correct: 2,
          explanation: "'tenpo kama' = coming time = future."
        },
        {
          tp: "mi pali lon **tenpo suli**",
          target: "tenpo suli",
          en: "I work for a long time",
          options: ["Past", "Present", "Future", "Duration"],
          correct: 3,
          explanation: "'tenpo suli' = big/long time = duration."
        }
      ]
    },
    
    {
      type: "disambiguation",
      instruction: "This phrase has multiple meanings. What are they?",
      questions: [
        {
          tp: "luka mi",
          meanings: 2,
          answers: ["my hand", "my five (things)"],
          followUp: "How do you know which?",
          likelyAnswer: "Context! Talking about body → hand. Counting items → five."
        },
        {
          tp: "jan mute",
          meanings: 2,
          answers: ["many people", "20 people (in some number systems)"],
          followUp: "Which is more common?",
          likelyAnswer: "'Many people' is the usual meaning. '20' only in explicit counting contexts."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "sike suno sin — A New Year",
    intro: "A story about the passage of time and planning for the future. Notice the time expressions!",
    paragraphs: [
      { tp: "tenpo ni la sike suno sin li kama!", en: "Now a new year is coming!", note: "Present + future" },
      { tp: "sike suno pini la mi pali mute.", en: "Last year, I worked a lot.", note: "Past year" },
      { tp: "mi pali lon tenpo suno ale.", en: "I worked every day.", note: "Frequency" },
      { tp: "tenpo mun nanpa luka tu wan la mi lape lili.", en: "In month eight, I slept little.", note: "Specific month (August)" },
      { tp: "sike suno kama la mi wile ante.", en: "Next year, I want to change.", note: "Future intention" },
      { tp: "mi wile lape lon tenpo suli.", en: "I want to sleep for a long time.", note: "Duration goal" },
      { tp: "mi wile pali lon tenpo lili.", en: "I want to work for a short time.", note: "Reduced work" },
      { tp: "tenpo suno nanpa wan pi sike suno sin la mi toki e ni:", en: "On day one of the new year, I say this:", note: "New Year's Day" },
      { tp: "'sike suno ni la mi pilin pona!'", en: "'This year I will feel good!'", note: "Resolution" },
      { tp: "tenpo ale la o pilin pona!", en: "Always feel good!", note: "Closing wish" }
    ],
    comprehension: [
      { question: "What did the speaker do last year?", answer: "Worked a lot (pali mute)", evidence: "sike suno pini la mi pali mute" },
      { question: "In which month did they sleep little?", answer: "Month eight / August (tenpo mun nanpa luka tu wan)", evidence: "tenpo mun nanpa luka tu wan la mi lape lili" },
      { question: "What does the speaker want to change?", answer: "Sleep more, work less", evidence: "mi wile lape lon tenpo suli. mi wile pali lon tenpo lili" },
      { question: "What is their New Year's resolution?", answer: "To feel good this year", evidence: "sike suno ni la mi pilin pona" }
    ],
    challenge: "Write about your own year using at least 3 time expressions: tenpo pini (past), tenpo ni (present), and tenpo kama (future)!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Numbers and time create many useful expressions:",
    items: [
      { tp: "tenpo suno ni", en: "today", literal: "time + sun + this", lesson: "Current day" },
      { tp: "tenpo suno pini", en: "yesterday", literal: "time + sun + past", lesson: "Previous day" },
      { tp: "tenpo suno kama", en: "tomorrow", literal: "time + sun + coming", lesson: "Next day" },
      { tp: "sike suno", en: "year", literal: "cycle + sun", lesson: "Sun's cycle" },
      { tp: "sike mun / tenpo mun", en: "month", literal: "cycle/time + moon", lesson: "Moon's cycle" },
      { tp: "tenpo pimeja", en: "night", literal: "time + dark", lesson: "Dark time" },
      { tp: "tenpo seli", en: "summer", literal: "time + hot", lesson: "Hot season" },
      { tp: "tenpo lete", en: "winter", literal: "time + cold", lesson: "Cold season" },
      { tp: "nanpa wan", en: "first", literal: "number + one", lesson: "Ordinal marker" },
      { tp: "tenpo mute", en: "often, frequently", literal: "time + many", lesson: "Frequency" }
    ],
    teaser: "Next lesson: Writing Systems! Learn about sitelen pona (logographic script) and how to read and write toki pona visually."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "wan = 1, tu = 2, luka = 5", example: "luka tu = 7", meaning: "Numbers add together" },
      { pattern: "NOUN + NUMBER", example: "jan tu", meaning: "two people" },
      { pattern: "NOUN + nanpa + NUMBER", example: "jan nanpa wan", meaning: "first person (ordinal)" },
      { pattern: "tenpo ni / pini / kama", example: "tenpo kama la mi tawa", meaning: "In the future, I go" },
      { pattern: "tenpo suno + ni/pini/kama", example: "tenpo suno pini", meaning: "yesterday" },
      { pattern: "sike suno", example: "sike suno ni", meaning: "this year" },
      { pattern: "tenpo mun nanpa X", example: "tenpo mun nanpa tu", meaning: "month two (February)" },
      { pattern: "tenpo + suli/lili", example: "tenpo suli", meaning: "long time (duration)" },
      { pattern: "tenpo + mute/ale/ala", example: "tenpo mute", meaning: "often/always/never" }
    ],
    remember: [
      "wan = 1 | tu = 2 | luka = 5 | mute = many/20 | ale = all/100",
      "Numbers ADD: tu wan = 3, luka tu = 7, luka luka = 10",
      "Numbers follow nouns: 'jan tu' = two people",
      "'nanpa' makes ordinals: 'nanpa wan' = first",
      "tenpo ni = now | tenpo pini = past | tenpo kama = future",
      "tenpo suno = day | tenpo mun = month | sike suno = year",
      "tenpo suli = long time | tenpo mute = often",
      "Toki pona prefers 'mute' (many) over precise numbers!"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson17;
}
