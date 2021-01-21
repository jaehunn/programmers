function solution(n) {
  let r = n + 1;
  while (1) {
    if (getOneBits(r) === getOneBits(n)) return r;

    r += 1;
  }
}

function getOneBits(n) {
  let n1 = 0;
  let i = 1;
  while (i < n) {
    if (n & i) n1 += 1;

    i <<= 1;
  }

  return n1;
}
