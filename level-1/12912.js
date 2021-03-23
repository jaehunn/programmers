function solution(a, b) {
  if (a === b) return a;
  if (a > b) [a, b] = [b, a];

  const length = b - a + 1;
  const halfLength = (length / 2) << 0;

  // Gauss composition
  return isEven(length) ? (a + b) * halfLength : (a + b) * halfLength + (a + halfLength);
}

function isEven(number) {
  return number % 2 === 0;
}
