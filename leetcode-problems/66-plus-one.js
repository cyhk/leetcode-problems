/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of the list, and each
 * element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Example 2:
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let position = digits.length;
  
  // add one to last digit and add the carry to
  // the next digit to the left until there is nothing
  // to carry over
  do {
    if (position === 0) {
      digits.unshift(1);
      break;
    }
      
    position--;
    carry = ((digits[position] + 1) === 10) ? 1 : 0;
    digits[position] = digits[position] + 1;
    if (digits[position] === 10) digits[position] = 0;
  } while (carry === 1);
  
  return digits;
};