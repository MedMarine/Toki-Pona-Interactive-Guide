/**
 * lessons-data.js - Lesson content for the toki pona graded reader
 * 
 * Modular structure: Expanded lessons are in separate files under /lessons/
 * Simple format lessons remain here until expanded.
 */

// ============ IMPORT EXPANDED LESSONS ============
// For browser: these are loaded via script tags in HTML
// For Node.js: use require (handled by conditionals in each file)

// ============ SIMPLE FORMAT LESSONS ============
// Lessons 1-12 have been expanded and moved to /lessons/lessonX.js

// ============ BONUS LESSONS (13+) ============
// These are placeholders for future lessons that haven't been expanded yet

const bonusLessonsData = [
  // All lessons have been expanded and moved to /lessons/lessonX.js
];

// ============ BUILD LESSONS ARRAY ============
// This combines expanded lessons (loaded from separate files) with simple lessons

// In browser context, lesson1-12 are global variables from script tags
// In Node.js context, they would be required
const lessonsData = [
  (typeof lesson1 !== 'undefined') ? lesson1 : null,
  (typeof lesson2 !== 'undefined') ? lesson2 : null,
  (typeof lesson3 !== 'undefined') ? lesson3 : null,
  (typeof lesson4 !== 'undefined') ? lesson4 : null,
  (typeof lesson5 !== 'undefined') ? lesson5 : null,
  (typeof lesson6 !== 'undefined') ? lesson6 : null,
  (typeof lesson7 !== 'undefined') ? lesson7 : null,
  (typeof lesson8 !== 'undefined') ? lesson8 : null,
  (typeof lesson9 !== 'undefined') ? lesson9 : null,
  (typeof lesson10 !== 'undefined') ? lesson10 : null,
  (typeof lesson11 !== 'undefined') ? lesson11 : null,
  (typeof lesson12 !== 'undefined') ? lesson12 : null,
  (typeof lesson13 !== 'undefined') ? lesson13 : null,
  (typeof lesson14 !== 'undefined') ? lesson14 : null,
  (typeof lesson15 !== 'undefined') ? lesson15 : null,
  (typeof lesson16 !== 'undefined') ? lesson16 : null,
  (typeof lesson17 !== 'undefined') ? lesson17 : null,
  (typeof lesson18 !== 'undefined') ? lesson18 : null
].filter(l => l !== null);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { lessonsData, bonusLessonsData };
}
