function solution(N) {
  let result = [];

  let num = N;
  while (num > 0) {
    result.push(getLeastDigit(num));

    num = removeLeastDigit(num);
  }

  return result;
}

function getLeastDigit(num) {
  return num % 10;
}

function removeLeastDigit(num) {
  return (num / 10) << 0;
}
