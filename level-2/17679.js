function solution(R, C, A) {
  // lexical
  let M = Array(R)
    .fill()
    .map((row, i) => Array.from(A[i]));

  return helper();

  function helper(N = []) {
    // find
    for (let i = 1; i < R; i += 1) {
      for (let j = 1; j < C; j += 1) {
        if (
          M[i][j] &&
          M[i - 1][j - 1] === M[i][j] &&
          M[i - 1][j] === M[i - 1][j - 1] &&
          M[i][j - 1] === M[i - 1][j]
        )
          N.push([i, j]);
      }
    }

    // break
    if (!N.length) return [].concat(...M).filter((v) => !v).length; // ""(empty) remove

    // set
    for (let pos of N) {
      const [row, col] = pos;

      M[row - 1][col - 1] = 0;
      M[row][col - 1] = 0;
      M[row - 1][col] = 0;
      M[row][col] = 0;
    }

    // sort
    for (let i = R - 1; i > 0; i -= 1) {
      if (!M[i].some((v) => !v)) continue; // current row's clear

      // find zero
      for (let j = 0; j < C; j += 1) {
        for (let k = i - 1; k >= 0; k -= 1) {
          if (!M[i][j] && M[k][j]) {
            [M[i][j], M[k][j]] = [M[k][j], M[i][j]];

            break;
          }
        }
      }
    }

    return helper();
  }
}
