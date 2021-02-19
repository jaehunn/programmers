// wip
function solution(n, nodes) {
  let A = Array(n).fill(false);

  let res = 0;
  for (let i = 0; i < n; i += 1) {
    if (A[i]) continue;

    dfs(i);

    res += 1;
  }

  return res;

  function dfs(i) {
    A[i] = true;

    let curr = nodes[i];
    for (let j = 0; j < n; j += 1) {
      if (A[j]) continue;

      let next = curr[j];
      if (next) dfs(j); // next depth
    }
  }
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
