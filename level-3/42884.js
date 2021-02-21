// wip
function solution(R) {
  let _R = R.sort((a, b) => a[1] - b[1]);

  let res = [-30001];
  _R.forEach((c) => {
    if (res[res.length - 1] < c[0]) res.push(c[1]);
  });

  return res.length - 1;
}

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
