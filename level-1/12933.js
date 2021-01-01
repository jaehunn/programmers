function solution(n) {
  return +Array.from(n + "")
    .sort((a, b) => b - a)
    .map((v) => +v)
    .join("");
}
