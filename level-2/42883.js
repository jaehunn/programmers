function solution(number, k) {
  if (number.length === 1) return number;

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

  k && stk.splice(stk.length - k, k);

  return stk.join("");
}
