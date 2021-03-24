function solution(N) {
  const Strs = ["수", "박"];

  let result = "";
  for (let i = 0; i < N; i += 1) {
    result += Strs[i % 2];
  }

  return result;
}
