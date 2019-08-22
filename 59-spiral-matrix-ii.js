/**
 * 
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in
 * spiral order.
 * 
 * Example:
 * 
 *  Input: 3
 * Output:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 * 
 *  * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // generate grid
  let grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(Array.from({ length: n }));
  }

  // fill in grid
  let x = 0;
  let y = 0;
  let direction = "right";
  let count = 1;

  while (count <= n*n) {
    if (!grid[y][x]) {
      grid[y][x] = count;
      count += 1;
    }

    switch (direction) {
      case "right":
        if (x + 1 < n && !grid[y][x + 1]) x += 1;
        else direction = "down";
        break;
      case "down":
        if (y + 1 < n && !grid[y + 1][x]) y += 1;
        else direction = "left";
        break;
      case "left":
        if (x - 1 >= 0 && !grid[y][x - 1]) x -= 1;
        else direction = "up";
        break;
      case "up":
        if (y - 1 >= 0 && !grid[y - 1][x]) y -= 1;
        else direction = "right";
        break;
    }
  }
  return grid;
};