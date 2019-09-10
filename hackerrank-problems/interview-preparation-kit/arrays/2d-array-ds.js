function hourglassSum(arr) {
  function _addHourglass(y, x) {
    return (
      arr[y][x] +
      arr[y][x + 1] +
      arr[y][x + 2] +
      arr[y + 1][x + 1] +
      arr[y + 2][x] +
      arr[y + 2][x + 1] +
      arr[y + 2][x + 2]
    );
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let y = 0; y < arr.length - 2; y++) {
    for (let x = 0; x < arr[y].length - 2; x++) {
      let sum = _addHourglass(y, x);
      if (sum > max) max = sum;
    }
  }

  return max;
}
