function solution(relation) {
  let r = 0;

  for (let j = 0; j < relation[0].length; j += 1) {
    let o = {};
    let c = [];

    for (let i = 0; i < relation.length; i += 1) {
      let t = relation[i][j];

      // ... wip
    }

    if (Object.keys(o).length === relation.length) r += 1;

    console.log(o, r, c);
  }

  return r;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]); // 2
