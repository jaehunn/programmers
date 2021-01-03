process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  const b = Number(n[1]);

  let s = Array(a).fill("*").join("");
  for (let i = 0; i < b; i += 1) console.log(s);
});
