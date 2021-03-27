function solution(x) {
  let str = x + "";

  const sum = getSum(str);

  return isFactor(x, sum);
}

function getSum(str) {
  let sum = 0;
  for (const char of str) {
    sum += +char;
  }

  return sum;
}

function isFactor(num, factor) {
  return num % factor === 0;
}
