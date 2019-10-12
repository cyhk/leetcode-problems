/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's algorithm
var maxSubArray = function(nums) {
  let maxUpToHere = Number.MIN_SAFE_INTEGER;
  let maxSoFar = maxUpToHere;

  for (let num of nums) {
    maxUpToHere = Math.max(num, maxUpToHere + num);
    maxSoFar = Math.max(maxSoFar, maxUpToHere);
  }

  return maxSoFar;
}
