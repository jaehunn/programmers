function solution(s) {
  let r = [0, 0];
  helper(s, r);

  return r;
}

function helper(s, r) {
  if (s === "1") return;

  // 1. remove zero
  let _s = "";
  for (let c of s) {
    if (c === "1") _s += "1";
    else r[1] += 1;
  }

  // 2. to binary
  let l = _s.length;
  _s = l.toString(2);

  // 3. increase conversion
  r[0] += 1;

  return helper(_s, r);
}
