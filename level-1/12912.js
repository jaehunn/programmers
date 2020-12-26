function solution(a, b) {
  if (a > b) [a, b] = [b, a];

  let l = b - a + 1;

  return l % 2
    ? (a + b) * ((l / 2) << 0) + (a + ((l / 2) << 0))
    : (a + b) * ((l / 2) << 0);
}
