/**
 * sitelen-pona.js - UCSUR mappings for Sitelen Pona
 * For use with nasin nanpa font
 */

const SitelenPona = (() => {
  // Core vocabulary UCSUR mappings (U+F1900 - U+F1988)
  const words = {
    "a": "\u{F1900}",
    "akesi": "\u{F1901}",
    "ala": "\u{F1902}",
    "alasa": "\u{F1903}",
    "ale": "\u{F1904}",
    "ali": "\u{F1904}",
    "anpa": "\u{F1905}",
    "ante": "\u{F1906}",
    "anu": "\u{F1907}",
    "awen": "\u{F1908}",
    "e": "\u{F1909}",
    "en": "\u{F190A}",
    "esun": "\u{F190B}",
    "ijo": "\u{F190C}",
    "ike": "\u{F190D}",
    "ilo": "\u{F190E}",
    "insa": "\u{F190F}",
    "jaki": "\u{F1910}",
    "jan": "\u{F1911}",
    "jelo": "\u{F1912}",
    "jo": "\u{F1913}",
    "kala": "\u{F1914}",
    "kalama": "\u{F1915}",
    "kama": "\u{F1916}",
    "kasi": "\u{F1917}",
    "ken": "\u{F1918}",
    "kepeken": "\u{F1919}",
    "kili": "\u{F191A}",
    "kiwen": "\u{F191B}",
    "ko": "\u{F191C}",
    "kon": "\u{F191D}",
    "kule": "\u{F191E}",
    "kulupu": "\u{F191F}",
    "kute": "\u{F1920}",
    "la": "\u{F1921}",
    "lape": "\u{F1922}",
    "laso": "\u{F1923}",
    "lawa": "\u{F1924}",
    "len": "\u{F1925}",
    "lete": "\u{F1926}",
    "li": "\u{F1927}",
    "lili": "\u{F1928}",
    "linja": "\u{F1929}",
    "lipu": "\u{F192A}",
    "loje": "\u{F192B}",
    "lon": "\u{F192C}",
    "luka": "\u{F192D}",
    "lukin": "\u{F192E}",
    "lupa": "\u{F192F}",
    "ma": "\u{F1930}",
    "mama": "\u{F1931}",
    "mani": "\u{F1932}",
    "meli": "\u{F1933}",
    "mi": "\u{F1934}",
    "mije": "\u{F1935}",
    "moku": "\u{F1936}",
    "moli": "\u{F1937}",
    "monsi": "\u{F1938}",
    "mu": "\u{F1939}",
    "mun": "\u{F193A}",
    "musi": "\u{F193B}",
    "mute": "\u{F193C}",
    "nanpa": "\u{F193D}",
    "nasa": "\u{F193E}",
    "nasin": "\u{F193F}",
    "nena": "\u{F1940}",
    "ni": "\u{F1941}",
    "nimi": "\u{F1942}",
    "noka": "\u{F1943}",
    "o": "\u{F1944}",
    "olin": "\u{F1945}",
    "ona": "\u{F1946}",
    "open": "\u{F1947}",
    "pakala": "\u{F1948}",
    "pali": "\u{F1949}",
    "palisa": "\u{F194A}",
    "pan": "\u{F194B}",
    "pana": "\u{F194C}",
    "pi": "\u{F194D}",
    "pilin": "\u{F194E}",
    "pimeja": "\u{F194F}",
    "pini": "\u{F1950}",
    "pipi": "\u{F1951}",
    "poka": "\u{F1952}",
    "poki": "\u{F1953}",
    "pona": "\u{F1954}",
    "pu": "\u{F1955}",
    "sama": "\u{F1956}",
    "seli": "\u{F1957}",
    "selo": "\u{F1958}",
    "seme": "\u{F1959}",
    "sewi": "\u{F195A}",
    "sijelo": "\u{F195B}",
    "sike": "\u{F195C}",
    "sin": "\u{F195D}",
    "sina": "\u{F195E}",
    "sinpin": "\u{F195F}",
    "sitelen": "\u{F1960}",
    "sona": "\u{F1961}",
    "soweli": "\u{F1962}",
    "suli": "\u{F1963}",
    "suno": "\u{F1964}",
    "supa": "\u{F1965}",
    "suwi": "\u{F1966}",
    "tan": "\u{F1967}",
    "taso": "\u{F1968}",
    "tawa": "\u{F1969}",
    "telo": "\u{F196A}",
    "tenpo": "\u{F196B}",
    "toki": "\u{F196C}",
    "tomo": "\u{F196D}",
    "tu": "\u{F196E}",
    "unpa": "\u{F196F}",
    "uta": "\u{F1970}",
    "utala": "\u{F1971}",
    "walo": "\u{F1972}",
    "wan": "\u{F1973}",
    "waso": "\u{F1974}",
    "wawa": "\u{F1975}",
    "weka": "\u{F1976}",
    "wile": "\u{F1977}",
    // nimi ku suli
    "namako": "\u{F1978}",
    "kin": "\u{F1979}",
    "oko": "\u{F197A}",
    "kipisi": "\u{F197B}",
    "leko": "\u{F197C}",
    "monsuta": "\u{F197D}",
    "tonsi": "\u{F197E}",
    "jasima": "\u{F197F}",
    "kijetesantakalu": "\u{F1980}",
    "soko": "\u{F1981}",
    "meso": "\u{F1982}",
    "epiku": "\u{F1983}",
    "kokosila": "\u{F1984}",
    "lanpan": "\u{F1985}",
    "n": "\u{F1986}",
    "misikeke": "\u{F1987}",
    "ku": "\u{F1988}",
    // nimi ku lili and beyond
    "pake": "\u{F19A0}",
    "apeja": "\u{F19A1}",
    "majuna": "\u{F19A2}",
    "powe": "\u{F19A3}",
    "linluwi": "\u{F19A4}",
    "kiki": "\u{F19A5}",
    "su": "\u{F19A6}",
    "majuna": "\u{F19A2}",
    "wa": "\u{F19B8}",
  };

  // Definitions for all words
  const definitions = {
    "a": "emphasis, emotion, confirmation",
    "akesi": "reptile, amphibian, scaly creature",
    "ala": "no, not, zero, nothing",
    "alasa": "hunt, search, forage, try",
    "ale": "all, every, universe, 100",
    "ali": "all, every, universe, 100",
    "anpa": "down, below, humble, dependent",
    "ante": "different, changed, other",
    "anu": "or (conjunction)",
    "awen": "stay, wait, keep, protect",
    "e": "(object marker)",
    "en": "and (between subjects)",
    "esun": "shop, trade, market, transaction",
    "ijo": "thing, object, matter",
    "ike": "bad, negative, complex, unnecessary",
    "ilo": "tool, device, machine",
    "insa": "inside, center, stomach, internal",
    "jaki": "dirty, gross, garbage, toxic",
    "jan": "person, human, someone",
    "jelo": "yellow, golden, lime",
    "jo": "have, hold, carry, contain",
    "kala": "fish, sea creature",
    "kalama": "sound, noise, voice",
    "kama": "come, arrive, become, future",
    "kasi": "plant, tree, leaf, herb",
    "ken": "can, able, possible, permission",
    "kepeken": "use, using, with (tool)",
    "kili": "fruit, vegetable, mushroom",
    "kiwen": "hard, stone, metal, solid",
    "ko": "paste, powder, semi-solid",
    "kon": "air, breath, spirit, essence",
    "kule": "color, colorful, paint",
    "kulupu": "group, community, society",
    "kute": "ear, hear, listen, obey",
    "la": "(context marker)",
    "lape": "sleep, rest, relax",
    "laso": "blue, green, cyan",
    "lawa": "head, mind, lead, control",
    "len": "cloth, clothing, fabric, cover",
    "lete": "cold, cool, raw, uncooked",
    "li": "(predicate marker)",
    "lili": "small, little, few, young",
    "linja": "line, string, hair, rope",
    "lipu": "paper, book, document, flat surface",
    "loje": "red, reddish",
    "lon": "at, in, on, true, exist",
    "luka": "hand, arm, five",
    "lukin": "eye, see, look, watch, read",
    "lupa": "hole, door, window, opening",
    "ma": "land, place, country, earth",
    "mama": "parent, ancestor, creator",
    "mani": "money, wealth, currency",
    "meli": "woman, female, feminine",
    "mi": "I, me, we, us",
    "mije": "man, male, masculine",
    "moku": "eat, drink, food, consume",
    "moli": "death, dead, dying, kill",
    "monsi": "back, behind, rear",
    "mu": "animal sound, moo, meow",
    "mun": "moon, star, night sky object",
    "musi": "fun, play, game, art, entertainment",
    "mute": "many, much, more, very, quantity",
    "nanpa": "number, ordinal, rank",
    "nasa": "strange, unusual, weird, drunk",
    "nasin": "way, path, method, road",
    "nena": "bump, hill, nose, mountain",
    "ni": "this, that",
    "nimi": "name, word",
    "noka": "foot, leg, lower part",
    "o": "(vocative/imperative marker)",
    "olin": "love, compassion, affection",
    "ona": "they, them, he, she, it",
    "open": "open, begin, start, turn on",
    "pakala": "broken, mistake, damage, accident",
    "pali": "do, make, work, build",
    "palisa": "stick, rod, long hard thing",
    "pan": "bread, grain, cereal",
    "pana": "give, send, emit, provide",
    "pi": "(regrouping particle)",
    "pilin": "feel, emotion, heart, sense",
    "pimeja": "black, dark, shadow",
    "pini": "end, finish, past, completed",
    "pipi": "bug, insect, spider",
    "poka": "side, hip, nearby",
    "poki": "container, box, bowl, cup",
    "pona": "good, simple, positive, friendly",
    "pu": "the Toki Pona book",
    "sama": "same, similar, equal, like",
    "seli": "fire, heat, hot, warm",
    "selo": "skin, surface, outer layer",
    "seme": "what? which? (question word)",
    "sewi": "up, above, divine, sacred",
    "sijelo": "body, torso, physical state",
    "sike": "circle, ball, cycle, round",
    "sin": "new, fresh, additional",
    "sina": "you",
    "sinpin": "face, front, wall",
    "sitelen": "image, picture, symbol, write",
    "sona": "know, knowledge, wisdom",
    "soweli": "animal, mammal, land creature",
    "suli": "big, large, important, adult",
    "suno": "sun, light, brightness, day",
    "supa": "surface, table, floor, bed",
    "suwi": "sweet, cute, adorable",
    "tan": "from, because, origin, cause",
    "taso": "but, only, however",
    "tawa": "to, toward, move, for",
    "telo": "water, liquid, fluid, beverage",
    "tenpo": "time, moment, period",
    "toki": "speak, language, say, communicate",
    "tomo": "house, building, room, structure",
    "tu": "two, split, divide",
    "unpa": "sex, sexual",
    "uta": "mouth, lips, oral",
    "utala": "fight, battle, conflict, compete",
    "walo": "white, pale, light-colored",
    "wan": "one, single, united",
    "waso": "bird, flying creature",
    "wawa": "power, strong, energy, intense",
    "weka": "away, remove, absent, gone",
    "wile": "want, need, must, desire",
    // nimi ku suli
    "namako": "extra, spice, additional",
    "kin": "also, too, indeed",
    "oko": "eye (alternate for lukin)",
    "kipisi": "cut, split, slice",
    "leko": "square, block, stairs",
    "monsuta": "fear, monster, scary",
    "tonsi": "non-binary, trans, gender-nonconforming",
    "jasima": "mirror, reflect, opposite",
    "kijetesantakalu": "raccoon, procyonid",
    "soko": "mushroom, fungus",
    "meso": "middle, medium, average",
    "epiku": "epic, awesome, cool",
    "kokosila": "speak non-toki-pona in a toki pona setting",
    "lanpan": "take, seize, grab",
    "n": "hmm, um, thinking sound",
    "misikeke": "medicine, medical",
    "ku": "the Toki Pona Dictionary",
    // nimi ku lili
    "pake": "block, prevent, stop",
    "apeja": "shame, guilt",
    "majuna": "old, aged",
    "powe": "false, untrue, trick",
    "linluwi": "internet, network",
    "kiki": "spiky, sharp, angle",
    "su": "the Toki Pona picture book",
    "majuna": "old, aged, ancient",
    "wa": "wow! (exclamation)",
  };

  // Control characters for combining glyphs
  const ctrl = {
    stack: "\u{F1995}",
    scale: "\u{F1996}",
    cartStart: "\u{F1990}",
    cartEnd: "\u{F1991}",
    cartExt: "\u{F1992}",
    longPiStart: "\u{F1993}",
    longPiExt: "\u{F1994}",
    longStart: "\u{F1997}",
    longEnd: "\u{F1998}",
    longExt: "\u{F1999}",
    dot: "\u{F199C}",
    colon: "\u{F199D}",
    zwj: "\u200D",
  };

  // Common compounds
  const compounds = {
    "toki pona": ["toki", "pona"],
    "jan pona": ["jan", "pona"],
    "tomo tawa": ["tomo", "tawa"],
    "ilo moku": ["ilo", "moku"],
    "telo nasa": ["telo", "nasa"],
    "jan lawa": ["jan", "lawa"],
    "ma tomo": ["ma", "tomo"],
    "sitelen pona": ["sitelen", "pona"],
    "kama sona": ["kama", "sona"],
    "tomo telo": ["tomo", "telo"],
    "jan mute": ["jan", "mute"],
    "tenpo pini": ["tenpo", "pini"],
    "tenpo kama": ["tenpo", "kama"],
    "tenpo ni": ["tenpo", "ni"],
    "ma mama": ["ma", "mama"],
    "jan sama": ["jan", "sama"],
    "ijo mute": ["ijo", "mute"],
    "sona mute": ["sona", "mute"],
  };

  function wordToGlyph(word) {
    return words[word.toLowerCase()] || word;
  }

  function getDefinition(word) {
    return definitions[word.toLowerCase()] || null;
  }

  function stack(head, ...modifiers) {
    let result = wordToGlyph(head);
    for (const mod of modifiers) {
      result += ctrl.stack + wordToGlyph(mod);
    }
    return result;
  }

  function scale(head, modifier) {
    return wordToGlyph(head) + ctrl.scale + wordToGlyph(modifier);
  }

  function cartouche(text) {
    const glyphs = text.split(/\s+/).map(wordToGlyph).join('');
    return ctrl.cartStart + glyphs + ctrl.cartEnd;
  }

  function convert(text, options = {}) {
    const { useCompounds = false } = options;
    
    if (useCompounds) {
      let result = text.toLowerCase();
      const sortedCompounds = Object.keys(compounds).sort((a, b) => b.length - a.length);
      
      for (const phrase of sortedCompounds) {
        const parts = compounds[phrase];
        const stacked = stack(...parts);
        const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
        result = result.replace(regex, stacked);
      }
      
      return result.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        if (/[\u{F1900}-\u{F19FF}]/u.test(part)) return part;
        return wordToGlyph(part);
      }).join('');
    }
    
    return text.split(/\s+/).map(w => wordToGlyph(w)).join(' ');
  }

  function hasWord(word) {
    return word.toLowerCase() in words;
  }

  function getVocabulary() {
    return Object.keys(words);
  }

  return {
    words,
    definitions,
    ctrl,
    compounds,
    convert,
    wordToGlyph,
    getDefinition,
    stack,
    scale,
    cartouche,
    hasWord,
    getVocabulary,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SitelenPona;
}
