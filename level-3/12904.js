// idea
function solution(s) {
  if (s === Array.from(s).reverse().join("")) return s.length;

  return Math.max(solution(s.substring(0, s.length - 1)), solution(s.substring(1, s.length)));
}
