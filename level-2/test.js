function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // 3 의 제곱부터 홀수를 판단
  for (let division = 3; division <= Math.sqrt(num); division += 2) {
    if (num % division === 0) return false; // 가드절
  }

  return true;
}
