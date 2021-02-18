// wip
function solution(info, query) {
  let h = {
    java: 1,
    python: 2,
    cpp: 4,
    backend: 8,
    frontend: 16,
    junior: 32,
    senior: 64,
    pizza: 128,
    chicken: 256,
  };

  let _info = {};
  info.map((s) =>
    s.split(" ").reduce((k, c) => {
      if (h[c]) {
      } else _info[k] = [c];

      return k;
    }, 0)
  );

  let _query = [];
  query.map((s) =>
    s.split(" ").reduce((k, c) => {
      if (h[c]) k += h[c];
      else if (!isNaN(+c)) _query.push([k, c]);

      return k;
    }, 0)
  );

  let res = [];
  _query.forEach((a) => {
    // ...
  });

  console.log(_query);
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
