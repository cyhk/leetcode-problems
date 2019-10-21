/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to
 * you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its index,
 * otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, lo = 0, hi = nums.length - 1) {
  if (nums.length === 1) {
    return target === nums[0] ? 0 : -1;
  }

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > target) {
      if (nums[lo] === target) return lo;
      else if (nums[lo] > target) {
        if (nums[mid] < nums[lo]) {
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      } else if (nums[lo] < target) hi = mid - 1;
    } else if (nums[mid] < target) {
      if (nums[hi] === target) return hi;
      else if (nums[hi] > target) lo = mid + 1;
      else if (nums[hi] < target) {
        if (nums[mid] > nums[hi]) {
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
    } else if (nums[mid] === target) return mid;
  }

  return -1;
};
