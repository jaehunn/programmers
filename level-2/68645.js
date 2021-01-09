function solution(n) {
  let r = [];
  let mt = Array(n)
    .fill(0)
    .map((v, i) => Array(i + 1).fill(-1));

  // pattern: left side -> bottom side -> right side
  let dxs = [1, 0, -1];
  let dys = [0, 1, -1];
  let dI = 0;

  // n = 5)
  // L = 5 + 4 + 3 + 2 + 1
  // = n(n + 1) / 2
  let l = (n * (n + 1)) / 2;

  let i = 0;
  let x = 0;
  let y = 0;

  while (i < l) {
    mt[x][y] = i + 1;

    i += 1;

    // check variable
    let _x = x + dxs[dI];
    let _y = y + dys[dI];

    // out of range + already exist
    if (_x >= n || _y >= n || _x < 0 || _y < 0 || ~mt[_x][_y]) {
      dI = (dI + 1) % 3; // normalize

      x += dxs[dI];
      y += dys[dI];

      continue;
    }

    // next
    x = _x;
    y = _y;
  }

  for (let cols of mt) {
    for (let v of cols) {
      r.push(v);
    }
  }

  return r;
}
