// wip
function solution(board, moves) {
  let result = 0;

  let stack = [];
  for (const move of moves) {
    let row = 0;
    let col = move - 1;

    const item = getItem(row, col);

    if (isEmpty(item)) continue;

    pushStack(item);
  }

  return result;

  function pushStack(item) {
    if (stack.length > 0 && stack[stack.length - 1] === item) {
      stack.pop();

      result += 2;
    } else stack.push(item);
  }

  function getItem(row, col) {
    for (; row < board.length; row += 1) {
      if (board[row][col] > 0) {
        const item = board[row][col];

        setBoard(row, col, 0);

        return item;
      }
    }

    return 0;
  }

  function setBoard(row, col, value) {
    board[row][col] = value;
  }

  function isEmpty(item) {
    if (item === 0) return true;

    return false;
  }
}
