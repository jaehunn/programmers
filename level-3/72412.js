// bit
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

  let _info = info.map((s) =>
    s.split(" ").reduce(
      (_s, v) => {
        if (isNaN(v)) _s[0] += h[v];
        else _s[1] += +v;

        return _s;
      },
      [0, 0]
    )
  );

  let _query = query.map((s) =>
    s
      .split(" ")
      .filter((v) => v !== "and")
      .reduce(
        (_s, v) => {
          if (v !== "-") {
            if (isNaN(v)) _s[0] += h[v];
            else _s[1] += +v;
          }

          return _s;
        },
        [0, 0]
      )
  );

  let res = [];
  _query.forEach((a) => {
    let c = 0;

    _info.forEach((b) => {
      // wip
    });

    res.push(c);
  });

  console.log(res);
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
