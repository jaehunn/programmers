function solution(s) {
  if (~s.indexOf(".")) return false; // decimal point
  if (~s.indexOf("e") || ~s.indexOf("E")) return false; // exponential
  if (!s.replace(/ /gi, "") || isNaN(+s)) return false; // empty, string

  return s.length === 4 || s.length === 6; // length
}

// +0.0 -> 0
// +' ' -> 0
// +'1e' -> 0

console.log(solution("1E22"));
