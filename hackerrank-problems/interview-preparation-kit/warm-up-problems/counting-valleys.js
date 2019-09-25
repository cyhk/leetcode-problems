function countingValleys(n, s) {
  let fromSeaLevel = 0;
  let valleys = 0;

  for (let i = 0; i < s.length; i++) {
    // calculate current positino from sea level based on "D" or "U'
    s[i] === "D" ? (fromSeaLevel -= 1) : (fromSeaLevel += 1);

    // if we reach sea level again with "U", we have come out
    // of a valley, so add one to the count
    if (fromSeaLevel === 0 && s[i] === "U") valleys += 1;
  }

  return valleys;
}
