/**
 * Say you have an array for which the ith element is the
 * price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one
 * transaction (i.e., buy one and sell one share of the stock
 * , design an algorithm to find the maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5
 * (price = 6), profit = 6-1 = 5.
 *              Not 7-1 = 6, as selling price needs to be
 * larger than buying price.
 * Example 2:
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e.
 * max profit = 0.
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let maxProfit = 0;
  let start = 0;
  let end = 1;
  let currentDiff = 0;
  let min = prices[start];

  // at each loop, until the end of the array is reached,
  // check if the current difference gives the max profit
  // check also if the new element is the newest minimum,
  // if so, compare everything after to the newest minimum
  // from now on
  while (end < prices.length) {
    currentDiff = prices[end] - prices[start];
    if (currentDiff > maxProfit) maxProfit = currentDiff;
    if (prices[end] < min) {
      min = prices[end];
      start = end;
      currentDiff = 0;
    }
     
    end++;
  }

  return maxProfit;
};