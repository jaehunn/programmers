function solution(x, n) {
  let s = 0;
  return Array(n)
    .fill(0)
    .map((v) => (v = s += x));
}
