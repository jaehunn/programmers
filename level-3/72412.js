// 정보를 어떻게 저장할것인가?
function solution(info, query) {
  let h = {};

  let _info = info.map((s) => s.split(" "));
  let _query = query.map((s) => s.split(" ").filter((v) => v !== "and"));

  _info.forEach((_s, i) => {
    _s.forEach((v) => {
      if (!h[v]) h[v] = [i + 1];
      else h[v].push(i + 1);
    });
  });

  // wip
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
