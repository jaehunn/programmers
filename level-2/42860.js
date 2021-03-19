// wip
function solution(name) {
  const h = {
    A: 0, // pass
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 12,
    P: 11,
    Q: 10,
    R: 9,
    S: 8,
    T: 7,
    U: 6,
    V: 5,
    W: 4,
    X: 3,
    Y: 2,
    Z: 1,
  };

  let stk = [];
  for (const c of name) {
    if (c === "A" && stk[stk.length - 1] === "A") stk.pop();

    stk.push(c);
  }

  // cursor
  let r = stk[1] === "A" ? stk.length - 2 : stk.length - 1;

  return stk.reduce((r, c) => (r += h[c]), r);
}
