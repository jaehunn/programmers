// 8 -> 4 -> 2 -> 1(+1)
// 7 -> 6(+1) -> 3 -> 2(+1) -> 1(+1)
// 5 -> 4(+1) -> 2 -> 1(+1)
// 6 -> 3 -> 2(+1) -> 1(+1)
function solution(n, r = 0) {
  if (!n) return r;

  return n % 2 ? solution(n - 1, r + 1) : solution(n / 2, r);
}
