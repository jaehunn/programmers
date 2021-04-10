// f(1) -> 1
// f(2) -> 2
// f(3) -> 4
// f(4) -> 11: 3*3 + f(1)
//      -> 3: 3*0 + f(3)
//      -> 0: f(3) + f(1) break

function solution(N) {
  const enumTable = ["4", "1", "2"];

  let result = "";

  let n = 0;
  while (N) {
    n = N % 3;

    N = (N / 3) << 0;

    if (n === 0) N -= 1;

    result = enumTable[n] + result;
  }

  return result;
}
