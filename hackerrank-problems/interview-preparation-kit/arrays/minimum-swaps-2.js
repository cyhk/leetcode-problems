function minimumSwaps(arr) {
  let swaps = 0;
  while (!arr.every((elem, idx) => elem === idx + 1)) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== i + 1) {
        let toSwapIdx = arr[i] - 1;
        [arr[i], arr[toSwapIdx]] = [arr[toSwapIdx], arr[i]];
        swaps += 1;
      }
    }
  }
  return swaps;
}
