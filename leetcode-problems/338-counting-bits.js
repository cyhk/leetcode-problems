/**
 * Given a non negative integer number num. For every numbers i in the range
 * 0 ≤ i ≤ num calculate the number of 1's in their binary representation and
 * return them as an array.
 *
 * Example 1:
 *
 * Input: 2
 * Output: [0,1,1]
 * Example 2:
 *
 * Input: 5
 * Output: [0,1,1,2,1,2]
 * Follow up:
 *
 * It is very easy to come up with a solution with run time O(n*sizeof(integer)).
 * But can you do it in linear time O(n) /possibly in a single pass?
 * Space complexity should be O(n).
 * Can you do it like a boss? Do it without using any builtin function like
 * __builtin_popcount in c++ or in any other language.
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const hammingWeights = [0];

  for (let i = 1; i <= num; i++) {
    hammingWeights.push(hammingWeight(i));
  }

  return hammingWeights;
};

const hammingWeight = function(n) {
  let hammingWeight = [];

  while (n) {
    if (n & (1 === 1)) hammingWeight += 1;
    n = n >>> 1;
  }

  return hammingWeight;
};

var countBits = function(num) {
  // the key to this solution is that there is a pattern
  // to the solutions: hammingWeight[i] = hammingWeight[i-lastPowerOf2]+1

  const hammingWeights = [0];
  let lastPowerOf2 = 1;

  for (let i = 1; i <= num; i++) {
    if (i === lastPowerOf2) {
      lastPowerOf2 *= 2;
    }

    hammingWeights.push(hammingWeights[i - lastPowerOf2 / 2] + 1);
  }

  return hammingWeights;
};
