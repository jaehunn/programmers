// wip
function solution(arr1, arr2) {
  let m = arr1.length;
  let n = arr2[0].length;
  let r = []; // m x n

  for (let i = 0; i < m; i += 1) {
    let row = [];

    for (let j = 0; j < arr2.length; j += 1) {
      let c = [];

      for (let k = 0; k < n; k += 1) {
        c.push(arr2[k][j]);
      }

      row.push(helper(arr1[i], c));
    }

    r.push(row);
  }

  return r;
}

function helper(m, n) {
  let i = 0;
  let r = 0;
  while (i < m.length) {
    r += m[i] * n[i];

    i += 1;
  }

  return r;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
