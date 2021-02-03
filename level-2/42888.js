function solution(record) {
  let g = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  let o = {};
  let r = [];

  record.forEach((s) => {
    let [x, y, z] = s.split(" ");

    if (z) o[y] = z;

    if (g[x]) r.push([y, g[x]]);
  });

  return r.map((v) => `${o[v[0]]}${v[1]}`);
}
