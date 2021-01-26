function solution(s) {
  if (s.length === 1 && isNaN(+s)) return s.toUpperCase();

  return s
    .split(" ")
    .map((s, i) => {
      let _s = "";

      s.split("").forEach((c, i) => {
        _s +=
          i === 0 && isNaN(+c) // first
            ? c.toUpperCase()
            : isNaN(+c) // not first + char
            ? c.toLowerCase()
            : (_s += c); // not first + int
      });

      return _s;
    })
    .join(" ");
}
