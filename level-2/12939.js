function solution(s) {
  let _s = s.split(" ");

  _s.sort((a, b) => a - b);

  return [_s[0], _s[_s.length - 1]].join(" ");
}
