// wip
function solution(info, query) {
  let h = { java: 1, python: 2, cpp: 4, backend: 8, frontend: 16, junior: 32, senior: 64, pizza: 128, chicken: 256 };

  let _info = [];
  info.map((s) =>
    s.split(" ").reduce((k, c, i, _s) => {
      let o = {};

      k += c;

      if (i !== _s.length - 1) {
        o["key"] = k;
        o["value"] = +_s[_s.length - 1];

        _info.push(o);
      }

      return k;
    }, "")
  );

  _info.sort((a, b) => (a.value < b.value ? -1 : a.value > b.value ? 1 : 0));

  let res = [];
  query.map((s) => {
    // wip
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
