function solution(board, moves) {
  let result = 0;

  let bucket = [];
  for (const move of moves) {
    let row = 0;
    let col = move - 1;

    const item = getItem(row, col);

    if (item === 0) continue;

    addItem(item);
  }

  return result;

  function getItem(row, col) {
    while (row < board.length) {
      if (board[row][col] > 0) {
        const item = board[row][col];

        board[row][col] = 0;

        return item;
      }

      row += 1;
    }

    return 0;
  }

  function addItem(item) {
    if (bucket.length > 0 && bucket[bucket.length - 1] === item) {
      bucket.pop();

      result += 2;
    } else bucket.push(item);
  }
}
