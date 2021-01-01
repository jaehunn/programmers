function solution(n) {
  let r = Math.sqrt(n);

  return Number.isInteger(r) ? Math.pow(r + 1, 2) : -1;
}
