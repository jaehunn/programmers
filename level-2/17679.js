// wip
function solution(m, n, A) {
  const R = A.length;
  const C = A[0].length;

  let M = Array(R)
    .fill()
    .map((row, i) => Array.from(A[i]));

  let N = Array(R)
    .fill()
    .map(() => Array(C).fill(1));

  for (let i = 1; i < R; i += 1) {
    for (let j = 1; j < C; j += 1) {
      let c = M[i][j];

      if (M[i - 1][j - 1] === c && M[i - 1][j] === c && M[i][j - 1] === c) {
        N[i - 1][j - 1] = 0;
        N[i - 1][j] = 0;
        N[i][j - 1] = 0;
      }
    }
  }

  // sort
  let rI = 0;
  let cI = 0;
  while (rI < R && cI < C) {
    // find one
    if (N[rI][cI] === 1) {
      // find zero
      let i = R - 1;
      while (N[i][cI]) i -= 1;

      console.log(N, i);

      // swap
      //      if (i > rI)

      rI += 1;
    }

    cI += 1;
  }
}

// m	n	board	                        answer
// 4	5	[CCBDE, AAADE, AAABF, CCBBF]	14

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
