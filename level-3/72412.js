// wip
function solution(info, query) {
  let b = ["java", "python", "cpp", "backend", "frontend", "junior", "senior", "pizza", "chicken"];

  let _info = cnv(info);
  let _query = cnv(query);

  let res = [];
  _query.forEach((a) => {
    let c = 0;

    _info.forEach((b) => {
      if (a[1] <= b[1]) {
        if ((a[0] | b[0]) === b[0]) c += 1;
      }
    });

    res.push(c);
  });

  return res;

  function cnv(items) {
    return items.map((s) =>
      s.split(" ").reduce(
        (_s, v) => {
          let bI = b.indexOf(v);

          if (~bI) _s[0] += 1 << bI;
          else if (!isNaN(+v)) _s[1] += +v;

          return _s;
        },
        [0, 0]
      )
    );
  }
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
