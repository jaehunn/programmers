function solution(word) {
  const stk = [];

  for (const letter of word) {
    if (stk[stk.length - 1] === letter) stk.pop();
    else stk.push(letter);
  }

  return stk.length === 0 ? 1 : 0;
}
