// wip
function solution(arr) {
  return helper(0, 0, arr.length, arr);
}

function helper(x, y, l, arr) {
  if (l === 1) {
    if (arr[x][y] === 1) return [0, 1]; // one

    return [1, 0]; // zero
  }

  let _l = l >> 1;

  let tL = helper(x, y, _l, arr); // top-left
  let tR = helper(x, y + _l, _l, arr); // top-right
  let bL = helper(x + _l, y, _l, arr); // bottom-left
  let bR = helper(x + _l, y + _l, _l, arr); // bottom-right

  let [zero, one] = sum(tL, tR, bL, bR);

  // all one OR all zero
  if (zero === 0 && one === 4) return [0, 1];
  else if (zero === 4 && one === 0) return [1, 0];

  return [zero, one];
}

function sum(...items) {
  return items.reduce((r, v) => [r[0] + v[0], r[1] + v[1]], [0, 0]);
}
