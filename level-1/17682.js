// wip
function solution(dartResult) {
  const Bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  const Option = {
    "*": 2,
    "#": -1,
  };

  let result = [];
  let s = "";
  Array.from(dartResult).forEach((value, index, dataResult) => {
    if (Bonus[value]) {
      r.push(Math.pow(+s, Bonus[v]));

      s = "";
    }

    if (Option[value]) {
      if (v === "*") r = r.map((v, i) => (i >= r.length - 2 ? v * 2 : v));
      if (v === "#") r[r.length - 1] *= -1;
    } else {
      s += v;
    }
  });

  return r.reduce((s, v) => (s += v), 0);
}
