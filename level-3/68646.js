// wip
function solution(A, l = A.length) {
  let r = [];
  for (let i = 0; i < l; i += 1) {
    let Ai = A.indexOf(A[i]);

    let p = helper(A.slice(0, Ai));
    let q = helper(A.slice(Ai + 1, A.length));

    if (p || q) r.push(A[i]);
  }

  return r;
}

function helper(items) {
  let i = 0;
  while (i < items.length) {
    if (items[i] < items[i + 1]) items.splice(i, 1);
    else items.splice(i + 1, 1);

    i += 1;
  }

  console.log(items);

  return items.length <= 1;
}

// [-16 27 65 -2 58 -92 -71 -68 -61 -33]
// []
