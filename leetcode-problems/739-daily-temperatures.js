/**
 * Given a list of daily temperatures T, return a list such that, for each day in the input, tells
 * you how many days you would have to wait until a warmer temperature. If there is no future day
 * for which this is possible, put 0 instead.
 * 
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output
 * should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 *  Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an
 * integer in the range [30, 100].
 * 
 * @param {number[]} T
 * @return {number[]}
 */

var dailyTemperatures = function (T) {
  let tempNowIdx = 0;
  let toWarmerTempIdx = 0;
  let toWarmerTempArr = [];

  while (tempNowIdx !== T.length) {
    toWarmerTempIdx = tempNowIdx;

    while (T[toWarmerTempIdx] <= T[tempNowIdx] ||
      toWarmerTempIdx === T.length) {
      toWarmerTempIdx++;
    }
    
    toWarmerTempIdx === T.length+1 ?
      toWarmerTempArr.push(0) :
      toWarmerTempArr.push(toWarmerTempIdx - tempNowIdx);

    tempNowIdx++;
  }

  return toWarmerTempArr;
};