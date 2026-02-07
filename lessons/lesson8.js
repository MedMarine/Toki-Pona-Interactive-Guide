/**
 * Lesson 8: Negation & Yes/No Questions
 * Using ala to negate and ask questions
 */

const lesson8 = {
  id: 8,
  title: "Negation & Yes/No Questions",
  desc: "Using ala to negate verbs, express nothing, and form yes/no questions",
  isExpanded: true,
  
  // ============ ENHANCED GRAMMAR SECTION ============
  grammar: {
    summary: "<b>ala</b> is the negation word. It means 'no', 'not', 'zero', or 'nothing'. Place it after verbs to negate them. Repeat the verb with <b>ala</b> to form yes/no questions: <b>sina moku ala moku?</b> = Do you eat?",
    
    concepts: [
      {
        title: "Basic negation with ala",
        explanation: "<b>ala</b> comes directly AFTER the word it negates. For verbs, this creates 'not doing': 'moku ala' = not eat. For adjectives: 'pona ala' = not good.",
        examples: [
          { tp: "mi moku ala", en: "I don't eat. / I'm not eating.", note: "'ala' after verb = not doing" },
          { tp: "ona li pona ala", en: "It's not good. / They're not good.", note: "'ala' after adjective" },
          { tp: "mi wile ala pali", en: "I don't want to work.", note: "'ala' after auxiliary verb" },
          { tp: "jan li tawa ala", en: "The person doesn't go.", note: "Negated motion" },
          { tp: "ni li suli ala", en: "This isn't big.", note: "Negated adjective" }
        ],
        pitfall: "'ala' goes AFTER what it negates, not before! 'mi ala moku' is wrong."
      },
      {
        title: "ala as a noun: nothing, zero",
        explanation: "<b>ala</b> can also be a noun meaning 'nothing', 'none', or 'zero'. As a noun, it works like any other noun in Toki Pona.",
        examples: [
          { tp: "mi jo e ala", en: "I have nothing.", note: "'ala' as direct object" },
          { tp: "ala li lon", en: "Nothing exists. / There's nothing.", note: "'ala' as subject" },
          { tp: "mi wile e ala", en: "I want nothing.", note: "Wanting nothing" },
          { tp: "jan ala li kama", en: "Nobody came. / Zero people came.", note: "'ala' modifying 'jan'" },
          { tp: "mi pana e ala tawa sina", en: "I give nothing to you.", note: "Giving nothing" }
        ],
        pitfall: "'jan ala' = no person, nobody. 'jan li X ala' = the person doesn't X."
      },
      {
        title: "Yes/No questions: verb ala verb",
        explanation: "To ask a yes/no question, repeat the verb with <b>ala</b> between: <b>sina moku ala moku?</b> = Do you eat? This literally asks 'you eat-not-eat?'",
        examples: [
          { tp: "sina moku ala moku?", en: "Do you eat? / Are you eating?", note: "Basic yes/no question" },
          { tp: "ona li pona ala pona?", en: "Is it good?", note: "Asking about quality" },
          { tp: "sina tawa ala tawa?", en: "Are you going?", note: "Asking about motion" },
          { tp: "ni li suli ala suli?", en: "Is this big?", note: "Asking about size" },
          { tp: "jan li lon ala lon?", en: "Is someone there?", note: "Asking about presence" }
        ],
        pitfall: "The repeated word is what's being questioned. 'sina pona ala pona?' asks about being good."
      },
      {
        title: "Answering yes/no questions",
        explanation: "Answer by repeating the verb (= yes) or saying <b>ala</b> or <b>verb ala</b> (= no). You can also add a full sentence for clarity.",
        examples: [
          { tp: "sina moku ala moku? — moku.", en: "Do you eat? — Yes (I eat).", note: "Repeat verb = yes" },
          { tp: "sina moku ala moku? — ala.", en: "Do you eat? — No.", note: "'ala' alone = no" },
          { tp: "sina moku ala moku? — moku ala.", en: "Do you eat? — No (I don't eat).", note: "'verb ala' = no" },
          { tp: "ona li pona ala pona? — pona. ona li pona mute!", en: "Is it good? — Yes. It's very good!", note: "Expanded answer" },
          { tp: "sina tawa ala tawa? — ala. mi lape.", en: "Are you going? — No. I'm sleeping.", note: "No with explanation" }
        ],
        pitfall: "Don't say 'yes' or 'no' — Toki Pona doesn't have those words! Repeat the verb or say 'ala'."
      },
      {
        title: "Negating auxiliary verbs",
        explanation: "When using auxiliary verbs like <b>wile</b> (want), <b>ken</b> (can), <b>kama</b> (become), put <b>ala</b> after the auxiliary, not the main verb.",
        examples: [
          { tp: "mi wile ala moku", en: "I don't want to eat.", note: "'ala' after 'wile'" },
          { tp: "mi ken ala tawa", en: "I can't go.", note: "'ala' after 'ken'" },
          { tp: "ona li kama ala sona", en: "They don't learn. (don't come-to-know)", note: "'ala' after 'kama'" },
          { tp: "mi wile ala pali e ni", en: "I don't want to do this.", note: "Full sentence" },
          { tp: "sina ken ala ken kama?", en: "Can you come?", note: "Yes/no with auxiliary" }
        ],
        pitfall: "'mi wile moku ala' could mean 'I want to not-eat' (weird). Put 'ala' after the auxiliary!"
      },
      {
        title: "Yes/No questions with auxiliaries",
        explanation: "For auxiliary verbs, repeat the AUXILIARY with <b>ala</b>, not the main verb: <b>sina wile ala wile moku?</b> = Do you want to eat?",
        examples: [
          { tp: "sina wile ala wile moku?", en: "Do you want to eat?", note: "Repeat 'wile'" },
          { tp: "ona li ken ala ken pali?", en: "Can they work?", note: "Repeat 'ken'" },
          { tp: "sina kama ala kama sona?", en: "Are you learning?", note: "Repeat 'kama'" },
          { tp: "mi mute li ken ala ken tawa?", en: "Can we go?", note: "First person plural" },
          { tp: "jan li wile ala wile ni?", en: "Does the person want this?", note: "Third person" }
        ],
        pitfall: "Question the auxiliary! 'sina wile moku ala moku?' is grammatically weird."
      },
      {
        title: "Double negation and emphasis",
        explanation: "Toki Pona generally avoids double negatives. However, <b>ala</b> can be repeated for emphasis: <b>ala ala ala!</b> = Absolutely not!",
        examples: [
          { tp: "ala!", en: "No!", note: "Simple refusal" },
          { tp: "ala ala ala!", en: "No no no! / Absolutely not!", note: "Emphatic refusal" },
          { tp: "mi wile ala wile ala!", en: "I really don't want to!", note: "Strong emphasis (informal)" },
          { tp: "ni li pona ala. ni li ike.", en: "This isn't good. This is bad.", note: "Clear negation, then positive statement" }
        ],
        pitfall: "Unlike English, 'not not good' doesn't mean 'good' in Toki Pona. Keep it simple!"
      },
      {
        title: "ala with prepositions",
        explanation: "You can negate prepositional relationships too. <b>tawa ala</b> = not toward, <b>tan ala</b> = not because of.",
        examples: [
          { tp: "mi tawa ala tomo", en: "I don't go to the house.", note: "Negated verb, not preposition" },
          { tp: "mi pali tan ala ni", en: "I don't work because of this.", note: "Negated reason (rare)" },
          { tp: "ona li lon ala tomo", en: "They aren't at the house.", note: "Negated 'lon'" },
          { tp: "mi toki ala tawa ona", en: "I don't speak to them.", note: "Negated verb with 'tawa'" },
          { tp: "ni li pona ala tawa mi", en: "I don't like this. (This isn't good to me.)", note: "Negated opinion pattern" }
        ],
        pitfall: "Usually negate the VERB, not the preposition. 'mi tawa ala' vs 'mi ala tawa'."
      },
      {
        title: "ala vs. weka",
        explanation: "<b>ala</b> = not, nothing, negation. <b>weka</b> = away, absent, removed. They're related but different: 'ala' negates, 'weka' describes absence/distance.",
        examples: [
          { tp: "jan li lon ala", en: "Nobody is here. (negation)", note: "'ala' negates existence" },
          { tp: "jan li weka", en: "The person is away/gone.", note: "'weka' = absent" },
          { tp: "mi jo e ala", en: "I have nothing.", note: "'ala' as noun = nothing" },
          { tp: "mi weka e ni", en: "I remove this.", note: "'weka' as verb = remove" },
          { tp: "ona li lon ala lon? — weka.", en: "Are they here? — (They're) away.", note: "Using 'weka' to answer" }
        ],
        pitfall: "'jan li weka' = the person is away. 'jan ala li lon' = nobody is here. Different meanings!"
      },
      {
        title: "Common negation patterns",
        explanation: "Some useful negated expressions become standard phrases in Toki Pona.",
        examples: [
          { tp: "mi sona ala", en: "I don't know.", note: "Very common phrase" },
          { tp: "mi ken ala", en: "I can't.", note: "Inability" },
          { tp: "mi wile ala", en: "I don't want to.", note: "Refusal" },
          { tp: "sona ala", en: "(I) don't know. (short answer)", note: "Quick response" },
          { tp: "ken ala", en: "Can't. / Not possible.", note: "Quick impossibility" },
          { tp: "wile ala", en: "Don't want to.", note: "Quick refusal" }
        ],
        pitfall: "These short forms work as quick answers. In full sentences, include the subject!"
      }
    ],
    
    keyInsight: "<b>ala</b> is incredibly versatile: it negates verbs ('moku ala' = not eat), works as a noun ('mi jo e ala' = I have nothing), and forms yes/no questions ('sina moku ala moku?'). Answer questions by repeating the verb (yes) or saying 'ala' (no). Always put 'ala' AFTER what you're negating!"
  },

  // ============ RICH VOCABULARY ============
  vocab: [
    {
      word: "ala",
      primaryMeaning: "no, not, zero, nothing",
      roles: {
        adjective: "no, not any, zero",
        adverb: "not",
        noun: "nothing, zero, null, void",
        interjection: "no!"
      },
      notes: "The universal negation word. Goes AFTER verbs/adjectives to negate them. Repeated with verb for yes/no questions. As noun = nothing.",
      compounds: [
        { tp: "jan ala", en: "nobody, no person" },
        { tp: "ijo ala", en: "nothing, no thing" },
        { tp: "tenpo ala", en: "never, no time" },
        { tp: "ma ala", en: "nowhere, no place" },
        { tp: "ala ala ala!", en: "absolutely not!" }
      ]
    },
    {
      word: "ken",
      primaryMeaning: "can, able, possible",
      roles: {
        adjective: "possible, able",
        noun: "ability, possibility, permission",
        auxiliaryVerb: "can, may, to be able to",
        verbIntransitive: "to be possible"
      },
      notes: "Expresses ability, possibility, or permission. 'mi ken moku' = I can eat. 'ken!' = Maybe! / It's possible!",
      compounds: [
        { tp: "ken la", en: "maybe, possibly (if possible)" },
        { tp: "mi ken ala", en: "I can't" },
        { tp: "ken!", en: "maybe! possible!" },
        { tp: "sina ken...", en: "you can... / you may..." },
        { tp: "ni li ken", en: "this is possible" }
      ]
    },
    {
      word: "wile",
      primaryMeaning: "want, need, desire",
      roles: {
        adjective: "desired, wanted, necessary",
        noun: "want, desire, need",
        auxiliaryVerb: "want to, need to, must",
        verbTransitive: "to want (something)"
      },
      notes: "Expresses desire, need, or requirement. 'mi wile moku' = I want to eat. 'mi wile e ni' = I want this.",
      compounds: [
        { tp: "wile moku", en: "hunger, want to eat" },
        { tp: "wile lape", en: "sleepiness, want to sleep" },
        { tp: "wile ala", en: "don't want, refusal" },
        { tp: "wile sona", en: "curiosity, want to know" },
        { tp: "mi wile e sina", en: "I want/need you" }
      ]
    },
    {
      word: "lape",
      primaryMeaning: "sleep, rest",
      roles: {
        adjective: "sleeping, resting, inactive",
        noun: "sleep, rest",
        verbIntransitive: "to sleep, to rest"
      },
      notes: "Covers sleep and rest. 'mi lape' = I sleep. 'tomo lape' = bedroom (sleeping room).",
      compounds: [
        { tp: "tomo lape", en: "bedroom" },
        { tp: "lape pona", en: "good sleep, sleep well" },
        { tp: "wile lape", en: "sleepy, want to sleep" },
        { tp: "lape lili", en: "nap, short rest" },
        { tp: "mi lape ala", en: "I don't sleep / I'm not sleeping" }
      ]
    },
    {
      word: "musi",
      primaryMeaning: "fun, play, game, art, entertainment",
      roles: {
        adjective: "fun, amusing, entertaining, artistic",
        noun: "game, play, fun, art, entertainment",
        verbIntransitive: "to play, to have fun",
        verbTransitive: "to entertain, to amuse"
      },
      notes: "Covers all forms of entertainment and play. 'musi' = fun, game, art. 'mi musi' = I play / I have fun.",
      compounds: [
        { tp: "ilo musi", en: "toy, game, musical instrument" },
        { tp: "tomo musi", en: "theater, entertainment venue" },
        { tp: "jan musi", en: "entertainer, artist, player" },
        { tp: "sitelen musi", en: "art, entertainment media" },
        { tp: "tawa musi", en: "dance (move for fun)" }
      ]
    },
    {
      word: "pali",
      primaryMeaning: "do, work, make, act",
      roles: {
        adjective: "working, active, busy",
        noun: "work, action, deed, activity",
        verbIntransitive: "to work, to act",
        verbTransitive: "to do, to make, to build"
      },
      notes: "General action/work verb. 'mi pali' = I work. 'mi pali e tomo' = I build a house. Very versatile!",
      compounds: [
        { tp: "pali pona", en: "good work, well done" },
        { tp: "pali ike", en: "bad work, mistake" },
        { tp: "jan pali", en: "worker" },
        { tp: "ilo pali", en: "tool" },
        { tp: "ma pali", en: "workplace, work area" }
      ]
    },
    {
      word: "wawa",
      primaryMeaning: "strong, powerful, energetic",
      roles: {
        adjective: "strong, powerful, intense, confident, energetic",
        noun: "strength, power, energy",
        verbTransitive: "to strengthen, to empower"
      },
      notes: "Physical and metaphorical strength. 'jan wawa' = strong person. 'wawa mute' = very strong.",
      compounds: [
        { tp: "jan wawa", en: "strong person" },
        { tp: "telo wawa", en: "strong drink, alcohol, coffee" },
        { tp: "wawa mute", en: "very strong" },
        { tp: "wawa ala", en: "weak, not strong" },
        { tp: "kon wawa", en: "strong wind" }
      ]
    },
    {
      word: "awen",
      primaryMeaning: "stay, remain, wait, keep",
      roles: {
        adjective: "remaining, staying, enduring, protected",
        noun: "staying, preservation",
        auxiliaryVerb: "to continue to, to keep (doing)",
        verbIntransitive: "to stay, to wait, to remain",
        verbTransitive: "to keep, to protect, to maintain"
      },
      notes: "Expresses continuation and preservation. 'mi awen' = I stay. 'awen pona' = take care (stay well).",
      compounds: [
        { tp: "awen pona", en: "take care, stay well (goodbye)" },
        { tp: "awen lon", en: "stay here, remain present" },
        { tp: "mi awen moku", en: "I keep eating, I continue eating" },
        { tp: "awen e ni", en: "keep this, preserve this" },
        { tp: "jan awen", en: "guardian, protector" }
      ]
    },
    {
      word: "open",
      primaryMeaning: "open, start, begin, turn on",
      roles: {
        adjective: "open, available, ready",
        noun: "beginning, start, opening",
        auxiliaryVerb: "to begin to, to start (doing)",
        verbIntransitive: "to begin, to start",
        verbTransitive: "to open, to turn on, to start"
      },
      notes: "Opening and beginning. 'mi open e lupa' = I open the door. 'mi open pali' = I start working.",
      compounds: [
        { tp: "open e lupa", en: "open the door" },
        { tp: "open pali", en: "start working" },
        { tp: "tenpo open", en: "beginning time, start" },
        { tp: "open moku", en: "start eating" },
        { tp: "open toki", en: "start speaking, introduction" }
      ]
    },
    {
      word: "pini",
      primaryMeaning: "end, finish, close, past",
      roles: {
        adjective: "finished, completed, past, ended",
        noun: "end, finish, conclusion, past",
        auxiliaryVerb: "to finish (doing), to stop",
        verbIntransitive: "to end, to finish",
        verbTransitive: "to end, to finish, to close"
      },
      notes: "Ending and completion. Opposite of 'open'. 'mi pini pali' = I finish working. 'tenpo pini' = past.",
      compounds: [
        { tp: "pini e lupa", en: "close the door" },
        { tp: "pini pali", en: "finish working, done working" },
        { tp: "tenpo pini", en: "past, past time" },
        { tp: "pini moku", en: "finish eating" },
        { tp: "pini!", en: "done! finished!" }
      ]
    }
  ],

  // ============ CATEGORIZED EXAMPLE SENTENCES ============
  sentences: {
    basicNegation: [
      { tp: "mi moku ala", en: "I don't eat. / I'm not eating.", gloss: "I | eat | not", note: "Basic verb negation" },
      { tp: "ona li pona ala", en: "It's not good. / They're not good.", gloss: "it/they | (li) | good | not", note: "Adjective negation" },
      { tp: "mi tawa ala", en: "I don't go. / I'm not going.", gloss: "I | go | not", note: "Motion negation" },
      { tp: "jan li lon ala", en: "Nobody is here. / The person isn't here.", gloss: "person | (li) | exist | not", note: "Existence negation" },
      { tp: "ni li suli ala", en: "This isn't big.", gloss: "this | (li) | big | not", note: "Size negation" },
      { tp: "mi lape ala", en: "I don't sleep. / I'm not sleeping.", gloss: "I | sleep | not", note: "Negated rest" }
    ],
    
    alaAsNoun: [
      { tp: "mi jo e ala", en: "I have nothing.", gloss: "I | have | (e) | nothing", note: "'ala' as object" },
      { tp: "ala li lon", en: "Nothing exists. / There's nothing.", gloss: "nothing | (li) | exist", note: "'ala' as subject" },
      { tp: "mi wile e ala", en: "I want nothing.", gloss: "I | want | (e) | nothing", note: "Wanting nothing" },
      { tp: "jan ala li kama", en: "Nobody came.", gloss: "person | none | (li) | come", note: "'ala' modifying 'jan'" },
      { tp: "mi pana e ala tawa sina", en: "I give nothing to you.", gloss: "I | give | (e) | nothing | to | you", note: "Giving nothing" },
      { tp: "ijo ala li lon insa poki", en: "Nothing is inside the container.", gloss: "thing | none | (li) | at | inside | container", note: "Empty container" }
    ],
    
    yesNoQuestions: [
      { tp: "sina moku ala moku?", en: "Do you eat? / Are you eating?", gloss: "you | eat | not | eat", note: "Basic yes/no question" },
      { tp: "ona li pona ala pona?", en: "Is it good? / Are they good?", gloss: "it | (li) | good | not | good", note: "Quality question" },
      { tp: "sina tawa ala tawa?", en: "Are you going?", gloss: "you | go | not | go", note: "Motion question" },
      { tp: "ni li suli ala suli?", en: "Is this big?", gloss: "this | (li) | big | not | big", note: "Size question" },
      { tp: "jan li lon ala lon?", en: "Is someone here?", gloss: "person | (li) | at | not | at", note: "Presence question" },
      { tp: "sina lape ala lape?", en: "Are you sleeping?", gloss: "you | sleep | not | sleep", note: "Sleep question" },
      { tp: "moku ni li pona ala pona?", en: "Is this food good?", gloss: "food | this | (li) | good | not | good", note: "Compound subject" }
    ],
    
    answeringQuestions: [
      { tp: "sina moku ala moku? — moku.", en: "Do you eat? — Yes.", gloss: "... — eat", note: "Repeat verb = yes" },
      { tp: "sina moku ala moku? — ala.", en: "Do you eat? — No.", gloss: "... — no", note: "'ala' = no" },
      { tp: "sina moku ala moku? — moku ala.", en: "Do you eat? — No (I don't eat).", gloss: "... — eat | not", note: "Explicit no" },
      { tp: "ona li pona ala pona? — pona!", en: "Is it good? — Yes!", gloss: "... — good", note: "Enthusiastic yes" },
      { tp: "sina tawa ala tawa? — ala. mi lape.", en: "Are you going? — No. I'm sleeping.", gloss: "... — no | I | sleep", note: "No with reason" },
      { tp: "jan li lon ala lon? — lon. jan mute li lon.", en: "Is anyone here? — Yes. Many people are here.", gloss: "... — exist | person | many | (li) | exist", note: "Extended answer" }
    ],
    
    auxiliaryNegation: [
      { tp: "mi wile ala moku", en: "I don't want to eat.", gloss: "I | want | not | eat", note: "'ala' after auxiliary" },
      { tp: "mi ken ala tawa", en: "I can't go.", gloss: "I | can | not | go", note: "Can't" },
      { tp: "ona li kama ala sona", en: "They don't learn.", gloss: "they | (li) | become | not | know", note: "Don't come-to-know" },
      { tp: "mi awen ala pali", en: "I don't keep working.", gloss: "I | continue | not | work", note: "Stop continuing" },
      { tp: "mi open ala moku", en: "I don't start eating.", gloss: "I | start | not | eat", note: "Don't begin" },
      { tp: "ona li pini ala pali", en: "They don't finish working.", gloss: "they | (li) | finish | not | work", note: "Don't complete" }
    ],
    
    auxiliaryQuestions: [
      { tp: "sina wile ala wile moku?", en: "Do you want to eat?", gloss: "you | want | not | want | eat", note: "Repeat auxiliary" },
      { tp: "ona li ken ala ken pali?", en: "Can they work?", gloss: "they | (li) | can | not | can | work", note: "Ability question" },
      { tp: "sina kama ala kama sona?", en: "Are you learning?", gloss: "you | become | not | become | know", note: "Learning question" },
      { tp: "mi mute li ken ala ken tawa?", en: "Can we go?", gloss: "we | (li) | can | not | can | go", note: "First person plural" },
      { tp: "jan li wile ala wile ni?", en: "Does the person want this?", gloss: "person | (li) | want | not | want | this", note: "Third person" },
      { tp: "sina awen ala awen lon ni?", en: "Are you staying here?", gloss: "you | stay | not | stay | at | this", note: "Continuation question" }
    ],
    
    auxiliaryAnswers: [
      { tp: "sina wile ala wile moku? — wile.", en: "Do you want to eat? — Yes.", gloss: "... — want", note: "Repeat auxiliary = yes" },
      { tp: "sina wile ala wile moku? — wile ala.", en: "Do you want to eat? — No.", gloss: "... — want | not", note: "Auxiliary + ala = no" },
      { tp: "ona li ken ala ken pali? — ken.", en: "Can they work? — Yes.", gloss: "... — can", note: "Ability yes" },
      { tp: "ona li ken ala ken pali? — ken ala.", en: "Can they work? — No.", gloss: "... — can | not", note: "Ability no" },
      { tp: "sina kama ala kama sona? — kama. mi kama sona e toki pona!", en: "Are you learning? — Yes. I'm learning Toki Pona!", gloss: "... — become | I | learn | (e) | toki pona", note: "Extended yes" }
    ],
    
    negationWithPrepositions: [
      { tp: "mi tawa ala tomo", en: "I don't go to the house.", gloss: "I | go | not | house", note: "Negated motion" },
      { tp: "ona li lon ala tomo", en: "They aren't at the house.", gloss: "they | (li) | at | not | house", note: "Negated location" },
      { tp: "mi toki ala tawa ona", en: "I don't speak to them.", gloss: "I | speak | not | to | them", note: "Negated communication" },
      { tp: "ni li pona ala tawa mi", en: "I don't like this.", gloss: "this | (li) | good | not | to | me", note: "Negated opinion" },
      { tp: "mi pali ala kepeken ilo", en: "I don't work with tools.", gloss: "I | work | not | using | tool", note: "Negated instrument" },
      { tp: "ona li kama ala tan ma ni", en: "They don't come from this place.", gloss: "they | (li) | come | not | from | land | this", note: "Negated origin" }
    ],
    
    commonPhrases: [
      { tp: "mi sona ala", en: "I don't know.", gloss: "I | know | not", note: "Very common!" },
      { tp: "sona ala", en: "Don't know. (short)", gloss: "know | not", note: "Quick answer" },
      { tp: "mi ken ala", en: "I can't.", gloss: "I | can | not", note: "Inability" },
      { tp: "ken ala", en: "Can't. / Not possible.", gloss: "can | not", note: "Quick impossibility" },
      { tp: "mi wile ala", en: "I don't want to.", gloss: "I | want | not", note: "Refusal" },
      { tp: "wile ala", en: "Don't want to.", gloss: "want | not", note: "Quick refusal" },
      { tp: "ala!", en: "No!", gloss: "no", note: "Simple refusal" },
      { tp: "ala ala ala!", en: "No no no!", gloss: "no | no | no", note: "Emphatic refusal" }
    ],
    
    ambiguousNegation: [
      { tp: "jan ala li moku", meanings: ["Nobody eats.", "No person eats."], likely: "Nobody eats.", note: "'jan ala' = nobody (noun phrase)" },
      { tp: "jan li moku ala", meanings: ["The person doesn't eat."], likely: "The person doesn't eat.", note: "Verb negation — unambiguous" },
      { tp: "mi wile moku ala", meanings: ["I want to not-eat (weird).", "I don't want to eat (if 'wile ala' meant)"], likely: "Usually 'mi wile ala moku' is clearer", note: "Put 'ala' after auxiliary!" },
      { tp: "mi lukin e jan ala", meanings: ["I see nobody.", "I see no person."], likely: "I see nobody.", note: "'jan ala' as object" }
    ]
  },

  // ============ PROGRESSIVE PRACTICE EXERCISES ============
  practice: [
    {
      type: "negationPlacement",
      instruction: "Where should 'ala' go to negate the verb?",
      questions: [
        {
          sentence: "mi moku",
          options: ["ala mi moku", "mi ala moku", "mi moku ala"],
          correct: 2,
          result: "mi moku ala",
          explanation: "'ala' goes AFTER the verb it negates."
        },
        {
          sentence: "ona li pona",
          options: ["ona ala li pona", "ona li ala pona", "ona li pona ala"],
          correct: 2,
          result: "ona li pona ala",
          explanation: "'ala' goes after the adjective/verb 'pona'."
        },
        {
          sentence: "mi wile moku",
          options: ["mi ala wile moku", "mi wile ala moku", "mi wile moku ala"],
          correct: 1,
          result: "mi wile ala moku",
          explanation: "'ala' goes after the AUXILIARY verb 'wile'."
        },
        {
          sentence: "jan li tawa",
          options: ["jan ala li tawa", "jan li ala tawa", "jan li tawa ala"],
          correct: 2,
          result: "jan li tawa ala",
          explanation: "'ala' negates the verb 'tawa'."
        }
      ]
    },
    
    {
      type: "formQuestion",
      instruction: "Convert this statement into a yes/no question:",
      questions: [
        {
          statement: "sina moku",
          answer: "sina moku ala moku?",
          hint: "Repeat 'moku' with 'ala' between"
        },
        {
          statement: "ona li pona",
          answer: "ona li pona ala pona?",
          hint: "Repeat 'pona' with 'ala' between"
        },
        {
          statement: "sina wile tawa",
          answer: "sina wile ala wile tawa?",
          hint: "Repeat the AUXILIARY 'wile'"
        },
        {
          statement: "jan li ken pali",
          answer: "jan li ken ala ken pali?",
          hint: "Repeat the auxiliary 'ken'"
        },
        {
          statement: "ni li suli",
          answer: "ni li suli ala suli?",
          hint: "Repeat 'suli' with 'ala' between"
        }
      ]
    },
    
    {
      type: "answerQuestion",
      instruction: "How would you answer this question?",
      questions: [
        {
          question: "sina moku ala moku?",
          scenario: "You ARE eating",
          correctAnswers: ["moku", "moku. mi moku."],
          explanation: "Repeat the verb to say 'yes'."
        },
        {
          question: "sina moku ala moku?",
          scenario: "You are NOT eating",
          correctAnswers: ["ala", "moku ala", "ala. mi moku ala."],
          explanation: "Say 'ala' or 'moku ala' to say 'no'."
        },
        {
          question: "ona li pona ala pona?",
          scenario: "It IS good",
          correctAnswers: ["pona", "pona. ona li pona."],
          explanation: "Repeat 'pona' to confirm."
        },
        {
          question: "sina wile ala wile lape?",
          scenario: "You DON'T want to sleep",
          correctAnswers: ["wile ala", "ala", "wile ala. mi wile ala lape."],
          explanation: "Say 'wile ala' or just 'ala'."
        }
      ]
    },
    
    {
      type: "translationVariation",
      instruction: "Translate each sentence:",
      questions: [
        { tp: "mi moku ala", expectedType: "negation", hint: "I + eat + not" },
        { tp: "mi jo e ala", expectedType: "noun", hint: "I have nothing" },
        { tp: "sina tawa ala tawa?", expectedType: "question", hint: "Are you going?" },
        { tp: "jan ala li lon", expectedType: "nobody", hint: "No person exists here" },
        { tp: "mi ken ala pali", expectedType: "auxiliary", hint: "I can't work" },
        { tp: "ona li wile ala wile moku?", expectedType: "aux-question", hint: "Do they want to eat?" }
      ],
      answers: [
        "I don't eat. / I'm not eating.",
        "I have nothing.",
        "Are you going?",
        "Nobody is here.",
        "I can't work.",
        "Do they want to eat?"
      ]
    },
    
    {
      type: "fillBlank",
      instruction: "Complete the sentence:",
      questions: [
        { 
          tp: "mi sona _____", 
          en: "I don't know.", 
          answer: "ala", 
          hint: "Negate 'sona'" 
        },
        { 
          tp: "sina moku _____ moku?", 
          en: "Do you eat?", 
          answer: "ala", 
          hint: "Yes/no question format" 
        },
        { 
          tp: "mi wile _____ pali", 
          en: "I don't want to work.", 
          answer: "ala", 
          hint: "Negate the auxiliary" 
        },
        { 
          tp: "jan _____ li kama", 
          en: "Nobody came.", 
          answer: "ala", 
          hint: "'ala' modifies 'jan'" 
        },
        { 
          tp: "ona li ken _____ ken tawa?", 
          en: "Can they go?", 
          answer: "ala", 
          hint: "Yes/no with auxiliary" 
        }
      ]
    },
    
    {
      type: "identifyMeaning",
      instruction: "What does this sentence mean?",
      questions: [
        {
          tp: "jan ala li moku",
          options: ["A person doesn't eat", "Nobody eats", "The food has no person"],
          correct: 1,
          explanation: "'jan ala' = nobody, no person. So 'nobody eats'."
        },
        {
          tp: "jan li moku ala",
          options: ["Nobody eats", "The person doesn't eat", "The food is not a person"],
          correct: 1,
          explanation: "'moku ala' = doesn't eat. The person doesn't eat."
        },
        {
          tp: "mi jo e ala",
          options: ["I don't have", "I have nothing", "Nothing has me"],
          correct: 1,
          explanation: "'ala' is the direct object = nothing. I have nothing."
        },
        {
          tp: "mi wile ala moku",
          options: ["I don't want to eat", "I want to not-eat", "I eat nothing I want"],
          correct: 0,
          explanation: "'wile ala' = don't want. I don't want to eat."
        },
        {
          tp: "ken ala",
          options: ["What can?", "Can't / Not possible", "Zero ability"],
          correct: 1,
          explanation: "'ken ala' = can't, not possible (common short phrase)."
        }
      ]
    },
    
    {
      type: "questionOrStatement",
      instruction: "Is this a question or a statement?",
      questions: [
        {
          tp: "sina moku ala",
          options: ["Statement (You don't eat)", "Question (Do you eat?)"],
          correct: 0,
          explanation: "No repeated verb — this is a statement: 'You don't eat.'"
        },
        {
          tp: "sina moku ala moku",
          options: ["Statement", "Question (Do you eat?)"],
          correct: 1,
          explanation: "'verb ala verb' pattern = yes/no question."
        },
        {
          tp: "ona li pona ala pona",
          options: ["Statement (It's not good)", "Question (Is it good?)"],
          correct: 1,
          explanation: "'pona ala pona' = yes/no question about goodness."
        },
        {
          tp: "mi ken ala tawa",
          options: ["Statement (I can't go)", "Question (Can I go?)"],
          correct: 0,
          explanation: "No repeated 'ken' — statement: 'I can't go.'"
        },
        {
          tp: "sina ken ala ken tawa",
          options: ["Statement", "Question (Can you go?)"],
          correct: 1,
          explanation: "'ken ala ken' = yes/no question about ability."
        }
      ]
    },
    
    {
      type: "sentenceBuilding",
      instruction: "Arrange these words into a valid sentence:",
      questions: [
        {
          words: ["mi", "moku", "ala"],
          validAnswers: ["mi moku ala"],
          translations: ["I don't eat."],
          hint: "Subject + verb + ala"
        },
        {
          words: ["sina", "wile", "ala", "wile", "lape"],
          validAnswers: ["sina wile ala wile lape"],
          translations: ["Do you want to sleep?"],
          hint: "Yes/no question with auxiliary"
        },
        {
          words: ["jan", "ala", "li", "lon"],
          validAnswers: ["jan ala li lon"],
          translations: ["Nobody is here."],
          hint: "'jan ala' = nobody"
        },
        {
          words: ["mi", "jo", "e", "ala"],
          validAnswers: ["mi jo e ala"],
          translations: ["I have nothing."],
          hint: "'ala' as direct object"
        }
      ]
    },
    
    {
      type: "trueFalse",
      instruction: "Is this statement true or false?",
      questions: [
        {
          statement: "'ala' goes BEFORE the verb it negates.",
          answer: false,
          explanation: "False! 'ala' goes AFTER the verb: 'moku ala', not 'ala moku'."
        },
        {
          statement: "To form a yes/no question, repeat the verb with 'ala' between.",
          answer: true,
          explanation: "Correct! 'sina moku ala moku?' = Do you eat?"
        },
        {
          statement: "To say 'yes', you repeat the verb from the question.",
          answer: true,
          explanation: "Yes! 'moku' = yes (I eat). 'ala' = no."
        },
        {
          statement: "'jan ala' means 'the person doesn't exist'.",
          answer: false,
          explanation: "False! 'jan ala' = no person, nobody. 'jan li lon ala' = the person doesn't exist."
        },
        {
          statement: "For auxiliary verbs, put 'ala' after the auxiliary, not the main verb.",
          answer: true,
          explanation: "Correct! 'mi wile ala moku' (don't want to eat), not 'mi wile moku ala'."
        },
        {
          statement: "Toki Pona has words for 'yes' and 'no'.",
          answer: false,
          explanation: "False! Answer by repeating the verb (yes) or saying 'ala' (no)."
        }
      ]
    },
    
    {
      type: "roleIdentification",
      instruction: "What role does 'ala' play in this sentence?",
      questions: [
        {
          tp: "mi moku **ala**",
          target: "ala",
          options: ["Negation (not eating)", "Noun (nothing)", "Question marker", "Adjective (zero)"],
          correct: 0,
          explanation: "'ala' negates the verb — I don't eat."
        },
        {
          tp: "mi jo e **ala**",
          target: "ala",
          options: ["Negation", "Noun (nothing)", "Question marker", "Adjective"],
          correct: 1,
          explanation: "'ala' is the direct object — I have nothing."
        },
        {
          tp: "sina moku **ala** moku?",
          target: "ala",
          options: ["Negation only", "Noun", "Question marker (verb ala verb)", "Adjective"],
          correct: 2,
          explanation: "'verb ala verb' forms a yes/no question."
        },
        {
          tp: "jan **ala** li lon",
          target: "ala",
          options: ["Negation of 'li'", "Noun modifying 'jan' (nobody)", "Question marker", "Verb"],
          correct: 1,
          explanation: "'jan ala' = no person, nobody."
        }
      ]
    }
  ],

  // ============ MINI-STORY ============
  story: {
    title: "mi wile ala pali — I Don't Want to Work",
    intro: "A story about someone who doesn't want to work. Pay attention to negation and questions!",
    paragraphs: [
      { tp: "tenpo suno pona. mi lape lon tomo mi.", en: "A nice day. I sleep at my house.", note: "Setting the scene" },
      { tp: "jan li toki tawa mi: 'sina lape ala lape?'", en: "Someone says to me: 'Are you sleeping?'", note: "Yes/no question" },
      { tp: "mi toki: 'lape. mi wile lape.'", en: "I say: 'Yes. I want to sleep.'", note: "Answering by repeating verb" },
      { tp: "jan li toki: 'sina wile ala wile pali?'", en: "They say: 'Do you want to work?'", note: "Auxiliary question" },
      { tp: "mi toki: 'wile ala! mi wile ala pali.'", en: "I say: 'No! I don't want to work.'", note: "'wile ala' = no/don't want" },
      { tp: "jan li toki: 'sina ken ala lape! o pali!'", en: "They say: 'You can't sleep! Work!'", note: "'ken ala' = can't" },
      { tp: "mi toki: 'mi sona ala...'", en: "I say: 'I don't know...'", note: "Common phrase: 'sona ala'" },
      { tp: "mi wile ala. taso mi pali.", en: "I don't want to. But I work.", note: "Resignation" },
      { tp: "tenpo pini la mi pali. mi wile lape.", en: "After, I worked. I want to sleep.", note: "'tenpo pini la' = afterward" },
      { tp: "mi moku ala moku? ala. mi lape.", en: "Do I eat? No. I sleep.", note: "Self-question and answer" }
    ],
    comprehension: [
      { question: "What is the speaker doing at the start?", answer: "Sleeping (mi lape)", evidence: "mi lape lon tomo mi" },
      { question: "Does the speaker want to work?", answer: "No (wile ala)", evidence: "mi wile ala pali" },
      { question: "What happens in the end?", answer: "The speaker works, then sleeps", evidence: "mi pali... mi lape" },
      { question: "Does the speaker eat?", answer: "No (ala)", evidence: "mi moku ala moku? ala." }
    ],
    challenge: "Rewrite the story so the speaker DOES want to work. Change the negations to positive statements!"
  },

  // ============ COMPOUNDS PREVIEW ============
  compoundsPreview: {
    title: "Build Your Vocabulary",
    intro: "Negation and ability words combine to express many useful concepts:",
    items: [
      { tp: "sona ala", en: "don't know, ignorance", literal: "know + not", lesson: "'mi sona ala' = I don't know" },
      { tp: "ken ala", en: "can't, impossible", literal: "can + not", lesson: "'mi ken ala' = I can't" },
      { tp: "wile ala", en: "don't want, refusal", literal: "want + not", lesson: "'mi wile ala' = I don't want to" },
      { tp: "jan ala", en: "nobody, no one", literal: "person + zero", lesson: "'jan ala li lon' = nobody is here" },
      { tp: "ijo ala", en: "nothing, no thing", literal: "thing + zero", lesson: "'mi jo e ijo ala' = I have nothing" },
      { tp: "tenpo ala", en: "never, no time", literal: "time + zero", lesson: "A time that doesn't exist" },
      { tp: "telo wawa", en: "strong drink, alcohol/coffee", literal: "liquid + strong", lesson: "Energizing or intoxicating drinks" },
      { tp: "ilo musi", en: "toy, game, instrument", literal: "tool + fun", lesson: "Things for entertainment" },
      { tp: "tomo lape", en: "bedroom", literal: "room + sleep", lesson: "Where you sleep" },
      { tp: "awen pona", en: "take care (goodbye)", literal: "stay + well", lesson: "Said to someone staying" }
    ],
    teaser: "Next lesson: Unofficial words! Learn how to say names, countries, and languages in Toki Pona."
  },

  // ============ QUICK REFERENCE ============
  quickReference: {
    patterns: [
      { pattern: "VERB + ala", example: "mi moku ala", meaning: "I don't eat." },
      { pattern: "ADJECTIVE + ala", example: "ona li pona ala", meaning: "It's not good." },
      { pattern: "AUXILIARY + ala + VERB", example: "mi wile ala pali", meaning: "I don't want to work." },
      { pattern: "mi jo e ala", example: "mi jo e ala", meaning: "I have nothing." },
      { pattern: "X ala (as modifier)", example: "jan ala li lon", meaning: "Nobody is here." },
      { pattern: "VERB ala VERB?", example: "sina moku ala moku?", meaning: "Do you eat?" },
      { pattern: "AUX ala AUX VERB?", example: "sina wile ala wile moku?", meaning: "Do you want to eat?" },
      { pattern: "Answer: VERB", example: "moku.", meaning: "Yes (I eat)." },
      { pattern: "Answer: ala / VERB ala", example: "ala. / moku ala.", meaning: "No (I don't eat)." }
    ],
    remember: [
      "'ala' goes AFTER what it negates, not before!",
      "Yes/no questions: repeat the verb with 'ala' between",
      "Answer 'yes' by repeating the verb",
      "Answer 'no' with 'ala' or 'verb ala'",
      "For auxiliaries, negate/question the auxiliary, not the main verb",
      "'jan ala' = nobody. 'jan li X ala' = person doesn't X.",
      "'ala' as noun = nothing, zero",
      "Common: 'mi sona ala' = I don't know"
    ]
  }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lesson8;
}
