function solution(relation) {
  let cols = relation[0].length;

  let l = 1 << cols;
  let r = new Set();
  for (let i = 1; i < l; i += 1) {
    let _relation = relation.map((row) =>
      row.filter((s, j) => i & (1 << j)).join("")
    );

    let c = new Set(_relation);

    if (_relation.length === c.size) r.add(i);
  }

  for (let x of r) {
    for (let y of r) {
      if (x === y) continue;

      if ((x & y) === x) r.delete(y); // AND logical operation
    }
  }

  return r.size;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]); // 2
