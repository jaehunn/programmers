function solution(arr1, arr2) {
  let m = arr1.length;
  let n = arr2[0].length;

  // (m x p) x (p x n) = m x n
  let res = Array(m)
    .fill(0)
    .map((r, i) =>
      Array(n)
        .fill(0)
        .map((c, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0))
    );

  return res;
}
