function solution(str) {
  return str
    .split(" ")
    .map((word) => convertWord(word))
    .join(" ");
}

function convertWord(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i += 1) {
    newWord += isEven(i) ? word.charAt(i).toUpperCase() : word.charAt(i).toLowerCase();
  }

  return newWord;
}

function isEven(num) {
  return num % 2 === 0;
}
