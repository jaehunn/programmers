function solution(s) {
  if (~s.indexOf(".")) return false; // 소수점
  if (~s.indexOf("e") || ~s.indexOf("E")) return false; // 지수
  if (!s.replace(/ /gi, "") || isNaN(+s)) return false; // 공백과 문자열

  return s.length === 4 || s.length === 6;
}
