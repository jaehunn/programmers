function solution(n, t, m, p) {
  let i = 0;
  let s = "";
  while (i <= t * m) {
    s += i.toString(n);

    i += 1;
  }

  let r = "";
  let rI = p - 1;
  while (r.length < t) {
    let c = s.charAt(rI);

    r += isNaN(+c) ? c.toUpperCase() : c;

    rI += m; // m, 2m, 3m ...
  }

  return r;
}
