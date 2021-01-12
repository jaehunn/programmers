function solution(numbers) {
  return hlpr(Array.from(numbers)).filter((l) => isPrime(l)).length;
}

function hlpr(l, s = "") {
  // ...
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  let d = Math.sqrt(n);
  for (let i = 3; i <= d; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
