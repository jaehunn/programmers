function solution(s) {
  let o = 0;
  let c = 0;

  for (const v of s) {
    v === "(" ? (o += 1) : (c += 1);

    if (o < c) return false;
  }

  return o === c;
}
