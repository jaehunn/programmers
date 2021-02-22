// bfs
function solution(n, E) {
  let D = new Array(n + 1).fill(0);
  let q = [1]; // root

  while (E.length) {
    let c = q.shift();

    for (let i = 0; i < E.length; i += 1) {
      let [a, b] = E[i];

      if (a === c || b === c) {
        let v = a === c ? b : a;

        if (!D[v]) {
          q.push(v);
          D[v] = D[c] + 1;
        }

        E.splice(i, 1);
        i -= 1;
      }
    }
  }

  return D.filter((d) => d === Math.max(...D)).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
