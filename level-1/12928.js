function solution(n) {
  let r = 0;

  let i = 1;
  while (i <= n) {
    if (!(n % i)) r += i;

    i += 1;
  }

  return r;
}
