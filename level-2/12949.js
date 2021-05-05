function solution(A, B) {
  let M = A.length;
  let N = B[0].length;

  // M x N = (M x P) x (P x N)
  const result = new Array(M)
    .fill(null)
    .map((_, rowIndex) =>
      new Array(N)
        .fill(0)
        .map((_, colIndex) =>
          A[rowIndex].reduce((accResultItem, aItem, rowIndex) => accResultItem + aItem * B[rowIndex][colIndex], 0)
        )
    );

  return result;
}
