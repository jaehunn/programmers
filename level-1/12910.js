function solution(items, divisor) {
  const result = items.filter((item) => isFactor(item, divisor)).sort((a, b) => a - b);

  return isEmpty(result) ? [-1] : result;
}

function isEmpty(items) {
  return items.length === 0;
}

function isFactor(num, factor) {
  return num % factor === 0;
}
