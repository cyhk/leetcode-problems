function sockMerchant(n, ar) {
  let count = 0;

  function _makeFreqCounter(arr) {
    let freqCounter = {};
    arr.forEach(item => {
      freqCounter[item] === undefined
        ? (freqCounter[item] = 1)
        : (freqCounter[item] += 1);
    });
    return freqCounter;
  }

  let freqCounter = _makeFreqCounter(ar);

  Object.keys(freqCounter).forEach(sockType => {
    count += Math.floor(freqCounter[sockType] / 2);
  });

  return count;
}
