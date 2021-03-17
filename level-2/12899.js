function solution(n) {
  let r = "";
  const T = ["4", "1", "2"];

  let _n = 0;
  while (n) {
    _n = n % 3;

    r = T[_n] + r;

    n = (n / 3) << 0;

    if (_n === 0) n -= 1;
  }

  return r;
}
