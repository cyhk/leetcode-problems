function alternatingCharacters(s) {
  let canRemove = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) canRemove += 1;
  }

  return canRemove;
}
ßß