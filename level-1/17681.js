function solution(N, arr1, arr2) {
  return Array(N)
    .fill(0)
    .map((row, i) => arr1[i] | arr2[i]) // bit operation
    .map((row) => {
      let binaryRow = row.toString(2);

      while (binaryRow.length < N) binaryRow = "0" + binaryRow;

      let resultRow = "";
      for (const block of binaryRow) {
        resultRow += block === "0" ? " " : "#";
      }

      return resultRow;
    });
}
