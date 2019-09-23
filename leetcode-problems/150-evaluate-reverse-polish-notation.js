/**
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 * 
 * Note:
 * 
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would always evaluate
 * to a result and there won't be any divide by zero operation.
 * Example 1:
 * 
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * Example 2:
 * 
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * Example 3:
 * 
 * Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * Output: 22
 * Explanation: 
 *   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let wait = []; // using array like a stack

  for (let i = 0; i < tokens.length; i++) {
    // if we have numbers, just push onto the stack
    if (!isNaN(Number(tokens[i]))) {
      wait.push(Number(tokens[i]));
    } else {
      // if we are in this else block, we know
      // that we have come across an operation,
      // so pop the two most recent values and 
      // do the necessary operation,
      // then push it back onto the stack
      right = wait.pop();
      left = wait.pop();

      let result = null;
      if (tokens[i] === "+") result = left + right;
      else if (tokens[i] === "-") result = left - right;
      else if (tokens[i] === "*") result = left * right;
      else if (tokens[i] === "/") {
        result = left / right;
        // turn the division result into a whole number
        result = result >= 0 ? Math.floor(result) : Math.ceil(result);
      }

      wait.push(result);
    }
  }
  
  // there is only one thing left on the stack at this point,
  // so just return it
  return wait.pop();
}