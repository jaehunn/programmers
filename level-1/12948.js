function solution(phoneNum, len = phoneNum.length) {
  return Array.from(phoneNum)
    .map((char, index) => (index < len - 4 ? "*" : char))
    .join("");
}
