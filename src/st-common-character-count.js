import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const first = s1.split('');
  const second = s2.split('');
  let str = 0;
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      str++;
      delete second[second.indexOf(first[i])];
    }
  }
  return str;
}