function solution(brown, yellow) {
  let l = brown + yellow;

  for (let i = 3; i <= Math.sqrt(l); i += 1) {
    if (!(l % i)) {
      let row = l / i;
      let col = i;

      if (
        (row - 2) * (col - 2) === yellow &&
        2 * row + 2 * (col - 2) === brown
      ) {
        return [l / i, i];
      }
    }
  }
}
