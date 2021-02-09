// regexp
function solution(s) {
  let r = s
    .toLowerCase() // 1
    .replace(/[^\w-.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6

  let l = r.length;

  // repeat() 파라미터로 길이를 넣으면 갱신된 길이를 매번 얻어낸다.
  return l > 2 ? r : r + r.charAt(l - 1).repeat(3 - l);
}

function solution(s) {
  // 1
  // 2
  let _s = Array.from(s)
    .map((c) => c.toLowerCase())
    .filter(
      (c) =>
        c === "." ||
        c === "_" ||
        c === "-" ||
        c.match(/[0-9]/) ||
        c.match(/[a-z]/)
    );

  // 3
  let i = 0;
  while (i < _s.length) {
    if (_s[i] === "." && _s[i + 1] === ".") {
      _s.splice(i, 1);

      continue;
    }

    i += 1;
  }

  // 4
  if (_s[0] === ".") _s.shift();
  if (_s[_s.length - 1] === ".") _s.pop();

  // 5
  if (!_s.length) _s.push("a");

  // 6
  if (_s.length >= 16) _s.splice(15, _s.length - 15);
  if (_s[_s.length - 1] === ".") _s.pop();

  // 7
  while (_s.length <= 2) _s.push(_s[_s.length - 1]);

  return _s.join("");
}
