/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated
 * according to the following rules:
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled with the
 * character '.'.
 * 
 * Example 1:
 * 
 * Input:
 * [
 *   ["5","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * 
 * Output: true
 *  Example 2:
 * 
 * Input:
 * [
 *   ["8","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * 
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner being 
 * modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 * 
 *  Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * @param {character[][]} board
 * @return {boolean}
 */

const NUM_COUNT = 9;
const GRID_LENGTH = 3;

var isValidSudoku = function (board) {
  // check rows
  const rowResults = board.every(row => {
    const vals = new Set(row);
    const emptyCells = row.reduce(((count, val) => val === '.' ? count + 1 : count), 0);
    if (emptyCells === NUM_COUNT || vals.size + emptyCells - 1 === NUM_COUNT) return true;
    return false;
  });
  if (!rowResults) return false;

  // check columns
  for (let i = 0; i < NUM_COUNT; i++) {
    const vals = new Set();
    for (let j = 0; j < NUM_COUNT; j++) {
      if (board[j][i] !== '.' && vals.has(board[j][i])) return false;
      vals.add(board[j][i]);
    }
  }

  // // check 3x3 grids
  for (let k = 0; k < NUM_COUNT; k += 3) {
    for (let m = 0; m < NUM_COUNT; m += 3) {
      const vals = new Set();
      for (let n = k; n < k + GRID_LENGTH; n++) {
        for (let p = m; p < m + GRID_LENGTH; p++) {
          if (board[n][p] !== '.' && vals.has(board[n][p])) return false;
          vals.add(board[n][p]);
        }
      }
    }
  }

  return true;
};