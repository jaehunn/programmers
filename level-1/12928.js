function solution(N) {
  if (N < 2) return N;

  let result = 0;

  let num = 1;
  while (num <= N) {
    if (isFactor(N, num)) result += num;

    num += 1;
  }

  return result;
}

function isFactor(num, factor) {
  return num % factor === 0;
}
