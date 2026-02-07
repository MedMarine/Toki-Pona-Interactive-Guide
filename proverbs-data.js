/**
 * proverbs-data.js - Toki Pona proverbs for the graded reader
 * Source: toki-pona-lessons_en.pdf (Appendix A.3)
 */

const proverbsData = {
  categories: [
    {
      id: "nasin-ale",
      title: "nasin ale",
      titleEn: "The Way of Life",
      icon: "🌿",
      proverbs: [
        { tp: "nasin pona li mute", en: "The good ways are many.", note: "There are many right ways of doing things." },
        { tp: "ante li kama", en: "Change comes.", note: "Times change." },
        { tp: "ike li kama", en: "Bad comes.", note: "Shit happens." },
        { tp: "ale li jo e tenpo", en: "There is a time for everything.", note: "Everything in its right context." },
        { tp: "ale li pona", en: "All is good.", note: "Life is beautiful. Everything will be OK." },
        { tp: "nasin ante li pona tawa jan ante", en: "Different ways are good for different people." },
        { tp: "sina pana e ike la sina kama jo e ike", en: "If you give evil, you will receive evil." },
        { tp: "suno li lon poka pimeja", en: "Light is beside darkness.", note: "Opposites are interconnected. Yin and yang." },
        { tp: "pini li pona la ale li pona", en: "If the end is good, everything is good." },
        { tp: "mi pona e ale mi la mi pona e mi", en: "When I improve all areas of my life, I improve myself." }
      ]
    },
    {
      id: "jan",
      title: "jan",
      titleEn: "People",
      icon: "👥",
      proverbs: [
        { tp: "o olin e jan poka", en: "Love thy neighbor." },
        { tp: "jan li suli mute. mani li suli lili", en: "People are more important than money." },
        { tp: "jan lili li sona ala e ike", en: "Children are innocent.", note: "Children don't know evil." },
        { tp: "utala li ike", en: "Conflict is bad." },
        { tp: "mi weka e ike jan la mi weka e ike mi", en: "When I forgive somebody's wrongdoings, I cleanse myself of negativity." }
      ]
    },
    {
      id: "sona",
      title: "sona",
      titleEn: "Wisdom",
      icon: "🧠",
      proverbs: [
        { tp: "o sona e sina", en: "Know thyself!" },
        { tp: "wile sona li mute e sona", en: "Curiosity feeds wisdom.", note: "One learns by asking questions." },
        { tp: "jan sona li jan nasa", en: "A wise man is a fool.", note: "A genius thinks unconventionally." },
        { tp: "sin en ante li sin e lawa li pana e sona", en: "Novelty and change freshen the mind and bring insight." },
        { tp: "weka lili li pona tawa lawa", en: "Temporary isolation is good for meditation." },
        { tp: "tenpo li tawa la sona li kama", en: "Time comes, advice comes." }
      ]
    },
    {
      id: "pali",
      title: "pali",
      titleEn: "Work",
      icon: "🔨",
      proverbs: [
        { tp: "o sona ala. o pali", en: "Stop thinking. Do stuff." },
        { tp: "pali li pana e sona", en: "One learns by experience.", note: "Work gives knowledge." },
        { tp: "pali pona li lawa tawa lon", en: "Good work is most important in life." }
      ]
    },
    {
      id: "toki",
      title: "toki",
      titleEn: "Language",
      icon: "💬",
      proverbs: [
        { tp: "toki li pona", en: "Communication is good." },
        { tp: "toki pona li toki pona", en: "Toki Pona is a good language.", note: "Also: Simple speech is good speech." }
      ]
    },
    {
      id: "sijelo",
      title: "sijelo",
      titleEn: "Body & Health",
      icon: "💪",
      proverbs: [
        { tp: "telo li pona", en: "Water is good." },
        { tp: "lape li pona", en: "Sleep is good." },
        { tp: "wawa li lon insa", en: "Energy comes from inside." },
        { tp: "pilin pona li pana e sijelo pona", en: "Good feelings give a good body.", note: "Happiness promotes health." }
      ]
    },
    {
      id: "ike",
      title: "ike",
      titleEn: "Warnings",
      icon: "⚠️",
      proverbs: [
        { tp: "nasin mani li ike", en: "The way of money is bad.", note: "Greed corrupts." },
        { tp: "jo ijo mute li ike e jan", en: "Having many things harms a person.", note: "Materialism is harmful." },
        { tp: "jan utala ale li nasa", en: "All warriors are crazy." }
      ]
    },
    {
      id: "ma",
      title: "ma",
      titleEn: "Nature & World",
      icon: "🌍",
      proverbs: [
        { tp: "o pana e pona tawa ma", en: "Give good to the earth.", note: "Take care of nature." },
        { tp: "kili li tawa anpa lon poka kasi", en: "The apple falls not far from the tree." }
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { proverbsData };
}
