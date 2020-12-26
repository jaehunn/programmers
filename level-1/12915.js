function solution(strs, n) {
  return strs.sort((a, b) => {
    if (a.charAt(n) === b.charAt(n)) return a < b ? -1 : 1;

    return a.charAt(n) < b.charAt(n) ? -1 : 1;
  });
}
