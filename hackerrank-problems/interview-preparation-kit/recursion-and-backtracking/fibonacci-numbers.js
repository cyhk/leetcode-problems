function fibonacci(n) {
  const fibMemo = {}; // object to memoize results

  // helper function to utilize memoization to calculate results
  function _fibonacciHelper(n) {
    if (n === 1 || n === 0) return n;
    
    if (fibMemo[n] === undefined) {
      fibMemo[n] = _fibonacciHelper(n-1) + _fibonacciHelper(n-2);
    }
    return fibMemo[n];
  }

  return _fibonacciHelper(n);
}