// A = 65, Z = 90
// a = 97, z = 122

// wip
function solution(s, n) {
  return Array.from(s)
    .map((c) => {
      if (c === " ") return c;

      let cTn = c.charCodeAt();
      let _cTn = cTn + n;

      // a-z
      let t;
      if (cTn <= 90 && _cTn >= 90) {
        t = _cTn - 90;

        _cTn = t + 64;
      } else if (_cTn >= 122) {
        t = _cTn - 122;

        _cTn = t + 96;
      }

      return String.fromCharCode(_cTn);
    })
    .join("");
}

console.log(solution("a b z", 1));
