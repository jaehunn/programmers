function solution(N) {
  return Array.from(N + "").reduce((sum, num) => (sum += +num), 0);
}
