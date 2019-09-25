function checkMagazine(magazine, note) {

  const magazineLetters = makeFrequencyCounter(magazine);
  const noteLetters = makeFrequencyCounter(note);

  // check if the magazine has the words required
  // for the note, and console log the result
  for (const letter in noteLetters) {
    if (magazineLetters[letter] === undefined ||
        magazineLetters[letter] < noteLetters[letter]) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

// helper function to make frequency counter
function makeFrequencyCounter(arr) {
  const fq = {};

  for (const word of arr) {
    if (fq[word] === undefined) fq[word] = 1;
    else fq[word] += 1;
  }

  return fq;
}