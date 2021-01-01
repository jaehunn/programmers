function solution(n) {
  let r = [];

  while (n) {
    r.push(n % 10);

    n = (n / 10) << 0;
  }

  return r;
}
