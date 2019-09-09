function countingValleys(n, s) {
  let fromSeaLevel = 0;
  let valleys = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "D" ? (fromSeaLevel -= 1) : (fromSeaLevel += 1);

    if (fromSeaLevel === 0 && s[i] === "U") valleys += 1;
  }

  return valleys;
}
