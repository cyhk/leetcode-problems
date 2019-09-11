function rotLeft(a, d) {
  let rotationPoint = d % a.length;
  
  return [...a.slice(rotationPoint), ...a.slice(0, rotationPoint)];
}