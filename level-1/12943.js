function solution(num) {
  let count = 0;
  while (num !== 1) {
    num = isEven(num) ? num / 2 : 3 * num + 1;

    count += 1;

    if (count > 500) return -1;
  }

  return count;
}

function isEven(num) {
  return num % 2 === 0;
}
