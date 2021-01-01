function solution(n) {
  return Array.from(n + "").reduce((r, v) => (r += +v), 0);
}
