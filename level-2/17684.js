// wip
function solution(word) {
  let text = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let textI = 27;

  let r = [];
  for (let i = 0; i < word.length; i += 1) {
    let s = word[i];
    let sI = text[s];

    for (let j = i + 1; j < word.length; j += 1) {
      s += word[j];

      if (!text[s]) break;
      else sI = text[s];
    }

    if (s.length > 1) {
      text[s] = textI;

      textI += 1;

      i += s.length - 1; // KAO -> KA -> KA index
    }

    console.log(text, r);

    // last off 'one'
    if (i === word.length) break;

    r.push(sI);
  }

  return r;
}

solution("KAKAO");
