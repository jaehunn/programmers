function solution(number, k) {
  let stk = [];

  // number order
  // k = remove number
  for (let c of number) {
    while (k && stk[stk.length - 1] < +c) {
      stk.pop();

      k -= 1;
    }

    stk.push(+c);
  }

  return stk.join("");
}
