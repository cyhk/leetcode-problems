function rotLeft(a, d) {
  // using mod to find where we have to rotate
  // so we don't have to perform all the actual
  // rotations
  let rotationPoint = d % a.length;
  
  // construct a new array based on rotation point
  return [...a.slice(rotationPoint), ...a.slice(0, rotationPoint)];
}