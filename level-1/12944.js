function solution(arr) {
  let l = 0;
  let r = arr.length - 1;
  let s = 0;
  while (l < r) s += arr[l++] + arr[r--];

  return arr.length % 2 ? (s + arr[l]) / arr.length : s / arr.length;
}
