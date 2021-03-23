function solution(str) {
  return Array.from(str)
    .sort((a, b) => {
      if (a === b) return 0;

      return a > b ? -1 : 1;
    })
    .join("");
}
