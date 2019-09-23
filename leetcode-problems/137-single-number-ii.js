/**
 * Given a non-empty array of integers, every element appears three times except for one, which
 * appears exactly once. Find that single one.
 * 
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement it without using 
 * extra memory?
 * 
 * Example 1:
 * 
 * Input: [2,2,3,2]
 * Output: 3
 * Example 2:
 * 
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let frequencyCounter = makeFrequencyCounter(nums);

  // if we find the value that only appear once,
  // return it
  for (const key in frequencyCounter) {
    if (frequencyCounter[key] ===  1) return key;
  }
};

// make frequency counter to count how many
// times each value appears
function makeFrequencyCounter(arr) {
  let fq = {};
  for (const value of arr) {
    fq[value] !== undefined ? fq[value]++ : fq[value] = 1;
  }
  return fq;
}

// O(1) space solution
var singleNumber = function(nums) {
  const uniqueSum = Array.from(new Set(nums)).reduce((acc, elem) => acc + elem*3, 0);
  const totalSum = nums.reduce((acc, elem) => acc + elem, 0);

  return (uniqueSum - totalSum)/2;
};