/**
 * Suppose an array sorted in ascending order is rotated at
 * some pivot unknown to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 *
 * Input: [3,4,5,1,2]
 * Output: 1
 * Example 2:
 *
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 *
 * @param {number[]} nums
 * @return {number}
 */

// O(N) solution
var findMin = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return nums[i];
  }

  return nums[0];
};

// O(logN) soluion
var findMin = function(nums, lo = 0, hi = nums.length - 1) {
  if (nums.length === 1) return nums[0];

  while (lo <= hi) {
    const midpoint = Math.floor((lo + hi) / 2);
    if (nums[midpoint - 1] > nums[midpoint])
      return nums[midpoint];
    if (nums[midpoint + 1] < nums[midpoint])
      return nums[midpoint + 1];
    if (nums[midpoint] > nums[hi]) lo = midpoint+1;
    else hi = midpoint-1;
  }
  return nums[lo];
};