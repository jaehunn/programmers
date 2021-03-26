function solution(N) {
  let n = Math.sqrt(N);

  return Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
}
