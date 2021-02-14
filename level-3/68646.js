function solution(A, len = A.length) {
  if (len < 3) return len;

  let l = Infinity;
  let r = Infinity;

  let o = {};
  for (let i = 0; i < len; i += 1) {
    if (l > A[i]) l = A[i];
    if (r > A[len - 1 - i]) r = A[len - 1 - i];

    if (!o[l]) o[l] = true;
    if (!o[r]) o[r] = true;
  }

  return Object.keys(o).length;
}
