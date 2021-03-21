function solution(word, length = word.length) {
  const midIndex = (length / 2) << 0;

  return isOdd(length) ? word.charAt(midIndex) : word.charAt(midIndex - 1) + word.charAt(midIndex);
}

function isOdd(num) {
  return num % 2;
}
