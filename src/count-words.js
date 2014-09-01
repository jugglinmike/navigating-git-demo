'use strict';
var readFile = require('fs').readFile;

function countWords() {

}

/**
 * Count the number of English words in a given file.
 *
 * @param {string} fileName - a path to the file whose words should be counted
 * @param {function} callback - a function that will be invoked when the
 *                              operation is complete
 */
countWords.fromFile = function(fileName, callback) {
  readFile(fileName, { encoding: 'utf8' }, function(err, contents) {
    if (err) {
      callback(err);
      return;
    }

    callback(countWords(contents));
  });
};

module.exports = countWords;
