// wip
// bfs, dfs
function solution(s, e, W) {
  if (!W.includes(e)) return 0;

  // lexical
  const H = Array.from("abcdefghijklmnopqrstuvwxyz").reduce((H, v, i) => {
    H[v] = 1 << i;

    return H;
  }, {});

  let r = 0; // level

  let V = new Set();

  let c = []; // current level items
  let q = [s]; // root
  while (q.length) {
    let v = q.shift();

    V.add(v);

    if (v === e) return r;

    W.forEach((w) => {
      if (!V.has(w) && isDiffOne(w, v)) c.push(w);
    });

    if (!q.length) {
      r += 1;

      q.push(...c);
      c = [];
    }
  }

  return r;

  function isDiffOne(a, b) {
    let _a = strToNum(a);
    let _b = strToNum(b);

    let res = _a & ~_b;

    return res === (res & -res); // isPower
  }

  function strToNum(s) {
    return Array.from(s).reduce((r, v) => (r += H[v]), 0);
  }
}
