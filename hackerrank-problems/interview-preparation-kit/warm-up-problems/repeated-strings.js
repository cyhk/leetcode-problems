function repeatedString(s, n) {
  let fullStringCount = 0;
  let partialCount = 0;
  let partialStringLength = n%s.length;
  let multiplier = Math.floor(n/s.length);
  let total = 0;

  for (let i=0; i<s.length; i++) {
    if (s[i] === 'a') {
      fullStringCount++;
      if (i < partialStringLength) partialCount++;
    }
  }

  total = fullStringCount*multiplier + partialCount;

  return total;
}