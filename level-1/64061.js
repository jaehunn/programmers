// refactoring
// move[i] -> board[top][i]
function solution(board, moves) {
  let stk = [];
  let res = 0;

  for (let move of moves) {
    let col = move - 1;
    let row = 0;
    for (; row < board.length; row += 1) {
      if (board[row][col] !== 0) break;
    }

    let v;
    if (row === board.length) v = 0;
    else v = board[row][col];

    if (v !== 0) {
      if (stk.length === 0) stk.push(v);
      else if (stk[stk.length - 1] === v) {
        stk.pop();

        res += 2;
      } else stk.push(v);

      board[row][col] = 0;
    }
  }

  return res;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
