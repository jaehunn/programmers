// N = 8, A = 4, B = 7
// 0 0 / 0 1 / 0 0 / 1 0 (1, 3)
// 0 1 / 0 1 (0, 1)
// 1 / 1 (0, 0) break
function solution(n, a, b) {
  // group
  let i = ((a - 1) / 2) << 0;
  let j = ((b - 1) / 2) << 0;

  let r = 1;
  while (i !== j) {
    i = (i / 2) << 0;
    j = (j / 2) << 0;

    r += 1;
  }

  return r;
}
