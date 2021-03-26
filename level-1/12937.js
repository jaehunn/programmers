function solution(num) {
  return isEven(num) ? "Even" : "Odd";
}

function isEven(num) {
  return num % 2 === 0;
}
