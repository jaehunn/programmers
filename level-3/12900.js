function solution(n) {
  if (n < 3) return n;

  let pre = 1;
  let cur = 2;
  let i = n;
  while (i > 2) {
    [pre, cur] = [cur, (pre + cur) % 1000000007];

    i -= 1;
  }

  return cur;
}
