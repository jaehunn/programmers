function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let r = 0;
  let i = 0;
  while (i < A.length) {
    r += A[i] * B[i];

    i += 1;
  }

  return r;
}

// [1, 4, 2] [5, 4, 4]
// 1x5 + 4x4 + 2x4

// [1, 2] [3, 4]
// 1x4 + 2x3
