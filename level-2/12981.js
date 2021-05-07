function solution(n, words) {
  const Hash = {};

  let beforeWord = "";
  for (let index = 0; index < words.length; index += 1) {
    let currentWord = words[index];

    if (Hash[currentWord]) return getResult(n, index);
    if (beforeWord && beforeWord[beforeWord.length - 1] !== currentWord[0]) return getResult(n, index);

    Hash[currentWord] = true;
    beforeWord = currentWord;
  }

  return [0, 0]; // no problem
}

function getResult(n, index) {
  const targetNo = (index % n) + 1;
  const targetOrder = ((index / n) << 0) + 1;

  return [targetNo, targetOrder];
}
