/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * Example:
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * Note: Please solve it without division and in O(n).
 * 
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

 // O(N) solution without division
var productExceptSelf = function(nums) {
  let leftProduct = 1;
  let rightProduct = 1;

  let products = [];

  // add in all the leftProducts first
  for (let i=0; i<nums.length; i++) {
    products.push(leftProduct);
    leftProduct *= nums[i];
  }

  for (let j=nums.length-1; j>=0; j--) {
    products[j] *= rightProduct;
    rightProduct *= nums[j];
  }

  return products;
};