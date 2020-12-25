function solution(arr, divisor) {
  const res = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);

  return res.length ? res : [-1];
}
