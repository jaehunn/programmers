function solution(a, b) {
  let r = 0;

  for (let i = 0; i < a.length; i += 1) {
    r += a[i] * b[i];
  }

  return r;
}
