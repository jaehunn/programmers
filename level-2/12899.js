// wip
function solution(n) {
  let r = "";
  const T = ["4", "1", "2"]; // [0 1 2]

  let _n = 0;
  while (n) {
    _n = n % 3;

    n = (n / 3) << 0;

    if (_n === 0) n -= 1; // 6 -> 2 -> *1

    r = T[_n] + r; // unshift
  }

  return r;
}

function _solution(n) {
  let result = "";

  let ternary = [...n.toString(3)].map((value) => +value);
}

console.log(_solution(9));
