function solution(A, B) {
  A.sort((a, b) => a - b); // ascending
  B.sort((a, b) => b - a); // descending

  let result = 0;
  for (let i = 0; i < A.length; i += 1) {
    result += A[i] * B[i];
  }

  return result;
}
