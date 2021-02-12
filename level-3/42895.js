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

function solution(N, number) {
  const cache = new Array(9).fill(0).map(() => new Set());

  for (let i = 1; i < 9; i++) {
    cache[i].add("1".repeat(i) * N);

    for (let j = 1; j < i; j++) {
      for (const arg1 of cache[j]) {
        for (const arg2 of cache[i - j]) {
          cache[i].add(arg1 + arg2);
          cache[i].add(arg1 - arg2);
          cache[i].add(arg1 * arg2);
          cache[i].add((arg1 / arg2) >> 0);
        }
      }
    }
    if (cache[i].has(number)) return i;
  }
  return -1;
}
