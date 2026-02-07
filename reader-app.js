/**
 * reader-app.js - Main application logic for the toki pona graded reader
 * 
 * Updated to support both simple and expanded lesson formats.
 * v2: Click-to-reveal for all exercises (no typing required)
 */

// Combine all lessons into one array
const lessons = [
  ...lessonsData,
  { id: 'reading', type: 'reading', title: "📚 Reading", desc: "Practice with longer texts" },
  { id: 'proverbs', type: 'proverbs', title: "✨ Proverbs", desc: "Traditional wisdom" },
  ...bonusLessonsData
];

// App state
let currentLesson = 1;
let showLatin = true;
let showEnglish = false;
let useCompounds = false;

// ============ Progress Tracking ============

const STORAGE_KEY = 'tokiPonaProgress';

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completed: [], visited: [] };
  } catch (e) {
    return { completed: [], visited: [] };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

function markVisited(lessonId) {
  const progress = loadProgress();
  const id = String(lessonId);
  if (!progress.visited.includes(id)) {
    progress.visited.push(id);
    saveProgress(progress);
  }
}

function markCompleted(lessonId) {
  const progress = loadProgress();
  const id = String(lessonId);
  if (!progress.completed.includes(id)) {
    progress.completed.push(id);
    saveProgress(progress);
    renderNav();
    updateProgressBar();
    showCompletionToast(lessonId);
  }
}

function isCompleted(lessonId) {
  const progress = loadProgress();
  return progress.completed.includes(String(lessonId));
}

function isVisited(lessonId) {
  const progress = loadProgress();
  return progress.visited.includes(String(lessonId));
}

function getProgressStats() {
  const progress = loadProgress();
  const lessonCount = 18; // All 18 lessons
  
  const lessonsCompleted = progress.completed.filter(id => {
    const num = parseInt(id);
    return !isNaN(num) && num >= 1 && num <= lessonCount;
  }).length;
  
  const readingDone = progress.completed.includes('reading');
  const proverbsDone = progress.completed.includes('proverbs');
  
  return {
    lessonsCompleted,
    lessonsTotal: lessonCount,
    // Keep these for backward compatibility with progress bar rendering
    coreCompleted: lessonsCompleted,
    coreTotal: lessonCount,
    bonusCompleted: 0,
    bonusTotal: 0,
    totalCompleted: lessonsCompleted + (readingDone ? 1 : 0) + (proverbsDone ? 1 : 0),
    totalSections: lessonCount + 2, // lessons + reading + proverbs
    readingDone,
    proverbsDone,
    allLessonsDone: lessonsCompleted === lessonCount
  };
}

function resetProgress() {
  if (confirm('sina wile ala wile e ni? — Reset all progress?')) {
    localStorage.removeItem(STORAGE_KEY);
    renderNav();
    updateProgressBar();
    renderLesson();
  }
}

// ============ Display Preferences ============

const DISPLAY_PREFS_KEY = 'tokiPonaDisplayPrefs';

function loadDisplayPreferences() {
  try {
    const saved = localStorage.getItem(DISPLAY_PREFS_KEY);
    if (saved) {
      const prefs = JSON.parse(saved);
      return {
        showLatin: prefs.showLatin !== undefined ? prefs.showLatin : true,
        showEnglish: prefs.showEnglish !== undefined ? prefs.showEnglish : false,
        useCompounds: prefs.useCompounds !== undefined ? prefs.useCompounds : false
      };
    }
  } catch (e) {
    console.warn('Could not load display preferences:', e);
  }
  // Default values
  return { showLatin: true, showEnglish: false, useCompounds: false };
}

function saveDisplayPreferences() {
  try {
    localStorage.setItem(DISPLAY_PREFS_KEY, JSON.stringify({
      showLatin,
      showEnglish,
      useCompounds
    }));
  } catch (e) {
    console.warn('Could not save display preferences:', e);
  }
}

function initializeDisplayModes() {
  // Load saved preferences
  const prefs = loadDisplayPreferences();
  showLatin = prefs.showLatin;
  showEnglish = prefs.showEnglish;
  useCompounds = prefs.useCompounds;
  
  // Set checkbox states to match
  document.getElementById('showLatin').checked = showLatin;
  document.getElementById('showEnglish').checked = showEnglish;
  document.getElementById('useCompounds').checked = useCompounds;
  
  // Apply body classes based on current state
  document.body.classList.toggle('show-latin', showLatin);
  document.body.classList.toggle('show-english', showEnglish);
}

function showCompletionToast(lessonId) {
  const toast = document.createElement('div');
  toast.className = 'completion-toast';
  
  const stats = getProgressStats();
  let message = '✓ pini! — Completed!';
  
  if (stats.allLessonsDone && lessonId === 18) {
    message = '🎉 sina sona e toki pona! — You learned toki pona!';
  } else if (stats.totalCompleted === stats.totalSections) {
    message = '🏆 sina sona e ale! — You completed everything!';
  }
  
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// DOM elements
const tooltip = document.getElementById('tooltip');
const tipWord = tooltip.querySelector('.tip-word');
const tipGlyph = tooltip.querySelector('.tip-glyph');
const tipDef = tooltip.querySelector('.tip-def');

// ============ Rendering Helpers ============

function toSP(text) {
  return SitelenPona.convert(text, { useCompounds });
}

function renderSentence(text) {
  const words = text.split(/\s+/);
  return words.map(word => {
    const glyph = SitelenPona.wordToGlyph(word);
    const def = SitelenPona.getDefinition(word);
    if (def) {
      return `<span class="sp-word" data-word="${word}" data-glyph="${glyph}" data-def="${def}">${glyph}</span>`;
    }
    return `<span class="sp-word">${glyph}</span>`;
  }).join(' ');
}

function renderSentenceCompound(text) {
  const result = [];
  const words = text.toLowerCase().split(/\s+/);
  let i = 0;
  
  while (i < words.length) {
    if (i < words.length - 1) {
      const twoWord = words[i] + ' ' + words[i + 1];
      if (SitelenPona.compounds[twoWord]) {
        const parts = SitelenPona.compounds[twoWord];
        const glyph = SitelenPona.stack(...parts);
        const def1 = SitelenPona.getDefinition(parts[0]);
        const def2 = SitelenPona.getDefinition(parts[1]);
        result.push(`<span class="sp-word" data-word="${twoWord}" data-glyph="${glyph}" data-def="${parts[0]}: ${def1} + ${parts[1]}: ${def2}">${glyph}</span>`);
        i += 2;
        continue;
      }
    }
    
    const word = words[i];
    const glyph = SitelenPona.wordToGlyph(word);
    const def = SitelenPona.getDefinition(word);
    if (def) {
      result.push(`<span class="sp-word" data-word="${word}" data-glyph="${glyph}" data-def="${def}">${glyph}</span>`);
    } else {
      result.push(`<span class="sp-word">${glyph}</span>`);
    }
    i++;
  }
  
  return result.join(' ');
}

// ============ Navigation ============

function renderNav() {
  const nav = document.getElementById('levels');
  
  nav.innerHTML = lessons.filter(l => l.type !== 'reading' && l.type !== 'proverbs').map((l, i) => {
    const isActive = l.id === currentLesson;
    const completed = isCompleted(l.id);
    const classes = [
      isActive ? 'active' : '', 
      completed ? 'completed' : ''
    ].filter(Boolean).join(' ');
    const badge = completed ? '<span class="badge">✓</span>' : '';
    return `<button data-id="${l.id}" class="${classes}">${l.id}${badge}</button>`;
  }).join('');
  
  const isReadingActive = currentLesson === 'reading';
  const readingCompleted = isCompleted('reading');
  const readingBadge = readingCompleted ? '<span class="badge">✓</span>' : '';
  nav.innerHTML += `<button data-id="reading" class="reading ${isReadingActive ? 'active' : ''} ${readingCompleted ? 'completed' : ''}">Reading${readingBadge}</button>`;
  
  const isProverbsActive = currentLesson === 'proverbs';
  const proverbsCompleted = isCompleted('proverbs');
  const proverbsBadge = proverbsCompleted ? '<span class="badge">✓</span>' : '';
  nav.innerHTML += `<button data-id="proverbs" class="reading ${isProverbsActive ? 'active' : ''} ${proverbsCompleted ? 'completed' : ''}">Proverbs${proverbsBadge}</button>`;
}

// ============ Grammar Section ============

function renderGrammar(grammar) {
  if (!grammar) return '';
  return `
    <div class="grammar-section">
      <button class="grammar-toggle" onclick="this.parentElement.classList.toggle('open')">
        <span class="label">
          <span class="icon">📖</span>
          Grammar Notes
        </span>
        <span class="arrow">▼</span>
      </button>
      <div class="grammar-content">
        <p class="grammar-summary">${grammar.summary}</p>
        <ul class="grammar-points">
          ${grammar.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// ============ Reading Section ============

function renderReadingPassage(passage) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="passage-card">
      <div class="always-visible passage-title">${passage.title}</div>
      <div class="always-visible passage-meta">${passage.source}</div>
      ${passage.lines.map(line => `
        <div class="line flashcard" onclick="this.classList.toggle('flipped'); event.stopPropagation()">
          <div class="sp-content sp-passage">${renderFn(line.tp)}</div>
          <div class="tp-latin">${line.tp}</div>
          <div class="tp-english">${line.en}</div>
          <p class="flip-hint">tap to reveal</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderReadingSection() {
  const content = document.getElementById('content');
  const completed = isCompleted('reading');
  
  content.innerHTML = `
    <h2 class="lesson-title">
      📚 Reading Practice
      ${completed ? '<span class="title-badge">✓ pini</span>' : ''}
    </h2>
    <p class="lesson-desc">Longer texts to practice comprehension</p>
    
    <div class="reading-intro">
      <h3>How to use this section</h3>
      <p>These passages are organized by difficulty. Start with Tier 1 after completing lessons 1–4, then progress as you learn more. Hover over sitelen pona glyphs to see definitions. Toggle the text/translations above to test yourself!</p>
    </div>
    
    ${Object.entries(readingsData).map(([key, tier]) => `
      <div class="tier-section">
        <div class="tier-header">
          <span class="tier-icon">${tier.icon}</span>
          <span class="tier-title">${tier.title}</span>
          <span class="tier-req">${tier.requirement}</span>
        </div>
        ${tier.passages.map(p => renderReadingPassage(p)).join('')}
      </div>
    `).join('')}
    
    <div class="lesson-actions">
      ${completed 
        ? '<div class="completed-message">✓ sina pini e ni! — You completed this section!</div>'
        : '<button class="complete-btn" onclick="markCompleted(\'reading\'); renderLesson();">pini — Mark Complete</button>'
      }
    </div>
  `;
}

// ============ Proverbs Section ============

function getRandomProverb() {
  const allProverbs = proverbsData.categories.flatMap(cat => 
    cat.proverbs.map(p => ({ ...p, category: cat.title }))
  );
  return allProverbs[Math.floor(Math.random() * allProverbs.length)];
}

function renderProverbCard(proverb) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  const translation = proverb.note || proverb.en;
  
  return `
    <div class="sp-content sp-proverb">${renderFn(proverb.tp)}</div>
    <div class="tp-latin">${proverb.tp}</div>
    <div class="tp-english">${translation}</div>
  `;
}

function renderProverbsSection() {
  const content = document.getElementById('content');
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  const randomProverb = getRandomProverb();
  const completed = isCompleted('proverbs');
  
  content.innerHTML = `
    <h2 class="lesson-title">
      ✨ toki sona — Proverbs
      ${completed ? '<span class="title-badge">✓ pini</span>' : ''}
    </h2>
    <p class="lesson-desc">Traditional wisdom in toki pona</p>
    
    <div class="random-proverb-section">
      <h3>toki sona pi tenpo ni — Proverb of the Moment</h3>
      <div id="random-proverb">
        ${renderProverbCard(randomProverb)}
      </div>
      <button class="new-proverb-btn" onclick="refreshRandomProverb()">sin — another</button>
    </div>
    
    ${proverbsData.categories.map(cat => `
      <div class="proverb-category">
        <div class="category-header">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-title">${renderFn(cat.title)}</span>
          <span class="cat-title-en">${cat.titleEn}</span>
        </div>
        ${cat.proverbs.map(p => `
          <div class="proverb-card">
            ${renderProverbCard(p)}
          </div>
        `).join('')}
      </div>
    `).join('')}
    
    <div class="lesson-actions">
      ${completed 
        ? '<div class="completed-message">✓ sina pini e ni! — You completed this section!</div>'
        : '<button class="complete-btn" onclick="markCompleted(\'proverbs\'); renderLesson();">pini — Mark Complete</button>'
      }
    </div>
  `;
}

function refreshRandomProverb() {
  const proverb = getRandomProverb();
  document.getElementById('random-proverb').innerHTML = renderProverbCard(proverb, true);
}

// ============ EXPANDED LESSON RENDERING ============

function formatRoleName(role) {
  const names = {
    personalPronoun: 'pronoun',
    possessivePronoun: 'possessive',
    reflexivePronoun: 'reflexive',
    adjective: 'adjective',
    adverb: 'adverb',
    noun: 'noun',
    verbTransitive: 'verb (trans.)',
    verbIntransitive: 'verb (intrans.)',
    interjection: 'interjection',
    asSubject: 'as subject',
    asPossessive: 'as possessive',
    asReflexive: 'as reflexive'
  };
  return names[role] || role;
}

function renderExpandedVocab(vocab) {
  return vocab.map(v => `
    <div class="vocab-card-expanded">
      <div class="vocab-header">
        <span class="sp-content sp-glyph-large">${toSP(v.word)}</span>
        <div class="vocab-title-block">
          <div class="vocab-word-always">${v.word}</div>
          <div class="always-visible vocab-primary">${v.primaryMeaning}</div>
        </div>
      </div>
      
      <div class="always-visible vocab-roles">
        ${Object.entries(v.roles).map(([role, meaning]) => `
          <div class="role-item">
            <span class="role-tag">${formatRoleName(role)}</span>
            <span class="role-meaning">${meaning}</span>
          </div>
        `).join('')}
      </div>
      
      ${v.notes ? `<div class="always-visible vocab-notes">💡 ${v.notes}</div>` : ''}
      
      ${v.compounds ? `
        <div class="vocab-compounds">
          ${v.compounds.map(c => `
            <span class="compound-chip">
              <span class="always-visible compound-tp">${c.tp}</span>
              <span class="always-visible compound-en">${c.en}</span>
            </span>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function renderCategorizedSentences(sentences, renderFn) {
  // Dynamic category definitions - add new ones as needed
  const categoryMeta = {
    basic: { title: 'Basic', icon: '📝' },
    asAdjective: { title: 'Adjective', icon: '🏷️' },
    asAdverb: { title: 'Adverb', icon: '⚡' },
    asNoun: { title: 'Noun', icon: '📦' },
    withPossession: { title: 'Possessive', icon: '👤' },
    ambiguous: { title: 'Ambiguous', icon: '🤔' },
    contrasts: { title: 'Contrasts', icon: '⚖️' },
    withModifiedSubjects: { title: 'Modified Subjects', icon: '📐' },
    multiplePredicates: { title: 'Multiple Predicates', icon: '🔗' },
    niExamples: { title: 'With ni', icon: '👆' },
    // Lesson 4 categories
    clarifyingAmbiguity: { title: 'Clarifying', icon: '💡' },
    multipleObjects: { title: 'Multiple Objects', icon: '📦📦' },
    reflexive: { title: 'Reflexive', icon: '🪞' },
    withWile: { title: 'With wile', icon: '💭' },
    withCompoundObjects: { title: 'Compound Objects', icon: '🧩' },
    combinedLiAndE: { title: 'Combined li & e', icon: '🔀' },
    // Lesson 3 categories (mute)
    muteAsIntensifier: { title: 'mute as "very"', icon: '💪' },
    muteLiPattern: { title: 'mi/sina mute + li', icon: '👥' },
    // Lesson 5 categories (time/celestial)
    timeExpressions: { title: 'Time Expressions', icon: '⏰' },
    celestialBodies: { title: 'Sun & Moon', icon: '🌙' },
    // Lesson 6 categories
    tawaAsPreposition: { title: 'tawa (prep)', icon: '➡️' },
    tawaAsVerb: { title: 'tawa (verb)', icon: '🚶' },
    lonAsPreposition: { title: 'lon (prep)', icon: '📍' },
    lonAsVerb: { title: 'lon (verb)', icon: '✨' },
    kepekenExamples: { title: 'kepeken', icon: '🔧' },
    kepekenAsVerb: { title: 'kepeken (verb)', icon: '🛠️' },
    tanExamples: { title: 'tan', icon: '↩️' },
    opinionPattern: { title: 'Opinions', icon: '💭' },
    multiplePrepositions: { title: 'Multiple Preps', icon: '🔗' },
    samaExamples: { title: 'sama', icon: '🟰' }
  };
  
  // Build categories array from what exists in the sentences object
  const categories = Object.keys(sentences)
    .filter(key => sentences[key] && sentences[key].length > 0)
    .map(key => ({
      key,
      title: categoryMeta[key]?.title || key,
      icon: categoryMeta[key]?.icon || '📋'
    }));
  
  return `
    <div class="sentence-categories">
      <div class="category-tabs">
        ${categories.map((c, i) => `
          <button class="cat-tab ${i === 0 ? 'active' : ''}" data-category="${c.key}">
            <span class="tab-icon">${c.icon}</span>
            <span class="tab-label">${c.title}</span>
          </button>
        `).join('')}
      </div>
      
      <div class="category-content">
        ${categories.map((c, i) => `
          <div class="cat-panel ${i === 0 ? 'active' : ''}" data-category="${c.key}">
            ${c.key === 'ambiguous' 
              ? renderAmbiguousSentences(sentences[c.key], renderFn)
              : renderSentenceList(sentences[c.key], renderFn)
            }
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSentenceList(sentenceList, renderFn) {
  return `<div class="sentence-grid">${sentenceList.map(s => `
    <div class="sentence-card-expanded flashcard" onclick="this.classList.toggle('flipped')">
      <div class="card-front">
        <div class="sp-content sp-sentence">${renderFn(s.tp)}</div>
        <div class="tp-latin sentence-latin">${s.tp}</div>
        ${s.gloss ? `<div class="always-visible sentence-gloss">${s.gloss}</div>` : ''}
        <div class="flip-hint">tap to reveal</div>
      </div>
      <div class="card-back">
        <div class="tp-english sentence-english">${s.en}</div>
        ${s.note ? `<div class="always-visible sentence-note">💡 ${s.note}</div>` : ''}
      </div>
    </div>
  `).join('')}</div>`;
}

function renderAmbiguousSentences(sentenceList, renderFn) {
  return `<div class="sentence-grid">${sentenceList.map(s => `
    <div class="sentence-card-ambiguous flashcard" onclick="this.classList.toggle('flipped')">
      <div class="card-front">
        <div class="sp-content sp-sentence">${renderFn(s.tp)}</div>
        <div class="tp-latin sentence-latin">${s.tp}</div>
        <div class="always-visible ambig-prompt">How many meanings?</div>
        <div class="flip-hint">tap to reveal</div>
      </div>
      <div class="card-back">
        <div class="tp-english meanings-list">
          ${s.meanings.map((m, i) => `<div class="meaning-item">${i + 1}. ${m}</div>`).join('')}
        </div>
        <div class="tp-english likely-meaning">
          <strong>Most likely:</strong> ${s.likely}
        </div>
        ${s.note ? `<div class="always-visible sentence-note">💡 ${s.note}</div>` : ''}
      </div>
    </div>
  `).join('')}</div>`;
}

function renderPracticeSection(practice) {
  return `
    <div class="practice-section-expanded">
      ${practice.map((exercise, i) => renderExercise(exercise, i)).join('')}
    </div>
  `;
}

function renderExercise(exercise, index) {
  switch(exercise.type) {
    case 'roleIdentification':
      return renderRoleIdentification(exercise, index);
    case 'translationVariation':
      return renderTranslationVariation(exercise, index);
    case 'sentenceBuilding':
      return renderSentenceBuilding(exercise, index);
    case 'disambiguation':
      return renderDisambiguation(exercise, index);
    case 'fillBlank':
      return renderFillBlank(exercise, index);
    case 'trueFalse':
      return renderTrueFalse(exercise, index);
    case 'transformSentence':
      return renderTransformSentence(exercise, index);
    case 'opposites':
      return renderOpposites(exercise, index);
    case 'compoundVsSentence':
      return renderCompoundVsSentence(exercise, index);
    // Lesson 9 (pi) exercise types
    case 'piNeeded':
      return renderPiNeeded(exercise, index);
    case 'meaningDifference':
      return renderMeaningDifference(exercise, index);
    case 'translateToPi':
      return renderTranslateToPi(exercise, index);
    case 'errorCorrection':
      return renderErrorCorrection(exercise, index);
    // Lesson 10 (la) exercise types
    case 'laUsage':
      return renderLaUsage(exercise, index);
    case 'translateLa':
      return renderTranslateLa(exercise, index);
    case 'tasoPosition':
      return renderTasoPosition(exercise, index);
    case 'timePhrases':
      return renderTimePhrases(exercise, index);
    // Lesson 11 (seme) exercise types
    case 'semePosition':
      return renderSemePosition(exercise, index);
    case 'translateQuestion':
      return renderTranslateQuestion(exercise, index);
    case 'answerQuestion':
      return renderAnswerQuestion(exercise, index);
    case 'questionType':
      return renderQuestionType(exercise, index);
    case 'numberPractice':
      return renderNumberPractice(exercise, index);
    // Lesson 12 (o) exercise types
    case 'commandType':
      return renderCommandType(exercise, index);
    case 'translateCommand':
      return renderTranslateCommand(exercise, index);
    case 'oPosition':
      return renderOPosition(exercise, index);
    case 'enUsage':
      return renderEnUsage(exercise, index);
    // Lesson 5 exercise types
    case 'wordOrderCorrection':
      return renderWordOrderCorrection(exercise, index);
    case 'modifierOrderMeaning':
      return renderModifierOrderMeaning(exercise, index);
    case 'compoundCreation':
      return renderCompoundCreation(exercise, index);
    case 'timeMatching':
      return renderTimeMatching(exercise, index);
    // Lesson 6 exercise types
    case 'prepositionChoice':
      return renderPrepositionChoice(exercise, index);
    case 'opinionPattern':
      return renderOpinionPattern(exercise, index);
    // Generic exercise types that can be handled by generic renderers
    case 'commandFormation':
    case 'addressFormation':
    case 'translate':
    case 'oType':
    case 'negationPlacement':
    case 'formQuestion':
    case 'identifyMeaning':
    case 'questionOrStatement':
      return renderGenericExercise(exercise, index);
    default:
      console.warn('Unknown exercise type:', exercise.type);
      return renderGenericExercise(exercise, index);
  }
}

// Generic fallback renderer for unknown exercise types
function renderGenericExercise(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📝 Exercise</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction || 'Complete the exercise:'}</p>
      <div class="generic-exercise">
        ${exercise.questions ? exercise.questions.map((q, qi) => {
          // Handle various question formats
          const questionText = q.tp || q.question || q.en || q.person || q.statement || '';
          const hintText = q.hint || q.context || q.scenario || q.greeting || q.command || '';
          const answerText = q.answer || (typeof q.correct === 'string' ? q.correct : (typeof q.correct === 'number' && q.options ? q.options[q.correct] : '')) || '';
          const explanationText = q.explanation || '';
          const hasTp = q.tp;
          
          // For multiple choice questions with options
          if (q.options && Array.isArray(q.options)) {
            const correctIndex = typeof q.correct === 'number' ? q.correct : -1;
            return `
              <div class="generic-mc-card" data-correct="${correctIndex}">
                ${hasTp ? `
                  <div class="sp-content generic-question-sp">${renderFn(questionText)}</div>
                  <div class="tp-latin generic-question-text">${questionText}</div>
                ` : `
                  <div class="always-visible generic-question-text">${questionText}</div>
                `}
                ${hintText ? `<div class="always-visible generic-hint">💡 ${hintText}</div>` : ''}
                <div class="generic-options">
                  ${q.options.map((opt, oi) => `
                    <button class="generic-option-btn" data-value="${oi}">${opt}</button>
                  `).join('')}
                </div>
                <div class="generic-feedback hidden">
                  <div class="generic-result"></div>
                  ${explanationText ? `<div class="always-visible generic-explanation">💡 ${explanationText}</div>` : ''}
                </div>
              </div>
            `;
          }
          
          // For flashcard-style questions
          return `
            <div class="generic-question flashcard" onclick="this.classList.toggle('flipped')">
              <div class="card-front">
                ${hasTp ? `
                  <div class="sp-content question-sp">${renderFn(questionText)}</div>
                  <div class="tp-latin question-text">${questionText}</div>
                ` : `
                  <div class="always-visible question-text">${questionText || JSON.stringify(q)}</div>
                `}
                ${hintText ? `<div class="always-visible generic-hint">💡 ${hintText}</div>` : ''}
                <div class="flip-hint">tap to reveal</div>
              </div>
              <div class="card-back">
                <div class="tp-english answer-text">${answerText || 'See answer'}</div>
                ${explanationText ? `<div class="always-visible explanation">💡 ${explanationText}</div>` : ''}
              </div>
            </div>
          `;
        }).join('') : '<p>No questions available.</p>'}
      </div>
    </div>
  `;
}

function renderOpposites(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">↔️ Opposites</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="opposites-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="opposites-card-v2" onclick="this.classList.toggle('revealed')">
            <div class="opposites-row">
              <div class="opposite-side opposite-given-side">
                <div class="sp-content opposite-sp">${renderFn(q.given)}</div>
                <div class="tp-latin opposite-latin">${q.given}</div>
                <div class="tp-english opposite-en">${q.en}</div>
              </div>
              <div class="opposite-divider">
                <span class="divider-slash">/</span>
              </div>
              <div class="opposite-side opposite-answer-side">
                <div class="sp-content opposite-sp reveal-content">${renderFn(q.opposite)}</div>
                <div class="tp-latin opposite-latin reveal-content">${q.opposite}</div>
                <div class="tp-english opposite-en reveal-content">${q.oppositeEn}</div>
                <div class="opposite-placeholder">?</div>
              </div>
            </div>
            <div class="always-visible opposite-hint">tap to reveal opposite</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCompoundVsSentence(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔍 Compound vs Sentence</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="cvs-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="cvs-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="sp-content cvs-sp">${renderFn(q.tp)}</div>
              <div class="tp-latin cvs-sentence">${q.tp}</div>
              <div class="always-visible cvs-prompt">Compound or sentence?</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="always-visible cvs-answer">
                <span class="cvs-type">${q.answer.toUpperCase()}</span>
                <span class="tp-english cvs-meaning">→ ${q.meaning}</span>
              </div>
              <div class="always-visible cvs-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPiNeeded(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">❓ pi or not pi?</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="pi-needed-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="pi-needed-card" data-correct="${q.correct}">
            <div class="pi-options">
              ${q.options.map((opt, oi) => `
                <button class="pi-option-btn" data-value="${oi}">
                  <span class="sp-content">${renderFn(opt)}</span>
                  <span class="tp-latin">${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="tp-english pi-meaning">→ ${q.meaning}</div>
            <div class="pi-feedback hidden">
              <div class="pi-result"></div>
              <div class="always-visible pi-explanation">${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderMeaningDifference(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">⚖️ Meaning Difference</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="meaning-diff-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="meaning-diff-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="pair-phrases">
                <div class="phrase-a">
                  <span class="sp-content">${renderFn(q.pair[0])}</span>
                  <span class="tp-latin">${q.pair[0]}</span>
                </div>
                <div class="pair-vs">vs</div>
                <div class="phrase-b">
                  <span class="sp-content">${renderFn(q.pair[1])}</span>
                  <span class="tp-latin">${q.pair[1]}</span>
                </div>
              </div>
              <div class="flip-hint">tap to see the difference</div>
            </div>
            <div class="card-back">
              <div class="meanings-comparison">
                <div class="meaning-a"><strong class="tp-latin">${q.pair[0]}:</strong> <span class="tp-english">${q.meanings[0]}</span></div>
                <div class="meaning-b"><strong class="tp-latin">${q.pair[1]}:</strong> <span class="tp-english">${q.meanings[1]}</span></div>
              </div>
              <div class="always-visible diff-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTranslateToPi(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📝 Translate with pi</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      ${exercise.notes ? `<p class="always-visible exercise-notes">💡 ${exercise.notes}</p>` : ''}
      <div class="translate-pi-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="translate-pi-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible translate-english">${q.en}</div>
              <div class="always-visible translate-hint">💡 ${q.hint}</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content translate-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin translate-answer">${q.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderErrorCorrection(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">✅ Error Correction</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="error-correction-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="error-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="error-wrong">
                <span class="error-icon">❌</span>
                <span class="sp-content">${renderFn(q.wrong)}</span>
                <span class="tp-latin">${q.wrong}</span>
              </div>
              <div class="flip-hint">tap to see correction</div>
            </div>
            <div class="card-back">
              <div class="error-correct">
                <span class="error-icon">✓</span>
                <span class="sp-content">${renderFn(q.correct)}</span>
                <span class="tp-latin">${q.correct}</span>
              </div>
              <div class="always-visible error-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ LESSON 10 (la) EXERCISE RENDERERS ============

function renderLaUsage(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🎯 la Usage</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="la-usage-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="la-usage-card" data-correct="${q.correct}">
            <div class="la-sentence">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="la-options">
              ${q.options.map((opt, oi) => `
                <button class="la-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="la-feedback hidden">
              <div class="la-result"></div>
              <div class="always-visible la-explanation">${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTranslateLa(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📝 Translate with la</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="translate-la-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="translate-la-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible translate-english">${q.en}</div>
              <div class="always-visible translate-hint">💡 ${q.hint}</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content translate-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin translate-answer">${q.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTasoPosition(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔀 taso Meaning</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="taso-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="taso-card" data-correct="${q.correct}">
            <div class="taso-sentence">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="taso-options">
              ${q.options.map((opt, oi) => `
                <button class="taso-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="taso-feedback hidden">
              <div class="taso-result"></div>
              <div class="always-visible taso-explanation">${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTimePhrases(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">⏰ Time Phrases</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="time-phrase-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="time-phrase-card" data-correct="${q.correct}">
            <div class="time-tp">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="time-options">
              ${q.options.map((opt, oi) => `
                <button class="time-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="time-feedback hidden">
              <div class="time-result"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ LESSON 11 (seme) EXERCISE RENDERERS ============

function renderSemePosition(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">❓ seme Position</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="seme-position-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="seme-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible seme-question">${q.question}</div>
              <div class="flip-hint">tap to see answer</div>
            </div>
            <div class="card-back">
              <div class="seme-answer">
                <div class="sp-content">${renderFn(q.answer)}</div>
                <div class="tp-latin">${q.answer}</div>
              </div>
              <div class="always-visible seme-position">Position: ${q.position}</div>
              <div class="always-visible seme-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTranslateQuestion(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📝 Translate Questions</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="translate-q-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="translate-q-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible translate-english">${q.en}</div>
              <div class="always-visible translate-hint">💡 ${q.hint}</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content translate-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin translate-answer">${q.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAnswerQuestion(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">💬 Answer the Question</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="answer-q-cards">
        ${exercise.questions.map((q, qi) => {
          // Handle both lesson 8 format (correctAnswers array) and lesson 11 format (answer string)
          const answerText = q.answer || (q.correctAnswers ? q.correctAnswers.join(' / ') : '');
          return `
          <div class="answer-q-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="the-question">
                <div class="sp-content">${renderFn(q.question)}</div>
                <div class="tp-latin">${q.question}</div>
              </div>
              <div class="always-visible the-scenario">🎬 ${q.scenario}</div>
              <div class="flip-hint">tap to see answer</div>
            </div>
            <div class="card-back">
              <div class="the-answer">
                <div class="sp-content">${renderFn(answerText)}</div>
                <div class="tp-latin">${answerText}</div>
              </div>
              ${q.explanation ? `<div class="always-visible answer-explanation">💡 ${q.explanation}</div>` : ''}
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderQuestionType(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🏷️ Question Type</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="question-type-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="qtype-card" data-correct="${q.correct}">
            <div class="qtype-sentence">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="qtype-options">
              ${q.options.map((opt, oi) => `
                <button class="qtype-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="qtype-feedback hidden">
              <div class="qtype-result"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderNumberPractice(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔢 Number Practice</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="number-practice-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="number-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="number-tp">
                <div class="sp-content">${renderFn(q.tp)}</div>
                <div class="tp-latin">${q.tp}</div>
              </div>
              <div class="flip-hint">tap to see number</div>
            </div>
            <div class="card-back">
              <div class="always-visible number-answer">${q.answer}</div>
              <div class="always-visible number-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ LESSON 12 (o) EXERCISE RENDERERS ============

function renderCommandType(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📣 Command Type</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="command-type-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="cmd-card" data-correct="${q.correct}">
            <div class="cmd-sentence">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="cmd-options">
              ${q.options.map((opt, oi) => `
                <button class="cmd-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="cmd-feedback hidden">
              <div class="cmd-result"></div>
              ${q.explanation ? `<div class="always-visible cmd-explanation">${q.explanation}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTranslateCommand(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">📝 Translate Commands</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="translate-cmd-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="translate-cmd-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible cmd-english">${q.en}</div>
              ${q.hint ? `<div class="always-visible cmd-hint">💡 ${q.hint}</div>` : ''}
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content cmd-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin cmd-answer">${q.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderOPosition(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔀 o Position</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="o-position-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="o-card" data-correct="${q.correct}">
            <div class="o-sentence">
              <div class="sp-content">${renderFn(q.tp)}</div>
              <div class="tp-latin">${q.tp}</div>
            </div>
            <div class="o-options">
              ${q.options.map((opt, oi) => `
                <button class="o-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="o-feedback hidden">
              <div class="o-result"></div>
              ${q.explanation ? `<div class="always-visible o-explanation">${q.explanation}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderEnUsage(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔗 en Usage</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="en-usage-cards">
        ${exercise.questions.map((q, qi) => {
          const sentenceText = q.tp || q.en || '';
          const answerText = q.answer || q.correct || '';
          const hasTp = q.tp;
          return `
          <div class="en-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              ${hasTp ? `
                <div class="sp-content">${renderFn(sentenceText)}</div>
                <div class="tp-latin">${sentenceText}</div>
              ` : `
                <div class="always-visible">${sentenceText}</div>
              `}
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content">${renderFn(answerText)}</div>
              <div class="tp-latin en-answer">${answerText}</div>
              ${q.explanation ? `<div class="always-visible en-explanation">💡 ${q.explanation}</div>` : ''}
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

// ============ LESSON 5 EXERCISE RENDERERS ============

function renderWordOrderCorrection(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔄 Word Order</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="word-order-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="word-order-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="wrong-order">
                <span class="error-icon">❌</span>
                <span class="sp-content">${renderFn(q.wrong)}</span>
                <span class="tp-latin">${q.wrong}</span>
              </div>
              <div class="always-visible prompt-text">"${q.prompt}"</div>
              <div class="flip-hint">tap to see correct form</div>
            </div>
            <div class="card-back">
              <div class="correct-order">
                <span class="error-icon">✓</span>
                <span class="sp-content">${renderFn(q.correct)}</span>
                <span class="tp-latin">${q.correct}</span>
              </div>
              <div class="always-visible order-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderModifierOrderMeaning(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">⚖️ Order Matters</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="modifier-order-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="modifier-order-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="pair-phrases">
                <div class="phrase-a">
                  <span class="sp-content">${renderFn(q.pair[0])}</span>
                  <span class="tp-latin">${q.pair[0]}</span>
                </div>
                <div class="pair-vs">vs</div>
                <div class="phrase-b">
                  <span class="sp-content">${renderFn(q.pair[1])}</span>
                  <span class="tp-latin">${q.pair[1]}</span>
                </div>
              </div>
              <div class="flip-hint">tap to see meanings</div>
            </div>
            <div class="card-back">
              <div class="meanings-comparison">
                <div class="meaning-a"><strong class="tp-latin">${q.pair[0]}:</strong> <span class="tp-english">${q.meanings[0]}</span></div>
                <div class="meaning-b"><strong class="tp-latin">${q.pair[1]}:</strong> <span class="tp-english">${q.meanings[1]}</span></div>
              </div>
              <div class="always-visible order-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCompoundCreation(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🧩 Compound Creation</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="compound-creation-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="compound-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible compound-concept">${q.concept}</div>
              ${q.hint ? `<div class="always-visible compound-hint">💡 ${q.hint}</div>` : ''}
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content compound-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin compound-answer">${q.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTimeMatching(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">⏰ Time Expressions</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="time-matching-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="time-match-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="time-tp">
                <div class="sp-content">${renderFn(q.tp)}</div>
                <div class="tp-latin">${q.tp}</div>
              </div>
              ${q.hint ? `<div class="always-visible time-hint">💡 ${q.hint}</div>` : ''}
              <div class="flip-hint">tap to reveal meaning</div>
            </div>
            <div class="card-back">
              <div class="tp-english time-en">${q.en}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ LESSON 6 EXERCISE RENDERERS ============

function renderPrepositionChoice(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🎯 Preposition Choice</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="preposition-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="preposition-card" data-correct="${q.correct}">
            <div class="always-visible prep-prompt">${q.prompt}</div>
            <div class="prep-options">
              ${q.options.map((opt, oi) => `
                <button class="prep-option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="prep-feedback hidden">
              <div class="prep-result"></div>
              <div class="prep-answer">
                <span class="sp-content">${renderFn(q.answer)}</span>
                <span class="tp-latin">${q.answer}</span>
              </div>
              <div class="always-visible prep-explanation">💡 ${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderOpinionPattern(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">💭 Opinion Pattern</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="opinion-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="opinion-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible opinion-english">${q.english}</div>
              <div class="flip-hint">tap to reveal toki pona</div>
            </div>
            <div class="card-back">
              <div class="sp-content opinion-answer-sp">${renderFn(q.answer)}</div>
              <div class="tp-latin opinion-answer">${q.answer}</div>
              ${q.note ? `<div class="always-visible opinion-note">💡 ${q.note}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTransformSentence(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔄 Transform Sentences</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="transform-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="transform-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="transform-original">
                <span class="always-visible transform-label">Intransitive:</span>
                <span class="sp-content">${renderFn(q.intransitive)}</span>
                <span class="tp-latin transform-sentence">${q.intransitive}</span>
              </div>
              <div class="always-visible transform-hint">💡 ${q.note}</div>
              <div class="flip-hint">tap to see transitive form</div>
            </div>
            <div class="card-back">
              <div class="transform-result">
                <span class="always-visible transform-label">Transitive:</span>
                <span class="sp-content">${renderFn(q.transitive)}</span>
                <span class="tp-latin transform-sentence">${q.transitive}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderRoleIdentification(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🎯 Role Identification</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="exercise-questions">
        ${exercise.questions.map((q, qi) => {
          // Render sentence with highlighted target
          const highlightedTp = q.tp.replace(`**${q.target}**`, `<mark>${q.target}</mark>`);
          return `
          <div class="role-question-card" data-question="${qi}" data-correct="${q.correct}">
            <div class="question-prompt">
              <div class="sp-content question-sp">${renderFn(q.tp.replace(/\*\*/g, ''))}</div>
              <div class="tp-latin question-sentence">${highlightedTp}</div>
              <div class="tp-english question-translation">"${q.en}"</div>
            </div>
            <div class="options-grid">
              ${q.options.map((opt, oi) => `
                <button class="option-btn" data-value="${oi}">${opt}</button>
              `).join('')}
            </div>
            <div class="feedback hidden">
              <div class="feedback-icon"></div>
              <div class="always-visible feedback-explanation">${q.explanation}</div>
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderTranslationVariation(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🔄 Translation Practice</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="translation-cards">
        ${exercise.questions.map((q, qi) => {
          // Support two formats:
          // Format 1 (lessons 1-4): answers array at exercise level, expectedType on questions
          // Format 2 (lessons 9+): expectedMeaning on each question, no answers array
          const answer = exercise.answers ? exercise.answers[qi] : (q.expectedMeaning || q.answer || '');
          const typeHint = q.expectedType || (q.note ? '' : 'Translate:');
          const hint = q.hint || q.note || '';
          
          return `
          <div class="translation-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="sp-content trans-sp">${renderFn(q.tp)}</div>
              <div class="tp-latin trans-tp">${q.tp}</div>
              ${typeHint ? `<div class="always-visible trans-type">${typeHint}</div>` : ''}
              ${hint ? `<div class="always-visible trans-hint">💡 ${hint}</div>` : ''}
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="tp-english trans-answer">${answer}</div>
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderSentenceBuilding(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🧱 Sentence Building</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="building-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="building-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible word-bank">
                ${q.words.map(w => `<span class="word-chip">${w}</span>`).join('')}
              </div>
              <div class="always-visible building-hint">💡 ${q.hint}</div>
              <div class="flip-hint">tap to see answers</div>
            </div>
            <div class="card-back">
              <div class="valid-answers">
                ${q.validAnswers.map((a, ai) => `
                  <div class="answer-option">
                    <span class="sp-content answer-sp">${renderFn(a)}</span>
                    <span class="tp-latin answer-tp">${a}</span>
                    <span class="tp-english answer-en">→ ${q.translations[ai]}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDisambiguation(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">🤔 Disambiguation</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="disambig-cards">
        ${exercise.questions.map((q, qi) => {
          // Handle three different formats:
          // 1. Lesson 2-3 style: answers array, followUp, likelyAnswer
          // 2. Lesson 4 style: ambiguous array, prompt, answer, explanation
          // 3. Lesson 6 style: meanings array, clarifications object, explanation
          const hasAnswersArray = Array.isArray(q.answers);
          const hasAmbiguousArray = Array.isArray(q.ambiguous);
          const hasClarifications = q.clarifications;
          
          if (hasClarifications) {
            // Lesson 6 format: meanings, clarifications, explanation
            return `
              <div class="disambig-card flashcard" onclick="this.classList.toggle('flipped')">
                <div class="card-front">
                  <div class="sp-content disambig-sp">${renderFn(q.tp)}</div>
                  <div class="tp-latin disambig-sentence">${q.tp}</div>
                  <div class="always-visible disambig-meanings">
                    ${q.meanings.map((m, i) => `<div class="ambig-option">${i + 1}. ${m}</div>`).join('')}
                  </div>
                  <div class="flip-hint">tap to see clarifications</div>
                </div>
                <div class="card-back">
                  <div class="clarifications">
                    ${Object.entries(q.clarifications).map(([key, val]) => `
                      <div class="clarification-item">
                        <strong class="tp-latin">${key}:</strong> <span class="clarification-en">${val}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div class="always-visible disambig-explanation">💡 ${q.explanation}</div>
                </div>
              </div>
            `;
          } else if (hasAnswersArray) {
            // Lesson 2-3 format: answers, followUp, likelyAnswer
            return `
              <div class="disambig-card flashcard" onclick="this.classList.toggle('flipped')">
                <div class="card-front">
                  <div class="sp-content disambig-sp">${renderFn(q.tp)}</div>
                  <div class="tp-latin disambig-sentence">${q.tp}</div>
                  <div class="always-visible disambig-prompt">Can you think of ${q.meanings} meanings?</div>
                  <div class="flip-hint">tap to reveal</div>
                </div>
                <div class="card-back">
                  <div class="tp-english meanings-list">
                    ${q.answers.map((a, i) => `<div class="meaning-item">${i + 1}. ${a}</div>`).join('')}
                  </div>
                  <div class="followup-section">
                    <div class="always-visible followup-q">${q.followUp}</div>
                    <div class="always-visible followup-a">${q.likelyAnswer}</div>
                  </div>
                </div>
              </div>
            `;
          } else if (hasAmbiguousArray) {
            // Lesson 4 format: ambiguous, prompt, answer, explanation
            return `
              <div class="disambig-card flashcard" onclick="this.classList.toggle('flipped')">
                <div class="card-front">
                  <div class="sp-content disambig-sp">${renderFn(q.tp)}</div>
                  <div class="tp-latin disambig-sentence">${q.tp}</div>
                  <div class="always-visible disambig-meanings">
                    ${q.ambiguous.map((a, i) => `<div class="ambig-option">${i + 1}. ${a}</div>`).join('')}
                  </div>
                  <div class="always-visible disambig-prompt">${q.prompt}</div>
                  <div class="flip-hint">tap to reveal</div>
                </div>
                <div class="card-back">
                  <div class="always-visible disambig-answer">💡 ${q.answer}</div>
                  <div class="always-visible disambig-explanation">${q.explanation}</div>
                </div>
              </div>
            `;
          } else {
            return '';
          }
        }).join('')}
      </div>
    </div>
  `;
}

function renderFillBlank(exercise, index) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">✏️ Fill in the Blank</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="fillblank-cards">
        ${exercise.questions.map((q, qi) => {
          // Support both formats: 
          // Format 1 (lessons 1-8): tp, en, hint, answer
          // Format 2 (lessons 9-12): partial, context, answer, explanation
          const sentence = q.tp || q.partial || '';
          const translation = q.en || q.context || '';
          const hint = q.hint || q.explanation || '';
          const answer = q.answer || '';
          const completedSentence = sentence.replace('_____', answer);
          
          return `
          <div class="fillblank-card flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="tp-latin fillblank-sentence">${sentence.replace('_____', '<span class="blank-slot">?</span>')}</div>
              <div class="tp-english fillblank-english">"${translation}"</div>
              ${hint ? `<div class="always-visible fillblank-hint">💡 ${hint}</div>` : ''}
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="sp-content fillblank-answer-sp">${renderFn(completedSentence)}</div>
              <div class="tp-latin fillblank-answer">${sentence.replace('_____', `<span class="filled-answer">${answer}</span>`)}</div>
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderTrueFalse(exercise, index) {
  return `
    <div class="exercise-block" data-exercise="${index}">
      <div class="exercise-header">
        <span class="exercise-type">✓✗ True or False</span>
      </div>
      <p class="always-visible exercise-instruction">${exercise.instruction}</p>
      <div class="tf-cards">
        ${exercise.questions.map((q, qi) => `
          <div class="tf-card" data-answer="${q.answer}">
            <div class="always-visible tf-statement">"${q.statement}"</div>
            <div class="tf-buttons">
              <button class="tf-btn" data-value="true">True</button>
              <button class="tf-btn" data-value="false">False</button>
            </div>
            <div class="tf-feedback hidden">
              <div class="tf-result"></div>
              <div class="always-visible tf-explanation">${q.explanation}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderMiniStory(story, renderFn) {
  return `
    <div class="mini-story">
      <div class="story-header">
        <span class="story-icon">📖</span>
        <span class="always-visible story-title">${story.title}</span>
      </div>
      <div class="always-visible story-intro">${story.intro}</div>
      
      <div class="story-paragraphs">
        ${story.paragraphs.map(p => `
          <div class="story-line flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="sp-content story-sp">${renderFn(p.tp)}</div>
              <div class="tp-latin story-tp">${p.tp}</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="tp-english story-en">${p.en}</div>
              ${p.note ? `<div class="always-visible story-note">💡 ${p.note}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="comprehension-section">
        <div class="always-visible comp-header">📋 Comprehension Check</div>
        ${story.comprehension.map((q, i) => `
          <div class="comp-question flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-front">
              <div class="always-visible comp-q">${i + 1}. ${q.question}</div>
              <div class="flip-hint">tap to reveal</div>
            </div>
            <div class="card-back">
              <div class="always-visible comp-a"><strong>Answer:</strong> ${q.answer}</div>
              <div class="always-visible comp-evidence"><em>Evidence:</em> "${q.evidence}"</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${story.challenge ? `
        <div class="story-challenge">
          <span class="challenge-icon">🌟</span>
          <span class="always-visible challenge-text">${story.challenge}</span>
        </div>
      ` : ''}
    </div>
  `;
}

function renderEnhancedGrammar(grammar) {
  return `
    <div class="grammar-section-expanded">
      <button class="grammar-toggle-expanded" onclick="this.parentElement.classList.toggle('open')">
        <span class="label">
          <span class="icon">📖</span>
          Grammar Deep-Dive
        </span>
        <span class="arrow">▼</span>
      </button>
      
      <div class="grammar-content-expanded">
        <p class="grammar-summary">${grammar.summary}</p>
        
        ${grammar.concepts.map(concept => `
          <div class="grammar-concept">
            <div class="concept-title">${concept.title}</div>
            <div class="concept-explanation">${concept.explanation}</div>
            
            <div class="concept-examples">
              ${concept.examples.map(ex => `
                <div class="concept-example">
                  <span class="ex-tp">${ex.tp}</span>
                  <span class="ex-arrow">→</span>
                  <span class="ex-en">${ex.en}</span>
                  ${ex.note ? `<span class="ex-note">(${ex.note})</span>` : ''}
                </div>
              `).join('')}
            </div>
            
            ${concept.pitfall ? `
              <div class="concept-pitfall">
                <span class="pitfall-icon">⚠️</span>
                <span class="pitfall-text">${concept.pitfall}</span>
              </div>
            ` : ''}
          </div>
        `).join('')}
        
        ${grammar.keyInsight ? `
          <div class="key-insight">
            <span class="insight-icon">💡</span>
            <span class="insight-text">${grammar.keyInsight}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderQuickReference(ref) {
  return `
    <div class="quick-reference">
      <div class="qr-header">📋 Quick Reference</div>
      
      <div class="qr-patterns">
        <div class="qr-subtitle">Sentence Patterns</div>
        <div class="patterns-list">
          ${ref.patterns.map(p => `
            <div class="pattern-item">
              <code>${p.pattern}</code>
              <span class="pattern-example">${p.example}</span>
              <span class="pattern-meaning">${p.meaning}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="qr-remember">
        <div class="qr-subtitle">Remember</div>
        <ul>
          ${ref.remember.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderExpandedLesson(lesson) {
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  const completed = isCompleted(lesson.id);
  
  return `
    <h2 class="lesson-title">
      ${lesson.id}. ${lesson.title}
      ${completed ? '<span class="title-badge">✓ pini</span>' : ''}
    </h2>
    <p class="lesson-desc">${lesson.desc}</p>
    
    ${renderEnhancedGrammar(lesson.grammar)}
    
    <section class="lesson-section">
      <h3 class="section-label">Vocabulary — sona nimi</h3>
      <div class="vocab-grid-expanded">
        ${renderExpandedVocab(lesson.vocab)}
      </div>
    </section>
    
    <section class="lesson-section">
      <h3 class="section-label">Examples — sitelen mute</h3>
      ${renderCategorizedSentences(lesson.sentences, renderFn)}
    </section>
    
    <section class="lesson-section">
      <h3 class="section-label">Practice — pali</h3>
      ${renderPracticeSection(lesson.practice)}
    </section>
    
    <section class="lesson-section">
      <h3 class="section-label">Mini-Story — lipu lili</h3>
      ${renderMiniStory(lesson.story, renderFn)}
    </section>
    
    ${lesson.quickReference ? renderQuickReference(lesson.quickReference) : ''}
    
    <div class="lesson-actions">
      ${completed 
        ? '<div class="completed-message">✓ sina pini e ni! — You completed this lesson!</div>'
        : `<button class="complete-btn" onclick="markCompleted(${lesson.id}); renderLesson();">pini — Mark Complete</button>`
      }
      ${getNextLessonId(lesson.id) 
        ? `<button class="next-btn" onclick="currentLesson = ${getNextLessonId(lesson.id)}; renderNav(); renderLesson();">tawa — Next Lesson →</button>`
        : ''
      }
    </div>
  `;
}

// Helper to get next lesson ID (returns null if no next lesson)
function getNextLessonId(currentId) {
  if (typeof currentId !== 'number') return null;
  const nextId = currentId + 1;
  // Check if a lesson with this ID exists
  const nextLesson = lessons.find(l => l.id === nextId);
  return nextLesson ? nextId : null;
}

// ============ Lesson Rendering ============

function renderProgressBar() {
  const stats = getProgressStats();
  const percent = Math.round((stats.totalCompleted / stats.totalSections) * 100);
  
  return `
    <div class="progress-container">
      <div class="progress-header">
        <span class="progress-label">nasin sina — Your Progress</span>
        <span class="progress-count">${stats.totalCompleted}/${stats.totalSections}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>
      <div class="progress-details">
        <span>Lessons: ${stats.lessonsCompleted}/${stats.lessonsTotal}</span>
        ${stats.readingDone ? '<span class="done">📚✓</span>' : ''}
        ${stats.proverbsDone ? '<span class="done">✨✓</span>' : ''}
      </div>
      ${stats.totalCompleted > 0 ? '<button class="reset-btn" onclick="resetProgress()">Reset Progress</button>' : ''}
    </div>
  `;
}

function renderLesson() {
  markVisited(currentLesson);
  
  if (currentLesson === 'reading') {
    renderReadingSection();
    return;
  }
  
  if (currentLesson === 'proverbs') {
    renderProverbsSection();
    return;
  }
  
  const lesson = lessons.find(l => l.id === currentLesson);
  const content = document.getElementById('content');
  
  // Safeguard: if lesson not found, show error message
  if (!lesson) {
    content.innerHTML = `
      <h2 class="lesson-title">Lesson ${currentLesson}</h2>
      <p class="lesson-desc">This lesson is not available. Please select another lesson.</p>
    `;
    return;
  }
  
  if (lesson.isExpanded) {
    content.innerHTML = renderExpandedLesson(lesson);
    return;
  }
  
  const renderFn = useCompounds ? renderSentenceCompound : renderSentence;
  const completed = isCompleted(currentLesson);
  
  content.innerHTML = `
    <h2 class="lesson-title">
      ${lesson.id}. ${lesson.title}
      ${completed ? '<span class="title-badge">✓ pini</span>' : ''}
    </h2>
    <p class="lesson-desc">${lesson.desc}</p>
    
    ${renderGrammar(lesson.grammar)}
    
    <h3 class="section-label">Vocabulary</h3>
    <div class="vocab-grid">
      ${lesson.vocab.map(v => `
        <div class="vocab-item">
          <span class="sp-content sp-glyph-hybrid">${toSP(v.word)}</span>
          <div class="vocab-word-always">${v.word}</div>
          <div class="always-visible meaning">${v.meaning}</div>
        </div>
      `).join('')}
    </div>
    
    <h3 class="section-label">Sentences</h3>
    ${lesson.sentences.map(s => `
      <div class="card flashcard" onclick="this.classList.toggle('flipped')">
        <div class="sp-content sp-sentence">${renderFn(s.tp)}</div>
        <p class="tp-latin latin">${s.tp}</p>
        <p class="tp-english english">${s.en}</p>
        <p class="flip-hint">tap to reveal</p>
      </div>
    `).join('')}
    
    <h3 class="section-label" style="margin-top: 2rem;">Practice</h3>
    ${lesson.sentences.slice(0, 3).map(s => `
      <div class="card practice" onclick="this.classList.toggle('revealed')">
        <div class="sp-content sp-sentence">${renderFn(s.tp)}</div>
        <p class="tp-latin latin reveal">${s.tp}</p>
        <p class="tp-english english reveal">${s.en}</p>
        <p class="flip-hint">tap to reveal</p>
      </div>
    `).join('')}
    
    <div class="lesson-actions">
      ${completed 
        ? '<div class="completed-message">✓ sina pini e ni! — You completed this lesson!</div>'
        : `<button class="complete-btn" onclick="markCompleted(${lesson.id}); renderLesson();">pini — Mark Complete</button>`
      }
      ${getNextLessonId(lesson.id) 
        ? `<button class="next-btn" onclick="currentLesson = ${getNextLessonId(lesson.id)}; renderNav(); renderLesson();">tawa — Next Lesson →</button>`
        : ''
      }
    </div>
  `;
}

// ============ Tooltip Handlers ============

document.addEventListener('mouseover', e => {
  const word = e.target.closest('.sp-word');
  if (word && word.dataset.def) {
    tipWord.textContent = word.dataset.word;
    tipGlyph.textContent = word.dataset.glyph;
    tipDef.textContent = word.dataset.def;
    tooltip.classList.add('visible');
  }
});

document.addEventListener('mouseout', e => {
  const word = e.target.closest('.sp-word');
  if (word) {
    tooltip.classList.remove('visible');
  }
});

document.addEventListener('mousemove', e => {
  if (tooltip.classList.contains('visible')) {
    const x = e.clientX + 15;
    const y = e.clientY + 15;
    const rect = tooltip.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 10;
    const maxY = window.innerHeight - rect.height - 10;
    tooltip.style.left = Math.min(x, maxX) + 'px';
    tooltip.style.top = Math.min(y, maxY) + 'px';
  }
});

// ============ Event Listeners ============

document.getElementById('levels').addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    currentLesson = (id === 'reading' || id === 'proverbs') ? id : parseInt(id);
    renderNav();
    renderLesson();
  }
});

document.getElementById('showLatin').addEventListener('change', e => {
  showLatin = e.target.checked;
  document.body.classList.toggle('show-latin', showLatin);
  // Save preference
  saveDisplayPreferences();
});

document.getElementById('showEnglish').addEventListener('change', e => {
  showEnglish = e.target.checked;
  document.body.classList.toggle('show-english', showEnglish);
  // Save preference
  saveDisplayPreferences();
});

document.getElementById('useCompounds').addEventListener('change', e => {
  useCompounds = e.target.checked;
  saveDisplayPreferences();
  renderLesson();
});

// Category tab switching
document.addEventListener('click', e => {
  if (e.target.closest('.cat-tab')) {
    const tab = e.target.closest('.cat-tab');
    const category = tab.dataset.category;
    const container = tab.closest('.sentence-categories');
    
    container.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    container.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    container.querySelector(`.cat-panel[data-category="${category}"]`).classList.add('active');
  }
});

// Role identification option selection
document.addEventListener('click', e => {
  if (e.target.classList.contains('option-btn')) {
    const btn = e.target;
    const card = btn.closest('.role-question-card');
    const correctVal = card.dataset.correct;
    const selectedVal = btn.dataset.value;
    const isCorrect = selectedVal === correctVal;
    
    // Disable all buttons
    card.querySelectorAll('.option-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.value === correctVal) {
        b.classList.add('correct');
      }
    });
    
    if (!isCorrect) {
      btn.classList.add('incorrect');
    }
    
    // Show feedback
    const feedback = card.querySelector('.feedback');
    const icon = feedback.querySelector('.feedback-icon');
    icon.textContent = isCorrect ? '✓ Correct!' : '✗ Not quite...';
    icon.className = 'feedback-icon ' + (isCorrect ? 'correct' : 'incorrect');
    feedback.classList.remove('hidden');
  }
});

// True/False button handling
document.addEventListener('click', e => {
  if (e.target.classList.contains('tf-btn')) {
    const btn = e.target;
    const card = btn.closest('.tf-card');
    const correctAnswer = card.dataset.answer === 'true';
    const selectedAnswer = btn.dataset.value === 'true';
    const isCorrect = correctAnswer === selectedAnswer;
    
    card.querySelectorAll('.tf-btn').forEach(b => {
      b.disabled = true;
      if ((b.dataset.value === 'true') === correctAnswer) {
        b.classList.add('correct');
      }
    });
    
    if (!isCorrect) {
      btn.classList.add('incorrect');
    }
    
    const feedback = card.querySelector('.tf-feedback');
    const result = card.querySelector('.tf-result');
    result.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
    result.className = 'tf-result ' + (isCorrect ? 'correct' : 'incorrect');
    feedback.classList.remove('hidden');
  }
});

// Generic multiple-choice button handling for various exercises
// Handles: pi-option-btn, la-option-btn, taso-option-btn, time-option-btn, qtype-option-btn, cmd-option-btn, o-option-btn, generic-option-btn, prep-option-btn
document.addEventListener('click', e => {
  const btnClasses = ['pi-option-btn', 'la-option-btn', 'taso-option-btn', 'time-option-btn', 'qtype-option-btn', 'cmd-option-btn', 'o-option-btn', 'generic-option-btn', 'prep-option-btn'];
  const matchedClass = btnClasses.find(cls => e.target.classList.contains(cls));
  
  if (matchedClass) {
    const btn = e.target;
    const card = btn.closest('[data-correct]');
    if (!card) return;
    
    const correctVal = card.dataset.correct;
    const selectedVal = btn.dataset.value;
    const isCorrect = selectedVal === correctVal;
    
    // Disable all buttons in this card
    card.querySelectorAll('button').forEach(b => {
      b.disabled = true;
      if (b.dataset.value === correctVal) {
        b.classList.add('correct');
      }
    });
    
    if (!isCorrect) {
      btn.classList.add('incorrect');
    }
    
    // Show feedback if available
    const feedback = card.querySelector('[class$="-feedback"]');
    if (feedback) {
      const result = feedback.querySelector('[class$="-result"]');
      if (result) {
        result.textContent = isCorrect ? '✓ Correct!' : '✗ Not quite...';
        result.className = result.className + ' ' + (isCorrect ? 'correct' : 'incorrect');
      }
      feedback.classList.remove('hidden');
    }
  }
});

// ============ Progress Bar Rendering ============

function updateProgressBar() {
  const container = document.getElementById('progressBar');
  const stats = getProgressStats();
  
  if (stats.totalCompleted === 0) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = renderProgressBar();
}

// ============ Initialize ============

// Initialize display modes first (loads preferences and sets body classes)
initializeDisplayModes();

// Then render the UI
document.getElementById('headerGlyph').textContent = SitelenPona.wordToGlyph('lipu');
renderNav();
updateProgressBar();
renderLesson();
