/**
 * Given an array of integers, return indices of the two numbers such that 
 * they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let numObj = {};
  
  // make hash table
  for (let num of nums) {
    if (numObj[num] === undefined) {
      numObj[num] = 1;
    } else {
      numObj[num] = numObj[num]+ 1;
    }
  }
  
  // find if target num exists, if so, check if it is the same
  // index. If so, continue, else return the tuple
  for (let i=0; i<nums.length; i++) {
    if (numObj[target-nums[i]]) {
        let j = nums.findIndex(num => num === target-nums[i]);
        if (j === i) continue;
      return [i, j];
    }
  }
};