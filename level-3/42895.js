// wip
function solution(N, number) {
  let r = -1;

  dfs();

  return r;

  function dfs(exp = 0, cur = 0) {
    if (exp > 8) return;

    if (cur === number) {
      if (r === -1 || exp < r) r = exp;

      return;
    }

    let n = 0;

    for (let i = 1; i <= 8; i += 1) {
      n = n * 10 + N; // N NN NNN NNNN NNNNN...

      dfs(exp + i, cur + n);
      dfs(exp + i, cur - n);
      dfs(exp + i, cur * n);
      dfs(exp + i, cur / n);
    }
  }
}

console.log(solution(5, 12));
