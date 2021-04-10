function solution(str) {
  let open = 0;
  let close = 0;

  for (const bracket of str) {
    bracket === "(" ? (open += 1) : (close += 1);

    if (open < close) return false; // detect
  }

  return open === close;
}
