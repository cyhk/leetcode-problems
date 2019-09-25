function alternatingCharacters(s) {
  let canRemove = 0;

  // at every letter, check if it is the same as
  // the previous letter, if it is, we can
  // count it as a letter we can remove
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) canRemove += 1;
  }

  return canRemove;
}
ßß