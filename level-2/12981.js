function solution(n, words) {
  let o = {};

  let i = 0;
  let _word = "";
  while (i < words.length) {
    let word = words[i];

    if (o[word]) return res(i);
    if (_word && _word[_word.length - 1] !== word[0]) return res(i);

    o[word] = true;
    _word = word;

    i += 1;
  }

  // no problem
  return [0, 0];

  function res(i) {
    return [(i % n) + 1, (i / n + 1) << 0];
  }
}
