// wip
function solution(m, n, A) {
  // lexical
  let M = Array(A.length)
    .fill()
    .map((row, i) => Array.from(A[i]));

  return helper();

  function helper(N = []) {
    // find
    for (let i = 1; i < M.length; i += 1) {
      for (let j = 1; j < M[0].length; j += 1) {
        let c = M[i][j];

        if (M[i - 1][j - 1] === c && M[i - 1][j] === c && M[i][j - 1] === c)
          N.push([i, j]);
      }
    }

    // break
    if (!N.length) return [...M].filter((v) => v === "").length; // ""(empty) remove

    // set
    for (let pos of N) {
      const [row, col] = pos;

      M[row - 1][row - 1] = 0;
      M[row][col - 1] = 0;
      M[row - 1][col] = 0;
      M[row][col] = 0;
    }

    // sort
    for (let i = 0; i < M[0].length; i += 1) {
      let j = 0;
      let k = M.length - 1;

      while (1) {
        while (M[j][i]) j += 1; // find one
        while (M[k][i]) k -= 1; // find zero

        console.log(i, j, k);

        // j - 1: one
        // i: zero
        if (j === 0) break;

        [M[j - 1][i], M[k][i]] = [M[k][i], M[j - 1][i]];

        j = 0;
        console.log(M);
      }
    }
  }
}

// m	n	board	                        answer
// 4	5	[CCBDE, AAADE, AAABF, CCBBF]	14

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
