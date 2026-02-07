/**
 * readings-data.js - Reading passages for the toki pona graded reader
 */

const readingsData = {
  tier1: {
    title: "Beginner",
    icon: "🌱",
    requirement: "Lessons 1–4",
    passages: [
      {
        title: "ale li pona",
        source: "Traditional proverb",
        lines: [
          { tp: "ale li pona", en: "Everything is good." },
          { tp: "mi pona", en: "I am good." },
          { tp: "sina pona", en: "You are good." },
          { tp: "ona li pona", en: "They are good." }
        ]
      },
      {
        title: "moku pona",
        source: "Simple dialogue",
        lines: [
          { tp: "mi moku", en: "I eat." },
          { tp: "sina moku ala moku", en: "Do you eat?" },
          { tp: "mi moku e pan", en: "I eat bread." },
          { tp: "mi moku e kili", en: "I eat fruit." },
          { tp: "moku li pona", en: "Food is good." }
        ]
      },
      {
        title: "jan pona",
        source: "About friendship",
        lines: [
          { tp: "sina jan pona mi", en: "You are my friend." },
          { tp: "mi jan pona sina", en: "I am your friend." },
          { tp: "jan pona li pona", en: "Friends are good." }
        ]
      }
    ]
  },
  tier2: {
    title: "Intermediate",
    icon: "🌿",
    requirement: "Lessons 5–8",
    passages: [
      {
        title: "sike tu li pona",
        source: "Bicycle poem (traditional)",
        lines: [
          { tp: "sike tu li pona", en: "Two wheels are good." },
          { tp: "noka wan li pona", en: "One foot is good." },
          { tp: "noka tu li pona mute", en: "Two feet are very good." },
          { tp: "tawa li pona", en: "Movement is good." }
        ]
      },
      {
        title: "tenpo suno",
        source: "A day in life",
        lines: [
          { tp: "tenpo suno la mi open e lape", en: "In the daytime, I end sleep. (I wake up)" },
          { tp: "mi moku e moku suno", en: "I eat morning food. (breakfast)" },
          { tp: "mi tawa ma pali", en: "I go to the work-place." },
          { tp: "mi pali", en: "I work." },
          { tp: "tenpo pimeja la mi lape", en: "At night, I sleep." }
        ]
      },
      {
        title: "toki pi jan sona",
        source: "Words of wisdom",
        lines: [
          { tp: "jan pi sona mute li toki lili", en: "A person of much knowledge speaks little." },
          { tp: "jan pi toki mute li sona lili", en: "A person of much talking knows little." },
          { tp: "o kama sona", en: "Learn! (Become knowing)" }
        ]
      },
      {
        title: "nasin tawa pi jan Nuton",
        source: "Newton's Laws (adapted)",
        lines: [
          { tp: "ijo awen li awen", en: "A still thing stays still." },
          { tp: "ijo tawa li tawa", en: "A moving thing keeps moving." },
          { tp: "wawa li kama tan wawa", en: "Force comes from force." }
        ]
      }
    ]
  },
  tier3: {
    title: "Advanced",
    icon: "🌳",
    requirement: "All lessons + Bonus",
    passages: [
      {
        title: "ma ante",
        source: "Song about travel",
        lines: [
          { tp: "mi wile tawa ma ante", en: "I want to go to a different land." },
          { tp: "mi wile lukin e ijo sin", en: "I want to see new things." },
          { tp: "ma mi li pona tawa mi", en: "My land is good to me." },
          { tp: "taso mi wile sona e ma ale", en: "But I want to know all lands." }
        ]
      },
      {
        title: "meli pona",
        source: "Love poem",
        lines: [
          { tp: "sina pona lukin", en: "You are beautiful to see." },
          { tp: "sina pona pilin", en: "You are good to feel." },
          { tp: "mi olin e sina", en: "I love you." },
          { tp: "sina suno mi", en: "You are my sun." }
        ]
      },
      {
        title: "tenpo pini la",
        source: "Creation story (excerpt)",
        lines: [
          { tp: "tenpo pini la ma li lon ala", en: "In the past, land did not exist." },
          { tp: "telo taso li lon", en: "Only water existed." },
          { tp: "jan sewi li pali e ma", en: "The divine being made land." },
          { tp: "jan sewi li pali e suno", en: "The divine being made the sun." },
          { tp: "jan sewi li pali e mun", en: "The divine being made the moon." },
          { tp: "jan sewi li pali e jan", en: "The divine being made people." },
          { tp: "ni la ale li lon", en: "Thus, everything exists." }
        ]
      },
      {
        title: "o olin e jan poka",
        source: "Traditional proverb (expanded)",
        lines: [
          { tp: "o olin e jan poka sina", en: "Love your neighbor." },
          { tp: "jan poka sina li sama sina", en: "Your neighbor is like you." },
          { tp: "ona li pilin sama sina", en: "They feel like you." },
          { tp: "ona li wile sama sina", en: "They want like you." },
          { tp: "o pona tawa ona", en: "Be good to them." }
        ]
      }
    ]
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { readingsData };
}
