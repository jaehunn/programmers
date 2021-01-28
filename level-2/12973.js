function solution(s) {
  let stk = [];

  for (let c of s) {
    if (stk[stk.length - 1] === c) stk.pop();
    else stk.push(c);
  }

  return stk.length ? 0 : 1;
}
