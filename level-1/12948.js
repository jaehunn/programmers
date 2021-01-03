function solution(phone_number) {
  return Array.from(phone_number)
    .map((v, i) => (i < phone_number.length - 5 ? "*" : v))
    .join("");
}
