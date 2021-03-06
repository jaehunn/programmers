function solution(board) {
  if (board.length === 1) return 1; // 1x1

  let maxSide = 0;
  for (let i = 1; i < board.length; i += 1) {
    for (let j = 1; j < board[0].length; j += 1) {
      if (board[i][j]) board[i][j] = Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;

      maxSide = Math.max(maxSide, board[i][j]); // update
    }
  }

  return maxSide ** 2; // square area
}
