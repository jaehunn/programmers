function solution(R, N) {
  let num = 0;

  return Array(N)
    .fill(0)
    .map((n) => (n = num += R));
}
