function solution(str) {
  const items = str.split(" ").sort((a, b) => a - b);

  return [items[0], items[items.length - 1]].join(" ");
}
