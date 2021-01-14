// wip
function solution(p) {
  let r = "";
  let o = 0;
  let c = 0;
  let f = true;

  if (p.length === 0) return "";

  for (let i = 0; i < p.length; i += 1) {
    if (p[i] === "(") o += 1;
    if (p[i] === ")") c += 1;

    if (c > o) f = false;

    if (o === c) {
      if (f) {
        r += p.slice(0, i + 1);
        r += solution(p.slice(i + 1, p.length));

        return r;
      }

      r += "(";
      r += solution(p.slice(i + 1, p.length));
      r += ")";

      for (let j = 1; j < i; j += 1) {
        if (p[j] === ")") r += "(";
        if (p[j] === "(") r += ")";
      }

      return r;
    }
  }
}
