// wip
function solution(R) {
  R.sort((a, b) => a[1] - b[1]);

  let r = [-30001];
  R.forEach((c) => {
    if (r[r.length - 1] < c[0]) r.push(c[1]);
  });

  return r.length - 1;
}

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
