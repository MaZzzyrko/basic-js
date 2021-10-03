import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 export default function minesweeper(matrix) {
  let row = matrix.length
  let column = matrix[0].length
  let currentSweep = 0
  let str = new Array(matrix.length)
    for (let i = 0; i < row; i++) {
      str[i] = new Array(matrix.length)
    for (let x = 0; x < column; x++) {
    currentSweep = 0
    if (i - 1 >= 0 && x - 1 >= 0) {
      if (matrix[i - 1][x - 1]) currentSweep++
    }
    if (i >= 1) {
      if (matrix[i - 1][x]) currentSweep++
    }
    if (i >= 1 && x < column - 1) {
      if (matrix[i - 1][x + 1]) currentSweep++
    }
    if (x >= 1) {
      if (matrix[i][x - 1]) currentSweep++
    }
    if (x < row - 1) {
      if (matrix[i][x + 1]) currentSweep++
    }
    if (i < row - 1 && x >= 1) {
      if (matrix[i + 1][x - 1]) currentSweep++
    }
    if (i < row - 1) {
      if (matrix[i + 1][x]) currentSweep++
    }
    if (i < row - 1 && x < row - 1) {
      if (matrix[i + 1][x + 1]) currentSweep++
    }
    str[i][x] = currentSweep
  }
}
return str
}