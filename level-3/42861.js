// kruskal(MST)
function solution(n, E) {
  let R = new Array(n).fill().map((_, i) => i); // parent

  E.sort((a, b) => a[2] - b[2]);

  let r = 0;
  let e = 0; // edges
  E.forEach(([_a, _b, d], i) => {
    let a = find(R, _a);
    let b = find(R, _b);

    if (a !== b) {
      if (a < b) R[b] = a;
      else R[a] = b;

      r += d;
      e += 1;
    }

    if (e === n - 1) return r;
  });

  return r;
}

function find(R, vtx) {
  if (R[vtx] === vtx) return vtx;

  return (R[vtx] = find(R, R[vtx]));
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
