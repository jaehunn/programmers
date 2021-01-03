function solution(num) {
  let c = 0;
  while (num !== 1 && c <= 500) {
    num = num % 2 ? 3 * num + 1 : num / 2;

    c += 1;
  }

  return c > 500 ? -1 : c;
}
