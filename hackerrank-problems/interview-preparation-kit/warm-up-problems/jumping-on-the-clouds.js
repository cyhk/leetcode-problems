function jumpingOnClouds(c) {
  let currPos = 0;
  let count = 0;
  while (currPos < c.length - 1) {
    if (c[currPos + 2] === 1 || currPos + 2 > c.length - 1) currPos += 1;
    else currPos += 2;
    count++;
  }
  return count;
}
