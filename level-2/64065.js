// wip
function solution(s) {
  let _s = "";
  for (let c of s) {
    _s += c === "{" ? "[" : c === "}" ? "]" : c;
  }

  _s = new Function("return " + _s)().sort((a, b) => a.length - b.length);

  let r = [];
  for (let l of _s) {
    for (let v of l) {
      if (!r.includes(v)) r.push(v);
    }
  }

  return r;
}
