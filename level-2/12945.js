function solution(n) {
  const result = [0, 1];

  // bottom-up
  for (let i = 2; i <= n; i += 1) {
    result[i] = (result[i - 2] + result[i - 1]) % 1234567;
  }

  return result[n];
}
