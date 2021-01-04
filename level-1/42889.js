function solution(N, stages, l = stages.length) {
  // return Array.from({ length: N })
  return Array(N)
    .fill(0)
    .map((v, i) => {
      let l = stages.length;
      stages = stages.filter((s) => s > i + 1); // update

      return { i: i + 1, v: (l - stages.length) / l };
    })
    .sort((a, b) => (a.v == b.v ? a.i - b.i : b.v - a.v)) // vs. a < b ? -1 : 1
    .map((v) => v.i);
}
