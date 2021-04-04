// toString(): number -> string
// parseInt(): string -> number

function solution(n) {
  const ternary = n.toString(3);
  const reverseTernary = Array.from(ternary).reverse().join("");

  return parseInt(reverseTernary, 3);
}
