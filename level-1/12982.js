function solution(d, budget) {
  d.sort((a, b) => a - b);

  let c = 0;
  let i = 0;
  while (d[i] <= budget) {
    budget -= d[i++];

    c += 1;
  }

  return c;
}
