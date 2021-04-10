function solution(n) {
  let result = n + 1;
  while (result <= 1000000) {
    if (getOneBits(result) === getOneBits(n)) return result;

    result += 1;
  }

  return -1; // failed
}

function getOneBits(n) {
  let bitCounts = 0;

  let i = 1;
  while (i < n) {
    if (n & i) bitCounts += 1;

    i <<= 1;
  }

  return bitCounts;
}
