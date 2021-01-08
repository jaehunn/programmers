// wip
function solution(n) {
  let mt = Array(n)
    .fill(0)
    .map((v, i) => Array(i + 1).fill(-1));

  // left -> right -> up
  let x = 0;
  let y = 0;
  let dxs = [1, 0, -1];
  let dys = [0, 1, -1];

  // n = 5, 5 + 4 + 3 + 2 + 1
  // = n(n + 1) / 2
  let l = (n * (n + 1)) / 2;

  let i = 0;
  while (i < l) {
    mt[x][y] = i;

    i += 1;
  }
}

console.log(solution(3));
