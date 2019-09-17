function checkMagazine(magazine, note) {
  const magazineLetters = makeFrequencyCounter(magazine);
  const noteLetters = makeFrequencyCounter(note);

  for (const letter in noteLetters) {
    if (magazineLetters[letter] === undefined ||
        magazineLetters[letter] < noteLetters[letter]) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

function makeFrequencyCounter(arr) {
  const fq = {};

  for (const word of arr) {
    if (fq[word] === undefined) fq[word] = 1;
    else fq[word] += 1;
  }

  return fq;
}