import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  if (str.length == 0)
    return "";
    let final = [str[0]]
      for (let i = 1; i < str.length; i++){
      if (str[i] == str[i - 1]) {
        final[final.length - 1] += str[i];
    } else {
      final.push(str[i])
    }
  }
  return final.map(x => (x.length > 1 ? x.length: "") + x[0]).join("")
}