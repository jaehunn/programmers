// 알파벳을 비트로 표현해 관계를 아는 것이 불가능하다. -> 중복되는 알파벳이 존재한다. (aaa: 3, aab: 4)

// bfs
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let result = 0; // 답을 찾았을 때, 트리의 레벨이 결과가 된다.
  let nextLevel = []; // 전부 비워야하는 순간이있다.

  const V = new Set(); // 방문한 노드를 체크해야한다.
  const Q = [begin];

  while (Q.length) {
    const targetWord = Q.shift();

    V.add(targetWord);

    if (targetWord === target) return result;

    // 방문하지않은 노드면서 알파벳이 하나만 다른 단어들을 찾는다.
    for (let i = 0; i < targetWord.length; i += 1) {
      let letter = splicedWord(targetWord, i);
      let matched = words.filter((v) => !V.has(v) && splicedWord(v, i) === letter);

      nextLevel.push(...matched);
    }

    // 같은 레벨에 해당하는 단어들을 모두 순회했다면, 다음 레벨의 단어들을 큐에 복사한다.
    if (!Q.length) {
      result += 1;

      Q.push(...nextLevel);
      nextLevel = [];
    }
  }

  return result;
}

function splicedWord(word, i) {
  const wordToArray = word.split("");

  wordToArray.splice(i, 1);

  return wordToArray.join("");
}

// dfs
function _solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let result = [];

  dfs(begin, 0, 0, new Set());

  return result.length ? Math.min(...result) : 0;

  function dfs(targetWord, index, level, V) {
    if (index >= words.length) return;

    for (let i = 0; i < targetWord.length; i += 1) {
      let letter = splicedWord(targetWord, i);
      let matched = words.filter((v) => !V.has(v) && splicedWord(v, i) === letter);

      if (matched.includes(target)) {
        result.push(level + 1);

        return;
      }

      matched.map((v, j) => {
        const newV = new Set([...V]);

        newV.add(v);

        dfs(v, j, level + 1, newV);
      });
    }
  }
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
