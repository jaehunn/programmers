// wip
function solution(number, k) {
  let l = number.length;
  let r = Array(l - k)
    .fill()
    .map((v, i) => l - i - 1)
    .reverse();

  // number: [1 9 2 4], k = 2
  // r     : [2, 3]

  // 1 *9 <- 2
  // 2 *4 <- 3
  // 94
  let e = -1;
  for (let i = 0; i < r.length; i += 1) {
    let mI = r[i];
    let m = +number.charAt(mI);

    for (let j = r[i] - 1; j > e; j -= 1) {
      let n = +number.charAt(j);

      // update
      if (m <= n) {
        mI = j;

        m = +number.charAt(mI);
      }
    }

    r[i] = mI;
    e = r[i];
  }

  return r.map((idx) => number.charAt(idx)).join("");
}

console.log(solution("4177252841", 4));
