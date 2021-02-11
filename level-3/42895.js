// 1 11 111 1111
// N NN NNN NNNN
// N 2N 3N 4N
// etc

// wip
function solution(N, number) {
  let r = Array(number + 1).fill(0);

  for (let i = 1, j = 2, k = 1; i <= number; i += 1) {
    if ((i / N) << 0 === k) {
      // ...
    } else if (!(i % N)) {
      r[i] = i / N;
    } else if (i === k) {
      r[i] = j;

      j += 1;
      k = k * 10 + 1; // 1 11 111...
    } else r[i] = r[i - 1] + 1;
  }

  return r[number] > 8 ? -1 : r[number];
}

solution(5, 55);
