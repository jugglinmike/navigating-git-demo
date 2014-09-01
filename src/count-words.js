'use strict';

/**
 * Calculate the number of words in any string of English text.
 *
 * @param {string} words - the text from which words should be counted
 *
 * @returns {number} An integer describing how many English words were found in
 *                   the input text.
 */
function countWords(words) {
  return words.split(' ').length;
}

module.exports = countWords;
