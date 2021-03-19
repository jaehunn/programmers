function solution(numbers, target) {
  let res = 0; // lexical
  dfs(numbers, 0, target);

  return res;

  function dfs(numbers, cur, target) {
    if (numbers.length === 0) {
      if (cur === target) res += 1;

      return;
    }

    let first = numbers[0];

    dfs(numbers.slice(1), cur + first, target);
    dfs(numbers.slice(1), cur - first, target);
  }
}
