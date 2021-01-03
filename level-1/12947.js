function solution(x) {
  let s = x + "";

  let r = 0;
  for (const n of s) {
    r += +n;
  }

  return x % r ? false : true;
}
