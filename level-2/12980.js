function solution(n, r = 0) {
  if (n === 0) return r;

  return n % 2 === 0 ? solution(n / 2, r) : solution(n - 1, r + 1);
}
