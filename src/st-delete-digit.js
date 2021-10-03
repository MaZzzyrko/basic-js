import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  n = String(n);
  let npm = n.split('');
  const arr = [];
  for (let i = 0; i < n.length; i++) {
    npm.splice(i, 1);
    arr.push(+npm.join(''));
    npm = n.split('');
  }
  return Math.max.apply(null, arr);
}