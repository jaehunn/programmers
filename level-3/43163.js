// 알파벳을 비트로 표현해 관계를 아는 것이 불가능하다. -> 중복되는 알파벳이 존재한다. (aaa: 3, aab: 4)

// bfs
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let level = 0;

  const V = new Set(); // visited
  const Q = [begin]; // queue
  let WQ = []; // wait queue

  while (Q.length) {
    const targetWord = Q.shift();

    V.add(targetWord);

    // forEach 는 조건 탈출이 없다.
    for (let i = 0; i < words.length; i += 1) {
      const word = words[i];

      if (!V.has(word) && isOneDiff(word, targetWord)) {
        if (word === target) return level + 1;

        WQ.push(word);
      }
    }

    if (!Q.length) {
      level += 1;

      Q.push(...WQ);

      WQ = [];
    }
  }

  return level;
}

function isOneDiff(word, other) {
  let diffCount = 0;

  for (let i = 0; i < word.length; i += 1) {
    if (word.charAt(i) !== other.charAt(i)) diffCount += 1;

    if (diffCount > 1) return false;
  }

  return diffCount === 1;
}

// dfs
// wip

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
