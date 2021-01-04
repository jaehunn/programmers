// wip
function solution(N, stages, l = stages.length) {
  let o = {};
  stages.forEach((v) => (o[v] ? (o[v] += 1) : (o[v] = 1)));

  let r = Array(N)
    .fill(0)
    .map((v, i) => [
      i + 1,
      o[i + 1] ? o[i + 1] / (l -= o[i] || 0) || o[i + 1] : 0,
    ])
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1;

      return a[1] > b[1] ? -1 : 1;
    })
    .map((v) => v[0]);

  return r;
}

console.log(solution(5, [1, 2, 2, 1, 3]));
