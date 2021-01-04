// wip
function solution(dartResult) {
  const t = {
    S: 1,
    D: 2,
    T: 3,
  };

  let r = [];
  let s = "";
  dartResult.split("").forEach((v, i, l) => {
    if (+v >= 0) s += v;
    if (t[v]) {
      r.push(Math.pow(+s, t[v]));

      s = "";
    }

    if (v === "*") r = r.map((v, i) => (i >= r.length - 2 ? v * 2 : v));
    if (v === "#") r[r.length - 1] *= -1;
  });

  return r.reduce((s, v) => (s += v), 0);
}

console.log(solution("1D2S3T*"));
