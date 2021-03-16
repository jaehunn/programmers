function solution(N, stages, l = stages.length) {
  return Array(N)
    .fill(0)
    .map((v, i) => {
      let l = stages.length;
      stages = stages.filter((s) => s > i + 1);

      return { i: i + 1, v: (l - stages.length) / l };
    })
    .sort((a, b) => (a.v == b.v ? a.i - b.i : b.v - a.v))
    .map((v) => v.i);
}
