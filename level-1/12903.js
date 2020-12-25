function solution(s) {
  let midI = (s.length / 2) << 0;

  return s.length % 2 ? s[midI] : s[midI - 1] + s[midI];
}
