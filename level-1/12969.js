process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [Width, Height] = data.split(" ").map((value) => +value);

  const width = Array(Width).fill("*").join("");
  for (let index = 0; index < Height; index += 1) console.log(width);
});
