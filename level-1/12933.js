function solution(N) {
  let result = Array.from(N + "")
    .sort((a, b) => b - a)
    .map((value) => +value)
    .join("");

  return +result;
}
