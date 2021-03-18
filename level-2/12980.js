function solution(n, r = 0) {
  if (!n) return r;

  return n % 2 ? solution(n - 1, r + 1) : solution(n / 2, r);
}
